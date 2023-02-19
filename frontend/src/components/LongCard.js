import React from "react";
import { useNavigate } from "react-router-dom";

const LongCard = ({ nextWater, harvest, planted, imageLink, plant }) => {
  const navigate = useNavigate();
  return (
    <>
      <li
        onClick={() => navigate("/plantInfo")}
        className="rounded-md bg-zinc-100 p-4 drop-shadow-lg hover:bg-zinc-200"
      >
        <div className="flex items-center gap-x-6">
          <img
            className="h-20 object-contain rounded-md"
            src={imageLink}
            alt=""
          />
          <div>
            <div className="uppercase tracking-wide text-xs text-teal-500 font-semibold">
              {plant}
            </div>
            <div className="mt-2 text-slate-500 font-thin"></div>
            <p className="mt-2 text-slate-500 font-thin text-sm">
              Next Water: {nextWater} days
            </p>
            <p className="mt-2 text-slate-500 font-thin text-sm">
              Harvest: {harvest} months
            </p>
            <p className="mt-2 text-slate-500 font-thin text-sm">
              Planted: {planted} weeks ago
            </p>
          </div>
        </div>
      </li>
    </>
  );
};

export default LongCard;
