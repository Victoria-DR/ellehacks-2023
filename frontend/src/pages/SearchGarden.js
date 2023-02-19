import React from "react";
import LongCard from "../components/LongCard";
import NewNav from "../components/NewNav";
import TitlebarImageList from "../components/Recommended";
import Search from "../components/Search";

const SearchGarden = () => {
  return (
    <>
      <div className="container mx-auto mt-4 bg-stone-100 rounded-lg p-4 pt-10 pb-10 drop-shadow-lg ">
        <div class="mx-auto grid max-w-7xl gap-y-10 gap-x-8 px-6 lg:px-8 xl:grid-cols-3 ">
          <div class="max-w-2xl">
            <h4 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Search
            </h4>
            <p class="mt-6 text-lg leading-8 text-gray-600">
              Connect with your fellow gardeners and share your knowledge.
            </p>
            <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 mb-0"></hr>
          </div>
          <div class="flex justify-center">
            <Search />
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchGarden;
