// import React, { useContext, useEffect, useState, useRef, useCallback } from "react";
// import { ShopContext } from "../context/ShopContext";
// import { Link } from "react-router-dom";

// const ProductItem = ({ id, image, name, price, discountPrice }) => {
//   const { currency, getProductReviews, toggleWishlistItem, wishlist } = useContext(ShopContext);

//   const [reviews, setReviews] = useState([]);
//   const [avgRating, setAvgRating] = useState(0);
//   const [hovered, setHovered] = useState(false);
//   const [imgIndex, setImgIndex] = useState(0);
//   const [sliding, setSliding] = useState(false);
//   const [slideDir, setSlideDir] = useState(1); // 1 = forward, -1 = backward
//   const [displayIdx, setDisplayIdx] = useState(0); // the currently visible image
//   const autoRef = useRef(null);
//   const images = Array.isArray(image) ? image : [image];

//   useEffect(() => { loadReviews(); }, [id]);

//   const loadReviews = async () => {
//     const data = await getProductReviews(id);
//     setReviews(data || []);
//     if (data?.length > 0) {
//       setAvgRating(data.reduce((s, r) => s + r.rating, 0) / data.length);
//     }
//   };

//   /* ── Animated slide transition ── */
//   const slideTo = useCallback((nextIdx, dir = 1) => {
//     if (sliding || nextIdx === imgIndex) return;
//     setSlideDir(dir);
//     setSliding(true);
//     setTimeout(() => {
//       setImgIndex(nextIdx);
//       setDisplayIdx(nextIdx);
//       setSliding(false);
//     }, 320);
//   }, [sliding, imgIndex]);

//   /* ── Auto-advance on hover ── */
//   useEffect(() => {
//     if (hovered && images.length > 1) {
//       autoRef.current = setInterval(() => {
//         setImgIndex(prev => {
//           const next = (prev + 1) % images.length;
//           setSlideDir(1);
//           setSliding(true);
//           setTimeout(() => { setDisplayIdx(next); setSliding(false); }, 320);
//           return next;
//         });
//       }, 1800);
//     } else {
//       clearInterval(autoRef.current);
//       if (!hovered) {
//         slideTo(0, -1);
//       }
//     }
//     return () => clearInterval(autoRef.current);
//   }, [hovered, images.length]);

//   const isWishlisted = Array.isArray(wishlist)
//     ? wishlist.some(item => item.productId === id) : false;

//   const percentOff = Number(discountPrice) || 0;
//   const isValidDiscount = percentOff > 0 && percentOff < 100;
//   const discountedPriceValue = isValidDiscount ? price - (price * percentOff) / 100 : price;
//   const hasDiscount = isValidDiscount;

//   const renderStars = (rating) =>
//     [...Array(5)].map((_, i) => {
//       const full = i < Math.floor(rating);
//       const half = !full && i < rating;
//       return (
//         <span key={i} style={{
//           fontSize: 10,
//           color: full || half ? '#C9961A' : '#2E1E0C',
//           transition: 'color .2s',
//         }}>
//           {full ? '★' : half ? '⯨' : '☆'}
//         </span>
//       );
//     });

//   const css = `
//     @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Jost:wght@300;400;500;600;700&display=swap');

//     .ddl-card {
//       background: linear-gradient(145deg, #1e110a, #160c06);
//       border: 1px solid rgba(200,151,58,0.18);
//       border-radius: 14px;
//       overflow: hidden;
//       transition: border-color .35s ease, transform .35s cubic-bezier(.16,1,.3,1), box-shadow .35s ease;
//       cursor: pointer;
//       position: relative;
//       display: block;
//       text-decoration: none;
//       font-family: 'Jost', sans-serif;
//     }
//     .ddl-card:hover {
//       border-color: #c8973a;
//       transform: translateY(-6px);
//       box-shadow: 0 24px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(200,151,58,0.25);
//     }

//     /* ── Image container ── */
//     .ddl-img-wrap {
//       position: relative;
//       width: 100%;
//       aspect-ratio: 4/3;
//       background: #F8F4EE;
//       overflow: hidden;
//       border-radius: 13px 13px 0 0;
//     }

