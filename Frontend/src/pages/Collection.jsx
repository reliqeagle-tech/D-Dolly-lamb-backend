import React, { useContext, useEffect, useState, useMemo, useRef } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'
import ProductItem from '../components/ProductItem'
import { useSearchParams } from "react-router-dom"
import { Helmet } from 'react-helmet-async'
import axios from 'axios'

/*
  ═══════════════════════════════════════════════
  LIGHT MODE — Collection.jsx
  ═══════════════════════════════════════════════
  NEW light mode (indigo system):
    page bg:      #F8F9FF  near-white lavender
    sidebar bg:   #FFFFFF  clean white
    sidebar bdr:  rgba(99,102,241,0.1)
    card bg:      #FFFFFF  white
    accent:       #6366F1  indigo
    accent-mid:   #818CF8  light indigo
    accent-dk:    #4338CA  deep indigo
    text-nav:     #1E1B4B  deep navy
    text-body:    #4B5563  dark grey
    text-muted:   #9CA3AF  cool grey
    text-dim:     #6B7280  mid grey
    border-hi:    rgba(99,102,241,0.2)
    border-lo:    rgba(99,102,241,0.08)
    checkbox:     #6366F1 indigo
    filter tags:  indigo
    sort select:  white bg
    load more:    indigo
  ═══════════════════════════════════════════════
*/

const C = {
    pageBg: "#F4F5FF",
    sidebarBg: "#FFFFFF",
    accent: "#6366F1",
    accentMid: "#818CF8",
    accentDk: "#4338CA",
    textNav: "#1E1B4B",
    textBody: "#4B5563",
    textMuted: "#9CA3AF",
    textDim: "#6B7280",
    borderHi: "rgba(99,102,241,0.2)",
    borderLo: "rgba(99,102,241,0.08)",
    borderMd: "rgba(99,102,241,0.14)",
};

const IconFilter = () => (<svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M3 6h18M7 12h10M11 18h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>)
const IconGrid4 = () => (<svg width="15" height="15" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" /><rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" /><rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" /><rect x="14" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" /></svg>)
const IconGrid3 = () => (<svg width="15" height="15" viewBox="0 0 24 24" fill="none"><rect x="2" y="3" width="6" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" /><rect x="9" y="3" width="6" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" /><rect x="16" y="3" width="6" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" /><rect x="2" y="14" width="6" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" /><rect x="9" y="14" width="6" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" /><rect x="16" y="14" width="6" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" /></svg>)
const IconList = () => (<svg width="15" height="15" viewBox="0 0 24 24" fill="none"><rect x="3" y="4" width="7" height="5" rx="1" stroke="currentColor" strokeWidth="1.5" /><path d="M13 5h8M13 9h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /><rect x="3" y="14" width="7" height="5" rx="1" stroke="currentColor" strokeWidth="1.5" /><path d="M13 15h8M13 19h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>)
const IconSort = () => (<svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M3 6h18M6 12h12M9 18h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>)
const IconChevron = ({ open }) => (<svg width="12" height="12" viewBox="0 0 24 24" fill="none" style={{ transition: "transform 0.3s", transform: open ? "rotate(180deg)" : "rotate(0deg)" }}><path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>)
const IconClose = () => (<svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>)
const IconSearch = () => (<svg width="13" height="13" viewBox="0 0 24 24" fill="none"><circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.5" /><path d="M15 15l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>)
const IconCheck = () => (<svg width="10" height="10" viewBox="0 0 24 24" fill="none"><path d="M5 12l5 5L20 7" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>)

/* ── Filter Tag ── */
const FilterTag = ({ label, onRemove }) => (
    <div
        onClick={onRemove}
        style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            padding: "4px 10px", cursor: "pointer", borderRadius: 20,
            border: `1px solid ${C.borderHi}`,
            background: "rgba(99,102,241,0.07)",
            transition: "all 0.2s",
        }}
        onMouseEnter={e => { e.currentTarget.style.background = "rgba(99,102,241,0.14)"; e.currentTarget.style.borderColor = C.accent; }}
        onMouseLeave={e => { e.currentTarget.style.background = "rgba(99,102,241,0.07)"; e.currentTarget.style.borderColor = C.borderHi; }}
    >
        <span style={{ fontSize: 9, color: C.accent, letterSpacing: "0.12em", fontFamily: "'Montserrat',sans-serif", fontWeight: 600 }}>{label}</span>
        <span style={{ color: C.accentMid, display: "flex" }}><IconClose /></span>
    </div>
)

/* ── Filter Section ── */
const FilterSection = ({ title, children, defaultOpen = true }) => {
    const [open, setOpen] = useState(defaultOpen)
    return (
        <div style={{ borderBottom: `1px solid ${C.borderLo}` }}>
            <button
                onClick={() => setOpen(!open)}
                style={{
                    width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between",
                    padding: "12px 0", background: "transparent", border: "none", cursor: "pointer",
                    color: C.accent,
                }}
            >
                <span style={{ fontSize: 9, letterSpacing: "0.3em", fontFamily: "'Montserrat',sans-serif", fontWeight: 700, color: C.accentDk, textTransform: "uppercase" }}>{title}</span>
                <span style={{ color: C.accentMid }}><IconChevron open={open} /></span>
            </button>
            <div style={{ maxHeight: open ? "800px" : 0, overflow: "hidden", transition: "max-height 0.4s ease", opacity: open ? 1 : 0 }}>
                <div style={{ paddingBottom: 14 }}>{children}</div>
            </div>
        </div>
    )
}

