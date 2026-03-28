import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { backendUrl, currency, MyContext } from '../../App'
import { HiOutlineSearch, HiOutlineRefresh } from 'react-icons/hi'
import { MdOutlineGridView, MdOutlineTableRows, MdOutlineInventory2 } from 'react-icons/md'
import { TbEdit, TbTrash, TbEye, TbChartBar, TbPackage, TbStar, TbAlertTriangle, TbPlus, TbX, TbFileExport } from 'react-icons/tb'
import { FiChevronUp, FiChevronDown, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { BsBoxSeam } from 'react-icons/bs'

/* ════════════════════════════════════════════════════════════════
   D DOLLY LAMB — PRODUCT LIST  |  Permanent dark gold theme
════════════════════════════════════════════════════════════════ */

const B = {
  bg: '#0d0804',
  surface: '#1a0f07',
  surface2: '#221408',
  surface3: '#2a1a08',
  border: 'rgba(201,168,76,0.18)',
  borderSoft: 'rgba(201,168,76,0.09)',
  borderHover: 'rgba(201,168,76,0.40)',
  gold: '#c9a84c',
  goldLight: '#e8c46a',
  goldDim: 'rgba(201,168,76,0.12)',
  goldDim2: 'rgba(201,168,76,0.06)',
  cream: '#f0d898',
  creamSoft: '#d4b87a',
  muted: '#8b7555',
  mutedSoft: '#5a4530',
  // status
  emerald: { bg: 'rgba(52,211,153,0.10)', text: '#6ee7b7', border: 'rgba(52,211,153,0.22)' },
  amber: { bg: 'rgba(201,168,76,0.13)', text: '#e8c46a', border: 'rgba(201,168,76,0.28)' },
  red: { bg: 'rgba(248,113,113,0.10)', text: '#fca5a5', border: 'rgba(248,113,113,0.22)' },
  blue: { bg: 'rgba(96,165,250,0.11)', text: '#93c5fd', border: 'rgba(96,165,250,0.22)' },
  violet: { bg: 'rgba(167,139,250,0.10)', text: '#c4b5fd', border: 'rgba(167,139,250,0.22)' },
  gray: { bg: 'rgba(201,168,76,0.07)', text: '#c4a55a', border: 'rgba(201,168,76,0.18)' },
}

/* ── helpers ── */
const getStock = (sizes) => {
  if (!sizes || !Array.isArray(sizes)) return 0
  return sizes.reduce((s, sz) => s + (Number(sz?.stock) || 0), 0)
}
const getDiscount = (price, dp) => {
  if (!dp || !price || +dp >= +price) return null
  return Math.round((1 - dp / price) * 100)
}
const formatId = (id) => id ? `#${id.toString().slice(-6).toUpperCase()}` : '—'

/* ── badge ── */
const Badge = ({ c, children }) => (
  <span style={{
    display: 'inline-flex', alignItems: 'center', gap: 4,
    padding: '2px 9px', borderRadius: 99, fontSize: 11, fontWeight: 600,
    background: c.bg, color: c.text, border: `1px solid ${c.border}`,
    whiteSpace: 'nowrap',
  }}>{children}</span>
)

/* ── stock badge ── */
const StockBadge = ({ stock }) => {
  if (stock === 0) return <Badge c={B.red}>Out of stock</Badge>
  if (stock <= 10) return <Badge c={B.amber}>{stock} left – Low</Badge>
  return <Badge c={B.emerald}>In stock</Badge>
}

/* ── icon button ── */
const IBtn = ({ onClick, title, disabled, c = 'default', children }) => {
  const [hov, setHov] = useState(false)
  const map = {
    default: { bg: hov ? B.surface3 : B.surface2, border: hov ? B.border : B.borderSoft, color: hov ? B.cream : B.muted },
    edit: { bg: hov ? 'rgba(201,168,76,0.18)' : B.goldDim, border: hov ? B.gold : B.border, color: hov ? B.goldLight : B.gold },
    del: { bg: hov ? 'rgba(248,113,113,0.18)' : B.red.bg, border: hov ? B.red.text : B.red.border, color: B.red.text },
    view: { bg: hov ? B.surface3 : B.surface2, border: hov ? B.border : B.borderSoft, color: hov ? B.creamSoft : B.muted },
  }
  const s = map[c] || map.default
  return (
    <button
      onClick={onClick} title={title} disabled={disabled}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        width: 30, height: 30, borderRadius: 8, border: `1px solid ${s.border}`,
        background: s.bg, color: s.color,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        cursor: disabled ? 'not-allowed' : 'pointer', transition: 'all .15s',
        opacity: disabled ? 0.45 : 1, flexShrink: 0,
      }}
    >{children}</button>
  )
}

/* ── gold button ── */
const GoldBtn = ({ onClick, children, variant = 'primary', disabled = false, size = 'sm' }) => {
  const [hov, setHov] = useState(false)
  const pad = { xs: '5px 10px', sm: '7px 14px', md: '9px 20px' }[size]
  const font = { xs: 11, sm: 12.5, md: 13.5 }[size]
  const styles = {
    primary: { bg: `linear-gradient(135deg,${B.gold},${B.goldLight})`, color: '#1a0f07', border: `1px solid ${B.gold}` },
    ghost: { bg: hov ? B.surface3 : 'transparent', color: B.cream, border: `1px solid ${B.border}` },
    danger: { bg: B.red.bg, color: B.red.text, border: `1px solid ${B.red.border}` },
    surface: { bg: hov ? B.surface3 : B.surface2, color: B.cream, border: `1px solid ${B.border}` },
  }
  const s = styles[variant]
  return (
    <button onClick={onClick} disabled={disabled}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        background: s.bg, color: s.color, border: s.border,
        display: 'inline-flex', alignItems: 'center', gap: 6,
        padding: pad, borderRadius: 10, fontSize: font, fontWeight: 700,
        cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.45 : hov && variant === 'primary' ? 0.88 : 1,
        transition: 'all .15s', flexShrink: 0, whiteSpace: 'nowrap',
      }}
    >{children}</button>
  )
}

