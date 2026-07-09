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
   D DOLLY LAMB — PRODUCT LIST  |  Light Luxury Theme
   ── Color tokens mirrored from Sidebar.jsx ──────────────────────
   bg-base:       #FAFAF8   warm ivory white
   bg-surface:    #F4F2EE   soft warm off-white
   bg-hover:      #EDE9E2   warm linen hover
   bg-active:     #E8F4EE   soft sage active
   navy:          #1C2B3A   primary text
   navy-mid:      #2E4057   secondary text
   navy-soft:     #4A6070   muted / icons
   navy-ghost:    #8FA0AD   placeholder / labels
   green:         #1A7A4A   primary accent
   green-light:   #2A9960   hover on green
   green-bg:      #E8F4EE   active bg
   green-border:  #A8D5BC   active border
   champagne:     #B8985A   gold accent
   champagne-bg:  #FBF5E8   subtle gold bg
   champagne-bdr: #DBC98A   gold border
   border:        #E0DBD3   subtle warm border
   border-strong: #C8C2B8   divider
════════════════════════════════════════════════════════════════ */

const B = {
  /* ── Backgrounds ── */
  bg: '#FAFAF8',
  surface: '#F4F2EE',
  surface2: '#EDE9E2',
  surfaceCard: '#FFFFFF',

  /* ── Text ── */
  navy: '#1C2B3A',
  navyMid: '#2E4057',
  navySoft: '#4A6070',
  navyGhost: '#8FA0AD',

  /* ── Primary green ── */
  green: '#1A7A4A',
  greenLight: '#2A9960',
  greenBg: '#E8F4EE',
  greenBdr: '#A8D5BC',

  /* ── Champagne / gold ── */
  gold: '#B8985A',
  goldLight: '#CBA96B',
  goldBg: '#FBF5E8',
  goldBdr: '#DBC98A',

  /* ── Borders ── */
  border: '#E0DBD3',
  borderStrong: '#C8C2B8',

  /* ── Status palettes ── */
  emerald: { bg: '#ECFDF5', text: '#065F46', border: '#A7F3D0', dot: '#10B981' },
  amber: { bg: '#FFFBEB', text: '#92400E', border: '#FDE68A', dot: '#F59E0B' },
  red: { bg: '#FEF2F2', text: '#991B1B', border: '#FECACA', dot: '#EF4444' },
  blue: { bg: '#EFF6FF', text: '#1D4ED8', border: '#BFDBFE', dot: '#3B82F6' },
  violet: { bg: '#F5F3FF', text: '#5B21B6', border: '#DDD6FE', dot: '#7C3AED' },
  gray: { bg: '#F4F2EE', text: '#4A6070', border: '#E0DBD3' },
}

/* ── helpers ── */
const getStock = (sizes) => { if (!sizes || !Array.isArray(sizes)) return 0; return sizes.reduce((s, sz) => s + (Number(sz?.stock) || 0), 0) }
// const getDiscount = (price, dp) => { if (!dp || !price || +dp >= +price) return null; return Math.round((1 - dp / price) * 100) }
const getDiscount = (price, dp) => { if (!dp || +dp <= 0 || +dp >= 100) return null; return Math.round(+dp) }
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
    default: { bg: hov ? B.surface2 : B.surfaceCard, border: hov ? B.borderStrong : B.border, color: hov ? B.navy : B.navyGhost },
    edit: { bg: hov ? B.greenBg : B.surfaceCard, border: hov ? B.greenBdr : B.border, color: hov ? B.green : B.navyGhost },
    del: { bg: hov ? B.red.bg : B.surfaceCard, border: hov ? B.red.dot : B.border, color: hov ? B.red.text : B.red.dot },
    view: { bg: hov ? B.surface2 : B.surfaceCard, border: hov ? B.borderStrong : B.border, color: hov ? B.navyMid : B.navyGhost },
  }
  const s = map[c] || map.default
  return (
    <button onClick={onClick} title={title} disabled={disabled}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        width: 30, height: 30, borderRadius: 8,
        border: `1px solid ${s.border}`,
        background: s.bg, color: s.color,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        cursor: disabled ? 'not-allowed' : 'pointer',
        transition: 'all .15s', opacity: disabled ? 0.45 : 1, flexShrink: 0,
      }}
    >{children}</button>
  )
}

