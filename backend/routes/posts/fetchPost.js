const { doc, getDoc } = require('firebase/firestore');

const { db } = require('../../firebaseConfig');

const fetchPost = async(req, res, next) => {
  const postRef = doc(db, 'posts', req.body.postId);
  const postSnap = await getDoc(postRef);
  
  if (postSnap.exists()) {
    const postData = postSnap.data();
    res.send(postData);
  } else {
    console.log(`Post ${req.body.postId} not found.`);
  }
};

module.exports = fetchPost;
