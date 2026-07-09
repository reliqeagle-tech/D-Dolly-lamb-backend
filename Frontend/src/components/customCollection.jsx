import React from "react";
import Title from "./Title";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const CustomCollection = () => {
  return (
    <div className="w-full px-4 sm:px-8 md:px-12 py-10 bg-transparent">

      {/* Section Title */}
      <div className="text-center mb-8">
        <Title text1={"OUR"} text2={"COLLECTION"} />
      </div>

      {/* FLEX WRAPPER */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-8">

        {/* LEFT LARGE IMAGE */}
        <Link
          to={"/collection?category=Women"}
          className="relative w-full md:w-1/2 h-64 sm:h-80 md:h-[500px] group overflow-hidden rounded-lg shadow-lg bg-white"
        >
          <div className="flex items-center justify-center shadow">
            <img
              className="w-[60%] h-full flex justify-center items-center transition-all duration-300 group-hover:scale-105"
              src={assets.women}
              alt=""
            />
          </div>
          <h1 className="absolute inset-0 flex items-center justify-center 
            text-white text-3xl sm:text-4xl font-semibold drop-shadow-lg 
             transition">
            Women
          </h1>
        </Link>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col w-full md:w-1/2 gap-6">

          {/* MEN IMAGE */}
          <Link
            to={"/collection?category=Men"}
            className="relative w-full h-52 sm:h-64 md:h-[240px] group overflow-hidden rounded-lg shadow-lg bg-white"
          >
            {/* <img
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              src={assets.James}
              alt=""
            /> */}
            <div className="flex items-center justify-center ">
              <img
                className="w-[60%] h-full flex justify-center items-center transition-all duration-300 group-hover:scale-105"
                src={assets.men}
                alt=""
              />
            </div>
            <h1 className="absolute inset-0 flex items-center justify-center 
              text-white text-2xl sm:text-3xl font-semibold drop-shadow-lg 
              transition">
              Men
            </h1>
          </Link>

          {/* ACCESSORIES IMAGE */}
          <Link
            to={"/collection?category=Others"}
            className="relative w-full h-52 sm:h-64 md:h-[240px] group overflow-hidden rounded-lg shadow-lg bg-white flex items-center"
          >
            <div className="flex !items-center justify-center ">
              <img
                className="w-[60%] h-full flex justify-center items-center transition-all duration-300 group-hover:scale-105"
                src={assets.pillow}
                alt=""
              />
            </div>
            <h1 className="absolute inset-0 flex items-center justify-center 
              text-white text-2xl sm:text-3xl font-semibold drop-shadow-lg 
              transition">
              Others
            </h1>
          </Link>

        </div>
      </div>
    </div>
  );
};

export default CustomCollection;
