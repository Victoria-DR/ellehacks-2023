import React from "react";
import LongCard from "../components/LongCard";
import NewNav from "../components/NewNav";

const gardenProfile = () => {
  return (
    <>
      <header className="bg-[#0D9488] shadow">
        <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl tracking-tight text-stone-100 text-center">
            Garden Dashboard
          </h1>
        </div>
      </header>
      <div className="container mx-auto mt-4 bg-stone-100 rounded-lg p-4 pt-10">
        <div class="mx-auto grid max-w-7xl gap-y-20 gap-x-8 px-6 lg:px-8 xl:grid-cols-3 ">
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
            <LongCard />
            <LongCard />
            <LongCard />
            <LongCard />
            <LongCard />
            <LongCard />
          </ul>
        </div>
      </div>
    </>
  );
};

export default gardenProfile;
