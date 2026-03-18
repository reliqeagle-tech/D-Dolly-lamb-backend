// import React, { useContext, useEffect, useState, useMemo } from 'react'
// import { ShopContext } from '../context/ShopContext'
// import { assets } from '../assets/assets';
// import Title from '../components/Title';
// import ProductItem from '../components/ProductItem';
// import PromoBanner from '../components/PromoBanner';
// import { useSearchParams } from "react-router-dom";
// import { Helmet } from 'react-helmet-async';

// const Collection = () => {

//   const { products, search, showSearch } = useContext(ShopContext);
//   const [showFilter, setShowFilter] = useState(false);
//   const [filterProducts, setFilterProducts] = useState([]);
//   const [category, setCategory] = useState([]);
//   const [subCategory, setSubCategory] = useState([]);
//   const [sortType, setSortType] = useState('relavent')
//   const [currentPage, setCurrentPage] = useState(1); // New: Track current page
//   const productsPerPage = 12; // New: Items per page (adjustable)
//   const [searchParams] = useSearchParams();

//   useEffect(() => {
//     const rawCategory = searchParams.get("category");
//     const rawSub = searchParams.get("sub");

//     if (rawCategory) {
//       setCategory([decodeURIComponent(rawCategory)]);
//     }

//     if (rawSub) {
//       setSubCategory([decodeURIComponent(rawSub)]);
//     }
//   }, [searchParams]);



//   /* --------------------------------------------------------
//        🟦 CATEGORY → DYNAMIC SUBCATEGORY SYSTEM
//     -------------------------------------------------------- */
//   const subCategoriesMap = {
//     Men: ["Topwear", "Bottomwear", "Winterwear"],
//     Women: ["Topwear", "Bottomwear", "Winterwear"],
//     // Kids: ["Topwear", "Bottomwear", "Winterwear"],
//     Others: ["Cushion Cover", "Aprons", "Desk Mat", "Pillow", "Chair Cover"]
//   };


//   useEffect(() => {
//     applyFilter();
//   }, [category, subCategory, search, showSearch, products]);

//   /* --------------------------------------------------------
//     🟦 Category Toggler
//  -------------------------------------------------------- */
//   const toggleCategory = (e) => {
//     const value = e.target.value;

//     if (category.includes(value)) {
//       setCategory(prev => prev.filter(item => item !== value));
//       setSubCategory(prev =>
//         prev.filter(s => !subCategoriesMap[value].includes(s))
//       );
//     } else {
//       setCategory(prev => [...prev, value]);
//     }
//   };


//   /* --------------------------------------------------------
//      🟦 SubCategory Toggler
//   -------------------------------------------------------- */
//   const toggleSubCategory = (e) => {
//     const value = e.target.value;

//     if (subCategory.includes(value)) {
//       setSubCategory(prev => prev.filter(item => item !== value))
//     } else {
//       setSubCategory(prev => [...prev, value])
//     }
//   };

//   const applyFilter = () => {

//     let productsCopy = products.slice();

//     if (showSearch && search) {
//       productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
//     }

//     if (category.length > 0) {
//       productsCopy = productsCopy.filter(item => category.includes(item.category));
//     }

//     if (subCategory.length > 0) {
//       productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory))
//     }

//     setFilterProducts(productsCopy)
//     setCurrentPage(1); // New: Reset to first page on filter change

//   }

//   const sortProduct = () => {

//     let fpCopy = filterProducts.slice();

//     switch (sortType) {
//       case 'low-high':
//         setFilterProducts(fpCopy.sort((a, b) => (a.price - b.price)));
//         break;

//       case 'high-low':
//         setFilterProducts(fpCopy.sort((a, b) => (b.price - a.price)));
//         break;

//       default:
//         applyFilter();
//         break;
//     }
//     setCurrentPage(1); // New: Reset to first page on sort change

//   }
//   // New: Calculate paginated products
//   const paginatedProducts = useMemo(() => {
//     const startIndex = (currentPage - 1) * productsPerPage;
//     const endIndex = startIndex + productsPerPage;
//     return filterProducts.slice(startIndex, endIndex);
//   }, [filterProducts, currentPage]);

//   // New: Calculate total pages
//   const totalPages = Math.ceil(filterProducts.length / productsPerPage);

//   // New: Handle page change
//   const handlePageChange = (page) => {
//     if (page >= 1 && page <= totalPages) {
//       setCurrentPage(page);
//       // Optional: Scroll to top of products for better UX
//       window.scrollTo({ top: 0, behavior: 'smooth' });
//     }
//   };

//   useEffect(() => {
//     applyFilter();
//   }, [category, subCategory, search, showSearch, products])

//   useEffect(() => {
//     sortProduct();
//   }, [sortType])

//   // New: Pagination Component (inlined for simplicity)
//   const Pagination = ({ currentPage, totalPages, onPageChange }) => {
//     // Generate page numbers to show (e.g., show 5 pages max, with ellipsis)
//     const getPageNumbers = () => {
//       const pages = [];
//       const maxVisible = 5;
//       let start = Math.max(1, currentPage - Math.floor(maxVisible / 2));
//       let end = Math.min(totalPages, start + maxVisible - 1);

//       if (end - start < maxVisible - 1) {
//         start = Math.max(1, end - maxVisible + 1);
//       }

//       for (let i = start; i <= end; i++) {
//         pages.push(i);
//       }

//       return { start, end, pages };
//     };

//     const { pages } = getPageNumbers();
//     const isFirstPage = currentPage === 1;
//     const isLastPage = currentPage === totalPages;

//     if (totalPages <= 1) return null;

//     return (
//       <div className="flex justify-center items-center space-x-2 mt-8 pb-8 ">
//         {/* Previous Button */}
//         <button
//           onClick={() => onPageChange(currentPage - 1)}
//           disabled={isFirstPage}
//           className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isFirstPage
//             ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
//             : 'bg-white border border-gray-300 hover:bg-indigo-100 text-gray-700'
//             }`}
//         >
//           Previous
//         </button>

//         {/* Page Numbers */}
//         {pages.map((page) => (
//           <button
//             key={page}
//             onClick={() => onPageChange(page)}
//             className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${page === currentPage
//               ? 'bg-[#674c47] text-white' // Active page styling (customize to your theme)
//               : 'bg-white border border-gray-300 hover:bg-indigo-100 text-gray-700'
//               }`}
//           >
//             {page}
//           </button>
//         ))}

//         {/* Ellipsis if needed */}
//         {getPageNumbers().end < totalPages && (
//           <span className="px-3 py-2 text-gray-500">...</span>
//         )}

//         {/* Next Button */}
//         <button
//           onClick={() => onPageChange(currentPage + 1)}
//           disabled={isLastPage}
//           className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isLastPage
//             ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
//             : 'bg-white border border-gray-300 hover:bg-indigo-100 text-gray-700'
//             }`}
//         >
//           Next
//         </button>

//         {/* Optional: Page info */}
//         <span className="text-sm text-gray-500 ml-4">
//           Page {currentPage} of {totalPages}
//         </span>
//       </div>
//     );
//   };

//   return (
//     <div>
//       <Helmet>
//         <title> D Dolly Lamb</title>
//         <meta name="description" content="Collection page" />
//       </Helmet>

//       {/* <PromoBanner /> */}
//       {/* <div >
//         <img className='h-[60vh] w-full m-auto' src={assets.aboutImg} />
//       </div> */}
//       <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t sm:px-10 px-2 bg-[#faf0e6] overflow-hidden'>

//         {/* Filter Options */}
//         <div className='min-w-60 md:sticky md:top-4 self-start pt-20'>
//           <p onClick={() => setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer font-semibold text-gray-700 gap-2'>FILTERS
//             <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="" />
//           </p>
//           {/* CATEGORY */}
//           <div className={`border border-gray-500 pl-5 py-3 mt-6 rounded-md ${showFilter ? '' : 'hidden'} sm:block`}>
//             <p className='mb-3 text-sm font-semibold text-gray-700'>CATEGORIES</p>

//             <div className='flex flex-col gap-2 text-sm text-gray-600 font-medium'>
//               {Object.keys(subCategoriesMap).map(cat => (
//                 <label key={cat} className='flex gap-2'>
//                   <input type="checkbox" value={cat} onChange={toggleCategory} />
//                   {cat}
//                 </label>
//               ))}
//             </div>
//           </div>
//           {/* SUBCATEGORY */}
//           <div className={`border border-gray-500 pl-5 py-3 my-5 rounded-md ${showFilter ? '' : 'hidden'} sm:block`}>
//             <p className='mb-3 text-sm font-semibold text-gray-700'>TYPE</p>

//             <div className='flex flex-col gap-2 text-sm text-gray-600 font-medium'>
//               {category.length === 0 && (
//                 <p className="text-xs text-gray-500">Select category first</p>
//               )}

//               {[...new Set(category.flatMap(cat => subCategoriesMap[cat]))].map(sub => (
//                 <label key={sub} className='flex gap-2'>
//                   <input
//                     type="checkbox"
//                     value={sub}
//                     checked={subCategory.includes(sub)}
//                     onChange={toggleSubCategory}
//                   />
//                   {sub}
//                 </label>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Right Side */}
//         <div className='flex-1'>

//           <div className="flex flex-col sm:flex-row sm:justify-between gap-3 mb-4 text-lg sm:text-2xl">

//             <div className="text-center sm:text-left w-full sm:w-auto">
//               <Title text1={"ALL"} text2={"COLLECTIONS"} />
//             </div>

//             {/* Product Sort */}
//             <select
//               onChange={(e) => setSortType(e.target.value)}
//               className="border-2 border-gray-300 text-sm px-3 py-1 rounded-md w-full sm:w-auto mb-4"
//             >
//               <option value="relavent">Sort by: Relevant</option>
//               <option value="low-high">Sort by: Low to High</option>
//               <option value="high-low">Sort by: High to Low</option>
//             </select>

//           </div>



//           {/* Map Products - Updated to use paginatedProducts */}
//           <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 sm:gap-y-6 mb-8'>
//             {
//               paginatedProducts.map((item, index) => (
//                 <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image} discountPrice={item.discountPrice} />
//               ))
//             }
//           </div>

//           {/* New: Pagination Component - Render below the grid */}
//           <Pagination
//             currentPage={currentPage}
//             totalPages={totalPages}
//             onPageChange={handlePageChange}
//           />

//         </div>

//       </div>
//     </div>
//   )
// }

// export default Collection





// import React, { useContext, useEffect, useState, useMemo } from 'react'
// import { ShopContext } from '../context/ShopContext'
// import Title from '../components/Title'
// import ProductItem from '../components/ProductItem'
// import { useSearchParams } from "react-router-dom"
// import { Helmet } from 'react-helmet-async'

// /* ── Premium SVG Icons ─────────────────────────── */
// const IconFilter = () => (
//   <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
//     <path d="M3 6h18M7 12h10M11 18h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
//   </svg>
// )
// const IconGrid4 = () => (
//   <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
//     <rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" />
//     <rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" />
//     <rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" />
//     <rect x="14" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" />
//   </svg>
// )
// const IconGrid3 = () => (
//   <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
//     <rect x="2" y="3" width="6" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" />
//     <rect x="9" y="3" width="6" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" />
//     <rect x="16" y="3" width="6" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" />
//     <rect x="2" y="14" width="6" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" />
//     <rect x="9" y="14" width="6" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" />
//     <rect x="16" y="14" width="6" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" />
//   </svg>
// )
// const IconList = () => (
//   <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
//     <rect x="3" y="4" width="7" height="5" rx="1" stroke="currentColor" strokeWidth="1.5" />
//     <path d="M13 5h8M13 9h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
//     <rect x="3" y="14" width="7" height="5" rx="1" stroke="currentColor" strokeWidth="1.5" />
//     <path d="M13 15h8M13 19h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
//   </svg>
// )
// const IconSort = () => (
//   <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
//     <path d="M3 6h18M6 12h12M9 18h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
//   </svg>
// )
// const IconChevron = ({ open }) => (
//   <svg width="12" height="12" viewBox="0 0 24 24" fill="none" style={{ transition: "transform 0.3s", transform: open ? "rotate(180deg)" : "rotate(0deg)" }}>
//     <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//   </svg>
// )
// const IconClose = () => (
//   <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
//     <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
//   </svg>
// )
// const IconSearch = () => (
//   <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
//     <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.5" />
//     <path d="M15 15l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
//   </svg>
// )
// const IconStar = () => (
//   <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
//     <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
//       stroke="#c8973a" strokeWidth="1.5" fill="rgba(200,151,58,0.2)" strokeLinejoin="round" />
//   </svg>
// )
// const IconCheck = () => (
//   <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
//     <path d="M5 12l5 5L20 7" stroke="#1a0f0a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
//   </svg>
// )

// /* ── Filter Checkbox ───────────────────────────── */
// const FilterCheck = ({ label, value, checked, onChange, count }) => (
//   <label className="flex items-center justify-between gap-2 cursor-pointer group py-1.5">
//     <div className="flex items-center gap-2.5">
//       <div
//         onClick={() => onChange({ target: { value } })}
//         className="w-4 h-4 border flex items-center justify-center flex-shrink-0 transition-all duration-200 cursor-pointer"
//         style={{
//           borderColor: checked ? "#c8973a" : "rgba(200,151,58,0.25)",
//           background: checked ? "linear-gradient(135deg,#c8973a,#f7c568)" : "transparent",
//           borderRadius: "2px",
//         }}
//       >
//         {checked && <IconCheck />}
//       </div>
//       <span style={{ fontSize: "11px", color: checked ? "#f7c568" : "#a08060", fontFamily: "Georgia,serif", letterSpacing: "0.04em", transition: "color 0.2s" }}>
//         {label}
//       </span>
//     </div>
//     {count !== undefined && (
//       <span style={{ fontSize: "9px", color: "#5a4030", fontFamily: "Georgia,serif" }}>({count})</span>
//     )}
//   </label>
// )

