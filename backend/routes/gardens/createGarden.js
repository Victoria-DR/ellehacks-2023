const { doc, setDoc, FieldValue, Timestamp } = require('firebase/firestore');

const { db } = require('../../firebaseConfig');

const createGarden = async(req, res, next) => {
  await setDoc(doc(db, 'gardens', req.body.gardenName), {
    biodiversityOption: req.body.biodiversityOption,
    dateCreated: Timestamp.fromDate(new Date()),
    edibleOption: req.body.edibleOption,
    l3Region: req.body.l3Region,
    numMembers: 1,
    numPlantTypes: req.body.numPlantTypes,
    posts: []
  });

  const userRef = doc(db, 'users', req.body.user);
   await userRef.update({
    gardens: FieldValue.arrayUnion(req.body.gardenName)
  });

  res.send(req.body.gardenName);
};

module.exports = createGarden;
