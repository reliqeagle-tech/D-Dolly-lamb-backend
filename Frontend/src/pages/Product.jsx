// import { useContext, useEffect, useState, useRef } from 'react';
// import { useParams } from 'react-router-dom';
// import { ShopContext } from '../context/ShopContext';
// import { FaInfoCircle, FaCrown, FaChevronUp, FaChevronDown, FaRuler } from 'react-icons/fa';
// import { MdVerified, MdLocalShipping, MdLoop } from 'react-icons/md';
// import { HiSparkles } from 'react-icons/hi';
// import RelatedProducts from '../components/RelatedProducts';
// import Modal from '../components/Modal';
// import JacketLiningSelector from '../components/JacketLiningSelector';
// import { toast } from 'react-toastify';
// import { FaRegStar, FaStar, FaHeart, FaRegHeart } from 'react-icons/fa';
// import { BsShieldCheck, BsBagCheck } from 'react-icons/bs';
// import CartDrawer from '../components/CartDrawer';

// const C = {
//   bgPage: '#080604',
//   bgCard: '#110D06',
//   bgCardHover: '#1A1409',
//   bgInput: '#0D0A05',
//   gold: '#C9961A',
//   goldLight: '#E0AE3A',
//   goldDim: '#8B6914',
//   goldPale: '#F0E2C4',
//   goldMuted: '#8A7050',
//   goldFaint: '#4A3A22',
//   border: '#231A0C',
//   borderBright: '#3D2E14',
//   white: '#FFFFFF',
// };

// const colorMap = {
//   wine: '#722F37', red: '#FF0000', black: '#000000', olive: '#808000',
//   green: '#008000', cognac: '#D2691E', white: '#FFFFFF', yellow: '#FFFF00',
//   gray: '#808080', rose: '#FF007F', tobacco: '#A0522D', navy: '#000080',
//   beige: '#F5F5DC', blue: '#0000FF', brown: '#8B4513',
//   'dark gray': '#404040', 'dark-gray': '#404040',
//   'dark-wine': '#453333', 'tobacco-dark': '#6e351a',
// };

// const Product = () => {
//   const { productId } = useParams();
//   const { products, currency, addToCart } = useContext(ShopContext);
//   const { wishlist, toggleWishlistItem } = useContext(ShopContext);
//   const { submitReview, getProductReviews, token, deleteReview, userId } = useContext(ShopContext);
//   const { getSingleProduct } = useContext(ShopContext);

//   const [productData, setProductData] = useState(null);
//   const [image, setImage] = useState('');
//   const [selectedIndex, setSelectedIndex] = useState(0);
//   const [size, setSize] = useState('');
//   const [selectedColor, setSelectedColor] = useState('');
//   const [showModal, setShowModal] = useState(false);
//   const [activeTab, setActiveTab] = useState('description');
//   const [makeMeasure, setMakeMeasure] = useState(false);
//   const [isButtonDisabled, setIsButtonDisabled] = useState(false);
//   const [drawerOpen, setDrawerOpen] = useState(false);
//   const [displayPrice, setDisplayPrice] = useState(0);
//   const [reviews, setReviews] = useState([]);
//   const [rating, setRating] = useState(5);
//   const [comment, setComment] = useState('');
//   const [sizeMultiplier, setSizeMultiplier] = useState(1);
//   const [sizeStock, setSizeStock] = useState(0);
//   const [hoveredThumb, setHoveredThumb] = useState(null);
//   const [zoomPos, setZoomPos] = useState({ x: 50, y: 50 });
//   const [isZooming, setIsZooming] = useState(false);

//   const thumbListRef = useRef(null);
//   const mainImgRef = useRef(null);

//   const isWishlisted = Array.isArray(wishlist)
//     ? wishlist.some(item => item.productId === productId) : false;

//   const fetchProductData = async () => {
//     const item = await getSingleProduct(productId);
//     if (item) {
//       setProductData(item);
//       setImage(item.image[0]);
//       setSelectedIndex(0);
//       setDisplayPrice(item.price);
//       setSizeMultiplier(1);
//     }
//   };

//   const loadReviews = async () => {
//     const data = await getProductReviews(productId);
//     setReviews(data);
//   };

//   const toggleCartDrawer = () => setDrawerOpen(!drawerOpen);

//   const handleSizeSelect = (sizeObj) => {
//     if (!sizeObj) return;
//     if (typeof sizeObj === 'string') {
//       setSize(sizeObj); setSizeMultiplier(1); setSizeStock(0);
//     } else if (typeof sizeObj === 'object' && sizeObj.size) {
//       setSize(sizeObj.size);
//       setSizeMultiplier(sizeObj.priceMultiplier || 1);
//       setSizeStock(sizeObj.stock || 0);
//     }
//   };

//   const scrollThumbs = (dir) => {
//     if (!thumbListRef.current) return;
//     const isMobile = window.innerWidth < 768;
//     thumbListRef.current.scrollBy({
//       top: isMobile ? 0 : dir * 110,
//       left: isMobile ? dir * 90 : 0,
//       behavior: 'smooth',
//     });
//   };

//   const handleMouseMove = (e) => {
//     if (!mainImgRef.current) return;
//     const rect = mainImgRef.current.getBoundingClientRect();
//     const x = ((e.clientX - rect.left) / rect.width) * 100;
//     const y = ((e.clientY - rect.top) / rect.height) * 100;
//     setZoomPos({ x, y });
//   };

//   useEffect(() => { fetchProductData(); }, [productId, products]);
//   useEffect(() => {
//     if (productData?.color?.length) {
//       const firstColor = productData.color[0];
//       setSelectedColor(typeof firstColor === 'string' ? firstColor : firstColor?.name || 'Unknown');
//     }
//   }, [productData]);
//   useEffect(() => { if (productData) setDisplayPrice(productData.price); }, [productData]);
//   useEffect(() => { if (productId) loadReviews(); }, [productId]);
//   useEffect(() => {
//     if (productData?.price) setDisplayPrice(productData.price * (sizeMultiplier || 1));
//   }, [sizeMultiplier, productData?.price]);

//   const handleAddToCart = () => {
//     if (!size || !selectedColor) { toast.error('Please select a size and color.'); return; }
//     const customPrice = displayPrice - productData.price;
//     addToCart(productData._id, size, selectedColor, customPrice);
//     setIsButtonDisabled(true);
//     setTimeout(() => {
//       toast.success('Added to cart!');
//       setIsButtonDisabled(false);
//       window.scrollTo({ top: 0, behavior: 'smooth' });
//     }, 2000);
//   };

//   const handleReviewSubmit = async () => {
//     if (!token) return toast.error('Please login first');
//     if (!rating || !comment.trim()) return toast.error('Please add rating and comment');
//     const success = await submitReview(productId, rating, comment);
//     if (success) { setComment(''); setRating(5); loadReviews(); }
//   };

//   if (!productData) return (
//     <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', background: C.bgPage, flexDirection: 'column', gap: 20 }}>
//       <div style={{ width: 48, height: 48, position: 'relative' }}>
//         <div style={{ position: 'absolute', inset: 0, borderRadius: '50%', border: `1px solid ${C.goldFaint}` }} />
//         <div style={{ position: 'absolute', inset: 0, borderRadius: '50%', border: `2px solid transparent`, borderTopColor: C.gold, animation: 'spin 1s linear infinite' }} />
//       </div>
//       <span style={{ fontFamily: 'Jost,sans-serif', fontSize: 11, letterSpacing: '.22em', color: C.goldFaint, textTransform: 'uppercase' }}>Loading</span>
//       <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
//     </div>
//   );

//   const avgRating = reviews.length > 0 ? reviews.reduce((s, r) => s + r.rating, 0) / reviews.length : 0;
//   const roundedRating = Math.round(avgRating);
//   const discountedPrice = productData.discountPrice > 0
//     ? displayPrice - (displayPrice * productData.discountPrice / 100) : null;
//   const customBreakdown = displayPrice > productData.price
//     ? `+${currency}${(displayPrice - productData.price).toFixed(2)} customization` : '';