// /* ── Filter Section ────────────────────────────── */
// const FilterSection = ({ title, children, defaultOpen = true }) => {
//   const [open, setOpen] = useState(defaultOpen)
//   return (
//     <div style={{ borderBottom: "1px solid rgba(200,151,58,0.1)" }}>
//       <button
//         onClick={() => setOpen(!open)}
//         className="w-full flex items-center justify-between py-3.5 cursor-pointer bg-transparent border-none"
//         style={{ color: "#f5ede0" }}
//       >
//         <span style={{ fontSize: "9px", letterSpacing: "0.3em", fontFamily: "Georgia,serif", fontWeight: 600, color: "#c8973a", textTransform: "uppercase" }}>
//           {title}
//         </span>
//         <IconChevron open={open} />
//       </button>
//       <div style={{ maxHeight: open ? "400px" : 0, overflow: "hidden", transition: "max-height 0.35s ease", opacity: open ? 1 : 0 }}>
//         <div className="pb-4">{children}</div>
//       </div>
//     </div>
//   )
// }

// /* ── Active Filter Tag ─────────────────────────── */
// const FilterTag = ({ label, onRemove }) => (
//   <div className="flex items-center gap-1.5 px-2.5 py-1 cursor-pointer group"
//     onClick={onRemove}
//     style={{ border: "1px solid rgba(200,151,58,0.35)", borderRadius: "2px", background: "rgba(200,151,58,0.06)", transition: "all 0.2s" }}>
//     <span style={{ fontSize: "9px", color: "#c8973a", letterSpacing: "0.12em", fontFamily: "Georgia,serif" }}>{label}</span>
//     <span style={{ color: "#c8973a", opacity: 0.7 }}><IconClose /></span>
//   </div>
// )

// /* ── Pagination ────────────────────────────────── */
// const Pagination = ({ currentPage, totalPages, onPageChange, total, perPage }) => {
//   if (totalPages <= 1) return null
//   const pages = []
//   const max = 5
//   let start = Math.max(1, currentPage - Math.floor(max / 2))
//   let end = Math.min(totalPages, start + max - 1)
//   if (end - start < max - 1) start = Math.max(1, end - max + 1)
//   for (let i = start; i <= end; i++) pages.push(i)

//   return (
//     <div className="flex flex-col items-center gap-4 py-10">
//       {/* Count info */}
//       <p style={{ fontSize: "10px", color: "#5a4030", letterSpacing: "0.2em", fontFamily: "Georgia,serif" }}>
//         SHOWING {Math.min((currentPage - 1) * perPage + 1, total)}–{Math.min(currentPage * perPage, total)} OF {total} PIECES
//       </p>

//       <div className="flex items-center gap-2">
//         {/* Prev */}
//         <button
//           onClick={() => onPageChange(currentPage - 1)}
//           disabled={currentPage === 1}
//           className="flex items-center gap-1.5 px-4 py-2 transition-all duration-200"
//           style={{
//             border: "1px solid rgba(200,151,58,0.2)", borderRadius: "2px",
//             color: currentPage === 1 ? "#3d2010" : "#c8973a",
//             background: "transparent", cursor: currentPage === 1 ? "not-allowed" : "pointer",
//             fontSize: "10px", letterSpacing: "0.18em", fontFamily: "Georgia,serif",
//           }}
//         >
//           ← PREV
//         </button>

//         {start > 1 && (
//           <>
//             <button onClick={() => onPageChange(1)} className="w-9 h-9 flex items-center justify-center transition-all" style={{ border: "1px solid rgba(200,151,58,0.2)", borderRadius: "2px", color: "#a08060", fontSize: "12px", fontFamily: "Georgia,serif", background: "transparent", cursor: "pointer" }}>1</button>
//             {start > 2 && <span style={{ color: "#5a4030", fontSize: "12px" }}>…</span>}
//           </>
//         )}

//         {pages.map(p => (
//           <button key={p} onClick={() => onPageChange(p)}
//             className="w-9 h-9 flex items-center justify-center transition-all duration-200"
//             style={{
//               border: `1px solid ${p === currentPage ? "#c8973a" : "rgba(200,151,58,0.2)"}`,
//               borderRadius: "2px",
//               background: p === currentPage ? "linear-gradient(135deg,#c8973a,#f7c568)" : "transparent",
//               color: p === currentPage ? "#1a0f0a" : "#a08060",
//               fontSize: "12px", fontFamily: "Georgia,serif",
//               fontWeight: p === currentPage ? 700 : 400,
//               cursor: "pointer",
//             }}>
//             {p}
//           </button>
//         ))}

//         {end < totalPages && (
//           <>
//             {end < totalPages - 1 && <span style={{ color: "#5a4030", fontSize: "12px" }}>…</span>}
//             <button onClick={() => onPageChange(totalPages)} className="w-9 h-9 flex items-center justify-center transition-all" style={{ border: "1px solid rgba(200,151,58,0.2)", borderRadius: "2px", color: "#a08060", fontSize: "12px", fontFamily: "Georgia,serif", background: "transparent", cursor: "pointer" }}>{totalPages}</button>
//           </>
//         )}

//         {/* Next */}
//         <button
//           onClick={() => onPageChange(currentPage + 1)}
//           disabled={currentPage === totalPages}
//           className="flex items-center gap-1.5 px-4 py-2 transition-all duration-200"
//           style={{
//             border: "1px solid rgba(200,151,58,0.2)", borderRadius: "2px",
//             color: currentPage === totalPages ? "#3d2010" : "#c8973a",
//             background: "transparent", cursor: currentPage === totalPages ? "not-allowed" : "pointer",
//             fontSize: "10px", letterSpacing: "0.18em", fontFamily: "Georgia,serif",
//           }}
//         >
//           NEXT →
//         </button>
//       </div>

//       {/* Gold rule */}
//       <div className="flex items-center gap-3">
//         <span className="block h-px w-12" style={{ background: "linear-gradient(to right,transparent,rgba(200,151,58,0.3))" }} />
//         <span className="block w-1 h-1 rotate-45 flex-shrink-0" style={{ background: "rgba(200,151,58,0.4)" }} />
//         <span className="block h-px w-12" style={{ background: "linear-gradient(to left,transparent,rgba(200,151,58,0.3))" }} />
//       </div>
//     </div>
//   )
// }

// /* ══════════════════════════════════════════════
//    COLLECTION PAGE
// ══════════════════════════════════════════════ */
// const Collection = () => {
//   const { products, search, showSearch } = useContext(ShopContext)
//   const [showFilter, setShowFilter] = useState(false)
//   const [filterProducts, setFilterProducts] = useState([])
//   const [category, setCategory] = useState([])
//   const [subCategory, setSubCategory] = useState([])
//   const [sortType, setSortType] = useState('relavent')
//   const [currentPage, setCurrentPage] = useState(1)
//   const [gridCols, setGridCols] = useState(4)   // 3 or 4 or 'list'
//   const [priceRange, setPriceRange] = useState([0, 2000])
//   const [maxPrice, setMaxPrice] = useState(2000)
//   const [onlyDiscounted, setOnlyDiscounted] = useState(false)
//   const [onlyBestseller, setOnlyBestseller] = useState(false)
//   const [productSearch, setProductSearch] = useState("")
//   const productsPerPage = 12
//   const [searchParams] = useSearchParams()

//   const subCategoriesMap = {
//     Men: ["Topwear", "Bottomwear", "Winterwear"],
//     Women: ["Topwear", "Bottomwear", "Winterwear"],
//     Others: ["Cushion Cover", "Aprons", "Desk Mat", "Pillow", "Chair Cover"]
//   }

//   useEffect(() => {
//     const rawCategory = searchParams.get("category")
//     const rawSub = searchParams.get("sub")
//     if (rawCategory) setCategory([decodeURIComponent(rawCategory)])
//     if (rawSub) setSubCategory([decodeURIComponent(rawSub)])
//   }, [searchParams])

//   useEffect(() => {
//     if (products.length > 0) {
//       const max = Math.max(...products.map(p => p.price))
//       setMaxPrice(max)
//       setPriceRange([0, max])
//     }
//   }, [products])

//   const toggleCategory = (e) => {
//     const value = e.target.value
//     if (category.includes(value)) {
//       setCategory(prev => prev.filter(i => i !== value))
//       setSubCategory(prev => prev.filter(s => !subCategoriesMap[value].includes(s)))
//     } else {
//       setCategory(prev => [...prev, value])
//     }
//   }

//   const toggleSubCategory = (e) => {
//     const value = e.target.value
//     if (subCategory.includes(value)) {
//       setSubCategory(prev => prev.filter(i => i !== value))
//     } else {
//       setSubCategory(prev => [...prev, value])
//     }
//   }

//   // Count products per category
//   const catCounts = useMemo(() => {
//     const counts = {}
//     Object.keys(subCategoriesMap).forEach(cat => {
//       counts[cat] = products.filter(p => p.category === cat).length
//     })
//     return counts
//   }, [products])

//   useEffect(() => {
//     let copy = products.slice()
//     if ((showSearch && search) || productSearch) {
//       const q = productSearch || search
//       copy = copy.filter(i => i.name.toLowerCase().includes(q.toLowerCase()))
//     }
//     if (category.length > 0) copy = copy.filter(i => category.includes(i.category))
//     if (subCategory.length > 0) copy = copy.filter(i => subCategory.includes(i.subCategory))
//     copy = copy.filter(i => i.price >= priceRange[0] && i.price <= priceRange[1])
//     if (onlyDiscounted) copy = copy.filter(i => i.discountPrice > 0)
//     if (onlyBestseller) copy = copy.filter(i => i.bestseller)
//     setFilterProducts(copy)
//     setCurrentPage(1)
//   }, [category, subCategory, search, showSearch, products, priceRange, onlyDiscounted, onlyBestseller, productSearch])

//   useEffect(() => {
//     let copy = filterProducts.slice()
//     if (sortType === 'low-high') copy.sort((a, b) => a.price - b.price)
//     else if (sortType === 'high-low') copy.sort((a, b) => b.price - a.price)
//     else if (sortType === 'newest') copy = products.filter(p => filterProducts.find(f => f._id === p._id))
//     setFilterProducts(copy)
//     setCurrentPage(1)
//   }, [sortType])

//   const paginatedProducts = useMemo(() => {
//     const start = (currentPage - 1) * productsPerPage
//     return filterProducts.slice(start, start + productsPerPage)
//   }, [filterProducts, currentPage])

//   const totalPages = Math.ceil(filterProducts.length / productsPerPage)

//   const handlePageChange = (page) => {
//     if (page >= 1 && page <= totalPages) {
//       setCurrentPage(page)
//       window.scrollTo({ top: 0, behavior: 'smooth' })
//     }
//   }

//   const clearAllFilters = () => {
//     setCategory([]); setSubCategory([])
//     setPriceRange([0, maxPrice])
//     setOnlyDiscounted(false); setOnlyBestseller(false)
//     setProductSearch(""); setSortType("relavent")
//   }

//   const activeFilterCount = category.length + subCategory.length +
//     (onlyDiscounted ? 1 : 0) + (onlyBestseller ? 1 : 0) +
//     (priceRange[0] > 0 || priceRange[1] < maxPrice ? 1 : 0)

//   const gridClass = gridCols === 4
//     ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
//     : gridCols === 3
//       ? "grid-cols-2 sm:grid-cols-3"
//       : "grid-cols-1"

//   return (
//     <div style={{ background: "#1a0f0a", minHeight: "100vh" }}>
//       <Helmet>
//         <title>Collection — D Dolly Lamb</title>
//         <meta name="description" content="Browse the full D Dolly Lamb collection" />
//       </Helmet>

//       <style>{`
//         @keyframes fadeUp {
//           from { opacity: 0; transform: translateY(16px); }
//           to   { opacity: 1; transform: translateY(0); }
//         }
//         .col-card { animation: fadeUp 0.4s ease both; }
//         .col-card:nth-child(1)  { animation-delay: 0.04s; }
//         .col-card:nth-child(2)  { animation-delay: 0.08s; }
//         .col-card:nth-child(3)  { animation-delay: 0.12s; }
//         .col-card:nth-child(4)  { animation-delay: 0.16s; }
//         .col-card:nth-child(5)  { animation-delay: 0.20s; }
//         .col-card:nth-child(6)  { animation-delay: 0.24s; }
//         .col-card:nth-child(7)  { animation-delay: 0.28s; }
//         .col-card:nth-child(8)  { animation-delay: 0.32s; }

