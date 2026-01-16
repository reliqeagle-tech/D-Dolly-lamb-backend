import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
// import ProductItem from './ProductItem';

const CustomCollection = () => {
  // const {products} = useContext(ShopContext);
  // const [bestSeller,setBestSeller] = useState([]);

  // useEffect(()=>{
  //     const bestProduct = products.filter((item)=>(item.bestseller));
  //     setBestSeller(bestProduct.slice(0,5))
  // },[products])

  return (
<div className="h-[100vh] px-12 pt-12 bg-[#f8efe6]">

  <div className=" text-center pb-8">
    <Title text1={"OUR"} text2={"COLLECTION"}/>
  </div>

  <div className="flex flex-col md:flex-row gap-8 justify-center !overflow-hidden" style={{height: 'calc(100vh - 280px)'}}>

    {/* LEFT LARGE IMAGE */}
    <Link className="relative w-full md:w-1/2 h-full rounded-lg overflow-hidden group ">
      <img
        className="w-full h-full  object-cover transition-transform duration-500 ease-out group-hover:scale-105 "
        src={assets.Emma}
        alt=""
      />
      <h1
        className="absolute inset-0 flex items-center justify-center 
        text-white text-4xl font-semibold drop-shadow-lg 
        group-hover:opacity-80 transition"
      >
        Women
      </h1>
    </Link>


    {/* RIGHT STACKED IMAGES */}
    <div className="flex flex-col w-full md:w-1/2 h-full gap-8 overflow-hidden rounded-lg">

      {/* TOP IMAGE */}
      <Link className="relative flex-1 overflow-hidden rounded-lg group">
        <img
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          src={assets.James}
          alt=""
        />
        <h1
          className="absolute inset-0 flex items-center justify-center 
          text-white text-3xl font-semibold drop-shadow-lg 
          group-hover:opacity-80 transition"
        >
          Men
        </h1>
      </Link>

      {/* BOTTOM IMAGE */}
      <Link className="relative flex-1 overflow-hidden rounded-lg group">
        <img
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          src={assets.Accessories}
          alt=""
        />
        <h1
          className="absolute inset-0 flex items-center justify-center 
          text-white text-3xl font-semibold drop-shadow-lg 
          group-hover:opacity-80 transition"
        >
          Accessories
        </h1>
      </Link>

    </div>




  </div>  

</div>

  );
};

export default CustomCollection;
