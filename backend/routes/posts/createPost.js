const { getDoc, FieldValue } = require('firebase/firestore');

const { db } = require('../../firebaseConfig');
const uploadPostImage = require('../../utils/uploadPostImage');

const createPost = async(req, res, next) => {
  const imageFilePath = req.body.image ? uploadPostImage(req.body.image) : '';

  const newPostRef = db.collection('posts').doc();
  await newPostRef.set({
    author: req.body.user,
    datePosted: Timestamp.fromDate(new Date()),
    image: imageFilePath,
    numLikes: 0,
    text: req.body.text,
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
};

module.exports = createPost;
