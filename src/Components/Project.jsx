import React from "react";
import zomato from "../assets/zomato.png";
const Project = ({ title, technology, photo }) => {
  return (
    <div className="w-full p-3 border my-8 rounded-md bg-black border-slate-600">
      <img src={photo || zomato} className="rounded-md aspect-auto" alt="" />

      <div className="w-full">
        <h1 className="text-3xl font-semibold my-3">{title}</h1>
        <h4 className="text-xl font-semibold my-4">Technology Used</h4>
        <div className="flex justify-start flex-wrap gap-2">
          {technology.map((e) => (
            <span
              key={e}
              className="px-2 block cursor-pointer text-slate-300 py-1 bg-black border border-slate-600 rounded-full mx-2"
            >
              {e}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
