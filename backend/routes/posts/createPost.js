const axios = require('axios');
const { arrayUnion, collection, doc, getDoc, setDoc, updateDoc, Timestamp } = require('firebase/firestore');
const { getDownloadURL } = require('firebase/storage');

const { db } = require('../../firebaseConfig');
const detectToxicity = require('../../utils/detectToxicity');
const generatePostTitle = require('../../utils/generatePostTitle');
const uploadPostImage = require('../../utils/uploadPostImage');

const createPost = async(req, res, next) => {
  let toxicity;
  await detectToxicity(req.body.message)
    .then((toxicityRes) => toxicity = toxicityRes);
  
  if (toxicity.body.classifications[0].prediction === 'Toxic') {
    res.send('Post failed; this text is toxic.');
  } else {
    let imageUrl;
    if (req.body.picture == {}) {
      imageUrl = await uploadPostImage('test.jpg', req.body.picture['0']);
    } else {
      const generatedImage = await axios(`https://victoriadarosa.autocode.dev/ellehacks-2023-image-generator@dev/?caption=${req.body.message}`);
      const uploadRes = await uploadPostImage('test.jpg', generatedImage);
      imageUrl = await getDownloadURL(uploadRes);
    }

    let postTitle;
    await generatePostTitle(req.body.message)
      .then((titleRes) => postTitle = titleRes.body.generations[0].text.trim());

    const newPostRef = doc(collection(db, 'posts'));
    await setDoc(newPostRef, {
      author: req.body.user,
      datePosted: Timestamp.fromDate(new Date()),
      image: imageUrl,
      numLikes: 0,
      text: req.body.message,
      title: postTitle.substring(0, postTitle.length - 2),
      userLikes: []
    });

    const gardenRef = doc(db, 'gardens', req.body.garden);
    const gardenSnap = await getDoc(gardenRef);
    if (gardenSnap.exists()) {
      await updateDoc(gardenRef, {
        posts: arrayUnion(newPostRef.id)
      });
    } else {
      console.log('Garden not found.');
    }

    res.send(newPostRef.id);
  }
};

module.exports = createPost;