//         .price-slider {
//           -webkit-appearance: none; appearance: none;
//           width: 100%; height: 2px;
//           background: linear-gradient(to right, #c8973a, #f7c568);
//           outline: none; border-radius: 2px;
//         }
//         .price-slider::-webkit-slider-thumb {
//           -webkit-appearance: none; appearance: none;
//           width: 14px; height: 14px;
//           border-radius: 50%;
//           background: linear-gradient(135deg, #c8973a, #f7c568);
//           cursor: pointer;
//           border: 2px solid #1a0f0a;
//           box-shadow: 0 0 6px rgba(200,151,58,0.5);
//         }
//         .sort-select {
//           background: rgba(255,255,255,0.03);
//           border: 1px solid rgba(200,151,58,0.2);
//           color: #f5ede0;
//           font-family: Georgia, serif;
//           font-size: 12px;
//           letter-spacing: 0.06em;
//           padding: 9px 32px 9px 14px;
//           border-radius: 2px;
//           outline: none;
//           cursor: pointer;
//           appearance: none;
//           transition: border-color 0.2s;
//         }
//         .sort-select:focus { border-color: #c8973a; }
//         .sort-select option { background: #1a0f0a; color: #f5ede0; }
//         .view-btn {
//           width: 34px; height: 34px;
//           display: flex; align-items: center; justify-content: center;
//           border: 1px solid rgba(200,151,58,0.18);
//           border-radius: 2px;
//           cursor: pointer; background: transparent;
//           transition: all 0.2s;
//         }
//         .view-btn.active, .view-btn:hover {
//           border-color: #c8973a;
//           background: rgba(200,151,58,0.1);
//           color: #f7c568;
//         }
//         .filter-panel {
//           background: linear-gradient(145deg, #1e110a, #160c06);
//           border: 1px solid rgba(200,151,58,0.15);
//           border-radius: 4px;
//         }
//         .mobile-overlay {
//           position: fixed; inset: 0; z-index: 999;
//           background: rgba(0,0,0,0.7); backdrop-filter: blur(4px);
//         }
//         .mobile-drawer {
//           position: fixed; top: 0; left: 0; bottom: 0;
//           width: min(340px, 90vw); z-index: 1000;
//           background: #120a05;
//           border-right: 1px solid rgba(200,151,58,0.2);
//           overflow-y: auto;
//           animation: drawerIn 0.3s cubic-bezier(0.16,1,0.3,1);
//         }
//         @keyframes drawerIn {
//           from { transform: translateX(-100%); }
//           to   { transform: translateX(0); }
//         }
//         .empty-state { animation: fadeUp 0.5s ease both; }
//       `}</style>

//       {/* ── PAGE HEADER ── */}
//       <div className="text-center px-6 py-14" style={{ borderBottom: "1px solid rgba(200,151,58,0.12)" }}>
//         <div className="flex items-center justify-center gap-3 mb-3">
//           <span className="block w-8 h-px" style={{ background: "linear-gradient(to right,transparent,#c8973a)" }} />
//           <span style={{ fontSize: "9px", letterSpacing: "0.38em", color: "#c8973a", fontFamily: "Georgia,serif" }}>D DOLLY LAMB</span>
//           <span className="block w-8 h-px" style={{ background: "linear-gradient(to left,transparent,#c8973a)" }} />
//         </div>
//         <h1 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(1.8rem,4vw,3rem)", fontWeight: 400, color: "#f7c568", letterSpacing: "0.06em", margin: "0 0 8px" }}>
//           All <span style={{ color: "#f5ede0" }}>Collections</span>
//         </h1>
//         <p style={{ fontSize: "13px", color: "#5a4030", fontStyle: "italic", fontFamily: "Georgia,serif" }}>
//           {filterProducts.length} pieces found
//         </p>
//       </div>

//       <div className="flex">

//         {/* ── DESKTOP FILTER SIDEBAR ── */}
//         <aside className="hidden lg:block w-72 flex-shrink-0 sticky top-[68px] self-start h-[calc(100vh-68px)] overflow-y-auto px-5 py-6"
//           style={{ borderRight: "1px solid rgba(200,151,58,0.1)" }}>

//           <div className="flex items-center justify-between mb-6">
//             <div className="flex items-center gap-2" style={{ color: "#c8973a" }}>
//               <IconFilter />
//               <span style={{ fontSize: "10px", letterSpacing: "0.3em", fontFamily: "Georgia,serif", fontWeight: 600 }}>FILTERS</span>
//               {activeFilterCount > 0 && (
//                 <span className="flex items-center justify-center w-4 h-4 rounded-full text-[8px] font-bold"
//                   style={{ background: "linear-gradient(135deg,#c8973a,#f7c568)", color: "#1a0f0a" }}>
//                   {activeFilterCount}
//                 </span>
//               )}
//             </div>
//             {activeFilterCount > 0 && (
//               <button onClick={clearAllFilters} style={{ fontSize: "9px", color: "#5a4030", letterSpacing: "0.15em", fontFamily: "Georgia,serif", background: "none", border: "none", cursor: "pointer", transition: "color 0.2s" }}
//                 onMouseEnter={e => e.target.style.color = "#c8973a"}
//                 onMouseLeave={e => e.target.style.color = "#5a4030"}>
//                 CLEAR ALL
//               </button>
//             )}
//           </div>

//           {/* Product Search */}
//           <div className="relative mb-5">
//             <input
//               type="text"
//               placeholder="Search products..."
//               value={productSearch}
//               onChange={e => setProductSearch(e.target.value)}
//               style={{
//                 width: "100%", padding: "9px 36px 9px 12px",
//                 background: "rgba(255,255,255,0.03)",
//                 border: "1px solid rgba(200,151,58,0.18)",
//                 borderRadius: "2px", color: "#f5ede0",
//                 fontSize: "11px", fontFamily: "Georgia,serif",
//                 fontStyle: "italic", outline: "none",
//                 transition: "border-color 0.2s",
//               }}
//               onFocus={e => e.target.style.borderColor = "#c8973a"}
//               onBlur={e => e.target.style.borderColor = "rgba(200,151,58,0.18)"}
//             />
//             <span className="absolute right-3 top-1/2 -translate-y-1/2" style={{ color: "#5a4030" }}>
//               <IconSearch />
//             </span>
//           </div>

//           {/* Categories */}
//           <FilterSection title="Category">
//             <div className="flex flex-col">
//               {Object.keys(subCategoriesMap).map(cat => (
//                 <FilterCheck key={cat} label={cat} value={cat}
//                   checked={category.includes(cat)}
//                   onChange={toggleCategory}
//                   count={catCounts[cat]}
//                 />
//               ))}
//             </div>
//           </FilterSection>

//           {/* Subcategories */}
//           {category.length > 0 && (
//             <FilterSection title="Type">
//               <div className="flex flex-col">
//                 {[...new Set(category.flatMap(c => subCategoriesMap[c]))].map(sub => (
//                   <FilterCheck key={sub} label={sub} value={sub}
//                     checked={subCategory.includes(sub)}
//                     onChange={toggleSubCategory}
//                   />
//                 ))}
//               </div>
//             </FilterSection>
//           )}

//           {/* Price Range */}
//           <FilterSection title="Price Range">
//             <div className="pr-2">
//               <div className="flex justify-between mb-3">
//                 <span style={{ fontSize: "10px", color: "#c8973a", fontFamily: "Georgia,serif" }}>${priceRange[0]}</span>
//                 <span style={{ fontSize: "10px", color: "#c8973a", fontFamily: "Georgia,serif" }}>${priceRange[1]}</span>
//               </div>
//               <input type="range" min={0} max={maxPrice} value={priceRange[1]}
//                 onChange={e => setPriceRange([priceRange[0], Number(e.target.value)])}
//                 className="price-slider" />
//               <div className="flex gap-2 mt-3">
//                 <input type="number" value={priceRange[0]} min={0} max={priceRange[1]}
//                   onChange={e => setPriceRange([Number(e.target.value), priceRange[1]])}
//                   style={{ width: "50%", padding: "5px 8px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(200,151,58,0.18)", borderRadius: "2px", color: "#f5ede0", fontSize: "11px", fontFamily: "Georgia,serif", outline: "none" }}
//                 />
//                 <input type="number" value={priceRange[1]} min={priceRange[0]} max={maxPrice}
//                   onChange={e => setPriceRange([priceRange[0], Number(e.target.value)])}
//                   style={{ width: "50%", padding: "5px 8px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(200,151,58,0.18)", borderRadius: "2px", color: "#f5ede0", fontSize: "11px", fontFamily: "Georgia,serif", outline: "none" }}
//                 />
//               </div>
//             </div>
//           </FilterSection>

//           {/* Special Filters */}
//           <FilterSection title="Special">
//             <div className="flex flex-col">
//               <FilterCheck label="On Sale" value="sale" checked={onlyDiscounted}
//                 onChange={() => setOnlyDiscounted(!onlyDiscounted)} />
//               <FilterCheck label="Bestsellers" value="best" checked={onlyBestseller}
//                 onChange={() => setOnlyBestseller(!onlyBestseller)} />
//             </div>
//           </FilterSection>
//         </aside>

//         {/* ── MOBILE FILTER DRAWER ── */}
//         {showFilter && (
//           <>
//             <div className="mobile-overlay lg:hidden" onClick={() => setShowFilter(false)} />
//             <div className="mobile-drawer lg:hidden">
//               <div className="flex items-center justify-between px-5 py-4" style={{ borderBottom: "1px solid rgba(200,151,58,0.15)" }}>
//                 <span style={{ fontSize: "10px", letterSpacing: "0.3em", color: "#c8973a", fontFamily: "Georgia,serif" }}>FILTERS</span>
//                 <button onClick={() => setShowFilter(false)} style={{ background: "none", border: "none", color: "#c8973a", cursor: "pointer" }}>
//                   <IconClose />
//                 </button>
//               </div>
//               <div className="px-5 py-4">
//                 {/* Same filter content as desktop */}
//                 <div className="flex flex-col gap-1 mb-5">
//                   {Object.keys(subCategoriesMap).map(cat => (
//                     <FilterCheck key={cat} label={cat} value={cat}
//                       checked={category.includes(cat)} onChange={toggleCategory} count={catCounts[cat]} />
//                   ))}
//                 </div>
//                 {category.length > 0 && (
//                   <div className="flex flex-col gap-1 mb-5">
//                     <p style={{ fontSize: "9px", letterSpacing: "0.28em", color: "#c8973a", fontFamily: "Georgia,serif", marginBottom: "8px" }}>TYPE</p>
//                     {[...new Set(category.flatMap(c => subCategoriesMap[c]))].map(sub => (
//                       <FilterCheck key={sub} label={sub} value={sub}
//                         checked={subCategory.includes(sub)} onChange={toggleSubCategory} />
//                     ))}
//                   </div>
//                 )}
//                 <FilterCheck label="On Sale" value="sale" checked={onlyDiscounted}
//                   onChange={() => setOnlyDiscounted(!onlyDiscounted)} />
//                 <FilterCheck label="Bestsellers" value="best" checked={onlyBestseller}
//                   onChange={() => setOnlyBestseller(!onlyBestseller)} />
//                 {activeFilterCount > 0 && (
//                   <button onClick={() => { clearAllFilters(); setShowFilter(false) }}
//                     className="w-full mt-5 py-2.5 text-center"
//                     style={{ border: "1px solid rgba(200,151,58,0.3)", color: "#c8973a", fontSize: "10px", letterSpacing: "0.2em", fontFamily: "Georgia,serif", background: "none", cursor: "pointer", borderRadius: "2px" }}>
//                     CLEAR ALL FILTERS
//                   </button>
//                 )}
//               </div>
//             </div>
//           </>
//         )}

//         {/* ── MAIN CONTENT ── */}
//         <main className="flex-1 px-4 sm:px-6 py-6">

//           {/* Toolbar */}
//           <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-5"
//             style={{ borderBottom: "1px solid rgba(200,151,58,0.1)" }}>

//             <div className="flex items-center gap-3 flex-wrap">
//               {/* Mobile filter toggle */}
//               <button
//                 className="lg:hidden flex items-center gap-2 px-3 py-2"
//                 onClick={() => setShowFilter(true)}
//                 style={{ border: "1px solid rgba(200,151,58,0.25)", color: "#c8973a", background: "transparent", borderRadius: "2px", fontSize: "10px", letterSpacing: "0.18em", fontFamily: "Georgia,serif", cursor: "pointer" }}
//               >
//                 <IconFilter /> FILTER
//                 {activeFilterCount > 0 && <span style={{ background: "linear-gradient(135deg,#c8973a,#f7c568)", color: "#1a0f0a", borderRadius: "50%", width: 16, height: 16, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 8, fontWeight: 700 }}>{activeFilterCount}</span>}
//               </button>

//               {/* Active filter tags */}
//               <div className="flex flex-wrap gap-1.5">
//                 {category.map(c => <FilterTag key={c} label={c} onRemove={() => toggleCategory({ target: { value: c } })} />)}
//                 {subCategory.map(s => <FilterTag key={s} label={s} onRemove={() => toggleSubCategory({ target: { value: s } })} />)}
//                 {onlyDiscounted && <FilterTag label="On Sale" onRemove={() => setOnlyDiscounted(false)} />}
//                 {onlyBestseller && <FilterTag label="Bestsellers" onRemove={() => setOnlyBestseller(false)} />}
//               </div>
//             </div>

//             <div className="flex items-center gap-3">
//               {/* View toggle */}
//               <div className="hidden sm:flex items-center gap-1">
//                 <button className={`view-btn ${gridCols === 4 ? 'active' : ''}`} onClick={() => setGridCols(4)} style={{ color: gridCols === 4 ? "#f7c568" : "#5a4030" }}><IconGrid4 /></button>
//                 <button className={`view-btn ${gridCols === 3 ? 'active' : ''}`} onClick={() => setGridCols(3)} style={{ color: gridCols === 3 ? "#f7c568" : "#5a4030" }}><IconGrid3 /></button>
//                 <button className={`view-btn ${gridCols === 'list' ? 'active' : ''}`} onClick={() => setGridCols('list')} style={{ color: gridCols === 'list' ? "#f7c568" : "#5a4030" }}><IconList /></button>
//               </div>

