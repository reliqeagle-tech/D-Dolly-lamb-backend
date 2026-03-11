
// import React, { useContext, useEffect, useState } from "react";
// import { ShopContext } from "../context/ShopContext";
// import { Link } from "react-router-dom";

// const ProductItem = ({ id, image, name, price, discountPrice }) => {
//   const { currency, getProductReviews, toggleWishlistItem, wishlist } = useContext(ShopContext);

//   const [reviews, setReviews] = useState([]);
//   const [avgRating, setAvgRating] = useState(0);
//   const [hovered, setHovered] = useState(false);
//   const [imgIndex, setImgIndex] = useState(0);

//   useEffect(() => { loadReviews(); }, [id]);

//   const loadReviews = async () => {
//     const data = await getProductReviews(id);
//     setReviews(data || []);
//     if (data && data.length > 0) {
//       const average = data.reduce((sum, r) => sum + r.rating, 0) / data.length;
//       setAvgRating(average);
//     }
//   };

//   const isWishlisted = Array.isArray(wishlist)
//     ? wishlist.some(item => item.productId === id)
//     : false;

//   const percentOff = Number(discountPrice) || 0;
//   const isValidDiscount = percentOff > 0 && percentOff < 100;
//   const discountedPriceValue = isValidDiscount ? price - (price * percentOff) / 100 : price;
//   const hasDiscount = isValidDiscount;

//   const renderStars = (rating) =>
//     [...Array(5)].map((_, i) => {
//       const filled = i < Math.floor(rating);
//       const half = !filled && i < rating;
//       return (
//         <span key={i} style={{ color: filled || half ? "#c8973a" : "#3d2010", fontSize: "11px" }}>
//           {filled ? "★" : half ? "⯨" : "☆"}
//         </span>
//       );
//     });

//   return (
//     <>
//       <style>{`
//         .ddl-card {
//           background: linear-gradient(145deg, #1e110a, #160c06);
//           border: 1px solid rgba(200,151,58,0.18);
//           border-radius: 14px;
//           overflow: hidden;
//           transition: border-color 0.35s ease, transform 0.35s cubic-bezier(0.16,1,0.3,1), box-shadow 0.35s ease;
//           cursor: pointer;
//           position: relative;
//           display: block;
//           text-decoration: none;
//         }
//         .ddl-card:hover {
//           border-color: #c8973a;
//           transform: translateY(-6px);
//           box-shadow: 0 24px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(200,151,58,0.25);
//         }
//         .ddl-card:hover .ddl-img { transform: scale(1.06); }
//         .ddl-card:hover .ddl-quick-add { opacity: 1; transform: translateY(0); }
//         .ddl-card:hover .ddl-gold-line { width: 100%; }
//         .ddl-img {
//           transition: transform 0.5s cubic-bezier(0.16,1,0.3,1);
//           height: 100%; width: 100%; object-fit: contain;
//         }
//         .ddl-quick-add {
//           opacity: 0; transform: translateY(8px);
//           transition: opacity 0.3s ease, transform 0.3s ease;
//         }
//         .ddl-gold-line { width: 0; transition: width 0.4s ease; }
//         .ddl-wishlist {
//           background: rgba(255,255,255,0.92);
//           border: 1px solid rgba(200,151,58,0.35);
//           width: 34px; height: 34px;
//           display: flex; align-items: center; justify-content: center;
//           transition: all 0.2s; cursor: pointer; border-radius: 50%;
//         }
//         .ddl-wishlist:hover { background: #c8973a; border-color: #c8973a; }
//         .ddl-wishlist:hover svg path { stroke: #fff; }
//       `}</style>

//       <Link
//         to={`/product/${id}`}
//         onClick={() => window.scrollTo(0, 0)}
//         className="ddl-card"
//         onMouseEnter={() => setHovered(true)}
//         onMouseLeave={() => { setHovered(false); setImgIndex(0); }}
//       >
//         {/* IMAGE */}
//         <div style={{
//           position: "relative", width: "100%", aspectRatio: "4/3",
//           background: "#ffffff",            /* white so product images are crisp */
//           overflow: "hidden",
//           borderRadius: "13px 13px 0 0",
//         }}>
//           <img
//             src={Array.isArray(image) ? image[imgIndex] || image[0] : image}
//             alt={name}
//             className="ddl-img"
//             style={{ padding: "12px" }}
//           />

