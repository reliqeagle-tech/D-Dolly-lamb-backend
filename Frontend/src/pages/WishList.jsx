// import React, { useContext, useEffect } from "react";
// import { ShopContext } from "../context/ShopContext";
// import { Link } from "react-router-dom";
// import AccountSidebar from "../components/AccountSidebar";
// import Title from "../components/Title";

// const Wishlist = () => {
//     const {
//         wishlist,
//         fetchWishlist,
//         toggleWishlistItem,
//         userId,
//         products,
//         currency,
//     } = useContext(ShopContext);

//     useEffect(() => {
//         if (userId) fetchWishlist();
//     }, [userId]);

//     // Merge wishlist items with product details + ratings
//     const wishlistProducts = wishlist
//         .map((w) => {
//             const product = products.find((p) => p._id === w.productId);
//             return product
//                 ? {
//                     ...product,
//                     avgRating:
//                         product.reviews?.length > 0
//                             ? product.reviews.reduce((s, r) => s + r.rating, 0) /
//                             product.reviews.length
//                             : 0,
//                     reviewCount: product.reviews?.length || 0,
//                 }
//                 : null;
//         })
//         .filter(Boolean);

//     return (
//         <div className='container flex flex-col md:flex-row gap-5 m-auto '>
//             <div className='col1 md:w-[20%] py-10'>
//                 <AccountSidebar />
//             </div>
//             <div className="max-w-5xl px-5 sm:px-20  py-6">
//                 {/* <h2 className="text-2xl font-semibold mb-4">Your Wishlist</h2> */}
//                 <div className="text-center text-2xl mb-2">
//                     <Title text1={"MY"} text2={"WISHLIST"} />
//                 </div>

//                 {wishlistProducts.length === 0 ? (
//                     <p className="text-gray-500 text-lg">Your wishlist is empty.</p>
//                 ) : (
//                     <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
//                         {wishlistProducts.map((product) => (
//                             <div
//                                 key={product._id}
//                                 className="cursor-pointer block group shadow-lg pt-4 rounded-md bg-white"
//                             >
//                                 {/* Product Link */}
//                                 <Link
//                                     onClick={() => window.scrollTo(0, 0)}
//                                     to={`/product/${product._id}`}
//                                     className="block"
//                                 >
//                                     {/* Image */}
//                                     <div className="w-full aspect-[4/3] rounded-md overflow-hidden flex items-center justify-center">
//                                         <img
//                                             src={product.image[0]}
//                                             alt={product.name}
//                                             className="h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105"
//                                         />
//                                     </div>

//                                     {/* Product Name */}
//                                     <p className="mt-3 text-xs md:text-sm font-light text-gray-900 text-left px-5 line-clamp-2 bg-[#f1f1f1]">
//                                         {product.name}
//                                     </p>
//                                 </Link>
//                                 <div className="bg-[#f1f1f1]">
//                                     {/* ⭐ Rating + Count */}
//                                     <div className="px-5  text-sm text-yellow-500 flex items-center">
//                                         {[...Array(5)].map((_, i) => (
//                                             <span key={i}>
//                                                 {i < Math.round(product.avgRating || 0) ? "★" : "☆"}
//                                             </span>
//                                         ))}
//                                         <span className="ml-2 text-gray-600 text-xs">
//                                             ({product.reviewCount})
//                                         </span>
//                                     </div>

//                                     {/* Price */}
//                                     <div className="text-start mt-1 px-5 space-x-2">
//                                         <span className="line-through text-gray-500 text-xs">
//                                             {currency}
//                                             {(product.price * 1.2).toFixed(0)}
//                                         </span>

//                                         <span className="text-black font-semibold text-sm">
//                                             {currency}
//                                             {product.price}
//                                         </span>
//                                     </div>

//                                     {/* Remove Button */}
//                                     <div className="px-5 pb-4 mt-4">
//                                         <button
//                                             onClick={() => toggleWishlistItem(product._id)}
//                                             className="w-full py-2 bg-red-600 text-white rounded-md hover:bg-indigo-500 transition"
//                                         >
//                                             Remove
//                                         </button>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default Wishlist;


// import React, { useContext, useEffect, useState } from "react";
// import { ShopContext } from "../context/ShopContext";
// import { Link, useNavigate } from "react-router-dom";
// import AccountSidebar from "../components/AccountSidebar";

// /* ── Icons ─────────────────────────────────── */
// const IconTrash = () => (
//     <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
//         <polyline points="3 6 5 6 21 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
//         <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
//         <path d="M10 11v6M14 11v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
//         <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" stroke="currentColor" strokeWidth="1.6" />
//     </svg>
// );
// const IconEye = () => (
//     <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
//         <path d="M1 12S5 4 12 4s11 8 11 8-4 8-11 8S1 12 1 12z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
//         <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
//     </svg>
// );
// const IconGrid = () => (
//     <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
//         <rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" />
//         <rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" />
//         <rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" />
//         <rect x="14" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" />
//     </svg>
// );
// const IconList = () => (
//     <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
//         <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
//     </svg>
// );
// const IconArrow = () => (
//     <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
//         <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//     </svg>
// );
// const IconEmpty = () => (
//     <svg width="64" height="64" viewBox="0 0 24 24" fill="none">
//         <path d="M12 21C12 21 3 14.5 3 8.5A5 5 0 0 1 12 5.5 5 5 0 0 1 21 8.5C21 14.5 12 21 12 21Z"
//             stroke="rgba(200,151,58,0.28)" strokeWidth="0.7" strokeLinejoin="round" />
//     </svg>
// );

// /* ── Styles ─────────────────────────────────── */
// const STYLES = `
//   @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300&family=Montserrat:wght@300;400;500;600;700&display=swap');

//   :root {
//     --gold:    #c8973a;
//     --gold-lt: #f7c568;
//     --cream:   #f0dfc0;
//     --border:  rgba(200,151,58,0.18);
//     --card-bg: linear-gradient(160deg,#1e120a,#150c05);
//   }

//   @keyframes wlUp   { from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)} }
//   @keyframes wlCard { from{opacity:0;transform:translateY(20px) scale(0.96)}to{opacity:1;transform:translateY(0) scale(1)} }

//   .wl-page { animation:wlUp 0.45s cubic-bezier(0.16,1,0.3,1) both; }

