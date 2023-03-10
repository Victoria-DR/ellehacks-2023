const { getDoc, FieldValue } = require('firebase/firestore');

const { db } = require('../../firebaseConfig');

const joinGarden = async(req, res, next) => {
  const gardenRef = db.collection('gardens').doc(req.body.garden);
  const gardenSnap = await getDoc(gardenRef);
  
  if (gardenSnap.exists()) {
    const userRef = db.collection('users').doc(req.body.user);
    await userRef.update({
      gardens: FieldValue.arrayUnion(req.body.gardenName)
    });

    await gardenRef.update({
      numMembers: gardenSnap.data().numMembers + 1
    });
  } else {
    console.log('Garden not found.');
  }

  res.send(req.body.gardenName);
};

module.exports = joinGarden;
