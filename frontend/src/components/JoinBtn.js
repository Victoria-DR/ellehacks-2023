import React from "react";
import { UserGroupIcon } from "@heroicons/react/20/solid";

const JoinBtn = () => {
  return (
    <>
      <button
        type="button"
        onClick={() => navigate("/about-garden")}
        className=" inline-flex items-center rounded-md border border-transparent bg-[#333333ff] px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-[#5e5e5eff] focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
      >
        <UserGroupIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
        Discuss
      </button>
    </>
  );
};

export default JoinBtn;