//   const css = `
//     @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Jost:wght@200;300;400;500;600;700&display=swap');
//     *, *::before, *::after { box-sizing:border-box; margin:0; padding:0; }
//     .pp { font-family:'Jost',sans-serif; background:${C.bgPage}; min-height:100vh; color:${C.goldPale}; }
//     .pp-serif { font-family:'Montserrat',serif; }
//     .pp-crumb { padding:11px 36px; font-size:10px; font-weight:600; letter-spacing:.28em; text-transform:uppercase; color:${C.goldDim}; border-bottom:1px solid ${C.border}; display:flex; align-items:center; gap:5px; }
//     .pp-crumb-dot { width:3px; height:3px; border-radius:50%; background:${C.goldDim}; flex-shrink:0; }
//     .pp-crumb-name { color:${C.goldMuted}; font-weight:300; letter-spacing:.08em; text-transform:none; font-size:12px; }
//     .pp-thumb-col { display:flex; flex-direction:column; align-items:center; width:64px; flex-shrink:0; gap:6px; }
//     .pp-thumb-scroll { display:flex; flex-direction:column; gap:6px; overflow-y:scroll; max-height:380px; scrollbar-width:none; -ms-overflow-style:none; width:100%; }
//     .pp-thumb-scroll::-webkit-scrollbar { display:none; }
//     .pp-arr { width:100%; height:24px; background:transparent; border:1px solid ${C.border}; border-radius:5px; display:flex; align-items:center; justify-content:center; cursor:pointer; color:${C.goldFaint}; transition:all .2s; flex-shrink:0; }
//     .pp-arr:hover { border-color:${C.goldDim}; color:${C.gold}; }
//     .pp-thumb-item { width:100%; aspect-ratio:1/1; border-radius:6px; overflow:hidden; cursor:pointer; border:1px solid ${C.border}; background:${C.bgCard}; flex-shrink:0; transition:all .3s; opacity:0.85; filter:brightness(0.65) saturate(0.8); position:relative; }
//     .pp-thumb-item::after { content:''; position:absolute; inset:0; background:${C.bgPage}; opacity:0.25; transition:opacity .3s; }
//     .pp-thumb-item:hover { opacity:0.7; filter:brightness(0.85) saturate(1); }
//     .pp-thumb-item:hover::after { opacity:0.1; }
//     .pp-thumb-item.active { opacity:1; filter:brightness(1) saturate(1); border-color:${C.gold}; }
//     .pp-thumb-item.active::after { opacity:0; }
//     .pp-thumb-item img { width:100%; height:100%; object-fit:cover; display:block; }
//     .pp-main-wrap { flex:1; position:relative; border-radius:10px; overflow:hidden; background:#FDFAF4; border:1px solid ${C.border}; cursor:crosshair; }
//     .pp-main-wrap img { width:100%; height:100%; object-fit:contain; display:block; transition:transform .1s ease; }
//     .pp-main-wrap.zooming img { transform:scale(2.2); transform-origin:var(--zx,50%) var(--zy,50%); }
//     .pp-corner { position:absolute; width:24px; height:24px; pointer-events:none; }
//     .pp-corner-tl { top:14px; left:14px; border-top:1px solid ${C.goldDim}; border-left:1px solid ${C.goldDim}; }
//     .pp-corner-tr { top:14px; right:14px; border-top:1px solid ${C.goldDim}; border-right:1px solid ${C.goldDim}; }
//     .pp-corner-bl { bottom:14px; left:14px; border-bottom:1px solid ${C.goldDim}; border-left:1px solid ${C.goldDim}; }
//     .pp-corner-br { bottom:14px; right:14px; border-bottom:1px solid ${C.goldDim}; border-right:1px solid ${C.goldDim}; }
//     .pp-img-wish { position:absolute; top:14px; right:14px; width:36px; height:36px; border-radius:50%; background:rgba(8,6,4,0.75); border:1px solid ${C.borderBright}; display:flex; align-items:center; justify-content:center; cursor:pointer; transition:all .25s; z-index:10; backdrop-filter:blur(8px); }
//     .pp-img-wish:hover { border-color:${C.gold}; background:rgba(201,150,26,0.15); }
//     .pp-img-wish.active { border-color:${C.gold}; background:rgba(201,150,26,0.12); }
//     .pp-counter { position:absolute; bottom:14px; left:50%; transform:translateX(-50%); background:rgba(8,6,4,0.8); border:1px solid ${C.border}; border-radius:99px; padding:5px 16px; font-size:10px; font-weight:600; color:${C.goldMuted}; backdrop-filter:blur(8px); letter-spacing:.14em; display:flex; align-items:center; gap:8px; }
//     .pp-counter-dot { width:4px; height:4px; border-radius:50%; background:${C.goldDim}; }
//     .pp-badge-gold { background:linear-gradient(135deg,${C.goldDim},${C.gold},${C.goldDim}); background-size:200% 200%; animation:shimmer 4s ease infinite; color:${C.bgPage}; border-radius:4px; padding:4px 12px; font-size:9px; font-weight:800; letter-spacing:.22em; display:inline-flex; align-items:center; gap:5px; text-transform:uppercase; }
//     .pp-badge-sale { background:linear-gradient(135deg,#5A2800,#A04800); background-size:200% 200%; animation:shimmer 4s ease infinite; color:#FFD48A; border-radius:4px; padding:4px 12px; font-size:9px; font-weight:800; letter-spacing:.18em; text-transform:uppercase; }
//     @keyframes shimmer{0%,100%{background-position:0% 50%}50%{background-position:100% 50%}}
//     .pp-divider { display:flex; align-items:center; gap:14px; margin:22px 0; }
//     .pp-divider-line { flex:1; height:1px; background:${C.border}; }
//     .pp-divider-diamond { width:5px; height:5px; background:${C.goldDim}; transform:rotate(45deg); flex-shrink:0; }
//     .pp-pricebox { padding:14px 0; margin-bottom:14px; border-bottom:1px solid ${C.border}; }
//     .pp-clr { border-radius:50%; cursor:pointer; transition:all .25s; border:2px solid transparent; flex-shrink:0; width:24px; height:24px; position:relative; }
//     .pp-clr::after { content:''; position:absolute; inset:-4px; border-radius:50%; border:1px solid transparent; transition:border-color .25s; }
//     .pp-clr:hover { transform:scale(1.1); }
//     .pp-clr.active::after { border-color:${C.gold}; }
//     .pp-size { border:1px solid ${C.border}; border-radius:7px; background:${C.bgCard}; display:flex; flex-direction:column; align-items:center; padding:8px 14px; min-width:52px; cursor:pointer; transition:all .2s; position:relative; overflow:hidden; }
//     .pp-size::before { content:''; position:absolute; top:0; left:0; right:0; height:1px; background:linear-gradient(90deg,transparent,${C.border},transparent); transition:background .2s; }
//     .pp-size:hover { border-color:${C.goldDim}; background:${C.bgCardHover}; }
//     .pp-size.active { border-color:${C.gold}; background:linear-gradient(160deg,${C.bgCardHover},#1F1609); box-shadow:0 0 18px ${C.gold}18; }
//     .pp-size.active::before { background:linear-gradient(90deg,transparent,${C.gold},transparent); }
//     .pp-size-lbl { font-weight:600; font-size:12px; color:${C.goldPale}; }
//     .pp-size-price { font-size:10px; color:#7A6A52; font-weight:400; margin-top:2px; }
//     .pp-size.active .pp-size-lbl { color:${C.gold}; }
//     .pp-size.active .pp-size-price { color:#9A8060; }
//     .pp-mtm { width:100%; border:1px solid ${C.border}; border-radius:8px; padding:11px 16px; background:${C.bgCard}; cursor:pointer; display:flex; align-items:center; justify-content:space-between; font-size:10px; font-weight:700; letter-spacing:.2em; font-family:'Jost',sans-serif; transition:all .25s; text-transform:uppercase; color:${C.goldMuted}; }
//     .pp-mtm:hover, .pp-mtm.active { border-color:${C.goldDim}; color:${C.goldLight}; background:${C.bgCardHover}; }
//     .pp-cart { width:100%; color:${C.bgPage}; font-weight:700; font-size:11px; letter-spacing:.22em; border:none; border-radius:8px; padding:15px; cursor:pointer; display:flex; align-items:center; justify-content:center; gap:8px; background:linear-gradient(110deg,${C.goldDim} 0%,${C.gold} 40%,${C.goldLight} 60%,${C.gold} 100%); background-size:200% 200%; background-position:0% 50%; transition:all .4s ease; position:relative; overflow:hidden; font-family:'Jost',sans-serif; text-transform:uppercase; }
//     .pp-cart::before { content:''; position:absolute; top:-50%; left:-60%; width:30%; height:200%; background:rgba(255,255,255,.12); transform:skewX(-20deg); transition:left .6s ease; }
//     .pp-cart:hover::before { left:120%; }
//     .pp-cart:hover { background-position:100% 50%; box-shadow:0 8px 32px ${C.gold}35; transform:translateY(-1px); }
//     .pp-cart:disabled { background:${C.bgCard}; color:${C.goldFaint}; border:1px solid ${C.border}; box-shadow:none; transform:none; cursor:not-allowed; }
//     .pp-policy { display:flex; align-items:center; gap:14px; padding:10px 0; border-bottom:1px solid ${C.border}; font-size:12px; color:#9A8060; letter-spacing:.02em; }
//     .pp-policy:last-child { border-bottom:none; }
//     .pp-policy-icon { width:28px; height:28px; border-radius:7px; background:${C.bgCard}; border:1px solid ${C.border}; display:flex; align-items:center; justify-content:center; flex-shrink:0; }
//     .pp-slabel { font-size:10px; font-weight:700; letter-spacing:.22em; text-transform:uppercase; color:#9A8060; }
//     .pp-bar-track { flex:1; height:4px; background:${C.border}; border-radius:99px; overflow:hidden; }
//     .pp-bar-fill { height:100%; background:linear-gradient(90deg,${C.goldDim},${C.gold}); border-radius:99px; transition:width .7s ease; }
//     .pp-rsum { background:${C.bgCard}; border:1px solid ${C.border}; border-radius:14px; padding:26px; margin-bottom:24px; position:relative; overflow:hidden; }
//     .pp-rsum::before { content:''; position:absolute; top:0; left:0; right:0; height:1px; background:linear-gradient(90deg,transparent,${C.gold}60,transparent); }
//     .pp-submit-btn { margin-top:14px; background:linear-gradient(110deg,${C.goldDim},${C.gold}); color:${C.bgPage}; border-radius:8px; padding:12px 28px; font-size:10px; font-weight:800; letter-spacing:.2em; border:none; cursor:pointer; font-family:'Jost',sans-serif; transition:all .25s; text-transform:uppercase; }
//     .pp-submit-btn:hover { box-shadow:0 4px 20px ${C.gold}40; transform:translateY(-1px); }
//     .pp-rinput { width:100%; border:1px solid ${C.border}; border-radius:10px; padding:14px 16px; font-size:13px; color:${C.goldPale}; resize:vertical; font-family:'Jost',sans-serif; background:${C.bgInput}; outline:none; transition:border-color .25s, box-shadow .25s; line-height:1.7; }
//     .pp-rinput:focus { border-color:${C.goldDim}; box-shadow:0 0 0 3px ${C.gold}18; }
//     .pp-rinput::placeholder { color:${C.goldFaint}; }
//     .pp-rev-card { background:${C.bgCard}; border:1px solid ${C.border}; border-radius:12px; padding:22px; margin-bottom:12px; transition:border-color .2s; }
//     .pp-rev-card:hover { border-color:${C.borderBright}; }
//     .pp-avatar { width:38px; height:38px; border-radius:50%; background:linear-gradient(135deg,${C.goldDim},${C.goldLight}); color:${C.bgPage}; display:flex; align-items:center; justify-content:center; font-weight:700; font-size:14px; flex-shrink:0; box-shadow:0 0 0 2px ${C.border}; }

//     /* ── Description HTML content ── */
//     .desc-html { color:${C.goldMuted}; line-height:2; font-size:14px; letter-spacing:.02em; font-family:'Jost',sans-serif; }
//     .desc-html strong, .desc-html b { color:${C.goldPale}; font-weight:600; }
//     .desc-html p { margin-bottom:1rem; }
//     .desc-html ul { list-style:none; padding:0; margin-bottom:1rem; }
//     .desc-html ul li { padding-left:1.5rem; position:relative; margin-bottom:.5rem; }
//     .desc-html ul li::before { content:'◆'; position:absolute; left:0; font-size:7px; top:6px; color:${C.goldDim}; }
//     .desc-html h2, .desc-html h3 { color:${C.goldPale}; font-family:'Cormorant Garamond',serif; font-weight:400; margin-bottom:.75rem; margin-top:1.5rem; }

//     /* ── Feature card hover ── */
//     .feat-card { transition:border-color .3s, background .3s; }
//     .feat-card:hover { border-color:${C.borderBright} !important; background:${C.bgCardHover} !important; }

//     /* ── Gallery sticky desktop ── */
//     .pp-gallery-col { display:flex; gap:12px; flex:0 0 auto; width:min(480px,100%); align-self:flex-start; }
//     @media (min-width:768px) { .pp-gallery-col { position:sticky; top:88px; } }

//     @keyframes fadeUp { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }
//     .pp-fadein { animation:fadeUp .45s ease both; }
//     .tab-content { animation:fadeUp .35s ease both; }

//     /* ── Mobile ── */
//     @media (max-width:767px) {
//       .pp-crumb { padding:10px 16px; font-size:9px; }
//       .pp-crumb-name { display:none; }
//       .pp-page-inner { padding:16px 16px 60px !important; }
//       .pp-two-col { flex-direction:column !important; gap:0 !important; }
//       .pp-gallery-col { width:100% !important; position:static !important; margin-bottom:20px; flex-direction:column !important; gap:10px !important; }
//       .pp-thumb-col { order:2; width:100%; flex-direction:row; align-items:center; gap:6px; }
//       .pp-thumb-scroll { flex-direction:row !important; overflow-x:auto !important; overflow-y:hidden !important; max-height:none !important; gap:8px; }
//       .pp-thumb-item { width:70px !important; height:70px !important; flex-shrink:0; }
//       .pp-arr { width:20px; height:40px; }
//       .pp-arr svg { transform:rotate(-90deg); }
//       .pp-info-panel { width:100% !important; min-width:0 !important; padding:0 !important; }
//       .pp-size { padding:7px 10px !important; min-width:46px !important; }
//       .pp-cart { padding:14px !important; }
//       .pp-rsum { padding:16px !important; }
//     }
//     @media (min-width:768px) and (max-width:1024px) {
//       .pp-gallery-col { width:min(380px,48%) !important; }
//       .pp-page-inner { padding:24px 24px 80px !important; }
//     }
//     .pp *::-webkit-scrollbar { width:3px; height:3px; }
//     .pp *::-webkit-scrollbar-thumb { background:${C.border}; border-radius:99px; }
//   `;

