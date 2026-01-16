import React, { useContext, useEffect, useState, useMemo } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';
import PromoBanner from '../components/PromoBanner';
import { useSearchParams } from "react-router-dom";
import { Helmet } from 'react-helmet-async';

const Collection = () => {

  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('relavent')
  const [currentPage, setCurrentPage] = useState(1); // New: Track current page
  const productsPerPage = 12; // New: Items per page (adjustable)
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const rawCategory = searchParams.get("category");
    const rawSub = searchParams.get("sub");

    if (rawCategory) {
      setCategory([decodeURIComponent(rawCategory)]);
    }

    if (rawSub) {
      setSubCategory([decodeURIComponent(rawSub)]);
    }
  }, [searchParams]);



  /* --------------------------------------------------------
       🟦 CATEGORY → DYNAMIC SUBCATEGORY SYSTEM
    -------------------------------------------------------- */
  const subCategoriesMap = {
    Men: ["Topwear", "Bottomwear", "Winterwear"],
    Women: ["Topwear", "Bottomwear", "Winterwear"],
    // Kids: ["Topwear", "Bottomwear", "Winterwear"],
    Others: ["Recliner Chair Headrest Cover", "Cushion Cover", "Aprons", "Desk Mat", "Pillow"]
  };


  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, showSearch, products]);

  /* --------------------------------------------------------
    🟦 Category Toggler
 -------------------------------------------------------- */
  const toggleCategory = (e) => {
    const value = e.target.value;

    if (category.includes(value)) {
      setCategory(prev => prev.filter(item => item !== value));
      setSubCategory(prev =>
        prev.filter(s => !subCategoriesMap[value].includes(s))
      );
    } else {
      setCategory(prev => [...prev, value]);
    }
  };


  /* --------------------------------------------------------
     🟦 SubCategory Toggler
  -------------------------------------------------------- */
  const toggleSubCategory = (e) => {
    const value = e.target.value;

    if (subCategory.includes(value)) {
      setSubCategory(prev => prev.filter(item => item !== value))
    } else {
      setSubCategory(prev => [...prev, value])
    }
  };

  const applyFilter = () => {

    let productsCopy = products.slice();

    if (showSearch && search) {
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter(item => category.includes(item.category));
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory))
    }

    setFilterProducts(productsCopy)
    setCurrentPage(1); // New: Reset to first page on filter change

  }

  const sortProduct = () => {

    let fpCopy = filterProducts.slice();

    switch (sortType) {
      case 'low-high':
        setFilterProducts(fpCopy.sort((a, b) => (a.price - b.price)));
        break;

      case 'high-low':
        setFilterProducts(fpCopy.sort((a, b) => (b.price - a.price)));
        break;

      default:
        applyFilter();
        break;
    }
    setCurrentPage(1); // New: Reset to first page on sort change

  }
  // New: Calculate paginated products
  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    return filterProducts.slice(startIndex, endIndex);
  }, [filterProducts, currentPage]);

  // New: Calculate total pages
  const totalPages = Math.ceil(filterProducts.length / productsPerPage);

  // New: Handle page change
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      // Optional: Scroll to top of products for better UX
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, showSearch, products])

  useEffect(() => {
    sortProduct();
  }, [sortType])

  // New: Pagination Component (inlined for simplicity)
  const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    // Generate page numbers to show (e.g., show 5 pages max, with ellipsis)
    const getPageNumbers = () => {
      const pages = [];
      const maxVisible = 5;
      let start = Math.max(1, currentPage - Math.floor(maxVisible / 2));
      let end = Math.min(totalPages, start + maxVisible - 1);

      if (end - start < maxVisible - 1) {
        start = Math.max(1, end - maxVisible + 1);
      }

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      return { start, end, pages };
    };

    const { pages } = getPageNumbers();
    const isFirstPage = currentPage === 1;
    const isLastPage = currentPage === totalPages;

    if (totalPages <= 1) return null;

    return (
      <div className="flex justify-center items-center space-x-2 mt-8 pb-8 ">
        {/* Previous Button */}
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={isFirstPage}
          className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isFirstPage
            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
            : 'bg-white border border-gray-300 hover:bg-indigo-100 text-gray-700'
            }`}
        >
          Previous
        </button>

        {/* Page Numbers */}
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${page === currentPage
              ? 'bg-[#674c47] text-white' // Active page styling (customize to your theme)
              : 'bg-white border border-gray-300 hover:bg-indigo-100 text-gray-700'
              }`}
          >
            {page}
          </button>
        ))}

        {/* Ellipsis if needed */}
        {getPageNumbers().end < totalPages && (
          <span className="px-3 py-2 text-gray-500">...</span>
        )}

        {/* Next Button */}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={isLastPage}
          className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isLastPage
            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
            : 'bg-white border border-gray-300 hover:bg-indigo-100 text-gray-700'
            }`}
        >
          Next
        </button>

        {/* Optional: Page info */}
        <span className="text-sm text-gray-500 ml-4">
          Page {currentPage} of {totalPages}
        </span>
      </div>
    );
  };

  return (
    <div>
        <Helmet>
          <title> D Dolly Lamb</title>
          <meta name="description" content="Collection page" />
	</Helmet>

      <PromoBanner />
      <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t sm:px-10 px-2 bg-[#faf0e6] overflow-hidden'>

        {/* Filter Options */}
        <div className='min-w-60 md:sticky md:top-4 self-start pt-20'>
          <p onClick={() => setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer font-semibold text-gray-700 gap-2'>FILTERS
            <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="" />
          </p>
          {/* CATEGORY */}
          <div className={`border border-gray-500 pl-5 py-3 mt-6 rounded-md ${showFilter ? '' : 'hidden'} sm:block`}>
            <p className='mb-3 text-sm font-semibold text-gray-700'>CATEGORIES</p>

            <div className='flex flex-col gap-2 text-sm text-gray-600 font-medium'>
              {Object.keys(subCategoriesMap).map(cat => (
                <label key={cat} className='flex gap-2'>
                  <input type="checkbox" value={cat} onChange={toggleCategory} />
                  {cat}
                </label>
              ))}
            </div>
          </div>
          {/* SUBCATEGORY */}
          <div className={`border border-gray-500 pl-5 py-3 my-5 rounded-md ${showFilter ? '' : 'hidden'} sm:block`}>
            <p className='mb-3 text-sm font-semibold text-gray-700'>TYPE</p>

            <div className='flex flex-col gap-2 text-sm text-gray-600 font-medium'>
              {category.length === 0 && (
                <p className="text-xs text-gray-500">Select category first</p>
              )}

              {[...new Set(category.flatMap(cat => subCategoriesMap[cat]))].map(sub => (
                <label key={sub} className='flex gap-2'>
                  <input
                    type="checkbox"
                    value={sub}
                    checked={subCategory.includes(sub)}
                    onChange={toggleSubCategory}
                  />
                  {sub}
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className='flex-1'>

          <div className="flex flex-col sm:flex-row sm:justify-between gap-3 mb-4 text-lg sm:text-2xl">

            <div className="text-center sm:text-left w-full sm:w-auto">
              <Title text1={"ALL"} text2={"COLLECTIONS"} />
            </div>

            {/* Product Sort */}
            <select
              onChange={(e) => setSortType(e.target.value)}
              className="border-2 border-gray-300 text-sm px-3 py-1 rounded-md w-full sm:w-auto mb-4"
            >
              <option value="relavent">Sort by: Relevant</option>
              <option value="low-high">Sort by: Low to High</option>
              <option value="high-low">Sort by: High to Low</option>
            </select>

          </div>



          {/* Map Products - Updated to use paginatedProducts */}
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 sm:gap-y-6 mb-8'>
            {
              paginatedProducts.map((item, index) => (
                <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image} discountPrice={item.discountPrice} />
              ))
            }
          </div>

          {/* New: Pagination Component - Render below the grid */}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />

        </div>

      </div>
    </div>
  )
}

export default Collection