/* ── primary button — matches sidebar style ── */
const Btn = ({ onClick, children, variant = 'primary', disabled = false, size = 'sm' }) => {
  const [hov, setHov] = useState(false)
  const pad = { xs: '5px 10px', sm: '7px 14px', md: '9px 20px' }[size]
  const font = { xs: 10.5, sm: 12, md: 13 }[size]

  const variants = {
    primary: { bg: hov ? B.greenLight : B.green, color: '#FFFFFF', border: B.green },
    ghost: { bg: hov ? B.surface2 : B.surfaceCard, color: B.navyMid, border: B.border },
    danger: { bg: hov ? B.red.bg : B.surfaceCard, color: B.red.text, border: B.red.border },
    surface: { bg: hov ? B.surface2 : B.surfaceCard, color: B.navyMid, border: B.border },
  }
  const s = variants[variant] || variants.primary
  return (
    <button onClick={onClick} disabled={disabled}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        background: s.bg, color: s.color, border: `1px solid ${s.border}`,
        display: 'inline-flex', alignItems: 'center', gap: 6,
        padding: pad, borderRadius: 9, fontSize: font, fontWeight: 700,
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.45 : 1,
        transition: 'all .15s', flexShrink: 0, whiteSpace: 'nowrap',
        letterSpacing: '0.03em',
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
        background: B.surfaceCard,
        border: `1px solid ${hov ? B.greenBdr : B.border}`,
        borderRadius: 12, padding: '14px 18px',
        display: 'flex', alignItems: 'center', gap: 14,
        transition: 'all .2s',
        boxShadow: hov ? '0 6px 20px rgba(28,43,58,0.10)' : '0 1px 4px rgba(28,43,58,0.06)',
        transform: hov ? 'translateY(-1px)' : 'none',
      }}
    >
      <div style={{
        width: 40, height: 40, borderRadius: 11, flexShrink: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: accentBg,
      }}>
        {React.cloneElement(icon, { size: 19, style: { color: accentColor } })}
      </div>
      <div>
        <div style={{ fontSize: 22, fontWeight: 800, color: B.navy, lineHeight: 1, letterSpacing: -0.5, fontFamily: 'Georgia, serif' }}>
          {loading
            ? <div style={{ width: 48, height: 22, borderRadius: 5, background: B.surface2, animation: 'pulse 1.5s infinite' }} />
            : Number(value ?? 0).toLocaleString()}
        </div>
        <div style={{ fontSize: 11, color: B.navyGhost, fontWeight: 600, marginTop: 4, letterSpacing: 0.3, textTransform: 'uppercase' }}>{label}</div>
      </div>
    </div>
  )
}

