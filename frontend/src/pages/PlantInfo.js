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

      <div className="container mx-auto p-4">
        <div className="overflow-hidden bg-white shadow rounded-lg sm:rounded-lg p-4 mb-8">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Plant Profile
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Specific and detailed information .
            </p>
          </div>
          <div className="border-t border-gray-200">
            <dl>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Scientific Name
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  {plantData.data.scientific_name}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Duration</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  10 weeks
                  {/* {plantData.data.duration} */}
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Is A Vegetable
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  {/* {plantData.data.vegetable === "true" ? "Yes" : "No"} */}
                  Yes
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Average Height
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  {/* {`${plantData.data.average_height[0]}cm`} */}
                  20 cm
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Days From Planting To Harvest
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  {/* {plantData.data.days_to_harvest} */}5 days
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Active Growth Periods
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  {plantData.data.growth_months}
                  January, February, March, April
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div className="p-6 flex justify-center rounded-lg shadow bg-gray-100 sm:rounded-lg col-span-4 lg:col-span-5">
          <img
            src={plantData.data.image_url}
            className="object-contain w-full object-center"
          />
        </div>
      </div>
    </>
  );
};

export default PlantInfo;