//               {/* Sort */}
//               <div className="relative flex items-center gap-2">
//                 <span style={{ color: "#5a4030" }}><IconSort /></span>
//                 <div className="relative">
//                   <select
//                     value={sortType}
//                     onChange={e => setSortType(e.target.value)}
//                     className="sort-select"
//                   >
//                     <option value="relavent">Relevant</option>
//                     <option value="newest">Newest</option>
//                     <option value="low-high">Price: Low → High</option>
//                     <option value="high-low">Price: High → Low</option>
//                   </select>
//                   <span className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: "#c8973a" }}>
//                     <IconChevron open={false} />
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Products Grid */}
//           {paginatedProducts.length > 0 ? (
//             <div className={`grid ${gridClass} gap-4 sm:gap-5`}>
//               {paginatedProducts.map((item, index) => (
//                 <div key={item._id} className="col-card" style={{ animationDelay: `${(index % 8) * 0.04}s` }}>
//                   <ProductItem
//                     id={item._id}
//                     name={item.name}
//                     price={item.price}
//                     image={item.image}
//                     discountPrice={item.discountPrice}
//                   />
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <div className="empty-state flex flex-col items-center justify-center py-24 gap-5">
//               <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
//                 <circle cx="24" cy="24" r="22" stroke="rgba(200,151,58,0.2)" strokeWidth="1.5" />
//                 <path d="M16 24l5 5 11-10" stroke="rgba(200,151,58,0.3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//               </svg>
//               <p style={{ fontSize: "13px", color: "#5a4030", fontStyle: "italic", fontFamily: "Georgia,serif" }}>
//                 No pieces match your current filters
//               </p>
//               <button onClick={clearAllFilters}
//                 className="px-6 py-2.5"
//                 style={{ border: "1px solid rgba(200,151,58,0.3)", color: "#c8973a", fontSize: "10px", letterSpacing: "0.2em", fontFamily: "Georgia,serif", background: "none", cursor: "pointer", borderRadius: "2px", transition: "all 0.2s" }}
//                 onMouseEnter={e => { e.target.style.background = "rgba(200,151,58,0.08)"; e.target.style.borderColor = "#c8973a" }}
//                 onMouseLeave={e => { e.target.style.background = "none"; e.target.style.borderColor = "rgba(200,151,58,0.3)" }}>
//                 CLEAR FILTERS
//               </button>
//             </div>
//           )}

//           {/* Pagination */}
//           <Pagination
//             currentPage={currentPage}
//             totalPages={totalPages}
//             onPageChange={handlePageChange}
//             total={filterProducts.length}
//             perPage={productsPerPage}
//           />
//         </main>
//       </div>
//     </div>
//   )
// }

// export default Collection




// import React, { useContext, useEffect, useState, useMemo, useRef } from 'react'
// import { ShopContext } from '../context/ShopContext'
// import Title from '../components/Title'
// import ProductItem from '../components/ProductItem'
// import { useSearchParams } from "react-router-dom"
// import { Helmet } from 'react-helmet-async'

// /* ── Premium SVG Icons ─────────────────────────── */
// const IconFilter = () => (
//   <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
//     <path d="M3 6h18M7 12h10M11 18h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
//   </svg>
// )
// const IconGrid4 = () => (
//   <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
//     <rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" />
//     <rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" />
//     <rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" />
//     <rect x="14" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" />
//   </svg>
// )
// const IconGrid3 = () => (
//   <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
//     <rect x="2" y="3" width="6" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" />
//     <rect x="9" y="3" width="6" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" />
//     <rect x="16" y="3" width="6" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" />
//     <rect x="2" y="14" width="6" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" />
//     <rect x="9" y="14" width="6" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" />
//     <rect x="16" y="14" width="6" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" />
//   </svg>
// )
// const IconList = () => (
//   <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
//     <rect x="3" y="4" width="7" height="5" rx="1" stroke="currentColor" strokeWidth="1.5" />
//     <path d="M13 5h8M13 9h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
//     <rect x="3" y="14" width="7" height="5" rx="1" stroke="currentColor" strokeWidth="1.5" />
//     <path d="M13 15h8M13 19h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
//   </svg>
// )
// const IconSort = () => (
//   <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
//     <path d="M3 6h18M6 12h12M9 18h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
//   </svg>
// )
// const IconChevron = ({ open }) => (
//   <svg width="12" height="12" viewBox="0 0 24 24" fill="none" style={{ transition: "transform 0.3s", transform: open ? "rotate(180deg)" : "rotate(0deg)" }}>
//     <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//   </svg>
// )
// const IconClose = () => (
//   <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
//     <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
//   </svg>
// )
// const IconSearch = () => (
//   <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
//     <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.5" />
//     <path d="M15 15l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
//   </svg>
// )
// const IconStar = () => (
//   <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
//     <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
//       stroke="#c8973a" strokeWidth="1.5" fill="rgba(200,151,58,0.2)" strokeLinejoin="round" />
//   </svg>
// )
// const IconCheck = () => (
//   <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
//     <path d="M5 12l5 5L20 7" stroke="#1a0f0a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
//   </svg>
// )

// /* ── Filter Checkbox ───────────────────────────── */
// const FilterCheck = ({ label, value, checked, onChange, count }) => (
//   <label className="flex items-center justify-between gap-2 cursor-pointer group py-1.5">
//     <div className="flex items-center gap-2.5">
//       <div
//         onClick={() => onChange({ target: { value } })}
//         className="w-4 h-4 border flex items-center justify-center flex-shrink-0 transition-all duration-200 cursor-pointer"
//         style={{
//           borderColor: checked ? "#c8973a" : "rgba(200,151,58,0.25)",
//           background: checked ? "linear-gradient(135deg,#c8973a,#f7c568)" : "transparent",
//           borderRadius: "2px",
//         }}
//       >
//         {checked && <IconCheck />}
//       </div>
//       <span style={{ fontSize: "11px", color: checked ? "#f7c568" : "#a08060", fontFamily: "Georgia,serif", letterSpacing: "0.04em", transition: "color 0.2s" }}>
//         {label}
//       </span>
//     </div>
//     {count !== undefined && (
//       <span style={{ fontSize: "9px", color: "#5a4030", fontFamily: "Georgia,serif" }}>({count})</span>
//     )}
//   </label>
// )

// /* ── Filter Section ────────────────────────────── */
// const FilterSection = ({ title, children, defaultOpen = true }) => {
//   const [open, setOpen] = useState(defaultOpen)
//   return (
//     <div style={{ borderBottom: "1px solid rgba(200,151,58,0.1)" }}>
//       <button
//         onClick={() => setOpen(!open)}
//         className="w-full flex items-center justify-between py-3.5 cursor-pointer bg-transparent border-none"
//         style={{ color: "#f5ede0" }}
//       >
//         <span style={{ fontSize: "9px", letterSpacing: "0.3em", fontFamily: "Georgia,serif", fontWeight: 600, color: "#c8973a", textTransform: "uppercase" }}>
//           {title}
//         </span>
//         <IconChevron open={open} />
//       </button>
//       <div style={{ maxHeight: open ? "400px" : 0, overflow: "hidden", transition: "max-height 0.35s ease", opacity: open ? 1 : 0 }}>
//         <div className="pb-4">{children}</div>
//       </div>
//     </div>
//   )
// }

// /* ── Active Filter Tag ─────────────────────────── */
// const FilterTag = ({ label, onRemove }) => (
//   <div className="flex items-center gap-1.5 px-2.5 py-1 cursor-pointer group"
//     onClick={onRemove}
//     style={{ border: "1px solid rgba(200,151,58,0.35)", borderRadius: "2px", background: "rgba(200,151,58,0.06)", transition: "all 0.2s" }}>
//     <span style={{ fontSize: "9px", color: "#c8973a", letterSpacing: "0.12em", fontFamily: "Georgia,serif" }}>{label}</span>
//     <span style={{ color: "#c8973a", opacity: 0.7 }}><IconClose /></span>
//   </div>
// )

// /* ── Pagination ────────────────────────────────── */
// const Pagination = ({ currentPage, totalPages, onPageChange, total, perPage }) => {
//   if (totalPages <= 1) return null

//   // Always show: first, last, current, and 1 neighbour on each side
//   const getPages = () => {
//     const pages = new Set()
//     pages.add(1)
//     pages.add(totalPages)
//     pages.add(currentPage)
//     if (currentPage > 1) pages.add(currentPage - 1)
//     if (currentPage < totalPages) pages.add(currentPage + 1)
//     return Array.from(pages).sort((a, b) => a - b)
//   }

//   const visiblePages = getPages()

//   // Build render list with ellipsis markers
//   const renderList = []
//   for (let i = 0; i < visiblePages.length; i++) {
//     if (i > 0 && visiblePages[i] - visiblePages[i - 1] > 1) {
//       renderList.push('...')
//     }
//     renderList.push(visiblePages[i])
//   }

//   const btnBase = {
//     border: "1px solid rgba(200,151,58,0.2)", borderRadius: "2px",
//     background: "transparent", fontFamily: "Georgia,serif", cursor: "pointer",
//     transition: "all 0.2s",
//   }

//   return (
//     <div className="flex flex-col items-center gap-4 py-10">
//       <p style={{ fontSize: "10px", color: "#7a6050", letterSpacing: "0.2em", fontFamily: "Georgia,serif" }}>
//         SHOWING {Math.min((currentPage - 1) * perPage + 1, total)}–{Math.min(currentPage * perPage, total)} OF {total} PIECES
//       </p>

//       <div className="flex items-center gap-2 flex-wrap justify-center">
//         {/* ← PREV */}
//         <button
//           onClick={() => onPageChange(currentPage - 1)}
//           disabled={currentPage === 1}
//           style={{
//             ...btnBase,
//             color: currentPage === 1 ? "#3d2010" : "#c8973a",
//             cursor: currentPage === 1 ? "not-allowed" : "pointer",
//             fontSize: "10px", letterSpacing: "0.18em",
//             padding: "8px 16px",
//           }}
//           onMouseEnter={e => { if (currentPage !== 1) e.currentTarget.style.borderColor = "#c8973a" }}
//           onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(200,151,58,0.2)" }}
//         >
//           ← PREV
//         </button>

//         {/* Page numbers with ellipsis */}
//         {renderList.map((item, i) =>
//           item === '...' ? (
//             <span key={`dots-${i}`} style={{ color: "#5a4030", fontSize: "13px", padding: "0 4px", userSelect: "none" }}>
//               ···
//             </span>
//           ) : (
//             <button
//               key={item}
//               onClick={() => onPageChange(item)}
//               style={{
//                 ...btnBase,
//                 width: 36, height: 36,
//                 display: "flex", alignItems: "center", justifyContent: "center",
//                 border: `1px solid ${item === currentPage ? "#c8973a" : "rgba(200,151,58,0.2)"}`,
//                 background: item === currentPage ? "linear-gradient(135deg,#c8973a,#f7c568)" : "transparent",
//                 color: item === currentPage ? "#1a0f0a" : "#a08060",
//                 fontSize: "12px",
//                 fontWeight: item === currentPage ? 700 : 400,
//               }}
//               onMouseEnter={e => { if (item !== currentPage) { e.currentTarget.style.borderColor = "#c8973a"; e.currentTarget.style.color = "#f7c568" } }}
//               onMouseLeave={e => { if (item !== currentPage) { e.currentTarget.style.borderColor = "rgba(200,151,58,0.2)"; e.currentTarget.style.color = "#a08060" } }}
//             >
//               {item}
//             </button>
//           )
//         )}

//         {/* NEXT → */}
//         <button
//           onClick={() => onPageChange(currentPage + 1)}
//           disabled={currentPage === totalPages}
//           style={{
//             ...btnBase,
//             color: currentPage === totalPages ? "#3d2010" : "#c8973a",
//             cursor: currentPage === totalPages ? "not-allowed" : "pointer",
//             fontSize: "10px", letterSpacing: "0.18em",
//             padding: "8px 16px",
//           }}
//           onMouseEnter={e => { if (currentPage !== totalPages) e.currentTarget.style.borderColor = "#c8973a" }}
//           onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(200,151,58,0.2)" }}
//         >
//           NEXT →
//         </button>
//       </div>

//       <div className="flex items-center gap-3">
//         <span className="block h-px w-12" style={{ background: "linear-gradient(to right,transparent,rgba(200,151,58,0.3))" }} />
//         <span className="block w-1 h-1 rotate-45 flex-shrink-0" style={{ background: "rgba(200,151,58,0.4)" }} />
//         <span className="block h-px w-12" style={{ background: "linear-gradient(to left,transparent,rgba(200,151,58,0.3))" }} />
//       </div>
//     </div>
//   )
// }

