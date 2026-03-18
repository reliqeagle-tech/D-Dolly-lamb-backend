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
    <section
      className="px-[5%] py-20 sm:py-24"
      style={{ background: "#1a0f0a" }}
    >
      <style>{`
        @keyframes fadeUp {
          from { opacity:0; transform:translateY(24px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .lc-header { animation: fadeUp 0.7s ease forwards; }
        /* gradient hover on viewall needs inline handler — arrow child transition kept here */
        .lc-viewall:hover .lc-arrow { transform:translateX(5px); color:#1a0f0a; }
        .lc-arrow { transition:transform 0.3s, color 0.3s; color:#c8973a; }
      `}</style>

      {/* ── Header ── */}
      <div className="lc-header text-center mb-16">
        <Title text1="LATEST" text2="COLLECTIONS" />

        <p
          className="max-w-[520px] mx-auto mt-5 text-sm italic leading-loose tracking-[0.03em]"
          style={{ color: "#7a6050", fontFamily: "Georgia,serif" }}
        >
          Each piece in our latest drop is individually hand-cut from premium Grade A lambskin —
          soft from the first wear, refined for a lifetime.
        </p>

        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-4 mt-7">
          <span
            className="block w-16 h-px"
            style={{ background: "linear-gradient(to right,transparent,rgba(200,151,58,0.4))" }}
          />
          <span
            className="block w-[5px] h-[5px] rotate-45"
            style={{ background: "#c8973a" }}
          />
          <span
            className="block w-16 h-px"
            style={{ background: "linear-gradient(to left,transparent,rgba(200,151,58,0.4))" }}
          />
        </div>
      </div>

      {/* ── Product Grid ── */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5 lg:w-[90%] mx-auto">
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

      {/* ── View All CTA ── */}
      <div className="text-center mt-14">
        <Link
          to="/collection"
          className="lc-viewall inline-flex items-center gap-2.5 px-10 py-3.5 rounded-sm text-[11px] tracking-[0.22em] font-semibold no-underline transition-all duration-300"
          style={{
            border: "1px solid rgba(200,151,58,0.4)",
            color: "#f7c568",
            fontFamily: "Georgia,serif",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "linear-gradient(135deg,#c8973a,#f7c568)";
            e.currentTarget.style.color = "#1a0f0a";
            e.currentTarget.style.borderColor = "transparent";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = "#f7c568";
            e.currentTarget.style.borderColor = "rgba(200,151,58,0.4)";
          }}
        >
          VIEW ALL PRODUCTS
          <span className="lc-arrow">→</span>
        </Link>
      </div>
    </section>
  );
};

export default LatestCollection;