// import React, { useContext, useEffect, useState } from 'react'
// import { ShopContext } from '../context/ShopContext'
// import Title from './Title';
// import ProductItem from './ProductItem';

// const BestSeller = () => {

//     const {products} = useContext(ShopContext);
//     const [bestSeller,setBestSeller] = useState([]);

//     useEffect(()=>{
//         const bestProduct = products.filter((item)=>(item.bestseller));
//         setBestSeller(bestProduct.slice(0,8))
//     },[products])

//   return (
//     <div className=" px-2 sm:px-6 md:px-10">
//   {/* Heading Section */}
//   <div className="text-center text-2xl sm:text-3xl py-6">
//     <Title text1={"BEST"} text2={"SELLERS"} />

//     <p className="w-[90%] sm:w-3/4 mx-auto text-xs sm:text-sm md:text-base text-gray-600 mt-2">
//       Discover the most popular picks of the season — trending, stylish, and always in demand.
//     </p>
//   </div>

//   {/* Product Grid */}
//   <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-4 md:gap-5">
//     {bestSeller.map((item, index) => (
//       <ProductItem
//         key={index}
//         id={item._id}
//         name={item.name}
//         image={item.image}
//         price={item.price}
//       />
//     ))}
//   </div>
// </div>

//   )
// }

// export default BestSeller




import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";
import { Link } from "react-router-dom";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProduct = products.filter((item) => item.bestseller);
    setBestSeller(bestProduct.slice(0, 4));
  }, [products]);

  return (
    <section
      style={{
        background: "linear-gradient(180deg, #0d0703 0%, #1a0f0a 100%)",
        padding: "80px 5% 100px",
        borderTop: "1px solid rgba(200,151,58,0.12)",
      }}
    >
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .bs-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; }
        @media (min-width: 640px)  { .bs-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 768px)  { .bs-grid { grid-template-columns: repeat(3, 1fr); } }
        @media (min-width: 1024px) { .bs-grid { grid-template-columns: repeat(4, 1fr); } }
        @media (max-width:640px){
  .bs-section{
    padding:60px 8px 80px;
  }
}
  @media (max-width:640px){
  .bs-grid{
    gap:8px;
  }
}
        .bs-tab {
          padding: 9px 22px;
          font-size: 10px; letter-spacing: 0.22em;
          font-family: Georgia, serif; font-weight: 600;
          cursor: pointer; transition: all 0.25s;
          border-radius: 2px;
        }
        .bs-tab-active {
          background: linear-gradient(135deg, #c8973a, #f7c568);
          color: #1a0f0a; border: none;
        }
        .bs-tab-inactive {
          background: transparent; color: #7a6050;
          border: 1px solid rgba(200,151,58,0.2);
        }
        .bs-tab-inactive:hover { border-color: #c8973a; color: #c8973a; }
        .bs-viewall {
          display: inline-flex; align-items: center; gap: 10px;
          padding: 14px 40px;
          border: 1px solid rgba(200,151,58,0.4);
          color: #f7c568; text-decoration: none;
          font-size: 11px; letter-spacing: 0.22em;
          font-family: Georgia, serif; font-weight: 600;
          transition: all 0.3s; border-radius: 2px;
        }
        .bs-viewall:hover {
          background: linear-gradient(135deg, #c8973a, #f7c568);
          color: #1a0f0a; border-color: transparent;
        }
        .bs-viewall:hover .bs-arrow { transform: translateX(5px); color: #1a0f0a; }
        .bs-arrow { transition: transform 0.3s, color 0.3s; color: #c8973a; }
      `}</style>

      {/* Header */}
      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "24px", marginBottom: "48px" }}>
        <div>
          <Title text1="BEST" text2="SELLERS" />
          <p style={{
            maxWidth: "460px", marginTop: "12px",
            fontSize: "14px", color: "#7a6050",
            fontFamily: "Georgia, serif", fontStyle: "italic", lineHeight: 1.8,
          }}>
            Our most-loved styles — chosen by thousands of customers worldwide
            and crafted to stand the test of time.
          </p>
        </div>

        {/* Rank badge */}
        <div style={{
          display: "flex", alignItems: "center", gap: "10px",
          border: "1px solid rgba(200,151,58,0.2)", padding: "12px 20px", borderRadius: "4px",
        }}>
          <span style={{ fontSize: "28px", color: "#f7c568", fontFamily: "Georgia, serif", lineHeight: 1 }}>★</span>
          <div>
            <p style={{ fontSize: "9px", letterSpacing: "0.28em", color: "#c8973a", fontFamily: "Georgia, serif", margin: 0 }}>CUSTOMER</p>
            <p style={{ fontSize: "12px", color: "#f5ede0", fontFamily: "Georgia, serif", margin: 0, letterSpacing: "0.1em" }}>FAVOURITES</p>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="bs-grid lg:w-[90%] m-auto">
        {bestSeller.map((item, index) => (
          <div key={index} style={{ animation: `fadeUp 0.5s ease ${index * 0.07}s both` }}>
            <ProductItem
              id={item._id}
              name={item.name}
              image={item.image}
              price={item.price}
              discountPrice={item.discountPrice}
            />
          </div>
        ))}
      </div>

      {/* View All */}
      <div style={{ textAlign: "center", marginTop: "56px" }}>
        <Link to="/collection" className="bs-viewall">
          SHOP ALL BESTSELLERS
          <span className="bs-arrow">→</span>
        </Link>
      </div>
    </section>
  );
};

export default BestSeller;