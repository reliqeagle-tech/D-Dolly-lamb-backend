// import React, { useContext, useEffect, useState } from 'react'
// import { ShopContext } from '../context/ShopContext'
// import Title from './Title';
// import ProductItem from './ProductItem';

// const BestSeller = () => {

//   const { products } = useContext(ShopContext);
//   const [bestSeller, setBestSeller] = useState([]);

//   useEffect(() => {
//     const bestProduct = products.filter((item) => (item.bestseller));
//     setBestSeller(bestProduct.slice(0, 8))
//   }, [products])

//   return (
//     <div className=" px-2 sm:px-6 md:px-10">
//       {/* Heading Section */}
//       <div className="text-center text-2xl sm:text-3xl py-6">
//         <Title text1={"BEST"} text2={"SELLERS"} />

//         <p className="w-[90%] sm:w-3/4 mx-auto text-xs sm:text-sm md:text-base text-gray-600 mt-2">
//           Discover the most popular picks of the season — trending, stylish, and always in demand.
//         </p>
//       </div>

//       {/* Product Grid */}
//       <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-4 md:gap-5">
//         {bestSeller.map((item, index) => (
//           <ProductItem
//             key={index}
//             id={item._id}
//             name={item.name}
//             image={item.image}
//             price={item.price}
//           />
//         ))}
//       </div>
//     </div>

//   )
// }

// export default BestSeller





// import React, { useContext, useEffect, useState } from "react";
// import { ShopContext } from "../context/ShopContext";
// import Title from "./Title";
// import ProductItem from "./ProductItem";
// import { Link } from "react-router-dom";

// const BestSeller = () => {
//   const { products } = useContext(ShopContext);
//   const [bestSeller, setBestSeller] = useState([]);

//   useEffect(() => {
//     const bestProduct = products.filter((item) => item.bestseller);
//     setBestSeller(bestProduct.slice(0, 4));
//   }, [products]);

//   return (
//     <section
//       className="px-[5%] py-20 sm:py-24 border-t border-[rgba(200,151,58,0.12)]"
//       style={{ background: "linear-gradient(180deg,#0d0703 0%,#1a0f0a 100%)" }}
//     >
//       <style>{`
//         @keyframes fadeUp {
//           from { opacity:0; transform:translateY(24px); }
//           to   { opacity:1; transform:translateY(0); }
//         }
//         .bs-viewall:hover .bs-arrow { transform:translateX(5px); color:#1a0f0a; }
//         .bs-arrow { transition:transform 0.3s, color 0.3s; color:#c8973a; }
//       `}</style>

//       {/* ── Header ── */}
//       <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
//         <div>
//           <Title text1="BEST" text2="SELLERS" />
//           <p className="max-w-[460px] mt-3 text-sm italic leading-loose"
//             style={{ color: "#7a6050", fontFamily: "Georgia,serif" }}>
//             Our most-loved styles — chosen by thousands of customers worldwide
//             and crafted to stand the test of time.
//           </p>
//         </div>

//         {/* Rank badge */}
//         <div
//           className="flex items-center gap-2.5 px-5 py-3 rounded"
//           style={{ border: "1px solid rgba(200,151,58,0.2)" }}
//         >
//           <span className="text-[28px] leading-none" style={{ color: "#f7c568", fontFamily: "Georgia,serif" }}>★</span>
//           <div>
//             <p className="m-0 text-[9px] tracking-[0.28em]" style={{ color: "#c8973a", fontFamily: "Georgia,serif" }}>CUSTOMER</p>
//             <p className="m-0 text-xs tracking-[0.1em]" style={{ color: "#f5ede0", fontFamily: "Georgia,serif" }}>FAVOURITES</p>
//           </div>
//         </div>
//       </div>

//       {/* ── Product Grid ── */}
//       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5 lg:w-[90%] mx-auto">
//         {bestSeller.map((item, index) => (
//           <div key={index} style={{ animation: `fadeUp 0.5s ease ${index * 0.07}s both` }}>
//             <ProductItem
//               id={item._id}
//               name={item.name}
//               image={item.image}
//               price={item.price}
//               discountPrice={item.discountPrice}
//             />
//           </div>
//         ))}
//       </div>

//       {/* ── View All ── */}
//       <div className="text-center mt-14">
//         <Link
//           to="/collection"
//           className="bs-viewall group inline-flex items-center gap-2.5 px-10 py-3.5 rounded-sm text-[11px] tracking-[0.22em] font-semibold no-underline transition-all duration-300"
//           style={{
//             border: "1px solid rgba(200,151,58,0.4)",
//             color: "#f7c568",
//             fontFamily: "Georgia,serif",
//           }}
//           onMouseEnter={(e) => {
//             e.currentTarget.style.background = "linear-gradient(135deg,#c8973a,#f7c568)";
//             e.currentTarget.style.color = "#1a0f0a";
//             e.currentTarget.style.borderColor = "transparent";
//           }}
//           onMouseLeave={(e) => {
//             e.currentTarget.style.background = "transparent";
//             e.currentTarget.style.color = "#f7c568";
//             e.currentTarget.style.borderColor = "rgba(200,151,58,0.4)";
//           }}
//         >
//           SHOP ALL BESTSELLERS
//           <span className="bs-arrow">→</span>
//         </Link>
//       </div>
//     </section>
//   );
// };

