import React, { useEffect, useState, useMemo, useCallback } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { backendUrl, currency } from '../../App';
import {
  TbPackage, TbCurrencyDollar, TbCircleCheck, TbTruck,
  TbSun, TbSearch, TbX, TbRefresh, TbChevronDown,
  TbPhone, TbMail, TbMapPin, TbCopy,
  TbShoppingBag, TbCreditCard, TbCalendar,
  TbAlertCircle, TbArrowRight,
  TbCheck, TbBan, TbArrowBack, TbBolt, TbChartBar,
  TbFileExport, TbBox, TbProgress
} from 'react-icons/tb';

/* ═══════════════════════════════════════════════════════════════
   D DOLLY LAMB — ORDERS  |  Light Luxury Theme
   Matches Sidebar · Header · Dashboard palette exactly.
═══════════════════════════════════════════════════════════════ */

const B = {
  // Backgrounds
  bg: '#F4F2EE',   // page background
  surface: '#FAFAF8',   // card surface
  surface2: '#FFFFFF',   // elevated panels
  surface3: '#F0EDE8',   // inner nested backgrounds
  bgHover: '#EDE9E2',   // hover linen

  // Borders
  border: '#E0DBD3',
  borderSoft: '#EDE9E2',
  borderMid: '#C8C2B8',

  // Text
  navy: '#1C2B3A',
  navyMid: '#2E4057',
  navySoft: '#4A6070',
  navyGhost: '#8FA0AD',

  // Green accent
  green: '#1A7A4A',
  greenHover: '#2A9960',
  greenBg: '#E8F4EE',
  greenBorder: '#A8D5BC',

  // Champagne
  champ: '#B8985A',
  champBg: '#FBF5E8',
  champBorder: '#DBC98A',
  champText: '#8B6914',

  // Semantic — all tuned for light backgrounds
  blue: { bg: '#EFF6FF', text: '#1E40AF', border: '#BFDBFE', dot: '#3B82F6', bar: '#3B82F6,#60A5FA' },
  amber: { bg: '#FEF3C7', text: '#92400E', border: '#FCD34D', dot: '#D97706', bar: '#D97706,#FBBF24' },
  violet: { bg: '#F5F3FF', text: '#4C1D95', border: '#DDD6FE', dot: '#7C3AED', bar: '#7C3AED,#A78BFA' },
  cyan: { bg: '#ECFEFF', text: '#155E75', border: '#A5F3FC', dot: '#06B6D4', bar: '#06B6D4,#22D3EE' },
  emerald: { bg: '#E8F4EE', text: '#065F2C', border: '#A8D5BC', dot: '#1A7A4A', bar: '#1A7A4A,#34D399' },
  red: { bg: '#FEF2F2', text: '#991B1B', border: '#FECACA', dot: '#EF4444', bar: '#EF4444,#F87171' },
};

const STATUS_CFG = {
  'Order Placed': { icon: <TbPackage size={22} />, c: B.blue, label: 'Order Placed' },
  'Packing': { icon: <TbBox size={22} />, c: B.amber, label: 'Packing' },
  'Shipped': { icon: <TbTruck size={22} />, c: B.violet, label: 'Shipped' },
  'Out for delivery': { icon: <TbTruck size={22} />, c: B.cyan, label: 'Out for Delivery' },
  'Delivered': { icon: <TbCircleCheck size={22} />, c: B.emerald, label: 'Delivered' },
  'Cancelled': { icon: <TbX size={22} />, c: B.red, label: 'Cancelled' },
};
const STATUS_STEPS = ['Order Placed', 'Packing', 'Shipped', 'Out for delivery', 'Delivered'];
const ALL_STATUSES = [...STATUS_STEPS, 'Cancelled'];

const safeQty = q => typeof q === 'object' ? (q?.quantity ?? 1) : (Number(q) || 1);
const safeSize = s => typeof s === 'object' ? (s?.label || s?.value || '') : (s || '');
const safeColor = c => typeof c === 'object' ? (c?.name || '') : (c || '');
const fmtDate = ts => ts ? new Date(ts).toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' }) : '—';
const fmtTime = ts => ts ? new Date(ts).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }) : '';
const fmtRel = ts => {
  if (!ts) return '';
  const m = Math.floor((Date.now() - new Date(ts).getTime()) / 60000);
  if (m < 1) return 'just now'; if (m < 60) return `${m}m ago`;
  const h = Math.floor(m / 60); if (h < 24) return `${h}h ago`;
  return `${Math.floor(h / 24)}d ago`;
};

/* ─── Status Badge ─── */
const StatusBadge = ({ status }) => {
  const cfg = STATUS_CFG[status] || STATUS_CFG['Order Placed'];
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 6, padding: '4px 10px',
      borderRadius: 99, background: cfg.c.bg, color: cfg.c.text,
      border: `1px solid ${cfg.c.border}`, fontSize: 11, fontWeight: 700,
    }}>
      <span style={{ width: 6, height: 6, borderRadius: '50%', background: cfg.c.dot, flexShrink: 0 }} />
      {cfg.label}
    </span>
  );
};

/* ─── Payment Badge ─── */
const PayBadge = ({ paid }) => (
  <span style={{
    display: 'inline-flex', alignItems: 'center', gap: 5,
    padding: '3px 9px', borderRadius: 99, fontSize: 10.5, fontWeight: 700,
    ...(paid
      ? { background: B.emerald.bg, color: B.emerald.text, border: `1px solid ${B.emerald.border}` }
      : { background: B.amber.bg, color: B.amber.text, border: `1px solid ${B.amber.border}` })
  }}>
    {paid ? <TbCheck size={9} /> : <span style={{ fontSize: 8 }}>⏳</span>}
    {paid ? 'Paid' : 'Pending'}
  </span>
);

/* ─── Skeleton ─── */
const Skel = ({ w = '100%', h = 16, r = 6 }) => (
  <div style={{
    width: w, height: h, borderRadius: r,
    background: B.borderSoft, animation: 'ddPulse 1.6s ease-in-out infinite',
  }} />
);