//   /* ── Grid Card ── */
//   .wl-card {
//     background: var(--card-bg);
//     border: 1px solid var(--border);
//     border-radius: 10px;
//     overflow: hidden;
//     display: flex;
//     flex-direction: column;
//     position: relative;
//     transition: border-color 0.28s, box-shadow 0.28s, transform 0.28s;
//     animation: wlCard 0.45s cubic-bezier(0.16,1,0.3,1) both;
//   }
//   .wl-card:hover {
//     border-color: rgba(200,151,58,0.45);
//     box-shadow: 0 16px 48px rgba(0,0,0,0.6);
//     transform: translateY(-5px);
//   }
//   .wl-card::before {
//     content:''; position:absolute; top:0; left:0; right:0; height:2px;
//     background:linear-gradient(to right,transparent,#c8973a,#f7c568,#c8973a,transparent);
//     opacity:0; transition:opacity 0.28s; z-index:3; border-radius:10px 10px 0 0;
//   }
//   .wl-card:hover::before { opacity:1; }

//   /* image zoom */
//   .wl-img { transition:transform 0.55s cubic-bezier(0.16,1,0.3,1); display:block; }
//   .wl-card:hover .wl-img { transform:scale(1.05); }

//   /* hover overlay */
//   .wl-overlay {
//     position:absolute; bottom:0; left:0; right:0;
//     background:linear-gradient(to top,rgba(12,6,2,0.97) 60%,transparent);
//     padding:52px 12px 14px;
//     display:flex; flex-direction:column; gap:7px;
//     transform:translateY(100%);
//     transition:transform 0.32s cubic-bezier(0.16,1,0.3,1);
//     z-index:2;
//   }
//   .wl-card:hover .wl-overlay { transform:translateY(0); }

//   /* Remove btn */
//   .wl-rm-btn {
//     position:absolute; top:10px; right:10px; z-index:4;
//     width:30px; height:30px; border-radius:50%;
//     background:rgba(200,40,40,0.18);
//     border:1px solid rgba(220,60,60,0.35);
//     color:#f87171;
//     display:flex; align-items:center; justify-content:center;
//     cursor:pointer;
//     transition:all 0.22s;
//     backdrop-filter:blur(6px);
//   }
//   .wl-rm-btn:hover {
//     background:rgba(200,40,40,0.45);
//     border-color:rgba(240,80,80,0.7);
//     color:#fca5a5;
//     box-shadow:0 4px 14px rgba(200,40,40,0.3);
//     transform:scale(1.1);
//   }
//   .wl-rm-btn:disabled { opacity:0.4; cursor:not-allowed; transform:none; }

//   /* Bestseller badge */
//   .wl-badge {
//     position:absolute; top:10px; left:10px; z-index:4;
//     padding:3px 8px; border-radius:4px;
//     font-size:7px; letter-spacing:0.22em;
//     font-family:'Montserrat',sans-serif; font-weight:700;
//     background:rgba(200,151,58,0.14);
//     border:1px solid rgba(200,151,58,0.32);
//     color:#f7c568;
//   }

//   /* Stars */
//   .wl-star-on  { color:#f7c568; font-size:12px; line-height:1; }
//   .wl-star-off { color:rgba(200,151,58,0.2); font-size:12px; line-height:1; }
//   .wl-star-half { position:relative; display:inline-block; font-size:12px; line-height:1; }

//   /* Buttons */
//   .wl-btn-gold {
//     display:flex; align-items:center; justify-content:center; gap:7px;
//     padding:10px 12px; width:100%; border:none; border-radius:6px;
//     background:linear-gradient(135deg,#c8973a,#f7c568);
//     color:#1a0f0a;
//     font-size:9px; letter-spacing:0.2em;
//     font-family:'Montserrat',sans-serif; font-weight:700;
//     cursor:pointer; transition:box-shadow 0.22s, transform 0.22s;
//     text-decoration:none; white-space:nowrap;
//   }
//   .wl-btn-gold:hover { box-shadow:0 6px 22px rgba(200,151,58,0.4); transform:translateY(-1px); }

//   .wl-btn-outline {
//     display:flex; align-items:center; justify-content:center; gap:7px;
//     padding:9px 12px; width:100%; border-radius:6px;
//     background:transparent; border:1px solid rgba(200,151,58,0.28);
//     color:rgba(240,220,190,0.65);
//     font-size:9px; letter-spacing:0.2em;
//     font-family:'Montserrat',sans-serif; font-weight:500;
//     cursor:pointer; transition:all 0.2s;
//     text-decoration:none; white-space:nowrap;
//   }
//   .wl-btn-outline:hover { border-color:rgba(200,151,58,0.6); color:var(--gold-lt); background:rgba(200,151,58,0.08); }

//   /* List card */
//   .wl-list-card {
//     display:flex;
//     background:var(--card-bg);
//     border:1px solid var(--border);
//     border-radius:10px; overflow:hidden;
//     transition:border-color 0.25s, box-shadow 0.25s;
//     animation:wlCard 0.45s cubic-bezier(0.16,1,0.3,1) both;
//   }
//   .wl-list-card:hover {
//     border-color:rgba(200,151,58,0.42);
//     box-shadow:0 10px 36px rgba(0,0,0,0.5);
//   }

//   /* Controls */
//   .wl-filter-btn {
//     padding:7px 13px; border-radius:4px;
//     background:transparent; border:1px solid var(--border);
//     color:rgba(240,220,190,0.45);
//     font-size:9px; letter-spacing:0.16em;
//     font-family:'Montserrat',sans-serif;
//     cursor:pointer; transition:all 0.2s;
//   }
//   .wl-filter-btn:hover, .wl-filter-btn.active {
//     border-color:rgba(200,151,58,0.55); color:var(--gold);
//     background:rgba(200,151,58,0.09);
//   }
//   .wl-view-btn {
//     width:32px; height:32px; border-radius:5px;
//     display:flex; align-items:center; justify-content:center;
//     background:transparent; border:1px solid var(--border);
//     color:rgba(240,220,190,0.35); cursor:pointer; transition:all 0.2s;
//   }
//   .wl-view-btn.active { background:rgba(200,151,58,0.1); border-color:rgba(200,151,58,0.5); color:var(--gold); }
// `;

// /* ══════════════════════════════════════════
//    COMPONENT
// ══════════════════════════════════════════ */
// const Wishlist = () => {
//     const {
//         wishlist, fetchWishlist, toggleWishlistItem,
//         addToCart, userId, products, currency, getProductReviews
//     } = useContext(ShopContext);

//     const navigate = useNavigate();
//     const [view, setView] = useState("grid");
//     const [sort, setSort] = useState("default");
//     const [removing, setRemoving] = useState(null);
//     const [reviewsMap, setReviewsMap] = useState({});

