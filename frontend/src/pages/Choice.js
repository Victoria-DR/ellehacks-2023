import React from "react";
import LongCard from "../components/LongCard";
import NewNav from "../components/NewNav";
import TitlebarImageList from "../components/Recommended";
import Search from "../components/Search";
import { useNavigate } from "react-router-dom";

const Choice = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="container mx-auto mt-4 bg-stone-100 rounded-lg p-4 pt-10 pb-10 drop-shadow-lg gap-y-10 ">
        <h4 class="flex justify-center text-4xl text-center font-bold  text-gray-900">
          Select your Community
        </h4>

        <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 mb-0"></hr>
        <div class="flex justify-center p-4">
          <button
            onClick={() => {
              navigate("/create-garden");
            }}
            type="submit"
            className="group relative flex w-full justify-center rounded-md border border-transparent bg-teal-600 py-2 px-4 text-sm font-medium text-white hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
          >
            <span className="absolute inset-y-0 left-0 flex items-center pl-3"></span>
            Make a New Garden
          </button>
        </div>
        <div class="flex justify-center p-4 pt-0">
          <button
            onClick={() => {
              navigate("/search");
            }}
            type="submit"
            className="group relative flex w-full justify-center rounded-md border border-transparent bg-[#5e5e5eff] py-2 px-4 text-sm font-medium text-white hover:bg-[#333333ff] focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
          >
            <span className="absolute inset-y-0 left-0 flex items-center pl-3"></span>
            Join an Existing Garden
          </button>
        </div>
      </div>
    </>
  );
};

export default Choice;
