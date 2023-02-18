const doc = require('firebase/firestore').doc;
const getDoc = require('firebase/firestore').getDoc;

const db = require('../firebaseConfig');

const login = async (req, res, next) => {
  const docRef = doc(db, 'users', req.body.email);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    if (req.body.password === docSnap.data().password) {
      console.log(docRef.id);
      res.send(docRef.id);
    } else {
      console.log('Incorrect password.')
    }
  } else {
    console.log('No such document.');
  }
};

module.exports = login;