//     /* ── Slider ── */
//     .ddl-slide-track {
//       position: absolute; inset: 0;
//       display: flex; align-items: center; justify-content: center;
//     }
//     .ddl-slide-img {
//       width: 100%; height: 100%;
//       object-fit: contain;
//       padding: 10px;
//       position: absolute; inset: 0;
//       transition: opacity .32s ease, transform .32s cubic-bezier(.4,0,.2,1);
//       will-change: transform, opacity;
//     }
//     .ddl-slide-img.enter-fwd  { opacity: 0; transform: translateX(40px) scale(.97); }
//     .ddl-slide-img.enter-back { opacity: 0; transform: translateX(-40px) scale(.97); }
//     .ddl-slide-img.active     { opacity: 1; transform: translateX(0) scale(1); }
//     .ddl-slide-img.exit-fwd   { opacity: 0; transform: translateX(-40px) scale(.97); }
//     .ddl-slide-img.exit-back  { opacity: 0; transform: translateX(40px) scale(.97); }

//     /* ── Dot nav ── */
//     .ddl-dots {
//       position: absolute; bottom: 10px; left: 50%;
//       transform: translateX(-50%);
//       display: flex; gap: 5px; z-index: 10;
//       opacity: 0; transition: opacity .25s;
//     }
//     .ddl-card:hover .ddl-dots { opacity: 1; }
//     .ddl-dot {
//       height: 4px; border-radius: 2px;
//       background: rgba(201,150,26,0.35);
//       border: none; padding: 0; cursor: pointer;
//       transition: width .3s ease, background .3s ease;
//     }
//     .ddl-dot.active { background: #C9961A; }

//     /* ── Badge ── */
//     .ddl-badge {
//       position: absolute; top: 10px; left: 10px;
//       background: linear-gradient(135deg, #C9961A, #F7C568);
//       color: #0E0802; font-size: 8px; font-weight: 800;
//       letter-spacing: .2em; padding: 3px 9px;
//       font-family: 'Jost', sans-serif; border-radius: 3px;
//       text-transform: uppercase; z-index: 8;
//     }

//     /* ── Wishlist btn ── */
//     .ddl-wish {
//       position: absolute; top: 10px; right: 10px;
//       width: 32px; height: 32px; border-radius: 50%;
//       background: rgba(255,255,255,0.92);
//       border: 1px solid rgba(200,151,58,0.35);
//       display: flex; align-items: center; justify-content: center;
//       cursor: pointer; z-index: 8;
//       transition: all .2s ease;
//       backdrop-filter: blur(4px);
//     }
//     .ddl-wish:hover { background: #C9961A; border-color: #C9961A; }
//     .ddl-wish:hover .ddl-wish-icon path { stroke: #fff; }
//     .ddl-wish.active { background: rgba(201,150,26,0.15); border-color: #C9961A; }

//     /* ── Quick view overlay ── */
//     .ddl-overlay {
//       position: absolute; bottom: 0; left: 0; right: 0;
//       background: linear-gradient(to top, rgba(10,6,2,0.95) 0%, rgba(10,6,2,0.5) 60%, transparent 100%);
//       padding: 32px 14px 14px;
//       transform: translateY(100%);
//       transition: transform .32s cubic-bezier(.4,0,.2,1);
//       z-index: 6;
//     }
//     .ddl-card:hover .ddl-overlay { transform: translateY(0); }
//     .ddl-quick-btn {
//       width: 100%; padding: 9px 0;
//       background: linear-gradient(110deg, #8B6914 0%, #C9961A 50%, #E0AE3A 100%);
//       background-size: 200% 200%; background-position: 0% 50%;
//       border: none; color: #0E0802;
//       font-size: 9px; font-weight: 800; letter-spacing: .22em;
//       font-family: 'Jost', sans-serif; cursor: pointer;
//       border-radius: 4px; text-transform: uppercase;
//       transition: background-position .4s ease, box-shadow .25s;
//       position: relative; overflow: hidden;
//     }
//     .ddl-quick-btn::before {
//       content: ''; position: absolute;
//       top: -50%; left: -60%; width: 28%; height: 200%;
//       background: rgba(255,255,255,0.15); transform: skewX(-20deg);
//       transition: left .5s ease;
//     }
//     .ddl-quick-btn:hover::before { left: 120%; }
//     .ddl-quick-btn:hover { background-position: 100% 50%; box-shadow: 0 4px 18px rgba(201,150,26,0.4); }