// /* ══════════════════════════════════════════════
//    COLLECTION PAGE
// ══════════════════════════════════════════════ */
// const Collection = () => {
//   const { products, search, showSearch } = useContext(ShopContext)
//   const [showFilter, setShowFilter] = useState(false)
//   const [filterProducts, setFilterProducts] = useState([])
//   const [category, setCategory] = useState([])
//   const [subCategory, setSubCategory] = useState([])
//   const [sortType, setSortType] = useState('relavent')
//   const [currentPage, setCurrentPage] = useState(1)
//   const [gridCols, setGridCols] = useState(4)   // 3 or 4 or 'list'
//   const [priceRange, setPriceRange] = useState([0, 2000])
//   const [maxPrice, setMaxPrice] = useState(2000)
//   const [onlyDiscounted, setOnlyDiscounted] = useState(false)
//   const [onlyBestseller, setOnlyBestseller] = useState(false)
//   const [productSearch, setProductSearch] = useState("")
//   const productsPerPage = 12
//   const [searchParams] = useSearchParams()
//   const gridRef = useRef(null)

//   const subCategoriesMap = {
//     Men: ["Topwear", "Bottomwear", "Winterwear"],
//     Women: ["Topwear", "Bottomwear", "Winterwear"],
//     Others: ["Cushion Cover", "Aprons", "Desk Mat", "Pillow", "Chair Cover"]
//   }

//   useEffect(() => {
//     const rawCategory = searchParams.get("category")
//     const rawSub = searchParams.get("sub")
//     if (rawCategory) setCategory([decodeURIComponent(rawCategory)])
//     if (rawSub) setSubCategory([decodeURIComponent(rawSub)])
//   }, [searchParams])

//   useEffect(() => {
//     if (products.length > 0) {
//       const max = Math.max(...products.map(p => p.price))
//       setMaxPrice(max)
//       setPriceRange([0, max])
//     }
//   }, [products])

//   const toggleCategory = (e) => {
//     const value = e.target.value
//     if (category.includes(value)) {
//       setCategory(prev => prev.filter(i => i !== value))
//       setSubCategory(prev => prev.filter(s => !subCategoriesMap[value].includes(s)))
//     } else {
//       setCategory(prev => [...prev, value])
//     }
//   }

//   const toggleSubCategory = (e) => {
//     const value = e.target.value
//     if (subCategory.includes(value)) {
//       setSubCategory(prev => prev.filter(i => i !== value))
//     } else {
//       setSubCategory(prev => [...prev, value])
//     }
//   }

//   // Count products per category
//   const catCounts = useMemo(() => {
//     const counts = {}
//     Object.keys(subCategoriesMap).forEach(cat => {
//       counts[cat] = products.filter(p => p.category === cat).length
//     })
//     return counts
//   }, [products])

//   useEffect(() => {
//     let copy = products.slice()
//     if ((showSearch && search) || productSearch) {
//       const q = productSearch || search
//       copy = copy.filter(i => i.name.toLowerCase().includes(q.toLowerCase()))
//     }
//     if (category.length > 0) copy = copy.filter(i => category.includes(i.category))
//     if (subCategory.length > 0) copy = copy.filter(i => subCategory.includes(i.subCategory))
//     copy = copy.filter(i => i.price >= priceRange[0] && i.price <= priceRange[1])
//     if (onlyDiscounted) copy = copy.filter(i => i.discountPrice > 0)
//     if (onlyBestseller) copy = copy.filter(i => i.bestseller)
//     setFilterProducts(copy)
//     setCurrentPage(1)
//   }, [category, subCategory, search, showSearch, products, priceRange, onlyDiscounted, onlyBestseller, productSearch])

//   useEffect(() => {
//     let copy = filterProducts.slice()
//     if (sortType === 'low-high') copy.sort((a, b) => a.price - b.price)
//     else if (sortType === 'high-low') copy.sort((a, b) => b.price - a.price)
//     else if (sortType === 'newest') copy = products.filter(p => filterProducts.find(f => f._id === p._id))
//     setFilterProducts(copy)
//     setCurrentPage(1)
//   }, [sortType])

//   const paginatedProducts = useMemo(() => {
//     const start = (currentPage - 1) * productsPerPage
//     return filterProducts.slice(start, start + productsPerPage)
//   }, [filterProducts, currentPage])

//   const totalPages = Math.ceil(filterProducts.length / productsPerPage)

//   const handlePageChange = (page) => {
//     if (page >= 1 && page <= totalPages) {
//       setCurrentPage(page)
//       // Scroll to top of the product grid, not the entire window
//       if (gridRef.current) {
//         const top = gridRef.current.getBoundingClientRect().top + window.scrollY - 90
//         window.scrollTo({ top, behavior: 'smooth' })
//       }
//     }
//   }

//   const clearAllFilters = () => {
//     setCategory([]); setSubCategory([])
//     setPriceRange([0, maxPrice])
//     setOnlyDiscounted(false); setOnlyBestseller(false)
//     setProductSearch(""); setSortType("relavent")
//   }

//   const activeFilterCount = category.length + subCategory.length +
//     (onlyDiscounted ? 1 : 0) + (onlyBestseller ? 1 : 0) +
//     (priceRange[0] > 0 || priceRange[1] < maxPrice ? 1 : 0)

//   const gridClass = gridCols === 4
//     ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
//     : gridCols === 3
//       ? "grid-cols-2 sm:grid-cols-3"
//       : "grid-cols-1"

//   return (
//     <div style={{ background: "#1a0f0a", minHeight: "100vh" }}>
//       <Helmet>
//         <title>Collection — D Dolly Lamb</title>
//         <meta name="description" content="Browse the full D Dolly Lamb collection" />
//       </Helmet>

//       <style>{`
//         @keyframes fadeUp {
//           from { opacity: 0; transform: translateY(16px); }
//           to   { opacity: 1; transform: translateY(0); }
//         }
//         .col-card { animation: fadeUp 0.4s ease both; }
//         .col-card:nth-child(1)  { animation-delay: 0.04s; }
//         .col-card:nth-child(2)  { animation-delay: 0.08s; }
//         .col-card:nth-child(3)  { animation-delay: 0.12s; }
//         .col-card:nth-child(4)  { animation-delay: 0.16s; }
//         .col-card:nth-child(5)  { animation-delay: 0.20s; }
//         .col-card:nth-child(6)  { animation-delay: 0.24s; }
//         .col-card:nth-child(7)  { animation-delay: 0.28s; }
//         .col-card:nth-child(8)  { animation-delay: 0.32s; }

//         .price-slider {
//           -webkit-appearance: none; appearance: none;
//           width: 100%; height: 2px;
//           background: linear-gradient(to right, #c8973a, #f7c568);
//           outline: none; border-radius: 2px;
//         }
//         .price-slider::-webkit-slider-thumb {
//           -webkit-appearance: none; appearance: none;
//           width: 14px; height: 14px;
//           border-radius: 50%;
//           background: linear-gradient(135deg, #c8973a, #f7c568);
//           cursor: pointer;
//           border: 2px solid #1a0f0a;
//           box-shadow: 0 0 6px rgba(200,151,58,0.5);
//         }
//         .sort-select {
//           background: rgba(255,255,255,0.03);
//           border: 1px solid rgba(200,151,58,0.2);
//           color: #f5ede0;
//           font-family: Georgia, serif;
//           font-size: 12px;
//           letter-spacing: 0.06em;
//           padding: 9px 32px 9px 14px;
//           border-radius: 2px;
//           outline: none;
//           cursor: pointer;
//           appearance: none;
//           transition: border-color 0.2s;
//         }
//         .sort-select:focus { border-color: #c8973a; }
//         .sort-select option { background: #1a0f0a; color: #f5ede0; }
//         .view-btn {
//           width: 34px; height: 34px;
//           display: flex; align-items: center; justify-content: center;
//           border: 1px solid rgba(200,151,58,0.18);
//           border-radius: 2px;
//           cursor: pointer; background: transparent;
//           transition: all 0.2s;
//         }
//         .view-btn.active, .view-btn:hover {
//           border-color: #c8973a;
//           background: rgba(200,151,58,0.1);
//           color: #f7c568;
//         }
//         .filter-panel {
//           background: linear-gradient(145deg, #1e110a, #160c06);
//           border: 1px solid rgba(200,151,58,0.15);
//           border-radius: 4px;
//         }
//         .mobile-overlay {
//           position: fixed; inset: 0; z-index: 999;
//           background: rgba(0,0,0,0.7); backdrop-filter: blur(4px);
//         }
//         .mobile-drawer {
//           position: fixed; top: 0; left: 0; bottom: 0;
//           width: min(340px, 90vw); z-index: 1000;
//           background: #120a05;
//           border-right: 1px solid rgba(200,151,58,0.2);
//           overflow-y: auto;
//           animation: drawerIn 0.3s cubic-bezier(0.16,1,0.3,1);
//         }
//         @keyframes drawerIn {
//           from { transform: translateX(-100%); }
//           to   { transform: translateX(0); }
//         }
//         .empty-state { animation: fadeUp 0.5s ease both; }
//       `}</style>

//       {/* ── PAGE HEADER ── */}
//       <div className="text-center px-6 py-14" style={{ borderBottom: "1px solid rgba(200,151,58,0.12)" }}>
//         <div className="flex items-center justify-center gap-3 mb-3">
//           <span className="block w-8 h-px" style={{ background: "linear-gradient(to right,transparent,#c8973a)" }} />
//           <span style={{ fontSize: "9px", letterSpacing: "0.38em", color: "#c8973a", fontFamily: "Georgia,serif" }}>D DOLLY LAMB</span>
//           <span className="block w-8 h-px" style={{ background: "linear-gradient(to left,transparent,#c8973a)" }} />
//         </div>
//         <h1 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(1.8rem,4vw,3rem)", fontWeight: 400, color: "#f7c568", letterSpacing: "0.06em", margin: "0 0 8px" }}>
//           All <span style={{ color: "#f5ede0" }}>Collections</span>
//         </h1>
//         <p style={{ fontSize: "13px", color: "#5a4030", fontStyle: "italic", fontFamily: "Georgia,serif" }}>
//           {filterProducts.length} pieces found
//         </p>
//       </div>

//       <div className="flex">

//         {/* ── DESKTOP FILTER SIDEBAR ── */}
//         <aside className="hidden lg:block w-72 flex-shrink-0 sticky top-[68px] self-start h-[calc(100vh-68px)] overflow-y-auto px-5 py-6"
//           style={{ borderRight: "1px solid rgba(200,151,58,0.1)" }}>

//           <div className="flex items-center justify-between mb-6">
//             <div className="flex items-center gap-2" style={{ color: "#c8973a" }}>
//               <IconFilter />
//               <span style={{ fontSize: "10px", letterSpacing: "0.3em", fontFamily: "Georgia,serif", fontWeight: 600 }}>FILTERS</span>
//               {activeFilterCount > 0 && (
//                 <span className="flex items-center justify-center w-4 h-4 rounded-full text-[8px] font-bold"
//                   style={{ background: "linear-gradient(135deg,#c8973a,#f7c568)", color: "#1a0f0a" }}>
//                   {activeFilterCount}
//                 </span>
//               )}
//             </div>
//             {activeFilterCount > 0 && (
//               <button onClick={clearAllFilters} style={{ fontSize: "9px", color: "#5a4030", letterSpacing: "0.15em", fontFamily: "Georgia,serif", background: "none", border: "none", cursor: "pointer", transition: "color 0.2s" }}
//                 onMouseEnter={e => e.target.style.color = "#c8973a"}
//                 onMouseLeave={e => e.target.style.color = "#5a4030"}>
//                 CLEAR ALL
//               </button>
//             )}
//           </div>

//           {/* Product Search */}
//           <div className="relative mb-5">
//             <input
//               type="text"
//               placeholder="Search products..."
//               value={productSearch}
//               onChange={e => setProductSearch(e.target.value)}
//               style={{
//                 width: "100%", padding: "9px 36px 9px 12px",
//                 background: "rgba(255,255,255,0.03)",
//                 border: "1px solid rgba(200,151,58,0.18)",
//                 borderRadius: "2px", color: "#f5ede0",
//                 fontSize: "11px", fontFamily: "Georgia,serif",
//                 fontStyle: "italic", outline: "none",
//                 transition: "border-color 0.2s",
//               }}
//               onFocus={e => e.target.style.borderColor = "#c8973a"}
//               onBlur={e => e.target.style.borderColor = "rgba(200,151,58,0.18)"}
//             />
//             <span className="absolute right-3 top-1/2 -translate-y-1/2" style={{ color: "#5a4030" }}>
//               <IconSearch />
//             </span>
//           </div>

//           {/* Categories */}
//           <FilterSection title="Category">
//             <div className="flex flex-col">
//               {Object.keys(subCategoriesMap).map(cat => (
//                 <FilterCheck key={cat} label={cat} value={cat}
//                   checked={category.includes(cat)}
//                   onChange={toggleCategory}
//                   count={catCounts[cat]}
//                 />
//               ))}
//             </div>
//           </FilterSection>

//           {/* Subcategories */}
//           {category.length > 0 && (
//             <FilterSection title="Type">
//               <div className="flex flex-col">
//                 {[...new Set(category.flatMap(c => subCategoriesMap[c]))].map(sub => (
//                   <FilterCheck key={sub} label={sub} value={sub}
//                     checked={subCategory.includes(sub)}
//                     onChange={toggleSubCategory}
//                   />
//                 ))}
//               </div>
//             </FilterSection>
//           )}