/* ─── Stat Card ─── */
const StatCard = ({ icon, value, label, accentBg, accentBorder, delay = 0 }) => (
  <div style={{
    background: B.surface2, border: `1px solid ${B.border}`, borderRadius: 14,
    padding: '14px 14px 12px', minWidth: 0,
    animation: `ddFadeUp .4s ease ${delay}s both`,
    transition: 'box-shadow .2s, border-color .2s', cursor: 'default',
    boxShadow: '0 1px 4px rgba(28,43,58,0.04)',
  }}
    onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 6px 20px rgba(28,43,58,0.10)'; e.currentTarget.style.borderColor = B.greenBorder; }}
    onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 1px 4px rgba(28,43,58,0.04)'; e.currentTarget.style.borderColor = B.border; }}>
    <div style={{
      width: 34, height: 34, borderRadius: 10, display: 'flex', alignItems: 'center',
      justifyContent: 'center', marginBottom: 9, background: accentBg,
      border: `1px solid ${accentBorder || B.border}`, flexShrink: 0,
    }}>{icon}</div>
    <div style={{ color: B.navy, fontSize: 20, fontWeight: 800, letterSpacing: -.5, lineHeight: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{value}</div>
    <div style={{ color: B.navyGhost, fontSize: 11, fontWeight: 500, marginTop: 4, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{label}</div>
  </div>
);

/* ─── Status Tracker ─── */
const StatusTracker = ({ status }) => {
  const cur = STATUS_STEPS.indexOf(status);
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', width: '100%' }}>
      {STATUS_STEPS.map((step, i) => {
        const done = cur > i, active = cur === i;
        return (
          <div key={step} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
            {i < STATUS_STEPS.length - 1 && (
              <div style={{
                position: 'absolute', top: 11, left: '50%', width: '100%', height: 2.5, zIndex: 0,
                background: done ? B.emerald.dot : B.border, transition: 'background .5s',
              }} />
            )}
            <div style={{
              position: 'relative', zIndex: 1, width: 24, height: 24, borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 9, fontWeight: 800,
              transition: 'all .3s',
              ...(done ? { background: B.emerald.dot, border: `2px solid ${B.emerald.dot}`, color: '#FFFFFF' }
                : active ? { background: B.green, border: `2px solid ${B.green}`, color: '#FFFFFF', boxShadow: `0 0 0 4px ${B.greenBg}` }
                  : { background: B.surface2, border: `2px solid ${B.border}`, color: B.navyGhost }),
            }}>
              {done ? <TbCheck size={11} /> : i + 1}
            </div>
            <span style={{
              marginTop: 5, fontSize: 9, fontWeight: 600, textAlign: 'center', lineHeight: 1.3, padding: '0 2px',
              color: done ? B.emerald.text : active ? B.green : B.navyGhost,
            }}>
              {step === 'Out for delivery' ? 'Out for\nDelivery' : step.replace('Order ', '')}
            </span>
          </div>
        );
      })}
    </div>
  );
};

/* ─── Quick Action Button ─── */
const QBtn = ({ children, onClick, disabled, variant = 'default' }) => {
  const [hov, setHov] = useState(false);
  const base = {
    default: {
      n: { background: 'transparent', color: B.navySoft, border: `1px solid ${B.border}` },
      h: { background: B.greenBg, color: B.green, border: `1px solid ${B.greenBorder}` },
    },
    cancel: {
      n: { background: B.red.bg, color: B.red.text, border: `1px solid ${B.red.border}` },
      h: { background: '#FECACA', color: B.red.text, border: `1px solid ${B.red.border}` },
    },
    revert: {
      n: { background: 'transparent', color: B.navyGhost, border: `1px dashed ${B.border}` },
      h: { background: B.bgHover, color: B.navySoft, border: `1px dashed ${B.borderMid}` },
    },
  };
  const s = base[variant];
  return (
    <button onClick={onClick} disabled={disabled}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        width: '100%', display: 'flex', alignItems: 'center', gap: 10, padding: '10px 14px',
        borderRadius: 10, fontSize: 12.5, fontWeight: 600,
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? .5 : 1, transition: 'all .15s',
        ...(hov && !disabled ? s.h : s.n),
      }}>
      {children}
    </button>
  );
};

/* ─── Copy Button ─── */
const CopyBtn = ({ text, id, copiedId, onCopy }) => {
  const [hov, setHov] = useState(false);
  return (
    <button onClick={() => onCopy(text, id)} title="Copy"
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        width: 28, height: 28, borderRadius: 8, flexShrink: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: hov ? B.greenBg : B.surface3,
        border: `1px solid ${hov ? B.greenBorder : B.border}`,
        color: hov ? B.green : B.navyGhost,
        transition: 'all .15s', cursor: 'pointer',
      }}>
      {copiedId === id ? <TbCheck size={12} /> : <TbCopy size={12} />}
    </button>
  );
};

/* ─── Light Select ─── */
const LightSelect = ({ value, onChange, options, minWidth = 130 }) => (
  <select value={value} onChange={e => onChange(e.target.value)}
    style={{
      padding: '8px 32px 8px 12px', borderRadius: 9, fontSize: 12.5, fontWeight: 600,
      background: B.surface2, color: B.navySoft, border: `1px solid ${B.border}`,
      outline: 'none', cursor: 'pointer', minWidth, appearance: 'none',
      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 24 24' fill='none' stroke='%238FA0AD' stroke-width='2.5'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`,
      backgroundRepeat: 'no-repeat', backgroundPosition: 'right 10px center', transition: 'border-color .15s',
    }}
    onFocus={e => e.target.style.borderColor = B.greenBorder}
    onBlur={e => e.target.style.borderColor = B.border}>
    {options.map(([v, l]) => <option key={v} value={v}>{l}</option>)}
  </select>
);