//     useEffect(() => { if (userId) fetchWishlist(); }, [userId]);

//     /* Fetch reviews per product — same as ProductItem */
//     useEffect(() => {
//         if (!wishlist?.length || !getProductReviews) return;
//         wishlist.forEach(async (w) => {
//             const pid = w.productId || w;
//             if (!pid) return;
//             setReviewsMap(prev => {
//                 if (prev[pid] !== undefined) return prev; // already fetched
//                 return prev;
//             });
//             try {
//                 const data = await getProductReviews(pid);
//                 const arr = Array.isArray(data) ? data : [];
//                 const avg = arr.length
//                     ? arr.reduce((s, r) => s + (r.rating || 0), 0) / arr.length
//                     : 0;
//                 setReviewsMap(prev => ({ ...prev, [pid]: { avgRating: avg, reviewCount: arr.length } }));
//             } catch {
//                 setReviewsMap(prev => ({ ...prev, [pid]: { avgRating: 0, reviewCount: 0 } }));
//             }
//         });
//     }, [wishlist, getProductReviews]);


//     /* Merge wishlist + product data — ratings from reviewsMap (API-fetched) */
//     const wishlistProducts = wishlist
//         .map(w => {
//             const pid = w.productId || w;
//             const p = products.find(x => x._id === pid);
//             if (!p) return null;
//             const rv = reviewsMap[pid] || { avgRating: 0, reviewCount: 0 };
//             return { ...p, avgRating: rv.avgRating, reviewCount: rv.reviewCount };
//         })
//         .filter(Boolean);

//     /* ── Sort ── */
//     const sorted = [...wishlistProducts].sort((a, b) => {
//         if (sort === "price-asc") return a.price - b.price;
//         if (sort === "price-desc") return b.price - a.price;
//         if (sort === "rating") return b.avgRating - a.avgRating;
//         if (sort === "name") return a.name.localeCompare(b.name);
//         return 0;
//     });

//     const handleRemove = async (id) => {
//         setRemoving(id);
//         await toggleWishlistItem(id);
//         setRemoving(null);
//     };

//     const mrpPrice = (p) => (p.price * 1.2).toFixed(0);
//     const savePct = (p) => Math.round(((p.price * 1.2 - p.price) / (p.price * 1.2)) * 100);

//     /* Stars — mirrors ProductItem renderStars exactly */
//     const Stars = ({ rating = 0, count = 0 }) => {
//         const r = Math.max(0, Math.min(5, Number(rating) || 0));
//         return (
//             <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
//                 <div style={{ display: "flex", gap: 2 }}>
//                     {[...Array(5)].map((_, i) => {
//                         const filled = i < Math.floor(r);
//                         const half = !filled && i < r;
//                         return (
//                             <span key={i} style={{ color: filled || half ? "#c8973a" : "#3d2010", fontSize: "11px" }}>
//                                 {filled ? "★" : half ? "⯨" : "☆"}
//                             </span>
//                         );
//                     })}
//                 </div>
//                 <span style={{ fontSize: 10, color: "#7a6050", fontFamily: "Georgia,serif" }}>
//                     ({count})
//                 </span>
//             </div>
//         );
//     };

//     /* ── Price ── */
//     const PriceRow = ({ product, large }) => (
//         <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
//             <span style={{
//                 fontSize: large ? 20 : 17,
//                 color: "#f7c568",
//                 fontFamily: "'Cormorant Garamond',serif",
//                 fontWeight: 600, lineHeight: 1,
//             }}>
//                 {currency}{product.price}
//             </span>
//             <span style={{
//                 fontSize: large ? 12 : 10,
//                 color: "rgba(200,151,58,0.4)",
//                 textDecoration: "line-through",
//                 fontFamily: "Montserrat,sans-serif",
//             }}>
//                 {currency}{mrpPrice(product)}
//             </span>
//             <span style={{
//                 fontSize: 7.5, color: "#1a0f0a",
//                 fontFamily: "Montserrat,sans-serif", fontWeight: 700,
//                 background: "linear-gradient(135deg,#c8973a,#f7c568)",
//                 padding: "2px 6px", borderRadius: 3, letterSpacing: "0.1em",
//             }}>
//                 -{savePct(product)}%
//             </span>
//         </div>
//     );

//     /* ── GRID CARD ── */
//     const GridCard = ({ product, idx }) => (
//         <div className="wl-card" style={{ animationDelay: `${idx * 0.055}s` }}>

//             {product.bestseller && <div className="wl-badge">BESTSELLER</div>}

//             {/* Red trash btn */}
//             <button
//                 className="wl-rm-btn"
//                 onClick={() => handleRemove(product._id)}
//                 disabled={removing === product._id}
//                 title="Remove from wishlist"
//             >
//                 <IconTrash />
//             </button>

//             {/* Image — contain so nothing cuts */}
//             <Link to={`/product/${product._id}`} onClick={() => window.scrollTo(0, 0)}>
//                 <div style={{
//                     overflow: "hidden", background: "#ffffff",
//                     aspectRatio: "1/1", width: "100%",
//                     display: "flex", alignItems: "center", justifyContent: "center",
//                 }}>
//                     <img
//                         className="wl-img"
//                         src={product.image[0]}
//                         alt={product.name}
//                         style={{ width: "100%", height: "100%", objectFit: "contain", padding: 8 }}
//                     />
//                 </div>
//             </Link>

//             {/* Hover overlay — VIEW only */}
//             <div className="wl-overlay">
//                 <Link
//                     to={`/product/${product._id}`}
//                     onClick={() => window.scrollTo(0, 0)}
//                     className="wl-btn-gold"
//                 >
//                     <IconEye /> VIEW PRODUCT
//                 </Link>
//             </div>

//             {/* Info — always visible */}
//             <div style={{ padding: "13px 14px 16px", display: "flex", flexDirection: "column", gap: 7, flex: 1 }}>
//                 <p style={{ fontSize: 8, color: "#7a5c2a", letterSpacing: "0.26em", fontFamily: "Montserrat,sans-serif", margin: 0 }}>
//                     LAMBSKIN
//                 </p>
//                 <Link to={`/product/${product._id}`} onClick={() => window.scrollTo(0, 0)}
//                     style={{ textDecoration: "none" }}>
//                     <p style={{
//                         fontSize: 13, color: "#f0dfc0", lineHeight: 1.4, margin: 0,
//                         fontFamily: "'Cormorant Garamond',serif",
//                         display: "-webkit-box", WebkitLineClamp: 2,
//                         WebkitBoxOrient: "vertical", overflow: "hidden",
//                     }}>
//                         {product.name}
//                     </p>
//                 </Link>
//                 {/* Dynamic rating */}
//                 <Stars rating={product.avgRating} count={product.reviewCount} />
//                 {/* Price */}
//                 <PriceRow product={product} />
//             </div>
//         </div>
//     );

