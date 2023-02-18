const { doc, setDoc } = require('firebase/firestore');

const db = require('../../firebaseConfig');

const signup = async(req, res, next) => {
  await setDoc(doc(db, 'users', req.body.email), {
    firstName: req.body.firstName,
    gardens: [],
    lastName: req.body.lastName,
    password: req.body.password
  });
  res.send(req.body.email);
};

module.exports = signup;
