import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const BestSeller = () => {

    const {products} = useContext(ShopContext);
    const [bestSeller,setBestSeller] = useState([]);

    useEffect(()=>{
        const bestProduct = products.filter((item)=>(item.bestseller));
        setBestSeller(bestProduct.slice(0,8))
    },[products])

  return (
    <div className=" px-2 sm:px-6 md:px-10">
  {/* Heading Section */}
  <div className="text-center text-2xl sm:text-3xl py-6">
    <Title text1={"BEST"} text2={"SELLERS"} />

    <p className="w-[90%] sm:w-3/4 mx-auto text-xs sm:text-sm md:text-base text-gray-600 mt-2">
      Discover the most popular picks of the season — trending, stylish, and always in demand.
    </p>
  </div>

  {/* Product Grid */}
  <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-4 md:gap-5">
    {bestSeller.map((item, index) => (
      <ProductItem
        key={index}
        id={item._id}
        name={item.name}
        image={item.image}
        price={item.price}
      />
    ))}
  </div>
</div>

  )
}

export default BestSeller
