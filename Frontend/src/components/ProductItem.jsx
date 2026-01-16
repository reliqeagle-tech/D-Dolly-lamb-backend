import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link
      onClick={() => window.scrollTo(0, 0)}
      className="cursor-pointer block group shadow-lg rounded-lg pb-2 my-5 bg-[#674c47]"
      to={`/product/${id}`}
    >
      {/* Image Card */}
      <div
        className="
          bg-white
          w-full 
          aspect-[4/3] 
          overflow-hidden
          flex items-center justify-center
          rounded-tl-md rounded-tr-md
        "
      >
        <img
          src={image[0]}
          alt={name}
          className="
            h-full w-auto
            object-contain
            transition-transform duration-300
            group-hover:scale-105
          "
        />
      </div>

      {/* Offer Tag */}
      <div className="mt-3 px-5">
        <span className="px-3 py-1 bg-[#800000] text-[#f7c568] rounded-full text-xs">
          Black Friday
        </span>
      </div>

      {/* Product Name */}
      <p className="mt-2 text-xs md:text-[13px] md:font-normal  font-light text-[#faf0e6] text-left px-4 text-justify">
        {name}
      </p>

      {/* Price */}
      <div className="text-start mt-1 space-x-2 px-5">
        <span className="line-through text-gray-300 text-xs">
          {currency}
          {(price * 1.2).toFixed(0)}
        </span>

        <span className="text-white font-semibold text-sm">
          {currency}
          {price}
        </span>
      </div>
    </Link>
  );
};

export default ProductItem;
