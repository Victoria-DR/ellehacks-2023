const doc = require('firebase/firestore').doc;
const setDoc = requre('firebase/firestore').setDoc;

const signup = async(req, res, next) => {
  await setDoc(doc(db, 'users', req.body.email), {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    password: req.body.password
  });
  res.send(req.body.email);
};

module.exports = signup;