//     /* ── LIST CARD ── */
//     const ListCard = ({ product, idx }) => (
//         <div className="wl-list-card" style={{ animationDelay: `${idx * 0.055}s` }}>
//             <Link to={`/product/${product._id}`} onClick={() => window.scrollTo(0, 0)}
//                 style={{
//                     width: 130, flexShrink: 0, display: "block", overflow: "hidden", background: "#fff",
//                     display: "flex", alignItems: "center", justifyContent: "center"
//                 }}>
//                 <img src={product.image[0]} alt={product.name}
//                     className="wl-img"
//                     style={{ width: "100%", height: "100%", objectFit: "contain", padding: 8, display: "block" }}
//                 />
//             </Link>

//             <div style={{
//                 flex: 1, padding: "18px 20px", display: "flex",
//                 justifyContent: "space-between", alignItems: "center", gap: 16, flexWrap: "wrap"
//             }}>
//                 <div style={{ flex: 1, minWidth: 180 }}>
//                     <p style={{ fontSize: 8, color: "#7a5c2a", letterSpacing: "0.26em", fontFamily: "Montserrat,sans-serif", marginBottom: 5 }}>
//                         LAMBSKIN
//                     </p>
//                     <Link to={`/product/${product._id}`} onClick={() => window.scrollTo(0, 0)}
//                         style={{ textDecoration: "none" }}>
//                         <p style={{
//                             fontSize: 16, color: "#f0dfc0", fontFamily: "'Cormorant Garamond',serif",
//                             lineHeight: 1.35, marginBottom: 8
//                         }}>
//                             {product.name}
//                         </p>
//                     </Link>
//                     <Stars rating={product.avgRating} count={product.reviewCount} />
//                 </div>

//                 <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 12, flexShrink: 0 }}>
//                     <PriceRow product={product} large />
//                     <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
//                         <Link
//                             to={`/product/${product._id}`}
//                             onClick={() => window.scrollTo(0, 0)}
//                             className="wl-btn-gold"
//                             style={{ width: "auto", padding: "9px 18px" }}
//                         >
//                             <IconEye /> VIEW
//                         </Link>
//                         <button
//                             className="wl-rm-btn"
//                             style={{ position: "static", width: 36, height: 36, borderRadius: 6, flexShrink: 0 }}
//                             onClick={() => handleRemove(product._id)}
//                             disabled={removing === product._id}
//                         >
//                             <IconTrash />
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );

//     /* ══════════════════════════════════════
//        RENDER
//     ══════════════════════════════════════ */
//     return (
//         <>
//             <style>{STYLES}</style>
//             <div className="wl-page" style={{ background: "#1a0f0a", minHeight: "100vh", color: "#f5ede0", fontFamily: "Georgia,serif" }}>
//                 <div style={{ maxWidth: 1200, margin: "0 auto", padding: "36px 20px 80px" }}>
//                     <div className="flex flex-col md:flex-row gap-6">

//                         {/* Sidebar */}
//                         <div style={{ width: "100%", maxWidth: 240, flexShrink: 0 }}>
//                             <AccountSidebar />
//                         </div>

//                         {/* Main */}
//                         <div style={{ flex: 1, minWidth: 0 }}>

//                             {/* Header */}
//                             <div style={{ marginBottom: 26 }}>
//                                 <p style={{
//                                     fontSize: 8.5, letterSpacing: "0.44em", color: "#c8973a",
//                                     fontFamily: "Montserrat,sans-serif", fontWeight: 700, marginBottom: 5
//                                 }}>
//                                     D DOLLY LAMB
//                                 </p>
//                                 <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 10 }}>
//                                     <div>
//                                         <h1 style={{ fontSize: "clamp(1.5rem,3vw,2.2rem)", color: "#f7c568", fontWeight: 400, letterSpacing: "0.1em", margin: 0 }}>
//                                             MY WISHLIST
//                                         </h1>
//                                         <p style={{ fontSize: 10, color: "#6a5030", fontFamily: "Montserrat,sans-serif", marginTop: 4 }}>
//                                             {sorted.length} {sorted.length === 1 ? "piece" : "pieces"} saved
//                                         </p>
//                                     </div>
//                                     <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
//                                         <div style={{ width: 50, height: 1, background: "linear-gradient(to left,rgba(200,151,58,0.3),transparent)" }} />
//                                         <div style={{ width: 6, height: 6, background: "#c8973a", transform: "rotate(45deg)", flexShrink: 0 }} />
//                                         <div style={{ width: 50, height: 1, background: "linear-gradient(to right,rgba(200,151,58,0.3),transparent)" }} />
//                                     </div>
//                                 </div>
//                             </div>

