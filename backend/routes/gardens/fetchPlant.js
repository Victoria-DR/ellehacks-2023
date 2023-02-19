const axios = require('axios');

const fetchPlant = async(req, res, next) => {
  const plantData = await axios(
    `http://trefle.io/api/v1/plants/${req.body.plantId}?token=${process.env.TREFLE_API_KEY}`
  );
  console.log(plantData.data.data.main_species)
  const {
    common_name,
    scientific_name,
    image_url,
    duration,
    vegetable,
    specifications: { average_height },
    growth: { days_to_harvest, growth_months }
  } = plantData.data.data.main_species;

  res.send({
    common_name: common_name,
    scientific_name: scientific_name,
    image_url: image_url,
    duration: duration,
    vegetable: vegetable,
    average_height: average_height,
    days_to_harvest: days_to_harvest,
    growth_months: growth_months
  });
};

module.exports = fetchPlant;
