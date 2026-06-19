// import React, { useContext, useEffect, useState } from "react";
// import { ShopContext } from "../context/ShopContext";
// import Title from "./Title";
// import ProductItem from "./ProductItem";
// import { Link } from "react-router-dom";

// const LatestCollection = () => {
//   const { products } = useContext(ShopContext);
//   const [latestProducts, setLatestProducts] = useState([]);

//   useEffect(() => {
//     setLatestProducts(products.slice(0, 8));
//   }, [products]);

//   return (
//     <section
//       className="px-[5%] py-20 sm:py-24"
//       style={{ background: "#1a0f0a" }}
//     >
//       <style>{`
//         @keyframes fadeUp {
//           from { opacity:0; transform:translateY(24px); }
//           to   { opacity:1; transform:translateY(0); }
//         }
//         .lc-header { animation: fadeUp 0.7s ease forwards; }
//         /* gradient hover on viewall needs inline handler — arrow child transition kept here */
//         .lc-viewall:hover .lc-arrow { transform:translateX(5px); color:#1a0f0a; }
//         .lc-arrow { transition:transform 0.3s, color 0.3s; color:#c8973a; }
//       `}</style>

//       {/* ── Header ── */}
//       <div className="lc-header text-center mb-16">
//         <Title text1="LATEST" text2="COLLECTIONS" />

//         <p
//           className="max-w-[520px] mx-auto mt-5 text-sm italic leading-loose tracking-[0.03em]"
//           style={{ color: "#7a6050", fontFamily: "Georgia,serif" }}
//         >
//           Each piece in our latest drop is individually hand-cut from premium Grade A lambskin —
//           soft from the first wear, refined for a lifetime.
//         </p>

//         {/* Decorative divider */}
//         <div className="flex items-center justify-center gap-4 mt-7">
//           <span
//             className="block w-16 h-px"
//             style={{ background: "linear-gradient(to right,transparent,rgba(200,151,58,0.4))" }}
//           />
//           <span
//             className="block w-[5px] h-[5px] rotate-45"
//             style={{ background: "#c8973a" }}
//           />
//           <span
//             className="block w-16 h-px"
//             style={{ background: "linear-gradient(to left,transparent,rgba(200,151,58,0.4))" }}
//           />
//         </div>
//       </div>

//       {/* ── Product Grid ── */}
//       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5 lg:w-[90%] mx-auto">
//         {latestProducts.map((item, index) => (
//           <div key={index} style={{ animation: `fadeUp 0.5s ease ${index * 0.07}s both` }}>
//             <ProductItem
//               id={item._id}
//               image={item.image}
//               name={item.name}
//               price={item.price}
//               discountPrice={item.discountPrice}
//             />
//           </div>
//         ))}
//       </div>

//       {/* ── View All CTA ── */}
//       <div className="text-center mt-14">
//         <Link
//           to="/collection"
//           className="lc-viewall inline-flex items-center gap-2.5 px-10 py-3.5 rounded-sm text-[11px] tracking-[0.22em] font-semibold no-underline transition-all duration-300"
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
//           VIEW ALL PRODUCTS
//           <span className="lc-arrow">→</span>
//         </Link>
//       </div>
//     </section>
//   );
// };

// export default LatestCollection;



import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";
import { Link } from "react-router-dom";