/* ── Category Accordion Item ── */
const CategoryAccordionItem = ({ cat, subList, catChecked, onCatToggle, subCategory, onSubToggle, catCount }) => {
    const [subOpen, setSubOpen] = useState(catChecked)
    const checkedSubCount = subList.filter(s => subCategory.includes(s)).length
    useEffect(() => { if (catChecked) setSubOpen(true) }, [catChecked])

    return (
        <div style={{
            marginBottom: 3,
            border: catChecked ? `1px solid ${C.borderHi}` : `1px solid ${C.borderLo}`,
            borderRadius: 8,
            background: catChecked ? "rgba(99,102,241,0.05)" : "transparent",
            overflow: "hidden",
            transition: "border-color 0.25s, background 0.25s",
        }}
            onMouseEnter={e => {
                if (!catChecked) {
                    e.currentTarget.style.borderColor = C.accent;
                    e.currentTarget.style.background = "rgba(99,102,241,0.04)";
                }
            }}

            onMouseLeave={e => {
                if (!catChecked) {
                    e.currentTarget.style.borderColor = C.borderLo;
                    e.currentTarget.style.background = "transparent";
                }
            }}
        >
            <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 10px" }}>
                {/* Checkbox */}
                <div
                    onClick={() => onCatToggle({ target: { value: cat } })}
                    style={{
                        width: 15, height: 15, flexShrink: 0,
                        border: `1.5px solid ${catChecked ? C.accent : C.borderHi}`,
                        background: catChecked ? C.accent : "transparent",
                        borderRadius: 4,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        cursor: "pointer", transition: "all 0.2s",
                    }}
                >
                    {catChecked && <IconCheck />}
                </div>

                {/* Label */}
                <button
                    onClick={() => {
                        if (!catChecked) { onCatToggle({ target: { value: cat } }); setSubOpen(true) }
                        else setSubOpen(p => !p)
                    }}
                    style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 4, background: "none", border: "none", cursor: "pointer", padding: 0 }}
                >
                    <span style={{
                        fontSize: 12, fontFamily: "'Montserrat',sans-serif", letterSpacing: "0.03em",
                        color: catChecked ? C.accentDk : C.textDim, fontWeight: catChecked ? 600 : 400,
                        transition: "color 0.2s", textAlign: "left",
                    }}>{cat}</span>

                    <div style={{ display: "flex", alignItems: "center", gap: 6, flexShrink: 0 }}>
                        {catCount !== undefined && (
                            <span style={{ fontSize: 9, color: C.textMuted, fontFamily: "'Montserrat',sans-serif" }}>({catCount})</span>
                        )}
                        {checkedSubCount > 0 && (
                            <span style={{
                                fontSize: 8, fontWeight: 700,
                                background: C.accent, color: "#fff",
                                borderRadius: 99, padding: "1px 6px",
                                fontFamily: "'Montserrat',sans-serif",
                            }}>{checkedSubCount}</span>
                        )}
                        {subList.length > 0 && (
                            <span style={{
                                color: catChecked ? C.accent : C.textMuted, display: "inline-flex",
                                transition: "transform 0.3s",
                                transform: subOpen ? "rotate(90deg)" : "rotate(0deg)",
                            }}>
                                <svg width="9" height="9" viewBox="0 0 24 24" fill="none">
                                    <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                        )}
                    </div>
                </button>
            </div>

            {/* Subcategories */}
            {subList.length > 0 && (
                <div style={{
                    maxHeight: subOpen ? `${subList.length * 40}px` : "0px",
                    overflow: "hidden",
                    transition: "max-height 0.35s cubic-bezier(0.4,0,0.2,1)",
                }}>
                    <div style={{ borderTop: `1px solid ${C.borderLo}`, background: "rgba(99,102,241,0.02)" }}>
                        {subList.map((sub, idx) => {
                            const isChecked = subCategory.includes(sub)
                            return (
                                <button
                                    key={sub}
                                    onClick={() => onSubToggle({ target: { value: sub } })}
                                    style={{
                                        width: "100%", display: "flex", alignItems: "center", gap: 10,
                                        padding: "8px 12px 8px 28px",
                                        background: isChecked ? "rgba(99,102,241,0.08)" : "transparent",
                                        border: "none", cursor: "pointer", textAlign: "left",
                                        borderBottom: idx < subList.length - 1 ? `1px solid ${C.borderLo}` : "none",
                                        transition: "background 0.18s",
                                    }}
                                    onMouseEnter={e => { if (!isChecked) e.currentTarget.style.background = "rgba(99,102,241,0.04)" }}
                                    onMouseLeave={e => { if (!isChecked) e.currentTarget.style.background = "transparent" }}
                                >
                                    {/* Radio dot */}
                                    <div style={{
                                        width: 13, height: 13, flexShrink: 0,
                                        border: `1.5px solid ${isChecked ? C.accent : C.borderHi}`,
                                        borderRadius: "50%",
                                        background: isChecked ? C.accent : "transparent",
                                        display: "flex", alignItems: "center", justifyContent: "center",
                                        transition: "all 0.2s",
                                    }}>
                                        {isChecked && (
                                            <svg width="6" height="6" viewBox="0 0 24 24" fill="none">
                                                <path d="M5 12l5 5L20 7" stroke="#fff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        )}
                                    </div>

                                    {isChecked && <div style={{ width: 2, height: 11, background: C.accentMid, borderRadius: 1, flexShrink: 0 }} />}

                                    <span style={{
                                        fontSize: 11, fontFamily: "'Montserrat',sans-serif", letterSpacing: "0.03em",
                                        color: isChecked ? C.accentDk : C.textDim, fontWeight: isChecked ? 600 : 400,
                                        transition: "color 0.2s",
                                    }}>{sub}</span>
                                </button>
                            )
                        })}
                    </div>
                </div>
            )}
        </div>
    )
}