//                             {sorted.length === 0 ? (
//                                 <div style={{
//                                     background: "linear-gradient(160deg,#1e120a,#150c05)",
//                                     border: "1px solid rgba(200,151,58,0.14)", borderRadius: 10,
//                                     padding: "72px 24px", textAlign: "center"
//                                 }}>
//                                     <div style={{ marginBottom: 18 }}><IconEmpty /></div>
//                                     <p style={{
//                                         fontSize: "clamp(1.1rem,2.5vw,1.7rem)", color: "#f7c568",
//                                         fontFamily: "'Cormorant Garamond',serif", fontStyle: "italic", marginBottom: 10
//                                     }}>
//                                         Your wishlist is empty
//                                     </p>
//                                     <p style={{
//                                         fontSize: 10, color: "#6a5030", fontFamily: "Montserrat,sans-serif",
//                                         letterSpacing: "0.1em", marginBottom: 26
//                                     }}>
//                                         Save the pieces you love
//                                     </p>
//                                     <Link to="/collection" onClick={() => window.scrollTo(0, 0)}
//                                         className="wl-btn-gold"
//                                         style={{ display: "inline-flex", width: "auto", padding: "12px 30px", borderRadius: 6 }}>
//                                         EXPLORE COLLECTION <IconArrow />
//                                     </Link>
//                                 </div>
//                             ) : (
//                                 <>
//                                     {/* Controls */}
//                                     <div style={{
//                                         background: "linear-gradient(160deg,#1e120a,#150c05)",
//                                         border: "1px solid rgba(200,151,58,0.13)", borderRadius: 8,
//                                         padding: "12px 16px", marginBottom: 18,
//                                         display: "flex", alignItems: "center", justifyContent: "space-between",
//                                         flexWrap: "wrap", gap: 10,
//                                     }}>
//                                         <div style={{ display: "flex", alignItems: "center", gap: 7, flexWrap: "wrap" }}>
//                                             <span style={{ fontSize: 8, color: "#6a5030", letterSpacing: "0.24em", fontFamily: "Montserrat,sans-serif" }}>SORT</span>
//                                             {[
//                                                 { k: "default", l: "DEFAULT" },
//                                                 { k: "price-asc", l: "PRICE ↑" },
//                                                 { k: "price-desc", l: "PRICE ↓" },
//                                                 { k: "rating", l: "TOP RATED" },
//                                                 { k: "name", l: "A – Z" },
//                                             ].map(s => (
//                                                 <button key={s.k} className={`wl-filter-btn ${sort === s.k ? "active" : ""}`}
//                                                     onClick={() => setSort(s.k)}>{s.l}</button>
//                                             ))}
//                                         </div>
//                                         <div style={{ display: "flex", gap: 4 }}>
//                                             <button className={`wl-view-btn ${view === "grid" ? "active" : ""}`} onClick={() => setView("grid")}><IconGrid /></button>
//                                             <button className={`wl-view-btn ${view === "list" ? "active" : ""}`} onClick={() => setView("list")}><IconList /></button>
//                                         </div>
//                                     </div>

//                                     {/* Products */}
//                                     {view === "grid" ? (
//                                         <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(200px,1fr))", gap: 16 }}>
//                                             {sorted.map((p, i) => <GridCard key={p._id} product={p} idx={i} />)}
//                                         </div>
//                                     ) : (
//                                         <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
//                                             {sorted.map((p, i) => <ListCard key={p._id} product={p} idx={i} />)}
//                                         </div>
//                                     )}

//                                     {/* Bottom CTA */}
//                                     <div style={{
//                                         marginTop: 28, padding: "20px 22px",
//                                         background: "linear-gradient(160deg,#1e120a,#150c05)",
//                                         border: "1px solid rgba(200,151,58,0.12)", borderRadius: 10,
//                                         display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12,
//                                     }}>
//                                         <div>
//                                             <p style={{ fontSize: 12, color: "#f0dfc0", letterSpacing: "0.05em", marginBottom: 3 }}>Continue exploring</p>
//                                             <p style={{ fontSize: 9, color: "#6a5030", fontFamily: "Montserrat,sans-serif", letterSpacing: "0.1em" }}>
//                                                 Discover more artisan leather pieces
//                                             </p>
//                                         </div>
//                                         <Link to="/collection" onClick={() => window.scrollTo(0, 0)}
//                                             className="wl-btn-outline"
//                                             style={{ width: "auto", padding: "10px 22px" }}>
//                                             VIEW COLLECTION <IconArrow />
//                                         </Link>
//                                     </div>
//                                 </>
//                             )}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Wishlist;







import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link, useNavigate } from "react-router-dom";
import AccountSidebar from "../components/AccountSidebar";

/* ── Icons ─────────────────────────────────── */
const IconTrash = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
        <polyline points="3 6 5 6 21 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M10 11v6M14 11v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" stroke="currentColor" strokeWidth="1.6" />
    </svg>
);
const IconEye = () => (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
        <path d="M1 12S5 4 12 4s11 8 11 8-4 8-11 8S1 12 1 12z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
    </svg>
);
const IconGrid = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <rect x="14" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" />
    </svg>
);
const IconList = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
        <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
);
const IconArrow = () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
        <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);
const IconEmpty = () => (
    <svg width="64" height="64" viewBox="0 0 24 24" fill="none">
        <path d="M12 21C12 21 3 14.5 3 8.5A5 5 0 0 1 12 5.5 5 5 0 0 1 21 8.5C21 14.5 12 21 12 21Z"
            stroke="rgba(200,151,58,0.28)" strokeWidth="0.7" strokeLinejoin="round" />
    </svg>
);

