import React, { useContext, useEffect, useState, useRef, useCallback } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";
import { generateSeoUrlParts } from "../utils/slugify";

const ANIM = `

  @keyframes ddlGlow {
    0%,100% { opacity:1; filter: blur(0px) brightness(1); }
    50%      { opacity:1; filter: blur(0.5px) brightness(1.5); }
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
    width: 100%; height: 1.5px;
    background: linear-gradient(90deg,
      transparent 0%, #4338CA 20%, #6366F1 45%,
      #818CF8 50%, #6366F1 55%, #4338CA 80%, transparent 100%
    );
    transform: scaleX(0) translateZ(0);
    transform-origin: left center;
    transition: transform 0.55s cubic-bezier(0.16,1,0.3,1);
    will-change: transform;
  }
  .ddl-card:hover .ddl-gold-line {
    transform: scaleX(1) translateZ(0);
    animation: ddlGlow 1.4s ease 0.45s infinite;
  }
  .ddl-card:hover .ddl-dots-wrap { opacity: 1; }
  .ddl-card:hover .ddl-overlay   { transform: translateY(0); }
  .ddl-card:hover .ddl-name      { color: #6366F1; }
  .ddl-card:hover .ddl-arrow     { color: #6366F1; transform: translateX(4px); }
  .ddl-card {
    transition: border-color 0.35s cubic-bezier(.16,1,.3,1),
                transform 0.35s cubic-bezier(.16,1,.3,1),
                box-shadow 0.35s cubic-bezier(.16,1,.3,1);
  }
  .ddl-card:hover {
    border-color: rgba(99,102,241,0.5) !important;
    transform: translateY(-6px);
    box-shadow: 0 20px 48px rgba(99,102,241,0.15), 0 0 0 1px rgba(99,102,241,0.12);
  }
  .ddl-slide-img {
    width: 100%; height: 100%;
    object-fit: contain; padding: 12px;
    position: absolute; inset: 0;
    transition: opacity .32s ease, transform .32s cubic-bezier(.4,0,.2,1);
    will-change: transform, opacity;
  }
  .ddl-slide-img.enter-fwd  { opacity: 0; transform: translateX(40px) scale(.97); }
  .ddl-slide-img.enter-back { opacity: 0; transform: translateX(-40px) scale(.97); }
  .ddl-slide-img.active     { opacity: 1; transform: translateX(0) scale(1); }
  .ddl-slide-img.exit-fwd   { opacity: 0; transform: translateX(-40px) scale(.97); }
  .ddl-slide-img.exit-back  { opacity: 0; transform: translateX(40px) scale(.97); }

  .ddl-star { font-size: 13px; transition: color .2s; }

  /* No overlay shadow — transparent bg, button only */
  .ddl-overlay {
    position: absolute; bottom: 0; left: 0; right: 0; z-index: 6;
    padding: 10px 12px 12px;
    transform: translateY(100%);
    transition: transform 0.32s cubic-bezier(.4,0,.2,1);
    background: transparent;
  }
  .ddl-quick-btn {
    width: 100%; padding: 10px 0;
    background: linear-gradient(110deg, #4338CA 0%, #6366F1 55%, #818CF8 100%);
    background-size: 200% 200%; background-position: 0% 50%;
    border: none; cursor: pointer; border-radius: 5px;
    color: #fff; font-size: 9px; font-weight: 700; letter-spacing: 0.22em;
    font-family: 'Montserrat', sans-serif; text-transform: uppercase;
    position: relative; overflow: hidden;
    transition: background-position 0.4s ease, box-shadow 0.3s ease;
    box-shadow: 0 3px 14px rgba(99,102,241,0.3);
  }
  .ddl-quick-btn::before {
    content: ''; position: absolute; top: -50%; left: -60%;
    width: 28%; height: 200%;
    background: rgba(255,255,255,0.22); transform: skewX(-20deg);
    transition: left .5s ease;
  }
  .ddl-quick-btn:hover::before { left: 120%; }
  .ddl-quick-btn:hover { background-position: 100% 50%; box-shadow: 0 4px 20px rgba(99,102,241,0.45); }

  /* FIX: Info section — clearly visible indigo-blue gradient */
  .ddl-body {
    // background: linear-gradient(160deg, #EEF0FF 0%, #E8EAFF 55%, #DDE0FF 100%);
    padding: 12px 14px 14px;
  }

  .ddl-name {
    color: #1E1B4B; font-family: 'Montserrat', sans-serif;
    font-size: 13px; font-weight: 600; line-height: 1.45;
    margin-bottom: 6px; letter-spacing: 0.01em;
    display: -webkit-box; -webkit-line-clamp: 2;
    -webkit-box-orient: vertical; overflow: hidden;
    transition: color 0.25s;
  }
  .ddl-arrow {
    font-size: 16px; display: inline-block;
    color: rgba(99,102,241,0.4);
    transition: color 0.35s cubic-bezier(.16,1,.3,1), transform 0.35s cubic-bezier(.16,1,.3,1);
  }
  .ddl-dots-wrap { opacity: 0; transition: opacity 0.25s; }
`;