//   return (
//     <>
//       <style>{css}</style>
//       <div className="pp">

//         {/* Breadcrumb */}
//         <div className="pp-crumb">
//           <span>{productData.category?.toUpperCase()}&nbsp;/</span>
//           <div className="pp-crumb-dot" />
//           <span>{productData.subCategory?.toUpperCase() || 'PRODUCT'}&nbsp;-</span>
//           <div className="pp-crumb-dot" />
//           <span className="pp-crumb-name">{productData.name?.substring(0, 55)}{productData.name?.length > 55 ? '…' : ''}</span>
//         </div>

//         <div className="pp-page-inner" style={{ padding: '28px 36px 80px', maxWidth: 1440, margin: '0 auto' }}>
//           <div className="pp-two-col" style={{ display: 'flex', gap: 32, alignItems: 'flex-start', flexWrap: 'wrap' }}>

//             {/* ── Gallery ── */}
//             <div className="pp-gallery-col">
//               <div className="pp-thumb-col">
//                 <button className="pp-arr" onClick={() => scrollThumbs(-1)}><FaChevronUp size={9} /></button>
//                 <div className="pp-thumb-scroll" ref={thumbListRef}>
//                   {productData.image.map((item, index) => (
//                     <div key={index} className={`pp-thumb-item${index === selectedIndex ? ' active' : ''}`}
//                       onClick={() => { setImage(item); setSelectedIndex(index); }}
//                       onMouseEnter={() => setHoveredThumb(index)} onMouseLeave={() => setHoveredThumb(null)}>
//                       <img src={item} alt={`View ${index + 1}`} />
//                     </div>
//                   ))}
//                 </div>
//                 <button className="pp-arr" onClick={() => scrollThumbs(1)}><FaChevronDown size={9} /></button>
//               </div>
//               <div className={`pp-main-wrap${isZooming ? ' zooming' : ''} contain p-4`}
//                 style={{ aspectRatio: '1/1', flex: 1, '--zx': `${zoomPos.x}%`, '--zy': `${zoomPos.y}%` }}
//                 ref={mainImgRef} onMouseMove={handleMouseMove}
//                 onMouseEnter={() => setIsZooming(true)} onMouseLeave={() => setIsZooming(false)}>
//                 <img src={image} alt={productData.name} />
//                 <div className="pp-corner pp-corner-tl" /><div className="pp-corner pp-corner-tr" />
//                 <div className="pp-corner pp-corner-bl" /><div className="pp-corner pp-corner-br" />
//                 <button className={`pp-img-wish${isWishlisted ? ' active' : ''}`}
//                   onClick={() => toggleWishlistItem(productId)}>
//                   {isWishlisted ? <FaHeart size={14} style={{ color: C.gold }} /> : <FaRegHeart size={14} style={{ color: C.goldMuted }} />}
//                 </button>
//                 <div className="pp-counter">
//                   <span style={{ color: C.gold, fontWeight: 700 }}>{String(selectedIndex + 1).padStart(2, '0')}</span>
//                   <div className="pp-counter-dot" />
//                   <span>{String(productData.image.length).padStart(2, '0')}</span>
//                 </div>
//               </div>
//             </div>

//             {/* ── Info Panel ── */}
//             <div className="pp-info-panel pp-fadein" style={{ flex: '1 1 300px', minWidth: 0, paddingRight: 8 }}>
//               <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: '.28em', color: C.goldDim, marginBottom: 10, textTransform: 'uppercase' }}>
//                 {productData.category}&nbsp;/&nbsp;{productData.subCategory}
//               </p>
//               <div style={{ display: 'flex', gap: 7, flexWrap: 'wrap', marginBottom: 12 }}>
//                 <span className="pp-badge-gold"><FaCrown size={8} />&nbsp;Premium Collection</span>
//                 {productData.discountPrice > 0 && <span className="pp-badge-sale">{productData.discountPrice}% Off</span>}
//               </div>
//               <h1 className="pp-serif lg:w-[90%]" style={{ fontSize: 'clamp(15px,1.5vw,20px)', fontWeight: 400, color: C.goldPale, lineHeight: 1.4, marginBottom: 8 }}>
//                 {productData.name}
//               </h1>
//               <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
//                 <div style={{ display: 'flex', gap: 2 }}>
//                   {[...Array(5)].map((_, i) => <span key={i} style={{ color: i < roundedRating ? C.gold : C.goldFaint, fontSize: 13 }}>{i < roundedRating ? <FaStar /> : <FaRegStar />}</span>)}
//                 </div>
//                 <span style={{ fontSize: 11, color: '#7A6A52' }}>{avgRating > 0 ? avgRating.toFixed(1) : '—'}&ensp;·&ensp;{reviews.length} reviews</span>
//               </div>
//               <div className="pp-divider" style={{ margin: '14px 0' }}>
//                 <div className="pp-divider-line" /><div className="pp-divider-diamond" /><div className="pp-divider-line" />
//               </div>
//               <div className="pp-pricebox">
//                 {discountedPrice ? (
//                   <div style={{ display: 'flex', alignItems: 'flex-end', gap: 12, flexWrap: 'wrap' }}>
//                     <span className="pp-serif" style={{ fontSize: 36, fontWeight: 500, color: C.gold, lineHeight: 1 }}>{currency}{discountedPrice.toFixed(2)}</span>
//                     <div style={{ display: 'flex', flexDirection: 'column', gap: 4, paddingBottom: 3 }}>
//                       <span style={{ fontSize: 15, color: C.goldFaint, textDecoration: 'line-through' }}>{currency}{displayPrice.toFixed(2)}</span>
//                       <span style={{ background: 'linear-gradient(110deg,#5A2800,#A04800)', color: '#FFD48A', borderRadius: 4, padding: '2px 8px', fontSize: 9, fontWeight: 800, letterSpacing: '.16em', textTransform: 'uppercase' }}>Save {currency}{(displayPrice - discountedPrice).toFixed(2)}</span>
//                     </div>
//                   </div>
//                 ) : (
//                   <div style={{ display: 'flex', alignItems: 'flex-end', gap: 10 }}>
//                     <span className="pp-serif" style={{ fontSize: 36, fontWeight: 500, color: C.gold, lineHeight: 1 }}>{currency}{displayPrice.toFixed(2)}</span>
//                     {customBreakdown && <span style={{ fontSize: 11, color: C.goldFaint, paddingBottom: 4 }}>{customBreakdown}</span>}
//                   </div>
//                 )}
//                 <p style={{ fontSize: 11, color: '#7A6A52', marginTop: 8 }}>All taxes included&ensp;·&ensp;Free shipping above {currency}1000</p>
//               </div>
//               <p className="lg:w-[90%]" style={{ color: '#9A8468', lineHeight: 1.8, fontSize: 13, letterSpacing: '.02em' }}>{productData.description}</p>
//               <div className="pp-divider" style={{ margin: '16px 0' }}>
//                 <div className="pp-divider-line" /><div className="pp-divider-diamond" /><div className="pp-divider-line" />
//               </div>

//               {/* Colour */}
//               <div style={{ marginBottom: 16 }}>
//                 <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
//                   <span className="pp-slabel">Colour</span>
//                   <span style={{ fontSize: 11, color: C.goldPale, fontWeight: 500, textTransform: 'capitalize' }}>— {selectedColor}</span>
//                 </div>
//                 <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
//                   {productData.color?.map((colorObj, index) => {
//                     let colorName, colorHex;
//                     if (typeof colorObj === 'string') { colorName = colorObj; colorHex = colorMap[colorObj.toLowerCase()] || '#888'; }
//                     else if (colorObj?.name) { colorName = colorObj.name; colorHex = colorObj.hex || '#888'; }
//                     else { colorName = 'Unknown'; colorHex = '#888'; }
//                     return <button key={index} className={`pp-clr${selectedColor === colorName ? ' active' : ''}`}
//                       onClick={() => setSelectedColor(colorName)}
//                       style={{ background: colorHex, outline: colorHex === '#FFFFFF' ? `1px solid ${C.border}` : 'none' }}
//                       title={colorName} />;
//                   })}
//                 </div>
//               </div>

//               {/* Size */}
//               <div style={{ marginBottom: 16 }}>
//                 <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
//                   <span className="pp-slabel">Select Size</span>
//                   <button onClick={() => setShowModal(true)} style={{ fontSize: 10, color: C.gold, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'Jost,sans-serif', display: 'flex', alignItems: 'center', gap: 5 }}>
//                     <FaRuler size={10} /> Size Guide
//                   </button>
//                   {showModal && <Modal onclose={() => setShowModal(false)} />}
//                 </div>
//                 <div style={{ display: 'flex', gap: 7, flexWrap: 'wrap' }}>
//                   {productData.sizes?.length > 0 ? productData.sizes.map((sizeObj, index) => {
//                     const sizeLabel = typeof sizeObj === 'object' ? (sizeObj?.size ?? `Size ${index + 1}`) : String(sizeObj);
//                     const multiplier = sizeObj?.priceMultiplier || 1;
//                     return (
//                       <button key={index} type="button" className={`pp-size${size === sizeLabel ? ' active' : ''}`} onClick={() => handleSizeSelect(sizeObj)}>
//                         <span className="pp-size-lbl">{sizeLabel}</span>
//                         <span className="pp-size-price">{currency}{(productData.price * multiplier).toFixed(2)}</span>
//                       </button>
//                     );
//                   }) : <p style={{ fontSize: 13, color: C.goldMuted }}>No sizes available</p>}
//                 </div>
//                 {size && sizeStock > 0 && sizeStock < 5 && (
//                   <div style={{ marginTop: 10, display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(249,115,22,0.1)', border: '1px solid rgba(249,115,22,0.25)', borderRadius: 6, padding: '5px 10px' }}>
//                     <span style={{ fontSize: 10 }}>🔥</span>
//                     <span style={{ fontSize: 11, color: '#F97316', fontWeight: 600 }}>Only {sizeStock} left in this size</span>
//                   </div>
//                 )}
//               </div>

//               {/* Made to Measure */}
//               <div style={{ marginBottom: 8 }}>
//                 <button className={`pp-mtm${makeMeasure ? ' active' : ''}`} onClick={() => setMakeMeasure(!makeMeasure)}>
//                   <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
//                     <HiSparkles size={13} style={{ color: C.gold }} /><span>Made to Measure</span>
//                   </div>
//                   <FaChevronDown size={10} style={{ transform: makeMeasure ? 'rotate(180deg)' : 'none', transition: 'transform .2s', color: C.goldDim }} />
//                 </button>
//                 {makeMeasure && (
//                   <div style={{ marginTop: 6, padding: '12px 16px', borderRadius: 8, background: C.bgCard, border: `1px solid ${C.border}`, display: 'flex', alignItems: 'center', gap: 10 }}>
//                     <FaInfoCircle style={{ color: C.gold, flexShrink: 0 }} size={12} />
//                     <p style={{ fontSize: 12, color: C.goldMuted, lineHeight: 1.6 }}>Custom measurements can be added on the Cart page.</p>
//                   </div>
//                 )}
//               </div>

//               {/* CTA */}
//               <div style={{ marginTop: 14, display: 'flex', flexDirection: 'column', gap: 8 }}>
//                 <button className="pp-cart" onClick={() => { handleAddToCart(); toggleCartDrawer(); }} disabled={isButtonDisabled || !size || !selectedColor}>
//                   <BsBagCheck size={16} />
//                   {isButtonDisabled ? 'Adding to Cart…' : 'Add to Cart'}
//                 </button>
//               </div>
//               <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer} />
//               <JacketLiningSelector basePrice={productData.price} onPriceChange={p => setDisplayPrice(p)} />

