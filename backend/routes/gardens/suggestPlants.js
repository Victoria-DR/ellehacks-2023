const axios = require('axios');
const { getDoc } = require('firebase/firestore');

const { db } = require('../../firebaseConfig');

const suggestPlants = async(req, res, next) => {
  const gardenRef = db.collection('gardens').doc(req.body.garden);
  const gardenSnap = await getDoc(gardenRef);
  
  if (gardenSnap.exists()) {
    const plantsInRegion = await axios.post(
      `http://trefle.io/api/v1/distributions/${gardenSnap.data().l3Region}/plants?token=${process.env.TREFLE_API_KEY}${gardenSnap.data().edibleOption ? '?vegetable=true' : ''}`
    );
    res.send(plantsInRegion.data.slice(gardenSnap.data().numPlantTypes - 1));
  } else {
    console.log('Garden not found.');
  }
};

module.exports = suggestPlants;
