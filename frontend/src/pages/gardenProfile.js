import React from "react";
import LongCard from "../components/LongCard";
import NewNav from "../components/NewNav";
import TitlebarImageList from "../components/Recommended";

const gardenProfile = () => {
  const defaultImg =
    "https://images.unsplash.com/photo-1607305387299-a3d9611cd469?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dG9tYXRvfGVufDB8fDB8fA%3D%3D&w=1000&q=80";
  return (
    <>
      <header className="bg-[#0D9488] shadow">
        <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl tracking-tight text-stone-100 text-center">
            Garden Dashboard
          </h1>
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
              imageLink={defaultImg}
              plant={"Tulip"}
            />
            <LongCard
              nextWater={"4"}
              harvest={"1"}
              planted={"3"}
              imageLink={defaultImg}
              plant={"Cucumber"}
            />
            <LongCard
              nextWater={"3"}
              harvest={"5"}
              planted={"2"}
              imageLink={defaultImg}
              plant={"Lettuce"}
            />
            <LongCard
              nextWater={"1"}
              harvest={"7"}
              planted={"1"}
              imageLink={defaultImg}
              plant={"Pepper"}
            />
            <LongCard
              nextWater={"1"}
              harvest={"7"}
              planted={"1"}
              imageLink={defaultImg}
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

export default gardenProfile;
