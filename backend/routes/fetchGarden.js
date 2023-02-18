const { getDoc, FieldValue } = require('firebase/firestore');

const fetchGarden = async(req, res, next) => {
  const gardenRef = db.collection('gardens').doc(req.body.garden);
  const gardenSnap = await getDoc(gardenRef);
  
  if (gardenSnap.exists()) {
    res.send(gardenSnap.data());
  }
};

module.exports = fetchGarden;