/* ── stat card ── */
const StatCard = ({ icon, value, label, accentBg, accentColor, loading }) => {
  const [hov, setHov] = useState(false)
  return (
    <div
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        background: B.surface2, border: `1px solid ${hov ? B.gold : B.border}`,
        borderRadius: 14, padding: '14px 18px',
        display: 'flex', alignItems: 'center', gap: 14,
        transition: 'all .2s', boxShadow: hov ? `0 6px 24px rgba(0,0,0,.4),0 0 0 1px ${B.border}` : '0 3px 12px rgba(0,0,0,.3)',
        transform: hov ? 'translateY(-1px)' : 'none',
      }}
    >
      <div style={{ width: 40, height: 40, borderRadius: 11, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: accentBg }}>
        {React.cloneElement(icon, { size: 19, style: { color: accentColor } })}
      </div>
      <div>
        <div style={{ fontSize: 22, fontWeight: 800, color: B.cream, lineHeight: 1, letterSpacing: -0.5 }}>
          {loading ? <div style={{ width: 48, height: 22, borderRadius: 5, background: B.goldDim, animation: 'pulse 1.5s infinite' }} /> : Number(value ?? 0).toLocaleString()}
        </div>
        <div style={{ fontSize: 11, color: B.muted, fontWeight: 600, marginTop: 4, letterSpacing: 0.3 }}>{label}</div>
      </div>
    </div>
  )
}

/* ── skeleton row ── */
const SkeletonRow = () => (
  <tr style={{ borderBottom: `1px solid ${B.borderSoft}` }}>
    {[40, 220, 90, 90, 80, 60, 70, 70, 100, 120].map((w, i) => (
      <td key={i} style={{ padding: '12px 14px' }}>
        <div style={{ height: 13, borderRadius: 5, background: B.goldDim, animation: 'pulse 1.5s infinite', width: w }} />
      </td>
    ))}
  </tr>
)