const ProductItem = ({ id, image, name, price, discountPrice, category, subCategory, sku }) => {
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


  const getProductUrl = () => {

    if (!category || !subCategory || !sku) {
      console.warn("Missing SEO data:", {
        category,
        subCategory,
        sku,
        name,
      });

      return `/product/${id}`;
    }

    const {
      categorySlug,
      subCategorySlug,
      productSlug,
      skuSlug,
    } = generateSeoUrlParts(
      category,
      subCategory,
      name,
      sku
    );

    return `/product/${categorySlug}/${subCategorySlug}/${productSlug}/${skuSlug}`;
  };
  const loadReviews = async () => {
    const data = await getProductReviews(id);
    setReviews(data || []);
    if (data?.length > 0)
      setAvgRating(data.reduce((s, r) => s + r.rating, 0) / data.length);
  };

  const slideTo = useCallback((nextIdx, dir = 1) => {
    if (sliding || nextIdx === imgIndex) return;
    setSlideDir(dir); setSliding(true);
    setTimeout(() => { setImgIndex(nextIdx); setDisplayIdx(nextIdx); setSliding(false); }, 320);
  }, [sliding, imgIndex]);

  useEffect(() => {
    if (hovered && images.length > 1) {
      autoRef.current = setInterval(() => {
        setImgIndex(prev => {
          const next = (prev + 1) % images.length;
          setSlideDir(1); setSliding(true);
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

  const isWishlisted = Array.isArray(wishlist) ? wishlist.some(i => i.productId === id) : false;
  const percentOff = Number(discountPrice) || 0;
  const isValid = percentOff > 0 && percentOff < 100;
  const finalPrice = isValid ? price - (price * percentOff) / 100 : price;

  const renderStars = (rating) =>
    [...Array(5)].map((_, i) => {
      const full = i < Math.floor(rating), half = !full && i < rating;
      return (
        <span key={i} className="ddl-star" style={{ color: full || half ? "#6366F1" : "#C7D2FE" }}>
          {full ? "★" : half ? "⯨" : "☆"}
        </span>
      );
    });

  const showPrev = sliding ? displayIdx : null;
  const showCurr = sliding ? imgIndex : displayIdx;

  const optimizeCloudinaryImage = (url, width = 600) => {
    if (!url || !url.includes("res.cloudinary.com")) return url;

    return url.replace(
      "/upload/",
      `/upload/f_auto,q_auto,w_${width}/`
    );
  };

  return (
    <>
      <style>{ANIM}</style>

      <Link
        // to={`/product/${id}`}
        to={getProductUrl()}
        onClick={() => window.scrollTo(0, 0)}
        className="ddl-card block no-underline cursor-pointer relative rounded-[14px] overflow-hidden"
        style={{
          background: "#FFFFFF",
          border: "1px solid rgba(99,102,241,0.15)",
          boxShadow: "0 2px 12px rgba(99,102,241,0.07)",
          fontFamily: "'Montserrat', sans-serif",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* IMAGE ZONE — pure white */}
        <div className="relative w-full aspect-[7/6] overflow-hidden rounded-t-[13px]"
          style={{ background: "#FFFFFF" }}>

          {sliding && showPrev !== null && (
            // <img src={images[showPrev] || images[0]} alt={name}
            //   className={`ddl-slide-img ${slideDir === 1 ? "exit-fwd" : "exit-back"}`}
            //   style={{ zIndex: 1 }} />
            <img
              src={optimizeCloudinaryImage(images[showPrev] || images[0], 600)}
              alt={name}
              className={`ddl-slide-img ${slideDir === 1 ? "exit-fwd" : "exit-back"}`}
              // loading="lazy"
              decoding="async"
              width={600}
              height={600}
              style={{ zIndex: 1 }}
            />
          )}
          {/* <img src={images[showCurr] || images[0]} alt={name}
            className={`ddl-slide-img ${sliding ? (slideDir === 1 ? "enter-fwd" : "enter-back") : "active"}`}
            style={{
              zIndex: 2,
              animation: sliding
                ? `ddlSlideIn${slideDir === 1 ? "Fwd" : "Back"} .32s cubic-bezier(.4,0,.2,1) forwards`
                : "none",
            }} /> */}
          <img
            src={optimizeCloudinaryImage(images[showCurr] || images[0], 600)}
            alt={name}
            className={`ddl-slide-img ${sliding
              ? (slideDir === 1 ? "enter-fwd" : "enter-back")
              : "active"
              }`}
            loading="lazy"
            decoding="async"
            width={600}
            height={600}
            style={{
              zIndex: 2,
              animation: sliding
                ? `ddlSlideIn${slideDir === 1 ? "Fwd" : "Back"} .32s cubic-bezier(.4,0,.2,1) forwards`
                : "none",
            }}
          />

          {/* Sale badge */}
          {isValid && (
            <div style={{
              position: "absolute", top: 10, left: 10, zIndex: 8,
              background: "linear-gradient(135deg, #4338CA, #6366F1)",
              color: "#fff", fontSize: 8, fontWeight: 700,
              letterSpacing: "0.2em", padding: "3px 9px", borderRadius: 3,
              fontFamily: "'Montserrat', sans-serif",
            }}>{percentOff}% OFF</div>
          )}

          {/* Wishlist */}
          {/* <button
            className="hover:bg-indigo-500 hover:border-indigo-300 text-white"
            style={{
              position: "absolute", top: 10, right: 10, zIndex: 8,
              width: 32, height: 32, borderRadius: "50%",
              display: "flex", alignItems: "center", justifyContent: "center",
              cursor: "pointer",
              // background: isWishlisted ? "rgba(99,102,241,0.14)" : "rgba(255,255,255,0.96)",
              border: isWishlisted ? "1px solid #6366F1" : "1px solid rgba(99,102,241,0.25)",
              boxShadow: "0 1px 6px rgba(0,0,0,0.1)",
              transition: "background 0.2s, border-color 0.2s, transform 0.2s",
            }}
            onMouseEnter={e => e.currentTarget.style.transform = "scale(1.12)"}
            onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggleWishlistItem(id); }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill={isWishlisted ? "#FFF" : "none"}>
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                stroke="#6366F1" strokeWidth="1.5" />
            </svg>
          </button> */}

          <button
            className="text-indigo-500 hover:text-white hover:bg-indigo-500"
            style={{
              position: "absolute",
              top: 10,
              right: 10,
              zIndex: 8,
              width: 32,
              height: 32,
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              border: "1px solid rgba(99,102,241,0.25)",
              boxShadow: "0 1px 6px rgba(0,0,0,0.1)",
              transition: "background 0.2s, border-color 0.2s, transform 0.2s",
              // transition: "all 0.2s ease"
            }}
            onMouseEnter={e => e.currentTarget.style.transform = "scale(1.12)"}
            onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          </button>

          {/* Dot indicators */}
          {images.length > 1 && (
            <div className="ddl-dots-wrap" style={{
              position: "absolute", bottom: 10, left: "50%", transform: "translateX(-50%)",
              display: "flex", gap: 5, zIndex: 10,
            }}>
              {images.slice(0, 5).map((_, i) => (
                <button key={i} style={{
                  height: 4, border: "none", padding: 0, cursor: "pointer", borderRadius: 2,
                  width: i === imgIndex ? 18 : 4,
                  background: i === imgIndex ? "#6366F1" : "rgba(99,102,241,0.25)",
                  transition: "width 0.3s, background 0.3s",
                }}
                  onMouseEnter={(e) => { e.preventDefault(); e.stopPropagation(); slideTo(i, i > imgIndex ? 1 : -1); }}
                  onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}
                />
              ))}
            </div>
          )}

          {/* View Product — no dark shadow */}
          <div className="ddl-overlay" onClick={(e) => e.preventDefault()}>
            <Link to={getProductUrl()} onClick={(e) => e.stopPropagation()}>
              <button className="ddl-quick-btn">View Product</button>
            </Link>
          </div>
        </div>

        {/* Indigo rule */}
        <div style={{ position: "relative", height: 1, overflow: "hidden", background: "#DDE0FF" }}>
          <div className="ddl-gold-line" />
        </div>

        {/* INFO SECTION — clearly visible indigo-blue gradient */}
        <div className="ddl-body bg-[#d4e8fc]">
          <p className="ddl-name">{name}</p>

          <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 8 }}>
            <div style={{ display: "flex", gap: 2 }}>{renderStars(avgRating)}</div>
            <span style={{ fontSize: 11, color: "#6B7280", fontFamily: "'Montserrat', sans-serif", fontWeight: 500 }}>
              ({reviews.length})
            </span>
          </div>

          <div style={{ height: 1, background: "rgba(99,102,241,0.18)", marginBottom: 8 }} />

          <div style={{ display: "flex", alignItems: "baseline", gap: 7, flexWrap: "wrap" }}>
            {isValid ? (
              <>
                <span style={{ fontSize: 16, fontWeight: 700, color: "#4338CA", fontFamily: "'Montserrat', sans-serif" }}>
                  {currency}{finalPrice.toFixed(2)}
                </span>
                <span style={{ fontSize: 11, color: "#9CA3AF", textDecoration: "line-through", fontFamily: "'Montserrat', sans-serif" }}>
                  {currency}{price}
                </span>
                <span style={{
                  fontSize: 9, fontWeight: 700, letterSpacing: "0.18em", color: "#6366F1",
                  background: "rgba(99,102,241,0.12)", border: "1px solid rgba(99,102,241,0.22)",
                  borderRadius: 2, padding: "1px 6px", fontFamily: "'Montserrat', sans-serif",
                }}>–{percentOff}%</span>
              </>
            ) : (
              <span style={{ fontSize: 16, fontWeight: 700, color: "#4338CA", fontFamily: "'Montserrat', sans-serif" }}>
                {currency}{price}
              </span>
            )}
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 8 }}>
            <span style={{
              fontSize: 9, letterSpacing: "0.22em", color: "#6B7280",
              textTransform: "uppercase", fontFamily: "'Montserrat', sans-serif", fontWeight: 500,
            }}>Premium Leather</span>
            <span className="ddl-arrow">→</span>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ProductItem;