/* ─── Status Select ─── */
const StatusSelect = ({ value, onChange, disabled }) => {
  const cfg = STATUS_CFG[value] || STATUS_CFG['Order Placed'];
  return (
    <select value={value} onChange={e => onChange(e.target.value)} disabled={disabled}
      style={{
        padding: '7px 28px 7px 10px', borderRadius: 9, fontSize: 12, fontWeight: 700,
        background: cfg.c.bg, color: cfg.c.text, border: `1px solid ${cfg.c.border}`,
        outline: 'none', cursor: disabled ? 'not-allowed' : 'pointer', appearance: 'none',
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 24 24' fill='none' stroke='%238FA0AD' stroke-width='2.5'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'no-repeat', backgroundPosition: 'right 8px center',
        opacity: disabled ? .55 : 1, transition: 'all .15s',
      }}>
      {ALL_STATUSES.map(s => <option key={s} value={s}>{s}</option>)}
    </select>
  );
};

/* ═══════════════════════════════════════════════════════════════
   MAIN
═══════════════════════════════════════════════════════════════ */
const Orders = ({ token }) => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedId, setExpandedId] = useState(null);
  const [updatingId, setUpdatingId] = useState(null);
  const [copiedId, setCopiedId] = useState(null);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [payFilter, setPayFilter] = useState('all');
  const [methodFilter, setMethodFilter] = useState('all');
  const [dateFilter, setDateFilter] = useState('all');
  const [sortBy, setSortBy] = useState('newest');

  const fetchAllOrders = useCallback(async () => {
    if (!token) return; setLoading(true);
    try {
      const r = await axios.post(backendUrl + '/api/order/list', {}, { headers: { token } });
      if (r.data.success) setOrders((r.data.orders || []).slice().reverse());
      else toast.error(r.data.message);
    } catch (e) { toast.error(e?.message || 'Failed to load orders'); }
    finally { setLoading(false); }
  }, [token]);

  const statusHandler = useCallback(async (newStatus, orderId) => {
    setUpdatingId(orderId);
    try {
      const r = await axios.post(backendUrl + '/api/order/status', { orderId, status: newStatus }, { headers: { token } });
      if (r.data.success) { setOrders(p => p.map(o => o._id === orderId ? { ...o, status: newStatus } : o)); toast.success(`Status → ${newStatus}`); }
      else toast.error(r.data.message);
    } catch { toast.error('Status update failed'); }
    finally { setUpdatingId(null); }
  }, [token]);

  const copyText = useCallback((text, id) => {
    if (navigator.clipboard) navigator.clipboard.writeText(text).catch(() => { });
    setCopiedId(id); toast.success('Copied!'); setTimeout(() => setCopiedId(null), 2000);
  }, []);

  const exportCSV = useCallback(() => {
    const rows = [['Order ID', 'Customer', 'Email', 'Phone', 'Amount', 'Status', 'Payment', 'Method', 'Date']];
    filtered.forEach(o => rows.push([o._id, `${o.address?.firstName || ''} ${o.address?.lastName || ''}`.trim(),
    o.address?.email || '', o.address?.phone || '', o.finalAmount || o.amount || 0,
    o.status || '', o.payment ? 'Paid' : 'Pending', o.paymentMethod || '', fmtDate(o.date)]));
    const csv = rows.map(r => r.map(c => `"${String(c).replace(/"/g, '""')}"`).join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a'); a.href = url;
    a.download = `orders_${new Date().toISOString().slice(0, 10)}.csv`; a.click();
    URL.revokeObjectURL(url); toast.success('Exported!');
  }, []);

  useEffect(() => { fetchAllOrders(); }, [fetchAllOrders]);

  const payMethods = useMemo(() => [...new Set(orders.map(o => o.paymentMethod).filter(Boolean))], [orders]);

  const stats = useMemo(() => {
    const now = new Date();
    const isToday = ts => { const d = new Date(ts); return d.getDate() === now.getDate() && d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear(); };
    const gmv = orders.reduce((s, o) => s + (Number(o.finalAmount) || Number(o.amount) || 0), 0);
    const paid = orders.filter(o => o.payment).reduce((s, o) => s + (Number(o.finalAmount) || Number(o.amount) || 0), 0);
    return {
      total: orders.length, revenue: gmv, paidRevenue: paid,
      delivered: orders.filter(o => o.status === 'Delivered').length,
      active: orders.filter(o => !['Delivered', 'Cancelled'].includes(o.status)).length,
      today: orders.filter(o => isToday(o.date)).length,
      pending: orders.filter(o => !o.payment).length,
    };
  }, [orders]);

  const filtered = useMemo(() => {
    let r = [...orders];
    const q = search.toLowerCase().trim();
    if (q) r = r.filter(o =>
      `${o.address?.firstName || ''} ${o.address?.lastName || ''}`.toLowerCase().includes(q) ||
      (o._id || '').toLowerCase().includes(q) ||
      (o.address?.phone || '').includes(q) ||
      (o.address?.email || '').toLowerCase().includes(q) ||
      (o.items || []).some(it => (it.name || '').toLowerCase().includes(q)));
    if (statusFilter !== 'all') r = r.filter(o => o.status === statusFilter);
    if (payFilter === 'paid') r = r.filter(o => o.payment);
    if (payFilter === 'pending') r = r.filter(o => !o.payment);
    if (methodFilter !== 'all') r = r.filter(o => o.paymentMethod === methodFilter);
    const now = Date.now();
    if (dateFilter === 'today') { const n = new Date(); r = r.filter(o => { const d = new Date(o.date); return d.getDate() === n.getDate() && d.getMonth() === n.getMonth() && d.getFullYear() === n.getFullYear(); }); }
    if (dateFilter === 'week') r = r.filter(o => now - new Date(o.date).getTime() < 7 * 86400000);
    if (dateFilter === 'month') r = r.filter(o => now - new Date(o.date).getTime() < 30 * 86400000);
    if (sortBy === 'newest') r.sort((a, b) => new Date(b.date) - new Date(a.date));
    if (sortBy === 'oldest') r.sort((a, b) => new Date(a.date) - new Date(b.date));
    if (sortBy === 'amount-h') r.sort((a, b) => (Number(b.finalAmount) || 0) - (Number(a.finalAmount) || 0));
    if (sortBy === 'amount-l') r.sort((a, b) => (Number(a.finalAmount) || 0) - (Number(b.finalAmount) || 0));
    if (sortBy === 'name') r.sort((a, b) => (a.address?.firstName || '').localeCompare(b.address?.firstName || ''));
    return r;
  }, [orders, search, statusFilter, payFilter, methodFilter, dateFilter, sortBy]);

  const hasFilters = !!(search || statusFilter !== 'all' || payFilter !== 'all' || methodFilter !== 'all' || dateFilter !== 'all');
  const clearFilters = () => { setSearch(''); setStatusFilter('all'); setPayFilter('all'); setMethodFilter('all'); setDateFilter('all'); };

  const KPI = [
    { icon: <TbPackage size={17} style={{ color: B.green }} />, accentBg: B.greenBg, accentBorder: B.greenBorder, value: loading ? '…' : stats.total, label: 'Total Orders', delay: 0 },
    { icon: <TbCurrencyDollar size={17} style={{ color: B.green }} />, accentBg: B.greenBg, accentBorder: B.greenBorder, value: loading ? '…' : `$${stats.revenue.toLocaleString('en-US')}`, label: `GMV · $${loading ? '…' : stats.paidRevenue.toLocaleString()} paid`, delay: .05 },
    { icon: <TbCircleCheck size={17} style={{ color: B.emerald.text }} />, accentBg: B.emerald.bg, accentBorder: B.emerald.border, value: loading ? '…' : stats.delivered, label: 'Delivered', delay: .08 },
    { icon: <TbTruck size={17} style={{ color: B.amber.text }} />, accentBg: B.amber.bg, accentBorder: B.amber.border, value: loading ? '…' : stats.active, label: 'In Progress', delay: .12 },
    { icon: <TbSun size={17} style={{ color: B.violet.text }} />, accentBg: B.violet.bg, accentBorder: B.violet.border, value: loading ? '…' : stats.today, label: "Today's Orders", delay: .16 },
    { icon: <TbCreditCard size={17} style={{ color: B.red.text }} />, accentBg: B.red.bg, accentBorder: B.red.border, value: loading ? '…' : stats.pending, label: 'Unpaid', delay: .20 },
  ];

  return (
    <div style={{
      minHeight: '100vh', background: B.bg,
      fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
      WebkitFontSmoothing: 'antialiased',
    }}>
      <style>{`
        @keyframes ddFadeUp   { from { opacity:0; transform:translateY(10px) } to { opacity:1; transform:translateY(0) } }
        @keyframes ddSlideDown{ from { opacity:0; transform:translateY(-6px) } to { opacity:1; transform:translateY(0) } }
        @keyframes ddPulse    { 0%,100%{opacity:1} 50%{opacity:.4} }
        @keyframes ddSpin     { to { transform:rotate(360deg) } }
        @keyframes ddGlow     { 0%,100%{opacity:.7} 50%{opacity:1} }
        .dd-spin { animation: ddSpin .85s linear infinite }
        .dd-ce   { animation: ddFadeUp .35s ease both }
        .dd-de   { animation: ddSlideDown .2s ease both }
        .dd-det  { display:grid; grid-template-columns:1fr 1fr 1fr }
        .dd-col  { border-right: 1px solid ${B.border} }
        .dd-col:last-child { border-right: none }
        .dd-kpi  { display:grid; grid-template-columns:repeat(6,1fr); gap:12px }
        @media(max-width:900px) { .dd-kpi { grid-template-columns:repeat(3,1fr) !important } }
        @media(max-width:560px) { .dd-kpi { grid-template-columns:repeat(2,1fr) !important } }
        @media(max-width:720px) { .dd-det { grid-template-columns:1fr !important } .dd-col { border-right:none !important; border-bottom:1px solid ${B.border} } }
      `}</style>

      {/* ── STICKY HEADER ── */}
      <div style={{
        position: 'sticky', top: 0, zIndex: 40,
        background: `${B.surface2}F0`, backdropFilter: 'blur(14px)',
        borderBottom: `1px solid ${B.border}`,
        boxShadow: '0 2px 16px rgba(28,43,58,0.07)',
      }}>
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '0 24px', height: 62, maxWidth: 1400, margin: '0 auto',
        }}>
          {/* Title */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{
              width: 38, height: 38, borderRadius: 10, flexShrink: 0,
              background: B.green,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 3px 10px rgba(26,122,74,0.22)',
            }}>
              <TbShoppingBag size={18} style={{ color: '#FFFFFF' }} />
            </div>
            <div>
              <h1 style={{ color: B.navy, fontSize: 17, fontWeight: 800, letterSpacing: -.3, lineHeight: 1, margin: 0 }}>Orders</h1>
              <p style={{ color: B.navyGhost, fontSize: 11, marginTop: 2, lineHeight: 1 }}>
                {loading ? 'Loading…' : `${orders.length} total orders`}
              </p>
            </div>
            {!loading && stats.active > 0 && (
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: 6, padding: '4px 10px',
                borderRadius: 99, background: B.amber.bg, color: B.amber.text, border: `1px solid ${B.amber.border}`,
                fontSize: 11, fontWeight: 700,
              }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: B.amber.dot, animation: 'ddGlow 1.4s ease-in-out infinite' }} />
                {stats.active} active
              </span>
            )}
          </div>

          {/* Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <button onClick={fetchAllOrders} disabled={loading}
              style={{
                display: 'flex', alignItems: 'center', gap: 6, padding: '7px 14px', borderRadius: 9,
                background: 'transparent', color: B.navySoft, border: `1px solid ${B.border}`,
                fontSize: 12.5, fontWeight: 600, cursor: 'pointer', opacity: loading ? .5 : 1, transition: 'all .15s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = B.bgHover; e.currentTarget.style.borderColor = B.borderMid; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = B.border; }}>
              <TbRefresh size={14} style={loading ? { animation: 'ddSpin .85s linear infinite' } : undefined} />
              Refresh
            </button>
            <button onClick={exportCSV}
              style={{
                display: 'flex', alignItems: 'center', gap: 6, padding: '7px 16px', borderRadius: 9,
                background: B.green, color: '#FFFFFF', border: 'none',
                fontSize: 12.5, fontWeight: 600, cursor: 'pointer',
                boxShadow: '0 3px 10px rgba(26,122,74,0.22)', transition: 'all .15s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = B.greenHover}
              onMouseLeave={e => e.currentTarget.style.background = B.green}>
              <TbFileExport size={14} /> Export CSV
            </button>
          </div>
        </div>
      </div>

      <div style={{ padding: '20px 24px 48px', maxWidth: 1400, margin: '0 auto' }}>

        {/* ── KPI CARDS ── */}
        <div className="dd-kpi" style={{ marginBottom: 18 }}>
          {KPI.map((s, i) => <StatCard key={i} {...s} />)}
        </div>

        {/* ── TOOLBAR ── */}
        <div style={{
          background: B.surface2, border: `1px solid ${B.border}`,
          borderRadius: 14, padding: 16, marginBottom: 12,
          boxShadow: '0 1px 4px rgba(28,43,58,0.04)',
        }}>
          {/* ROW 1 */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'nowrap', overflowX: 'auto' }}>
            {/* Search */}
            <div style={{ position: 'relative', flex: '1 1 200px', minWidth: 0 }}>
              <TbSearch size={14} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: B.navyGhost, pointerEvents: 'none' }} />
              <input type="text" value={search} onChange={e => setSearch(e.target.value)}
                placeholder="Search name, order ID, phone, item…"
                style={{
                  width: '100%', padding: '9px 36px', borderRadius: 9,
                  background: B.surface, color: B.navy,
                  border: `1px solid ${B.border}`, fontSize: 13, outline: 'none',
                  transition: 'border-color .15s', boxSizing: 'border-box',
                }}
                onFocus={e => e.target.style.borderColor = B.greenBorder}
                onBlur={e => e.target.style.borderColor = B.border} />
              {search && (
                <button onClick={() => setSearch('')} style={{
                  position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)',
                  width: 18, height: 18, borderRadius: '50%', border: 'none',
                  background: B.borderMid, color: B.navySoft,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
                }}>
                  <TbX size={10} />
                </button>
              )}
            </div>
            <LightSelect value={statusFilter} onChange={setStatusFilter} minWidth={130} options={[['all', 'All Statuses'], ...ALL_STATUSES.map(s => [s, s])]} />
            <LightSelect value={payFilter} onChange={setPayFilter} minWidth={120} options={[['all', 'All Payments'], ['paid', '✓ Paid'], ['pending', '⏳ Unpaid']]} />
            {payMethods.length > 1 && <LightSelect value={methodFilter} onChange={setMethodFilter} minWidth={120} options={[['all', 'All Methods'], ...payMethods.map(m => [m, m])]} />}
            <LightSelect value={dateFilter} onChange={setDateFilter} minWidth={110} options={[['all', 'All Time'], ['today', 'Today'], ['week', 'This Week'], ['month', 'This Month']]} />
            {hasFilters && (
              <button onClick={clearFilters} style={{
                display: 'flex', alignItems: 'center', gap: 6, padding: '8px 14px', borderRadius: 9,
                background: B.red.bg, color: B.red.text, border: `1px solid ${B.red.border}`,
                fontSize: 12.5, fontWeight: 600, cursor: 'pointer', whiteSpace: 'nowrap', flexShrink: 0, transition: 'all .15s',
              }}>
                <TbX size={13} /> Clear
              </button>
            )}
            <LightSelect value={sortBy} onChange={setSortBy} minWidth={130}
              options={[['newest', '↓ Newest'], ['oldest', '↑ Oldest'], ['amount-h', '$ High–Low'], ['amount-l', '$ Low–High'], ['name', 'A–Z Name']]} />
          </div>

          {/* ROW 2 */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: 10,
            marginTop: 10, paddingTop: 10, borderTop: `1px solid ${B.border}`,
            flexWrap: 'nowrap', overflowX: 'auto',
          }}>
            <span style={{ color: B.border, fontSize: 16, flexShrink: 0 }}>·</span>
            <p style={{ color: B.navyGhost, fontSize: 12.5, flexShrink: 0, whiteSpace: 'nowrap' }}>
              {loading ? 'Loading…' : <><strong style={{ color: B.navy }}>{filtered.length}</strong> of <strong style={{ color: B.navy }}>{orders.length}</strong> orders</>}
            </p>
            <div style={{ flex: 1 }} />
            {/* Status pills */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexShrink: 0 }}>
              {ALL_STATUSES.map(s => {
                const cnt = orders.filter(o => o.status === s).length;
                if (!cnt) return null;
                const cfg = STATUS_CFG[s]; const active = statusFilter === s;
                return (
                  <button key={s} onClick={() => setStatusFilter(active ? 'all' : s)} style={{
                    display: 'flex', alignItems: 'center', gap: 5, padding: '4px 10px', borderRadius: 99,
                    fontSize: 10.5, fontWeight: 600, cursor: 'pointer', transition: 'all .15s', whiteSpace: 'nowrap',
                    ...(active
                      ? { background: cfg.c.bg, color: cfg.c.text, border: `1px solid ${cfg.c.border}` }
                      : { background: 'transparent', color: B.navyGhost, border: `1px solid ${B.border}` }),
                  }}>
                    <span style={{ width: 6, height: 6, borderRadius: '50%', background: cfg.c.dot, flexShrink: 0 }} />
                    {cfg.label} <span style={{ opacity: .6 }}>({cnt})</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* ── ORDER LIST ── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>

          {/* Skeletons */}
          {loading && [0, .06, .12, .18, .22].map((d, i) => (
            <div key={i} style={{
              background: B.surface2, border: `1px solid ${B.border}`, borderRadius: 14,
              overflow: 'hidden', animation: `ddFadeUp .4s ease ${d}s both`,
            }}>
              <div style={{ height: 3, background: B.greenBorder, animation: 'ddPulse 1.6s ease-in-out infinite' }} />
              <div style={{ padding: 16, display: 'flex', alignItems: 'center', gap: 14 }}>
                <Skel w={42} h={42} r={11} />
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 7 }}>
                  <Skel w={80} h={11} /><Skel w={140} h={15} /><Skel w={220} h={11} />
                </div>
                <Skel w={100} h={34} r={10} />
              </div>
            </div>
          ))}

          {/* Empty state */}
          {!loading && filtered.length === 0 && (
            <div style={{
              background: B.surface2, border: `1px solid ${B.border}`, borderRadius: 16,
              padding: '56px 24px', textAlign: 'center', animation: 'ddFadeUp .35s ease both',
              boxShadow: '0 2px 8px rgba(28,43,58,0.04)',
            }}>
              <div style={{ fontSize: 48, marginBottom: 16 }}>📭</div>
              <h3 style={{ color: B.navy, fontSize: 17, fontWeight: 800, marginBottom: 8 }}>No orders found</h3>
              <p style={{ color: B.navyGhost, fontSize: 13, marginBottom: 24 }}>
                {hasFilters ? 'Adjust your filters or clear them' : 'Orders will appear here once customers place them'}
              </p>
              {hasFilters && (
                <button onClick={clearFilters} style={{
                  display: 'inline-flex', alignItems: 'center', gap: 7, padding: '10px 22px', borderRadius: 10,
                  background: B.green, color: '#FFFFFF', border: 'none',
                  fontSize: 13, fontWeight: 600, cursor: 'pointer',
                  boxShadow: '0 3px 10px rgba(26,122,74,0.22)',
                }}>
                  <TbX size={14} /> Clear All Filters
                </button>
              )}
            </div>
          )}

          {/* ── Order cards ── */}
          {!loading && filtered.map((order, idx) => {
            const isExpanded = expandedId === order._id;
            const isUpdating = updatingId === order._id;
            const cfg = STATUS_CFG[order.status] || STATUS_CFG['Order Placed'];
            const stepIdx = STATUS_STEPS.indexOf(order.status);
            const nextSteps = STATUS_STEPS.filter(s => STATUS_STEPS.indexOf(s) > stepIdx);
            const totalQty = (order.items || []).reduce((s, it) => s + safeQty(it.quantity), 0);
            const preview = (order.items || []).map(it => `${it.name || 'Item'} ×${safeQty(it.quantity)}`).join(' · ') || '—';
            const amount = Number(order.finalAmount) || Number(order.amount) || 0;

            return (
              <div key={order._id} style={{
                background: B.surface2, borderRadius: 14, overflow: 'hidden',
                border: `1px solid ${isExpanded ? B.greenBorder : B.border}`,
                boxShadow: isExpanded ? '0 8px 28px rgba(26,122,74,0.10), 0 2px 8px rgba(28,43,58,0.06)' : '0 1px 4px rgba(28,43,58,0.04)',
                transition: 'box-shadow .2s, border-color .2s',
                animation: `ddFadeUp .35s ease ${Math.min(idx, 8) * .045}s both`,
              }}
                onMouseEnter={e => { if (!isExpanded) e.currentTarget.style.borderColor = B.greenBorder; }}
                onMouseLeave={e => { if (!isExpanded) e.currentTarget.style.borderColor = B.border; }}>

                {/* Status color bar */}
                <div style={{ height: 3, background: `linear-gradient(90deg,${cfg.c.bar})` }} />

                {/* ── Summary row ── */}
                <div onClick={() => setExpandedId(isExpanded ? null : order._id)}
                  style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 18px', cursor: 'pointer', transition: 'background .15s' }}
                  onMouseEnter={e => e.currentTarget.style.background = B.bgHover}
                  onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>

                  {/* Status icon */}
                  <div style={{
                    width: 44, height: 44, borderRadius: 12, flexShrink: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: cfg.c.bg, border: `1px solid ${cfg.c.border}`,
                  }}>
                    <span style={{ color: cfg.c.text }}>{cfg.icon}</span>
                  </div>

                  {/* Info */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 3, flexWrap: 'wrap' }}>
                      <span style={{
                        fontFamily: 'monospace', fontSize: 10, color: B.navyGhost, letterSpacing: '.06em',
                        padding: '3px 8px', background: B.surface3, border: `1px solid ${B.border}`,
                        borderRadius: 6, maxWidth: 130, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                      }}>
                        #{(order._id || '').toUpperCase()}
                      </span>
                      <button onClick={e => { e.stopPropagation(); copyText(order._id, order._id + '-hdr'); }} style={{
                        width: 20, height: 20, borderRadius: 6, border: `1px solid ${B.border}`,
                        background: B.surface3, color: B.navyGhost,
                        display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
                      }}>
                        {copiedId === order._id + '-hdr' ? <TbCheck size={10} /> : <TbCopy size={10} />}
                      </button>
                      <span style={{ color: B.navyGhost, fontSize: 10.5 }}>{fmtRel(order.date)}</span>
                    </div>
                    <p style={{ color: B.navy, fontSize: 15, fontWeight: 700, letterSpacing: -.2, lineHeight: 1.2 }}>
                      {order.address?.firstName || ''} {order.address?.lastName || ''}
                    </p>
                    <p style={{ color: B.navyGhost, fontSize: 12, marginTop: 3, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {preview}
                    </p>
                  </div>

                  {/* Meta */}
                  <div style={{ flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 5 }}>
                    <span style={{ color: B.navyGhost, fontSize: 11.5, display: 'flex', alignItems: 'center', gap: 5 }}>
                      <TbCalendar size={11} style={{ color: B.navyGhost }} />{fmtDate(order.date)}
                    </span>
                    <span style={{ color: B.navyGhost, fontSize: 11.5, display: 'flex', alignItems: 'center', gap: 5 }}>
                      <TbShoppingBag size={11} style={{ color: B.navyGhost }} />{totalQty} item{totalQty !== 1 ? 's' : ''}
                    </span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <span style={{ color: B.navyGhost, fontSize: 11 }}>{order.paymentMethod || '—'}</span>
                      <PayBadge paid={order.payment} />
                    </div>
                  </div>

                  {/* Amount */}
                  <div style={{ textAlign: 'right', flexShrink: 0, minWidth: 78, marginLeft: 4 }}>
                    <div style={{ color: B.green, fontSize: 19, fontWeight: 800, letterSpacing: -.5, lineHeight: 1 }}>
                      {currency}{amount.toLocaleString('en-US')}
                    </div>
                    <div style={{ color: B.navyGhost, fontSize: 10, marginTop: 3 }}>Order total</div>
                  </div>

                  {/* Status select + spinner + expand */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }} onClick={e => e.stopPropagation()}>
                    <StatusSelect value={order.status || 'Order Placed'} onChange={v => statusHandler(v, order._id)} disabled={isUpdating} />
                    {isUpdating && (
                      <div style={{
                        width: 18, height: 18, borderRadius: '50%',
                        border: `2px solid ${B.green}`, borderTopColor: 'transparent',
                        animation: 'ddSpin .85s linear infinite', flexShrink: 0,
                      }} />
                    )}
                    <button onClick={() => setExpandedId(isExpanded ? null : order._id)} style={{
                      width: 32, height: 32, borderRadius: '50%', flexShrink: 0, border: `1px solid ${B.border}`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'all .18s',
                      ...(isExpanded
                        ? { background: B.greenBg, color: B.green, borderColor: B.greenBorder }
                        : { background: B.surface, color: B.navyGhost }),
                    }}>
                      <TbChevronDown size={14} style={{ transition: 'transform .2s', transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)' }} />
                    </button>
                  </div>
                </div>

                {/* ── Expanded detail ── */}
                {isExpanded && (
                  <div className="dd-de dd-det" style={{ borderTop: `1px solid ${B.border}`, background: B.surface }}>

                    {/* COL 1 — Items */}
                    <div style={{ padding: 18 }} className="dd-col">
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
                        <h3 style={{ color: B.navyGhost, fontSize: 10.5, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.7px', display: 'flex', alignItems: 'center', gap: 6, margin: 0 }}>
                          <TbShoppingBag size={12} />Order Items
                        </h3>
                        <span style={{ padding: '2px 8px', borderRadius: 99, background: B.surface3, border: `1px solid ${B.border}`, color: B.navyGhost, fontSize: 10, fontWeight: 600 }}>
                          {(order.items || []).length} product{(order.items || []).length !== 1 ? 's' : ''}
                        </span>
                      </div>
                      {(order.items || []).map((item, ii) => {
                        const qty = safeQty(item.quantity);
                        const size = safeSize(item.size); const color = safeColor(item.color);
                        const img = Array.isArray(item.image) ? item.image[0] : item.image;
                        const lineTotal = item.subtotal ? Number(item.subtotal) : item.price ? Number(item.price) * qty : null;
                        return (
                          <div key={ii} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 0', borderBottom: `1px solid ${B.border}` }}>
                            <div style={{
                              width: 40, height: 40, borderRadius: 10, flexShrink: 0, overflow: 'hidden',
                              background: B.surface3, border: `1px solid ${B.border}`,
                              display: 'flex', alignItems: 'center', justifyContent: 'center',
                            }}>
                              {img ? <img src={img} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : <span style={{ fontSize: 18 }}>👕</span>}
                            </div>
                            <div style={{ flex: '1 1 180px', minWidth: 0, maxWidth: 220 }}>
                              <p style={{ color: B.navy, fontSize: 13, fontWeight: 600, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{item.name || '—'}</p>
                              {(size || color) && (
                                <div style={{ display: 'flex', gap: 5, marginTop: 4, flexWrap: 'wrap' }}>
                                  {size && <span style={{ padding: '2px 7px', borderRadius: 99, background: B.surface3, border: `1px solid ${B.border}`, color: B.navyGhost, fontSize: 10 }}>Size: {size}</span>}
                                  {color && <span style={{ padding: '2px 7px', borderRadius: 99, background: B.surface3, border: `1px solid ${B.border}`, color: B.navyGhost, fontSize: 10 }}>{color}</span>}
                                </div>
                              )}
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 2, flexShrink: 0 }}>
                              <span style={{ color: B.navyGhost, fontSize: 12, fontWeight: 600 }}>×{qty}</span>
                              {lineTotal != null && <span style={{ color: B.green, fontSize: 13, fontWeight: 800 }}>{currency}{lineTotal.toFixed(0)}</span>}
                            </div>
                          </div>
                        );
                      })}
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 12, paddingTop: 12, borderTop: `1px solid ${B.border}` }}>
                        <span style={{ color: B.navyGhost, fontSize: 12 }}>{totalQty} item{totalQty !== 1 ? 's' : ''} · {order.paymentMethod || '—'}</span>
                        <span style={{ color: B.green, fontSize: 18, fontWeight: 800 }}>{currency}{amount.toLocaleString('en-US')}</span>
                      </div>
                    </div>

                    {/* COL 2 — Address + Payment */}
                    <div style={{ padding: 18 }} className="dd-col">
                      <h3 style={{ color: B.navyGhost, fontSize: 10.5, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.7px', display: 'flex', alignItems: 'center', gap: 6, marginBottom: 12, marginTop: 0 }}>
                        <TbMapPin size={12} />Delivery Address
                      </h3>
                      <div style={{ background: B.surface3, border: `1px solid ${B.border}`, borderRadius: 10, padding: 14, marginBottom: 16 }}>
                        <p style={{ color: B.navy, fontSize: 14.5, fontWeight: 800, marginBottom: 8 }}>{order.address?.firstName || ''} {order.address?.lastName || ''}</p>
                        <p style={{ color: B.navySoft, fontSize: 13, lineHeight: 1.6 }}>{order.address?.street || '—'}</p>
                        <p style={{ color: B.navySoft, fontSize: 13 }}>{[order.address?.city, order.address?.state, order.address?.country].filter(Boolean).join(', ') || '—'}</p>
                        {order.address?.zipcode && <p style={{ color: B.navyGhost, fontSize: 12, marginTop: 3 }}>PIN: {order.address.zipcode}</p>}
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 10 }}>
                          {order.address?.phone && (
                            <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                              <span style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '6px 10px', background: B.surface2, border: `1px solid ${B.border}`, borderRadius: 8, color: B.navy, fontSize: 12, fontWeight: 600 }}>
                                <TbPhone size={11} style={{ color: B.green }} />{order.address.phone}
                              </span>
                              <CopyBtn text={order.address.phone} id={order._id + '-ph'} copiedId={copiedId} onCopy={copyText} />
                            </div>
                          )}
                          {order.address?.email && (
                            <span style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '6px 10px', background: B.surface2, border: `1px solid ${B.border}`, borderRadius: 8, color: B.navySoft, fontSize: 12, maxWidth: '100%', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                              <TbMail size={11} style={{ color: B.green, flexShrink: 0 }} />{order.address.email}
                            </span>
                          )}
                        </div>
                      </div>

                      <h3 style={{ color: B.navyGhost, fontSize: 10.5, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.7px', display: 'flex', alignItems: 'center', gap: 6, marginBottom: 12, marginTop: 0 }}>
                        <TbCreditCard size={12} />Payment Details
                      </h3>
                      <div style={{ background: B.surface3, border: `1px solid ${B.border}`, borderRadius: 10, overflow: 'hidden' }}>
                        {[
                          ['Order ID', (
                            <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                              <span style={{ fontFamily: 'monospace', fontSize: 11, color: B.navyGhost, padding: '3px 8px', background: B.surface2, border: `1px solid ${B.border}`, borderRadius: 6, maxWidth: 140, overflow: 'hidden', textOverflow: 'ellipsis', display: 'block' }}>
                                #{(order._id || '').toUpperCase()}
                              </span>
                              <CopyBtn text={order._id} id={order._id + '-oid'} copiedId={copiedId} onCopy={copyText} />
                            </div>
                          )],
                          ['Payment ID', order.paymentId ? (
                            <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                              <span style={{ fontFamily: 'monospace', fontSize: 11, color: B.navyGhost, padding: '3px 8px', background: B.surface2, border: `1px solid ${B.border}`, borderRadius: 6, maxWidth: 140, overflow: 'hidden', textOverflow: 'ellipsis', display: 'block' }}>
                                {order.paymentId}
                              </span>
                              <CopyBtn text={order.paymentId} id={order._id + '-pid'} copiedId={copiedId} onCopy={copyText} />
                            </div>
                          ) : <span style={{ color: B.navyGhost }}>—</span>],
                          ['Date', `${fmtDate(order.date)} · ${fmtTime(order.date)}`],
                          ['Method', order.paymentMethod || '—'],
                          ['Status', <PayBadge paid={order.payment} />],
                          ['Total', <span style={{ color: B.green, fontSize: 16, fontWeight: 800 }}>{currency}{amount.toLocaleString('en-US')}</span>],
                        ].map(([k, v], i) => (
                          <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '9px 14px', fontSize: 12.5, borderBottom: i < 5 ? `1px solid ${B.border}` : 'none' }}>
                            <span style={{ color: B.navyGhost, fontWeight: 500 }}>{k}</span>
                            <span style={{ color: B.navy, fontWeight: 600, textAlign: 'right' }}>{v}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* COL 3 — Tracker + Actions */}
                    <div style={{ padding: 18 }}>
                      <h3 style={{ color: B.navyGhost, fontSize: 10.5, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.7px', display: 'flex', alignItems: 'center', gap: 6, marginBottom: 16, marginTop: 0 }}>
                        <TbChartBar size={12} />Fulfillment Progress
                      </h3>

                      {order.status === 'Cancelled' ? (
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, padding: 12, borderRadius: 10, marginBottom: 16, background: B.red.bg, border: `1px solid ${B.red.border}` }}>
                          <TbBan size={15} style={{ color: B.red.text, flexShrink: 0, marginTop: 1 }} />
                          <div>
                            <p style={{ color: B.red.text, fontSize: 13, fontWeight: 700 }}>Order Cancelled</p>
                            <p style={{ color: B.red.text, fontSize: 12, opacity: .7, marginTop: 3 }}>This order will not be fulfilled.</p>
                          </div>
                        </div>
                      ) : (
                        <div style={{ marginBottom: 20 }}><StatusTracker status={order.status || 'Order Placed'} /></div>
                      )}

                      <h3 style={{ color: B.navyGhost, fontSize: 10.5, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.7px', display: 'flex', alignItems: 'center', gap: 6, marginBottom: 10, marginTop: 0 }}>
                        <TbBolt size={12} />Quick Update
                      </h3>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
                        {nextSteps.map(s => {
                          const scfg = STATUS_CFG[s];
                          return (
                            <QBtn key={s} disabled={isUpdating} onClick={() => statusHandler(s, order._id)}>
                              <span style={{ width: 8, height: 8, borderRadius: '50%', background: scfg.c.dot, flexShrink: 0 }} />
                              <span>Mark as <strong style={{ color: scfg.c.text }}>{s}</strong></span>
                              <TbArrowRight size={13} style={{ marginLeft: 'auto', color: B.navyGhost }} />
                            </QBtn>
                          );
                        })}
                        {stepIdx > 0 && order.status !== 'Cancelled' && (
                          <QBtn variant="revert" disabled={isUpdating} onClick={() => statusHandler(STATUS_STEPS[stepIdx - 1], order._id)}>
                            <TbArrowBack size={13} style={{ color: B.navyGhost }} />
                            <span>Revert to <strong>{STATUS_STEPS[stepIdx - 1]}</strong></span>
                          </QBtn>
                        )}
                        {order.status !== 'Cancelled' && order.status !== 'Delivered' && (
                          <QBtn variant="cancel" disabled={isUpdating}
                            onClick={() => { if (window.confirm('Cancel this order? This cannot be undone.')) statusHandler('Cancelled', order._id); }}>
                            <TbBan size={13} /><span>Cancel Order</span>
                          </QBtn>
                        )}
                      </div>

                      {/* Info tip box */}
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8, padding: 10, borderRadius: 10, marginTop: 12, background: B.greenBg, border: `1px solid ${B.greenBorder}` }}>
                        <TbAlertCircle size={14} style={{ color: B.green, flexShrink: 0, marginTop: 1 }} />
                        <p style={{ color: B.navySoft, fontSize: 11.5, lineHeight: 1.5 }}>
                          Use the dropdown or quick buttons to update status. Changes save instantly.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <div style={{ height: 40 }} />
      </div>
    </div>
  );
};

export default Orders;