//               {/* Policies */}
//               <div style={{ paddingTop: 8 }} />
//               {[
//                 { icon: <BsShieldCheck size={14} style={{ color: C.gold }} />, text: '100% original, premium materials' },
//                 { icon: <MdLocalShipping size={14} style={{ color: C.gold }} />, text: 'Secure cash on delivery + multiple payment methods' },
//                 { icon: <MdLoop size={14} style={{ color: C.gold }} />, text: 'Simple 7-day return or exchange policy' },
//               ].map((p, i) => (
//                 <div key={i} className="pp-policy">
//                   <div className="pp-policy-icon">{p.icon}</div>
//                   <span>{p.text}</span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* ══════════════════════════════════════════
//               TABS SECTION — fully redesigned
//           ══════════════════════════════════════════ */}
//           <div className="mt-20">

//             {/* Tab Nav */}
//             <div className="flex items-end overflow-x-auto" style={{ borderBottom: `1px solid ${C.border}`, marginBottom: 40 }}>
//               {['description', 'reviews'].map(tab => (
//                 <button
//                   key={tab}
//                   onClick={() => setActiveTab(tab)}
//                   style={{
//                     position: 'relative',
//                     padding: '14px 32px',
//                     fontFamily: 'Jost, sans-serif',
//                     fontSize: 10,
//                     fontWeight: 700,
//                     letterSpacing: '0.22em',
//                     textTransform: 'uppercase',
//                     background: 'none',
//                     border: 'none',
//                     borderBottom: activeTab === tab ? `2px solid ${C.gold}` : '2px solid transparent',
//                     marginBottom: -1,
//                     cursor: 'pointer',
//                     color: activeTab === tab ? C.gold : C.goldFaint,
//                     transition: 'color .25s, border-color .25s',
//                     whiteSpace: 'nowrap',
//                   }}
//                 >
//                   {tab === 'reviews' ? `Reviews (${reviews.length})` : 'Description'}
//                   {activeTab === tab && (
//                     <span style={{
//                       position: 'absolute', bottom: -3, left: '50%',
//                       width: 4, height: 4, borderRadius: '50%',
//                       background: C.gold,
//                       transform: 'translateX(-50%)',
//                       display: 'block',
//                     }} />
//                   )}
//                 </button>
//               ))}
//             </div>

//             {/* ─────────────────────────────────────────
//                 DESCRIPTION TAB — redesigned
//             ───────────────────────────────────────── */}
//             {activeTab === 'description' && (
//               <div className="tab-content" style={{ maxWidth: 900 }}>

//                 {/* Ornamental section header */}
//                 <div className="flex items-center gap-5 mb-10">
//                   <div style={{ flex: 1, height: 1, background: `linear-gradient(90deg, transparent, ${C.goldDim})` }} />
//                   <div className="flex items-center gap-3">
//                     <div style={{ width: 5, height: 5, background: C.goldDim, transform: 'rotate(45deg)' }} />
//                     <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.35em', textTransform: 'uppercase', color: C.goldDim, fontFamily: 'Jost, sans-serif' }}>
//                       Product Details
//                     </span>
//                     <div style={{ width: 5, height: 5, background: C.goldDim, transform: 'rotate(45deg)' }} />
//                   </div>
//                   <div style={{ flex: 1, height: 1, background: `linear-gradient(90deg, ${C.goldDim}, transparent)` }} />
//                 </div>

//                 {/* Main description card with corner ornaments */}
//                 <div className="relative rounded-2xl p-8 mb-8 overflow-hidden" style={{ background: C.bgCard, border: `1px solid ${C.border}` }}>
//                   {/* Top shimmer line */}
//                   <div className="absolute top-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${C.gold}55, transparent)` }} />
//                   {/* Corner ornaments */}
//                   <div className="absolute top-4 left-4 w-5 h-5" style={{ borderTop: `1px solid ${C.goldDim}`, borderLeft: `1px solid ${C.goldDim}` }} />
//                   <div className="absolute top-4 right-4 w-5 h-5" style={{ borderTop: `1px solid ${C.goldDim}`, borderRight: `1px solid ${C.goldDim}` }} />
//                   <div className="absolute bottom-4 left-4 w-5 h-5" style={{ borderBottom: `1px solid ${C.goldDim}`, borderLeft: `1px solid ${C.goldDim}` }} />
//                   <div className="absolute bottom-4 right-4 w-5 h-5" style={{ borderBottom: `1px solid ${C.goldDim}`, borderRight: `1px solid ${C.goldDim}` }} />

//                   <div
//                     className="desc-html"
//                     dangerouslySetInnerHTML={{ __html: productData.detailedDescription }}
//                   />
//                 </div>

//                 {/* Artisan feature cards */}
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
//                   {[
//                     { symbol: '✦', label: 'Premium Craft', desc: 'Handcrafted by artisans using heritage leatherworking techniques passed through generations.' },
//                     { symbol: '◈', label: 'Finest Materials', desc: 'Sourced exclusively from the world\'s most prestigious and ethically certified tanneries.' },
//                     { symbol: '❋', label: 'Bespoke Finish', desc: 'Each piece hand-finished to exacting luxury standards with precision hand stitching.' },
//                   ].map((feat, i) => (
//                     <div
//                       key={i}
//                       className="feat-card relative rounded-xl p-6"
//                       style={{ background: C.bgCard, border: `1px solid ${C.border}` }}
//                     >
//                       {/* subtle top accent */}
//                       <div className="absolute top-0 left-6 right-6 h-px" style={{ background: `linear-gradient(90deg, transparent, ${C.goldFaint}, transparent)` }} />
//                       <div
//                         className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
//                         style={{ background: C.bgCardHover, border: `1px solid ${C.borderBright}`, color: C.gold, fontSize: 15 }}
//                       >
//                         {feat.symbol}
//                       </div>
//                       <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: C.goldPale, fontFamily: 'Jost, sans-serif', marginBottom: 8 }}>
//                         {feat.label}
//                       </p>
//                       <p style={{ fontSize: 12, lineHeight: 1.75, color: C.goldFaint, fontFamily: 'Jost, sans-serif' }}>
//                         {feat.desc}
//                       </p>
//                     </div>
//                   ))}
//                 </div>

//                 {/* Care guide strip */}
//                 <div
//                   className="rounded-xl px-6 py-5 flex flex-wrap items-center gap-x-6 gap-y-3"
//                   style={{ background: C.bgInput, border: `1px solid ${C.border}` }}
//                 >
//                   <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.28em', textTransform: 'uppercase', color: C.goldDim, fontFamily: 'Jost, sans-serif', flexShrink: 0 }}>
//                     Care Guide
//                   </span>
//                   <div style={{ width: 1, height: 16, background: C.border, flexShrink: 0 }} />
//                   {[
//                     { symbol: '🌿', label: 'Dry Clean Only' },
//                     { symbol: '💧', label: 'Avoid Moisture' },
//                     { symbol: '☀️', label: 'No Direct Sunlight' },
//                     { symbol: '🗄️', label: 'Store in Dust Bag' },
//                   ].map((care, i) => (
//                     <div key={i} className="flex items-center gap-2">
//                       <span style={{ fontSize: 14 }}>{care.symbol}</span>
//                       <span style={{ fontSize: 11, color: C.goldMuted, fontFamily: 'Jost, sans-serif' }}>{care.label}</span>
//                     </div>
//                   ))}
//                 </div>

//               </div>
//             )}

//             {/* ─────────────────────────────────────────
//                 REVIEWS TAB
//             ───────────────────────────────────────── */}
//             {activeTab === 'reviews' && (
//               <div className="tab-content" style={{ maxWidth: 700 }}>
//                 {reviews.length > 0 && (
//                   <div className="pp-rsum" style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
//                     <div style={{ textAlign: 'center', flexShrink: 0 }}>
//                       <div className="pp-serif" style={{ fontSize: 64, fontWeight: 300, color: C.gold, lineHeight: 1 }}>{avgRating.toFixed(1)}</div>
//                       <div style={{ display: 'flex', justifyContent: 'center', gap: 3, margin: '6px 0' }}>
//                         {[...Array(5)].map((_, i) => <span key={i} style={{ color: i < roundedRating ? C.gold : C.goldFaint, fontSize: 12 }}>{i < roundedRating ? <FaStar /> : <FaRegStar />}</span>)}
//                       </div>
//                       <p style={{ fontSize: 10, color: C.goldFaint, letterSpacing: '.1em' }}>{reviews.length} Reviews</p>
//                     </div>
//                     <div style={{ flex: 1 }}>
//                       {[5, 4, 3, 2, 1].map(star => {
//                         const count = reviews.filter(r => Math.round(r.rating) === star).length;
//                         const pct = reviews.length ? (count / reviews.length) * 100 : 0;
//                         return (
//                           <div key={star} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
//                             <span style={{ fontSize: 10, color: C.goldFaint, width: 8, textAlign: 'right' }}>{star}</span>
//                             <FaStar size={8} style={{ color: C.gold, flexShrink: 0 }} />
//                             <div className="pp-bar-track"><div className="pp-bar-fill" style={{ width: `${pct}%` }} /></div>
//                             <span style={{ fontSize: 10, color: C.goldFaint, width: 18, textAlign: 'right' }}>{count}</span>
//                           </div>
//                         );
//                       })}
//                     </div>
//                   </div>
//                 )}

//                 {token ? (
//                   <div style={{ marginBottom: 24, padding: 28, borderRadius: 14, border: `1px solid ${C.border}`, background: C.bgCard, position: 'relative', overflow: 'hidden' }}>
//                     <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: `linear-gradient(90deg,transparent,${C.goldDim},transparent)` }} />
//                     <h3 className="pp-serif" style={{ fontSize: 26, fontWeight: 400, color: C.goldPale, marginBottom: 18 }}>Write a Review</h3>
//                     <div style={{ display: 'flex', gap: 6, marginBottom: 18 }}>
//                       {[1, 2, 3, 4, 5].map(s => (
//                         <span key={s} onClick={() => setRating(s)}
//                           style={{ fontSize: 28, cursor: 'pointer', color: s <= rating ? C.gold : C.goldFaint, transition: 'transform .15s', display: 'inline-block' }}
//                           onMouseOver={e => e.currentTarget.style.transform = 'scale(1.25)'}
//                           onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}>
//                           {s <= rating ? <FaStar /> : <FaRegStar />}
//                         </span>
//                       ))}
//                     </div>
//                     <textarea className="pp-rinput" placeholder="Share your experience with this product…" value={comment} onChange={e => setComment(e.target.value)} rows={4} />
//                     <button className="pp-submit-btn" onClick={handleReviewSubmit}>Submit Review</button>
//                   </div>
//                 ) : (
//                   <div style={{ padding: 20, borderRadius: 12, background: C.bgCard, border: `1px dashed ${C.border}`, textAlign: 'center', marginBottom: 20, color: C.goldMuted, fontSize: 13 }}>
//                     Please&nbsp;<span style={{ color: C.gold, fontWeight: 600, cursor: 'pointer', textDecoration: 'underline', textUnderlineOffset: 3 }}>sign in</span>&nbsp;to write a review.
//                   </div>
//                 )}