/* ── Load More ── */
const LoadMore = ({ shown, total, onLoadMore, loading }) => {
    if (shown >= total) return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12, padding: "40px 0" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <span style={{ display: "block", height: 1, width: 64, background: `linear-gradient(to right, transparent, ${C.borderHi})` }} />
                <span style={{ fontSize: 9, color: C.textMuted, letterSpacing: "0.25em", fontFamily: "'Montserrat',sans-serif", fontWeight: 600 }}>ALL {total} PIECES SHOWN</span>
                <span style={{ display: "block", height: 1, width: 64, background: `linear-gradient(to left, transparent, ${C.borderHi})` }} />
            </div>
        </div>
    )
    const pct = Math.round((shown / total) * 100)
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 20, padding: "40px 0" }}>
            {/* Progress bar */}
            <div style={{ width: "100%", maxWidth: 320 }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                    <span style={{ fontSize: 9, color: C.textDim, letterSpacing: "0.2em", fontFamily: "'Montserrat',sans-serif", fontWeight: 500 }}>{shown} OF {total} PIECES</span>
                    <span style={{ fontSize: 9, color: C.accent, letterSpacing: "0.1em", fontFamily: "'Montserrat',sans-serif", fontWeight: 700 }}>{pct}%</span>
                </div>
                <div style={{ width: "100%", height: 3, background: C.borderLo, borderRadius: 2, position: "relative" }}>
                    <div style={{
                        position: "absolute", top: 0, left: 0, height: "100%", width: `${pct}%`,
                        background: `linear-gradient(to right, ${C.accentDk}, ${C.accent})`,
                        borderRadius: 2, transition: "width 0.6s ease",
                        boxShadow: `0 0 8px rgba(99,102,241,0.4)`,
                    }} />
                </div>
            </div>

            <button
                onClick={onLoadMore} disabled={loading}
                style={{
                    padding: "13px 48px",
                    border: `1.5px solid ${C.borderHi}`,
                    borderRadius: 6, background: loading ? "rgba(99,102,241,0.06)" : "transparent",
                    color: C.accent, fontSize: 10, letterSpacing: "0.28em",
                    fontFamily: "'Montserrat',sans-serif", fontWeight: 700,
                    cursor: loading ? "not-allowed" : "pointer",
                    display: "flex", alignItems: "center", gap: 10, transition: "all 0.25s",
                }}
                onMouseEnter={e => { if (!loading) { e.currentTarget.style.background = "rgba(99,102,241,0.08)"; e.currentTarget.style.borderColor = C.accent; e.currentTarget.style.boxShadow = "0 4px 16px rgba(99,102,241,0.15)"; } }}
                onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = C.borderHi; e.currentTarget.style.boxShadow = "none"; }}
            >
                {loading ? (
                    <>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ animation: "spin 0.8s linear infinite" }}>
                            <circle cx="12" cy="12" r="9" stroke="rgba(99,102,241,0.2)" strokeWidth="2" />
                            <path d="M12 3a9 9 0 0 1 9 9" stroke={C.accent} strokeWidth="2" strokeLinecap="round" />
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

            <span style={{ fontSize: 9, color: C.textMuted, letterSpacing: "0.15em", fontFamily: "'Montserrat',sans-serif" }}>
                {total - shown} MORE PIECES TO EXPLORE
            </span>
        </div>
    )
}

