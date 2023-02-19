const { getDoc, FieldValue } = require('firebase/firestore');

const { db } = require('../../firebaseConfig');
const detectToxicity = require('../../utils/detectToxicity');
const generatePostTitle = require('../../utils/generatePostTitle');
const uploadPostImage = require('../../utils/uploadPostImage');

const createPost = async(req, res, next) => {
  if (detectToxicity) {
    res.send('Post failed; this text is toxic.');
  } else {
    const imageFilePath = req.body.image ? uploadPostImage(req.body.image) : '';
    const postTitle = await generatePostTitle(req.body.text);

    const newPostRef = db.collection('posts').doc();
    await newPostRef.set({
      author: req.body.user,
      datePosted: Timestamp.fromDate(new Date()),
      image: imageFilePath,
      numLikes: 0,
      text: req.body.text,
      title: postTitle,
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
