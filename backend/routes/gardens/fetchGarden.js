const { doc, getDoc } = require('firebase/firestore');

const { db } = require('../../firebaseConfig');

const fetchGarden = async(req, res, next) => {
  const gardenRef = doc(db, 'gardens', req.body.garden);
  const gardenSnap = await getDoc(gardenRef);
  
  if (gardenSnap.exists()) {
    res.send(gardenSnap.data());
  } else {
    console.log('Garden not found.');
  }
};

module.exports = fetchGarden;
