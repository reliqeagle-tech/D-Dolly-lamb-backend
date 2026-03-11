// import React, { useContext, useEffect, useState } from 'react'
// import { ShopContext } from '../context/ShopContext'
// import { assets } from '../assets/assets';
// import { useLocation } from 'react-router-dom';

// const SearchBar = () => {

//     const { search, setSearch, showSearch, setShowSearch} = useContext(ShopContext);
//     const [visible,setVisible] = useState(false)
//     const location = useLocation();

//     useEffect(()=>{
//         if (location.pathname.includes('collection')) {
//             setVisible(true);
//         }
//         else {
//             setVisible(false)
//         }
//     },[location])

//   return showSearch && visible ? (
//     <div className='border-t border-b bg-gray-50 text-center'>
//       <div className='inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2'>
//         <input value={search} onChange={(e)=>setSearch(e.target.value)} className='flex-1 outline-none bg-inherit text-sm' type="text" placeholder='Search'/>
//         <img className='w-4' src={assets.search_icon} alt="" />
//       </div>
//       <img onClick={()=>setShowSearch(false)} className='inline w-3 cursor-pointer' src={assets.cross_icon} alt="" />
//     </div>
//   ) : null
// }

// export default SearchBar



import React, { useContext, useEffect, useState, useRef } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import { useLocation } from 'react-router-dom'

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext)
  const [visible, setVisible] = useState(false)
  const [focused, setFocused] = useState(false)
  const inputRef = useRef(null)
  const location = useLocation()

  useEffect(() => {
    setVisible(location.pathname.includes('collection'))
  }, [location])

  // Auto-focus when bar appears
  useEffect(() => {
    if (showSearch && visible && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }, [showSearch, visible])

  if (!showSearch || !visible) return null

  return (
    <>
      <style>{`
        @keyframes searchReveal {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .ddl-search-wrap {
          animation: searchReveal 0.3s cubic-bezier(0.16,1,0.3,1) forwards;
          border-top: 1px solid rgba(200,151,58,0.2);
          border-bottom: 1px solid rgba(200,151,58,0.2);
          background: linear-gradient(to bottom, #1a0f0a, #160c06);
          padding: 24px 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
        }
        .ddl-search-inner {
          display: flex;
          align-items: center;
          gap: 12px;
          width: 100%;
          max-width: 560px;
          border: 1px solid rgba(200,151,58,0.25);
          border-radius: 2px;
          padding: 12px 20px;
          background: rgba(255,255,255,0.03);
          transition: border-color 0.25s, box-shadow 0.25s;
        }
        .ddl-search-inner.focused {
          border-color: #c8973a;
          box-shadow: 0 0 0 3px rgba(200,151,58,0.08), 0 4px 24px rgba(0,0,0,0.4);
        }
        .ddl-search-input {
          flex: 1;
          background: transparent;
          border: none;
          outline: none;
          font-family: 'Georgia', serif;
          font-size: 14px;
          color: #f5ede0;
          letter-spacing: 0.04em;
        }
        .ddl-search-input::placeholder {
          color: #5a4030;
          letter-spacing: 0.12em;
          font-size: 12px;
          font-style: italic;
        }
        .ddl-close-btn {
          background: transparent;
          border: 1px solid rgba(200,151,58,0.25);
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          border-radius: 2px;
          flex-shrink: 0;
          transition: all 0.2s;
        }
        .ddl-close-btn:hover {
          background: rgba(200,151,58,0.12);
          border-color: #c8973a;
        }
        .ddl-search-icon {
          color: #c8973a;
          flex-shrink: 0;
        }
        .ddl-clear-btn {
          background: none;
          border: none;
          cursor: pointer;
          padding: 2px;
          color: #5a4030;
          font-size: 12px;
          display: flex;
          align-items: center;
          transition: color 0.2s;
          flex-shrink: 0;
        }
        .ddl-clear-btn:hover { color: #c8973a; }
        .ddl-result-hint {
          font-family: 'Georgia', serif;
          font-size: 10px;
          letter-spacing: 0.25em;
          color: #5a4030;
          white-space: nowrap;
        }
      `}</style>

      <div className="ddl-search-wrap">
        {/* Search input box */}
        <div className={`ddl-search-inner ${focused ? 'focused' : ''}`}>
          {/* Search icon */}
          <svg className="ddl-search-icon" width="15" height="15" viewBox="0 0 24 24" fill="none">
            <circle cx="11" cy="11" r="7" stroke="#c8973a" strokeWidth="1.5" />
            <path d="M16.5 16.5L21 21" stroke="#c8973a" strokeWidth="1.5" strokeLinecap="round" />
          </svg>

          <input
            ref={inputRef}
            className="ddl-search-input"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            type="text"
            placeholder="SEARCH COLLECTION..."
          />

          {/* Clear button — only when there's text */}
          {search && (
            <button className="ddl-clear-btn" onClick={() => setSearch('')} title="Clear">
              ✕
            </button>
          )}

          {/* Result hint */}
          {search && (
            <span className="ddl-result-hint">PRESS ↵</span>
          )}
        </div>

        {/* Close bar button */}
        <button
          className="ddl-close-btn"
          onClick={() => setShowSearch(false)}
          title="Close search"
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6l12 12" stroke="#c8973a" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </>
  )
}

export default SearchBar