/* ══════════════════════════════════════════════════════════════
   IMAGE MODAL
══════════════════════════════════════════════════════════════ */
const ImgModal = ({ images, start, name, onClose }) => {
  const [cur, setCur] = useState(start ?? 0)
  const imgs = Array.isArray(images) ? images.filter(Boolean) : [images].filter(Boolean)

  useEffect(() => {
    const h = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') setCur(p => Math.max(0, p - 1))
      if (e.key === 'ArrowRight') setCur(p => Math.min(imgs.length - 1, p + 1))
    }
    window.addEventListener('keydown', h)
    return () => window.removeEventListener('keydown', h)
  }, [imgs.length, onClose])

  if (!imgs[cur]) return null

  return (
    <div onClick={onClose} style={{ position: 'fixed', inset: 0, zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.88)', backdropFilter: 'blur(6px)', animation: 'fadeIn .15s ease' }}>
      <div onClick={e => e.stopPropagation()} style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, maxWidth: '90vw' }}>
        {/* Close */}
        <button onClick={onClose} style={{ position: 'absolute', top: -10, right: -10, width: 30, height: 30, borderRadius: '50%', background: B.surface2, border: `1px solid ${B.border}`, color: B.cream, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 10 }}>
          <TbX size={14} />
        </button>
        <img src={imgs[cur]} alt={name} style={{ maxWidth: '80vw', maxHeight: '70vh', borderRadius: 14, objectFit: 'contain', boxShadow: '0 24px 60px rgba(0,0,0,.8)', border: `1px solid ${B.border}` }} />
        {cur > 0 && (
          <button onClick={() => setCur(p => p - 1)} style={{ position: 'absolute', left: -52, top: '50%', transform: 'translateY(-50%)', width: 40, height: 40, borderRadius: '50%', background: 'rgba(201,168,76,0.15)', border: `1px solid ${B.border}`, color: B.cream, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
            <FiChevronLeft size={20} />
          </button>
        )}
        {cur < imgs.length - 1 && (
          <button onClick={() => setCur(p => p + 1)} style={{ position: 'absolute', right: -52, top: '50%', transform: 'translateY(-50%)', width: 40, height: 40, borderRadius: '50%', background: 'rgba(201,168,76,0.15)', border: `1px solid ${B.border}`, color: B.cream, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
            <FiChevronRight size={20} />
          </button>
        )}
        {imgs.length > 1 && (
          <div style={{ display: 'flex', gap: 8 }}>
            {imgs.map((img, i) => (
              <img key={i} src={img} alt="" onClick={() => setCur(i)} style={{ width: 48, height: 48, borderRadius: 10, objectFit: 'cover', cursor: 'pointer', border: `2px solid ${i === cur ? B.gold : 'transparent'}`, opacity: i === cur ? 1 : 0.45, transition: 'all .2s' }} />
            ))}
          </div>
        )}
        <p style={{ color: B.muted, fontSize: 11.5 }}>{name} · {cur + 1}/{imgs.length} · Esc to close</p>
      </div>
    </div>
  )
}

/* ══════════════════════════════════════════════════════════════
   CONFIRM MODAL
══════════════════════════════════════════════════════════════ */
const ConfirmModal = ({ title, desc, onConfirm, onCancel }) => (
  <div onClick={onCancel} style={{ position: 'fixed', inset: 0, zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(4px)', animation: 'fadeIn .15s ease' }}>
    <div onClick={e => e.stopPropagation()} style={{ background: B.surface, border: `1px solid ${B.border}`, borderRadius: 18, padding: 28, width: 360, maxWidth: '90vw', textAlign: 'center', boxShadow: '0 24px 60px rgba(0,0,0,.7)', animation: 'slideUp .2s ease' }}>
      <div style={{ width: 52, height: 52, borderRadius: '50%', background: B.red.bg, border: `1px solid ${B.red.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
        <TbTrash size={24} style={{ color: B.red.text }} />
      </div>
      <h3 style={{ fontSize: 17, fontWeight: 800, color: B.cream, marginBottom: 8 }}>{title}</h3>
      <p style={{ fontSize: 13, color: B.muted, marginBottom: 24, lineHeight: 1.6 }}>{desc}</p>
      <div style={{ display: 'flex', gap: 10 }}>
        <button onClick={onCancel} style={{ flex: 1, padding: '10px 0', borderRadius: 11, border: `1px solid ${B.border}`, background: 'transparent', color: B.creamSoft, fontSize: 13, fontWeight: 700, cursor: 'pointer', transition: 'all .15s' }}
          onMouseEnter={e => e.currentTarget.style.background = B.surface2}
          onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
          Cancel
        </button>
        <button onClick={onConfirm} style={{ flex: 1, padding: '10px 0', borderRadius: 11, background: B.red.bg, color: B.red.text, fontSize: 13, fontWeight: 700, cursor: 'pointer', border: `1px solid ${B.red.border}`, transition: 'all .15s' }}
          onMouseEnter={e => e.currentTarget.style.background = 'rgba(248,113,113,0.2)'}
          onMouseLeave={e => e.currentTarget.style.background = B.red.bg}>
          Yes, Delete
        </button>
      </div>
    </div>
  </div>
)

/* ══════════════════════════════════════════════════════════════
   MAIN COMPONENT
══════════════════════════════════════════════════════════════ */
const ProductsList = ({ token }) => {
  const navigate = useNavigate()
  const context = useContext(MyContext)
  const [list, setList] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [catFilter, setCatFilter] = useState('all')
  const [subCatFilter, setSubCatFilter] = useState('all')
  const [stockFilter, setStockFilter] = useState('all')
  const [sortBy, setSortBy] = useState('newest')
  const [sortDir, setSortDir] = useState('desc')
  const [viewMode, setViewMode] = useState('table')
  const [selected, setSelected] = useState([])
  const [deletingIds, setDeletingIds] = useState([])
  const [confirmDelete, setConfirmDelete] = useState(null)
  const [imgModal, setImgModal] = useState(null)
  const [page, setPage] = useState(1)
  const PER_PAGE = 12

  /* ── fetch ── */
  const fetchList = async () => {
    setLoading(true)
    try {
      const res = await axios.get(backendUrl + '/api/product/list')
      if (res.data.success) setList(res.data.products || [])
      else toast.error(res.data.message)
    } catch (e) { toast.error(e?.message || 'Failed to fetch products') }
    finally { setLoading(false) }
  }

  /* ── delete ── */
  const removeProduct = async (id) => {
    setDeletingIds(p => [...p, id])
    try {
      const res = await axios.post(backendUrl + '/api/product/remove', { id }, { headers: { token } })
      if (res.data.success) { toast.success('Product removed'); setList(prev => prev.filter(p => p._id !== id)); setSelected(prev => prev.filter(x => x !== id)) }
      else toast.error(res.data.message)
    } catch (e) { toast.error(e?.message || 'Delete failed') }
    finally { setDeletingIds(p => p.filter(x => x !== id)) }
  }

  const removeBulk = async () => { for (const id of [...selected]) await removeProduct(id); setSelected([]) }

  /* ── export ── */
  const exportCSV = () => {
    const rows = [['ID', 'Name', 'Category', 'Sub-Category', 'Price', 'Discount Price', 'Stock', 'Bestseller']]
    filtered.forEach(p => rows.push([p._id, `"${(p.name || '').replace(/"/g, '""')}"`, p.category || '', p.subCategory || '', p.price || 0, p.discountPrice || '', getStock(p.sizes), p.bestseller ? 'Yes' : 'No']))
    const csv = rows.map(r => r.join(',')).join('\n')
    const blob = new Blob([csv], { type: 'text/csv' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url; a.download = `products_${new Date().toISOString().slice(0, 10)}.csv`; a.click()
    URL.revokeObjectURL(url); toast.success('Products exported!')
  }

  useEffect(() => { fetchList() }, [])
  useEffect(() => { setPage(1) }, [search, catFilter, subCatFilter, stockFilter, sortBy])

  const categories = ['all', ...new Set(list.map(p => p.category).filter(Boolean))]
  const subCategories = ['all', ...new Set(list.filter(p => catFilter === 'all' || p.category === catFilter).map(p => p.subCategory).filter(Boolean))]

  /* ── filter + sort ── */
  const filtered = list.filter(p => {
    const q = search.toLowerCase()
    const matchS = !q || p.name?.toLowerCase().includes(q) || p.category?.toLowerCase().includes(q) || p.subCategory?.toLowerCase().includes(q)
    const matchC = catFilter === 'all' || p.category === catFilter
    const matchSub = subCatFilter === 'all' || p.subCategory === subCatFilter
    const st = getStock(p.sizes)
    const matchSt = stockFilter === 'all' ? true : stockFilter === 'out' ? st === 0 : stockFilter === 'low' ? st > 0 && st <= 10 : st > 10
    return matchS && matchC && matchSub && matchSt
  }).sort((a, b) => {
    if (sortBy === 'newest') return sortDir === 'asc' ? a._id.localeCompare(b._id) : b._id.localeCompare(a._id)
    if (sortBy === 'name') { const r = (a.name || '').localeCompare(b.name || ''); return sortDir === 'asc' ? r : -r }
    const v = (p) => sortBy === 'price' ? (+p.price || 0) : getStock(p.sizes)
    return sortDir === 'asc' ? v(a) - v(b) : v(b) - v(a)
  })

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE))
  const paginated = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE)

  const toggleSelect = (id) => setSelected(p => p.includes(id) ? p.filter(x => x !== id) : [...p, id])
  const toggleAll = () => setSelected(selected.length === paginated.length ? [] : paginated.map(p => p._id))
  const handleSort = (col) => { if (sortBy === col) setSortDir(d => d === 'asc' ? 'desc' : 'asc'); else { setSortBy(col); setSortDir('asc') } }

  const totalStock = list.reduce((s, p) => s + getStock(p.sizes), 0)
  const bestsellerCount = list.filter(p => p.bestseller).length
  const outOfStock = list.filter(p => getStock(p.sizes) === 0).length

  /* ── select style ── */
  const selectStyle = {
    background: B.surface2, border: `1px solid ${B.border}`, color: B.creamSoft,
    borderRadius: 10, padding: '8px 32px 8px 12px', fontSize: 13, fontWeight: 500,
    outline: 'none', cursor: 'pointer', appearance: 'none',
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%238b7555' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`,
    backgroundRepeat: 'no-repeat', backgroundPosition: 'right 10px center',
  }

  /* ── sort button ── */
  const SortBtn = ({ col, label }) => (
    <button onClick={() => handleSort(col)} style={{ display: 'flex', alignItems: 'center', gap: 3, background: 'none', border: 'none', cursor: 'pointer', color: sortBy === col ? B.gold : B.muted, fontWeight: 700, fontSize: 11, letterSpacing: 0.6, textTransform: 'uppercase', transition: 'color .15s' }}>
      {label}
      <span style={{ display: 'flex', flexDirection: 'column', opacity: 0.7 }}>
        <FiChevronUp size={9} style={{ color: sortBy === col && sortDir === 'asc' ? B.gold : B.mutedSoft }} />
        <FiChevronDown size={9} style={{ color: sortBy === col && sortDir === 'desc' ? B.gold : B.mutedSoft }} />
      </span>
    </button>
  )

  /* th style */
  const thStyle = { padding: '11px 14px', textAlign: 'left', fontSize: 11, fontWeight: 700, letterSpacing: 0.6, textTransform: 'uppercase', color: B.muted, borderBottom: `1px solid ${B.borderSoft}`, background: B.surface, whiteSpace: 'nowrap' }
  const tdStyle = { padding: '11px 14px', borderBottom: `1px solid ${B.borderSoft}`, verticalAlign: 'middle' }

  /* ══════════════════════════════════════
     TABLE VIEW
  ══════════════════════════════════════ */
  const renderTable = () => (
    <div style={{ margin: '0 20px 32px', overflowX: 'auto', borderRadius: 14, border: `1px solid ${B.border}`, background: B.surface }}>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ ...thStyle, width: 42 }}>
              <input type="checkbox" style={{ width: 14, height: 14, accentColor: B.gold, cursor: 'pointer' }}
                checked={paginated.length > 0 && selected.length === paginated.length} onChange={toggleAll} />
            </th>
            <th style={{ ...thStyle, minWidth: 220 }}><SortBtn col="name" label="Product" /></th>
            <th style={thStyle}>Category</th>
            <th style={thStyle}>Sub-cat</th>
            <th style={thStyle}><SortBtn col="price" label="Price" /></th>
            <th style={thStyle}><SortBtn col="stock" label="Stock" /></th>
            <th style={thStyle}>Colors</th>
            <th style={thStyle}>Sizes</th>
            <th style={thStyle}>Status</th>
            <th style={{ ...thStyle, minWidth: 130 }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            Array(8).fill(0).map((_, i) => <SkeletonRow key={i} />)
          ) : paginated.length === 0 ? (
            <tr><td colSpan={10}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '64px 24px', textAlign: 'center' }}>
                <div style={{ width: 60, height: 60, borderRadius: 14, background: B.goldDim, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                  <BsBoxSeam size={26} style={{ color: B.mutedSoft }} />
                </div>
                <h3 style={{ fontSize: 16, fontWeight: 800, color: B.cream, marginBottom: 6 }}>No products found</h3>
                <p style={{ fontSize: 13, color: B.muted, marginBottom: 16 }}>Try adjusting your search or filters</p>
                <GoldBtn variant="ghost" onClick={() => { setSearch(''); setCatFilter('all'); setSubCatFilter('all'); setStockFilter('all') }}>
                  Clear Filters
                </GoldBtn>
              </div>
            </td></tr>
          ) : paginated.map((item) => {
            const stock = getStock(item.sizes)
            const disc = getDiscount(item.price, item.discountPrice)
            const imgs = Array.isArray(item.image) ? item.image.filter(Boolean) : [item.image].filter(Boolean)
            const colors = item.color || []
            const sizes = item.sizes || []
            const isDel = deletingIds.includes(item._id)
            const isSel = selected.includes(item._id)

            return (
              <tr key={item._id} style={{ background: isSel ? 'rgba(201,168,76,0.07)' : 'transparent', opacity: isDel ? 0.4 : 1, pointerEvents: isDel ? 'none' : 'auto', transition: 'background .15s' }}
                onMouseEnter={e => { if (!isSel) e.currentTarget.style.background = B.goldDim2 }}
                onMouseLeave={e => { if (!isSel) e.currentTarget.style.background = 'transparent' }}>

                {/* Checkbox */}
                <td style={tdStyle}>
                  <input type="checkbox" style={{ width: 14, height: 14, accentColor: B.gold, cursor: 'pointer' }}
                    checked={isSel} onChange={() => toggleSelect(item._id)} />
                </td>

                {/* Product */}
                <td style={tdStyle}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <div
                      onClick={() => imgs.length > 0 && setImgModal({ images: imgs, name: item.name, start: 0 })}
                      style={{ position: 'relative', width: 46, height: 46, borderRadius: 10, overflow: 'hidden', border: `1px solid ${B.border}`, background: B.surface2, flexShrink: 0, cursor: 'pointer' }}
                    >
                      {imgs[0]
                        ? <img src={imgs[0]} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform .2s' }}
                          onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
                          onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'} />
                        : <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><BsBoxSeam size={18} style={{ color: B.mutedSoft }} /></div>
                      }
                      {imgs.length > 1 && (
                        <span style={{ position: 'absolute', bottom: 2, right: 2, background: 'rgba(0,0,0,0.65)', color: '#fff', fontSize: 8, fontWeight: 800, padding: '1px 4px', borderRadius: 4 }}>+{imgs.length - 1}</span>
                      )}
                    </div>
                    <div>
                      <div onClick={() => navigate(`/update-product/${item._id}`)}
                        style={{ fontSize: 13, fontWeight: 600, color: B.cream, cursor: 'pointer', transition: 'color .15s', maxWidth: 180, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}
                        onMouseEnter={e => e.currentTarget.style.color = B.gold}
                        onMouseLeave={e => e.currentTarget.style.color = B.cream}>
                        {item.name}
                      </div>
                      <div style={{ fontSize: 10.5, color: B.mutedSoft, fontFamily: 'monospace', marginTop: 2 }}>{formatId(item._id)}</div>
                      {item.bestseller && (
                        <span style={{ display: 'inline-block', marginTop: 3, fontSize: 9, fontWeight: 700, color: B.gold, background: B.goldDim, border: `1px solid rgba(201,168,76,0.3)`, padding: '1px 6px', borderRadius: 99 }}>
                          ♛ Bestseller
                        </span>
                      )}
                    </div>
                  </div>
                </td>

                {/* Category */}
                <td style={tdStyle}><Badge c={B.gray}>{item.category || '—'}</Badge></td>
                <td style={tdStyle}><Badge c={B.gray}>{item.subCategory || '—'}</Badge></td>

                {/* Price */}
                <td style={tdStyle}>
                  <div style={{ fontSize: 14, fontWeight: 800, color: B.cream }}>{currency}{(item.discountPrice || item.price || 0).toLocaleString()}</div>
                  {disc && (
                    <>
                      <div style={{ fontSize: 11, color: B.mutedSoft, textDecoration: 'line-through' }}>{currency}{(+item.price).toLocaleString()}</div>
                      <div style={{ fontSize: 10.5, color: B.emerald.text, fontWeight: 700 }}>{disc}% off</div>
                    </>
                  )}
                </td>

                {/* Stock */}
                <td style={tdStyle}>
                  <div style={{ fontSize: 13, fontWeight: 800, color: stock > 10 ? B.emerald.text : stock > 0 ? B.amber.text : B.red.text }}>{stock > 0 ? stock.toLocaleString() : 'Out'}</div>
                  {stock > 0 && stock <= 10 && <div style={{ fontSize: 10, color: B.amber.text, fontWeight: 600 }}>Low stock</div>}
                </td>

                {/* Colors */}
                <td style={tdStyle}>
                  {colors.length > 0 ? (
                    <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
                      {colors.slice(0, 5).map((c, i) => (
                        <div key={i} style={{ width: 14, height: 14, borderRadius: '50%', background: c?.hex || c, border: `1px solid rgba(255,255,255,0.15)`, flexShrink: 0 }} title={c?.name || c} />
                      ))}
                      {colors.length > 5 && <span style={{ fontSize: 10, color: B.muted, fontWeight: 600, alignSelf: 'center' }}>+{colors.length - 5}</span>}
                    </div>
                  ) : <span style={{ color: B.mutedSoft, fontSize: 12 }}>—</span>}
                </td>

                {/* Sizes */}
                <td style={tdStyle}>
                  {sizes.length > 0 ? (
                    <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
                      {sizes.slice(0, 4).map((s, i) => (
                        <span key={i} style={{ background: B.goldDim, color: B.creamSoft, border: `1px solid ${B.borderSoft}`, borderRadius: 6, padding: '2px 6px', fontSize: 10, fontWeight: 700 }}>
                          {typeof s === 'object' ? (s.size || '?') : s}
                        </span>
                      ))}
                      {sizes.length > 4 && <span style={{ background: B.goldDim, color: B.muted, border: `1px solid ${B.borderSoft}`, borderRadius: 6, padding: '2px 6px', fontSize: 10, fontWeight: 700 }}>+{sizes.length - 4}</span>}
                    </div>
                  ) : <span style={{ color: B.mutedSoft, fontSize: 12 }}>—</span>}
                </td>

                {/* Status */}
                <td style={tdStyle}><StockBadge stock={stock} /></td>

                {/* Actions */}
                <td style={tdStyle}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                    <IBtn title="Preview" c="view" onClick={() => imgs.length > 0 && setImgModal({ images: imgs, name: item.name, start: 0 })}><TbEye size={14} /></IBtn>
                    <IBtn title="Edit" c="edit" onClick={() => navigate(`/update-product/${item._id}`)}><TbEdit size={14} /></IBtn>
                    <IBtn title="Delete" c="del" disabled={isDel} onClick={() => setConfirmDelete({ id: item._id, name: item.name })}>
                      {isDel ? <div style={{ width: 12, height: 12, border: `2px solid ${B.red.border}`, borderTopColor: B.red.text, borderRadius: '50%', animation: 'spin 0.6s linear infinite' }} /> : <TbTrash size={14} />}
                    </IBtn>
                  </div>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )

  /* ══════════════════════════════════════
     GRID VIEW
  ══════════════════════════════════════ */
  const renderGrid = () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(200px,1fr))', gap: 14, margin: '0 20px 32px' }}>
      {loading ? Array(10).fill(0).map((_, i) => (
        <div key={i} style={{ background: B.surface2, border: `1px solid ${B.border}`, borderRadius: 14, overflow: 'hidden' }}>
          <div style={{ width: '100%', aspectRatio: '1', background: B.goldDim, animation: 'pulse 1.5s infinite' }} />
          <div style={{ padding: 12, display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[60, 80, 40].map((w, j) => <div key={j} style={{ height: 10, borderRadius: 4, background: B.goldDim, animation: 'pulse 1.5s infinite', width: `${w}%` }} />)}
          </div>
        </div>
      )) : paginated.length === 0 ? (
        <div style={{ gridColumn: '1/-1', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '64px 0' }}>
          <BsBoxSeam size={30} style={{ color: B.mutedSoft, marginBottom: 12 }} />
          <h3 style={{ fontSize: 15, fontWeight: 800, color: B.cream, marginBottom: 6 }}>No products found</h3>
          <p style={{ fontSize: 13, color: B.muted, marginBottom: 16 }}>Try adjusting your filters</p>
          <GoldBtn variant="ghost" onClick={() => { setSearch(''); setCatFilter('all'); setSubCatFilter('all'); setStockFilter('all') }}>Clear Filters</GoldBtn>
        </div>
      ) : paginated.map((item) => {
        const stock = getStock(item.sizes)
        const disc = getDiscount(item.price, item.discountPrice)
        const imgs = Array.isArray(item.image) ? item.image.filter(Boolean) : [item.image].filter(Boolean)
        const colors = item.color || []
        const isSel = selected.includes(item._id)

        return (
          <div key={item._id}
            style={{ background: B.surface2, border: `1px solid ${isSel ? B.gold : B.border}`, borderRadius: 14, overflow: 'hidden', transition: 'all .2s', boxShadow: isSel ? `0 0 0 2px ${B.goldDim},0 6px 20px rgba(0,0,0,.4)` : '0 3px 12px rgba(0,0,0,.3)' }}
            onMouseEnter={e => { if (!isSel) { e.currentTarget.style.borderColor = B.gold; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = `0 8px 28px rgba(0,0,0,.5)` } }}
            onMouseLeave={e => { if (!isSel) { e.currentTarget.style.borderColor = B.border; e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 3px 12px rgba(0,0,0,.3)' } }}>

            {/* Image */}
            <div onClick={() => imgs.length > 0 && setImgModal({ images: imgs, name: item.name, start: 0 })}
              style={{ position: 'relative', overflow: 'hidden', aspectRatio: '1', background: B.surface, cursor: 'pointer' }}>
              {imgs[0]
                ? <img src={imgs[0]} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform .3s' }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.06)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'} />
                : <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><BsBoxSeam size={32} style={{ color: B.mutedSoft }} /></div>
              }
              {item.bestseller && (
                <span style={{ position: 'absolute', top: 8, left: 8, background: `linear-gradient(135deg,${B.gold},${B.goldLight})`, color: '#1a0f07', fontSize: 9, fontWeight: 800, padding: '2px 7px', borderRadius: 99 }}>♛ BESTSELLER</span>
              )}
              {imgs.length > 1 && (
                <span style={{ position: 'absolute', top: 8, right: 8, background: 'rgba(0,0,0,0.6)', color: '#fff', fontSize: 10, fontWeight: 700, padding: '2px 6px', borderRadius: 6 }}>+{imgs.length - 1}</span>
              )}
              {/* Select overlay */}
              <div onClick={e => { e.stopPropagation(); toggleSelect(item._id) }}
                style={{ position: 'absolute', bottom: 8, right: 8, width: 22, height: 22, borderRadius: 7, border: `2px solid ${isSel ? B.gold : B.border}`, background: isSel ? B.gold : 'rgba(13,8,4,0.55)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontSize: 11, fontWeight: 800, color: isSel ? '#1a0f07' : 'transparent', transition: 'all .15s' }}>
                ✓
              </div>
            </div>

            {/* Body */}
            <div style={{ padding: '12px 12px 12px' }}>
              <div style={{ display: 'flex', gap: 5, marginBottom: 6, flexWrap: 'wrap' }}>
                {item.category && <span style={{ fontSize: 10, background: B.goldDim, color: B.muted, borderRadius: 99, padding: '1px 7px', fontWeight: 500 }}>{item.category}</span>}
              </div>
              <div onClick={() => navigate(`/update-product/${item._id}`)}
                style={{ fontSize: 12.5, fontWeight: 700, color: B.cream, cursor: 'pointer', marginBottom: 7, overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', lineHeight: 1.4, transition: 'color .15s' }}
                onMouseEnter={e => e.currentTarget.style.color = B.gold}
                onMouseLeave={e => e.currentTarget.style.color = B.cream}>
                {item.name}
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginBottom: 8 }}>
                <span style={{ fontSize: 15, fontWeight: 800, color: B.cream }}>{currency}{(item.discountPrice || item.price || 0).toLocaleString()}</span>
                {disc && (
                  <>
                    <span style={{ fontSize: 11, color: B.mutedSoft, textDecoration: 'line-through' }}>{currency}{(+item.price).toLocaleString()}</span>
                    <span style={{ fontSize: 10, color: B.emerald.text, fontWeight: 700, background: B.emerald.bg, padding: '1px 5px', borderRadius: 99 }}>{disc}% off</span>
                  </>
                )}
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 10 }}>
                <StockBadge stock={stock} />
                {colors.length > 0 && (
                  <div style={{ display: 'flex', gap: 3, alignItems: 'center' }}>
                    {colors.slice(0, 4).map((c, i) => <div key={i} style={{ width: 12, height: 12, borderRadius: '50%', background: c?.hex || c, border: '1px solid rgba(255,255,255,0.12)' }} />)}
                    {colors.length > 4 && <span style={{ fontSize: 10, color: B.muted, fontWeight: 600 }}>+{colors.length - 4}</span>}
                  </div>
                )}
              </div>
              {/* Footer */}
              <div style={{ display: 'flex', gap: 7, paddingTop: 10, borderTop: `1px solid ${B.borderSoft}` }}>
                <button onClick={() => imgs.length > 0 && setImgModal({ images: imgs, name: item.name, start: 0 })}
                  style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5, padding: '6px 0', borderRadius: 8, background: B.surface, border: `1px solid ${B.borderSoft}`, color: B.muted, fontSize: 11.5, fontWeight: 700, cursor: 'pointer', transition: 'all .15s' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = B.border; e.currentTarget.style.color = B.creamSoft }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = B.borderSoft; e.currentTarget.style.color = B.muted }}>
                  <TbEye size={12} /> View
                </button>
                <button onClick={() => navigate(`/update-product/${item._id}`)}
                  style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5, padding: '6px 0', borderRadius: 8, background: B.goldDim, border: `1px solid ${B.border}`, color: B.gold, fontSize: 11.5, fontWeight: 700, cursor: 'pointer', transition: 'all .15s' }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(201,168,76,0.2)'; e.currentTarget.style.color = B.goldLight }}
                  onMouseLeave={e => { e.currentTarget.style.background = B.goldDim; e.currentTarget.style.color = B.gold }}>
                  <TbEdit size={12} /> Edit
                </button>
                <button onClick={() => setConfirmDelete({ id: item._id, name: item.name })}
                  style={{ width: 30, height: 30, borderRadius: 8, background: B.red.bg, border: `1px solid ${B.red.border}`, color: B.red.text, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', flexShrink: 0, transition: 'all .15s' }}
                  onMouseEnter={e => e.currentTarget.style.background = 'rgba(248,113,113,0.2)'}
                  onMouseLeave={e => e.currentTarget.style.background = B.red.bg}>
                  <TbTrash size={13} />
                </button>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )

  /* ══════════════════════════════════════
     RENDER
  ══════════════════════════════════════ */
  return (
    <div style={{ minHeight: '100vh', background: B.bg, fontFamily: 'system-ui,-apple-system,sans-serif', WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale' }}>
      <style>{`
        @keyframes fadeIn  { from{opacity:0}to{opacity:1} }
        @keyframes slideUp { from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)} }
        @keyframes spin    { from{transform:rotate(0deg)}to{transform:rotate(360deg)} }
        @keyframes pulse   { 0%,100%{opacity:1}50%{opacity:.4} }
      `}</style>

      {/* ── TOP BAR ── */}
      <div style={{ position: 'sticky', top: 64, zIndex: 40, background: B.surface, borderBottom: `1px solid ${B.border}`, padding: '0 20px', height: 60, display: 'flex', alignItems: 'center', justifyContent: 'space-between', boxShadow: '0 2px 16px rgba(0,0,0,.4)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 36, height: 36, borderRadius: 10, background: B.goldDim, border: `1px solid ${B.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <TbPackage size={18} style={{ color: B.gold }} />
          </div>
          <div>
            <h1 style={{ fontSize: 17, fontWeight: 800, color: B.cream, lineHeight: 1, letterSpacing: -0.3 }}>Products</h1>
            <p style={{ fontSize: 11, color: B.muted, marginTop: 2 }}>{loading ? '…' : `${list.length} total products`}</p>
          </div>
          {!loading && (
            <span style={{ padding: '2px 10px', borderRadius: 99, background: B.goldDim, color: B.gold, fontSize: 11, fontWeight: 700, border: `1px solid ${B.border}` }}>
              {list.length}
            </span>
          )}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <GoldBtn variant="ghost" onClick={exportCSV} size="sm">
            <TbFileExport size={14} /> <span>Export CSV</span>
          </GoldBtn>
          <GoldBtn variant="surface" onClick={fetchList} disabled={loading} size="sm">
            <HiOutlineRefresh size={14} style={{ animation: loading ? 'spin 1s linear infinite' : undefined }} /> Refresh
          </GoldBtn>
          <GoldBtn variant="primary" onClick={() => context.setIsOpenFullScreenPanel({ open: true, modal: 'Add product' })} size="sm">
            <TbPlus size={15} /> Add Product
          </GoldBtn>
        </div>
      </div>

      {/* ── STAT CARDS ── */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14, padding: '18px 20px 0' }} className="stat-grid">
        <StatCard icon={<MdOutlineInventory2 />} value={list.length} label="Total Products" accentBg={B.goldDim} accentColor={B.gold} loading={loading} />
        <StatCard icon={<TbChartBar />} value={totalStock} label="Total Stock Units" accentBg={B.emerald.bg} accentColor={B.emerald.text} loading={loading} />
        <StatCard icon={<TbStar />} value={bestsellerCount} label="Bestsellers" accentBg={B.amber.bg} accentColor={B.amber.text} loading={loading} />
        <StatCard icon={<TbAlertTriangle />} value={outOfStock} label="Out of Stock" accentBg={B.red.bg} accentColor={B.red.text} loading={loading} />
      </div>

      {/* ── TOOLBAR ── */}
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 10, padding: '16px 20px 10px' }}>
        {/* Search */}
        <div style={{ position: 'relative', flex: 1, minWidth: 200 }}>
          <HiOutlineSearch size={14} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: B.muted, pointerEvents: 'none' }} />
          <input type="text" placeholder="Search by name, category…" value={search} onChange={e => setSearch(e.target.value)}
            style={{ width: '100%', paddingLeft: 36, paddingRight: search ? 36 : 14, paddingTop: 9, paddingBottom: 9, borderRadius: 10, border: `1px solid ${B.border}`, background: B.surface2, color: B.cream, fontSize: 13, outline: 'none', transition: 'border-color .2s', caretColor: B.gold, boxSizing: 'border-box' }}
            onFocus={e => e.target.style.borderColor = B.gold}
            onBlur={e => e.target.style.borderColor = B.border}
          />
          {search && (
            <button onClick={() => setSearch('')} style={{ position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)', width: 18, height: 18, borderRadius: '50%', background: B.surface3, border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: B.muted }}>
              <TbX size={10} />
            </button>
          )}
        </div>

        <select style={selectStyle} value={catFilter} onChange={e => { setCatFilter(e.target.value); setSubCatFilter('all') }}>
          {categories.map(c => <option key={c} value={c}>{c === 'all' ? 'All Categories' : c}</option>)}
        </select>

        <select style={selectStyle} value={subCatFilter} onChange={e => setSubCatFilter(e.target.value)}>
          {subCategories.map(s => <option key={s} value={s}>{s === 'all' ? 'All Sub-cats' : s}</option>)}
        </select>

        <select style={selectStyle} value={stockFilter} onChange={e => setStockFilter(e.target.value)}>
          <option value="all">All Stock</option>
          <option value="in">In Stock (&gt;10)</option>
          <option value="low">Low Stock (≤10)</option>
          <option value="out">Out of Stock</option>
        </select>

        <select style={selectStyle} value={sortBy} onChange={e => { setSortBy(e.target.value); setSortDir(e.target.value === 'newest' ? 'desc' : 'asc') }}>
          <option value="newest">Newest First</option>
          <option value="name">Name (A–Z)</option>
          <option value="price">Price (Low–High)</option>
          <option value="stock">Stock (Low–High)</option>
        </select>

        {/* View toggle */}
        <div style={{ display: 'flex', background: B.surface2, border: `1px solid ${B.border}`, borderRadius: 10, overflow: 'hidden' }}>
          {[['table', <MdOutlineTableRows size={14} />, 'Table'], ['grid', <MdOutlineGridView size={14} />, 'Grid']].map(([v, ic, lb]) => (
            <button key={v} onClick={() => setViewMode(v)} style={{ padding: '7px 12px', display: 'flex', alignItems: 'center', gap: 5, fontSize: 12.5, fontWeight: 700, cursor: 'pointer', border: 'none', transition: 'all .15s', background: viewMode === v ? `linear-gradient(135deg,${B.gold},${B.goldLight})` : B.surface2, color: viewMode === v ? '#1a0f07' : B.muted }}>
              {ic} {lb}
            </button>
          ))}
        </div>
      </div>

      {/* ── RESULTS BAR ── */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '4px 20px 12px' }}>
        <p style={{ fontSize: 12.5, color: B.muted }}>
          {loading ? 'Loading…' : (
            <>Showing <strong style={{ color: B.creamSoft }}>{paginated.length}</strong> of <strong style={{ color: B.creamSoft }}>{filtered.length}</strong> products{search && <span style={{ color: B.gold }}> for "{search}"</span>}</>
          )}
        </p>
        {selected.length > 0 && (
          <span style={{ fontSize: 12, color: B.gold, fontWeight: 700, background: B.goldDim, border: `1px solid ${B.border}`, padding: '2px 10px', borderRadius: 99 }}>
            {selected.length} selected
          </span>
        )}
      </div>

      {/* ── CONTENT ── */}
      {viewMode === 'table' ? renderTable() : renderGrid()}

      {/* ── PAGINATION ── */}
      {!loading && totalPages > 1 && (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, padding: '0 20px 40px' }}>
          {[
            <button key="prev" onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1}
              style={{ width: 34, height: 34, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 9, border: `1px solid ${B.border}`, background: B.surface2, color: B.muted, cursor: page === 1 ? 'not-allowed' : 'pointer', opacity: page === 1 ? 0.4 : 1, transition: 'all .15s' }}>
              <FiChevronLeft size={15} />
            </button>,
            ...Array.from({ length: totalPages }, (_, i) => i + 1)
              .filter(p => p === 1 || p === totalPages || Math.abs(p - page) <= 1)
              .reduce((acc, p, i, arr) => { if (i > 0 && arr[i - 1] !== p - 1) acc.push('…'); acc.push(p); return acc; }, [])
              .map((p, i) => p === '…'
                ? <span key={`e${i}`} style={{ color: B.mutedSoft, fontSize: 13, padding: '0 4px' }}>…</span>
                : <button key={p} onClick={() => setPage(p)}
                  style={{ width: 34, height: 34, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 9, border: `1px solid ${page === p ? B.gold : B.border}`, background: page === p ? `linear-gradient(135deg,${B.gold},${B.goldLight})` : B.surface2, color: page === p ? '#1a0f07' : B.creamSoft, fontSize: 13, fontWeight: 700, cursor: 'pointer', transition: 'all .15s' }}>
                  {p}
                </button>
              ),
            <button key="next" onClick={() => setPage(p => Math.min(totalPages, p + 1))} disabled={page === totalPages}
              style={{ width: 34, height: 34, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 9, border: `1px solid ${B.border}`, background: B.surface2, color: B.muted, cursor: page === totalPages ? 'not-allowed' : 'pointer', opacity: page === totalPages ? 0.4 : 1, transition: 'all .15s' }}>
              <FiChevronRight size={15} />
            </button>
          ]}
        </div>
      )}

      {/* ── BULK ACTION BAR ── */}
      {selected.length > 0 && (
        <div style={{ position: 'fixed', bottom: 24, left: '50%', transform: 'translateX(-50%)', zIndex: 50, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, padding: '12px 20px', borderRadius: 16, background: B.surface, border: `1px solid ${B.border}`, boxShadow: `0 16px 48px rgba(0,0,0,.7), 0 0 0 1px ${B.border}`, minWidth: 320, animation: 'slideUp .2s ease' }}>
          <div style={{ fontSize: 13.5, fontWeight: 700, color: B.cream }}>
            {selected.length} selected <span style={{ color: B.muted, fontWeight: 400 }}>· Bulk actions</span>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <GoldBtn variant="ghost" size="xs" onClick={() => setSelected([])}><TbX size={11} /> Deselect</GoldBtn>
            <GoldBtn variant="danger" size="xs" onClick={() => setConfirmDelete('bulk')}><TbTrash size={12} /> Delete Selected</GoldBtn>
          </div>
        </div>
      )}

      {/* ── MODALS ── */}
      {confirmDelete && (
        <ConfirmModal
          title={confirmDelete === 'bulk' ? `Delete ${selected.length} Products?` : 'Delete Product?'}
          desc={confirmDelete === 'bulk' ? `This will permanently remove ${selected.length} selected products. This cannot be undone.` : `"${confirmDelete.name}" will be permanently deleted. This cannot be undone.`}
          onConfirm={() => { setConfirmDelete(null); if (confirmDelete === 'bulk') removeBulk(); else removeProduct(confirmDelete.id) }}
          onCancel={() => setConfirmDelete(null)}
        />
      )}
      {imgModal && <ImgModal {...imgModal} onClose={() => setImgModal(null)} />}

      {/* Responsive */}
      <style>{`@media(max-width:900px){.stat-grid{grid-template-columns:repeat(2,1fr)!important}}@media(max-width:500px){.stat-grid{grid-template-columns:1fr!important}}`}</style>
    </div>
  )
}

export default ProductsList