//                 {reviews.length === 0 ? (
//                   <div style={{ textAlign: 'center', padding: '40px 0' }}>
//                     <div className="pp-serif" style={{ fontSize: 20, color: C.goldFaint, marginBottom: 8 }}>No reviews yet</div>
//                     <p style={{ fontSize: 12, color: C.goldFaint, letterSpacing: '.06em' }}>Be the first to share your experience</p>
//                   </div>
//                 ) : reviews.map(rev => (
//                   <div key={rev._id} className="pp-rev-card">
//                     <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
//                       <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
//                         <div className="pp-avatar">{(rev.user?.name || 'U')[0].toUpperCase()}</div>
//                         <div>
//                           <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
//                             <span style={{ fontWeight: 600, fontSize: 13, color: C.goldPale }}>{rev.user?.name || 'Customer'}</span>
//                             <MdVerified size={12} style={{ color: '#4ADE80' }} />
//                           </div>
//                           <div style={{ display: 'flex', gap: 2, marginTop: 4 }}>
//                             {[...Array(5)].map((_, i) => <span key={i} style={{ color: i < rev.rating ? C.gold : C.goldFaint, fontSize: 10 }}>{i < rev.rating ? <FaStar /> : <FaRegStar />}</span>)}
//                           </div>
//                         </div>
//                       </div>
//                       <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
//                         <span style={{ fontSize: 10, color: C.goldFaint }}>{new Date(rev.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
//                         {rev.user?._id === userId && (
//                           <button onClick={async () => { const ok = await deleteReview(rev._id); if (ok) loadReviews(); }}
//                             style={{ fontSize: 10, color: '#F87171', fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer', letterSpacing: '.06em', textTransform: 'uppercase' }}>
//                             Delete
//                           </button>
//                         )}
//                       </div>
//                     </div>
//                     <p style={{ fontSize: 13, color: C.goldMuted, lineHeight: 1.8, marginTop: 14 }}>{rev.comment}</p>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>

//           {/* Related Products */}
//           <div style={{ marginTop: 100 }}>
//             <div style={{ display: 'flex', alignItems: 'center', gap: 24, marginBottom: 40 }}>
//               <div style={{ flex: 1, height: 1, background: `linear-gradient(90deg,transparent,${C.border})` }} />
//               <div style={{ flex: 1, height: 1, background: `linear-gradient(90deg,${C.border},transparent)` }} />
//             </div>
//             <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Product;







