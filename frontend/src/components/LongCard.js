import React from "react";

const LongCard = () => {
  return (
    <>
      <li className="rounded-md bg-zinc-100 p-4 drop-shadow-md">
        <div className="flex items-center gap-x-6">
          <img
            className="h-16 w-16 rounded-md"
            src="https://images.unsplash.com/photo-1607305387299-a3d9611cd469?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dG9tYXRvfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
            alt=""
          />
          <div>
            <div className="uppercase tracking-wide text-md text-indigo-500 font-semibold">
              Company retreats
            </div>
            <div className="mt-2 text-slate-500 font-thin"></div>
            <p className="mt-2 text-slate-500 font-thin text-sm">
              Next Water:{" "}
            </p>
            <p className="mt-2 text-slate-500 font-thin text-sm">Harvest: </p>
            <p className="mt-2 text-slate-500 font-thin text-sm">Planted: </p>
          </div>
        </div>
      </li>
    </>
  );
};

export default LongCard;
