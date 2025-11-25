import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 8));
  }, [products]);

  return (
    <div className="my-5 ">
      <div className="text-center py-8 text-3xl">
        <Title text1={"LATEST"} text2={"COLLECTIONS"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the.
        </p>
      </div>

      {/* Rendering Products */}
      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-10 ">
        {latestProducts.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>

    //     <>
    //   {/* TITLE SECTION */}
    //   <div className="w-full h-[10vh] bg-white flex items-center justify-center px-4">
    //     <Title text1={"LATEST"} text2={"COLLECTIONS"} />
    //   </div>

    //   {/* HERO IMAGE WITH OVERLAY */}
    //   <div
    //     className="relative w-full h-[40vh] sm:h-[50vh] lg:h-[60vh] bg-cover bg-center bg-no-repeat"
    //     style={{ backgroundImage: `url(${assets.backgroundCover})` }}
    //   >
    //     {/* DARK BLUR LAYER */}
    //     <div
    //       className="
    //         absolute inset-0
    //         backdrop-blur-sm
    //         bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_30%,rgba(0,0,0,0.85)_85%)]
    //       "
    //     ></div>

    //     {/* CONTENT */}
    //     <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-6">
    //       <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 text-center">
    //         Explore Now
    //       </h1>

    //       <p className="text-base sm:text-lg lg:text-xl mb-6 text-center">
    //         Crafted for the Ones Who Stand Out.
    //       </p>

    //       <div className="flex gap-4">
    //         <Link
    //           to={"/collection?category=Men"}
    //           className="px-5 sm:px-6 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-sm sm:text-base"
    //         >
    //           Men
    //         </Link>

    //         <Link
    //           to={"/collection?category=Women"}
    //           className="px-5 sm:px-6 py-2 bg-gray-700 hover:bg-gray-800 rounded-lg text-sm sm:text-base"
    //         >
    //           Women
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    // </>
  );
};

export default LatestCollection;
