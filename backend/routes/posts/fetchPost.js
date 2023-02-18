const { getDoc } = require('firebase/firestore');

const { db } = require('../../firebaseConfig');

const fetchPost = async(req, res, next) => {
  const postRef = db.collection('posts').doc(req.body.postId);
  const postSnap = await getDoc(postRef);
  
  if (postSnap.exists()) {
    res.send(postSnap.data());
  } else {
    console.log('Post not found.');
  }
};

module.exports = fetchPost;