import { useContext, useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { createPortal } from 'react-dom';
import { ShopContext } from '../context/ShopContext';
import { FaInfoCircle, FaCrown, FaChevronUp, FaChevronDown, FaRuler } from 'react-icons/fa';
import { MdVerified, MdLocalShipping, MdLoop } from 'react-icons/md';
import { HiSparkles } from 'react-icons/hi';
import RelatedProducts from '../components/RelatedProducts';
import Modal from '../components/Modal';
import JacketLiningSelector from '../components/JacketLiningSelector';
import { toast } from 'react-toastify';
import { FaRegStar, FaStar, FaHeart, FaRegHeart } from 'react-icons/fa';
import { BsShieldCheck, BsBagCheck } from 'react-icons/bs';
import CartDrawer from '../components/CartDrawer';

const C = {
  bgPage: '#080604',
  bgCard: '#110D06',
  bgCardHover: '#1A1409',
  bgInput: '#0D0A05',
  gold: '#C9961A',
  goldLight: '#E0AE3A',
  goldDim: '#8B6914',
  goldPale: '#F0E2C4',
  goldMuted: '#8A7050',
  goldFaint: '#4A3A22',
  border: '#231A0C',
  borderBright: '#3D2E14',
  white: '#FFFFFF',
};

const colorMap = {
  wine: '#722F37', red: '#FF0000', black: '#000000', olive: '#808000',
  green: '#008000', cognac: '#D2691E', white: '#FFFFFF', yellow: '#FFFF00',
  gray: '#808080', rose: '#FF007F', tobacco: '#A0522D', navy: '#000080',
  beige: '#F5F5DC', blue: '#0000FF', brown: '#8B4513',
  'dark gray': '#404040', 'dark-gray': '#404040',
  'dark-wine': '#453333', 'tobacco-dark': '#6e351a',
};

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const { wishlist, toggleWishlistItem } = useContext(ShopContext);
  const { submitReview, getProductReviews, token, deleteReview, userId } = useContext(ShopContext);
  const { getSingleProduct } = useContext(ShopContext);

  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [size, setSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState('description');
  const [makeMeasure, setMakeMeasure] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [displayPrice, setDisplayPrice] = useState(0);
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [sizeMultiplier, setSizeMultiplier] = useState(1);
  const [sizeStock, setSizeStock] = useState(0);
  const [hoveredThumb, setHoveredThumb] = useState(null);
  const [zoomPos, setZoomPos] = useState({ x: 50, y: 50 });
  const [isZooming, setIsZooming] = useState(false);

  const thumbListRef = useRef(null);
  const mainImgRef = useRef(null);

  const isWishlisted = Array.isArray(wishlist)
    ? wishlist.some(item => item.productId === productId) : false;

  const fetchProductData = async () => {
    const item = await getSingleProduct(productId);
    if (item) {
      setProductData(item);
      setImage(item.image[0]);
      setSelectedIndex(0);
      setDisplayPrice(item.price);
      setSizeMultiplier(1);
    }
  };

  const loadReviews = async () => {
    const data = await getProductReviews(productId);
    setReviews(data);
  };

  // ✅ FIXED: open only, never toggle — close is handled by CartDrawer's own X button
  const openCartDrawer = () => setDrawerOpen(true);
  const closeCartDrawer = () => setDrawerOpen(false);

  const handleSizeSelect = (sizeObj) => {
    if (!sizeObj) return;
    if (typeof sizeObj === 'string') {
      setSize(sizeObj); setSizeMultiplier(1); setSizeStock(0);
    } else if (typeof sizeObj === 'object' && sizeObj.size) {
      setSize(sizeObj.size);
      setSizeMultiplier(sizeObj.priceMultiplier || 1);
      setSizeStock(sizeObj.stock || 0);
    }
  };

  const scrollThumbs = (dir) => {
    if (!thumbListRef.current) return;
    const isMobile = window.innerWidth < 768;
    thumbListRef.current.scrollBy({
      top: isMobile ? 0 : dir * 110,
      left: isMobile ? dir * 90 : 0,
      behavior: 'smooth',
    });
  };

  const handleMouseMove = (e) => {
    if (!mainImgRef.current) return;
    const rect = mainImgRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setZoomPos({ x, y });
  };

  useEffect(() => { fetchProductData(); }, [productId, products]);
  useEffect(() => {
    if (productData?.color?.length) {
      const firstColor = productData.color[0];
      setSelectedColor(typeof firstColor === 'string' ? firstColor : firstColor?.name || 'Unknown');
    }
  }, [productData]);
  useEffect(() => { if (productData) setDisplayPrice(productData.price); }, [productData]);
  useEffect(() => { if (productId) loadReviews(); }, [productId]);
  useEffect(() => {
    if (productData?.price) setDisplayPrice(productData.price * (sizeMultiplier || 1));
  }, [sizeMultiplier, productData?.price]);

  const handleAddToCart = () => {
    if (!size || !selectedColor) { toast.error('Please select a size and color.'); return; }
    const customPrice = displayPrice - productData.price;
    addToCart(productData._id, size, selectedColor, customPrice);
    setIsButtonDisabled(true);
    // ✅ FIXED: open drawer here, not via toggleCartDrawer in onClick
    openCartDrawer();
    setTimeout(() => {
      toast.success('Added to cart!');
      setIsButtonDisabled(false);
    }, 2000);
  };

  const handleReviewSubmit = async () => {
    if (!token) return toast.error('Please login first');
    if (!rating || !comment.trim()) return toast.error('Please add rating and comment');
    const success = await submitReview(productId, rating, comment);
    if (success) { setComment(''); setRating(5); loadReviews(); }
  };

  if (!productData) return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', background: C.bgPage, flexDirection: 'column', gap: 20 }}>
      <div style={{ width: 48, height: 48, position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, borderRadius: '50%', border: `1px solid ${C.goldFaint}` }} />
        <div style={{ position: 'absolute', inset: 0, borderRadius: '50%', border: `2px solid transparent`, borderTopColor: C.gold, animation: 'spin 1s linear infinite' }} />
      </div>
      <span style={{ fontFamily: 'Jost,sans-serif', fontSize: 11, letterSpacing: '.22em', color: C.goldFaint, textTransform: 'uppercase' }}>Loading</span>
      <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
    </div>
  );

  const avgRating = reviews.length > 0 ? reviews.reduce((s, r) => s + r.rating, 0) / reviews.length : 0;
  const roundedRating = Math.round(avgRating);
  const discountedPrice = productData.discountPrice > 0
    ? displayPrice - (displayPrice * productData.discountPrice / 100) : null;
  const customBreakdown = displayPrice > productData.price
    ? `+${currency}${(displayPrice - productData.price).toFixed(2)} customization` : '';

  const css = `
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Jost:wght@200;300;400;500;600;700&display=swap');
    *, *::before, *::after { box-sizing:border-box; margin:0; padding:0; }
    .pp { font-family:'Jost',sans-serif; background:${C.bgPage}; min-height:100vh; color:${C.goldPale}; }
    .pp-serif { font-family:'Montserrat',serif; }
    .pp-crumb { padding:11px 36px; font-size:10px; font-weight:600; letter-spacing:.28em; text-transform:uppercase; color:${C.goldDim}; border-bottom:1px solid ${C.border}; display:flex; align-items:center; gap:5px; }
    .pp-crumb-dot { width:3px; height:3px; border-radius:50%; background:${C.goldDim}; flex-shrink:0; }
    .pp-crumb-name { color:${C.goldMuted}; font-weight:300; letter-spacing:.08em; text-transform:none; font-size:12px; }
    .pp-thumb-col { display:flex; flex-direction:column; align-items:center; width:64px; flex-shrink:0; gap:6px; }
    .pp-thumb-scroll { display:flex; flex-direction:column; gap:6px; overflow-y:scroll; max-height:380px; scrollbar-width:none; -ms-overflow-style:none; width:100%; }
    .pp-thumb-scroll::-webkit-scrollbar { display:none; }
    .pp-arr { width:100%; height:24px; background:transparent; border:1px solid ${C.border}; border-radius:5px; display:flex; align-items:center; justify-content:center; cursor:pointer; color:${C.goldFaint}; transition:all .2s; flex-shrink:0; }
    .pp-arr:hover { border-color:${C.goldDim}; color:${C.gold}; }
    .pp-thumb-item { width:100%; aspect-ratio:1/1; border-radius:6px; overflow:hidden; cursor:pointer; border:1px solid ${C.border}; background:${C.bgCard}; flex-shrink:0; transition:all .3s; opacity:0.85; filter:brightness(0.65) saturate(0.8); position:relative; }
    .pp-thumb-item::after { content:''; position:absolute; inset:0; background:${C.bgPage}; opacity:0.25; transition:opacity .3s; }
    .pp-thumb-item:hover { opacity:0.7; filter:brightness(0.85) saturate(1); }
    .pp-thumb-item:hover::after { opacity:0.1; }
    .pp-thumb-item.active { opacity:1; filter:brightness(1) saturate(1); border-color:${C.gold}; }
    .pp-thumb-item.active::after { opacity:0; }
    .pp-thumb-item img { width:100%; height:100%; object-fit:cover; display:block; }
    .pp-main-wrap { flex:1; position:relative; border-radius:10px; overflow:hidden; background:#FDFAF4; border:1px solid ${C.border}; cursor:crosshair; }
    .pp-main-wrap img { width:100%; height:100%; object-fit:contain; display:block; transition:transform .1s ease; }
    .pp-main-wrap.zooming img { transform:scale(2.2); transform-origin:var(--zx,50%) var(--zy,50%); }
    .pp-corner { position:absolute; width:24px; height:24px; pointer-events:none; }
    .pp-corner-tl { top:14px; left:14px; border-top:1px solid ${C.goldDim}; border-left:1px solid ${C.goldDim}; }
    .pp-corner-tr { top:14px; right:14px; border-top:1px solid ${C.goldDim}; border-right:1px solid ${C.goldDim}; }
    .pp-corner-bl { bottom:14px; left:14px; border-bottom:1px solid ${C.goldDim}; border-left:1px solid ${C.goldDim}; }
    .pp-corner-br { bottom:14px; right:14px; border-bottom:1px solid ${C.goldDim}; border-right:1px solid ${C.goldDim}; }
    .pp-img-wish { position:absolute; top:14px; right:14px; width:36px; height:36px; border-radius:50%; background:rgba(8,6,4,0.75); border:1px solid ${C.borderBright}; display:flex; align-items:center; justify-content:center; cursor:pointer; transition:all .25s; z-index:10; backdrop-filter:blur(8px); }
    .pp-img-wish:hover { border-color:${C.gold}; background:rgba(201,150,26,0.15); }
    .pp-img-wish.active { border-color:${C.gold}; background:rgba(201,150,26,0.12); }
    .pp-counter { position:absolute; bottom:14px; left:50%; transform:translateX(-50%); background:rgba(8,6,4,0.8); border:1px solid ${C.border}; border-radius:99px; padding:5px 16px; font-size:10px; font-weight:600; color:${C.goldMuted}; backdrop-filter:blur(8px); letter-spacing:.14em; display:flex; align-items:center; gap:8px; }
    .pp-counter-dot { width:4px; height:4px; border-radius:50%; background:${C.goldDim}; }
    .pp-badge-gold { background:linear-gradient(135deg,${C.goldDim},${C.gold},${C.goldDim}); background-size:200% 200%; animation:shimmer 4s ease infinite; color:${C.bgPage}; border-radius:4px; padding:4px 12px; font-size:9px; font-weight:800; letter-spacing:.22em; display:inline-flex; align-items:center; gap:5px; text-transform:uppercase; }
    .pp-badge-sale { background:linear-gradient(135deg,#5A2800,#A04800); background-size:200% 200%; animation:shimmer 4s ease infinite; color:#FFD48A; border-radius:4px; padding:4px 12px; font-size:9px; font-weight:800; letter-spacing:.18em; text-transform:uppercase; }
    @keyframes shimmer{0%,100%{background-position:0% 50%}50%{background-position:100% 50%}}
    .pp-divider { display:flex; align-items:center; gap:14px; margin:22px 0; }
    .pp-divider-line { flex:1; height:1px; background:${C.border}; }
    .pp-divider-diamond { width:5px; height:5px; background:${C.goldDim}; transform:rotate(45deg); flex-shrink:0; }
    .pp-pricebox { padding:14px 0; margin-bottom:14px; border-bottom:1px solid ${C.border}; }
    .pp-clr { border-radius:50%; cursor:pointer; transition:all .25s; border:2px solid transparent; flex-shrink:0; width:24px; height:24px; position:relative; }
    .pp-clr::after { content:''; position:absolute; inset:-4px; border-radius:50%; border:1px solid transparent; transition:border-color .25s; }
    .pp-clr:hover { transform:scale(1.1); }
    .pp-clr.active::after { border-color:${C.gold}; }
    .pp-size { border:1px solid ${C.border}; border-radius:7px; background:${C.bgCard}; display:flex; flex-direction:column; align-items:center; padding:8px 14px; min-width:52px; cursor:pointer; transition:all .2s; position:relative; overflow:hidden; }
    .pp-size::before { content:''; position:absolute; top:0; left:0; right:0; height:1px; background:linear-gradient(90deg,transparent,${C.border},transparent); transition:background .2s; }
    .pp-size:hover { border-color:${C.goldDim}; background:${C.bgCardHover}; }
    .pp-size.active { border-color:${C.gold}; background:linear-gradient(160deg,${C.bgCardHover},#1F1609); box-shadow:0 0 18px ${C.gold}18; }
    .pp-size.active::before { background:linear-gradient(90deg,transparent,${C.gold},transparent); }
    .pp-size-lbl { font-weight:600; font-size:12px; color:${C.goldPale}; }
    .pp-size-price { font-size:10px; color:#7A6A52; font-weight:400; margin-top:2px; }
    .pp-size.active .pp-size-lbl { color:${C.gold}; }
    .pp-size.active .pp-size-price { color:#9A8060; }
    .pp-mtm { width:100%; border:1px solid ${C.border}; border-radius:8px; padding:11px 16px; background:${C.bgCard}; cursor:pointer; display:flex; align-items:center; justify-content:space-between; font-size:10px; font-weight:700; letter-spacing:.2em; font-family:'Jost',sans-serif; transition:all .25s; text-transform:uppercase; color:${C.goldMuted}; }
    .pp-mtm:hover, .pp-mtm.active { border-color:${C.goldDim}; color:${C.goldLight}; background:${C.bgCardHover}; }
    .pp-cart { width:100%; color:${C.bgPage}; font-weight:700; font-size:11px; letter-spacing:.22em; border:none; border-radius:8px; padding:15px; cursor:pointer; display:flex; align-items:center; justify-content:center; gap:8px; background:linear-gradient(110deg,${C.goldDim} 0%,${C.gold} 40%,${C.goldLight} 60%,${C.gold} 100%); background-size:200% 200%; background-position:0% 50%; transition:all .4s ease; position:relative; overflow:hidden; font-family:'Jost',sans-serif; text-transform:uppercase; }
    .pp-cart::before { content:''; position:absolute; top:-50%; left:-60%; width:30%; height:200%; background:rgba(255,255,255,.12); transform:skewX(-20deg); transition:left .6s ease; }
    .pp-cart:hover::before { left:120%; }
    .pp-cart:hover { background-position:100% 50%; box-shadow:0 8px 32px ${C.gold}35; transform:translateY(-1px); }
    .pp-cart:disabled { background:${C.bgCard}; color:${C.goldFaint}; border:1px solid ${C.border}; box-shadow:none; transform:none; cursor:not-allowed; }
    .pp-policy { display:flex; align-items:center; gap:14px; padding:10px 0; border-bottom:1px solid ${C.border}; font-size:12px; color:#9A8060; letter-spacing:.02em; }
    .pp-policy:last-child { border-bottom:none; }
    .pp-policy-icon { width:28px; height:28px; border-radius:7px; background:${C.bgCard}; border:1px solid ${C.border}; display:flex; align-items:center; justify-content:center; flex-shrink:0; }
    .pp-slabel { font-size:10px; font-weight:700; letter-spacing:.22em; text-transform:uppercase; color:#9A8060; }
    .pp-bar-track { flex:1; height:4px; background:${C.border}; border-radius:99px; overflow:hidden; }
    .pp-bar-fill { height:100%; background:linear-gradient(90deg,${C.goldDim},${C.gold}); border-radius:99px; transition:width .7s ease; }
    .pp-rsum { background:${C.bgCard}; border:1px solid ${C.border}; border-radius:14px; padding:26px; margin-bottom:24px; position:relative; overflow:hidden; }
    .pp-rsum::before { content:''; position:absolute; top:0; left:0; right:0; height:1px; background:linear-gradient(90deg,transparent,${C.gold}60,transparent); }
    .pp-submit-btn { margin-top:14px; background:linear-gradient(110deg,${C.goldDim},${C.gold}); color:${C.bgPage}; border-radius:8px; padding:12px 28px; font-size:10px; font-weight:800; letter-spacing:.2em; border:none; cursor:pointer; font-family:'Jost',sans-serif; transition:all .25s; text-transform:uppercase; }
    .pp-submit-btn:hover { box-shadow:0 4px 20px ${C.gold}40; transform:translateY(-1px); }
    .pp-rinput { width:100%; border:1px solid ${C.border}; border-radius:10px; padding:14px 16px; font-size:13px; color:${C.goldPale}; resize:vertical; font-family:'Jost',sans-serif; background:${C.bgInput}; outline:none; transition:border-color .25s, box-shadow .25s; line-height:1.7; }
    .pp-rinput:focus { border-color:${C.goldDim}; box-shadow:0 0 0 3px ${C.gold}18; }
    .pp-rinput::placeholder { color:${C.goldFaint}; }
    .pp-rev-card { background:${C.bgCard}; border:1px solid ${C.border}; border-radius:12px; padding:22px; margin-bottom:12px; transition:border-color .2s; }
    .pp-rev-card:hover { border-color:${C.borderBright}; }
    .pp-avatar { width:38px; height:38px; border-radius:50%; background:linear-gradient(135deg,${C.goldDim},${C.goldLight}); color:${C.bgPage}; display:flex; align-items:center; justify-content:center; font-weight:700; font-size:14px; flex-shrink:0; box-shadow:0 0 0 2px ${C.border}; }
    .desc-html { color:${C.goldMuted}; line-height:2; font-size:14px; letter-spacing:.02em; font-family:'Jost',sans-serif; }
    .desc-html strong, .desc-html b { color:${C.goldPale}; font-weight:600; }
    .desc-html p { margin-bottom:1rem; }
    .desc-html ul { list-style:none; padding:0; margin-bottom:1rem; }
    .desc-html ul li { padding-left:1.5rem; position:relative; margin-bottom:.5rem; }
    .desc-html ul li::before { content:'◆'; position:absolute; left:0; font-size:7px; top:6px; color:${C.goldDim}; }
    .desc-html h2, .desc-html h3 { color:${C.goldPale}; font-family:'Cormorant Garamond',serif; font-weight:400; margin-bottom:.75rem; margin-top:1.5rem; }
    .feat-card { transition:border-color .3s, background .3s; }
    .feat-card:hover { border-color:${C.borderBright} !important; background:${C.bgCardHover} !important; }
    .pp-gallery-col { display:flex; gap:12px; flex:0 0 auto; width:min(480px,100%); align-self:flex-start; }
    @media (min-width:768px) { .pp-gallery-col { position:sticky; top:88px; } }
    @keyframes fadeUp { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }
    .pp-fadein { animation:fadeUp .45s ease both; }
    .tab-content { animation:fadeUp .35s ease both; }
    @media (max-width:767px) {
      .pp-crumb { padding:10px 16px; font-size:9px; }
      .pp-crumb-name { display:none; }
      .pp-page-inner { padding:16px 16px 60px !important; }
      .pp-two-col { flex-direction:column !important; gap:0 !important; }
      .pp-gallery-col { width:100% !important; position:static !important; margin-bottom:20px; flex-direction:column !important; gap:10px !important; }
      .pp-thumb-col { order:2; width:100%; flex-direction:row; align-items:center; gap:6px; }
      .pp-thumb-scroll { flex-direction:row !important; overflow-x:auto !important; overflow-y:hidden !important; max-height:none !important; gap:8px; }
      .pp-thumb-item { width:70px !important; height:70px !important; flex-shrink:0; }
      .pp-arr { width:20px; height:40px; }
      .pp-arr svg { transform:rotate(-90deg); }
      .pp-info-panel { width:100% !important; min-width:0 !important; padding:0 !important; }
      .pp-size { padding:7px 10px !important; min-width:46px !important; }
      .pp-cart { padding:14px !important; }
      .pp-rsum { padding:16px !important; }
    }
    @media (min-width:768px) and (max-width:1024px) {
      .pp-gallery-col { width:min(380px,48%) !important; }
      .pp-page-inner { padding:24px 24px 80px !important; }
    }
    .pp *::-webkit-scrollbar { width:3px; height:3px; }
    .pp *::-webkit-scrollbar-thumb { background:${C.border}; border-radius:99px; }
  `;

  return (
    <>
      <style>{css}</style>

      {/* ✅ KEY FIX: CartDrawer rendered via Portal directly into document.body
          This ensures it sits at the top of the DOM stacking context,
          completely outside any overflow:hidden or transform parents,
          so it always renders as a proper fixed overlay on the right side. */}
      {createPortal(
        <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={closeCartDrawer} />,
        document.body
      )}

      <div className="pp">

        {/* Breadcrumb */}
        <div className="pp-crumb">
          <span>{productData.category?.toUpperCase()}&nbsp;/</span>
          <div className="pp-crumb-dot" />
          <span>{productData.subCategory?.toUpperCase() || 'PRODUCT'}&nbsp;-</span>
          <div className="pp-crumb-dot" />
          <span className="pp-crumb-name">{productData.name?.substring(0, 55)}{productData.name?.length > 55 ? '…' : ''}</span>
        </div>

        <div className="pp-page-inner" style={{ padding: '28px 36px 80px', maxWidth: 1440, margin: '0 auto' }}>
          <div className="pp-two-col" style={{ display: 'flex', gap: 32, alignItems: 'flex-start', flexWrap: 'wrap' }}>

            {/* ── Gallery ── */}
            <div className="pp-gallery-col">
              <div className="pp-thumb-col">
                <button className="pp-arr" onClick={() => scrollThumbs(-1)}><FaChevronUp size={9} /></button>
                <div className="pp-thumb-scroll" ref={thumbListRef}>
                  {productData.image.map((item, index) => (
                    <div key={index} className={`pp-thumb-item${index === selectedIndex ? ' active' : ''}`}
                      onClick={() => { setImage(item); setSelectedIndex(index); }}
                      onMouseEnter={() => setHoveredThumb(index)} onMouseLeave={() => setHoveredThumb(null)}>
                      <img src={item} alt={`View ${index + 1}`} />
                    </div>
                  ))}
                </div>
                <button className="pp-arr" onClick={() => scrollThumbs(1)}><FaChevronDown size={9} /></button>
              </div>
              <div className={`pp-main-wrap${isZooming ? ' zooming' : ''} contain p-4`}
                style={{ aspectRatio: '1/1', flex: 1, '--zx': `${zoomPos.x}%`, '--zy': `${zoomPos.y}%` }}
                ref={mainImgRef} onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsZooming(true)} onMouseLeave={() => setIsZooming(false)}>
                <img src={image} alt={productData.name} />
                <div className="pp-corner pp-corner-tl" /><div className="pp-corner pp-corner-tr" />
                <div className="pp-corner pp-corner-bl" /><div className="pp-corner pp-corner-br" />
                <button className={`pp-img-wish${isWishlisted ? ' active' : ''}`}
                  onClick={() => toggleWishlistItem(productId)}>
                  {isWishlisted ? <FaHeart size={14} style={{ color: C.gold }} /> : <FaRegHeart size={14} style={{ color: C.goldMuted }} />}
                </button>
                <div className="pp-counter">
                  <span style={{ color: C.gold, fontWeight: 700 }}>{String(selectedIndex + 1).padStart(2, '0')}</span>
                  <div className="pp-counter-dot" />
                  <span>{String(productData.image.length).padStart(2, '0')}</span>
                </div>
              </div>
            </div>

            {/* ── Info Panel ── */}
            <div className="pp-info-panel pp-fadein" style={{ flex: '1 1 300px', minWidth: 0, paddingRight: 8 }}>
              <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: '.28em', color: C.goldDim, marginBottom: 10, textTransform: 'uppercase' }}>
                {productData.category}&nbsp;/&nbsp;{productData.subCategory}
              </p>
              <div style={{ display: 'flex', gap: 7, flexWrap: 'wrap', marginBottom: 12 }}>
                <span className="pp-badge-gold"><FaCrown size={8} />&nbsp;Premium Collection</span>
                {productData.discountPrice > 0 && <span className="pp-badge-sale">{productData.discountPrice}% Off</span>}
              </div>
              <h1 className="pp-serif lg:w-[90%]" style={{ fontSize: 'clamp(15px,1.5vw,20px)', fontWeight: 400, color: C.goldPale, lineHeight: 1.4, marginBottom: 8 }}>
                {productData.name}
              </h1>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ display: 'flex', gap: 2 }}>
                  {[...Array(5)].map((_, i) => <span key={i} style={{ color: i < roundedRating ? C.gold : C.goldFaint, fontSize: 13 }}>{i < roundedRating ? <FaStar /> : <FaRegStar />}</span>)}
                </div>
                <span style={{ fontSize: 11, color: '#7A6A52' }}>{avgRating > 0 ? avgRating.toFixed(1) : '—'}&ensp;·&ensp;{reviews.length} reviews</span>
              </div>
              <div className="pp-divider" style={{ margin: '14px 0' }}>
                <div className="pp-divider-line" /><div className="pp-divider-diamond" /><div className="pp-divider-line" />
              </div>
              <div className="pp-pricebox">
                {discountedPrice ? (
                  <div style={{ display: 'flex', alignItems: 'flex-end', gap: 12, flexWrap: 'wrap' }}>
                    <span className="pp-serif" style={{ fontSize: 36, fontWeight: 500, color: C.gold, lineHeight: 1 }}>{currency}{discountedPrice.toFixed(2)}</span>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 4, paddingBottom: 3 }}>
                      <span style={{ fontSize: 15, color: C.goldFaint, textDecoration: 'line-through' }}>{currency}{displayPrice.toFixed(2)}</span>
                      <span style={{ background: 'linear-gradient(110deg,#5A2800,#A04800)', color: '#FFD48A', borderRadius: 4, padding: '2px 8px', fontSize: 9, fontWeight: 800, letterSpacing: '.16em', textTransform: 'uppercase' }}>Save {currency}{(displayPrice - discountedPrice).toFixed(2)}</span>
                    </div>
                  </div>
                ) : (
                  <div style={{ display: 'flex', alignItems: 'flex-end', gap: 10 }}>
                    <span className="pp-serif" style={{ fontSize: 36, fontWeight: 500, color: C.gold, lineHeight: 1 }}>{currency}{displayPrice.toFixed(2)}</span>
                    {customBreakdown && <span style={{ fontSize: 11, color: C.goldFaint, paddingBottom: 4 }}>{customBreakdown}</span>}
                  </div>
                )}
                <p style={{ fontSize: 11, color: '#7A6A52', marginTop: 8 }}>All taxes included&ensp;·&ensp;Free shipping above {currency}1000</p>
              </div>
              <p className="lg:w-[90%]" style={{ color: '#9A8468', lineHeight: 1.8, fontSize: 13, letterSpacing: '.02em' }}>{productData.description}</p>
              <div className="pp-divider" style={{ margin: '16px 0' }}>
                <div className="pp-divider-line" /><div className="pp-divider-diamond" /><div className="pp-divider-line" />
              </div>

              {/* Colour */}
              <div style={{ marginBottom: 16 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                  <span className="pp-slabel">Colour</span>
                  <span style={{ fontSize: 11, color: C.goldPale, fontWeight: 500, textTransform: 'capitalize' }}>— {selectedColor}</span>
                </div>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {productData.color?.map((colorObj, index) => {
                    let colorName, colorHex;
                    if (typeof colorObj === 'string') { colorName = colorObj; colorHex = colorMap[colorObj.toLowerCase()] || '#888'; }
                    else if (colorObj?.name) { colorName = colorObj.name; colorHex = colorObj.hex || '#888'; }
                    else { colorName = 'Unknown'; colorHex = '#888'; }
                    return <button key={index} className={`pp-clr${selectedColor === colorName ? ' active' : ''}`}
                      onClick={() => setSelectedColor(colorName)}
                      style={{ background: colorHex, outline: colorHex === '#FFFFFF' ? `1px solid ${C.border}` : 'none' }}
                      title={colorName} />;
                  })}
                </div>
              </div>

              {/* Size */}
              <div style={{ marginBottom: 16 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                  <span className="pp-slabel">Select Size</span>
                  <button onClick={() => setShowModal(true)} style={{ fontSize: 10, color: C.gold, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'Jost,sans-serif', display: 'flex', alignItems: 'center', gap: 5 }}>
                    <FaRuler size={10} /> Size Guide
                  </button>
                  {showModal && <Modal onclose={() => setShowModal(false)} />}
                </div>
                <div style={{ display: 'flex', gap: 7, flexWrap: 'wrap' }}>
                  {productData.sizes?.length > 0 ? productData.sizes.map((sizeObj, index) => {
                    const sizeLabel = typeof sizeObj === 'object' ? (sizeObj?.size ?? `Size ${index + 1}`) : String(sizeObj);
                    const multiplier = sizeObj?.priceMultiplier || 1;
                    return (
                      <button key={index} type="button" className={`pp-size${size === sizeLabel ? ' active' : ''}`} onClick={() => handleSizeSelect(sizeObj)}>
                        <span className="pp-size-lbl">{sizeLabel}</span>
                        <span className="pp-size-price">{currency}{(productData.price * multiplier).toFixed(2)}</span>
                      </button>
                    );
                  }) : <p style={{ fontSize: 13, color: C.goldMuted }}>No sizes available</p>}
                </div>
                {size && sizeStock > 0 && sizeStock < 5 && (
                  <div style={{ marginTop: 10, display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(249,115,22,0.1)', border: '1px solid rgba(249,115,22,0.25)', borderRadius: 6, padding: '5px 10px' }}>
                    <span style={{ fontSize: 10 }}>🔥</span>
                    <span style={{ fontSize: 11, color: '#F97316', fontWeight: 600 }}>Only {sizeStock} left in this size</span>
                  </div>
                )}
              </div>

              {/* Made to Measure */}
              <div style={{ marginBottom: 8 }}>
                <button className={`pp-mtm${makeMeasure ? ' active' : ''}`} onClick={() => setMakeMeasure(!makeMeasure)}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <HiSparkles size={13} style={{ color: C.gold }} /><span>Made to Measure</span>
                  </div>
                  <FaChevronDown size={10} style={{ transform: makeMeasure ? 'rotate(180deg)' : 'none', transition: 'transform .2s', color: C.goldDim }} />
                </button>
                {makeMeasure && (
                  <div style={{ marginTop: 6, padding: '12px 16px', borderRadius: 8, background: C.bgCard, border: `1px solid ${C.border}`, display: 'flex', alignItems: 'center', gap: 10 }}>
                    <FaInfoCircle style={{ color: C.gold, flexShrink: 0 }} size={12} />
                    <p style={{ fontSize: 12, color: C.goldMuted, lineHeight: 1.6 }}>Custom measurements can be added on the Cart page.</p>
                  </div>
                )}
              </div>

              {/* CTA — ✅ onClick only calls handleAddToCart (which internally opens drawer) */}
              <div style={{ marginTop: 14, display: 'flex', flexDirection: 'column', gap: 8 }}>
                <button
                  className="pp-cart"
                  onClick={handleAddToCart}
                  disabled={isButtonDisabled || !size || !selectedColor}
                >
                  <BsBagCheck size={16} />
                  {isButtonDisabled ? 'Adding to Cart…' : 'Add to Cart'}
                </button>
              </div>

              {/* ✅ NO CartDrawer here anymore — it's in the Portal above */}
              <JacketLiningSelector basePrice={productData.price} onPriceChange={p => setDisplayPrice(p)} />

              {/* Policies */}
              <div style={{ paddingTop: 8 }} />
              {[
                { icon: <BsShieldCheck size={14} style={{ color: C.gold }} />, text: '100% original, premium materials' },
                { icon: <MdLocalShipping size={14} style={{ color: C.gold }} />, text: 'Secure cash on delivery + multiple payment methods' },
                { icon: <MdLoop size={14} style={{ color: C.gold }} />, text: 'Simple 7-day return or exchange policy' },
              ].map((p, i) => (
                <div key={i} className="pp-policy">
                  <div className="pp-policy-icon">{p.icon}</div>
                  <span>{p.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* TABS SECTION */}
          <div className="mt-20">
            <div className="flex items-end overflow-x-auto" style={{ borderBottom: `1px solid ${C.border}`, marginBottom: 40 }}>
              {['description', 'reviews'].map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  style={{
                    position: 'relative', padding: '14px 32px', fontFamily: 'Jost, sans-serif',
                    fontSize: 10, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase',
                    background: 'none', border: 'none',
                    borderBottom: activeTab === tab ? `2px solid ${C.gold}` : '2px solid transparent',
                    marginBottom: -1, cursor: 'pointer',
                    color: activeTab === tab ? C.gold : C.goldFaint,
                    transition: 'color .25s, border-color .25s', whiteSpace: 'nowrap',
                  }}
                >
                  {tab === 'reviews' ? `Reviews (${reviews.length})` : 'Description'}
                  {activeTab === tab && (
                    <span style={{ position: 'absolute', bottom: -3, left: '50%', width: 4, height: 4, borderRadius: '50%', background: C.gold, transform: 'translateX(-50%)', display: 'block' }} />
                  )}
                </button>
              ))}
            </div>

            {activeTab === 'description' && (
              <div className="tab-content" style={{ maxWidth: 900 }}>
                <div className="flex items-center gap-5 mb-10">
                  <div style={{ flex: 1, height: 1, background: `linear-gradient(90deg, transparent, ${C.goldDim})` }} />
                  <div className="flex items-center gap-3">
                    <div style={{ width: 5, height: 5, background: C.goldDim, transform: 'rotate(45deg)' }} />
                    <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.35em', textTransform: 'uppercase', color: C.goldDim, fontFamily: 'Jost, sans-serif' }}>Product Details</span>
                    <div style={{ width: 5, height: 5, background: C.goldDim, transform: 'rotate(45deg)' }} />
                  </div>
                  <div style={{ flex: 1, height: 1, background: `linear-gradient(90deg, ${C.goldDim}, transparent)` }} />
                </div>
                <div className="relative rounded-2xl p-8 mb-8 overflow-hidden" style={{ background: C.bgCard, border: `1px solid ${C.border}` }}>
                  <div className="absolute top-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${C.gold}55, transparent)` }} />
                  <div className="absolute top-4 left-4 w-5 h-5" style={{ borderTop: `1px solid ${C.goldDim}`, borderLeft: `1px solid ${C.goldDim}` }} />
                  <div className="absolute top-4 right-4 w-5 h-5" style={{ borderTop: `1px solid ${C.goldDim}`, borderRight: `1px solid ${C.goldDim}` }} />
                  <div className="absolute bottom-4 left-4 w-5 h-5" style={{ borderBottom: `1px solid ${C.goldDim}`, borderLeft: `1px solid ${C.goldDim}` }} />
                  <div className="absolute bottom-4 right-4 w-5 h-5" style={{ borderBottom: `1px solid ${C.goldDim}`, borderRight: `1px solid ${C.goldDim}` }} />
                  <div className="desc-html" dangerouslySetInnerHTML={{ __html: productData.detailedDescription }} />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  {[
                    { symbol: '✦', label: 'Premium Craft', desc: 'Handcrafted by artisans using heritage leatherworking techniques passed through generations.' },
                    { symbol: '◈', label: 'Finest Materials', desc: "Sourced exclusively from the world's most prestigious and ethically certified tanneries." },
                    { symbol: '❋', label: 'Bespoke Finish', desc: 'Each piece hand-finished to exacting luxury standards with precision hand stitching.' },
                  ].map((feat, i) => (
                    <div key={i} className="feat-card relative rounded-xl p-6" style={{ background: C.bgCard, border: `1px solid ${C.border}` }}>
                      <div className="absolute top-0 left-6 right-6 h-px" style={{ background: `linear-gradient(90deg, transparent, ${C.goldFaint}, transparent)` }} />
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ background: C.bgCardHover, border: `1px solid ${C.borderBright}`, color: C.gold, fontSize: 15 }}>{feat.symbol}</div>
                      <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: C.goldPale, fontFamily: 'Jost, sans-serif', marginBottom: 8 }}>{feat.label}</p>
                      <p style={{ fontSize: 12, lineHeight: 1.75, color: C.goldFaint, fontFamily: 'Jost, sans-serif' }}>{feat.desc}</p>
                    </div>
                  ))}
                </div>
                <div className="rounded-xl px-6 py-5 flex flex-wrap items-center gap-x-6 gap-y-3" style={{ background: C.bgInput, border: `1px solid ${C.border}` }}>
                  <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.28em', textTransform: 'uppercase', color: C.goldDim, fontFamily: 'Jost, sans-serif', flexShrink: 0 }}>Care Guide</span>
                  <div style={{ width: 1, height: 16, background: C.border, flexShrink: 0 }} />
                  {[{ symbol: '🌿', label: 'Dry Clean Only' }, { symbol: '💧', label: 'Avoid Moisture' }, { symbol: '☀️', label: 'No Direct Sunlight' }, { symbol: '🗄️', label: 'Store in Dust Bag' }].map((care, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span style={{ fontSize: 14 }}>{care.symbol}</span>
                      <span style={{ fontSize: 11, color: C.goldMuted, fontFamily: 'Jost, sans-serif' }}>{care.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="tab-content" style={{ maxWidth: 700 }}>
                {reviews.length > 0 && (
                  <div className="pp-rsum" style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
                    <div style={{ textAlign: 'center', flexShrink: 0 }}>
                      <div className="pp-serif" style={{ fontSize: 64, fontWeight: 300, color: C.gold, lineHeight: 1 }}>{avgRating.toFixed(1)}</div>
                      <div style={{ display: 'flex', justifyContent: 'center', gap: 3, margin: '6px 0' }}>
                        {[...Array(5)].map((_, i) => <span key={i} style={{ color: i < roundedRating ? C.gold : C.goldFaint, fontSize: 12 }}>{i < roundedRating ? <FaStar /> : <FaRegStar />}</span>)}
                      </div>
                      <p style={{ fontSize: 10, color: C.goldFaint, letterSpacing: '.1em' }}>{reviews.length} Reviews</p>
                    </div>
                    <div style={{ flex: 1 }}>
                      {[5, 4, 3, 2, 1].map(star => {
                        const count = reviews.filter(r => Math.round(r.rating) === star).length;
                        const pct = reviews.length ? (count / reviews.length) * 100 : 0;
                        return (
                          <div key={star} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                            <span style={{ fontSize: 10, color: C.goldFaint, width: 8, textAlign: 'right' }}>{star}</span>
                            <FaStar size={8} style={{ color: C.gold, flexShrink: 0 }} />
                            <div className="pp-bar-track"><div className="pp-bar-fill" style={{ width: `${pct}%` }} /></div>
                            <span style={{ fontSize: 10, color: C.goldFaint, width: 18, textAlign: 'right' }}>{count}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
                {token ? (
                  <div style={{ marginBottom: 24, padding: 28, borderRadius: 14, border: `1px solid ${C.border}`, background: C.bgCard, position: 'relative', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: `linear-gradient(90deg,transparent,${C.goldDim},transparent)` }} />
                    <h3 className="pp-serif" style={{ fontSize: 26, fontWeight: 400, color: C.goldPale, marginBottom: 18 }}>Write a Review</h3>
                    <div style={{ display: 'flex', gap: 6, marginBottom: 18 }}>
                      {[1, 2, 3, 4, 5].map(s => (
                        <span key={s} onClick={() => setRating(s)}
                          style={{ fontSize: 28, cursor: 'pointer', color: s <= rating ? C.gold : C.goldFaint, transition: 'transform .15s', display: 'inline-block' }}
                          onMouseOver={e => e.currentTarget.style.transform = 'scale(1.25)'}
                          onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}>
                          {s <= rating ? <FaStar /> : <FaRegStar />}
                        </span>
                      ))}
                    </div>
                    <textarea className="pp-rinput" placeholder="Share your experience with this product…" value={comment} onChange={e => setComment(e.target.value)} rows={4} />
                    <button className="pp-submit-btn" onClick={handleReviewSubmit}>Submit Review</button>
                  </div>
                ) : (
                  <div style={{ padding: 20, borderRadius: 12, background: C.bgCard, border: `1px dashed ${C.border}`, textAlign: 'center', marginBottom: 20, color: C.goldMuted, fontSize: 13 }}>
                    Please&nbsp;<span style={{ color: C.gold, fontWeight: 600, cursor: 'pointer', textDecoration: 'underline', textUnderlineOffset: 3 }}>sign in</span>&nbsp;to write a review.
                  </div>
                )}
                {reviews.length === 0 ? (
                  <div style={{ textAlign: 'center', padding: '40px 0' }}>
                    <div className="pp-serif" style={{ fontSize: 20, color: C.goldFaint, marginBottom: 8 }}>No reviews yet</div>
                    <p style={{ fontSize: 12, color: C.goldFaint, letterSpacing: '.06em' }}>Be the first to share your experience</p>
                  </div>
                ) : reviews.map(rev => (
                  <div key={rev._id} className="pp-rev-card">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                        <div className="pp-avatar">{(rev.user?.name || 'U')[0].toUpperCase()}</div>
                        <div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                            <span style={{ fontWeight: 600, fontSize: 13, color: C.goldPale }}>{rev.user?.name || 'Customer'}</span>
                            <MdVerified size={12} style={{ color: '#4ADE80' }} />
                          </div>
                          <div style={{ display: 'flex', gap: 2, marginTop: 4 }}>
                            {[...Array(5)].map((_, i) => <span key={i} style={{ color: i < rev.rating ? C.gold : C.goldFaint, fontSize: 10 }}>{i < rev.rating ? <FaStar /> : <FaRegStar />}</span>)}
                          </div>
                        </div>
                      </div>
                      <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
                        <span style={{ fontSize: 10, color: C.goldFaint }}>{new Date(rev.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                        {rev.user?._id === userId && (
                          <button onClick={async () => { const ok = await deleteReview(rev._id); if (ok) loadReviews(); }}
                            style={{ fontSize: 10, color: '#F87171', fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer', letterSpacing: '.06em', textTransform: 'uppercase' }}>
                            Delete
                          </button>
                        )}
                      </div>
                    </div>
                    <p style={{ fontSize: 13, color: C.goldMuted, lineHeight: 1.8, marginTop: 14 }}>{rev.comment}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Related Products */}
          <div style={{ marginTop: 100 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 24, marginBottom: 40 }}>
              <div style={{ flex: 1, height: 1, background: `linear-gradient(90deg,transparent,${C.border})` }} />
              <div style={{ flex: 1, height: 1, background: `linear-gradient(90deg,${C.border},transparent)` }} />
            </div>
            <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;