//     /* ── Gold rule ── */
//     .ddl-rule {
//       height: 1px;
//       background: #0d0703;
//       position: relative;
//       overflow: hidden;
//     }
//     .ddl-gold-line {
//       position: absolute; top: 0; left: 0;
//       width: 100%; height: 1px;
//       background: linear-gradient(90deg,
//         transparent 0%,
//         #8B6914 20%,
//         #c8973a 45%,
//         #f7c568 50%,
//         #c8973a 55%,
//         #8B6914 80%,
//         transparent 100%
//       );
//       transform: scaleX(0) translateZ(0);
//       transform-origin: left center;
//       transition: transform 0.55s cubic-bezier(0.16, 1, 0.3, 1);
//       will-change: transform;
//       filter: blur(0px);
//     }
//     .ddl-card:hover .ddl-gold-line {
//       transform: scaleX(1) translateZ(0);
//     }
//     /* soft glow pulse after line appears */
//     @keyframes ddlGlow {
//       0%   { opacity: 1; filter: blur(0px) brightness(1); }
//       50%  { opacity: 1; filter: blur(0.6px) brightness(1.6); }
//       100% { opacity: 1; filter: blur(0px) brightness(1); }
//     }
//     .ddl-card:hover .ddl-gold-line {
//       transform: scaleX(1) translateZ(0);
//       animation: ddlGlow 1.2s ease 0.45s infinite;
//     }

//     /* ── Body ── */
//     .ddl-body { padding: 16px 18px 20px; }

//     .ddl-name {
//       font-family: 'Montserrat', serif;
//       font-size: 13px; font-weight: 400;
//       color: #f5ede0; line-height: 1.45;
//       margin-bottom: 8px; letter-spacing: .02em;
//       display: -webkit-box; -webkit-line-clamp: 2;
//       -webkit-box-orient: vertical; overflow: hidden;
//       transition: color .25s;
//     }
//     .ddl-card:hover .ddl-name { color: #F7C568; }

//     .ddl-stars { display: flex; align-items: center; gap: 6px; margin-bottom: 10px; }
//     .ddl-review-count { font-size: 10px; color: #7a6050; font-family: 'Georgia', serif; }

//     .ddl-sep {
//       height: 1px;
//       background: rgba(200,151,58,0.12);
//       margin-bottom: 10px;
//     }

//     .ddl-price-row { display: flex; align-items: baseline; gap: 7px; flex-wrap: wrap; }
//     .ddl-price-main {
//       font-family: 'Montserrat', serif;
//       font-size: 16px; font-weight: 700; color: #f7c568;
//     }
//     .ddl-price-old {
//       font-size: 11px; color: #5a4030;
//       text-decoration: line-through; font-family: 'Montserrat', serif;
//     }
//     .ddl-save-tag {
//       font-size: 9px; color: #c8973a; letter-spacing: .18em; font-weight: 700;
//       font-family: 'Montserrat', serif;
//       background: rgba(200,151,58,0.1);
//       padding: 2px 6px; border: 1px solid rgba(200,151,58,0.25); border-radius: 2px;
//     }

//     .ddl-footer {
//       display: flex; justify-content: space-between; align-items: center;
//       margin-top: 14px;
//     }
//     .ddl-material {
//       font-size: 9px; letter-spacing: .25em; color: #7a6050;
//       text-transform: uppercase; font-family: 'Georgia', serif;
//     }
//     .ddl-arrow {
//       font-size: 16px; display: inline-block;
//       transition: color .35s ease, transform .5s cubic-bezier(.16,1,.3,1);
//       color: #3d2010;
//     }
//     .ddl-card:hover .ddl-arrow {
//       color: #f7c568;
//       transform: translateX(4px);
//     }
//   `;

//   /* Which images to show — current (displaying) vs incoming (animating in) */
//   const showPrev = sliding ? displayIdx : null; // exiting
//   const showCurr = sliding ? imgIndex : displayIdx; // entering

//   return (
//     <>
//       <style>{css}</style>

