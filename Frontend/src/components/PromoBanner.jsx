// import React from "react";
// import { assets } from "../assets/assets";

// const PromoBanner = () => {
//   return (
//     <section className="relative w-full bg-gradient-to-r from-pink-50 to-white py-10 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between rounded-2xl shadow-md mt-10">
//       {/* Left Content */}
//       <div className="text-center md:text-left max-w-lg pl-20">
//         <h1 className="text-4xl md:text-5xl font-extrabold text-orange-600">
//           FLAT 50% OFF
//         </h1>
//         <p className="mt-3 text-xl font-semibold text-gray-700">
//           <span className="text-orange-500">12</span> Hours{" "}
//           <span className="text-orange-500">20</span> Mins
//         </p>
//         <button className="mt-6 px-6 py-3 bg-orange-500 text-white font-medium rounded-xl shadow-lg hover:bg-orange-600 transition">
//           Explore now
//         </button>
//       </div>

//       {/* Right Content (Image) */}
//       <div className="pr-10 md:mt-0 flex justify-center md:justify-end">
//         <img
//           src={assets.banner1}
//           alt="Promo Model"
//           className="max-h-72 md:max-h-96 object-contain"
//         />
//       </div>
//     </section>
//   );
// };

// export default PromoBanner;

import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const PromoBanner = () => {
  return (
    <section className="w-full bg-gradient-to-r from-black via-black to-orange-500 shadow-md overflow-hidden flex flex-col md:flex-row items-center justify-between px-8 md:px-16 md:pt-0 pt-10">
      
      {/* Left Side - Text */}
      <div className="max-w-lg text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white prata-regular">
          FLAT 50% OFF
        </h1>
        <p className="mt-3 text-xl font-semibold text-white">
           <span className="text-orange-500">12</span> Hours{" "}
           <span className="text-orange-500">20</span> Mins
         </p>
        <p className="mt-4 text-white text-base md:text-lg">
          Discover the latest trends at <span className="font-bold text-orange-500">Clothsy</span>.  
          Premium quality, unbeatable style, and comfort that lasts.  
          Shop your favorite outfits before the deal ends!
        </p>
        <Link to='/collection'><button className="mt-6 px-6 py-3 bg-orange-500 text-white font-medium rounded-xl shadow-lg hover:bg-indigo-500 transition">
          Explore Now
        </button>
        </Link>
      </div>

      {/* Right Side - Image */}
      <div className="mt-8 h-96 md:mt-0 flex justify-center md:justify-end">
        <img
          src={assets.banner1}
          alt="Fashion Model"
          className="max-h-80 md:max-h-96 object-contain"
        />
      </div>
    </section>
  );
};

export default PromoBanner;