//           {/* Price Range */}
//           <FilterSection title="Price Range">
//             <div className="pr-2">
//               <div className="flex justify-between mb-3">
//                 <span style={{ fontSize: "10px", color: "#c8973a", fontFamily: "Georgia,serif" }}>${priceRange[0]}</span>
//                 <span style={{ fontSize: "10px", color: "#c8973a", fontFamily: "Georgia,serif" }}>${priceRange[1]}</span>
//               </div>
//               <input type="range" min={0} max={maxPrice} value={priceRange[1]}
//                 onChange={e => setPriceRange([priceRange[0], Number(e.target.value)])}
//                 className="price-slider" />
//               <div className="flex gap-2 mt-3">
//                 <input type="number" value={priceRange[0]} min={0} max={priceRange[1]}
//                   onChange={e => setPriceRange([Number(e.target.value), priceRange[1]])}
//                   style={{ width: "50%", padding: "5px 8px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(200,151,58,0.18)", borderRadius: "2px", color: "#f5ede0", fontSize: "11px", fontFamily: "Georgia,serif", outline: "none" }}
//                 />
//                 <input type="number" value={priceRange[1]} min={priceRange[0]} max={maxPrice}
//                   onChange={e => setPriceRange([priceRange[0], Number(e.target.value)])}
//                   style={{ width: "50%", padding: "5px 8px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(200,151,58,0.18)", borderRadius: "2px", color: "#f5ede0", fontSize: "11px", fontFamily: "Georgia,serif", outline: "none" }}
//                 />
//               </div>
//             </div>
//           </FilterSection>

//           {/* Special Filters */}
//           <FilterSection title="Special">
//             <div className="flex flex-col">
//               <FilterCheck label="On Sale" value="sale" checked={onlyDiscounted}
//                 onChange={() => setOnlyDiscounted(!onlyDiscounted)} />
//               <FilterCheck label="Bestsellers" value="best" checked={onlyBestseller}
//                 onChange={() => setOnlyBestseller(!onlyBestseller)} />
//             </div>
//           </FilterSection>
//         </aside>

//         {/* ── MOBILE FILTER DRAWER ── */}
//         {showFilter && (
//           <>
//             <div className="mobile-overlay lg:hidden" onClick={() => setShowFilter(false)} />
//             <div className="mobile-drawer lg:hidden">
//               <div className="flex items-center justify-between px-5 py-4" style={{ borderBottom: "1px solid rgba(200,151,58,0.15)" }}>
//                 <span style={{ fontSize: "10px", letterSpacing: "0.3em", color: "#c8973a", fontFamily: "Georgia,serif" }}>FILTERS</span>
//                 <button onClick={() => setShowFilter(false)} style={{ background: "none", border: "none", color: "#c8973a", cursor: "pointer" }}>
//                   <IconClose />
//                 </button>
//               </div>
//               <div className="px-5 py-4">
//                 {/* Same filter content as desktop */}
//                 <div className="flex flex-col gap-1 mb-5">
//                   {Object.keys(subCategoriesMap).map(cat => (
//                     <FilterCheck key={cat} label={cat} value={cat}
//                       checked={category.includes(cat)} onChange={toggleCategory} count={catCounts[cat]} />
//                   ))}
//                 </div>
//                 {category.length > 0 && (
//                   <div className="flex flex-col gap-1 mb-5">
//                     <p style={{ fontSize: "9px", letterSpacing: "0.28em", color: "#c8973a", fontFamily: "Georgia,serif", marginBottom: "8px" }}>TYPE</p>
//                     {[...new Set(category.flatMap(c => subCategoriesMap[c]))].map(sub => (
//                       <FilterCheck key={sub} label={sub} value={sub}
//                         checked={subCategory.includes(sub)} onChange={toggleSubCategory} />
//                     ))}
//                   </div>
//                 )}
//                 <FilterCheck label="On Sale" value="sale" checked={onlyDiscounted}
//                   onChange={() => setOnlyDiscounted(!onlyDiscounted)} />
//                 <FilterCheck label="Bestsellers" value="best" checked={onlyBestseller}
//                   onChange={() => setOnlyBestseller(!onlyBestseller)} />
//                 {activeFilterCount > 0 && (
//                   <button onClick={() => { clearAllFilters(); setShowFilter(false) }}
//                     className="w-full mt-5 py-2.5 text-center"
//                     style={{ border: "1px solid rgba(200,151,58,0.3)", color: "#c8973a", fontSize: "10px", letterSpacing: "0.2em", fontFamily: "Georgia,serif", background: "none", cursor: "pointer", borderRadius: "2px" }}>
//                     CLEAR ALL FILTERS
//                   </button>
//                 )}
//               </div>
//             </div>
//           </>
//         )}

//         {/* ── MAIN CONTENT ── */}
//         <main className="flex-1 px-4 sm:px-6 py-6">

//           {/* Toolbar */}
//           <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-5"
//             style={{ borderBottom: "1px solid rgba(200,151,58,0.1)" }}>

//             <div className="flex items-center gap-3 flex-wrap">
//               {/* Mobile filter toggle */}
//               <button
//                 className="lg:hidden flex items-center gap-2 px-3 py-2"
//                 onClick={() => setShowFilter(true)}
//                 style={{ border: "1px solid rgba(200,151,58,0.25)", color: "#c8973a", background: "transparent", borderRadius: "2px", fontSize: "10px", letterSpacing: "0.18em", fontFamily: "Georgia,serif", cursor: "pointer" }}
//               >
//                 <IconFilter /> FILTER
//                 {activeFilterCount > 0 && <span style={{ background: "linear-gradient(135deg,#c8973a,#f7c568)", color: "#1a0f0a", borderRadius: "50%", width: 16, height: 16, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 8, fontWeight: 700 }}>{activeFilterCount}</span>}
//               </button>

//               {/* Active filter tags */}
//               <div className="flex flex-wrap gap-1.5">
//                 {category.map(c => <FilterTag key={c} label={c} onRemove={() => toggleCategory({ target: { value: c } })} />)}
//                 {subCategory.map(s => <FilterTag key={s} label={s} onRemove={() => toggleSubCategory({ target: { value: s } })} />)}
//                 {onlyDiscounted && <FilterTag label="On Sale" onRemove={() => setOnlyDiscounted(false)} />}
//                 {onlyBestseller && <FilterTag label="Bestsellers" onRemove={() => setOnlyBestseller(false)} />}
//               </div>
//             </div>

//             <div className="flex items-center gap-3">
//               {/* View toggle */}
//               <div className="hidden sm:flex items-center gap-1">
//                 <button className={`view-btn ${gridCols === 4 ? 'active' : ''}`} onClick={() => setGridCols(4)} style={{ color: gridCols === 4 ? "#f7c568" : "#5a4030" }}><IconGrid4 /></button>
//                 <button className={`view-btn ${gridCols === 3 ? 'active' : ''}`} onClick={() => setGridCols(3)} style={{ color: gridCols === 3 ? "#f7c568" : "#5a4030" }}><IconGrid3 /></button>
//                 <button className={`view-btn ${gridCols === 'list' ? 'active' : ''}`} onClick={() => setGridCols('list')} style={{ color: gridCols === 'list' ? "#f7c568" : "#5a4030" }}><IconList /></button>
//               </div>

//               {/* Sort */}
//               <div className="relative flex items-center gap-2">
//                 <span style={{ color: "#5a4030" }}><IconSort /></span>
//                 <div className="relative">
//                   <select
//                     value={sortType}
//                     onChange={e => setSortType(e.target.value)}
//                     className="sort-select"
//                   >
//                     <option value="relavent">Relevant</option>
//                     <option value="newest">Newest</option>
//                     <option value="low-high">Price: Low → High</option>
//                     <option value="high-low">Price: High → Low</option>
//                   </select>
//                   <span className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: "#c8973a" }}>
//                     <IconChevron open={false} />
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Products Grid */}
//           {paginatedProducts.length > 0 ? (
//             <div ref={gridRef} className={`grid ${gridClass} gap-4 sm:gap-5`}>
//               {paginatedProducts.map((item, index) => (
//                 <div key={item._id} className="col-card" style={{ animationDelay: `${(index % 8) * 0.04}s` }}>
//                   <ProductItem
//                     id={item._id}
//                     name={item.name}
//                     price={item.price}
//                     image={item.image}
//                     discountPrice={item.discountPrice}
//                   />
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <div className="empty-state flex flex-col items-center justify-center py-24 gap-5">
//               <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
//                 <circle cx="24" cy="24" r="22" stroke="rgba(200,151,58,0.2)" strokeWidth="1.5" />
//                 <path d="M16 24l5 5 11-10" stroke="rgba(200,151,58,0.3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//               </svg>
//               <p style={{ fontSize: "13px", color: "#5a4030", fontStyle: "italic", fontFamily: "Georgia,serif" }}>
//                 No pieces match your current filters
//               </p>
//               <button onClick={clearAllFilters}
//                 className="px-6 py-2.5"
//                 style={{ border: "1px solid rgba(200,151,58,0.3)", color: "#c8973a", fontSize: "10px", letterSpacing: "0.2em", fontFamily: "Georgia,serif", background: "none", cursor: "pointer", borderRadius: "2px", transition: "all 0.2s" }}
//                 onMouseEnter={e => { e.target.style.background = "rgba(200,151,58,0.08)"; e.target.style.borderColor = "#c8973a" }}
//                 onMouseLeave={e => { e.target.style.background = "none"; e.target.style.borderColor = "rgba(200,151,58,0.3)" }}>
//                 CLEAR FILTERS
//               </button>
//             </div>
//           )}

//           {/* Pagination */}
//           <Pagination
//             currentPage={currentPage}
//             totalPages={totalPages}
//             onPageChange={handlePageChange}
//             total={filterProducts.length}
//             perPage={productsPerPage}
//           />
//         </main>
//       </div>
//     </div>
//   )
// }

// export default Collection




import React, { useContext, useEffect, useState, useMemo, useRef } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'
import ProductItem from '../components/ProductItem'
import { useSearchParams } from "react-router-dom"
import { Helmet } from 'react-helmet-async'

/* ── Premium SVG Icons ─────────────────────────── */
const IconFilter = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
    <path d="M3 6h18M7 12h10M11 18h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)
const IconGrid4 = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" />
    <rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" />
    <rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" />
    <rect x="14" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" />
  </svg>
)
const IconGrid3 = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
    <rect x="2" y="3" width="6" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" />
    <rect x="9" y="3" width="6" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" />
    <rect x="16" y="3" width="6" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" />
    <rect x="2" y="14" width="6" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" />
    <rect x="9" y="14" width="6" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" />
    <rect x="16" y="14" width="6" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" />
  </svg>
)
const IconList = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="4" width="7" height="5" rx="1" stroke="currentColor" strokeWidth="1.5" />
    <path d="M13 5h8M13 9h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <rect x="3" y="14" width="7" height="5" rx="1" stroke="currentColor" strokeWidth="1.5" />
    <path d="M13 15h8M13 19h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)
const IconSort = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
    <path d="M3 6h18M6 12h12M9 18h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)
const IconChevron = ({ open }) => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" style={{ transition: "transform 0.3s", transform: open ? "rotate(180deg)" : "rotate(0deg)" }}>
    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)
const IconClose = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
    <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)
const IconSearch = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
    <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.5" />
    <path d="M15 15l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)
const IconStar = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
      stroke="#c8973a" strokeWidth="1.5" fill="rgba(200,151,58,0.2)" strokeLinejoin="round" />
  </svg>
)
const IconCheck = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
    <path d="M5 12l5 5L20 7" stroke="#1a0f0a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

/* ── Filter Checkbox ───────────────────────────── */
const FilterCheck = ({ label, value, checked, onChange, count }) => (
  <label className="flex items-center justify-between gap-2 cursor-pointer group py-1.5">
    <div className="flex items-center gap-2.5">
      <div
        onClick={() => onChange({ target: { value } })}
        className="w-4 h-4 border flex items-center justify-center flex-shrink-0 transition-all duration-200 cursor-pointer"
        style={{
          borderColor: checked ? "#c8973a" : "rgba(200,151,58,0.25)",
          background: checked ? "linear-gradient(135deg,#c8973a,#f7c568)" : "transparent",
          borderRadius: "2px",
        }}
      >
        {checked && <IconCheck />}
      </div>
      <span style={{ fontSize: "11px", color: checked ? "#f7c568" : "#a08060", fontFamily: "Georgia,serif", letterSpacing: "0.04em", transition: "color 0.2s" }}>
        {label}
      </span>
    </div>
    {count !== undefined && (
      <span style={{ fontSize: "9px", color: "#5a4030", fontFamily: "Georgia,serif" }}>({count})</span>
    )}
  </label>
)

/* ── Filter Section ────────────────────────────── */
const FilterSection = ({ title, children, defaultOpen = true }) => {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div style={{ borderBottom: "1px solid rgba(200,151,58,0.1)" }}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-3.5 cursor-pointer bg-transparent border-none"
        style={{ color: "#f5ede0" }}
      >
        <span style={{ fontSize: "9px", letterSpacing: "0.3em", fontFamily: "Georgia,serif", fontWeight: 600, color: "#c8973a", textTransform: "uppercase" }}>
          {title}
        </span>
        <IconChevron open={open} />
      </button>
      <div style={{ maxHeight: open ? "400px" : 0, overflow: "hidden", transition: "max-height 0.35s ease", opacity: open ? 1 : 0 }}>
        <div className="pb-4">{children}</div>
      </div>
    </div>
  )
}