/* ── Styles ─────────────────────────────────── */
const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300&family=Montserrat:wght@300;400;500;600;700&display=swap');

  :root {
    --gold:    #c8973a;
    --gold-lt: #f7c568;
    --cream:   #f0dfc0;
    --border:  rgba(200,151,58,0.18);
    --card-bg: linear-gradient(160deg,#1e120a,#150c05);
  }

  @keyframes wlUp   { from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)} }
  @keyframes wlCard { from{opacity:0;transform:translateY(20px) scale(0.96)}to{opacity:1;transform:translateY(0) scale(1)} }

  .wl-page { animation:wlUp 0.45s cubic-bezier(0.16,1,0.3,1) both; }

  /* ── Grid Card ── */
  .wl-card {
    background: var(--card-bg);
    border: 1px solid var(--border);
    border-radius: 10px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    position: relative;
    transition: border-color 0.28s, box-shadow 0.28s, transform 0.28s;
    animation: wlCard 0.45s cubic-bezier(0.16,1,0.3,1) both;
  }
  .wl-card:hover {
    border-color: rgba(200,151,58,0.45);
    box-shadow: 0 16px 48px rgba(0,0,0,0.6);
    transform: translateY(-5px);
  }
  .wl-card::before {
    content:''; position:absolute; top:0; left:0; right:0; height:2px;
    background:linear-gradient(to right,transparent,#c8973a,#f7c568,#c8973a,transparent);
    opacity:0; transition:opacity 0.28s; z-index:3; border-radius:10px 10px 0 0;
  }
  .wl-card:hover::before { opacity:1; }

  /* image zoom */
  .wl-img { transition:transform 0.55s cubic-bezier(0.16,1,0.3,1); display:block; }
  .wl-card:hover .wl-img { transform:scale(1.05); }

  /* hover overlay */
  .wl-overlay {
    position:absolute; bottom:0; left:0; right:0;
    background:linear-gradient(to top,rgba(12,6,2,0.97) 60%,transparent);
    padding:52px 12px 14px;
    display:flex; flex-direction:column; gap:7px;
    transform:translateY(100%);
    transition:transform 0.32s cubic-bezier(0.16,1,0.3,1);
    z-index:2;
  }
  .wl-card:hover .wl-overlay { transform:translateY(0); }

  /* Remove btn */
  .wl-rm-btn {
    position:absolute; top:10px; right:10px; z-index:4;
    width:32px; height:32px; border-radius:50%;
    background:#1e0a0a;
    border:1.5px solid #e05050;
    color:#f87171;
    display:flex; align-items:center; justify-content:center;
    cursor:pointer;
    transition:all 0.22s;
    box-shadow:0 2px 10px rgba(0,0,0,0.55);
  }
  .wl-rm-btn:hover {
    background:#6b1010;
    border-color:#ff6b6b;
    color:#fff;
    box-shadow:0 4px 16px rgba(200,40,40,0.5);
    transform:scale(1.1);
  }
  .wl-rm-btn:disabled { opacity:0.4; cursor:not-allowed; transform:none; }

  /* Bestseller badge */
  .wl-badge {
    position:absolute; top:10px; left:10px; z-index:4;
    padding:4px 10px; border-radius:4px;
    font-size:7px; letter-spacing:0.22em;
    font-family:'Montserrat',sans-serif; font-weight:700;
    background:linear-gradient(135deg,#c8973a,#f7c568);
    border:none;
    color:#1a0f0a;
    box-shadow:0 2px 10px rgba(0,0,0,0.45);
  }

  /* Stars */
  .wl-star-on  { color:#f7c568; font-size:12px; line-height:1; }
  .wl-star-off { color:rgba(200,151,58,0.2); font-size:12px; line-height:1; }
  .wl-star-half { position:relative; display:inline-block; font-size:12px; line-height:1; }

  /* Buttons */
  .wl-btn-gold {
    display:flex; align-items:center; justify-content:center; gap:7px;
    padding:10px 12px; width:100%; border:none; border-radius:6px;
    background:linear-gradient(135deg,#c8973a,#f7c568);
    color:#1a0f0a;
    font-size:9px; letter-spacing:0.2em;
    font-family:'Montserrat',sans-serif; font-weight:700;
    cursor:pointer; transition:box-shadow 0.22s, transform 0.22s;
    text-decoration:none; white-space:nowrap;
  }
  .wl-btn-gold:hover { box-shadow:0 6px 22px rgba(200,151,58,0.4); transform:translateY(-1px); }

  .wl-btn-outline {
    display:flex; align-items:center; justify-content:center; gap:7px;
    padding:9px 12px; width:100%; border-radius:6px;
    background:transparent; border:1px solid rgba(200,151,58,0.28);
    color:rgba(240,220,190,0.65);
    font-size:9px; letter-spacing:0.2em;
    font-family:'Montserrat',sans-serif; font-weight:500;
    cursor:pointer; transition:all 0.2s;
    text-decoration:none; white-space:nowrap;
  }
  .wl-btn-outline:hover { border-color:rgba(200,151,58,0.6); color:var(--gold-lt); background:rgba(200,151,58,0.08); }

  /* List card */
  .wl-list-card {
    display:flex;
    background:var(--card-bg);
    border:1px solid var(--border);
    border-radius:10px; overflow:hidden;
    transition:border-color 0.25s, box-shadow 0.25s;
    animation:wlCard 0.45s cubic-bezier(0.16,1,0.3,1) both;
  }
  .wl-list-card:hover {
    border-color:rgba(200,151,58,0.42);
    box-shadow:0 10px 36px rgba(0,0,0,0.5);
  }

  /* Controls */
  .wl-filter-btn {
    padding:7px 13px; border-radius:4px;
    background:transparent; border:1px solid var(--border);
    color:rgba(240,220,190,0.45);
    font-size:9px; letter-spacing:0.16em;
    font-family:'Montserrat',sans-serif;
    cursor:pointer; transition:all 0.2s;
  }
  .wl-filter-btn:hover, .wl-filter-btn.active {
    border-color:rgba(200,151,58,0.55); color:var(--gold);
    background:rgba(200,151,58,0.09);
  }
  .wl-view-btn {
    width:32px; height:32px; border-radius:5px;
    display:flex; align-items:center; justify-content:center;
    background:transparent; border:1px solid var(--border);
    color:rgba(240,220,190,0.35); cursor:pointer; transition:all 0.2s;
  }
  .wl-view-btn.active { background:rgba(200,151,58,0.1); border-color:rgba(200,151,58,0.5); color:var(--gold); }
`;

/* ══════════════════════════════════════════
   COMPONENT
══════════════════════════════════════════ */
const Wishlist = () => {
    const {
        wishlist, fetchWishlist, toggleWishlistItem,
        addToCart, userId, products, currency, getProductReviews
    } = useContext(ShopContext);

    const navigate = useNavigate();
    const [view, setView] = useState("grid");
    const [sort, setSort] = useState("default");
    const [removing, setRemoving] = useState(null);
    const [reviewsMap, setReviewsMap] = useState({});

    useEffect(() => { if (userId) fetchWishlist(); }, [userId]);

    /* Fetch reviews per product — same as ProductItem */
    useEffect(() => {
        if (!wishlist?.length || !getProductReviews) return;
        wishlist.forEach(async (w) => {
            const pid = w.productId || w;
            if (!pid) return;
            setReviewsMap(prev => {
                if (prev[pid] !== undefined) return prev; // already fetched
                return prev;
            });
            try {
                const data = await getProductReviews(pid);
                const arr = Array.isArray(data) ? data : [];
                const avg = arr.length
                    ? arr.reduce((s, r) => s + (r.rating || 0), 0) / arr.length
                    : 0;
                setReviewsMap(prev => ({ ...prev, [pid]: { avgRating: avg, reviewCount: arr.length } }));
            } catch {
                setReviewsMap(prev => ({ ...prev, [pid]: { avgRating: 0, reviewCount: 0 } }));
            }
        });
    }, [wishlist, getProductReviews]);


    /* Merge wishlist + product data — ratings from reviewsMap (API-fetched) */
    const wishlistProducts = wishlist
        .map(w => {
            const pid = w.productId || w;
            const p = products.find(x => x._id === pid);
            if (!p) return null;
            const rv = reviewsMap[pid] || { avgRating: 0, reviewCount: 0 };
            return { ...p, avgRating: rv.avgRating, reviewCount: rv.reviewCount };
        })
        .filter(Boolean);

    /* ── Sort ── */
    const sorted = [...wishlistProducts].sort((a, b) => {
        if (sort === "price-asc") return a.price - b.price;
        if (sort === "price-desc") return b.price - a.price;
        if (sort === "rating") return b.avgRating - a.avgRating;
        if (sort === "name") return a.name.localeCompare(b.name);
        return 0;
    });

    const handleRemove = async (id) => {
        setRemoving(id);
        await toggleWishlistItem(id);
        setRemoving(null);
    };

    const mrpPrice = (p) => (p.price * 1.2).toFixed(0);
    const savePct = (p) => Math.round(((p.price * 1.2 - p.price) / (p.price * 1.2)) * 100);

    /* Stars — mirrors ProductItem renderStars exactly */
    const Stars = ({ rating = 0, count = 0 }) => {
        const r = Math.max(0, Math.min(5, Number(rating) || 0));
        return (
            <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                <div style={{ display: "flex", gap: 2 }}>
                    {[...Array(5)].map((_, i) => {
                        const filled = i < Math.floor(r);
                        const half = !filled && i < r;
                        return (
                            <span key={i} style={{ color: filled || half ? "#c8973a" : "#3d2010", fontSize: "11px" }}>
                                {filled ? "★" : half ? "⯨" : "☆"}
                            </span>
                        );
                    })}
                </div>
                <span style={{ fontSize: 10, color: "#7a6050", fontFamily: "Georgia,serif" }}>
                    ({count})
                </span>
            </div>
        );
    };

    /* ── Price ── */
    const PriceRow = ({ product, large }) => (
        <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
            <span style={{
                fontSize: large ? 20 : 17,
                color: "#f7c568",
                fontFamily: "'Cormorant Garamond',serif",
                fontWeight: 600, lineHeight: 1,
            }}>
                {currency}{product.price}
            </span>
            <span style={{
                fontSize: large ? 12 : 10,
                color: "rgba(200,151,58,0.4)",
                textDecoration: "line-through",
                fontFamily: "Montserrat,sans-serif",
            }}>
                {currency}{mrpPrice(product)}
            </span>
            <span style={{
                fontSize: 7.5, color: "#1a0f0a",
                fontFamily: "Montserrat,sans-serif", fontWeight: 700,
                background: "linear-gradient(135deg,#c8973a,#f7c568)",
                padding: "2px 6px", borderRadius: 3, letterSpacing: "0.1em",
            }}>
                -{savePct(product)}%
            </span>
        </div>
    );

    /* ── GRID CARD ── */
    const GridCard = ({ product, idx }) => (
        <div className="wl-card" style={{ animationDelay: `${idx * 0.055}s` }}>

            {product.bestseller && <div className="wl-badge">BESTSELLER</div>}

            {/* Red trash btn */}
            <button
                className="wl-rm-btn"
                onClick={() => handleRemove(product._id)}
                disabled={removing === product._id}
                title="Remove from wishlist"
            >
                <IconTrash />
            </button>

            {/* Image — contain so nothing cuts */}
            <Link to={`/product/${product._id}`} onClick={() => window.scrollTo(0, 0)}>
                <div style={{
                    overflow: "hidden", background: "#ffffff",
                    aspectRatio: "1/1", width: "100%",
                    display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                    <img
                        className="wl-img"
                        src={product.image[0]}
                        alt={product.name}
                        style={{ width: "100%", height: "100%", objectFit: "contain", padding: 8 }}
                    />
                </div>
            </Link>

            {/* Hover overlay — VIEW only */}
            <div className="wl-overlay">
                <Link
                    to={`/product/${product._id}`}
                    onClick={() => window.scrollTo(0, 0)}
                    className="wl-btn-gold"
                >
                    <IconEye /> VIEW PRODUCT
                </Link>
            </div>

            {/* Info — always visible */}
            <div style={{ padding: "13px 14px 16px", display: "flex", flexDirection: "column", gap: 7, flex: 1 }}>
                <p style={{ fontSize: 8, color: "#7a5c2a", letterSpacing: "0.26em", fontFamily: "Montserrat,sans-serif", margin: 0 }}>
                    LAMBSKIN
                </p>
                <Link to={`/product/${product._id}`} onClick={() => window.scrollTo(0, 0)}
                    style={{ textDecoration: "none" }}>
                    <p style={{
                        fontSize: 13, color: "#f0dfc0", lineHeight: 1.4, margin: 0,
                        fontFamily: "'Cormorant Garamond',serif",
                        display: "-webkit-box", WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical", overflow: "hidden",
                    }}>
                        {product.name}
                    </p>
                </Link>
                {/* Dynamic rating */}
                <Stars rating={product.avgRating} count={product.reviewCount} />
                {/* Price */}
                <PriceRow product={product} />
            </div>
        </div>
    );

    /* ── LIST CARD ── */
    const ListCard = ({ product, idx }) => (
        <div className="wl-list-card" style={{ animationDelay: `${idx * 0.055}s` }}>
            <Link to={`/product/${product._id}`} onClick={() => window.scrollTo(0, 0)}
                style={{
                    width: 130, flexShrink: 0, display: "block", overflow: "hidden", background: "#fff",
                    display: "flex", alignItems: "center", justifyContent: "center"
                }}>
                <img src={product.image[0]} alt={product.name}
                    className="wl-img"
                    style={{ width: "100%", height: "100%", objectFit: "contain", padding: 8, display: "block" }}
                />
            </Link>

            <div style={{
                flex: 1, padding: "18px 20px", display: "flex",
                justifyContent: "space-between", alignItems: "center", gap: 16, flexWrap: "wrap"
            }}>
                <div style={{ flex: 1, minWidth: 180 }}>
                    <p style={{ fontSize: 8, color: "#7a5c2a", letterSpacing: "0.26em", fontFamily: "Montserrat,sans-serif", marginBottom: 5 }}>
                        LAMBSKIN
                    </p>
                    <Link to={`/product/${product._id}`} onClick={() => window.scrollTo(0, 0)}
                        style={{ textDecoration: "none" }}>
                        <p style={{
                            fontSize: 16, color: "#f0dfc0", fontFamily: "'Cormorant Garamond',serif",
                            lineHeight: 1.35, marginBottom: 8
                        }}>
                            {product.name}
                        </p>
                    </Link>
                    <Stars rating={product.avgRating} count={product.reviewCount} />
                </div>

                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 12, flexShrink: 0 }}>
                    <PriceRow product={product} large />
                    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                        <Link
                            to={`/product/${product._id}`}
                            onClick={() => window.scrollTo(0, 0)}
                            className="wl-btn-gold"
                            style={{ width: "auto", padding: "9px 18px" }}
                        >
                            <IconEye /> VIEW
                        </Link>
                        <button
                            className="wl-rm-btn"
                            style={{ position: "static", width: 36, height: 36, borderRadius: 6, flexShrink: 0 }}
                            onClick={() => handleRemove(product._id)}
                            disabled={removing === product._id}
                        >
                            <IconTrash />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );

    /* ══════════════════════════════════════
       RENDER
    ══════════════════════════════════════ */
    return (
        <>
            <style>{STYLES}</style>
            <div className="wl-page" style={{ background: "#1a0f0a", minHeight: "100vh", color: "#f5ede0", fontFamily: "Georgia,serif" }}>
                <div style={{ maxWidth: 1200, margin: "0 auto", padding: "36px 20px 80px" }}>
                    <div className="flex flex-col md:flex-row gap-6">

                        {/* Sidebar */}
                        <div style={{ width: "100%", maxWidth: 240, flexShrink: 0 }}>
                            <AccountSidebar />
                        </div>

                        {/* Main */}
                        <div style={{ flex: 1, minWidth: 0 }}>

                            {/* Header */}
                            <div style={{ marginBottom: 26 }}>
                                <p style={{
                                    fontSize: 8.5, letterSpacing: "0.44em", color: "#c8973a",
                                    fontFamily: "Montserrat,sans-serif", fontWeight: 700, marginBottom: 5
                                }}>
                                    D DOLLY LAMB
                                </p>
                                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 10 }}>
                                    <div>
                                        <h1 style={{ fontSize: "clamp(1.5rem,3vw,2.2rem)", color: "#f7c568", fontWeight: 400, letterSpacing: "0.1em", margin: 0 }}>
                                            MY WISHLIST
                                        </h1>
                                        <p style={{ fontSize: 10, color: "#6a5030", fontFamily: "Montserrat,sans-serif", marginTop: 4 }}>
                                            {sorted.length} {sorted.length === 1 ? "piece" : "pieces"} saved
                                        </p>
                                    </div>
                                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                                        <div style={{ width: 50, height: 1, background: "linear-gradient(to left,rgba(200,151,58,0.3),transparent)" }} />
                                        <div style={{ width: 6, height: 6, background: "#c8973a", transform: "rotate(45deg)", flexShrink: 0 }} />
                                        <div style={{ width: 50, height: 1, background: "linear-gradient(to right,rgba(200,151,58,0.3),transparent)" }} />
                                    </div>
                                </div>
                            </div>

                            {sorted.length === 0 ? (
                                <div style={{
                                    background: "linear-gradient(160deg,#1e120a,#150c05)",
                                    border: "1px solid rgba(200,151,58,0.14)", borderRadius: 10,
                                    padding: "72px 24px", textAlign: "center"
                                }}>
                                    <div style={{ marginBottom: 18 }}><IconEmpty /></div>
                                    <p style={{
                                        fontSize: "clamp(1.1rem,2.5vw,1.7rem)", color: "#f7c568",
                                        fontFamily: "'Cormorant Garamond',serif", fontStyle: "italic", marginBottom: 10
                                    }}>
                                        Your wishlist is empty
                                    </p>
                                    <p style={{
                                        fontSize: 10, color: "#6a5030", fontFamily: "Montserrat,sans-serif",
                                        letterSpacing: "0.1em", marginBottom: 26
                                    }}>
                                        Save the pieces you love
                                    </p>
                                    <Link to="/collection" onClick={() => window.scrollTo(0, 0)}
                                        className="wl-btn-gold"
                                        style={{ display: "inline-flex", width: "auto", padding: "12px 30px", borderRadius: 6 }}>
                                        EXPLORE COLLECTION <IconArrow />
                                    </Link>
                                </div>
                            ) : (
                                <>
                                    {/* Controls */}
                                    <div style={{
                                        background: "linear-gradient(160deg,#1e120a,#150c05)",
                                        border: "1px solid rgba(200,151,58,0.13)", borderRadius: 8,
                                        padding: "12px 16px", marginBottom: 18,
                                        display: "flex", alignItems: "center", justifyContent: "space-between",
                                        flexWrap: "wrap", gap: 10,
                                    }}>
                                        <div style={{ display: "flex", alignItems: "center", gap: 7, flexWrap: "wrap" }}>
                                            <span style={{ fontSize: 8, color: "#6a5030", letterSpacing: "0.24em", fontFamily: "Montserrat,sans-serif" }}>SORT</span>
                                            {[
                                                { k: "default", l: "DEFAULT" },
                                                { k: "price-asc", l: "PRICE ↑" },
                                                { k: "price-desc", l: "PRICE ↓" },
                                                { k: "rating", l: "TOP RATED" },
                                                { k: "name", l: "A – Z" },
                                            ].map(s => (
                                                <button key={s.k} className={`wl-filter-btn ${sort === s.k ? "active" : ""}`}
                                                    onClick={() => setSort(s.k)}>{s.l}</button>
                                            ))}
                                        </div>
                                        <div style={{ display: "flex", gap: 4 }}>
                                            <button className={`wl-view-btn ${view === "grid" ? "active" : ""}`} onClick={() => setView("grid")}><IconGrid /></button>
                                            <button className={`wl-view-btn ${view === "list" ? "active" : ""}`} onClick={() => setView("list")}><IconList /></button>
                                        </div>
                                    </div>

                                    {/* Products */}
                                    {view === "grid" ? (
                                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(200px,1fr))", gap: 16 }}>
                                            {sorted.map((p, i) => <GridCard key={p._id} product={p} idx={i} />)}
                                        </div>
                                    ) : (
                                        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                                            {sorted.map((p, i) => <ListCard key={p._id} product={p} idx={i} />)}
                                        </div>
                                    )}

                                    {/* Bottom CTA */}
                                    <div style={{
                                        marginTop: 28, padding: "20px 22px",
                                        background: "linear-gradient(160deg,#1e120a,#150c05)",
                                        border: "1px solid rgba(200,151,58,0.12)", borderRadius: 10,
                                        display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12,
                                    }}>
                                        <div>
                                            <p style={{ fontSize: 12, color: "#f0dfc0", letterSpacing: "0.05em", marginBottom: 3 }}>Continue exploring</p>
                                            <p style={{ fontSize: 9, color: "#6a5030", fontFamily: "Montserrat,sans-serif", letterSpacing: "0.1em" }}>
                                                Discover more artisan leather pieces
                                            </p>
                                        </div>
                                        <Link to="/collection" onClick={() => window.scrollTo(0, 0)}
                                            className="wl-btn-outline"
                                            style={{ width: "auto", padding: "10px 22px" }}>
                                            VIEW COLLECTION <IconArrow />
                                        </Link>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Wishlist;