import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Hero1 = () => {
  return (
    <div className="px-0 flex flex-col sm:flex-row min-h-[90vh] rounded-lg">
  <div className="px-0 w-full flex flex-row justify-center py-0 bg-gradient-to-r from-[#800000] via-black to-black relative overflow-hidden h-[90vh]">

    {/* TEXT SECTION */}
    <div className="w-full flex flex-col items-center justify-center text-center z-[20] px-4 py-10 sm:py-0">
      <h1 className="text-3xl sm:text-5xl md:text-[7rem] lg:text-[8rem] prata-regular text-[#f7c568] leading-[1.1]">
        D &nbsp; DOLLY &nbsp; LAMB
      </h1>

      <p className="w-32 sm:w-44 md:w-[80%] mt-4 sm:mt-6 md:mt-10 h-[3px] bg-[#f7c568]"></p>

      <p className="prata-regular text-sm sm:text-lg md:text-[2.5rem] md:leading-[3rem] text-white mt-4">
        Premium Lambskin Jackets <br />
        Crafted for Comfort <br />
        Timeless Style
      </p>

      <div className="flex items-center gap-2 mt-4 sm:mt-6">
        <p className="w-6 sm:w-8 md:w-11 h-[1px] bg-white"></p>
        <p className="font-semibold text-white text-sm sm:text-base">
          <Link to="/collection">
            SHOP <span className="text-[#f7c568]">NOW</span>
          </Link>
        </p>
        <p className="w-6 sm:w-8 md:w-11 h-[1px] bg-white"></p>
      </div>
    </div>

    {/* IMAGE SECTION */}
    <img
      className="
        absolute 
        top-2
        bottom-[-25%] sm:bottom-[-20%] md:bottom-[-15%] lg:bottom-[-12%]
        left-1/2 -translate-x-1/2 
        
        w-[100%]         /* mobile full width */
        sm:w-[80%]       /* tablet */
        md:w-[60%]       /* medium */
        lg:w-[55%]       /* desktop */
        xl:w-[50%]
        
        h-auto
        object-cover
        z-[10]
      "
      src={assets.leatherModel}
      alt=""
    />

  </div>
</div>





  );
};

export default Hero1;