// export default BestSeller;





import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";
import { Link } from "react-router-dom";

/*
  ═══════════════════════════════════════════════
  LIGHT MODE — BestSeller.jsx
  ═══════════════════════════════════════════════
  OLD dark brown:
    bg: #0d0703 → #1a0f0a
    text muted: #7a6050
    accent: #c8973a / #f7c568 amber
    border: rgba(200,151,58,…)

  NEW light mode (matches LatestCollection + hero):
    bg: #F8F7FF → #FFFFFF   pale lavender-white
    heading: #1E1B4B  deep navy-indigo
    muted: #6B7280  cool grey
    accent: #6366F1  indigo
    badge border: rgba(99,102,241,0.2)
    btn: indigo outline → indigo fill on hover
    star badge: indigo pill
    section top border: rgba(99,102,241,0.12)
  ═══════════════════════════════════════════════
*/

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProduct = products.filter((item) => item.bestseller);
    setBestSeller(bestProduct.slice(0, 4));
  }, [products]);

  return (
    <section
      className="px-[5%] py-20 sm:py-24"
      style={{
        background: "linear-gradient(180deg, #FFFFFF 0%, #F5F4FF 50%, #EEF0FF 100%)",
        borderTop: "1px solid rgba(99,102,241,0.1)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');

        @keyframes fadeUp {
          from { opacity:0; transform:translateY(24px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .bs-viewall:hover .bs-arrow { transform:translateX(5px); color:#fff; }
        .bs-arrow { transition:transform 0.3s, color 0.3s; color:#6366F1; }

        /* subtle grid pattern — same as LatestCollection */
        .bs-grid-bg::before {
          content: '';
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(99,102,241,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99,102,241,0.05) 1px, transparent 1px);
          background-size: 40px 40px;
          pointer-events: none;
        }
        .bs-blob {
          position: absolute; border-radius: 50%; pointer-events: none;
          width: 350px; height: 350px;
          background: rgba(129,140,248,0.08);
          top: -100px; right: -60px;
          filter: blur(1px);
        }
      `}</style>

      {/* Background decorations */}
      <div className="bs-grid-bg" style={{ position: "absolute", inset: 0, pointerEvents: "none" }} />
      <div className="bs-blob" />

      {/* ── Header ── */}
      <div className="flex flex-wrap items-end justify-between gap-6 mb-12"
        style={{ position: "relative", zIndex: 1 }}>
        <div>
          <Title text1="BEST" text2="SELLERS" />
          <p className="max-w-[460px] mt-3 text-sm italic leading-loose"
            style={{ color: "#6B7280", fontFamily: "'Montserrat', sans-serif" }}>
            Our most-loved styles — chosen by thousands of customers worldwide
            and crafted to stand the test of time.
          </p>
        </div>

        {/* Rank badge */}
        <div
          className="flex items-center gap-2.5 px-5 py-3"
          style={{
            border: "1px solid rgba(99,102,241,0.2)",
            borderRadius: 6,
            background: "rgba(99,102,241,0.04)",
          }}
        >
          <span style={{ fontSize: 26, lineHeight: 1, color: "#6366F1", fontFamily: "'Montserrat', sans-serif" }}>★</span>
          <div>
            <p className="m-0" style={{
              fontSize: 9, letterSpacing: "0.28em",
              color: "#818CF8", fontFamily: "'Montserrat', sans-serif",
              textTransform: "uppercase",
            }}>CUSTOMER</p>
            <p className="m-0" style={{
              fontSize: 12, letterSpacing: "0.1em",
              color: "#1E1B4B", fontFamily: "'Montserrat', sans-serif",
              fontWeight: 600,
            }}>FAVOURITES</p>
          </div>
        </div>
      </div>

      {/* ── Product Grid ── */}
      <div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5 lg:w-[90%] mx-auto"
        style={{ position: "relative", zIndex: 1 }}
      >
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

      {/* ── View All ── */}
      <div className="text-center mt-14" style={{ position: "relative", zIndex: 1 }}>
        <Link
          to="/collection"
          className="bs-viewall group inline-flex items-center gap-2.5 px-10 py-3.5 text-[11px] tracking-[0.22em] font-semibold no-underline transition-all duration-300"
          style={{
            border: "1.5px solid rgba(99,102,241,0.45)",
            color: "#6366F1",
            fontFamily: "'Montserrat', sans-serif",
            borderRadius: 3,
            background: "transparent",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "linear-gradient(135deg, #4338CA, #6366F1)";
            e.currentTarget.style.color = "#ffffff";
            e.currentTarget.style.borderColor = "transparent";
            e.currentTarget.style.boxShadow = "0 8px 24px rgba(99,102,241,0.28)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = "#6366F1";
            e.currentTarget.style.borderColor = "rgba(99,102,241,0.45)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          SHOP ALL BESTSELLERS
          <span className="bs-arrow">→</span>
        </Link>
      </div>
    </section>
  );
};

export default BestSeller;