// import React, { useContext, useEffect, useState } from "react";
// import { ShopContext } from "../context/ShopContext";
// import Title from "./Title";
// import ProductItem from "./ProductItem";
// import { assets } from "../assets/assets";
// import { Link } from "react-router-dom";

// const LatestCollection = () => {
//   const { products } = useContext(ShopContext);
//   const [latestProducts, setLatestProducts] = useState([]);

//   useEffect(() => {
//     setLatestProducts(products.slice(0, 8));
//   }, [products]);

//   return (
//     <div className="px-2 sm:px-6 md:px-10  ">
//       <div className="text-center py-8 text-3xl">
//         <Title text1={"LATEST"} text2={"COLLECTIONS"} />
//         <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
//           Lorem Ipsum is simply dummy text of the printing and typesetting
//           industry. Lorem Ipsum has been the.
//         </p>
//       </div>

//       {/* Rendering Products */}
//       <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-6 ">
//         {latestProducts.map((item, index) => (
//           <ProductItem
//             key={index}
//             id={item._id}
//             image={item.image}
//             name={item.name}
//             price={item.price}
//           />
//         ))}
//       </div>
//     </div>

//   );
// };

// export default LatestCollection;




import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";
import { Link } from "react-router-dom";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 8));
  }, [products]);

  return (
    <section style={{ background: "#1a0f0a", padding: "80px 5% 100px" }}>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .lc-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; }
        @media (min-width: 640px)  { .lc-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 768px)  { .lc-grid { grid-template-columns: repeat(3, 1fr); } }
        @media (min-width: 1024px) { .lc-grid { grid-template-columns: repeat(4, 1fr); } }
        @media (max-width:640px){
  .lc-section{
    padding:60px 8px 80px;
  }
}

@media (max-width:640px){
  .lc-grid{
    gap:8px;
  }
}
        .lc-viewall {
          display: inline-flex; align-items: center; gap: 10px;
          padding: 14px 40px;
          border: 1px solid rgba(200,151,58,0.4);
          color: #f7c568; text-decoration: none;
          font-size: 11px; letter-spacing: 0.22em;
          font-family: Georgia, serif; font-weight: 600;
          transition: all 0.3s; border-radius: 2px;
        }
        .lc-viewall:hover {
          background: linear-gradient(135deg, #c8973a, #f7c568);
          color: #1a0f0a; border-color: transparent;
        }
        .lc-viewall:hover .lc-arrow { transform: translateX(5px); color: #1a0f0a; }
        .lc-arrow { transition: transform 0.3s, color 0.3s; color: #c8973a; }
      `}</style>

      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "60px", animation: "fadeUp 0.7s ease forwards" }}>
        <Title text1="LATEST" text2="COLLECTIONS" />
        <p style={{
          maxWidth: "520px", margin: "18px auto 0",
          fontSize: "14px", color: "#7a6050",
          fontFamily: "Georgia, serif", fontStyle: "italic",
          lineHeight: 1.8, letterSpacing: "0.03em",
        }}>
          Each piece in our latest drop is individually hand-cut from premium Grade A lambskin —
          soft from the first wear, refined for a lifetime.
        </p>

        {/* Decorative divider */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px", marginTop: "28px" }}>
          <span style={{ width: "60px", height: "1px", background: "linear-gradient(to right, transparent, rgba(200,151,58,0.4))" }} />
          <span style={{ width: "5px", height: "5px", background: "#c8973a", transform: "rotate(45deg)" }} />
          <span style={{ width: "60px", height: "1px", background: "linear-gradient(to left, transparent, rgba(200,151,58,0.4))" }} />
        </div>
      </div>

      {/* Grid */}
      <div className="lc-grid lg:w-[90%] m-auto">
        {latestProducts.map((item, index) => (
          <div key={index} style={{ animation: `fadeUp 0.5s ease ${index * 0.07}s both` }}>
            <ProductItem
              id={item._id}
              image={item.image}
              name={item.name}
              price={item.price}
              discountPrice={item.discountPrice}
            />
          </div>
        ))}
      </div>

      {/* View All CTA */}
      <div style={{ textAlign: "center", marginTop: "56px" }}>
        <Link to="/collection" className="lc-viewall">
          VIEW ALL PRODUCTS
          <span className="lc-arrow">→</span>
        </Link>
      </div>
    </section>
  );
};

export default LatestCollection;