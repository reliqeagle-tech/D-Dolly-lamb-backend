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
import axios from 'axios';
import { slugifyPart } from '../utils/slugify';
import { Helmet } from 'react-helmet-async'


/*
  ═══════════════════════════════════════════════
  LIGHT MODE — Product.jsx
  ═══════════════════════════════════════════════
  OLD dark:
    bgPage: #080604  near-black
    bgCard: #110D06  very dark brown
    gold:   #C9961A / #E0AE3A  amber
    text:   #F0E2C4  warm ivory

  NEW light mode (indigo + champagne system):
    bgPage:      #F4F5FF   soft lavender white
    bgCard:      #FFFFFF   pure white
    bgCardHover: #F8F7FF   hover lavender
    bgInput:     #FAFAFF   near-white lavender
    accent:      #6366F1   indigo primary
    accentMid:   #818CF8   light indigo
    accentDk:    #4338CA   deep indigo
    gold:        #D4A853   champagne (badges, stars, CTA btn)
    goldMid:     #B8923E   mid champagne
    textNav:     #1E1B4B   deep navy
    textBody:    #4B5563   dark grey
    textMuted:   #6B7280   mid grey
    textDim:     #9CA3AF   light grey
    border:      rgba(99,102,241,0.1)
    borderBright:rgba(99,102,241,0.25)
  ═══════════════════════════════════════════════
*/

const C = {
  bgPage: '#F4F5FF',
  bgCard: '#FFFFFF',
  bgCardHover: '#F8F7FF',
  bgInput: '#FAFAFF',
  accent: '#6366F1',
  accentMid: '#818CF8',
  accentDk: '#4338CA',
  gold: '#D4A853',
  goldMid: '#B8923E',
  textNav: '#1E1B4B',
  textBody: '#4B5563',
  textMuted: '#6B7280',
  textDim: '#9CA3AF',
  border: 'rgba(99,102,241,0.1)',
  borderMd: 'rgba(99,102,241,0.18)',
  borderBright: 'rgba(99,102,241,0.3)',
};

const colorMap = {
  wine: '#722F37', red: '#FF0000', black: '#000000', olive: '#808000',
  green: '#008000', cognac: '#D2691E', white: '#FFFFFF', yellow: '#FFFF00',
  gray: '#808080', rose: '#FF007F', tobacco: '#A0522D', navy: '#000080',
  beige: '#F5F5DC', blue: '#0000FF', brown: '#8B4513',
  'antique brown': '#8A5A44', 'dark gray': '#404040', 'dark-gray': '#404040',
  'dark-wine': '#453333', 'tobacco-dark': '#6e351a',
};

