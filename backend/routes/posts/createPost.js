const { getDoc, FieldValue } = require('firebase/firestore');

const { db } = require('../../firebaseConfig');
const detectToxicity = require('../../utils/detectToxicity');
const generatePostTitle = require('../../utils/generatePostTitle');
const uploadPostImage = require('../../utils/uploadPostImage');

const createPost = async(req, res, next) => {
  let toxicity;
  await detectToxicity(req.body.postText)
    .then((toxicityRes) => toxicity = toxicityRes);
  
  if (toxicity.body.classifications[0].prediction === 'Toxic') {
    res.send('Post failed; this text is toxic.');
  } else {
    console.log(req.body);
    const imageUrl = req.body.postImage ? await uploadPostImage(req.body) : '';

    let postTitle;
    await generatePostTitle(req.body.message)
      .then((titleRes) => postTitle = titleRes.body.generations[0].text.trim());

    const newPostRef = db.collection('posts').doc();
    await newPostRef.set({
      author: req.body.user,
      datePosted: Timestamp.fromDate(new Date()),
      image: imageUrl,
      numLikes: 0,
      text: req.body.message,
      title: postTitle.substring(postTitle.length - 2),
      userLikes: []
    });

    const gardenRef = db.collection('gardens').doc(req.body.garden);
    const gardenSnap = await getDoc(gardenRef);
    if (gardenSnap.exists()) {
      await gardenRef.update({
        posts: FieldValue.arrayUnion(newPostRef.id)
      });
    } else {
      console.log('Garden not found.');
    }

    res.send(newPostRef.id);
  }
};

module.exports = createPost;
