const { doc, getDoc } = require('firebase/firestore');

const { db } = require('../../firebaseConfig');

const login = async (req, res, next) => {
  const docRef = doc(db, 'users', req.body.email);
  const docSnap = await getDoc(docRef);
  
  if (docSnap.exists()) {
    if (req.body.password === docSnap.data().password) {
      res.send(docRef.id);
    } else {
      res.send('Incorrect password.')
    }
  } else {
    res.send('Account does not exist.');
  }
};

module.exports = login;