/* ── Active Filter Tag ─────────────────────────── */
const FilterTag = ({ label, onRemove }) => (
  <div className="flex items-center gap-1.5 px-2.5 py-1 cursor-pointer group"
    onClick={onRemove}
    style={{ border: "1px solid rgba(200,151,58,0.35)", borderRadius: "2px", background: "rgba(200,151,58,0.06)", transition: "all 0.2s" }}>
    <span style={{ fontSize: "9px", color: "#c8973a", letterSpacing: "0.12em", fontFamily: "Georgia,serif" }}>{label}</span>
    <span style={{ color: "#c8973a", opacity: 0.7 }}><IconClose /></span>
  </div>
)

/* ── Load More Section ─────────────────────────── */
const LoadMore = ({ shown, total, onLoadMore, loading }) => {
  if (shown >= total) {
    return (
      <div className="flex flex-col items-center gap-3 py-10">
        <div className="flex items-center gap-3">
          <span className="block h-px w-16" style={{ background: "linear-gradient(to right,transparent,rgba(200,151,58,0.35))" }} />
          <span style={{ fontSize: "9px", color: "#5a4030", letterSpacing: "0.25em", fontFamily: "Georgia,serif" }}>ALL {total} PIECES SHOWN</span>
          <span className="block h-px w-16" style={{ background: "linear-gradient(to left,transparent,rgba(200,151,58,0.35))" }} />
        </div>
      </div>
    )
  }

  const pct = Math.round((shown / total) * 100)

  return (
    <div className="flex flex-col items-center gap-5 py-10">
      {/* Progress bar */}
      <div className="w-full max-w-xs">
        <div className="flex justify-between mb-2">
          <span style={{ fontSize: "9px", color: "#7a6050", letterSpacing: "0.2em", fontFamily: "Georgia,serif" }}>
            {shown} OF {total} PIECES
          </span>
          <span style={{ fontSize: "9px", color: "#c8973a", letterSpacing: "0.1em", fontFamily: "Georgia,serif" }}>
            {pct}%
          </span>
        </div>
        <div className="w-full h-px" style={{ background: "rgba(200,151,58,0.12)", position: "relative", borderRadius: "2px" }}>
          <div style={{
            position: "absolute", top: 0, left: 0, height: "100%",
            width: `${pct}%`,
            background: "linear-gradient(to right, #c8973a, #f7c568)",
            borderRadius: "2px",
            transition: "width 0.6s ease",
            boxShadow: "0 0 8px rgba(200,151,58,0.5)",
          }} />
        </div>
      </div>

      {/* Load More button */}
      <button
        onClick={onLoadMore}
        disabled={loading}
        style={{
          padding: "13px 48px",
          border: "1px solid rgba(200,151,58,0.4)",
          borderRadius: "2px",
          background: loading ? "rgba(200,151,58,0.06)" : "transparent",
          color: "#c8973a",
          fontSize: "10px",
          letterSpacing: "0.28em",
          fontFamily: "Georgia,serif",
          cursor: loading ? "not-allowed" : "pointer",
          display: "flex", alignItems: "center", gap: "10px",
          transition: "all 0.25s",
          position: "relative", overflow: "hidden",
        }}
        onMouseEnter={e => { if (!loading) { e.currentTarget.style.background = "rgba(200,151,58,0.1)"; e.currentTarget.style.borderColor = "#c8973a"; e.currentTarget.style.color = "#f7c568" } }}
        onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "rgba(200,151,58,0.4)"; e.currentTarget.style.color = "#c8973a" }}
      >
        {loading ? (
          <>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ animation: "spin 0.8s linear infinite" }}>
              <circle cx="12" cy="12" r="9" stroke="rgba(200,151,58,0.3)" strokeWidth="2" />
              <path d="M12 3a9 9 0 0 1 9 9" stroke="#c8973a" strokeWidth="2" strokeLinecap="round" />
            </svg>
            LOADING...
          </>
        ) : (
          <>
            LOAD MORE
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
              <path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </>
        )}
      </button>

      <span style={{ fontSize: "9px", color: "#3d2010", letterSpacing: "0.15em", fontFamily: "Georgia,serif" }}>
        {total - shown} MORE PIECES TO EXPLORE
      </span>
    </div>
  )
}