/*
  ═══════════════════════════════════════════════
  COLOR SYSTEM UPDATE — LatestCollection.jsx
  LIGHT MODE — matching hero aesthetic
  ═══════════════════════════════════════════════
  OLD (dark brown):
    section bg:   #1a0f0a
    text muted:   #7a6050
    accents:      #c8973a / #f7c568  amber
    border:       rgba(200,151,58,0.4)
    btn text:     #f7c568 / #1a0f0a

  NEW (light blue-white, indigo accents):
    section bg:   #F0F2FF → #E8ECFF  soft blue-lavender (hero-matched)
    grid bg:      white cards with subtle borders
    text heading: #1E1B4B  deep navy-indigo
    text muted:   #6B7280  cool neutral grey
    text body:    #4B5563  readable dark grey
    accent:       #6366F1  indigo (hero primary)
    accent-light: #818CF8  light indigo
    accent-deep:  #4338CA  deep indigo
    btn primary:  indigo fill → white text
    btn outline:  indigo border → indigo text
    divider:      rgba(99,102,241,0.2)
  ═══════════════════════════════════════════════
*/

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 8));
  }, [products]);

  return (
    <section
      className="px-[5%] py-10 border-t border-indigo-300 "
      style={{
        background: "linear-gradient(180deg, #EEF0FF 0%, #F4F5FF 40%, #FFFFFF 100%)",
        position: "relative",
        overflow: "hidden",
      }
      }
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');

        @keyframes fadeUp {
          from { opacity:0; transform:translateY(24px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .lc-header { animation: fadeUp 0.7s ease forwards; }

        .lc-viewall:hover .lc-arrow { transform:translateX(5px); color:#fff; }
        .lc-arrow { transition:transform 0.3s, color 0.3s; color:#6366F1; }

        /* subtle grid pattern matching hero */
        .lc-grid-bg::before {
          content: '';
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(99,102,241,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99,102,241,0.06) 1px, transparent 1px);
          background-size: 40px 40px;
          pointer-events: none;
        }

        /* decorative blobs matching hero circles */
        .lc-blob-1 {
          position: absolute; border-radius: 50%; pointer-events: none;
          width: 400px; height: 400px;
          background: rgba(129,140,248,0.10);
          top: -120px; left: -80px;
          filter: blur(1px);
        }
        .lc-blob-2 {
          position: absolute; border-radius: 50%; pointer-events: none;
          width: 320px; height: 320px;
          background: rgba(99,102,241,0.08);
          bottom: -80px; right: -60px;
          filter: blur(1px);
        }
      `}</style>

      {/* Decorative background elements */}
      <div className="lc-grid-bg" style={{ position: "absolute", inset: 0, pointerEvents: "none" }} />
      <div className="lc-blob-1" />
      <div className="lc-blob-2" />

      {/* ── Header ── */}
      <div className="lc-header text-center mb-16" style={{ position: "relative", zIndex: 1 }}>
        <Title text1="LATEST" text2="COLLECTIONS" />

        <p
          className="max-w-[520px] mx-auto mt-5 text-sm italic leading-loose tracking-[0.03em]"
          style={{ color: "#6B7280", fontFamily: "'Montserrat', sans-serif" }}
        >
          Each piece in our latest drop is individually hand-cut from premium Grade A lambskin —
          soft from the first wear, refined for a lifetime.
        </p>

        {/* Decorative divider — indigo */}
        <div className="flex items-center justify-center gap-4 mt-7">
          <span
            className="block w-[100px] h-[2px] rounded-lg"
            style={{ background: "linear-gradient(to right, transparent, rgba(99,102,241,0.9))" }}
          />
          <span
            className="block w-[8px] h-[8px] rotate-45"
            style={{ background: "#6366F1" }}
          />
          <span
            className="block w-[100px] h-[2px] rounded-lg"
            style={{ background: "linear-gradient(to left, transparent, rgba(99,102,241,0.9))" }}
          />
        </div>
      </div>

      {/* ── Product Grid ── */}
      <div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5 lg:w-[90%] mx-auto"
        style={{ position: "relative", zIndex: 1 }}
      >
        {latestProducts.map((item, index) => (
          <div key={index} style={{ animation: `fadeUp 0.5s ease ${index * 0.07}s both` }}>
            <ProductItem
              id={item._id}
              image={item.image}
              name={item.name}
              price={item.price}
              discountPrice={item.discountPrice}
              category={item.category}
              subCategory={item.subCategory}
              sku={item.sku}
            />
          </div>
        ))}
      </div>

      {/* ── View All CTA ── */}
      <div className="text-center mt-14" style={{ position: "relative", zIndex: 1 }}>
        <Link
          to="/collection"
          className="lc-viewall inline-flex items-center gap-2.5 px-10 py-3.5 text-[11px] tracking-[0.22em] font-semibold no-underline transition-all duration-300"
          style={{
            border: "1.5px solid rgba(99,102,241,0.5)",
            color: "#6366F1",
            fontFamily: "'Montserrat', sans-serif",
            borderRadius: "3px",
            background: "transparent",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "linear-gradient(135deg, #4338CA, #6366F1)";
            e.currentTarget.style.color = "#ffffff";
            e.currentTarget.style.borderColor = "transparent";
            e.currentTarget.style.boxShadow = "0 8px 24px rgba(99,102,241,0.3)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = "#6366F1";
            e.currentTarget.style.borderColor = "rgba(99,102,241,0.5)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          VIEW ALL PRODUCTS
          <span className="lc-arrow">→</span>
        </Link>
      </div>
    </section >
  );
};

export default LatestCollection;