const Product = () => {
  const { productId, category, subCategory, productName, sku } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const { wishlist, toggleWishlistItem, backendUrl } = useContext(ShopContext);
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

  // const isWishlisted = Array.isArray(wishlist)
  //   ? wishlist.some(item => item.productId === productId) : false;
  // ✅ FIX - productData._id use karo (but productData null check bhi chahiye)
  const isWishlisted = Array.isArray(wishlist) && productData
    ? wishlist.some(item => item.productId === productData._id) : false;

  // const fetchProductData = async () => {
  //   const item = await getSingleProduct(productId);
  //   if (item) {
  //     setProductData(item);
  //     setImage(item.image[0]);
  //     setSelectedIndex(0);
  //     setDisplayPrice(item.price);
  //     setSizeMultiplier(1);
  //   }
  // };


  useEffect(() => {
    const fetchProduct = async () => {
      // Slug-based route
      // if (sku) {
      //   const res = await axios.get(
      //     `${backendUrl}/api/product/${category}/${subCategory}/${name}/${sku}`
      //   );
      //   setProductData(res.data.product);
      // }
      if (sku) {
        const res = await axios.get(
          `${backendUrl}/api/product/sku/${sku}`
        );

        if (res.data.success) {
          setProductData(res.data.product);
          setImage(res.data.product.image?.[0] || "");
        }
      }
      // Old ID-based route (backward compatible)
      else if (productId) {
        const res = await axios.post(
          `${backendUrl}/api/product/single`,
          { productId }
        );
        setProductData(res.data.product);
      }
    };
    fetchProduct();
  }, [sku]);


  // const loadReviews = async () => {
  //   const data = await getProductReviews(productId);
  //   setReviews(data);
  // };

  const loadReviews = async () => {
    if (!productData?._id) return;
    const data = await getProductReviews(productData._id);
    setReviews(data);
  };
  useEffect(() => {
    if (productData?._id) loadReviews();
  }, [productData?._id]);

  useEffect(() => {
    if (productData?.image?.length) {
      setImage(productData.image[0]);
    }
  }, [productData]);

  const openCartDrawer = () => setDrawerOpen(true);
  const closeCartDrawer = () => setDrawerOpen(false);

  const handleSizeSelect = (sizeObj) => {
    if (!sizeObj) return;
    if (typeof sizeObj === 'string') {
      setSize(sizeObj); setSizeMultiplier(1); setSizeStock(0);
      setDisplayPrice(productData.price);
    } else if (typeof sizeObj === 'object' && sizeObj.size) {
      setSize(sizeObj.size);
      setSizeMultiplier(sizeObj.priceMultiplier || 1);
      setSizeStock(sizeObj.stock || 0);
      if (sizeObj.useCustomPrice && sizeObj.customPrice > 0) {
        setDisplayPrice(sizeObj.customPrice);
      } else {
        setDisplayPrice(productData.price * (sizeObj.priceMultiplier || 1));
      }
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

  // useEffect(() => { fetchProductData(); }, [productId, products]);
  // useEffect(() => {
  //   if (productData?.color?.length) {
  //     const firstColor = productData.color[0];
  //     setSelectedColor(typeof firstColor === 'string' ? firstColor : firstColor?.name || 'Unknown');
  //   }
  // }, [productData]);
  useEffect(() => {
    if (productData?.color?.length > 0) {
      const firstColor = productData.color[0];

      setSelectedColor(
        typeof firstColor === 'string'
          ? firstColor
          : firstColor?.name || ''
      );
    } else {
      setSelectedColor('');
    }
  }, [productData]);
  useEffect(() => { if (productData) setDisplayPrice(productData.price); }, [productData]);
  // useEffect(() => { if (productId) loadReviews(); }, [productId]);
  useEffect(() => {
    if (!productData?.price) return;
    const selectedSizeObj = productData.sizes?.find(s => s.size === size);
    if (selectedSizeObj?.useCustomPrice && selectedSizeObj?.customPrice > 0) {
      setDisplayPrice(selectedSizeObj.customPrice);
    } else {
      setDisplayPrice(productData.price * (sizeMultiplier || 1));
    }
  }, [sizeMultiplier, productData?.price, size]);

  const handleAddToCart = () => {
    if (!size || !selectedColor) { toast.error('Please select a size and color.'); return; }
    const customPrice = displayPrice - productData.price;
    addToCart(productData._id, size, selectedColor, customPrice);
    setIsButtonDisabled(true);
    openCartDrawer();
    setTimeout(() => { toast.success('Added to cart!'); setIsButtonDisabled(false); }, 2000);
  };

  const handleReviewSubmit = async () => {
    if (!token) return toast.error('Please login first');
    if (!rating || !comment.trim()) return toast.error('Please add rating and comment');
    // const success = await submitReview(productId, rating, comment);
    const success = await submitReview(productData._id, rating, comment);
    if (success) { setComment(''); setRating(5); loadReviews(); }
  };

  /* ── Loading State ── */
  if (!productData) return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', background: C.bgPage, flexDirection: 'column', gap: 20 }}>
      <div style={{ width: 48, height: 48, position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, borderRadius: '50%', border: `2px solid ${C.border}` }} />
        <div style={{ position: 'absolute', inset: 0, borderRadius: '50%', border: `2px solid transparent`, borderTopColor: C.accent, animation: 'spin 1s linear infinite' }} />
      </div>
      <span style={{ fontFamily: "'Montserrat',sans-serif", fontSize: 11, letterSpacing: '.22em', color: C.textDim, textTransform: 'uppercase', fontWeight: 600 }}>Loading</span>
      <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
    </div>
  );

  const productUrl = `https://ddollylamb.com/product/${category}/${subCategory}/${productName}/${sku}`;

  const avgRating = reviews.length > 0 ? reviews.reduce((s, r) => s + r.rating, 0) / reviews.length : 0;
  const roundedRating = Math.round(avgRating);
  const discountedPrice = productData.discountPrice > 0
    ? displayPrice - (displayPrice * productData.discountPrice / 100) : null;
  const customBreakdown = displayPrice > productData.price
    ? `+${currency}${(displayPrice - productData.price).toFixed(2)} customization` : '';

  const css = `
    *, *::before, *::after { box-sizing:border-box; margin:0; padding:0; }

    .pp { font-family:'Montserrat',sans-serif; background:${C.bgPage}; min-height:100vh; color:${C.textBody}; }
    .pp-serif { font-family:'Montserrat',sans-serif; }

    /* Breadcrumb */
    .pp-crumb {
      padding:11px 36px; font-size:10px; font-weight:600;
      letter-spacing:.25em; text-transform:uppercase; color:${C.textDim};
      border-bottom:1px solid ${C.border}; display:flex; align-items:center; gap:5px;
      background:${C.bgCard};
      box-shadow: 0 1px 6px rgba(99,102,241,0.05);
    }
    .pp-crumb-dot { width:3px; height:3px; border-radius:50%; background:${C.textDim}; flex-shrink:0; }
    .pp-crumb-name { color:${C.textBody}; font-weight:400; letter-spacing:.06em; text-transform:none; font-size:12px; }

    /* Thumbnails */
    .pp-thumb-col { display:flex; flex-direction:column; align-items:center; width:64px; flex-shrink:0; gap:6px; }
    .pp-thumb-scroll { display:flex; flex-direction:column; gap:6px; overflow-y:scroll; max-height:380px; scrollbar-width:none; -ms-overflow-style:none; width:100%; }
    .pp-thumb-scroll::-webkit-scrollbar { display:none; }
    .pp-arr { width:100%; height:24px; background:transparent; border:1px solid ${C.border}; border-radius:5px; display:flex; align-items:center; justify-content:center; cursor:pointer; color:${C.textDim}; transition:all .2s; flex-shrink:0; }
    .pp-arr:hover { border-color:${C.accent}; color:${C.accent}; background:rgba(99,102,241,0.05); }
    .pp-thumb-item { width:100%; aspect-ratio:1/1; border-radius:8px; overflow:hidden; cursor:pointer; border:1.5px solid ${C.border}; background:${C.bgCard}; flex-shrink:0; transition:all .3s; opacity:0.7; }
    .pp-thumb-item:hover { opacity:0.9; border-color:${C.accentMid}; }
    .pp-thumb-item.active { opacity:1; border-color:${C.accent}; box-shadow:0 0 0 2px rgba(99,102,241,0.15); }
    .pp-thumb-item img { width:100%; height:100%; object-fit:cover; display:block; }

    /* Main image */
    .pp-main-wrap { flex:1; position:relative; border-radius:14px; overflow:hidden; background:#FFFFFF; border:1.5px solid ${C.border}; cursor:crosshair; box-shadow:0 4px 24px rgba(99,102,241,0.08); }
    .pp-main-wrap img { width:100%; height:100%; object-fit:contain; display:block; transition:transform .1s ease; }
    .pp-main-wrap.zooming img { transform:scale(2.2); transform-origin:var(--zx,50%) var(--zy,50%); }

    /* Corner accents — indigo */
    .pp-corner { position:absolute; width:20px; height:20px; pointer-events:none; }
    .pp-corner-tl { top:12px; left:12px; border-top:1.5px solid ${C.accentMid}; border-left:1.5px solid ${C.accentMid}; opacity:0.5; }
    .pp-corner-tr { top:12px; right:12px; border-top:1.5px solid ${C.accentMid}; border-right:1.5px solid ${C.accentMid}; opacity:0.5; }
    .pp-corner-bl { bottom:12px; left:12px; border-bottom:1.5px solid ${C.accentMid}; border-left:1.5px solid ${C.accentMid}; opacity:0.5; }
    .pp-corner-br { bottom:12px; right:12px; border-bottom:1.5px solid ${C.accentMid}; border-right:1.5px solid ${C.accentMid}; opacity:0.5; }

    /* Wishlist btn */
    .pp-img-wish { position:absolute; top:12px; right:12px; width:36px; height:36px; border-radius:50%; background:rgba(255,255,255,0.92); border:1.5px solid ${C.border}; display:flex; align-items:center; justify-content:center; cursor:pointer; transition:all .25s; z-index:10; box-shadow:0 2px 8px rgba(99,102,241,0.1); }
    .pp-img-wish:hover { border-color:${C.accent}; background:rgba(99,102,241,0.08); }
    .pp-img-wish.active { border-color:${C.accent}; background:rgba(99,102,241,0.1); }

    /* Counter pill */
    .pp-counter { position:absolute; bottom:12px; left:50%; transform:translateX(-50%); background:rgba(255,255,255,0.9); border:1px solid ${C.border}; border-radius:99px; padding:5px 16px; font-size:10px; font-weight:700; color:${C.textMuted}; backdrop-filter:blur(8px); letter-spacing:.14em; display:flex; align-items:center; gap:8px; box-shadow:0 2px 8px rgba(99,102,241,0.08); }
    .pp-counter-dot { width:4px; height:4px; border-radius:50%; background:${C.accentMid}; }

    /* Badges */
    .pp-badge-indigo { background:linear-gradient(135deg,${C.accentDk},${C.accent}); color:#fff; border-radius:20px; padding:4px 14px; font-size:9px; font-weight:700; letter-spacing:.2em; display:inline-flex; align-items:center; gap:5px; text-transform:uppercase; box-shadow:0 2px 8px rgba(99,102,241,0.25); }
    .pp-badge-sale { background:linear-gradient(135deg,#059669,#10B981); color:#fff; border-radius:20px; padding:4px 14px; font-size:9px; font-weight:700; letter-spacing:.18em; text-transform:uppercase; box-shadow:0 2px 8px rgba(16,185,129,0.28); }

    /* Divider */
    .pp-divider { display:flex; align-items:center; gap:12px; margin:18px 0; }
    .pp-divider-line { flex:1; height:1px; background:${C.border}; }
    .pp-divider-diamond { width:5px; height:5px; background:${C.accentMid}; transform:rotate(45deg); flex-shrink:0; opacity:0.6; }

    /* Price box */
    .pp-pricebox { padding:14px 0; margin-bottom:14px; border-bottom:1px solid ${C.border}; }

    /* Color swatches */
    .pp-clr { border-radius:50%; cursor:pointer; transition:all .25s; border:2px solid transparent; flex-shrink:0; width:24px; height:24px; position:relative; }
    .pp-clr::after { content:''; position:absolute; inset:-4px; border-radius:50%; border:2px solid transparent; transition:border-color .25s; }
    .pp-clr:hover { transform:scale(1.1); }
    .pp-clr.active::after { border-color:${C.accent}; }

    /* Size buttons */
    .pp-size { border:1.5px solid ${C.border}; border-radius:10px; background:${C.bgCard}; display:flex; flex-direction:column; align-items:center; padding:8px 14px; min-width:52px; cursor:pointer; transition:all .2s; position:relative; overflow:hidden; box-shadow:0 1px 4px rgba(99,102,241,0.05); }
    .pp-size:hover { border-color:${C.accentMid}; background:${C.bgCardHover}; }
    .pp-size.active { border-color:${C.accent}; background:linear-gradient(160deg, #F0F1FF, #E8EAFF); box-shadow:0 0 0 3px rgba(99,102,241,0.12); }
    .pp-size-lbl { font-weight:600; font-size:12px; color:${C.textNav}; }
    .pp-size-price { font-size:10px; color:${C.textDim}; font-weight:400; margin-top:2px; }
    .pp-size.active .pp-size-lbl { color:${C.accentDk}; }
    .pp-size.active .pp-size-price { color:${C.accent}; }

    /* Made to measure toggle */
    .pp-mtm { width:100%; border:1.5px solid ${C.border}; border-radius:10px; padding:11px 16px; background:${C.bgCard}; cursor:pointer; display:flex; align-items:center; justify-content:space-between; font-size:10px; font-weight:700; letter-spacing:.18em; font-family:'Montserrat',sans-serif; transition:all .25s; text-transform:uppercase; color:${C.textMuted}; }
    .pp-mtm:hover, .pp-mtm.active { border-color:${C.accent}; color:${C.accentDk}; background:rgba(99,102,241,0.04); }

    /* Add to cart button — champagne gold CTA */
    .pp-cart { width:100%; color:#fff; font-weight:700; font-size:11px; letter-spacing:.22em; border:none; border-radius:10px; padding:15px; cursor:pointer; display:flex; align-items:center; justify-content:center; gap:8px; background:linear-gradient(110deg,${C.accentDk} 0%,${C.accent} 45%,${C.accentMid} 65%,${C.accent} 100%); background-size:200% 200%; background-position:0% 50%; transition:all .4s ease; position:relative; overflow:hidden; font-family:'Montserrat',sans-serif; text-transform:uppercase; box-shadow:0 6px 24px rgba(99,102,241,0.3); }
    .pp-cart::before { content:''; position:absolute; top:-50%; left:-60%; width:30%; height:200%; background:rgba(255,255,255,.15); transform:skewX(-20deg); transition:left .6s ease; }
    .pp-cart:hover::before { left:120%; }
    .pp-cart:hover { background-position:100% 50%; box-shadow:0 10px 36px rgba(99,102,241,0.42); transform:translateY(-1px); }
    .pp-cart:disabled { background:${C.border}; color:${C.textDim}; border:1px solid ${C.border}; box-shadow:none; transform:none; cursor:not-allowed; }

    /* Policy rows */
    .pp-policy { display:flex; align-items:center; gap:14px; padding:10px 0; border-bottom:1px solid ${C.border}; font-size:12px; color:${C.textMuted}; letter-spacing:.02em; }
    .pp-policy:last-child { border-bottom:none; }
    .pp-policy-icon { width:32px; height:32px; border-radius:8px; background:rgba(99,102,241,0.07); border:1px solid ${C.border}; display:flex; align-items:center; justify-content:center; flex-shrink:0; }

    .pp-slabel { font-size:10px; font-weight:700; letter-spacing:.22em; text-transform:uppercase; color:${C.textDim}; }

    /* Rating bar */
    .pp-bar-track { flex:1; height:5px; background:${C.border}; border-radius:99px; overflow:hidden; }
    .pp-bar-fill { height:100%; background:linear-gradient(90deg,${C.accentDk},${C.accent}); border-radius:99px; transition:width .7s ease; }

    /* Review summary box */
    .pp-rsum { background:${C.bgCard}; border:1.5px solid ${C.borderMd}; border-radius:16px; padding:26px; margin-bottom:24px; position:relative; overflow:hidden; box-shadow:0 4px 20px rgba(99,102,241,0.07); }
    .pp-rsum::before { content:''; position:absolute; top:0; left:0; right:0; height:2px; background:linear-gradient(90deg,transparent,${C.accent},transparent); }

    /* Submit btn */
    .pp-submit-btn { margin-top:14px; background:linear-gradient(110deg,${C.accentDk},${C.accent}); color:#fff; border-radius:8px; padding:12px 28px; font-size:10px; font-weight:800; letter-spacing:.2em; border:none; cursor:pointer; font-family:'Montserrat',sans-serif; transition:all .25s; text-transform:uppercase; box-shadow:0 4px 16px rgba(99,102,241,0.25); }
    .pp-submit-btn:hover { box-shadow:0 6px 24px rgba(99,102,241,0.4); transform:translateY(-1px); }

    /* Review textarea */
    .pp-rinput { width:100%; border:1.5px solid ${C.border}; border-radius:10px; padding:14px 16px; font-size:13px; color:${C.textNav}; resize:vertical; font-family:'Montserrat',sans-serif; background:${C.bgInput}; outline:none; transition:border-color .25s, box-shadow .25s; line-height:1.7; }
    .pp-rinput:focus { border-color:${C.accent}; box-shadow:0 0 0 3px rgba(99,102,241,0.1); }
    .pp-rinput::placeholder { color:${C.textDim}; }

    /* Review card */
    .pp-rev-card { background:${C.bgCard}; border:1.5px solid ${C.border}; border-radius:14px; padding:22px; margin-bottom:12px; transition:border-color .2s, box-shadow .2s; box-shadow:0 2px 8px rgba(99,102,241,0.04); }
    .pp-rev-card:hover { border-color:${C.accentMid}; box-shadow:0 4px 16px rgba(99,102,241,0.08); }

    /* Avatar */
    .pp-avatar { width:38px; height:38px; border-radius:50%; background:linear-gradient(135deg,${C.accentDk},${C.accent}); color:#fff; display:flex; align-items:center; justify-content:center; font-weight:700; font-size:14px; flex-shrink:0; box-shadow:0 0 0 2px rgba(99,102,241,0.15); }

    /* Description HTML */
    .desc-html { color:${C.textBody}; line-height:2; font-size:14px; letter-spacing:.02em; font-family:'Montserrat',sans-serif; }
    .desc-html strong, .desc-html b { color:${C.textNav}; font-weight:600; }
    .desc-html p { margin-bottom:1rem; }
    .desc-html ul { list-style:none; padding:0; margin-bottom:1rem; }
    .desc-html ul li { padding-left:1.5rem; position:relative; margin-bottom:.5rem; }
    .desc-html ul li::before { content:'◆'; position:absolute; left:0; font-size:7px; top:6px; color:${C.accentMid}; }
    .desc-html h2,.desc-html h3 { color:${C.textNav}; font-family:'Montserrat',sans-serif; font-weight:600; margin-bottom:.75rem; margin-top:1.5rem; }

    /* Feature cards */
    .feat-card { transition:border-color .3s, background .3s, box-shadow .3s; }
    .feat-card:hover { border-color:${C.accentMid} !important; background:${C.bgCardHover} !important; box-shadow:0 8px 24px rgba(99,102,241,0.08) !important; }

    /* Gallery column */
    .pp-gallery-col { display:flex; gap:12px; flex:0 0 auto; width:min(480px,100%); align-self:flex-start; }
    @media (min-width:768px) { .pp-gallery-col { position:sticky; top:88px; } }

    @keyframes fadeUp { from{opacity:0;transform:translateY(14px)} to{opacity:1;transform:translateY(0)} }
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

    .pp *::-webkit-scrollbar { width:3px; height:3px; }
    .pp *::-webkit-scrollbar-thumb { background:rgba(99,102,241,0.15); border-radius:99px; }
    .pp *::-webkit-scrollbar-thumb:hover { background:rgba(99,102,241,0.3); }
  `;

  return (
    <>
      <Helmet>
        <title>{productData.name} | Dolly Lamb</title>
        {/* <meta name="description" content={productData.description?.substring(0, 160)} /> */}
        <meta
          name="description"
          content={
            productData.description
              ?.replace(/<[^>]*>/g, '')
              .substring(0, 160)
          }
        />
        <link
          rel="canonical"
          href={productUrl}
        />

        <meta property="og:type" content="product" />
        <meta property="og:title" content={productData.name} />
        {/* <meta
          property="og:description"
          content={productData.description?.substring(0, 160)}
        /> */}
        <meta
          property="og:description"
          content={
            productData.description
              ?.replace(/<[^>]*>/g, '')
              .substring(0, 160)
          }
        />
        <meta property="og:image" content={productData.image?.[0]} />
        <meta property="og:url" content={productUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={productData.name} />
        <meta
          name="twitter:description"
          content={productData.description?.replace(/<[^>]*>/g, '').substring(0, 160)}
        />
        <meta name="twitter:image" content={productData.image?.[0]} />
        <meta name="twitter:url" content={productUrl} />
        <meta
          property="og:site_name"
          content="D Dolly Lamb"
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: productData.name,
            image: productData.image,
            sku: productData.sku,
            // description: productData.description,
            description: productData.description?.replace(/<[^>]*>/g, ''),
            offers: {
              "@type": "Offer",
              priceCurrency: "USD",
              price: productData.discountPrice || productData.price,
              availability:
                productData.stock > 0
                  ? "https://schema.org/InStock"
                  : "https://schema.org/OutOfStock",
              url: productUrl
            },

            ...(reviews.length > 0 && {
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: parseFloat(avgRating.toFixed(1)),
                reviewCount: reviews.length,
                bestRating: 5,
                worstRating: 1
              },

              review: reviews.map((review) => ({
                "@type": "Review",
                author: {
                  "@type": "Person",
                  name: review.username || "Verified Customer"
                },
                reviewRating: {
                  "@type": "Rating",
                  ratingValue: review.rating,
                  bestRating: 5,
                  worstRating: 1
                },
                reviewBody: review.comment,
                datePublished: review.createdAt
              }))
            })

          })}
        </script>
      </Helmet>
      <style>{css}</style>

      {createPortal(
        <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={closeCartDrawer} />,
        document.body
      )}

      <div className="pp">

        {/* Breadcrumb */}
        <div className="pp-crumb">
          <span>{productData.category?.toUpperCase()}</span>
          {productData.subCategory && (
            <><span>&nbsp;/</span><span>{productData.subCategory?.toUpperCase()}</span></>
          )}
          <span>&nbsp;/</span>
          <span className="pp-crumb-name">
            {productData.name?.substring(0, 55)}{productData.name?.length > 55 ? '…' : ''}
          </span>
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
                      onMouseEnter={() => setHoveredThumb(index)}
                      onMouseLeave={() => setHoveredThumb(null)}>
                      <img src={item} alt={`View ${index + 1}`} />
                    </div>
                  ))}
                </div>
                <button className="pp-arr" onClick={() => scrollThumbs(1)}><FaChevronDown size={9} /></button>
              </div>

              <div className={`pp-main-wrap${isZooming ? ' zooming' : ''} contain p-4`}
                style={{ aspectRatio: '1/1', flex: 1, '--zx': `${zoomPos.x}%`, '--zy': `${zoomPos.y}%` }}
                ref={mainImgRef} onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsZooming(true)}
                onMouseLeave={() => setIsZooming(false)}>
                <img src={image} alt={productData.name} />
                <div className="pp-corner pp-corner-tl" /><div className="pp-corner pp-corner-tr" />
                <div className="pp-corner pp-corner-bl" /><div className="pp-corner pp-corner-br" />
                <button className={`pp-img-wish${isWishlisted ? ' active' : ''}`}
                  // onClick={() => toggleWishlistItem(productId)}>
                  onClick={() => toggleWishlistItem(productData._id)}>
                  {isWishlisted
                    ? <FaHeart size={14} style={{ color: C.accent }} />
                    : <FaRegHeart size={14} style={{ color: C.accentMid }} />}
                </button>
                <div className="pp-counter">
                  <span style={{ color: C.accent, fontWeight: 700 }}>{String(selectedIndex + 1).padStart(2, '0')}</span>
                  <div className="pp-counter-dot" />
                  <span>{String(productData.image.length).padStart(2, '0')}</span>
                </div>
              </div>
            </div>

            {/* ── Info Panel ── */}
            <div className="pp-info-panel pp-fadein" style={{ flex: '1 1 300px', minWidth: 0, paddingRight: 8 }}>

              {/* Category breadcrumb */}
              <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '.26em', color: C.accentMid, marginBottom: 10, textTransform: 'uppercase' }}>
                {productData.category}&nbsp;/&nbsp;{productData.subCategory}
              </p>

              {/* Badges */}
              <div style={{ display: 'flex', gap: 7, flexWrap: 'wrap', marginBottom: 12 }}>
                <span className="pp-badge-indigo"><FaCrown size={8} />&nbsp;Premium Collection</span>
                {productData.discountPrice > 0 && <span className="pp-badge-sale">{productData.discountPrice}% Off</span>}
              </div>

              {/* Name */}
              <h1 className="pp-serif lg:w-[90%]" style={{
                fontSize: 'clamp(16px,1.6vw,22px)', fontWeight: 700,
                color: C.textNav, lineHeight: 1.4, marginBottom: 10,
              }}>{productData.name}</h1>

              {/* Stars */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ display: 'flex', gap: 2 }}>
                  {[...Array(5)].map((_, i) => (
                    <span key={i} style={{ color: i < roundedRating ? C.gold : '#E5E7EB', fontSize: 13 }}>
                      {i < roundedRating ? <FaStar /> : <FaRegStar />}
                    </span>
                  ))}
                </div>
                <span style={{ fontSize: 11, color: C.textMuted, fontWeight: 500 }}>
                  {avgRating > 0 ? avgRating.toFixed(1) : '—'}&ensp;·&ensp;{reviews.length} reviews
                </span>
              </div>

              <div className="pp-divider" style={{ margin: '14px 0' }}>
                <div className="pp-divider-line" /><div className="pp-divider-diamond" /><div className="pp-divider-line" />
              </div>

              {/* Price */}
              <div className="pp-pricebox">
                {discountedPrice ? (
                  <div style={{ display: 'flex', alignItems: 'flex-end', gap: 12, flexWrap: 'wrap' }}>
                    <span className="pp-serif" style={{ fontSize: 38, fontWeight: 700, color: C.accentDk, lineHeight: 1 }}>
                      {currency}{discountedPrice.toFixed(2)}
                    </span>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 4, paddingBottom: 4 }}>
                      <span style={{ fontSize: 15, color: C.textDim, textDecoration: 'line-through' }}>{currency}{displayPrice.toFixed(2)}</span>
                      <span style={{ background: 'linear-gradient(135deg,#059669,#10B981)', color: '#fff', borderRadius: 20, padding: '2px 10px', fontSize: 9, fontWeight: 800, letterSpacing: '.16em', textTransform: 'uppercase' }}>
                        Save {currency}{(displayPrice - discountedPrice).toFixed(2)}
                      </span>
                    </div>
                  </div>
                ) : (
                  <div style={{ display: 'flex', alignItems: 'flex-end', gap: 10 }}>
                    <span className="pp-serif" style={{ fontSize: 38, fontWeight: 700, color: C.accentDk, lineHeight: 1 }}>
                      {currency}{displayPrice.toFixed(2)}
                    </span>
                    {customBreakdown && <span style={{ fontSize: 11, color: C.textDim, paddingBottom: 4 }}>{customBreakdown}</span>}
                  </div>
                )}
                <p style={{ fontSize: 11, color: C.textMuted, marginTop: 8 }}>
                  All taxes included&ensp;·&ensp;Free shipping above {currency}1000
                </p>
              </div>

              {/* Short description */}
              <p className="lg:w-[90%]" style={{ color: C.textBody, lineHeight: 1.85, fontSize: 13, letterSpacing: '.02em' }}>
                {productData.description}
              </p>

              <div className="pp-divider" style={{ margin: '16px 0' }}>
                <div className="pp-divider-line" /><div className="pp-divider-diamond" /><div className="pp-divider-line" />
              </div>

              {/* Color selector */}
              {/* <div style={{ marginBottom: 16 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                  <span className="pp-slabel">Colour</span>
                  <span style={{ fontSize: 11, color: C.textNav, fontWeight: 600, textTransform: 'capitalize' }}>
                    — {selectedColor}
                  </span>
                </div>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {productData.color?.map((colorObj, index) => {
                    let colorName, colorHex;
                    if (typeof colorObj === 'string') { colorName = colorObj; colorHex = colorMap[colorObj.toLowerCase()] || '#888'; }
                    else if (colorObj?.name) { colorName = colorObj.name; colorHex = colorObj.hex || '#888'; }
                    else { colorName = 'Unknown'; colorHex = '#888'; }
                    return (
                      <button key={index} className={`pp-clr${selectedColor === colorName ? ' active' : ''}`}
                        onClick={() => setSelectedColor(colorName)}
                        style={{ background: colorHex, outline: colorHex === '#FFFFFF' ? `1.5px solid ${C.border}` : 'none' }}
                        title={colorName} />
                    );
                  })}
                </div>
              </div> */}

              {/* Color selector */}
              <div style={{ marginBottom: 16 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                  <span className="pp-slabel">Colour</span>
                  <span style={{ fontSize: 11, color: C.textNav, fontWeight: 600, textTransform: 'capitalize' }}>
                    — {selectedColor}
                  </span>
                </div>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {productData.color?.map((colorObj, index) => {
                    let colorName, colorHex;
                    if (typeof colorObj === 'string') {
                      colorName = colorObj;
                      colorHex = colorMap[colorObj.toLowerCase()] || null; // ← '#888' → null
                    } else if (colorObj?.name) {
                      colorName = colorObj.name;
                      // colorHex = colorObj.hex || null;
                      const hex = colorObj.hex;
                      colorHex = (hex && hex !== '#000000' && hex.trim() !== '') ? hex : null;// ← '#888' → null
                    } else {
                      colorName = 'Unknown';
                      colorHex = null;
                    }

                    return colorHex ? (
                      // ── Hex available → color swatch button ──
                      <button key={index}
                        className={`pp-clr${selectedColor === colorName ? ' active' : ''}`}
                        onClick={() => setSelectedColor(colorName)}
                        style={{
                          background: colorHex,
                          outline: colorHex === '#FFFFFF' ? `1.5px solid ${C.border}` : 'none'
                        }}
                        title={colorName}
                      />
                    ) : (
                      // ── No hex → text pill button ──
                      null
                    );
                  })}
                </div>
              </div>

              {/* Size selector */}
              <div style={{ marginBottom: 16 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                  <span className="pp-slabel">Select Size</span>
                  {/* <button onClick={() => setShowModal(true)}
                    style={{ fontSize: 10, color: C.accent, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', background: 'none', border: 'none', cursor: 'pointer', fontFamily: "'Montserrat',sans-serif", display: 'flex', alignItems: 'center', gap: 5 }}>
                    <FaRuler size={10} /> Size Guide
                  </button>
                  {showModal && <Modal onclose={() => setShowModal(false)} />} */}
                </div>
                <div style={{ display: 'flex', gap: 7, flexWrap: 'wrap' }}>
                  {productData.sizes?.length > 0 ? productData.sizes.map((sizeObj, index) => {
                    const sizeLabel = typeof sizeObj === 'object' ? (sizeObj?.size ?? `Size ${index + 1}`) : String(sizeObj);
                    const multiplier = sizeObj?.priceMultiplier || 1;
                    return (
                      <button key={index} type="button" className={`pp-size${size === sizeLabel ? ' active' : ''}`}
                        onClick={() => handleSizeSelect(sizeObj)}>
                        <span className="pp-size-lbl">{sizeLabel}</span>
                        <span className="pp-size-price">
                          {currency}{(sizeObj?.useCustomPrice && sizeObj?.customPrice > 0
                            ? sizeObj.customPrice : productData.price * multiplier).toFixed(2)}
                        </span>
                      </button>
                    );
                  }) : <p style={{ fontSize: 13, color: C.textMuted }}>No sizes available</p>}
                </div>
                {size && sizeStock > 0 && sizeStock < 5 && (
                  <div style={{ marginTop: 10, display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(249,115,22,0.08)', border: '1px solid rgba(249,115,22,0.2)', borderRadius: 8, padding: '5px 12px' }}>
                    <span style={{ fontSize: 11 }}>🔥</span>
                    <span style={{ fontSize: 11, color: '#F97316', fontWeight: 600 }}>Only {sizeStock} left in this size</span>
                  </div>
                )}
              </div>

              {/* Made to Measure */}
              {/* <div style={{ marginBottom: 8 }}>
                <button className={`pp-mtm${makeMeasure ? ' active' : ''}`} onClick={() => setMakeMeasure(!makeMeasure)}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <HiSparkles size={13} style={{ color: C.accent }} /><span>Made to Measure</span>
                  </div>
                  <FaChevronDown size={10} style={{ transform: makeMeasure ? 'rotate(180deg)' : 'none', transition: 'transform .2s', color: C.accentMid }} />
                </button>
                {makeMeasure && (
                  <div style={{ marginTop: 6, padding: '12px 16px', borderRadius: 10, background: 'rgba(99,102,241,0.04)', border: `1px solid ${C.border}`, display: 'flex', alignItems: 'center', gap: 10 }}>
                    <FaInfoCircle style={{ color: C.accent, flexShrink: 0 }} size={12} />
                    <p style={{ fontSize: 12, color: C.textMuted, lineHeight: 1.6 }}>Custom measurements can be added on the Cart page.</p>
                  </div>
                )}
              </div> */}

              {/* CTA */}
              <div style={{ marginTop: 14, display: 'flex', flexDirection: 'column', gap: 8 }}>
                <button className="pp-cart" onClick={handleAddToCart}
                  disabled={isButtonDisabled || !size || !selectedColor}>
                  <BsBagCheck size={16} />
                  {isButtonDisabled ? 'Adding to Cart…' : 'Add to Cart'}
                </button>
              </div>

              {/* <JacketLiningSelector basePrice={productData.price} onPriceChange={p => setDisplayPrice(p)} /> */}

              {
                productData.itemDetails?.some(
                  item => item.title || item.value
                ) && (

                  <div
                    style={{
                      marginTop: 22,
                      background: C.bgCard,
                      border: `1px solid ${C.border}`,
                      borderRadius: 12,
                      overflow: 'hidden',
                    }}
                  >

                    {/* Heading */}

                    <div
                      className='bg-gray-200'
                      style={{
                        padding: '14px 18px',
                        borderBottom: `1px solid ${C.border}`,
                        // background: 'rgba(99,102,241,0.03)',
                      }}
                    >
                      <h2
                        style={{
                          fontSize: 13,
                          fontWeight: 700,
                          color: C.textNav,
                          letterSpacing: '.08em',
                          textTransform: 'uppercase',
                          fontFamily: "'Montserrat',sans-serif",
                        }}
                      >
                        Product Specifications
                      </h2>
                    </div>

                    {/* Rows */}

                    {
                      productData.itemDetails.map((item, index) => (

                        item.title || item.value ? (

                          <div
                            key={index}
                            style={{
                              display: 'grid',
                              gridTemplateColumns: '40% 50%',
                              gap: 2,
                              padding: '6px 18px',
                              borderBottom:
                                index !== productData.itemDetails.length - 1
                                  ? `1px solid ${C.border}`
                                  : 'none',
                              alignItems: 'center'
                            }}
                          >

                            {/* Left Title */}

                            <p
                              style={{
                                fontWeight: 600,
                                color: C.textBody,
                                fontSize: 13,
                                letterSpacing: '.03em',
                                lineHeight: 1.4,
                              }}
                            >
                              {item.title}
                            </p>

                            {/* Right Value */}

                            <p
                              className='text-gray-500'
                              style={{
                                // color: C.textDim,
                                fontSize: 12,
                                lineHeight: 1.6,
                                letterSpacing: '.02em',
                              }}
                            >
                              {item.value}
                            </p>

                          </div>

                        ) : null

                      ))
                    }

                  </div>

                )
              }


              {/* Policies */}
              <div style={{ paddingTop: 8 }} />
              {[
                { icon: <BsShieldCheck size={14} style={{ color: C.accent }} />, text: '100% original, premium materials' },
                { icon: <MdLocalShipping size={14} style={{ color: C.accent }} />, text: 'Secure cash on delivery + multiple payment methods' },
                { icon: <MdLoop size={14} style={{ color: C.accent }} />, text: 'Simple 7-day return or exchange policy' },
              ].map((p, i) => (
                <div key={i} className="pp-policy">
                  <div className="pp-policy-icon">{p.icon}</div>
                  <span>{p.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── TABS ── */}
          <div style={{ marginTop: 80 }}>
            <div style={{ display: 'flex', borderBottom: `1.5px solid ${C.border}`, marginBottom: 40, overflowX: 'auto' }}>
              {['description', 'reviews'].map(tab => (
                <button key={tab} onClick={() => setActiveTab(tab)} style={{
                  position: 'relative', padding: '13px 32px',
                  fontFamily: "'Montserrat',sans-serif",
                  fontSize: 10, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase',
                  background: 'none', border: 'none',
                  borderBottom: activeTab === tab ? `2px solid ${C.accent}` : '2px solid transparent',
                  marginBottom: -1.5, cursor: 'pointer',
                  color: activeTab === tab ? C.accent : C.textDim,
                  transition: 'color .25s, border-color .25s', whiteSpace: 'nowrap',
                }}>
                  {tab === 'reviews' ? `Reviews (${reviews.length})` : 'Description'}
                  {activeTab === tab && (
                    <span style={{ position: 'absolute', bottom: -4, left: '50%', width: 5, height: 5, borderRadius: '50%', background: C.accent, transform: 'translateX(-50%)', display: 'block' }} />
                  )}
                </button>
              ))}
            </div>

            {/* Description Tab */}
            {activeTab === 'description' && (
              <div className="tab-content" style={{ maxWidth: 900 }}>
                {/* Section heading */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 36 }}>
                  <div style={{ flex: 1, height: 1, background: `linear-gradient(90deg, transparent, ${C.accentMid})`, opacity: 0.4 }} />
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div style={{ width: 5, height: 5, background: C.accentMid, transform: 'rotate(45deg)', opacity: 0.6 }} />
                    <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.35em', textTransform: 'uppercase', color: C.accentMid, fontFamily: "'Montserrat',sans-serif" }}>Product Details</span>
                    <div style={{ width: 5, height: 5, background: C.accentMid, transform: 'rotate(45deg)', opacity: 0.6 }} />
                  </div>
                  <div style={{ flex: 1, height: 1, background: `linear-gradient(90deg, ${C.accentMid}, transparent)`, opacity: 0.4 }} />
                </div>

                {/* Detailed description card */}
                <div style={{ position: 'relative', borderRadius: 16, padding: 32, marginBottom: 24, background: C.bgCard, border: `1.5px solid ${C.border}`, boxShadow: '0 4px 20px rgba(99,102,241,0.06)' }}>
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg, transparent, ${C.accent}, transparent)`, borderRadius: '16px 16px 0 0' }} />
                  {/* Indigo corner accents */}
                  {[
                    { top: 14, left: 14, bt: `1px solid ${C.accentMid}`, bl: `1px solid ${C.accentMid}` },
                    { top: 14, right: 14, bt: `1px solid ${C.accentMid}`, br: `1px solid ${C.accentMid}` },
                    { bottom: 14, left: 14, bb: `1px solid ${C.accentMid}`, bl: `1px solid ${C.accentMid}` },
                    { bottom: 14, right: 14, bb: `1px solid ${C.accentMid}`, br: `1px solid ${C.accentMid}` },
                  ].map((pos, i) => (
                    <div key={i} style={{ position: 'absolute', width: 18, height: 18, opacity: 0.5, ...pos, borderTop: pos.bt, borderLeft: pos.bl, borderBottom: pos.bb, borderRight: pos.br }} />
                  ))}
                  <div className="desc-html" dangerouslySetInnerHTML={{ __html: productData.detailedDescription }} />
                </div>

                {/* Feature cards */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 14, marginBottom: 24 }}>
                  {[
                    { symbol: '✦', label: 'Premium Craft', desc: 'Handcrafted by artisans using heritage leatherworking techniques passed through generations.' },
                    { symbol: '◈', label: 'Finest Materials', desc: "Sourced exclusively from the world's most prestigious and ethically certified tanneries." },
                    { symbol: '❋', label: 'Bespoke Finish', desc: 'Each piece hand-finished to exacting luxury standards with precision hand stitching.' },
                  ].map((feat, i) => (
                    <div key={i} className="feat-card" style={{ position: 'relative', borderRadius: 14, padding: 22, background: C.bgCard, border: `1.5px solid ${C.border}`, boxShadow: '0 2px 10px rgba(99,102,241,0.04)' }}>
                      <div style={{ position: 'absolute', top: 0, left: 20, right: 20, height: 1, background: `linear-gradient(90deg, transparent, ${C.accentMid}, transparent)`, opacity: 0.4 }} />
                      <div style={{ width: 42, height: 42, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14, background: 'rgba(99,102,241,0.08)', border: `1px solid ${C.border}`, color: C.accent, fontSize: 16 }}>{feat.symbol}</div>
                      <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: C.textNav, fontFamily: "'Montserrat',sans-serif", marginBottom: 8 }}>{feat.label}</p>
                      <p style={{ fontSize: 12, lineHeight: 1.75, color: C.textMuted, fontFamily: "'Montserrat',sans-serif" }}>{feat.desc}</p>
                    </div>
                  ))}
                </div>

                {/* Care guide */}
                <div style={{ borderRadius: 12, padding: '14px 20px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '10px 20px', background: C.bgCard, border: `1.5px solid ${C.border}`, boxShadow: '0 2px 8px rgba(99,102,241,0.04)' }}>
                  <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.28em', textTransform: 'uppercase', color: C.accentMid, fontFamily: "'Montserrat',sans-serif", flexShrink: 0 }}>Care Guide</span>
                  <div style={{ width: 1, height: 16, background: C.border, flexShrink: 0 }} />
                  {[{ symbol: '🌿', label: 'Dry Clean Only' }, { symbol: '💧', label: 'Avoid Moisture' }, { symbol: '☀️', label: 'No Direct Sunlight' }, { symbol: '🗄️', label: 'Store in Dust Bag' }].map((care, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <span style={{ fontSize: 14 }}>{care.symbol}</span>
                      <span style={{ fontSize: 11, color: C.textMuted, fontFamily: "'Montserrat',sans-serif" }}>{care.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Reviews Tab */}
            {activeTab === 'reviews' && (
              <div className="tab-content" style={{ maxWidth: 700 }}>
                {reviews.length > 0 && (
                  <div className="pp-rsum" style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
                    <div style={{ textAlign: 'center', flexShrink: 0 }}>
                      <div className="pp-serif" style={{ fontSize: 64, fontWeight: 700, color: C.accentDk, lineHeight: 1 }}>
                        {avgRating.toFixed(1)}
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'center', gap: 3, margin: '6px 0' }}>
                        {[...Array(5)].map((_, i) => (
                          <span key={i} style={{ color: i < roundedRating ? C.gold : '#E5E7EB', fontSize: 12 }}>
                            {i < roundedRating ? <FaStar /> : <FaRegStar />}
                          </span>
                        ))}
                      </div>
                      <p style={{ fontSize: 10, color: C.textDim, letterSpacing: '.1em', fontWeight: 600 }}>{reviews.length} Reviews</p>
                    </div>
                    <div style={{ flex: 1 }}>
                      {[5, 4, 3, 2, 1].map(star => {
                        const count = reviews.filter(r => Math.round(r.rating) === star).length;
                        const pct = reviews.length ? (count / reviews.length) * 100 : 0;
                        return (
                          <div key={star} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                            <span style={{ fontSize: 10, color: C.textDim, width: 8, textAlign: 'right', fontWeight: 600 }}>{star}</span>
                            <FaStar size={8} style={{ color: C.gold, flexShrink: 0 }} />
                            <div className="pp-bar-track"><div className="pp-bar-fill" style={{ width: `${pct}%` }} /></div>
                            <span style={{ fontSize: 10, color: C.textDim, width: 18, textAlign: 'right' }}>{count}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Write review */}
                {token ? (
                  <div style={{ marginBottom: 24, padding: 28, borderRadius: 14, border: `1.5px solid ${C.border}`, background: C.bgCard, position: 'relative', overflow: 'hidden', boxShadow: '0 4px 20px rgba(99,102,241,0.06)' }}>
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg, transparent, ${C.accent}, transparent)` }} />
                    <h3 className="pp-serif" style={{ fontSize: 22, fontWeight: 700, color: C.textNav, marginBottom: 18 }}>Write a Review</h3>
                    <div style={{ display: 'flex', gap: 6, marginBottom: 18 }}>
                      {[1, 2, 3, 4, 5].map(s => (
                        <span key={s} onClick={() => setRating(s)}
                          style={{ fontSize: 28, cursor: 'pointer', color: s <= rating ? C.gold : '#E5E7EB', transition: 'transform .15s', display: 'inline-block' }}
                          onMouseOver={e => e.currentTarget.style.transform = 'scale(1.25)'}
                          onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}>
                          {s <= rating ? <FaStar /> : <FaRegStar />}
                        </span>
                      ))}
                    </div>
                    <textarea className="pp-rinput" placeholder="Share your experience with this product…"
                      value={comment} onChange={e => setComment(e.target.value)} rows={4} />
                    <button className="pp-submit-btn" onClick={handleReviewSubmit}>Submit Review</button>
                  </div>
                ) : (
                  <div style={{ padding: 20, borderRadius: 12, background: C.bgCard, border: `1.5px dashed ${C.border}`, textAlign: 'center', marginBottom: 20, color: C.textMuted, fontSize: 13 }}>
                    Please&nbsp;<span style={{ color: C.accent, fontWeight: 700, cursor: 'pointer', textDecoration: 'underline', textUnderlineOffset: 3 }}>sign in</span>&nbsp;to write a review.
                  </div>
                )}

                {reviews.length === 0 ? (
                  <div style={{ textAlign: 'center', padding: '40px 0' }}>
                    <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'rgba(99,102,241,0.07)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                      <FaRegStar size={24} style={{ color: C.accentMid, opacity: 0.5 }} />
                    </div>
                    <div className="pp-serif" style={{ fontSize: 18, color: C.textDim, marginBottom: 8, fontWeight: 600 }}>No reviews yet</div>
                    <p style={{ fontSize: 12, color: C.textDim, letterSpacing: '.06em' }}>Be the first to share your experience</p>
                  </div>
                ) : reviews.map(rev => (
                  <div key={rev._id} className="pp-rev-card">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                        <div className="pp-avatar">{(rev.user?.name || 'U')[0].toUpperCase()}</div>
                        <div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                            <span style={{ fontWeight: 700, fontSize: 13, color: C.textNav }}>{rev.user?.name || 'Customer'}</span>
                            <MdVerified size={12} style={{ color: '#10B981' }} />
                          </div>
                          <div style={{ display: 'flex', gap: 2, marginTop: 4 }}>
                            {[...Array(5)].map((_, i) => (
                              <span key={i} style={{ color: i < rev.rating ? C.gold : '#E5E7EB', fontSize: 10 }}>
                                {i < rev.rating ? <FaStar /> : <FaRegStar />}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
                        <span style={{ fontSize: 10, color: C.textDim, fontWeight: 500 }}>
                          {new Date(rev.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                        </span>
                        {rev.user?._id === userId && (
                          <button onClick={async () => { const ok = await deleteReview(rev._id); if (ok) loadReviews(); }}
                            style={{ fontSize: 10, color: '#EF4444', fontWeight: 700, background: 'none', border: 'none', cursor: 'pointer', letterSpacing: '.06em', textTransform: 'uppercase' }}>
                            Delete
                          </button>
                        )}
                      </div>
                    </div>
                    <p style={{ fontSize: 13, color: C.textBody, lineHeight: 1.8, marginTop: 14 }}>{rev.comment}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Related Products */}
          <div style={{ marginTop: 100 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 24, marginBottom: 40 }}>
              <div style={{ flex: 1, height: 1, background: `linear-gradient(90deg, transparent, ${C.border})` }} />
              <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.35em', textTransform: 'uppercase', color: C.accentMid, fontFamily: "'Montserrat',sans-serif", whiteSpace: 'nowrap' }}>
                ◆ YOU MAY ALSO LIKE ◆
              </span>
              <div style={{ flex: 1, height: 1, background: `linear-gradient(90deg, ${C.border}, transparent)` }} />
            </div>
            <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
          </div>
        </div>
      </div >
    </>
  );
};

export default Product;