/* ══════════════════════════════════════════════
   COLLECTION PAGE
══════════════════════════════════════════════ */
const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext)
  const [showFilter, setShowFilter] = useState(false)
  const [filterProducts, setFilterProducts] = useState([])
  const [category, setCategory] = useState([])
  const [subCategory, setSubCategory] = useState([])
  const [sortType, setSortType] = useState('relavent')
  const [gridCols, setGridCols] = useState(4)   // 3 or 4 or 'list'
  const [priceRange, setPriceRange] = useState([0, 2000])
  const [maxPrice, setMaxPrice] = useState(2000)
  const [onlyDiscounted, setOnlyDiscounted] = useState(false)
  const [onlyBestseller, setOnlyBestseller] = useState(false)
  const [productSearch, setProductSearch] = useState("")
  const [visibleCount, setVisibleCount] = useState(12)  // how many products shown so far
  const [loadingMore, setLoadingMore] = useState(false)
  const productsPerPage = 12
  const loadMoreRef = useRef(null)  // sentinel div at bottom of last batch
  const [searchParams] = useSearchParams()
  const gridRef = useRef(null)

  // const subCategoriesMap = {
  //   Men: ["Topwear", "Bottomwear", "Winterwear"],
  //   Women: ["Topwear", "Bottomwear", "Winterwear"],
  //   Others: ["Cushion Cover", "Aprons", "Desk Mat", "Pillow", "Chair Cover"]
  // }

  const subCategoriesMap = {
    Men: [
      "Biker Jacket",
      "Bomber Biker Jacket",
      "Moto Biker Jacket",
    ],

    Women: [
      // "Jackets",
      "Bomber Biker Jacket",
      "Moto Biker Jacket",
      "Racing Coat",
      "Women Winter Wear",
      "Women Night Dress",
      "Leather Pencil Skirt",
      "Leather Full Skirt",
      "Slim Bodycon Skirt",
    ],

    Others: [
      "Cushion Cover",
      "Aprons",
      "Desk Mat",
      "Pillow",
      "Chair Cover"
    ]
  }

  useEffect(() => {
    const rawCategory = searchParams.get("category")
    const rawSub = searchParams.get("sub")
    if (rawCategory) setCategory([decodeURIComponent(rawCategory)])
    if (rawSub) setSubCategory([decodeURIComponent(rawSub)])
  }, [searchParams])

  useEffect(() => {
    if (products.length > 0) {
      const max = Math.max(...products.map(p => p.price))
      setMaxPrice(max)
      setPriceRange([0, max])
    }
  }, [products])

  const toggleCategory = (e) => {
    const value = e.target.value
    if (category.includes(value)) {
      setCategory(prev => prev.filter(i => i !== value))
      setSubCategory(prev => prev.filter(s => !subCategoriesMap[value].includes(s)))
    } else {
      setCategory(prev => [...prev, value])
    }
  }

  const toggleSubCategory = (e) => {
    const value = e.target.value
    if (subCategory.includes(value)) {
      setSubCategory(prev => prev.filter(i => i !== value))
    } else {
      setSubCategory(prev => [...prev, value])
    }
  }

  // Count products per category
  const catCounts = useMemo(() => {
    const counts = {}
    Object.keys(subCategoriesMap).forEach(cat => {
      counts[cat] = products.filter(p => p.category === cat).length
    })
    return counts
  }, [products])

  useEffect(() => {
    let copy = products.slice()
    if ((showSearch && search) || productSearch) {
      const q = productSearch || search
      copy = copy.filter(i => i.name.toLowerCase().includes(q.toLowerCase()))
    }
    if (category.length > 0) copy = copy.filter(i => category.includes(i.category))
    // if (subCategory.length > 0) copy = copy.filter(i => subCategory.includes(i.subCategory))
    if (subCategory.length > 0) {
      copy = copy.filter(p =>
        subCategory.some(sub =>
          p.subCategory === sub ||
          p.name.toLowerCase().includes(sub.toLowerCase())
        )
      )
    }
    copy = copy.filter(i => i.price >= priceRange[0] && i.price <= priceRange[1])
    if (onlyDiscounted) copy = copy.filter(i => i.discountPrice > 0)
    if (onlyBestseller) copy = copy.filter(i => i.bestseller)
    setFilterProducts(copy)
    setVisibleCount(12)
  }, [category, subCategory, search, showSearch, products, priceRange, onlyDiscounted, onlyBestseller, productSearch])

  useEffect(() => {
    // let copy = filterProducts.slice()
    let copy = filterProducts.slice()
    if (subCategory.length > 0) {
      const sub = subCategory[0].toLowerCase()

      copy.sort((a, b) => {
        const aMatch = a.name.toLowerCase().includes(sub)
        const bMatch = b.name.toLowerCase().includes(sub)

        if (aMatch && !bMatch) return -1
        if (!aMatch && bMatch) return 1
        return 0
      })
    }
    if (sortType === 'low-high') copy.sort((a, b) => a.price - b.price)
    else if (sortType === 'high-low') copy.sort((a, b) => b.price - a.price)
    else if (sortType === 'newest') copy = products.filter(p => filterProducts.find(f => f._id === p._id))
    setFilterProducts(copy)
    setVisibleCount(12)
  }, [sortType])

  // Products currently shown (accumulates as user loads more)
  const shownProducts = useMemo(() => filterProducts.slice(0, visibleCount), [filterProducts, visibleCount])
  const hasMore = visibleCount < filterProducts.length

  const loadMore = () => {
    if (loadingMore || !hasMore) return
    setLoadingMore(true)
    // Small delay so the spinner is visible — feels natural
    setTimeout(() => {
      setVisibleCount(prev => prev + productsPerPage)
      setLoadingMore(false)
    }, 600)
  }

  const clearAllFilters = () => {
    setCategory([]); setSubCategory([])
    setPriceRange([0, maxPrice])
    setOnlyDiscounted(false); setOnlyBestseller(false)
    setProductSearch(""); setSortType("relavent")
    setVisibleCount(12)
  }

  const activeFilterCount = category.length + subCategory.length +
    (onlyDiscounted ? 1 : 0) + (onlyBestseller ? 1 : 0) +
    (priceRange[0] > 0 || priceRange[1] < maxPrice ? 1 : 0)

  const gridClass = gridCols === 4
    ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
    : gridCols === 3
      ? "grid-cols-2 sm:grid-cols-3"
      : "grid-cols-1"

  return (
    <div style={{ background: "#1a0f0a", minHeight: "100vh" }}>
      <Helmet>
        <title>Collection — D Dolly Lamb</title>
        <meta name="description" content="Browse the full D Dolly Lamb collection" />
      </Helmet>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        .col-card { animation: fadeUp 0.4s ease both; }
        .col-card:nth-child(1)  { animation-delay: 0.04s; }
        .col-card:nth-child(2)  { animation-delay: 0.08s; }
        .col-card:nth-child(3)  { animation-delay: 0.12s; }
        .col-card:nth-child(4)  { animation-delay: 0.16s; }
        .col-card:nth-child(5)  { animation-delay: 0.20s; }
        .col-card:nth-child(6)  { animation-delay: 0.24s; }
        .col-card:nth-child(7)  { animation-delay: 0.28s; }
        .col-card:nth-child(8)  { animation-delay: 0.32s; }

        .price-slider {
          -webkit-appearance: none; appearance: none;
          width: 100%; height: 2px;
          background: linear-gradient(to right, #c8973a, #f7c568);
          outline: none; border-radius: 2px;
        }
        .price-slider::-webkit-slider-thumb {
          -webkit-appearance: none; appearance: none;
          width: 14px; height: 14px;
          border-radius: 50%;
          background: linear-gradient(135deg, #c8973a, #f7c568);
          cursor: pointer;
          border: 2px solid #1a0f0a;
          box-shadow: 0 0 6px rgba(200,151,58,0.5);
        }
        .sort-select {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(200,151,58,0.2);
          color: #f5ede0;
          font-family: Georgia, serif;
          font-size: 12px;
          letter-spacing: 0.06em;
          padding: 9px 32px 9px 14px;
          border-radius: 2px;
          outline: none;
          cursor: pointer;
          appearance: none;
          transition: border-color 0.2s;
        }
        .sort-select:focus { border-color: #c8973a; }
        .sort-select option { background: #1a0f0a; color: #f5ede0; }
        .view-btn {
          width: 34px; height: 34px;
          display: flex; align-items: center; justify-content: center;
          border: 1px solid rgba(200,151,58,0.18);
          border-radius: 2px;
          cursor: pointer; background: transparent;
          transition: all 0.2s;
        }
        .view-btn.active, .view-btn:hover {
          border-color: #c8973a;
          background: rgba(200,151,58,0.1);
          color: #f7c568;
        }
        .filter-panel {
          background: linear-gradient(145deg, #1e110a, #160c06);
          border: 1px solid rgba(200,151,58,0.15);
          border-radius: 4px;
        }
        .mobile-overlay {
          position: fixed; inset: 0; z-index: 999;
          background: rgba(0,0,0,0.7); backdrop-filter: blur(4px);
        }
        .mobile-drawer {
          position: fixed; top: 68px; left: 0; bottom: 0;
          width: min(340px, 90vw); z-index: 1000;
          background: #120a05;
          border-right: 1px solid rgba(200,151,58,0.2);
          overflow-y: auto;
          animation: drawerIn 0.3s cubic-bezier(0.16,1,0.3,1);
        }
        @keyframes drawerIn {
          from { transform: translateX(-100%); }
          to   { transform: translateX(0); }
        }
        .empty-state { animation: fadeUp 0.5s ease both; }
      `}</style>

      {/* ── PAGE HEADER ── */}
      <div className="text-center px-6 py-14" style={{ borderBottom: "1px solid rgba(200,151,58,0.12)" }}>
        <div className="flex items-center justify-center gap-3 mb-3">
          <span className="block w-8 h-px" style={{ background: "linear-gradient(to right,transparent,#c8973a)" }} />
          <span style={{ fontSize: "9px", letterSpacing: "0.38em", color: "#c8973a", fontFamily: "Georgia,serif" }}>D DOLLY LAMB</span>
          <span className="block w-8 h-px" style={{ background: "linear-gradient(to left,transparent,#c8973a)" }} />
        </div>
        <h1 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(1.8rem,4vw,3rem)", fontWeight: 400, color: "#f7c568", letterSpacing: "0.06em", margin: "0 0 8px" }}>
          All <span style={{ color: "#f5ede0" }}>Collections</span>
        </h1>
        <p style={{ fontSize: "13px", color: "#5a4030", fontStyle: "italic", fontFamily: "Georgia,serif" }}>
          {filterProducts.length} pieces found
        </p>
      </div>

      <div className="flex">

        {/* ── DESKTOP FILTER SIDEBAR ── */}
        <aside className="hidden lg:block w-72 flex-shrink-0 sticky top-[68px] self-start h-[calc(100vh-68px)] overflow-y-auto px-5 py-6"
          style={{ borderRight: "1px solid rgba(200,151,58,0.1)" }}>

          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2" style={{ color: "#c8973a" }}>
              <IconFilter />
              <span style={{ fontSize: "10px", letterSpacing: "0.3em", fontFamily: "Georgia,serif", fontWeight: 600 }}>FILTERS</span>
              {activeFilterCount > 0 && (
                <span className="flex items-center justify-center w-4 h-4 rounded-full text-[8px] font-bold"
                  style={{ background: "linear-gradient(135deg,#c8973a,#f7c568)", color: "#1a0f0a" }}>
                  {activeFilterCount}
                </span>
              )}
            </div>
            {activeFilterCount > 0 && (
              <button onClick={clearAllFilters} style={{ fontSize: "9px", color: "#5a4030", letterSpacing: "0.15em", fontFamily: "Georgia,serif", background: "none", border: "none", cursor: "pointer", transition: "color 0.2s" }}
                onMouseEnter={e => e.target.style.color = "#c8973a"}
                onMouseLeave={e => e.target.style.color = "#5a4030"}>
                CLEAR ALL
              </button>
            )}
          </div>

          {/* Product Search */}
          <div className="relative mb-5">
            <input
              type="text"
              placeholder="Search products..."
              value={productSearch}
              onChange={e => setProductSearch(e.target.value)}
              style={{
                width: "100%", padding: "9px 36px 9px 12px",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(200,151,58,0.18)",
                borderRadius: "2px", color: "#f5ede0",
                fontSize: "11px", fontFamily: "Montserrat,serif",
                outline: "none",
                transition: "border-color 0.2s",
              }}
              onFocus={e => e.target.style.borderColor = "#c8973a"}
              onBlur={e => e.target.style.borderColor = "rgba(200,151,58,0.18)"}
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2" style={{ color: "#5a4030" }}>
              <IconSearch />
            </span>
          </div>

          {/* Categories */}
          <FilterSection title="Category">
            <div className="flex flex-col">
              {Object.keys(subCategoriesMap).map(cat => (
                <FilterCheck key={cat} label={cat} value={cat}
                  checked={category.includes(cat)}
                  onChange={toggleCategory}
                  count={catCounts[cat]}
                />
              ))}
            </div>
          </FilterSection>

          {/* Subcategories */}
          {category.length > 0 && (
            <FilterSection title="Type">
              <div className="flex flex-col">
                {[...new Set(category.flatMap(c => subCategoriesMap[c]))].map(sub => (
                  <FilterCheck key={sub} label={sub} value={sub}
                    checked={subCategory.includes(sub)}
                    onChange={toggleSubCategory}
                  />
                ))}
              </div>
            </FilterSection>
          )}

          {/* Price Range */}
          <FilterSection title="Price Range">
            <div className="pr-2">
              <div className="flex justify-between mb-3">
                <span style={{ fontSize: "10px", color: "#c8973a", fontFamily: "Georgia,serif" }}>${priceRange[0]}</span>
                <span style={{ fontSize: "10px", color: "#c8973a", fontFamily: "Georgia,serif" }}>${priceRange[1]}</span>
              </div>
              <input type="range" min={0} max={maxPrice} value={priceRange[1]}
                onChange={e => setPriceRange([priceRange[0], Number(e.target.value)])}
                className="price-slider" />
              <div className="flex gap-2 mt-3">
                <input type="number" value={priceRange[0]} min={0} max={priceRange[1]}
                  onChange={e => setPriceRange([Number(e.target.value), priceRange[1]])}
                  style={{ width: "50%", padding: "5px 8px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(200,151,58,0.18)", borderRadius: "2px", color: "#f5ede0", fontSize: "11px", fontFamily: "Georgia,serif", outline: "none" }}
                />
                <input type="number" value={priceRange[1]} min={priceRange[0]} max={maxPrice}
                  onChange={e => setPriceRange([priceRange[0], Number(e.target.value)])}
                  style={{ width: "50%", padding: "5px 8px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(200,151,58,0.18)", borderRadius: "2px", color: "#f5ede0", fontSize: "11px", fontFamily: "Georgia,serif", outline: "none" }}
                />
              </div>
            </div>
          </FilterSection>

          {/* Special Filters */}
          <FilterSection title="Special">
            <div className="flex flex-col">
              <FilterCheck label="On Sale" value="sale" checked={onlyDiscounted}
                onChange={() => setOnlyDiscounted(!onlyDiscounted)} />
              <FilterCheck label="Bestsellers" value="best" checked={onlyBestseller}
                onChange={() => setOnlyBestseller(!onlyBestseller)} />
            </div>
          </FilterSection>
        </aside>

        {/* ── MOBILE FILTER DRAWER ── */}
        {showFilter && (
          <>
            <div className="mobile-overlay lg:hidden" onClick={() => setShowFilter(false)} />
            <div className="mobile-drawer lg:hidden">
              <div className="flex items-center justify-between px-5 py-4" style={{ borderBottom: "1px solid rgba(200,151,58,0.15)" }}>
                <span style={{ fontSize: "10px", letterSpacing: "0.3em", color: "#c8973a", fontFamily: "Georgia,serif" }}>FILTERS</span>
                <button onClick={() => setShowFilter(false)} style={{ background: "none", border: "none", color: "#c8973a", cursor: "pointer" }}>
                  <IconClose />
                </button>
              </div>
              <div className="px-5 py-4">
                {/* Same filter content as desktop */}
                <div className="flex flex-col gap-1 mb-5">
                  {Object.keys(subCategoriesMap).map(cat => (
                    <FilterCheck key={cat} label={cat} value={cat}
                      checked={category.includes(cat)} onChange={toggleCategory} count={catCounts[cat]} />
                  ))}
                </div>
                {category.length > 0 && (
                  <div className="flex flex-col gap-1 mb-5">
                    <p style={{ fontSize: "9px", letterSpacing: "0.28em", color: "#c8973a", fontFamily: "Georgia,serif", marginBottom: "8px" }}>TYPE</p>
                    {[...new Set(category.flatMap(c => subCategoriesMap[c]))].map(sub => (
                      <FilterCheck key={sub} label={sub} value={sub}
                        checked={subCategory.includes(sub)} onChange={toggleSubCategory} />
                    ))}
                  </div>
                )}
                <FilterCheck label="On Sale" value="sale" checked={onlyDiscounted}
                  onChange={() => setOnlyDiscounted(!onlyDiscounted)} />
                <FilterCheck label="Bestsellers" value="best" checked={onlyBestseller}
                  onChange={() => setOnlyBestseller(!onlyBestseller)} />
                {activeFilterCount > 0 && (
                  <button onClick={() => { clearAllFilters(); setShowFilter(false) }}
                    className="w-full mt-5 py-2.5 text-center"
                    style={{ border: "1px solid rgba(200,151,58,0.3)", color: "#c8973a", fontSize: "10px", letterSpacing: "0.2em", fontFamily: "Georgia,serif", background: "none", cursor: "pointer", borderRadius: "2px" }}>
                    CLEAR ALL FILTERS
                  </button>
                )}
              </div>
            </div>
          </>
        )}

        {/* ── MAIN CONTENT ── */}
        <main className="flex-1 px-2 sm:px-6 py-6">

          {/* Toolbar */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-5"
            style={{ borderBottom: "1px solid rgba(200,151,58,0.1)" }}>

            <div className="flex items-center gap-3 flex-wrap">
              {/* Mobile filter toggle */}
              <button
                className="lg:hidden flex items-center gap-2 px-3 py-2"
                onClick={() => setShowFilter(true)}
                style={{ border: "1px solid rgba(200,151,58,0.25)", color: "#c8973a", background: "transparent", borderRadius: "2px", fontSize: "10px", letterSpacing: "0.18em", fontFamily: "Georgia,serif", cursor: "pointer" }}
              >
                <IconFilter /> FILTER
                {activeFilterCount > 0 && <span style={{ background: "linear-gradient(135deg,#c8973a,#f7c568)", color: "#1a0f0a", borderRadius: "50%", width: 16, height: 16, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 8, fontWeight: 700 }}>{activeFilterCount}</span>}
              </button>

              {/* Active filter tags */}
              <div className="flex flex-wrap gap-1.5">
                {category.map(c => <FilterTag key={c} label={c} onRemove={() => toggleCategory({ target: { value: c } })} />)}
                {subCategory.map(s => <FilterTag key={s} label={s} onRemove={() => toggleSubCategory({ target: { value: s } })} />)}
                {onlyDiscounted && <FilterTag label="On Sale" onRemove={() => setOnlyDiscounted(false)} />}
                {onlyBestseller && <FilterTag label="Bestsellers" onRemove={() => setOnlyBestseller(false)} />}
              </div>
            </div>

            <div className="flex items-center gap-3">
              {/* View toggle */}
              <div className="hidden sm:flex items-center gap-1">
                <button className={`view-btn ${gridCols === 4 ? 'active' : ''}`} onClick={() => setGridCols(4)} style={{ color: gridCols === 4 ? "#f7c568" : "#5a4030" }}><IconGrid4 /></button>
                <button className={`view-btn ${gridCols === 3 ? 'active' : ''}`} onClick={() => setGridCols(3)} style={{ color: gridCols === 3 ? "#f7c568" : "#5a4030" }}><IconGrid3 /></button>
                <button className={`view-btn ${gridCols === 'list' ? 'active' : ''}`} onClick={() => setGridCols('list')} style={{ color: gridCols === 'list' ? "#f7c568" : "#5a4030" }}><IconList /></button>
              </div>

              {/* Sort */}
              <div className="relative flex items-center gap-2">
                <span style={{ color: "#5a4030" }}><IconSort /></span>
                <div className="relative">
                  <select
                    value={sortType}
                    onChange={e => setSortType(e.target.value)}
                    className="sort-select"
                  >
                    <option value="relavent">Relevant</option>
                    <option value="newest">Newest</option>
                    <option value="low-high">Price: Low → High</option>
                    <option value="high-low">Price: High → Low</option>
                  </select>
                  <span className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: "#c8973a" }}>
                    <IconChevron open={false} />
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid — accumulates as user loads more */}
          {shownProducts.length > 0 ? (
            <div ref={gridRef} className={`grid ${gridClass} gap-2 sm:gap-5`}>
              {shownProducts.map((item, index) => (
                <div
                  key={item._id}
                  className="col-card"
                  style={{ animationDelay: `${(index % productsPerPage) * 0.04}s` }}
                >
                  <ProductItem
                    id={item._id}
                    name={item.name}
                    price={item.price}
                    image={item.image}
                    discountPrice={item.discountPrice}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="empty-state flex flex-col items-center justify-center py-24 gap-5">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="24" r="22" stroke="rgba(200,151,58,0.2)" strokeWidth="1.5" />
                <path d="M16 24l5 5 11-10" stroke="rgba(200,151,58,0.3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <p style={{ fontSize: "13px", color: "#5a4030", fontStyle: "italic", fontFamily: "Georgia,serif" }}>
                No pieces match your current filters
              </p>
              <button onClick={clearAllFilters}
                className="px-6 py-2.5"
                style={{ border: "1px solid rgba(200,151,58,0.3)", color: "#c8973a", fontSize: "10px", letterSpacing: "0.2em", fontFamily: "Georgia,serif", background: "none", cursor: "pointer", borderRadius: "2px", transition: "all 0.2s" }}
                onMouseEnter={e => { e.target.style.background = "rgba(200,151,58,0.08)"; e.target.style.borderColor = "#c8973a" }}
                onMouseLeave={e => { e.target.style.background = "none"; e.target.style.borderColor = "rgba(200,151,58,0.3)" }}>
                CLEAR FILTERS
              </button>
            </div>
          )}

          {/* Load More */}
          <LoadMore
            shown={shownProducts.length}
            total={filterProducts.length}
            onLoadMore={loadMore}
            loading={loadingMore}
          />
        </main>
      </div>
    </div>
  )
}

export default Collection