//           {/* Dot switcher */}
//           {Array.isArray(image) && image.length > 1 && (
//             <div style={{
//               position: "absolute", bottom: "10px", left: "50%",
//               transform: "translateX(-50%)", display: "flex", gap: "6px", zIndex: 5,
//             }}>
//               {image.slice(0, 4).map((_, i) => (
//                 <button key={i}
//                   onMouseEnter={(e) => { e.preventDefault(); e.stopPropagation(); setImgIndex(i); }}
//                   style={{
//                     width: i === imgIndex ? "20px" : "6px", height: "6px",
//                     background: i === imgIndex ? "#c8973a" : "rgba(200,151,58,0.4)",
//                     border: "none", borderRadius: "3px", cursor: "pointer", padding: 0, transition: "all 0.3s",
//                   }}
//                 />
//               ))}
//             </div>
//           )}

//           {/* Sale badge only */}
//           {hasDiscount && (
//             <div style={{ position: "absolute", top: "12px", left: "12px" }}>
//               <span style={{
//                 background: "linear-gradient(135deg, #c8973a, #f7c568)",
//                 color: "#1a0f0a", fontSize: "9px", letterSpacing: "0.22em",
//                 fontWeight: 700, padding: "3px 10px", fontFamily: "Georgia, serif", borderRadius: "2px",
//               }}>
//                 {percentOff}% OFF
//               </span>
//             </div>
//           )}

//           {/* Wishlist */}
//           {/* <button className="ddl-wishlist"
//             style={{ position: "absolute", top: "12px", right: "12px" }}
//             onClick={(e) => e.preventDefault()}> */}
//           <button
//             className="ddl-wishlist"
//             style={{ position: "absolute", top: "12px", right: "12px" }}
//             onClick={(e) => {
//               e.preventDefault();
//               e.stopPropagation();
//               toggleWishlistItem(id);
//             }}
//           >
//             <svg width="14" height="14" viewBox="0 0 24 24" fill={isWishlisted ? "#c8973a" : "none"}>
//               <path
//                 d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5
//                   2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09
//                   C13.09 3.81 14.76 3 16.5 3
//                   19.58 3 22 5.42 22 8.5
//                   c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
//                 stroke="#c8973a"
//                 strokeWidth="1.5"
//               />
//             </svg>
//             {/* <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
//               <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
//                 stroke="#c8973a" strokeWidth="1.5" fill="none" />
//             </svg> */}
//           </button>

//           {/* Quick add */}
//           <div className="ddl-quick-add"
//             style={{
//               position: "absolute", bottom: 0, left: 0, right: 0,
//               background: "linear-gradient(to top, rgba(13,7,3,0.92), transparent)",
//               padding: "24px 14px 14px",
//             }}
//             onClick={(e) => e.preventDefault()}>
//             <Link to={`/product/${id}`}>
//               <button style={{
//                 width: "100%", padding: "10px",
//                 background: "linear-gradient(135deg, #c8973a, #f7c568)",
//                 border: "none", color: "#1a0f0a", fontSize: "10px",
//                 letterSpacing: "0.22em", fontFamily: "Georgia, serif",
//                 fontWeight: 700, cursor: "pointer", borderRadius: "2px", transition: "opacity 0.2s",
//               }}
//                 onMouseEnter={(e) => (e.target.style.opacity = "0.85")}
//                 onMouseLeave={(e) => (e.target.style.opacity = "1")}>
//                 QUICK ADD
//               </button>
//             </Link>
//           </div>
//         </div>

//         {/* GOLD RULE */}
//         <div style={{ height: "1px", background: "#0d0703", position: "relative" }}>
//           <div className="ddl-gold-line" style={{
//             position: "absolute", top: 0, left: 0, height: "1px",
//             background: "linear-gradient(to right, #c8973a, #f7c568)",
//           }} />
//         </div>

//         {/* BODY */}
//         <div style={{ padding: "16px 18px 20px" }}>
//           <p style={{
//             fontSize: "13px", color: "#f5ede0", fontFamily: "Georgia, serif",
//             lineHeight: 1.45, marginBottom: "8px",
//             display: "-webkit-box", WebkitLineClamp: 2,
//             WebkitBoxOrient: "vertical", overflow: "hidden", letterSpacing: "0.02em",
//           }}>{name}</p>

//           <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "12px" }}>
//             <div style={{ display: "flex", gap: "2px" }}>{renderStars(avgRating)}</div>
//             <span style={{ fontSize: "10px", color: "#7a6050", fontFamily: "Georgia, serif" }}>
//               ({reviews.length})
//             </span>
//           </div>