/* ── skeleton row ── */
const SkeletonRow = () => (
  <tr style={{ borderBottom: `1px solid ${B.border}` }}>
    {[40, 220, 90, 90, 80, 60, 70, 70, 100, 120].map((w, i) => (
      <td key={i} style={{ padding: '12px 14px' }}>
        <div style={{ height: 13, borderRadius: 5, background: B.surface2, animation: 'pulse 1.5s infinite', width: w }} />
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
    <div onClick={onClose} style={{ position: 'fixed', inset: 0, zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(28,43,58,0.75)', backdropFilter: 'blur(6px)', animation: 'fadeIn .15s ease' }}>
      <div onClick={e => e.stopPropagation()} style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, maxWidth: '90vw' }}>
        <button onClick={onClose} style={{ position: 'absolute', top: -10, right: -10, width: 30, height: 30, borderRadius: '50%', background: B.surfaceCard, border: `1px solid ${B.border}`, color: B.navySoft, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 10 }}>
          <TbX size={14} />
        </button>
        <img src={imgs[cur]} alt={name} style={{ maxWidth: '80vw', maxHeight: '70vh', borderRadius: 14, objectFit: 'contain', boxShadow: '0 24px 60px rgba(28,43,58,0.3)', border: `1px solid ${B.border}` }} />
        {cur > 0 && (
          <button onClick={() => setCur(p => p - 1)} style={{ position: 'absolute', left: -52, top: '50%', transform: 'translateY(-50%)', width: 40, height: 40, borderRadius: '50%', background: B.surfaceCard, border: `1px solid ${B.border}`, color: B.navySoft, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
            <FiChevronLeft size={20} />
          </button>
        )}
        {cur < imgs.length - 1 && (
          <button onClick={() => setCur(p => p + 1)} style={{ position: 'absolute', right: -52, top: '50%', transform: 'translateY(-50%)', width: 40, height: 40, borderRadius: '50%', background: B.surfaceCard, border: `1px solid ${B.border}`, color: B.navySoft, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
            <FiChevronRight size={20} />
          </button>
        )}
        {imgs.length > 1 && (
          <div style={{ display: 'flex', gap: 8 }}>
            {imgs.map((img, i) => (
              <img key={i} src={img} alt="" onClick={() => setCur(i)} style={{ width: 48, height: 48, borderRadius: 10, objectFit: 'cover', cursor: 'pointer', border: `2px solid ${i === cur ? B.green : B.border}`, opacity: i === cur ? 1 : 0.5, transition: 'all .2s' }} />
            ))}
          </div>
        )}
        <p style={{ color: B.navyGhost, fontSize: 11.5 }}>{name} · {cur + 1}/{imgs.length} · Esc to close</p>
      </div>
    </div>
  )
}

/* ══════════════════════════════════════════════════════════════
   CONFIRM MODAL
══════════════════════════════════════════════════════════════ */
const ConfirmModal = ({ title, desc, onConfirm, onCancel }) => (
  <div onClick={onCancel} style={{ position: 'fixed', inset: 0, zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(28,43,58,0.6)', backdropFilter: 'blur(4px)', animation: 'fadeIn .15s ease' }}>
    <div onClick={e => e.stopPropagation()} style={{ background: B.surfaceCard, border: `1px solid ${B.border}`, borderRadius: 18, padding: 28, width: 360, maxWidth: '90vw', textAlign: 'center', boxShadow: '0 24px 60px rgba(28,43,58,0.2)', animation: 'slideUp .2s ease' }}>
      <div style={{ width: 52, height: 52, borderRadius: '50%', background: B.red.bg, border: `1px solid ${B.red.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
        <TbTrash size={24} style={{ color: B.red.text }} />
      </div>
      <h3 style={{ fontSize: 17, fontWeight: 800, color: B.navy, marginBottom: 8, fontFamily: 'Georgia, serif' }}>{title}</h3>
      <p style={{ fontSize: 13, color: B.navySoft, marginBottom: 24, lineHeight: 1.6 }}>{desc}</p>
      <div style={{ display: 'flex', gap: 10 }}>
        <button onClick={onCancel}
          style={{ flex: 1, padding: '10px 0', borderRadius: 11, border: `1px solid ${B.border}`, background: B.surfaceCard, color: B.navyMid, fontSize: 13, fontWeight: 700, cursor: 'pointer', transition: 'all .15s' }}
          onMouseEnter={e => e.currentTarget.style.background = B.surface}
          onMouseLeave={e => e.currentTarget.style.background = B.surfaceCard}>
          Cancel
        </button>
        <button onClick={onConfirm}
          style={{ flex: 1, padding: '10px 0', borderRadius: 11, background: B.red.bg, color: B.red.text, fontSize: 13, fontWeight: 700, cursor: 'pointer', border: `1px solid ${B.red.border}`, transition: 'all .15s' }}
          onMouseEnter={e => e.currentTarget.style.background = '#FEE2E2'}
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
      if (res.data.success) {
        toast.success('Product removed')
        setList(prev => prev.filter(p => p._id !== id))
        setSelected(prev => prev.filter(x => x !== id))
      } else toast.error(res.data.message)
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
    const matchS = !q || p.name?.toLowerCase().includes(q) || p.category?.toLowerCase().includes(q) || p.subCategory?.toLowerCase().includes(q) || (p.sku && p.sku.toLowerCase().includes(q))
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

  /* ── shared select style ── */
  const selectStyle = {
    background: B.surfaceCard, border: `1px solid ${B.border}`, color: B.navyMid,
    borderRadius: 9, padding: '8px 30px 8px 12px', fontSize: 12.5, fontWeight: 500,
    outline: 'none', cursor: 'pointer', appearance: 'none', fontFamily: 'inherit',
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%238FA0AD' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`,
    backgroundRepeat: 'no-repeat', backgroundPosition: 'right 10px center',
    transition: 'border-color .15s',
  }

  /* ── sortable col header btn ── */
  const SortBtn = ({ col, label }) => (
    <button onClick={() => handleSort(col)} style={{ display: 'flex', alignItems: 'center', gap: 3, background: 'none', border: 'none', cursor: 'pointer', color: sortBy === col ? B.green : B.navyGhost, fontWeight: 700, fontSize: 10.5, letterSpacing: 0.6, textTransform: 'uppercase', transition: 'color .15s' }}>
      {label}
      <span style={{ display: 'flex', flexDirection: 'column', opacity: 0.7 }}>
        <FiChevronUp size={9} style={{ color: sortBy === col && sortDir === 'asc' ? B.green : B.navyGhost }} />
        <FiChevronDown size={9} style={{ color: sortBy === col && sortDir === 'desc' ? B.green : B.navyGhost }} />
      </span>
    </button>
  )

  /* th / td style */
  const thStyle = { padding: '11px 14px', textAlign: 'left', fontSize: 10.5, fontWeight: 700, letterSpacing: 0.6, textTransform: 'uppercase', color: B.navyGhost, borderBottom: `1px solid ${B.border}`, background: B.surface, whiteSpace: 'nowrap' }
  const tdStyle = { padding: '11px 14px', borderBottom: `1px solid ${B.border}`, verticalAlign: 'middle' }

  /* ══════════════════════════════════════
     TABLE VIEW
  ══════════════════════════════════════ */
  const renderTable = () => (
    <div style={{ margin: '0 20px 32px', overflowX: 'auto', borderRadius: 12, border: `1px solid ${B.border}`, background: B.surfaceCard, boxShadow: '0 1px 4px rgba(28,43,58,0.06)' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ ...thStyle, width: 42 }}>
              <input type="checkbox" style={{ width: 14, height: 14, accentColor: B.green, cursor: 'pointer' }}
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
                <div style={{ width: 60, height: 60, borderRadius: 14, background: B.surface, border: `1px solid ${B.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                  <BsBoxSeam size={26} style={{ color: B.navyGhost }} />
                </div>
                <h3 style={{ fontSize: 16, fontWeight: 800, color: B.navy, marginBottom: 6, fontFamily: 'Georgia, serif' }}>No products found</h3>
                <p style={{ fontSize: 13, color: B.navySoft, marginBottom: 16 }}>Try adjusting your search or filters</p>
                <Btn variant="ghost" onClick={() => { setSearch(''); setCatFilter('all'); setSubCatFilter('all'); setStockFilter('all') }}>Clear Filters</Btn>
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
              <tr key={item._id}
                style={{ background: isSel ? B.greenBg : 'transparent', opacity: isDel ? 0.4 : 1, pointerEvents: isDel ? 'none' : 'auto', transition: 'background .15s' }}
                onMouseEnter={e => { if (!isSel) e.currentTarget.style.background = B.surface }}
                onMouseLeave={e => { if (!isSel) e.currentTarget.style.background = 'transparent' }}>

                {/* Checkbox */}
                <td style={tdStyle}>
                  <input type="checkbox" style={{ width: 14, height: 14, accentColor: B.green, cursor: 'pointer' }}
                    checked={isSel} onChange={() => toggleSelect(item._id)} />
                </td>

                {/* Product */}
                <td style={tdStyle}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <div
                      onClick={() => imgs.length > 0 && setImgModal({ images: imgs, name: item.name, start: 0 })}
                      style={{ position: 'relative', width: 46, height: 46, borderRadius: 10, overflow: 'hidden', border: `1px solid ${B.border}`, background: B.surface, flexShrink: 0, cursor: 'pointer' }}>
                      {imgs[0]
                        ? <img src={imgs[0]} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform .2s' }}
                          onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
                          onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'} />
                        : <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><BsBoxSeam size={18} style={{ color: B.navyGhost }} /></div>
                      }
                      {imgs.length > 1 && (
                        <span style={{ position: 'absolute', bottom: 2, right: 2, background: 'rgba(28,43,58,0.7)', color: '#fff', fontSize: 8, fontWeight: 800, padding: '1px 4px', borderRadius: 4 }}>+{imgs.length - 1}</span>
                      )}
                    </div>
                    <div>
                      <div onClick={() => navigate(`/update-product/${item._id}`)}
                        style={{ fontSize: 13, fontWeight: 600, color: B.navy, cursor: 'pointer', transition: 'color .15s', maxWidth: 180, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}
                        onMouseEnter={e => e.currentTarget.style.color = B.green}
                        onMouseLeave={e => e.currentTarget.style.color = B.navy}>
                        {item.name}
                      </div>
                      <div style={{ fontSize: 10.5, color: B.navyGhost, fontFamily: 'monospace', marginTop: 2 }}>SKU: {item.sku}</div>
                      {item.bestseller && (
                        <span style={{ display: 'inline-block', marginTop: 3, fontSize: 9, fontWeight: 700, color: B.gold, background: B.goldBg, border: `1px solid ${B.goldBdr}`, padding: '1px 6px', borderRadius: 99 }}>
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
                  {/* <div style={{ fontSize: 14, fontWeight: 800, color: B.navy }}>{currency}{(item.discountPrice || item.price || 0).toLocaleString()}</div>
                  {disc && (
                    <>
                      <div style={{ fontSize: 11, color: B.navyGhost, textDecoration: 'line-through' }}>{currency}{(+item.price).toLocaleString()}</div>
                      <div style={{ fontSize: 10.5, color: B.emerald.text, fontWeight: 700 }}>{disc}% off</div>
                    </>
                  )} */}
                  <div style={{ fontSize: 14, fontWeight: 800, color: B.navy }}>
                    {currency}{(disc ? (item.price - (item.price * disc) / 100) : (item.price || 0)).toLocaleString(undefined, { maximumFractionDigits: 2 })}
                  </div>
                  {disc && (
                    <>
                      <div style={{ fontSize: 11, color: B.navyGhost, textDecoration: 'line-through' }}>{currency}{(+item.price).toLocaleString()}</div>
                      <div style={{ fontSize: 10.5, color: B.emerald.text, fontWeight: 700, whiteSpace: 'nowrap' }}>{disc}% off</div>
                    </>
                  )}
                </td>

                {/* Stock */}
                <td style={tdStyle}>
                  <div style={{ fontSize: 13, fontWeight: 800, color: stock > 10 ? B.emerald.text : stock > 0 ? B.amber.text : B.red.text }}>
                    {stock > 0 ? stock.toLocaleString() : 'Out'}
                  </div>
                  {stock > 0 && stock <= 10 && <div style={{ fontSize: 10, color: B.amber.text, fontWeight: 600 }}>Low stock</div>}
                </td>

                {/* Colors */}
                <td style={tdStyle}>
                  {colors.length > 0 ? (
                    <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
                      {colors.slice(0, 5).map((c, i) => (
                        <div key={i} style={{ width: 14, height: 14, borderRadius: '50%', background: c?.hex || c, border: `1px solid ${B.border}`, flexShrink: 0 }} title={c?.name || c} />
                      ))}
                      {colors.length > 5 && <span style={{ fontSize: 10, color: B.navyGhost, fontWeight: 600, alignSelf: 'center' }}>+{colors.length - 5}</span>}
                    </div>
                  ) : <span style={{ color: B.navyGhost, fontSize: 12 }}>—</span>}
                </td>

                {/* Sizes */}
                <td style={tdStyle}>
                  {sizes.length > 0 ? (
                    <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap', width: 120 }}>
                      {sizes.slice(0, 4).map((s, i) => (
                        <span key={i} style={{ background: B.surface, color: B.navyMid, border: `1px solid ${B.border}`, borderRadius: 6, padding: '2px 6px', fontSize: 10, fontWeight: 700 }}>
                          {typeof s === 'object' ? (s.size || '?') : s}
                        </span>
                      ))}
                      {sizes.length > 4 && <span style={{ background: B.surface, color: B.navyGhost, border: `1px solid ${B.border}`, borderRadius: 6, padding: '2px 6px', fontSize: 10, fontWeight: 700 }}>+{sizes.length - 4}</span>}
                    </div>
                  ) : <span style={{ color: B.navyGhost, fontSize: 12 }}>—</span>}
                </td>

                {/* Status */}
                <td style={tdStyle}><StockBadge stock={stock} /></td>

                {/* Actions */}
                <td style={tdStyle}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                    <IBtn title="Preview" c="view" onClick={() => imgs.length > 0 && setImgModal({ images: imgs, name: item.name, start: 0 })}><TbEye size={14} /></IBtn>
                    <IBtn title="Edit" c="edit" onClick={() => navigate(`/update-product/${item._id}`)}><TbEdit size={14} /></IBtn>
                    <IBtn title="Delete" c="del" disabled={isDel} onClick={() => setConfirmDelete({ id: item._id, name: item.name })}>
                      {isDel
                        ? <div style={{ width: 12, height: 12, border: `2px solid ${B.red.border}`, borderTopColor: B.red.dot, borderRadius: '50%', animation: 'spin 0.6s linear infinite' }} />
                        : <TbTrash size={14} />}
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
        <div key={i} style={{ background: B.surfaceCard, border: `1px solid ${B.border}`, borderRadius: 12, overflow: 'hidden', boxShadow: '0 1px 4px rgba(28,43,58,0.06)' }}>
          <div style={{ width: '100%', aspectRatio: '1', background: B.surface2, animation: 'pulse 1.5s infinite' }} />
          <div style={{ padding: 12, display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[60, 80, 40].map((w, j) => <div key={j} style={{ height: 10, borderRadius: 4, background: B.surface2, animation: 'pulse 1.5s infinite', width: `${w}%` }} />)}
          </div>
        </div>
      )) : paginated.length === 0 ? (
        <div style={{ gridColumn: '1/-1', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '64px 0' }}>
          <BsBoxSeam size={30} style={{ color: B.navyGhost, marginBottom: 12 }} />
          <h3 style={{ fontSize: 15, fontWeight: 800, color: B.navy, marginBottom: 6, fontFamily: 'Georgia, serif' }}>No products found</h3>
          <p style={{ fontSize: 13, color: B.navySoft, marginBottom: 16 }}>Try adjusting your filters</p>
          <Btn variant="ghost" onClick={() => { setSearch(''); setCatFilter('all'); setSubCatFilter('all'); setStockFilter('all') }}>Clear Filters</Btn>
        </div>
      ) : paginated.map((item) => {
        const stock = getStock(item.sizes)
        const disc = getDiscount(item.price, item.discountPrice)
        const imgs = Array.isArray(item.image) ? item.image.filter(Boolean) : [item.image].filter(Boolean)
        const colors = item.color || []
        const isSel = selected.includes(item._id)

        return (
          <div key={item._id}
            style={{ background: B.surfaceCard, border: `1px solid ${isSel ? B.green : B.border}`, borderRadius: 12, overflow: 'hidden', transition: 'all .2s', boxShadow: isSel ? `0 0 0 2px ${B.greenBg}, 0 4px 16px rgba(28,43,58,0.10)` : '0 1px 4px rgba(28,43,58,0.06)' }}
            onMouseEnter={e => { if (!isSel) { e.currentTarget.style.borderColor = B.greenBdr; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(28,43,58,0.12)' } }}
            onMouseLeave={e => { if (!isSel) { e.currentTarget.style.borderColor = B.border; e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 1px 4px rgba(28,43,58,0.06)' } }}>

            {/* Image */}
            <div onClick={() => imgs.length > 0 && setImgModal({ images: imgs, name: item.name, start: 0 })}
              style={{ position: 'relative', overflow: 'hidden', aspectRatio: '1', background: B.surface, cursor: 'pointer' }}>
              {imgs[0]
                ? <img src={imgs[0]} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform .3s' }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.06)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'} />
                : <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><BsBoxSeam size={32} style={{ color: B.navyGhost }} /></div>
              }
              {item.bestseller && (
                <span style={{ position: 'absolute', top: 8, left: 8, background: B.goldBg, color: B.gold, border: `1px solid ${B.goldBdr}`, fontSize: 9, fontWeight: 800, padding: '2px 7px', borderRadius: 99 }}>♛ BESTSELLER</span>
              )}
              {imgs.length > 1 && (
                <span style={{ position: 'absolute', top: 8, right: 8, background: 'rgba(28,43,58,0.65)', color: '#fff', fontSize: 10, fontWeight: 700, padding: '2px 6px', borderRadius: 6 }}>+{imgs.length - 1}</span>
              )}
              {/* Select overlay */}
              <div onClick={e => { e.stopPropagation(); toggleSelect(item._id) }}
                style={{ position: 'absolute', bottom: 8, right: 8, width: 22, height: 22, borderRadius: 7, border: `2px solid ${isSel ? B.green : B.border}`, background: isSel ? B.green : 'rgba(250,250,248,0.8)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontSize: 11, fontWeight: 800, color: isSel ? '#FFFFFF' : 'transparent', transition: 'all .15s' }}>
                ✓
              </div>
            </div>

            {/* Body */}
            <div style={{ padding: '12px 12px 12px' }}>
              <div style={{ display: 'flex', gap: 5, marginBottom: 6, flexWrap: 'wrap' }}>
                {item.category && <span style={{ fontSize: 10, background: B.surface, color: B.navySoft, border: `1px solid ${B.border}`, borderRadius: 99, padding: '1px 7px', fontWeight: 500 }}>{item.category}</span>}
              </div>
              <div onClick={() => navigate(`/update-product/${item._id}`)}
                style={{ fontSize: 12.5, fontWeight: 700, color: B.navy, cursor: 'pointer', marginBottom: 7, overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', lineHeight: 1.4, transition: 'color .15s' }}
                onMouseEnter={e => e.currentTarget.style.color = B.green}
                onMouseLeave={e => e.currentTarget.style.color = B.navy}>
                {item.name}
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginBottom: 8 }}>
                {/* <span style={{ fontSize: 15, fontWeight: 800, color: B.navy, fontFamily: 'Georgia, serif' }}>{currency}{(item.discountPrice || item.price || 0).toLocaleString()}</span> */}
                <span style={{ fontSize: 15, fontWeight: 800, color: B.navy, fontFamily: 'Georgia, serif' }}>
                  {currency}{(disc ? (item.price - (item.price * disc) / 100) : (item.price || 0)).toLocaleString(undefined, { maximumFractionDigits: 2 })}
                </span>
                {disc && (
                  <>
                    <span style={{ fontSize: 11, color: B.navyGhost, textDecoration: 'line-through' }}>{currency}{(+item.price).toLocaleString()}</span>
                    <span style={{ fontSize: 10, color: B.emerald.text, fontWeight: 700, background: B.emerald.bg, border: `1px solid ${B.emerald.border}`, padding: '1px 5px', borderRadius: 99 }}>{disc}% off</span>
                  </>
                )}
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 10 }}>
                <StockBadge stock={stock} />
                {colors.length > 0 && (
                  <div style={{ display: 'flex', gap: 3, alignItems: 'center' }}>
                    {colors.slice(0, 4).map((c, i) => <div key={i} style={{ width: 12, height: 12, borderRadius: '50%', background: c?.hex || c, border: `1px solid ${B.border}` }} />)}
                    {colors.length > 4 && <span style={{ fontSize: 10, color: B.navyGhost, fontWeight: 600 }}>+{colors.length - 4}</span>}
                  </div>
                )}
              </div>

              {/* Card Footer */}
              <div style={{ display: 'flex', gap: 7, paddingTop: 10, borderTop: `1px solid ${B.border}` }}>
                <button onClick={() => imgs.length > 0 && setImgModal({ images: imgs, name: item.name, start: 0 })}
                  style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5, padding: '6px 0', borderRadius: 8, background: B.surfaceCard, border: `1px solid ${B.border}`, color: B.navySoft, fontSize: 11.5, fontWeight: 700, cursor: 'pointer', transition: 'all .15s' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = B.borderStrong; e.currentTarget.style.color = B.navyMid; e.currentTarget.style.background = B.surface }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = B.border; e.currentTarget.style.color = B.navySoft; e.currentTarget.style.background = B.surfaceCard }}>
                  <TbEye size={12} /> View
                </button>
                <button onClick={() => navigate(`/update-product/${item._id}`)}
                  style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5, padding: '6px 0', borderRadius: 8, background: B.greenBg, border: `1px solid ${B.greenBdr}`, color: B.green, fontSize: 11.5, fontWeight: 700, cursor: 'pointer', transition: 'all .15s' }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#D1EDDE'; e.currentTarget.style.color = B.green }}
                  onMouseLeave={e => { e.currentTarget.style.background = B.greenBg; e.currentTarget.style.color = B.green }}>
                  <TbEdit size={12} /> Edit
                </button>
                <button onClick={() => setConfirmDelete({ id: item._id, name: item.name })}
                  style={{ width: 30, height: 30, borderRadius: 8, background: B.red.bg, border: `1px solid ${B.red.border}`, color: B.red.text, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', flexShrink: 0, transition: 'all .15s' }}
                  onMouseEnter={e => e.currentTarget.style.background = '#FEE2E2'}
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
    <div style={{ minHeight: '100vh', background: B.bg, fontFamily: "'Inter', system-ui, -apple-system, sans-serif", WebkitFontSmoothing: 'antialiased' }}>
      <style>{`
        @keyframes fadeIn  { from{opacity:0}to{opacity:1} }
        @keyframes slideUp { from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)} }
        @keyframes spin    { from{transform:rotate(0deg)}to{transform:rotate(360deg)} }
        @keyframes pulse   { 0%,100%{opacity:1}50%{opacity:.4} }
        .pg-btn:hover:not(:disabled) { background:${B.greenBg}!important; border-color:${B.greenBdr}!important; color:${B.green}!important; }
      `}</style>

      {/* ── TOP BAR ── */}
      <div style={{ position: 'sticky', top: 64, zIndex: 40, background: B.surfaceCard, borderBottom: `1px solid ${B.border}`, padding: '0 20px', height: 60, display: 'flex', alignItems: 'center', justifyContent: 'space-between', boxShadow: '0 2px 8px rgba(28,43,58,0.08)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 36, height: 36, borderRadius: 10, background: B.greenBg, border: `1px solid ${B.greenBdr}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <TbPackage size={18} style={{ color: B.green }} />
          </div>
          <div>
            <h1 style={{ fontSize: 17, fontWeight: 800, color: B.navy, lineHeight: 1, letterSpacing: -0.3, fontFamily: 'Georgia, serif' }}>Products</h1>
            <p style={{ fontSize: 11, color: B.navyGhost, marginTop: 2, letterSpacing: '0.02em' }}>
              {loading ? '…' : `${list.length} total products`}
            </p>
          </div>
          {!loading && (
            <span style={{ padding: '2px 10px', borderRadius: 99, background: B.greenBg, color: B.green, fontSize: 11, fontWeight: 700, border: `1px solid ${B.greenBdr}` }}>
              {list.length}
            </span>
          )}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <Btn variant="ghost" onClick={exportCSV} size="sm"><TbFileExport size={14} /> Export CSV</Btn>
          <Btn variant="surface" onClick={fetchList} disabled={loading} size="sm">
            <HiOutlineRefresh size={14} style={{ animation: loading ? 'spin 1s linear infinite' : undefined }} /> Refresh
          </Btn>
          <Btn variant="primary" onClick={() => context.setIsOpenFullScreenPanel({ open: true, modal: 'Add product' })} size="sm">
            <TbPlus size={15} /> Add Product
          </Btn>
        </div>
      </div>

      {/* ── STAT CARDS ── */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14, padding: '18px 20px 0' }} className="stat-grid">
        <StatCard icon={<MdOutlineInventory2 />} value={list.length} label="Total Products" accentBg={B.goldBg} accentColor={B.gold} loading={loading} />
        <StatCard icon={<TbChartBar />} value={totalStock} label="Total Stock Units" accentBg={B.emerald.bg} accentColor={B.emerald.text} loading={loading} />
        <StatCard icon={<TbStar />} value={bestsellerCount} label="Bestsellers" accentBg={B.amber.bg} accentColor={B.amber.text} loading={loading} />
        <StatCard icon={<TbAlertTriangle />} value={outOfStock} label="Out of Stock" accentBg={B.red.bg} accentColor={B.red.text} loading={loading} />
      </div>

      {/* ── TOOLBAR ── */}
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 10, padding: '16px 20px 10px' }}>

        {/* Search */}
        <div style={{ position: 'relative', flex: 1, minWidth: 200 }}>
          <HiOutlineSearch size={14} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: B.navyGhost, pointerEvents: 'none' }} />
          <input type="text" placeholder="Search by Name, Category, SKU..." value={search} onChange={e => setSearch(e.target.value)}
            style={{ width: '100%', paddingLeft: 36, paddingRight: search ? 36 : 14, paddingTop: 9, paddingBottom: 9, borderRadius: 9, border: `1px solid ${B.border}`, background: B.surfaceCard, color: B.navy, fontSize: 13, outline: 'none', transition: 'border-color .2s', boxSizing: 'border-box', fontFamily: 'inherit' }}
            onFocus={e => e.target.style.borderColor = B.greenBdr}
            onBlur={e => e.target.style.borderColor = B.border}
          />
          {search && (
            <button onClick={() => setSearch('')} style={{ position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)', width: 18, height: 18, borderRadius: '50%', background: B.surface2, border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: B.navyGhost }}>
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

        {/* View toggle — matches sidebar segment button style */}
        <div style={{ display: 'flex', background: B.surface, border: `1px solid ${B.border}`, borderRadius: 9, overflow: 'hidden' }}>
          {[['table', <MdOutlineTableRows size={14} />, 'Table'], ['grid', <MdOutlineGridView size={14} />, 'Grid']].map(([v, ic, lb]) => (
            <button key={v} onClick={() => setViewMode(v)} style={{
              padding: '7px 12px', display: 'flex', alignItems: 'center', gap: 5,
              fontSize: 11.5, fontWeight: 700, cursor: 'pointer', border: 'none', transition: 'all .15s',
              background: viewMode === v ? B.green : 'transparent',
              color: viewMode === v ? '#FFFFFF' : B.navyGhost,
              letterSpacing: '0.04em', textTransform: 'uppercase',
            }}>
              {ic} {lb}
            </button>
          ))}
        </div>
      </div>

      {/* ── RESULTS BAR ── */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '4px 20px 12px' }}>
        <p style={{ fontSize: 12.5, color: B.navyGhost }}>
          {loading ? 'Loading…' : (
            <>Showing <strong style={{ color: B.navyMid }}>{paginated.length}</strong> of <strong style={{ color: B.navyMid }}>{filtered.length}</strong> products
              {search && <span style={{ color: B.green }}> for "{search}"</span>}
            </>
          )}
        </p>
        {selected.length > 0 && (
          <span style={{ fontSize: 12, color: B.green, fontWeight: 700, background: B.greenBg, border: `1px solid ${B.greenBdr}`, padding: '2px 10px', borderRadius: 99 }}>
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
              className="pg-btn"
              style={{ width: 34, height: 34, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 9, border: `1px solid ${B.border}`, background: B.surfaceCard, color: B.navyGhost, cursor: page === 1 ? 'not-allowed' : 'pointer', opacity: page === 1 ? 0.4 : 1, transition: 'all .15s' }}>
              <FiChevronLeft size={15} />
            </button>,
            ...Array.from({ length: totalPages }, (_, i) => i + 1)
              .filter(p => p === 1 || p === totalPages || Math.abs(p - page) <= 1)
              .reduce((acc, p, i, arr) => { if (i > 0 && arr[i - 1] !== p - 1) acc.push('…'); acc.push(p); return acc; }, [])
              .map((p, i) => p === '…'
                ? <span key={`e${i}`} style={{ color: B.navyGhost, fontSize: 13, padding: '0 4px' }}>…</span>
                : <button key={p} onClick={() => setPage(p)} className="pg-btn"
                  style={{ width: 34, height: 34, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 9, border: `1px solid ${page === p ? B.green : B.border}`, background: page === p ? B.green : B.surfaceCard, color: page === p ? '#FFFFFF' : B.navyGhost, fontSize: 13, fontWeight: 700, cursor: 'pointer', transition: 'all .15s' }}>
                  {p}
                </button>
              ),
            <button key="next" onClick={() => setPage(p => Math.min(totalPages, p + 1))} disabled={page === totalPages}
              className="pg-btn"
              style={{ width: 34, height: 34, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 9, border: `1px solid ${B.border}`, background: B.surfaceCard, color: B.navyGhost, cursor: page === totalPages ? 'not-allowed' : 'pointer', opacity: page === totalPages ? 0.4 : 1, transition: 'all .15s' }}>
              <FiChevronRight size={15} />
            </button>
          ]}
        </div>
      )}

      {/* ── BULK ACTION BAR ── */}
      {selected.length > 0 && (
        <div style={{ position: 'fixed', bottom: 24, left: '50%', transform: 'translateX(-50%)', zIndex: 50, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, padding: '12px 20px', borderRadius: 14, background: B.surfaceCard, border: `1px solid ${B.border}`, boxShadow: '0 16px 48px rgba(28,43,58,0.18), 0 0 0 1px rgba(28,43,58,0.06)', minWidth: 320, animation: 'slideUp .2s ease' }}>
          <div style={{ fontSize: 13.5, fontWeight: 700, color: B.navy }}>
            {selected.length} selected <span style={{ color: B.navyGhost, fontWeight: 400 }}>· Bulk actions</span>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <Btn variant="ghost" size="xs" onClick={() => setSelected([])}><TbX size={11} /> Deselect</Btn>
            <Btn variant="danger" size="xs" onClick={() => setConfirmDelete('bulk')}><TbTrash size={12} /> Delete Selected</Btn>
          </div>
        </div>
      )}

      {/* ── MODALS ── */}
      {confirmDelete && (
        <ConfirmModal
          title={confirmDelete === 'bulk' ? `Delete ${selected.length} Products?` : 'Delete Product?'}
          desc={confirmDelete === 'bulk'
            ? `This will permanently remove ${selected.length} selected products. This cannot be undone.`
            : `"${confirmDelete.name}" will be permanently deleted. This cannot be undone.`}
          onConfirm={() => { setConfirmDelete(null); if (confirmDelete === 'bulk') removeBulk(); else removeProduct(confirmDelete.id) }}
          onCancel={() => setConfirmDelete(null)}
        />
      )}
      {imgModal && <ImgModal {...imgModal} onClose={() => setImgModal(null)} />}

      <style>{`
        @media(max-width:900px){.stat-grid{grid-template-columns:repeat(2,1fr)!important}}
        @media(max-width:500px){.stat-grid{grid-template-columns:1fr!important}}
      `}</style>
    </div>
  )
}

export default ProductsList