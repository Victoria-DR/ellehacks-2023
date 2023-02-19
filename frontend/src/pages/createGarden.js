import axios from "axios";
import React from "react";
import { useState } from "react";
// import "../index.css";
import { useForm, Controller } from "react-hook-form";

const CreateGarden = () => {
  const { register, control, handleSubmit, reset } = useForm();
  const [data, setData] = useState("");

  const onSubmit = async (data) => {
    const res = await axios.post("http://localhost:3001/signup", data);
    console.log(res);
    reset();
  };

  return (
    <div className="container mt-10">
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="md:col-span-1">
          <div className="px-4 sm:px-0">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Create your Garden
            </h3>
            <p className="mt-1 text-sm text-gray-600">
              Go crazy! Create your own garden!
            </p>
          </div>
        </div>
        {/* Form */}
        <div className="mt-5 md:col-span-2 md">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="overflow-hidden shadow sm:rounded-md">
              <div className="bg-white px-4 py-5 sm:p-6">
                <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                  <label
                    htmlFor="num-plant-types"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Number of Plant Types
                  </label>
                  <input
                    type="number"
                    {...register("numPlantTypes")}
                    required
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>

                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                    <label
                      htmlFor="season"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Season
                    </label>
                    <select
                      {...register("season")}
                      type="text"
                      required
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option value="Winter">Winter</option>
                      <option value="Spring">Spring</option>
                      <option value="Summer">Summer</option>
                      <option value="Fall">Fall</option>
                    </select>
                  </div>

                  <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                    <label
                      htmlFor="location"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Location
                    </label>
                    <input
                      type="text"
                      {...register("l3Region")}
                      required
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                    <input
                      type="checkbox"
                      {...register("to-edibleOption")}
                      required
                    />
                    <label
                      htmlFor="edibleOption"
                      className="ml-4 text-sm font-medium text-gray-700"
                    >
                      To Eat
                    </label>
                  </div>

                  <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                    <input
                      type="checkbox"
                      {...register("to-biodiversityOption")}
                      required
                    />
                    <label
                      htmlFor="biodiversityOption"
                      className="ml-4 text-sm font-medium text-gray-700"
                    >
                      To Enjoy
                    </label>
                  </div>
                </div>
              </div>
              <p>{data}</p>
              <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                <button
                  type="submit"
                  className="inline-flex justify-center rounded-md border border-transparent bg-teal-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                >
                  Save
                </button>
                {/* <input className="submit-btn" type="submit" /> */}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateGarden;