//       <Link
//         to={`/product/${id}`}
//         onClick={() => window.scrollTo(0, 0)}
//         className="ddl-card"
//         onMouseEnter={() => setHovered(true)}
//         onMouseLeave={() => setHovered(false)}
//       >
//         {/* ── IMAGE ZONE ── */}
//         <div className="ddl-img-wrap">

//           {/* Exiting image */}
//           {sliding && showPrev !== null && (
//             <img
//               src={images[showPrev] || images[0]}
//               alt={name}
//               className={`ddl-slide-img ${slideDir === 1 ? 'exit-fwd' : 'exit-back'}`}
//               style={{ zIndex: 1 }}
//             />
//           )}

//           {/* Active / entering image */}
//           <img
//             src={images[showCurr] || images[0]}
//             alt={name}
//             className={`ddl-slide-img ${sliding ? (slideDir === 1 ? 'enter-fwd' : 'enter-back') : 'active'}`}
//             style={{
//               zIndex: 2,
//               /* Force re-trigger animation when index changes */
//               animation: sliding
//                 ? `ddlSlideIn${slideDir === 1 ? 'Fwd' : 'Back'} .32s cubic-bezier(.4,0,.2,1) forwards`
//                 : 'none',
//             }}
//           />

//           {/* Sale badge */}
//           {hasDiscount && (
//             <div className="ddl-badge" style={{ zIndex: 8 }}>
//               {percentOff}% OFF
//             </div>
//           )}

//           {/* Wishlist */}
//           <button
//             className={`ddl-wish${isWishlisted ? ' active' : ''}`}
//             onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggleWishlistItem(id); }}
//           >
//             <svg className="ddl-wish-icon" width="13" height="13" viewBox="0 0 24 24"
//               fill={isWishlisted ? '#C9961A' : 'none'}>
//               <path
//                 d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5
//                    2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09
//                    C13.09 3.81 14.76 3 16.5 3
//                    19.58 3 22 5.42 22 8.5
//                    c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
//                 stroke="#C9961A" strokeWidth="1.5"
//               />
//             </svg>
//           </button>

//           {/* Dot indicators */}
//           {images.length > 1 && (
//             <div className="ddl-dots">
//               {images.slice(0, 5).map((_, i) => (
//                 <button
//                   key={i}
//                   className={`ddl-dot${i === imgIndex ? ' active' : ''}`}
//                   style={{ width: i === imgIndex ? 18 : 4 }}
//                   onMouseEnter={(e) => { e.preventDefault(); e.stopPropagation(); slideTo(i, i > imgIndex ? 1 : -1); }}
//                   onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}
//                 />
//               ))}
//             </div>
//           )}

//           {/* Quick view overlay */}
//           <div className="ddl-overlay" onClick={(e) => e.preventDefault()}>
//             <Link to={`/product/${id}`} onClick={(e) => e.stopPropagation()}>
//               <button className="ddl-quick-btn">View Product</button>
//             </Link>
//           </div>
//         </div>

//         {/* ── GOLD RULE ── */}
//         <div className="ddl-rule">
//           <div className="ddl-gold-line" />
//         </div>

//         {/* ── BODY ── */}
//         <div className="ddl-body">

//           <p className="ddl-name">{name}</p>

//           <div className="ddl-stars">
//             <div style={{ display: 'flex', gap: 2 }}>{renderStars(avgRating)}</div>
//             <span className="ddl-review-count">({reviews.length})</span>
//           </div>

//           <div className="ddl-sep" />

//           <div className="ddl-price-row">
//             {hasDiscount ? (
//               <>
//                 <span className="ddl-price-main">{currency}{discountedPriceValue.toFixed(2)}</span>
//                 <span className="ddl-price-old">{currency}{price}</span>
//                 <span className="ddl-save-tag">–{percentOff}%</span>
//               </>
//             ) : (
//               <span className="ddl-price-main">{currency}{price}</span>
//             )}
//           </div>

//           <div className="ddl-footer">
//             <span className="ddl-material">Premium Leather</span>
//             <span className="ddl-arrow">→</span>
//           </div>
//         </div>

