import React from "react";
import LongCard from "../components/LongCard";

import TitlebarImageList from "../components/Recommended";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { UserGroupIcon } from "@heroicons/react/20/solid";
import NewNav from "../components/NewNav";

const GardenProfile = () => {
  const navigate = useNavigate();
  const defaultImg =
    "https://images.unsplash.com/photo-1607305387299-a3d9611cd469?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dG9tYXRvfGVufDB8fDB8fA%3D%3D&w=1000&q=80";
  return (
    <>
      <NewNav />
      <header className="bg-[#0D9488] shadow">
        <div className="flex justify-evenly mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl tracking-tight text-stone-100 text-center align-middle">
            Garden Dashboard
          </h2>

          <button
            type="button"
            onClick={() => navigate("/about-garden")}
            className=" inline-flex items-center rounded-md border border-transparent bg-[#333333ff] px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-[#5e5e5eff] focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
          >
            <UserGroupIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
            Discuss
          </button>
        </div>
      </header>
      <div className="container mx-auto mt-4 bg-stone-100 rounded-lg p-4 pt-10 pb-10 drop-shadow-lg ">
        <div class="mx-auto grid max-w-7xl gap-y-10 gap-x-8 px-6 lg:px-8 xl:grid-cols-3 ">
          <div class="max-w-2xl">
            <h4 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Growing Plants
            </h4>
            <p class="mt-6 text-lg leading-8 text-gray-600">
              See your registered plants, their status and next steps
            </p>
            <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 mb-0"></hr>
          </div>
          <ul
            role="list"
            class="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
          >
            <LongCard
              nextWater={"3"}
              harvest={"2"}
              planted={"1"}
              imageLink={defaultImg}
              plant={"Tomato"}
            />
            <LongCard
              nextWater={"2"}
              harvest={"2"}
              planted={"5"}
              imageLink={
                "https://www.thespruce.com/thmb/S9mu0T9HfE1_DNnL7yderiiWwj0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/tulips-planting-and-growing-tulips-1402137-06-5c18a69c82114b16bc8eb3baf69935e3.jpg"
              }
              plant={"Tulip"}
            />
            <LongCard
              nextWater={"4"}
              harvest={"1"}
              planted={"3"}
              imageLink={
                "https://snaped.fns.usda.gov/sites/default/files/styles/crop_ratio_7_5/public/seasonal-produce/2018-05/cucumbers2.jpg?itok=YISLeW4e"
              }
              plant={"Cucumber"}
            />
            <LongCard
              nextWater={"3"}
              harvest={"5"}
              planted={"2"}
              imageLink={
                "https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/03/romaine-lettuce-1296x728-body.jpg?w=1155&h=1528"
              }
              plant={"Lettuce"}
            />
            <LongCard
              nextWater={"1"}
              harvest={"7"}
              planted={"1"}
              imageLink={
                "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Single_lavender_flower02.jpg/1200px-Single_lavender_flower02.jpg"
              }
              plant={"Lavender"}
            />
            <LongCard
              nextWater={"1"}
              harvest={"7"}
              planted={"1"}
              imageLink={
                "https://hips.hearstapps.com/hmg-prod/images/hot-sweet-and-chili-pepper-varieties-royalty-free-image-474683586-1558535763.jpg"
              }
              plant={"Pepper"}
            />
          </ul>
        </div>
      </div>

      <div className="container mx-auto mt-4 bg-stone-100 rounded-lg p-4 pt-10  pb-10 drop-shadow-lg">
        <div class="mx-auto grid max-w-7xl gap-y-5 gap-x-8 px-6 lg:px-8 xl:grid-cols-3 ">
          <div class="max-w-2xl">
            <h4 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Recommended Plants
            </h4>
            <p class="mt-6 text-lg leading-8 text-gray-600">
              See your registered plants, their status and next steps
            </p>
            <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 mb-0 pb-0"></hr>
          </div>
          <TitlebarImageList />
        </div>
      </div>
    </>
  );
};

export default GardenProfile;