/* ══════════════════════════════════════════════
   COLLECTION PAGE
══════════════════════════════════════════════ */
const Collection = () => {
    const { products, search, showSearch, backendUrl } = useContext(ShopContext)
    const [showFilter, setShowFilter] = useState(false)
    const [filterProducts, setFilterProducts] = useState([])
    const [category, setCategory] = useState([])
    const [subCategory, setSubCategory] = useState([])
    const [sortType, setSortType] = useState('relavent')
    const [gridCols, setGridCols] = useState(4)
    const [priceRange, setPriceRange] = useState([0, 2000])
    const [maxPrice, setMaxPrice] = useState(2000)
    const [onlyDiscounted, setOnlyDiscounted] = useState(false)
    const [onlyBestseller, setOnlyBestseller] = useState(false)
    const [productSearch, setProductSearch] = useState("")
    const [visibleCount, setVisibleCount] = useState(12)
    const [loadingMore, setLoadingMore] = useState(false)
    const productsPerPage = 12
    const [searchParams] = useSearchParams()
    const gridRef = useRef(null)

    /* ──────────────────────────────────────────────
       DYNAMIC subCategoriesMap — fetched from backend.
       Shape: { [categoryName]: [subCategory1, subCategory2, ...] }
       Replaces the old hardcoded object entirely.
    ────────────────────────────────────────────── */
    const [subCategoriesMap, setSubCategoriesMap] = useState({})
    const [categoriesLoading, setCategoriesLoading] = useState(true)

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const res = await axios.get(`${backendUrl}/api/category/list`)
                if (res.data.success) {
                    const map = {}
                    res.data.categories.forEach(cat => {
                        map[cat.categoryName] = cat.subCategories || []
                    })
                    setSubCategoriesMap(map)
                }
            } catch (err) {
                console.error("Failed to load categories:", err.message)
            } finally {
                setCategoriesLoading(false)
            }
        }
        fetchCategories()
    }, [backendUrl])

    useEffect(() => {
        const rawCategory = searchParams.get("category")
        const rawSub = searchParams.get("sub")
        if (rawCategory) setCategory([decodeURIComponent(rawCategory)])
        if (rawSub) setSubCategory([decodeURIComponent(rawSub)])
    }, [searchParams])

    useEffect(() => {
        if (products.length > 0) {
            const max = Math.max(...products.map(p => p.price))
            setMaxPrice(max); setPriceRange([0, max])
        }
    }, [products])

    const toggleCategory = (e) => {
        const value = e.target.value
        if (category.includes(value)) {
            setCategory(prev => prev.filter(i => i !== value))
            setSubCategory(prev => prev.filter(s => !(subCategoriesMap[value] || []).includes(s)))
        } else {
            setCategory(prev => [...prev, value])
        }
    }
    const toggleSubCategory = (e) => {
        const value = e.target.value
        setSubCategory(prev => prev.includes(value) ? prev.filter(i => i !== value) : [...prev, value])
    }

    const catCounts = useMemo(() => {
        const counts = {}
        Object.keys(subCategoriesMap).forEach(cat => { counts[cat] = products.filter(p => p.category === cat).length })
        return counts
    }, [products, subCategoriesMap])

    useEffect(() => {
        let copy = products.slice()
        if ((showSearch && search) || productSearch) {
            const q = (productSearch || search).toLowerCase()
            // copy = copy.filter(p => p.name.toLowerCase().includes(q))
            copy = copy.filter(p =>
                p.name?.toLowerCase().includes(q) ||
                p.category?.toLowerCase().includes(q) ||
                p.subCategory?.toLowerCase().includes(q) ||
                p.sku?.toLowerCase().includes(q)
            )
        }
        if (category.length > 0) copy = copy.filter(p => category.includes(p.category))
        if (subCategory.length > 0) {
            copy = copy.filter(p => subCategory.some(sub => (p.subCategory || "").trim().toLowerCase() === sub.trim().toLowerCase()))
        }
        copy = copy.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1])
        if (onlyDiscounted) copy = copy.filter(p => p.discountPrice > 0)
        if (onlyBestseller) copy = copy.filter(p => p.bestseller)
        if (sortType === 'low-high') copy.sort((a, b) => a.price - b.price)
        else if (sortType === 'high-low') copy.sort((a, b) => b.price - a.price)
        else if (sortType === 'newest') { const order = products.map(p => p._id); copy.sort((a, b) => order.indexOf(a._id) - order.indexOf(b._id)) }
        setFilterProducts(copy)
        setVisibleCount(12)
    }, [category, subCategory, search, showSearch, products, priceRange, onlyDiscounted, onlyBestseller, productSearch, sortType])

    const shownProducts = useMemo(() => filterProducts.slice(0, visibleCount), [filterProducts, visibleCount])
    const hasMore = visibleCount < filterProducts.length
    const loadMore = () => {
        if (loadingMore || !hasMore) return
        setLoadingMore(true)
        setTimeout(() => { setVisibleCount(prev => prev + productsPerPage); setLoadingMore(false) }, 600)
    }
    const clearAllFilters = () => {
        setCategory([]); setSubCategory([]); setPriceRange([0, maxPrice])
        setOnlyDiscounted(false); setOnlyBestseller(false); setProductSearch(""); setSortType("relavent"); setVisibleCount(12)
    }
    const activeFilterCount = category.length + subCategory.length + (onlyDiscounted ? 1 : 0) + (onlyBestseller ? 1 : 0) + (priceRange[0] > 0 || priceRange[1] < maxPrice ? 1 : 0)
    const gridClass = gridCols === 4 ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4" : gridCols === 3 ? "grid-cols-2 sm:grid-cols-3" : "grid-cols-1"

    const renderSidebar = () => (
        <>
            {/* Search */}
            <div style={{ position: "relative", marginBottom: 16 }}>
                <input
                    type="text" placeholder="Search products..."
                    value={productSearch} onChange={e => setProductSearch(e.target.value)}
                    style={{
                        width: "100%", padding: "9px 36px 9px 12px",
                        background: "#FAFAFF",
                        border: `1.5px solid ${C.borderMd}`,
                        borderRadius: 8, color: C.textNav,
                        fontSize: 11, fontFamily: "'Montserrat',sans-serif",
                        outline: "none", transition: "border-color 0.2s, box-shadow 0.2s",
                    }}
                    onFocus={e => { e.target.style.borderColor = C.accent; e.target.style.boxShadow = `0 0 0 3px rgba(99,102,241,0.1)`; }}
                    onBlur={e => { e.target.style.borderColor = C.borderMd; e.target.style.boxShadow = "none"; }}
                />
                <span style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", color: C.accentMid, display: "flex" }}>
                    <IconSearch />
                </span>
            </div>

            {/* Category + Subcategory */}
            <FilterSection title="Category & Type">
                <div style={{ display: "flex", flexDirection: "column", gap: 3, paddingTop: 4 }}>
                    {categoriesLoading ? (
                        <p style={{ fontSize: 11, color: C.textMuted, fontFamily: "'Montserrat',sans-serif", fontStyle: "italic" }}>
                            Loading categories…
                        </p>
                    ) : Object.keys(subCategoriesMap).length === 0 ? (
                        <p style={{ fontSize: 11, color: C.textMuted, fontFamily: "'Montserrat',sans-serif", fontStyle: "italic" }}>
                            No categories available
                        </p>
                    ) : (
                        Object.keys(subCategoriesMap).map(cat => (
                            <CategoryAccordionItem
                                key={cat} cat={cat}
                                subList={subCategoriesMap[cat] || []}
                                catChecked={category.includes(cat)}
                                onCatToggle={toggleCategory}
                                subCategory={subCategory}
                                onSubToggle={toggleSubCategory}
                                catCount={catCounts[cat]}
                            />
                        ))
                    )}
                </div>
                <p style={{ fontSize: 9, color: C.textMuted, letterSpacing: "0.06em", fontFamily: "'Montserrat',sans-serif", marginTop: 10, fontStyle: "italic" }}>
                    ↳ Select a category, then pick a type below it
                </p>
            </FilterSection>

            {/* Price Range */}
            <FilterSection title="Price Range">
                <div style={{ paddingRight: 8 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
                        <span style={{ fontSize: 10, color: C.accent, fontFamily: "'Montserrat',sans-serif", fontWeight: 600 }}>${priceRange[0]}</span>
                        <span style={{ fontSize: 10, color: C.accent, fontFamily: "'Montserrat',sans-serif", fontWeight: 600 }}>${priceRange[1]}</span>
                    </div>
                    <input
                        type="range" min={0} max={maxPrice} step={1} value={priceRange[1]}
                        onChange={e => setPriceRange([priceRange[0], Number(e.target.value)])}
                        className="col-range-input"
                        style={{
                            WebkitAppearance: "none", appearance: "none",
                            width: "100%", height: 3, borderRadius: 2, outline: "none", cursor: "pointer",
                            background: `linear-gradient(to right, ${C.accent} ${Math.round((priceRange[1] / maxPrice) * 100)}%, rgba(99,102,241,0.12) ${Math.round((priceRange[1] / maxPrice) * 100)}%)`,
                        }}
                    />
                    <div style={{ display: "flex", gap: 8, marginTop: 10 }}>
                        {[
                            { value: priceRange[0], onChange: e => setPriceRange([Number(e.target.value), priceRange[1]]), max: priceRange[1] },
                            { value: priceRange[1], onChange: e => setPriceRange([priceRange[0], Number(e.target.value)]), min: priceRange[0], max: maxPrice },
                        ].map((p, i) => (
                            <input key={i} type="number" value={p.value} min={p.min || 0} max={p.max}
                                onChange={p.onChange}
                                style={{
                                    width: "50%", padding: "6px 8px",
                                    background: "#FAFAFF", border: `1.5px solid ${C.borderMd}`,
                                    borderRadius: 6, color: C.textNav, fontSize: 11,
                                    fontFamily: "'Montserrat',sans-serif", outline: "none",
                                }} />
                        ))}
                    </div>
                </div>
            </FilterSection>

            {/* Special filters */}
            <FilterSection title="Special">
                {[
                    { label: "On Sale", checked: onlyDiscounted, toggle: () => setOnlyDiscounted(p => !p) },
                    { label: "Bestsellers", checked: onlyBestseller, toggle: () => setOnlyBestseller(p => !p) },
                ].map(({ label, checked, toggle }) => (
                    <button key={label} onClick={toggle}
                        style={{
                            width: "100%", display: "flex", alignItems: "center", gap: 10,
                            padding: "8px 4px", background: "none", border: "none",
                            cursor: "pointer", textAlign: "left",
                        }}>
                        <div style={{
                            width: 15, height: 15, flexShrink: 0,
                            border: `1.5px solid ${checked ? C.accent : C.borderHi}`,
                            background: checked ? C.accent : "transparent",
                            borderRadius: 4,
                            display: "flex", alignItems: "center", justifyContent: "center",
                            transition: "all 0.2s",
                        }}>
                            {checked && <IconCheck />}
                        </div>
                        <span style={{
                            fontSize: 12, color: checked ? C.accentDk : C.textDim,
                            fontFamily: "'Montserrat',sans-serif", fontWeight: checked ? 600 : 400,
                            letterSpacing: "0.03em",
                        }}>{label}</span>
                    </button>
                ))}
            </FilterSection>
        </>
    )

    return (
        <div style={{ background: C.pageBg, minHeight: "100vh", fontFamily: "'Montserrat',sans-serif" }}>
            <Helmet>
                <title>Collection — D Dolly Lamb</title>
                <meta
                    name="description"
                    content="Explore handcrafted leather pillow covers, bomber jackets, biker jackets, aprons, desk pads, recliner slipcovers and premium lambskin leather products from D Dolly Lamb."
                />

                <link
                    rel="canonical"
                    href="https://ddollylamb.com/collection"
                />
            </Helmet>

            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');

        @keyframes fadeUp { from{opacity:0;transform:translateY(14px)} to{opacity:1;transform:translateY(0)} }
        @keyframes spin   { to{transform:rotate(360deg)} }
        @keyframes drawerIn { from{transform:translateX(-100%)} to{transform:translateX(0)} }

        .col-card{animation:fadeUp 0.4s ease both}
        .col-card:nth-child(1){animation-delay:0.04s} .col-card:nth-child(2){animation-delay:0.08s}
        .col-card:nth-child(3){animation-delay:0.12s} .col-card:nth-child(4){animation-delay:0.16s}
        .col-card:nth-child(5){animation-delay:0.20s} .col-card:nth-child(6){animation-delay:0.24s}
        .col-card:nth-child(7){animation-delay:0.28s} .col-card:nth-child(8){animation-delay:0.32s}

        /* Range input thumb — indigo */
        .col-range-input::-webkit-slider-thumb {
          -webkit-appearance:none; appearance:none;
          width:16px; height:16px; border-radius:50%;
          background:${C.accent}; cursor:pointer;
          border:2px solid #fff;
          box-shadow:0 0 0 2px rgba(99,102,241,0.25), 0 2px 6px rgba(99,102,241,0.3);
        }
        .col-range-input::-moz-range-thumb {
          width:16px; height:16px; border-radius:50%;
          background:${C.accent}; cursor:pointer;
          border:2px solid #fff;
          box-shadow:0 0 0 2px rgba(99,102,241,0.25), 0 2px 6px rgba(99,102,241,0.3);
        }

        /* Sort select */
        .sort-select {
          background:#FFFFFF;
          border:1.5px solid ${C.borderMd};
          color:${C.textNav};
          font-family:'Montserrat',sans-serif;
          font-size:11px; font-weight:500; letter-spacing:0.06em;
          padding:9px 32px 9px 14px;
          border-radius:8px; outline:none; cursor:pointer;
          appearance:none; transition:border-color 0.2s, box-shadow 0.2s;
        }
        .sort-select:focus { border-color:${C.accent}; box-shadow:0 0 0 3px rgba(99,102,241,0.1); }
        .sort-select option { background:#FFFFFF; color:${C.textNav}; }

        /* View toggle buttons */
        .view-btn {
          width:34px; height:34px;
          display:flex; align-items:center; justify-content:center;
          border:1.5px solid ${C.borderMd}; border-radius:7px;
          cursor:pointer; background:transparent; color:${C.textMuted};
          transition:all 0.2s;
        }
        .view-btn.active,.view-btn:hover {
          border-color:${C.accent};
          background:rgba(99,102,241,0.08);
          color:${C.accent};
        }

        /* Mobile overlay + drawer */
        .mobile-overlay { position:fixed;inset:0;z-index:999;background:rgba(30,27,75,0.35);backdrop-filter:blur(4px); }
        .mobile-drawer  {
          position:fixed;top:68px;left:0;bottom:0;
          width:min(340px,90vw);z-index:1000;
          background:#FFFFFF;
          border-right:1.5px solid ${C.borderMd};
          box-shadow:8px 0 32px rgba(99,102,241,0.1);
          overflow-y:auto;
          animation:drawerIn 0.3s cubic-bezier(0.16,1,0.3,1);
        }

        .empty-state { animation:fadeUp 0.5s ease both; }

        /* Scrollbar — sidebar */
        aside::-webkit-scrollbar { width:4px; }
        aside::-webkit-scrollbar-track { background:transparent; }
        aside::-webkit-scrollbar-thumb { background:rgba(99,102,241,0.2); border-radius:2px; }
        aside::-webkit-scrollbar-thumb:hover { background:rgba(99,102,241,0.4); }
      `}</style>

            {/* ── HEADER BAR ── */}
            <div style={{
                borderBottom: `1px solid ${C.borderLo}`,
                padding: "14px 32px",
                display: "flex", alignItems: "center", justifyContent: "space-between",
                flexWrap: "wrap", gap: 8,
                background: "#FFFFFF",
                boxShadow: "0 1px 8px rgba(99,102,241,0.06)",
            }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <span style={{ fontSize: 9, letterSpacing: "0.28em", color: C.textMuted, fontFamily: "'Montserrat',sans-serif", fontWeight: 500, textTransform: "uppercase" }}>D Dolly Lamb</span>
                    <span style={{ color: C.borderHi, fontSize: 14, lineHeight: 1 }}>/</span>
                    <h1 style={{
                        fontFamily: "'Montserrat',sans-serif",
                        fontSize: "clamp(1rem,1.5vw,1.25rem)", fontWeight: 700,
                        color: C.accentDk, letterSpacing: "0.1em", margin: 0,
                        textTransform: "uppercase",
                    }}>All Collections</h1>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <span style={{ display: "block", height: 1, width: 40, background: `linear-gradient(to right, transparent, ${C.borderHi})` }} />
                    <span style={{
                        fontSize: 9, color: C.textMuted,
                        fontFamily: "'Montserrat',sans-serif", letterSpacing: "0.22em", fontWeight: 600,
                    }}>
                        {filterProducts.length} PIECES
                    </span>
                </div>
            </div>

            <div style={{ display: "flex" }}>
                {/* ── DESKTOP SIDEBAR ── */}
                <aside
                    className="hidden lg:block"
                    style={{
                        width: 272, flexShrink: 0,
                        position: "sticky", top: 68, alignSelf: "flex-start",
                        height: "calc(100vh - 68px)", overflowY: "auto",
                        padding: "20px 20px 24px",
                        borderRight: `1px solid ${C.borderLo}`,
                        background: C.sidebarBg,
                    }}
                >
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 18 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 8, color: C.accent }}>
                            <IconFilter />
                            <span style={{ fontSize: 10, letterSpacing: "0.3em", fontFamily: "'Montserrat',sans-serif", fontWeight: 700, color: C.accentDk }}>FILTERS</span>
                            {activeFilterCount > 0 && (
                                <span style={{
                                    display: "flex", alignItems: "center", justifyContent: "center",
                                    width: 18, height: 18, borderRadius: "50%",
                                    background: C.accent, color: "#fff",
                                    fontSize: 8, fontWeight: 700,
                                }}>{activeFilterCount}</span>
                            )}
                        </div>
                        {activeFilterCount > 0 && (
                            <button onClick={clearAllFilters}
                                style={{
                                    fontSize: 9, color: C.textMuted, letterSpacing: "0.15em",
                                    fontFamily: "'Montserrat',sans-serif", fontWeight: 600,
                                    background: "none", border: "none", cursor: "pointer",
                                    transition: "color 0.2s",
                                }}
                                onMouseEnter={e => e.target.style.color = C.accent}
                                onMouseLeave={e => e.target.style.color = C.textMuted}
                            >CLEAR ALL</button>
                        )}
                    </div>
                    {renderSidebar()}
                </aside>

                {/* ── MOBILE DRAWER ── */}
                {showFilter && (
                    <>
                        <div className="mobile-overlay lg:hidden" onClick={() => setShowFilter(false)} />
                        <div className="mobile-drawer lg:hidden">
                            <div style={{
                                display: "flex", alignItems: "center", justifyContent: "space-between",
                                padding: "14px 20px",
                                borderBottom: `1px solid ${C.borderLo}`,
                                background: "linear-gradient(135deg, #F8F7FF, #EEF0FF)",
                            }}>
                                <span style={{ fontSize: 10, letterSpacing: "0.3em", color: C.accentDk, fontFamily: "'Montserrat',sans-serif", fontWeight: 700 }}>FILTERS</span>
                                <button onClick={() => setShowFilter(false)}
                                    style={{ background: "rgba(99,102,241,0.08)", border: `1px solid ${C.borderMd}`, color: C.accent, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", width: 28, height: 28, borderRadius: 6 }}>
                                    <IconClose />
                                </button>
                            </div>
                            <div style={{ padding: "16px 20px" }}>
                                {renderSidebar()}
                                {activeFilterCount > 0 && (
                                    <button
                                        onClick={() => { clearAllFilters(); setShowFilter(false) }}
                                        style={{
                                            width: "100%", marginTop: 16, padding: "11px 0", textAlign: "center",
                                            border: `1.5px solid ${C.borderHi}`, color: C.accent,
                                            fontSize: 10, letterSpacing: "0.2em",
                                            fontFamily: "'Montserrat',sans-serif", fontWeight: 700,
                                            background: "none", cursor: "pointer", borderRadius: 6,
                                            transition: "all 0.2s",
                                        }}
                                        onMouseEnter={e => { e.target.style.background = "rgba(99,102,241,0.08)"; e.target.style.borderColor = C.accent; }}
                                        onMouseLeave={e => { e.target.style.background = "none"; e.target.style.borderColor = C.borderHi; }}
                                    >CLEAR ALL FILTERS</button>
                                )}
                            </div>
                        </div>
                    </>
                )}

                {/* ── MAIN PRODUCT AREA ── */}
                <main style={{ flex: 1, padding: "20px 16px 20px 20px" }}>
                    {/* Toolbar */}
                    <div style={{
                        display: "flex", flexWrap: "wrap", alignItems: "center",
                        justifyContent: "space-between", gap: 10, marginBottom: 20,
                        paddingBottom: 16, borderBottom: `1px solid ${C.borderLo}`,
                    }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
                            {/* Mobile filter btn */}
                            <button
                                className="lg:hidden"
                                onClick={() => setShowFilter(true)}
                                style={{
                                    display: "flex", alignItems: "center", gap: 7,
                                    padding: "8px 14px",
                                    border: `1.5px solid ${C.borderHi}`, color: C.accent,
                                    background: "transparent", borderRadius: 7,
                                    fontSize: 10, letterSpacing: "0.18em",
                                    fontFamily: "'Montserrat',sans-serif", fontWeight: 700, cursor: "pointer",
                                }}
                            >
                                <IconFilter /> FILTER
                                {activeFilterCount > 0 && (
                                    <span style={{
                                        background: C.accent, color: "#fff",
                                        borderRadius: "50%", width: 16, height: 16,
                                        display: "flex", alignItems: "center", justifyContent: "center",
                                        fontSize: 8, fontWeight: 700,
                                    }}>{activeFilterCount}</span>
                                )}
                            </button>

                            {/* Active filter tags */}
                            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                                {category.map(c => <FilterTag key={c} label={c} onRemove={() => toggleCategory({ target: { value: c } })} />)}
                                {subCategory.map(s => <FilterTag key={s} label={s} onRemove={() => toggleSubCategory({ target: { value: s } })} />)}
                                {onlyDiscounted && <FilterTag label="On Sale" onRemove={() => setOnlyDiscounted(false)} />}
                                {onlyBestseller && <FilterTag label="Bestsellers" onRemove={() => setOnlyBestseller(false)} />}
                            </div>
                        </div>

                        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                            {/* Grid view toggles */}
                            <div className="hidden sm:flex" style={{ display: "flex", alignItems: "center", gap: 4 }}>
                                <button className={`view-btn ${gridCols === 4 ? 'active' : ''}`} onClick={() => setGridCols(4)}><IconGrid4 /></button>
                                <button className={`view-btn ${gridCols === 3 ? 'active' : ''}`} onClick={() => setGridCols(3)}><IconGrid3 /></button>
                                <button className={`view-btn ${gridCols === 'list' ? 'active' : ''}`} onClick={() => setGridCols('list')}><IconList /></button>
                            </div>

                            {/* Sort */}
                            <div style={{ position: "relative", display: "flex", alignItems: "center", gap: 8 }}>
                                <span style={{ color: C.accentMid }}><IconSort /></span>
                                <div style={{ position: "relative" }}>
                                    <select value={sortType} onChange={e => setSortType(e.target.value)} className="sort-select">
                                        <option value="relavent">Relevant</option>
                                        <option value="newest">Newest</option>
                                        <option value="low-high">Price: Low → High</option>
                                        <option value="high-low">Price: High → Low</option>
                                    </select>
                                    <span style={{ position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)", pointerEvents: "none", color: C.accentMid }}>
                                        <IconChevron open={false} />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Product Grid */}
                    {shownProducts.length > 0 ? (
                        <div ref={gridRef} className={`grid ${gridClass} gap-2 sm:gap-5`}>
                            {shownProducts.map((item, index) => (
                                <div key={item._id} className="col-card" style={{ animationDelay: `${(index % productsPerPage) * 0.04}s` }}>
                                    <ProductItem id={item._id} name={item.name} price={item.price} image={item.image} discountPrice={item.discountPrice} category={item.category} subCategory={item.subCategory} sku={item.sku} />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="empty-state" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "96px 0", gap: 20 }}>
                            <div style={{ width: 72, height: 72, borderRadius: "50%", background: "rgba(99,102,241,0.07)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <svg width="32" height="32" viewBox="0 0 48 48" fill="none">
                                    <circle cx="24" cy="24" r="22" stroke="rgba(99,102,241,0.2)" strokeWidth="1.5" />
                                    <path d="M16 24l5 5 11-10" stroke="rgba(99,102,241,0.35)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <p style={{ fontSize: 13, color: C.textDim, fontStyle: "italic", fontFamily: "'Montserrat',sans-serif" }}>No pieces match your current filters</p>
                            <button onClick={clearAllFilters}
                                style={{
                                    padding: "10px 28px",
                                    border: `1.5px solid ${C.borderHi}`,
                                    color: C.accent, fontSize: 10, letterSpacing: "0.2em",
                                    fontFamily: "'Montserrat',sans-serif", fontWeight: 700,
                                    background: "none", cursor: "pointer", borderRadius: 6,
                                    transition: "all 0.2s",
                                }}
                                onMouseEnter={e => { e.currentTarget.style.background = "rgba(99,102,241,0.08)"; e.currentTarget.style.borderColor = C.accent; }}
                                onMouseLeave={e => { e.currentTarget.style.background = "none"; e.currentTarget.style.borderColor = C.borderHi; }}
                            >CLEAR FILTERS</button>
                        </div>
                    )}

                    <LoadMore shown={shownProducts.length} total={filterProducts.length} onLoadMore={loadMore} loading={loadingMore} />
                </main>
            </div>
        </div>
    )
}

export default Collection