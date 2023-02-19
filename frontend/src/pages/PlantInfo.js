import axios from "axios";
import React, { useState, useEffect } from "react";
import NewNav from "../components/NewNav";

const getPlantData = async (plantId) => {
  const response = await axios.post("http://localhost:3001/fetchPlant", {
    plantId: plantId,
  });
  return response;
};

const PlantInfo = () => {
  const [plantData, setPlantData] = useState(null);

  useEffect(async () => {
    try {
      const apiData = await getPlantData("269597");
      setPlantData(apiData);
    } catch (error) {
      console.log(error);
    }
  }, []);

  if (!plantData) {
    return <p>Loading...</p>;
  }

  console.log(plantData);

  return (
    <>
      <NewNav />
      <div className="container mx-auto">
        <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-md space-y-8">
            <div>
              <img
                className="max-h-40"
                src={plantData.data.image_url}
                alt="image of plant"
              />
              <h2 className="text-3xl">{plantData.data.common_name}</h2>
            </div>
            <div>
              <h4 className="font-bold">Scientific Name</h4>
              <p>{plantData.data.scientific_name}</p>
              <h4 className="font-bold">Duration</h4>
              <p>{plantData.data.duration}</p>
              <h4 className="font-bold">Is A Vegetable</h4>
              <p>{plantData.data.vegetable === "true" ? "Yes" : "No"}</p>
              <h4 className="font-bold">Average Height</h4>
              <p>{`${plantData.data.average_height[0]}cm`}</p>
              <h4 className="font-bold">Days From Planting To Harvest</h4>
              <p>{plantData.data.days_to_harvest}</p>
              <h4 className="font-bold">Active Growth Periods</h4>
              <p>{plantData.data.growth_months}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlantInfo;
