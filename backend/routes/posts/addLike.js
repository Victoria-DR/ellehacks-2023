const { getDoc, FieldValue } = require('firebase/firestore');

const { db } = require('../../firebaseConfig');

const addLike = async(req, res, next) => {
  const postRef = db.collection('posts').doc(req.body.postId);
  const postSnap = await getDoc(postRef);
  
  if (postSnap.exists()) {
    await postRef.update({
      numLikes: postSnap.data().numLikes + 1,
      userLikes: FieldValue.arrayUnion(req.body.user)
    });
  } else {
    console.log('Post not found.');
  }

  res.send(req.body.postId);
};

module.exports = addLike;