//         {/* Inline keyframes for slide animations */}
//         <style>{`
//           @keyframes ddlSlideInFwd {
//             from { opacity:0; transform: translateX(36px) scale(.97); }
//             to   { opacity:1; transform: translateX(0)    scale(1);   }
//           }
//           @keyframes ddlSlideInBack {
//             from { opacity:0; transform: translateX(-36px) scale(.97); }
//             to   { opacity:1; transform: translateX(0)     scale(1);   }
//           }
//         `}</style>
//       </Link>
//     </>
//   );
// };

// export default ProductItem;




import React, { useContext, useEffect, useState, useRef, useCallback } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

/* ── Keyframes only — cannot be replaced by Tailwind ── */
const ANIM = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Jost:wght@300;400;500;600;700&display=swap');

  @keyframes ddlGlow {
    0%,100% { opacity:1; filter: blur(0px) brightness(1); }
    50%      { opacity:1; filter: blur(0.6px) brightness(1.6); }
  }
  @keyframes ddlSlideInFwd {
    from { opacity:0; transform: translateX(36px) scale(.97); }
    to   { opacity:1; transform: translateX(0) scale(1); }
  }
  @keyframes ddlSlideInBack {
    from { opacity:0; transform: translateX(-36px) scale(.97); }
    to   { opacity:1; transform: translateX(0) scale(1); }
  }

  .ddl-gold-line {
    position: absolute; top: 0; left: 0;
    width: 100%; height: 1px;
    background: linear-gradient(90deg,
      transparent 0%, #8B6914 20%, #c8973a 45%,
      #f7c568 50%, #c8973a 55%, #8B6914 80%, transparent 100%
    );
    transform: scaleX(0) translateZ(0);
    transform-origin: left center;
    transition: transform 0.55s cubic-bezier(0.16,1,0.3,1);
    will-change: transform;
  }
  .ddl-card:hover .ddl-gold-line {
    transform: scaleX(1) translateZ(0);
    animation: ddlGlow 1.2s ease 0.45s infinite;
  }
  .ddl-card:hover .ddl-dots-wrap { opacity: 1; }
  .ddl-card:hover .ddl-overlay   { transform: translateY(0); }
  .ddl-card:hover .ddl-name      { color: #F7C568; }
  .ddl-card:hover .ddl-arrow     { color: #f7c568; transform: translateX(4px); }
  .ddl-card:hover                {
    border-color: #c8973a;
    transform: translateY(-6px);
    box-shadow: 0 24px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(200,151,58,0.25);
  }

  .ddl-slide-img {
    width: 100%; height: 100%;
    object-fit: contain; padding: 10px;
    position: absolute; inset: 0;
    transition: opacity .32s ease, transform .32s cubic-bezier(.4,0,.2,1);
    will-change: transform, opacity;
  }
  .ddl-slide-img.enter-fwd  { opacity: 0; transform: translateX(40px) scale(.97); }
  .ddl-slide-img.enter-back { opacity: 0; transform: translateX(-40px) scale(.97); }
  .ddl-slide-img.active     { opacity: 1; transform: translateX(0) scale(1); }
  .ddl-slide-img.exit-fwd   { opacity: 0; transform: translateX(-40px) scale(.97); }
  .ddl-slide-img.exit-back  { opacity: 0; transform: translateX(40px) scale(.97); }

  .ddl-quick-btn::before {
    content: ''; position: absolute;
    top: -50%; left: -60%; width: 28%; height: 200%;
    background: rgba(255,255,255,0.15); transform: skewX(-20deg);
    transition: left .5s ease;
  }
  .ddl-quick-btn:hover::before { left: 120%; }
  .ddl-quick-btn:hover {
    background-position: 100% 50%;
    box-shadow: 0 4px 18px rgba(201,150,26,0.4);
  }
`;

const ProductItem = ({ id, image, name, price, discountPrice }) => {
  const { currency, getProductReviews, toggleWishlistItem, wishlist } = useContext(ShopContext);

  const [reviews, setReviews] = useState([]);
  const [avgRating, setAvgRating] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [imgIndex, setImgIndex] = useState(0);
  const [sliding, setSliding] = useState(false);
  const [slideDir, setSlideDir] = useState(1);
  const [displayIdx, setDisplayIdx] = useState(0);
  const autoRef = useRef(null);
  const images = Array.isArray(image) ? image : [image];

  useEffect(() => { loadReviews(); }, [id]);

  const loadReviews = async () => {
    const data = await getProductReviews(id);
    setReviews(data || []);
    if (data?.length > 0)
      setAvgRating(data.reduce((s, r) => s + r.rating, 0) / data.length);
  };

  const slideTo = useCallback((nextIdx, dir = 1) => {
    if (sliding || nextIdx === imgIndex) return;
    setSlideDir(dir);
    setSliding(true);
    setTimeout(() => { setImgIndex(nextIdx); setDisplayIdx(nextIdx); setSliding(false); }, 320);
  }, [sliding, imgIndex]);

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
      if (!hovered) slideTo(0, -1);
    }
    return () => clearInterval(autoRef.current);
  }, [hovered, images.length]);

  const isWishlisted = Array.isArray(wishlist) ? wishlist.some(item => item.productId === id) : false;
  const percentOff = Number(discountPrice) || 0;
  const isValidDiscount = percentOff > 0 && percentOff < 100;
  const discountedPriceValue = isValidDiscount ? price - (price * percentOff) / 100 : price;
  const hasDiscount = isValidDiscount;

  const renderStars = (rating) =>
    [...Array(5)].map((_, i) => {
      const full = i < Math.floor(rating);
      const half = !full && i < rating;
      return (
        <span key={i} className="text-[10px] transition-colors duration-200"
          style={{ color: full || half ? "#C9961A" : "#2E1E0C" }}>
          {full ? "★" : half ? "⯨" : "☆"}
        </span>
      );
    });

  const showPrev = sliding ? displayIdx : null;
  const showCurr = sliding ? imgIndex : displayIdx;

  return (
    <>
      <style>{ANIM}</style>

      <Link
        to={`/product/${id}`}
        onClick={() => window.scrollTo(0, 0)}
        className="
          ddl-card block no-underline cursor-pointer relative
          bg-gradient-to-br from-[#1e110a] to-[#160c06]
          border border-[#c8973a]/[0.18] rounded-[14px] overflow-hidden
          transition-[border-color,transform,box-shadow] duration-[350ms] ease-[cubic-bezier(.16,1,.3,1)]
          font-['Jost',sans-serif]
        "
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* ── IMAGE ZONE ── */}
        <div className="relative w-full aspect-[7/6] bg-[#F8F4EE] overflow-hidden rounded-t-[13px]">

          {/* Exiting image */}
          {sliding && showPrev !== null && (
            <img
              src={images[showPrev] || images[0]}
              alt={name}
              className={`ddl-slide-img ${slideDir === 1 ? "exit-fwd" : "exit-back"}`}
              style={{ zIndex: 1 }}
            />
          )}

          {/* Active / entering image */}
          <img
            src={images[showCurr] || images[0]}
            alt={name}
            className={`ddl-slide-img ${sliding ? (slideDir === 1 ? "enter-fwd" : "enter-back") : "active"}`}
            style={{
              zIndex: 2,
              animation: sliding
                ? `ddlSlideIn${slideDir === 1 ? "Fwd" : "Back"} .32s cubic-bezier(.4,0,.2,1) forwards`
                : "none",
            }}
          />

          {/* Sale badge */}
          {hasDiscount && (
            <div className="absolute top-2.5 left-2.5 z-[8] bg-gradient-to-br from-[#C9961A] to-[#F7C568] text-[#0E0802] text-[8px] font-extrabold tracking-[0.2em] px-[9px] py-[3px] rounded-[3px] uppercase font-['Jost',sans-serif]">
              {percentOff}% OFF
            </div>
          )}

          {/* Wishlist */}
          <button
            className={`
              absolute top-2.5 right-2.5 z-[8] w-8 h-8 rounded-full
              flex items-center justify-center cursor-pointer
              backdrop-blur-sm border transition-all duration-200
              hover:bg-[#C9961A] hover:border-[#C9961A]
              ${isWishlisted
                ? "bg-[rgba(201,150,26,0.15)] border-[#C9961A]"
                : "bg-white/[0.92] border-[#c8973a]/35"
              }
            `}
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggleWishlistItem(id); }}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill={isWishlisted ? "#C9961A" : "none"}
              className="[&_path]:transition-[stroke] [&_path]:duration-200 hover:[&_path]:stroke-white">
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
            <div className="ddl-dots-wrap absolute bottom-2.5 left-1/2 -translate-x-1/2 flex gap-[5px] z-10 opacity-0 transition-opacity duration-[250ms]">
              {images.slice(0, 5).map((_, i) => (
                <button
                  key={i}
                  className={`h-1 rounded-[2px] border-none p-0 cursor-pointer transition-[width,background] duration-300 ${i === imgIndex ? "bg-[#C9961A]" : "bg-[rgba(201,150,26,0.35)]"}`}
                  style={{ width: i === imgIndex ? 18 : 4 }}
                  onMouseEnter={(e) => { e.preventDefault(); e.stopPropagation(); slideTo(i, i > imgIndex ? 1 : -1); }}
                  onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}
                />
              ))}
            </div>
          )}

          {/* Quick view overlay */}
          <div
            className="ddl-overlay absolute bottom-0 left-0 right-0 z-[6] px-3.5 pb-3.5 pt-8 translate-y-full transition-transform duration-[320ms] ease-[cubic-bezier(.4,0,.2,1)]"
            style={{ background: "linear-gradient(to top, rgba(10,6,2,0.95) 0%, rgba(10,6,2,0.5) 60%, transparent 100%)" }}
            onClick={(e) => e.preventDefault()}
          >
            <Link to={`/product/${id}`} onClick={(e) => e.stopPropagation()}>
              <button className="
                ddl-quick-btn w-full py-[9px]
                bg-[linear-gradient(110deg,#8B6914_0%,#C9961A_50%,#E0AE3A_100%)]
                [background-size:200%_200%] [background-position:0%_50%]
                border-none text-[#0E0802] text-[9px] font-extrabold tracking-[0.22em]
                font-['Jost',sans-serif] cursor-pointer rounded-[4px] uppercase
                transition-[background-position,box-shadow] duration-[400ms]
                relative overflow-hidden
              ">
                View Product
              </button>
            </Link>
          </div>
        </div>

        {/* ── GOLD RULE ── */}
        <div className="relative h-px bg-[#0d0703] overflow-hidden">
          <div className="ddl-gold-line" />
        </div>

        {/* ── BODY ── */}
        <div className="px-[14px] pt-2.5 pb-3">

          <p className="
            ddl-name font-['Montserrat',serif] text-[13px] font-normal text-[#f5ede0]
            leading-[1.45] mb-1 tracking-[0.02em]
            line-clamp-2 transition-colors duration-[250ms]
          ">
            {name}
          </p>

          <div className="flex items-center gap-1.5 mb-1.5">
            <div className="flex gap-0.5">{renderStars(avgRating)}</div>
            <span className="text-[10px] text-[#7a6050] font-['Georgia',serif]">({reviews.length})</span>
          </div>

          <div className="h-px bg-[#c8973a]/[0.12] mb-1.5" />

          <div className="flex items-baseline gap-[7px] flex-wrap">
            {hasDiscount ? (
              <>
                <span className="font-['Montserrat',serif] text-base font-bold text-[#f7c568]">
                  {currency}{discountedPriceValue.toFixed(2)}
                </span>
                <span className="text-[11px] text-[#5a4030] line-through font-['Montserrat',serif]">
                  {currency}{price}
                </span>
                <span className="text-[9px] text-[#c8973a] tracking-[0.18em] font-bold font-['Montserrat',serif] bg-[#c8973a]/10 px-1.5 py-0.5 border border-[#c8973a]/25 rounded-[2px]">
                  –{percentOff}%
                </span>
              </>
            ) : (
              <span className="font-['Montserrat',serif] text-base font-bold text-[#f7c568]">
                {currency}{price}
              </span>
            )}
          </div>

          <div className="flex justify-between items-center mt-2">
            <span className="text-[9px] tracking-[0.25em] text-[#7a6050] uppercase font-['Georgia',serif]">
              Premium Leather
            </span>
            <span className="ddl-arrow text-base inline-block transition-[color,transform] duration-[350ms] ease-[cubic-bezier(.16,1,.3,1)] text-[#3d2010]">
              →
            </span>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ProductItem;