//           <div style={{ height: "1px", background: "rgba(200,151,58,0.12)", marginBottom: "12px" }} />

//           <div style={{ display: "flex", alignItems: "baseline", gap: "8px", flexWrap: "wrap" }}>
//             {hasDiscount ? (
//               <>
//                 <span style={{ fontSize: "16px", fontWeight: 700, color: "#f7c568", fontFamily: "Georgia, serif" }}>
//                   {currency}{discountedPriceValue.toFixed(2)}
//                 </span>
//                 <span style={{ fontSize: "11px", color: "#5a4030", textDecoration: "line-through", fontFamily: "Georgia, serif" }}>
//                   {currency}{price}
//                 </span>
//                 <span style={{
//                   fontSize: "9px", color: "#c8973a", letterSpacing: "0.18em",
//                   fontFamily: "Georgia, serif", fontWeight: 700,
//                   background: "rgba(200,151,58,0.1)", padding: "2px 6px",
//                   border: "1px solid rgba(200,151,58,0.25)", borderRadius: "2px",
//                 }}>
//                   SAVE {percentOff}%
//                 </span>
//               </>
//             ) : (
//               <span style={{ fontSize: "16px", fontWeight: 700, color: "#f7c568", fontFamily: "Georgia, serif" }}>
//                 {currency}{price}
//               </span>
//             )}
//           </div>

//           <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "14px" }}>
//             <span style={{ fontSize: "9px", letterSpacing: "0.25em", color: "#7a6050", fontFamily: "Georgia, serif" }}>
//               LAMBSKIN
//             </span>
//             <span style={{
//               fontSize: "16px",
//               color: hovered ? "#f7c568" : "#3d2010",
//               transition: "color 0.3s, transform 0.3s",
//               transform: hovered ? "translateX(4px)" : "translateX(0)",
//               display: "inline-block",
//             }}>→</span>
//           </div>
//         </div>
//       </Link>
//     </>
//   );
// };

// export default ProductItem;





