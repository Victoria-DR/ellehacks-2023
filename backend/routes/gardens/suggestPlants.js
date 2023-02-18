const axios = require('axios');
const { getDoc } = require('firebase/firestore');

const { db } = require('../../firebaseConfig');
const findL3Code = require('../../utils/findL3Code');

const suggestPlants = async(req, res, next) => {
  const gardenRef = db.collection('gardens').doc(req.body.garden);
  const gardenSnap = await getDoc(gardenRef);
  
  if (gardenSnap.exists()) {
    const l3Code = findL3Code(gardenSnap.data().l3Region);
    const plantsInRegion = await axios.post(
      `http://trefle.io/api/v1/distributions/${l3Code}/plants?token=${process.env.TREFLE_API_KEY}${gardenSnap.data().edibleOption ? '&vegetable=true' : ''}`
    );
    res.send(plantsInRegion.data.slice(gardenSnap.data().numPlantTypes - 1));
  } else {
    console.log('Garden not found.');
  }
};

module.exports = suggestPlants;
