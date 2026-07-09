import React, { useContext, useEffect, useState, useRef } from 'react'
import { ShopContext } from '../context/ShopContext'
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

        /* ── Wrapper — white bg matching navbar ── */
        .ddl-search-wrap {
          animation: searchReveal 0.3s cubic-bezier(0.16,1,0.3,1) forwards;
          border-top: 1px solid rgba(91,91,214,0.15);
          border-bottom: 1px solid rgba(91,91,214,0.15);
          background: linear-gradient(to bottom, #F8F7FF, #FFFFFF);
          padding: 20px 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
        }

        /* ── Search input container ── */
        .ddl-search-inner {
          display: flex;
          align-items: center;
          gap: 12px;
          width: 100%;
          max-width: 560px;
          border: 1px solid rgba(91,91,214,0.22);
          border-radius: 2px;
          padding: 11px 18px;
          background: #FFFFFF;
          transition: border-color 0.25s, box-shadow 0.25s;
        }
        .ddl-search-inner.focused {
          border-color: #5B5BD6;
          box-shadow: 0 0 0 3px rgba(91,91,214,0.10), 0 4px 20px rgba(91,91,214,0.08);
        }

        /* ── Input text ── */
        .ddl-search-input {
          flex: 1;
          background: transparent;
          border: none;
          outline: none;
          font-family: 'Montserrat', sans-serif;
          font-size: 13px;
          font-weight: 500;
          color: #1E1B4B;
          letter-spacing: 0.06em;
        }
        .ddl-search-input::placeholder {
          color: #9CA3AF;
          letter-spacing: 0.16em;
          font-size: 11px;
          font-weight: 600;
          font-style: normal;
        }

        /* ── Close (X) button beside the bar ── */
        .ddl-close-btn {
          background: transparent;
          border: 1px solid rgba(91,91,214,0.20);
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          border-radius: 2px;
          flex-shrink: 0;
          transition: background 0.2s, border-color 0.2s, color 0.2s;
          color: #6B7280;
        }
        .ddl-close-btn:hover {
          background: rgba(91,91,214,0.07);
          border-color: #5B5BD6;
          color: #5B5BD6;
        }

        /* ── Clear text (✕) button inside input ── */
        .ddl-clear-btn {
          background: none;
          border: none;
          cursor: pointer;
          padding: 2px 4px;
          color: #9CA3AF;
          font-size: 11px;
          display: flex;
          align-items: center;
          transition: color 0.2s;
          flex-shrink: 0;
          font-family: 'Montserrat', sans-serif;
        }
        .ddl-clear-btn:hover { color: #5B5BD6; }

        /* ── "PRESS ↵" hint ── */
        .ddl-result-hint {
          font-family: 'Montserrat', sans-serif;
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 0.22em;
          color: #818CF8;
          white-space: nowrap;
          text-transform: uppercase;
        }
      `}</style>

      <div className="ddl-search-wrap">

        {/* Search input box */}
        <div className={`ddl-search-inner ${focused ? 'focused' : ''}`}>

          {/* Search icon — indigo */}
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, color: focused ? '#5B5BD6' : '#9CA3AF', transition: 'color 0.2s' }}>
            <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.5" />
            <path d="M16.5 16.5L21 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
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

          {/* Clear button */}
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
            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </>
  )
}

export default SearchBar