import React, { useContext, useEffect, useState, useRef, useCallback } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const ProductItem = ({ id, image, name, price, discountPrice }) => {
  const { currency, getProductReviews, toggleWishlistItem, wishlist } = useContext(ShopContext);

  const [reviews, setReviews] = useState([]);
  const [avgRating, setAvgRating] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [imgIndex, setImgIndex] = useState(0);
  const [sliding, setSliding] = useState(false);
  const [slideDir, setSlideDir] = useState(1); // 1 = forward, -1 = backward
  const [displayIdx, setDisplayIdx] = useState(0); // the currently visible image
  const autoRef = useRef(null);
  const images = Array.isArray(image) ? image : [image];

  useEffect(() => { loadReviews(); }, [id]);

  const loadReviews = async () => {
    const data = await getProductReviews(id);
    setReviews(data || []);
    if (data?.length > 0) {
      setAvgRating(data.reduce((s, r) => s + r.rating, 0) / data.length);
    }
  };

  /* ── Animated slide transition ── */
  const slideTo = useCallback((nextIdx, dir = 1) => {
    if (sliding || nextIdx === imgIndex) return;
    setSlideDir(dir);
    setSliding(true);
    setTimeout(() => {
      setImgIndex(nextIdx);
      setDisplayIdx(nextIdx);
      setSliding(false);
    }, 320);
  }, [sliding, imgIndex]);

  /* ── Auto-advance on hover ── */
  useEffect(() => {
    if (hovered && images.length > 1) {
      autoRef.current = setInterval(() => {
        setImgIndex(prev => {
          const next = (prev + 1) % images.length;
          setSlideDir(1);
          setSliding(true);
          setTimeout(() => { setDisplayIdx(next); setSliding(false); }, 320);
          return next;
        });
      }, 1800);
    } else {
      clearInterval(autoRef.current);
      if (!hovered) {
        slideTo(0, -1);
      }
    }
    return () => clearInterval(autoRef.current);
  }, [hovered, images.length]);

  const isWishlisted = Array.isArray(wishlist)
    ? wishlist.some(item => item.productId === id) : false;

  const percentOff = Number(discountPrice) || 0;
  const isValidDiscount = percentOff > 0 && percentOff < 100;
  const discountedPriceValue = isValidDiscount ? price - (price * percentOff) / 100 : price;
  const hasDiscount = isValidDiscount;

  const renderStars = (rating) =>
    [...Array(5)].map((_, i) => {
      const full = i < Math.floor(rating);
      const half = !full && i < rating;
      return (
        <span key={i} style={{
          fontSize: 10,
          color: full || half ? '#C9961A' : '#2E1E0C',
          transition: 'color .2s',
        }}>
          {full ? '★' : half ? '⯨' : '☆'}
        </span>
      );
    });

  const css = `
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Jost:wght@300;400;500;600;700&display=swap');

    .ddl-card {
      background: linear-gradient(145deg, #1e110a, #160c06);
      border: 1px solid rgba(200,151,58,0.18);
      border-radius: 14px;
      overflow: hidden;
      transition: border-color .35s ease, transform .35s cubic-bezier(.16,1,.3,1), box-shadow .35s ease;
      cursor: pointer;
      position: relative;
      display: block;
      text-decoration: none;
      font-family: 'Jost', sans-serif;
    }
    .ddl-card:hover {
      border-color: #c8973a;
      transform: translateY(-6px);
      box-shadow: 0 24px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(200,151,58,0.25);
    }

    /* ── Image container ── */
    .ddl-img-wrap {
      position: relative;
      width: 100%;
      aspect-ratio: 4/3;
      background: #F8F4EE;
      overflow: hidden;
      border-radius: 13px 13px 0 0;
    }

    /* ── Slider ── */
    .ddl-slide-track {
      position: absolute; inset: 0;
      display: flex; align-items: center; justify-content: center;
    }
    .ddl-slide-img {
      width: 100%; height: 100%;
      object-fit: contain;
      padding: 10px;
      position: absolute; inset: 0;
      transition: opacity .32s ease, transform .32s cubic-bezier(.4,0,.2,1);
      will-change: transform, opacity;
    }
    .ddl-slide-img.enter-fwd  { opacity: 0; transform: translateX(40px) scale(.97); }
    .ddl-slide-img.enter-back { opacity: 0; transform: translateX(-40px) scale(.97); }
    .ddl-slide-img.active     { opacity: 1; transform: translateX(0) scale(1); }
    .ddl-slide-img.exit-fwd   { opacity: 0; transform: translateX(-40px) scale(.97); }
    .ddl-slide-img.exit-back  { opacity: 0; transform: translateX(40px) scale(.97); }

    /* ── Dot nav ── */
    .ddl-dots {
      position: absolute; bottom: 10px; left: 50%;
      transform: translateX(-50%);
      display: flex; gap: 5px; z-index: 10;
      opacity: 0; transition: opacity .25s;
    }
    .ddl-card:hover .ddl-dots { opacity: 1; }
    .ddl-dot {
      height: 4px; border-radius: 2px;
      background: rgba(201,150,26,0.35);
      border: none; padding: 0; cursor: pointer;
      transition: width .3s ease, background .3s ease;
    }
    .ddl-dot.active { background: #C9961A; }

    /* ── Badge ── */
    .ddl-badge {
      position: absolute; top: 10px; left: 10px;
      background: linear-gradient(135deg, #C9961A, #F7C568);
      color: #0E0802; font-size: 8px; font-weight: 800;
      letter-spacing: .2em; padding: 3px 9px;
      font-family: 'Jost', sans-serif; border-radius: 3px;
      text-transform: uppercase; z-index: 8;
    }

    /* ── Wishlist btn ── */
    .ddl-wish {
      position: absolute; top: 10px; right: 10px;
      width: 32px; height: 32px; border-radius: 50%;
      background: rgba(255,255,255,0.92);
      border: 1px solid rgba(200,151,58,0.35);
      display: flex; align-items: center; justify-content: center;
      cursor: pointer; z-index: 8;
      transition: all .2s ease;
      backdrop-filter: blur(4px);
    }
    .ddl-wish:hover { background: #C9961A; border-color: #C9961A; }
    .ddl-wish:hover .ddl-wish-icon path { stroke: #fff; }
    .ddl-wish.active { background: rgba(201,150,26,0.15); border-color: #C9961A; }

    /* ── Quick view overlay ── */
    .ddl-overlay {
      position: absolute; bottom: 0; left: 0; right: 0;
      background: linear-gradient(to top, rgba(10,6,2,0.95) 0%, rgba(10,6,2,0.5) 60%, transparent 100%);
      padding: 32px 14px 14px;
      transform: translateY(100%);
      transition: transform .32s cubic-bezier(.4,0,.2,1);
      z-index: 6;
    }
    .ddl-card:hover .ddl-overlay { transform: translateY(0); }
    .ddl-quick-btn {
      width: 100%; padding: 9px 0;
      background: linear-gradient(110deg, #8B6914 0%, #C9961A 50%, #E0AE3A 100%);
      background-size: 200% 200%; background-position: 0% 50%;
      border: none; color: #0E0802;
      font-size: 9px; font-weight: 800; letter-spacing: .22em;
      font-family: 'Jost', sans-serif; cursor: pointer;
      border-radius: 4px; text-transform: uppercase;
      transition: background-position .4s ease, box-shadow .25s;
      position: relative; overflow: hidden;
    }
    .ddl-quick-btn::before {
      content: ''; position: absolute;
      top: -50%; left: -60%; width: 28%; height: 200%;
      background: rgba(255,255,255,0.15); transform: skewX(-20deg);
      transition: left .5s ease;
    }
    .ddl-quick-btn:hover::before { left: 120%; }
    .ddl-quick-btn:hover { background-position: 100% 50%; box-shadow: 0 4px 18px rgba(201,150,26,0.4); }

    /* ── Gold rule ── */
    .ddl-rule {
      height: 1px;
      background: #0d0703;
      position: relative;
      overflow: hidden;
    }
    .ddl-gold-line {
      position: absolute; top: 0; left: 0;
      width: 100%; height: 1px;
      background: linear-gradient(90deg,
        transparent 0%,
        #8B6914 20%,
        #c8973a 45%,
        #f7c568 50%,
        #c8973a 55%,
        #8B6914 80%,
        transparent 100%
      );
      transform: scaleX(0) translateZ(0);
      transform-origin: left center;
      transition: transform 0.55s cubic-bezier(0.16, 1, 0.3, 1);
      will-change: transform;
      filter: blur(0px);
    }
    .ddl-card:hover .ddl-gold-line {
      transform: scaleX(1) translateZ(0);
    }
    /* soft glow pulse after line appears */
    @keyframes ddlGlow {
      0%   { opacity: 1; filter: blur(0px) brightness(1); }
      50%  { opacity: 1; filter: blur(0.6px) brightness(1.6); }
      100% { opacity: 1; filter: blur(0px) brightness(1); }
    }
    .ddl-card:hover .ddl-gold-line {
      transform: scaleX(1) translateZ(0);
      animation: ddlGlow 1.2s ease 0.45s infinite;
    }

    /* ── Body ── */
    .ddl-body { padding: 16px 18px 20px; }

    .ddl-name {
      font-family: 'Georgia', serif;
      font-size: 13px; font-weight: 400;
      color: #f5ede0; line-height: 1.45;
      margin-bottom: 8px; letter-spacing: .02em;
      display: -webkit-box; -webkit-line-clamp: 2;
      -webkit-box-orient: vertical; overflow: hidden;
      transition: color .25s;
    }
    .ddl-card:hover .ddl-name { color: #F7C568; }

    .ddl-stars { display: flex; align-items: center; gap: 6px; margin-bottom: 10px; }
    .ddl-review-count { font-size: 10px; color: #7a6050; font-family: 'Georgia', serif; }

    .ddl-sep {
      height: 1px;
      background: rgba(200,151,58,0.12);
      margin-bottom: 10px;
    }

    .ddl-price-row { display: flex; align-items: baseline; gap: 7px; flex-wrap: wrap; }
    .ddl-price-main {
      font-family: 'Georgia', serif;
      font-size: 16px; font-weight: 700; color: #f7c568;
    }
    .ddl-price-old {
      font-size: 11px; color: #5a4030;
      text-decoration: line-through; font-family: 'Georgia', serif;
    }
    .ddl-save-tag {
      font-size: 9px; color: #c8973a; letter-spacing: .18em; font-weight: 700;
      font-family: 'Georgia', serif;
      background: rgba(200,151,58,0.1);
      padding: 2px 6px; border: 1px solid rgba(200,151,58,0.25); border-radius: 2px;
    }

    .ddl-footer {
      display: flex; justify-content: space-between; align-items: center;
      margin-top: 14px;
    }
    .ddl-material {
      font-size: 9px; letter-spacing: .25em; color: #7a6050;
      text-transform: uppercase; font-family: 'Georgia', serif;
    }
    .ddl-arrow {
      font-size: 16px; display: inline-block;
      transition: color .35s ease, transform .5s cubic-bezier(.16,1,.3,1);
      color: #3d2010;
    }
    .ddl-card:hover .ddl-arrow {
      color: #f7c568;
      transform: translateX(4px);
    }
  `;

  /* Which images to show — current (displaying) vs incoming (animating in) */
  const showPrev = sliding ? displayIdx : null; // exiting
  const showCurr = sliding ? imgIndex : displayIdx; // entering

  return (
    <>
      <style>{css}</style>

      <Link
        to={`/product/${id}`}
        onClick={() => window.scrollTo(0, 0)}
        className="ddl-card"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* ── IMAGE ZONE ── */}
        <div className="ddl-img-wrap">

          {/* Exiting image */}
          {sliding && showPrev !== null && (
            <img
              src={images[showPrev] || images[0]}
              alt={name}
              className={`ddl-slide-img ${slideDir === 1 ? 'exit-fwd' : 'exit-back'}`}
              style={{ zIndex: 1 }}
            />
          )}

          {/* Active / entering image */}
          <img
            src={images[showCurr] || images[0]}
            alt={name}
            className={`ddl-slide-img ${sliding ? (slideDir === 1 ? 'enter-fwd' : 'enter-back') : 'active'}`}
            style={{
              zIndex: 2,
              /* Force re-trigger animation when index changes */
              animation: sliding
                ? `ddlSlideIn${slideDir === 1 ? 'Fwd' : 'Back'} .32s cubic-bezier(.4,0,.2,1) forwards`
                : 'none',
            }}
          />

          {/* Sale badge */}
          {hasDiscount && (
            <div className="ddl-badge" style={{ zIndex: 8 }}>
              {percentOff}% OFF
            </div>
          )}

          {/* Wishlist */}
          <button
            className={`ddl-wish${isWishlisted ? ' active' : ''}`}
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggleWishlistItem(id); }}
          >
            <svg className="ddl-wish-icon" width="13" height="13" viewBox="0 0 24 24"
              fill={isWishlisted ? '#C9961A' : 'none'}>
              <path
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5
                   2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09
                   C13.09 3.81 14.76 3 16.5 3
                   19.58 3 22 5.42 22 8.5
                   c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                stroke="#C9961A" strokeWidth="1.5"
              />
            </svg>
          </button>

          {/* Dot indicators */}
          {images.length > 1 && (
            <div className="ddl-dots">
              {images.slice(0, 5).map((_, i) => (
                <button
                  key={i}
                  className={`ddl-dot${i === imgIndex ? ' active' : ''}`}
                  style={{ width: i === imgIndex ? 18 : 4 }}
                  onMouseEnter={(e) => { e.preventDefault(); e.stopPropagation(); slideTo(i, i > imgIndex ? 1 : -1); }}
                  onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}
                />
              ))}
            </div>
          )}

          {/* Quick view overlay */}
          <div className="ddl-overlay" onClick={(e) => e.preventDefault()}>
            <Link to={`/product/${id}`} onClick={(e) => e.stopPropagation()}>
              <button className="ddl-quick-btn">View Product</button>
            </Link>
          </div>
        </div>

        {/* ── GOLD RULE ── */}
        <div className="ddl-rule">
          <div className="ddl-gold-line" />
        </div>

        {/* ── BODY ── */}
        <div className="ddl-body">

          <p className="ddl-name">{name}</p>

          <div className="ddl-stars">
            <div style={{ display: 'flex', gap: 2 }}>{renderStars(avgRating)}</div>
            <span className="ddl-review-count">({reviews.length})</span>
          </div>

          <div className="ddl-sep" />

          <div className="ddl-price-row">
            {hasDiscount ? (
              <>
                <span className="ddl-price-main">{currency}{discountedPriceValue.toFixed(2)}</span>
                <span className="ddl-price-old">{currency}{price}</span>
                <span className="ddl-save-tag">–{percentOff}%</span>
              </>
            ) : (
              <span className="ddl-price-main">{currency}{price}</span>
            )}
          </div>

          <div className="ddl-footer">
            <span className="ddl-material">Premium Leather</span>
            <span className="ddl-arrow">→</span>
          </div>
        </div>

        {/* Inline keyframes for slide animations */}
        <style>{`
          @keyframes ddlSlideInFwd {
            from { opacity:0; transform: translateX(36px) scale(.97); }
            to   { opacity:1; transform: translateX(0)    scale(1);   }
          }
          @keyframes ddlSlideInBack {
            from { opacity:0; transform: translateX(-36px) scale(.97); }
            to   { opacity:1; transform: translateX(0)     scale(1);   }
          }
        `}</style>
      </Link>
    </>
  );
};

export default ProductItem;