import React, { useState, useEffect, useMemo, useCallback, useContext } from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer,
} from 'recharts';
import {
  TbShoppingCart, TbUsers, TbCurrencyDollar, TbPackage,
  TbTrendingUp, TbTrendingDown, TbPlus,
  TbArrowRight, TbCheck, TbX, TbChartBar,
  TbCalendar, TbStar, TbAlertTriangle, TbCircleCheck,
  TbClock, TbTruck, TbChartPie, TbFilter,
  TbRefresh,
  TbBuildingStore, TbTag, TbPhoto, TbBox,
  TbPercentage, TbStarFilled, TbGridDots,
  TbList, TbBell, TbSettings, TbLogout
} from 'react-icons/tb';
import axios from 'axios';
import { toast } from 'react-toastify';
import { backendUrl, MyContext } from '../App';
import Orders from './Orders/Orders';
import ProductsList from './Products/ProductsLIst';
import Users from './Users/Users';
import Analytics from './Analytics/Analytics';

/* ─── D DOLLY LAMB — LIGHT LUXURY TOKENS ─────────────────────
   Matches Sidebar + Header palette exactly.
   Warm ivory base · ink navy text · forest green accent
   Champagne gold for premium badges · No dark mode.
──────────────────────────────────────────────────────────────── */
const B = {
  // Backgrounds
  bg: '#F4F2EE',   // page background — warm off-white
  surface: '#FAFAF8',   // card surface — ivory white
  surface2: '#FFFFFF',   // elevated card / dropdown
  bgHover: '#EDE9E2',   // hover — warm linen
  bgActive: '#E8F4EE',   // active/selected — soft sage

  // Borders
  border: '#E0DBD3',   // default border
  borderMid: '#C8C2B8',   // stronger divider
  borderGreen: '#A8D5BC', // green-tinted border

  // Text
  navy: '#1C2B3A',   // primary — deep ink
  navyMid: '#2E4057',   // secondary nav labels
  navySoft: '#4A6070',   // muted body
  navyGhost: '#8FA0AD',   // placeholders / hints

  // Green accent (primary CTA / active)
  green: '#1A7A4A',
  greenHover: '#2A9960',
  greenBg: '#E8F4EE',
  greenBorder: '#A8D5BC',
  greenLight: '#D1EAD8',

  // Champagne (premium / badge)
  champ: '#B8985A',
  champBg: '#FBF5E8',
  champBorder: '#DBC98A',
  champText: '#8B6914',

  // Semantic status colours — tuned for light bg
  amber: { bg: '#FEF3C7', text: '#92400E', border: '#FCD34D', dot: '#D97706' },
  blue: { bg: '#EFF6FF', text: '#1E40AF', border: '#BFDBFE', dot: '#3B82F6' },
  emerald: { bg: '#E8F4EE', text: '#065F2C', border: '#A8D5BC', dot: '#1A7A4A' },
  red: { bg: '#FEF2F2', text: '#991B1B', border: '#FECACA', dot: '#EF4444' },
  violet: { bg: '#F5F3FF', text: '#4C1D95', border: '#DDD6FE', dot: '#7C3AED' },
  gray: { bg: '#F4F2EE', text: '#4A6070', border: '#E0DBD3', dot: '#8FA0AD' },
};

/* ── Shared style shortcuts ── */
const S = {
  card: { background: B.surface, border: `1px solid ${B.border}` },
  card2: { background: B.surface2, border: `1px solid ${B.border}` },
  muted: { color: B.navyGhost },
  body: { color: B.navySoft },
  primary: { color: B.navy },
};

/* ══════════════════════════════════════════════════════════════
   STATUS BADGE
══════════════════════════════════════════════════════════════ */
const STATUS_CFG = {
  pending: { label: 'Pending', c: B.amber, icon: <TbClock size={11} /> },
  shipped: { label: 'Shipped', c: B.blue, icon: <TbTruck size={11} /> },
  delivered: { label: 'Delivered', c: B.emerald, icon: <TbCircleCheck size={11} /> },
  cancelled: { label: 'Cancelled', c: B.red, icon: <TbX size={11} /> },
  active: { label: 'Active', c: B.emerald, icon: null },
  inactive: { label: 'Inactive', c: B.gray, icon: null },
};

const StatusBadge = ({ status }) => {
  const cfg = STATUS_CFG[(status || '').toLowerCase()] || STATUS_CFG.pending;
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 5, padding: '3px 10px',
      borderRadius: 99, background: cfg.c.bg, color: cfg.c.text,
      border: `1px solid ${cfg.c.border}`, fontSize: 11.5, fontWeight: 600,
    }}>
      <span style={{ width: 6, height: 6, borderRadius: '50%', background: cfg.c.dot, flexShrink: 0 }} />
      {cfg.label}
    </span>
  );
};

/* ══════════════════════════════════════════════════════════════
   PRIMARY BUTTON
══════════════════════════════════════════════════════════════ */
const PrimaryBtn = ({ children, onClick, variant = 'primary', disabled = false, size = 'sm', title }) => {
  const [hov, setHov] = useState(false);
  const pad = { xs: '5px 10px', sm: '7px 14px', md: '9px 20px' }[size];
  const font = { xs: 11, sm: 12.5, md: 13.5 }[size];

  const styles = {
    primary: {
      bg: hov ? B.greenHover : B.green,
      color: '#FFFFFF',
      border: `1px solid ${hov ? B.greenHover : B.green}`,
    },
    ghost: {
      bg: hov ? B.bgHover : 'transparent',
      color: B.navySoft,
      border: `1px solid ${B.border}`,
    },
    danger: {
      bg: hov ? '#FECACA' : B.red.bg,
      color: B.red.text,
      border: `1px solid ${B.red.border}`,
    },
    outline: {
      bg: hov ? B.greenBg : 'transparent',
      color: B.green,
      border: `1px solid ${B.greenBorder}`,
    },
    surface: {
      bg: hov ? B.bgHover : B.surface,
      color: B.navySoft,
      border: `1px solid ${B.border}`,
    },
    champ: {
      bg: hov ? '#EFE2C0' : B.champBg,
      color: B.champText,
      border: `1px solid ${B.champBorder}`,
    },
  }[variant] || {};

  return (
    <button onClick={onClick} disabled={disabled} title={title}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        background: styles.bg, color: styles.color, border: styles.border,
        display: 'inline-flex', alignItems: 'center', gap: 6,
        padding: pad, borderRadius: 8, fontSize: font, fontWeight: 600,
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
        transition: 'all .15s', flexShrink: 0,
        boxShadow: variant === 'primary' ? '0 2px 8px rgba(26,122,74,0.2)' : 'none',
      }}
    >{children}</button>
  );
};

/* ══════════════════════════════════════════════════════════════
   CUSTOM TOOLTIP
══════════════════════════════════════════════════════════════ */
const LightTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;
  return (
    <div style={{
      ...S.card2, borderRadius: 10, padding: '10px 14px', fontSize: 12.5,
      boxShadow: '0 8px 30px rgba(28,43,58,0.12)', border: `1px solid ${B.greenBorder}`,
    }}>
      <p style={{ color: B.green, fontWeight: 700, marginBottom: 8 }}>{label}</p>
      {payload.map((p, i) => (
        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: p.color }} />
          <span style={S.muted}>{p.name}:</span>
          <span style={{ color: B.navy, fontWeight: 700 }}>
            {p.name === 'Revenue' ? `$${p.value.toLocaleString()}` : p.value.toLocaleString()}
          </span>
        </div>
      ))}
    </div>
  );
};

/* ══════════════════════════════════════════════════════════════
   KPI CARD
══════════════════════════════════════════════════════════════ */
const KPICard = ({ icon, label, value, change, changeLabel, sparkData }) => {
  const [hov, setHov] = useState(false);
  const isPos = change >= 0;
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: B.surface2,
        border: `1px solid ${hov ? B.greenBorder : B.border}`,
        borderRadius: 14, padding: '16px 18px',
        transition: 'box-shadow .2s, border-color .2s',
        boxShadow: hov
          ? `0 8px 28px rgba(26,122,74,0.12), 0 2px 8px rgba(28,43,58,0.06)`
          : '0 2px 8px rgba(28,43,58,0.05)',
        display: 'flex', flexDirection: 'column', gap: 0,
      }}
    >
      {/* Top row: icon + trend */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
        <div style={{
          width: 38, height: 38, borderRadius: 10,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          background: B.greenBg, border: `1px solid ${B.greenBorder}`,
        }}>
          {React.cloneElement(icon, { size: 18, style: { color: B.green } })}
        </div>
        <span style={{
          display: 'inline-flex', alignItems: 'center', gap: 3,
          fontSize: 11, fontWeight: 700, padding: '3px 8px', borderRadius: 99,
          background: isPos ? B.emerald.bg : B.red.bg,
          color: isPos ? B.emerald.text : B.red.text,
          border: `1px solid ${isPos ? B.emerald.border : B.red.border}`,
        }}>
          {isPos ? <TbTrendingUp size={11} /> : <TbTrendingDown size={11} />}
          {Math.abs(change)}%
        </span>
      </div>

      <p style={{ color: B.navyGhost, fontSize: 11.5, fontWeight: 600, letterSpacing: 0.3, marginBottom: 4 }}>{label}</p>
      <p style={{ color: B.navy, fontSize: 22, fontWeight: 800, letterSpacing: -0.5, lineHeight: 1, marginBottom: 4 }}>{value}</p>
      <p style={{ color: B.navyGhost, fontSize: 10.5, lineHeight: 1.4 }}>{changeLabel}</p>

      {/* Spark chart */}
      <div style={{ marginTop: 10, marginLeft: -4, marginRight: -4 }}>
        <ResponsiveContainer width="100%" height={36}>
          <AreaChart data={sparkData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id={`spark-${label}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={B.green} stopOpacity={0.2} />
                <stop offset="95%" stopColor={B.green} stopOpacity={0} />
              </linearGradient>
            </defs>
            <Area type="monotone" dataKey="v" stroke={B.green} strokeWidth={1.8}
              fill={`url(#spark-${label})`} dot={false} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

/* ══════════════════════════════════════════════════════════════
   MINI STATUS PILL
══════════════════════════════════════════════════════════════ */
const MiniStat = ({ icon, label, value, trend, accentBg, accentColor, accentBorder }) => (
  <div style={{
    background: B.surface2,
    border: `1px solid ${B.border}`,
    borderRadius: 12, padding: '11px 14px',
    display: 'flex', alignItems: 'center', gap: 10,
    boxShadow: '0 1px 4px rgba(28,43,58,0.04)',
  }}>
    <div style={{
      width: 34, height: 34, borderRadius: 9, flexShrink: 0,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: accentBg, border: `1px solid ${accentBorder || B.border}`,
    }}>
      {React.cloneElement(icon, { size: 15, style: { color: accentColor } })}
    </div>
    <div style={{ flex: 1, minWidth: 0 }}>
      <p style={{ color: B.navyGhost, fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 0.6, marginBottom: 1 }}>{label}</p>
      <p style={{ color: B.navy, fontSize: 17, fontWeight: 800, lineHeight: 1 }}>{value}</p>
    </div>
    {trend !== undefined && (
      <span style={{
        display: 'flex', alignItems: 'center', gap: 2, fontSize: 10.5, fontWeight: 700,
        color: trend >= 0 ? B.emerald.text : B.red.text,
        background: trend >= 0 ? B.emerald.bg : B.red.bg,
        padding: '2px 6px', borderRadius: 99,
        border: `1px solid ${trend >= 0 ? B.emerald.border : B.red.border}`,
      }}>
        {trend >= 0 ? <TbTrendingUp size={11} /> : <TbTrendingDown size={11} />}
        {Math.abs(trend)}%
      </span>
    )}
  </div>
);

/* ══════════════════════════════════════════════════════════════
   SECTION CARD WRAPPER
══════════════════════════════════════════════════════════════ */
const SectionCard = ({ title, subtitle, children, toolbar, style = {} }) => (
  <div style={{
    background: B.surface2, border: `1px solid ${B.border}`,
    borderRadius: 16, overflow: 'hidden',
    boxShadow: '0 2px 8px rgba(28,43,58,0.05)',
    ...style,
  }}>
    <div style={{
      display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between',
      padding: '14px 20px', borderBottom: `1px solid ${B.border}`,
      background: B.surface,
    }}>
      <div>
        <h2 style={{ color: B.navy, fontSize: 13.5, fontWeight: 700 }}>{title}</h2>
        {subtitle && <p style={{ color: B.navyGhost, fontSize: 11, marginTop: 2 }}>{subtitle}</p>}
      </div>
      {toolbar}
    </div>
    {children}
  </div>
);

/* ══════════════════════════════════════════════════════════════
   ACTIVITY FEED
══════════════════════════════════════════════════════════════ */
const ActivityFeed = ({ orders = [], products = [] }) => {
  const activities = useMemo(() => {
    const items = [];
    [...orders].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 5).forEach(o => {
      const name = `${o.address?.firstName || ''} ${o.address?.lastName || ''}`.trim() || 'Customer';
      const amount = Number(o.finalAmount) || Number(o.amount) || 0;
      const ts = o.date ? new Date(o.date) : null;
      const sl = (o.status || '').toLowerCase();
      if (sl === 'delivered') items.push({ c: B.emerald, icon: <TbCircleCheck size={13} />, text: `Delivered to ${name}`, time: ts });
      else if (sl === 'shipped') items.push({ c: B.blue, icon: <TbTruck size={13} />, text: `Shipped to ${name}`, time: ts });
      else if (sl === 'cancelled') items.push({ c: B.red, icon: <TbX size={13} />, text: `Cancelled by ${name}`, time: ts });
      else items.push({ c: B.emerald, icon: <TbShoppingCart size={13} />, text: `New order $${amount.toLocaleString()} from ${name}`, time: ts });
    });
    products.filter(p => {
      const st = Array.isArray(p.sizes) ? p.sizes.reduce((s, sz) => s + (Number(sz?.stock) || 0), 0) : Number(p.stock) || 0;
      return st <= 5;
    }).slice(0, 3).forEach(p => {
      const st = Array.isArray(p.sizes) ? p.sizes.reduce((s, sz) => s + (Number(sz?.stock) || 0), 0) : Number(p.stock) || 0;
      items.push({ c: st === 0 ? B.red : B.amber, icon: <TbAlertTriangle size={13} />, text: st === 0 ? `"${p.name}" out of stock` : `"${p.name}" — ${st} left`, time: null });
    });
    return items.sort((a, b) => { if (!a.time && !b.time) return 0; if (!a.time) return 1; if (!b.time) return -1; return b.time - a.time; }).slice(0, 8);
  }, [orders, products]);

  const fmtRel = ts => {
    if (!ts) return 'Stock alert';
    const m = Math.floor((Date.now() - new Date(ts).getTime()) / 60000);
    if (m < 1) return 'just now'; if (m < 60) return `${m}m ago`;
    const h = Math.floor(m / 60); if (h < 24) return `${h}h ago`;
    return `${Math.floor(h / 24)}d ago`;
  };

  return (
    <div style={{
      background: B.surface2, border: `1px solid ${B.border}`,
      borderRadius: 16, overflow: 'hidden', height: 'fit-content',
      boxShadow: '0 2px 8px rgba(28,43,58,0.05)',
    }}>
      <div style={{ padding: '14px 18px', borderBottom: `1px solid ${B.border}`, background: B.surface }}>
        <h2 style={{ color: B.navy, fontSize: 13.5, fontWeight: 700 }}>Activity Feed</h2>
        <p style={{ color: B.navyGhost, fontSize: 11, marginTop: 2 }}>Live store events</p>
      </div>
      {activities.length === 0 ? (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '40px 20px', gap: 8 }}>
          <TbShoppingCart size={26} style={{ color: B.borderMid }} />
          <p style={{ color: B.navyGhost, fontSize: 12.5 }}>No activity yet</p>
        </div>
      ) : (
        <div>
          {activities.map((a, i) => (
            <div key={i}
              style={{ display: 'flex', alignItems: 'flex-start', gap: 10, padding: '10px 18px', borderBottom: `1px solid ${B.border}`, transition: 'background .15s', cursor: 'default' }}
              onMouseEnter={e => e.currentTarget.style.background = B.bgHover}
              onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
            >
              <div style={{
                width: 28, height: 28, borderRadius: 8, flexShrink: 0, marginTop: 1,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: a.c.bg, color: a.c.text, border: `1px solid ${a.c.border}`,
              }}>{a.icon}</div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{ color: B.navy, fontSize: 12, fontWeight: 500, lineHeight: 1.4, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{a.text}</p>
                <p style={{ color: B.navyGhost, fontSize: 10.5, marginTop: 2, display: 'flex', alignItems: 'center', gap: 3 }}>
                  <TbClock size={9} />{fmtRel(a.time)}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
      <div style={{ padding: '8px 18px', background: B.surface }}>
        <p style={{ color: B.navyGhost, fontSize: 11 }}>{activities.length} recent event{activities.length !== 1 ? 's' : ''}</p>
      </div>
    </div>
  );
};

/* ══════════════════════════════════════════════════════════════
   DASHBOARD
══════════════════════════════════════════════════════════════ */
const Dashboard = ({ token }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [greeting, setGreeting] = useState('Good Morning');
  const [liveTime, setLiveTime] = useState(new Date());
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);
  const [loadingO, setLoadingO] = useState(true);
  const [loadingP, setLoadingP] = useState(true);

  const context = useContext(MyContext);

  useEffect(() => {
    const h = new Date().getHours();
    setGreeting(h < 12 ? 'Good Morning' : h < 17 ? 'Good Afternoon' : 'Good Evening');
    const t = setInterval(() => setLiveTime(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  const fetchOrders = useCallback(async () => {
    if (!token) return; setLoadingO(true);
    try {
      const r = await axios.post(backendUrl + '/api/order/list', {}, { headers: { token } });
      if (r.data.success) setOrders((r.data.orders || []).slice().reverse()); else toast.error(r.data.message);
    } catch (e) { toast.error(e?.message || 'Failed to load orders'); }
    finally { setLoadingO(false); }
  }, [token]);

  const fetchProducts = useCallback(async () => {
    if (!token) return; setLoadingP(true);
    try {
      const r = await axios.get(backendUrl + '/api/product/list', { headers: { token } });
      if (r.data.success) setProducts(r.data.products || []); else toast.error(r.data.message);
    } catch (e) { toast.error(e?.message || 'Failed to load products'); }
    finally { setLoadingP(false); }
  }, [token]);

  const refreshAll = useCallback(() => { fetchOrders(); fetchProducts(); }, [fetchOrders, fetchProducts]);
  useEffect(() => { refreshAll(); }, [refreshAll]);

  const loading = loadingO || loadingP;

  /* ── Derived KPIs ── */
  const kpi = useMemo(() => {
    const now = new Date(), curY = now.getFullYear(), curM = now.getMonth();
    const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const isToday = ts => { const d = new Date(ts); return d.getDate() === now.getDate() && d.getMonth() === curM && d.getFullYear() === curY; };
    const thisStart = new Date(curY, curM, 1);
    const prevStart = new Date(curY, curM - 1, 1);
    const prevEnd = new Date(curY, curM, 0, 23, 59, 59);
    const amt = o => Number(o.finalAmount) || Number(o.amount) || 0;
    const sIs = (o, ...ss) => ss.some(s => (o.status || '').toLowerCase() === s.toLowerCase());
    const todayO = orders.filter(o => isToday(o.date));
    const thisMonO = orders.filter(o => new Date(o.date) >= thisStart);
    const prevMonO = orders.filter(o => { const d = new Date(o.date); return d >= prevStart && d <= prevEnd; });
    const totalRev = orders.reduce((s, o) => s + amt(o), 0);
    const paidRev = orders.filter(o => o.payment).reduce((s, o) => s + amt(o), 0);
    const todayRev = todayO.reduce((s, o) => s + amt(o), 0);
    const thisMonRev = thisMonO.reduce((s, o) => s + amt(o), 0);
    const prevMonRev = prevMonO.reduce((s, o) => s + amt(o), 0);
    const revChange = prevMonRev > 0 ? Math.round(((thisMonRev - prevMonRev) / prevMonRev) * 100) : thisMonRev > 0 ? 100 : 0;
    const ordChange = prevMonO.length > 0 ? Math.round(((thisMonO.length - prevMonO.length) / prevMonO.length) * 100) : thisMonO.length > 0 ? 100 : 0;
    const delivered = orders.filter(o => sIs(o, 'Delivered')).length;
    const cancelled = orders.filter(o => sIs(o, 'Cancelled')).length;
    const pending = orders.filter(o => sIs(o, 'Order Placed', 'Packing', 'pending')).length;
    const inTransit = orders.filter(o => sIs(o, 'Shipped', 'Out for delivery')).length;
    const getStock = p => Array.isArray(p.sizes) ? p.sizes.reduce((s, sz) => s + (Number(sz?.stock) || 0), 0) : Number(p.stock) || 0;
    const outOfStock = products.filter(p => getStock(p) === 0).length;
    const lowStock = products.filter(p => { const st = getStock(p); return st > 0 && st <= 10; }).length;
    const pct = (c, p) => p > 0 ? Math.round(((c - p) / p) * 100) : c > 0 ? 100 : 0;
    const prevDel = prevMonO.filter(o => sIs(o, 'Delivered')).length;
    const prevCan = prevMonO.filter(o => sIs(o, 'Cancelled')).length;
    const prevPend = prevMonO.filter(o => sIs(o, 'Order Placed', 'Packing', 'pending')).length;
    const prevTrans = prevMonO.filter(o => sIs(o, 'Shipped', 'Out for delivery')).length;
    const byMonth = fn => MONTHS.map((_, mi) => ({ v: orders.filter(o => new Date(o.date).getFullYear() === curY && new Date(o.date).getMonth() === mi).reduce(fn, 0) }));
    const revenueByMonth = byMonth((s, o) => s + amt(o));
    const ordersByMonth = MONTHS.map((_, mi) => ({ v: orders.filter(o => new Date(o.date).getFullYear() === curY && new Date(o.date).getMonth() === mi).length }));
    const deliveredByMonth = MONTHS.map((_, mi) => ({ v: orders.filter(o => sIs(o, 'Delivered') && new Date(o.date).getFullYear() === curY && new Date(o.date).getMonth() === mi).length }));
    const catStock = {};
    products.forEach(p => { const c = p.category || 'Other'; catStock[c] = (catStock[c] || 0) + getStock(p); });
    const productSpark = Object.values(catStock).length > 0 ? Object.values(catStock).map(v => ({ v })) : MONTHS.map(() => ({ v: products.length }));
    return {
      totalRev, paidRev, todayRev, thisMonRev, revChange,
      totalOrders: orders.length, todayOrders: todayO.length, ordChange,
      totalProducts: products.length, outOfStock, lowStock,
      delivered, cancelled, pending, inTransit,
      deliveredTrend: pct(delivered, prevDel), cancelledTrend: pct(cancelled, prevCan),
      pendingTrend: pct(pending, prevPend), transitTrend: pct(inTransit, prevTrans),
      revenueByMonth, ordersByMonth, deliveredByMonth, productSpark,
    };
  }, [orders, products]);

  /* ── Tabs ── */
  const TABS = [
    { id: 'overview', label: 'Overview', icon: <TbChartBar size={14} /> },
    { id: 'orders', label: 'Orders', icon: <TbShoppingCart size={14} /> },
    { id: 'products', label: 'Products', icon: <TbPackage size={14} /> },
    { id: 'users', label: 'Users', icon: <TbUsers size={14} /> },
    { id: 'analytics', label: 'Analytics', icon: <TbChartPie size={14} /> },
  ];

  /* ── 4 KPI Cards ── */
  const KPI_CARDS = [
    { icon: <TbCurrencyDollar />, label: 'Total GMV', value: loading ? '…' : `$${kpi.totalRev.toLocaleString('en-US')}`, change: kpi.revChange, changeLabel: `$${kpi.paidRev.toLocaleString('en-US')} collected · $${kpi.todayRev.toLocaleString('en-US')} today`, sparkData: kpi.revenueByMonth },
    { icon: <TbShoppingCart />, label: 'Total Orders', value: loading ? '…' : kpi.totalOrders.toLocaleString(), change: kpi.ordChange, changeLabel: `${kpi.todayOrders} today · ${kpi.ordChange >= 0 ? '+' : ''}${kpi.ordChange}% vs last month`, sparkData: kpi.ordersByMonth },
    { icon: <TbPackage />, label: 'Products', value: loading ? '…' : kpi.totalProducts.toLocaleString(), change: kpi.outOfStock > 0 ? -kpi.outOfStock : 0, changeLabel: `${kpi.outOfStock} out of stock · ${kpi.lowStock} low stock`, sparkData: kpi.productSpark },
    { icon: <TbCircleCheck />, label: 'Delivered', value: loading ? '…' : kpi.delivered.toLocaleString(), change: kpi.deliveredTrend, changeLabel: `${kpi.pending} pending · ${kpi.cancelled} cancelled`, sparkData: kpi.deliveredByMonth },
  ];

  return (
    <div style={{
      minHeight: '100vh', background: B.bg,
      WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale',
      fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
    }}>

      {/* ══ HEADER BANNER ══ */}
      <div style={{
        background: B.surface2,
        borderBottom: `1px solid ${B.border}`,
        padding: '20px 24px', marginTop: 64,
        position: 'relative', overflow: 'hidden',
        boxShadow: '0 2px 12px rgba(28,43,58,0.05)',
      }}>
        {/* Subtle green shimmer top edge */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg, transparent, ${B.green}30, ${B.green}60, ${B.green}30, transparent)` }} />
        {/* Decorative circle */}
        <div style={{ position: 'absolute', top: '-40%', right: '-2%', width: '22%', height: '200%', background: `radial-gradient(ellipse, ${B.greenBg} 0%, transparent 70%)`, pointerEvents: 'none' }} />

        <div style={{ maxWidth: 1400, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 14, position: 'relative' }}>

          {/* Left */}
          <div>
            <p style={{ color: B.navyGhost, fontSize: 11.5, fontWeight: 500, marginBottom: 5, display: 'flex', alignItems: 'center', gap: 5 }}>
              <TbCalendar size={11} style={{ color: B.green }} />
              {liveTime.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
              &nbsp;·&nbsp;
              <TbClock size={11} style={{ color: B.green }} />
              {liveTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
              {/* Logo mark */}
              <div style={{
                width: 30, height: 30, borderRadius: 7,
                background: B.green,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: `0 3px 10px rgba(26,122,74,0.25)`, flexShrink: 0,
              }}>
                <span style={{ fontWeight: 900, fontSize: 13, color: '#FFFFFF', fontFamily: 'Georgia, serif' }}>D</span>
              </div>
              <h1 style={{ fontSize: 20, fontWeight: 800, letterSpacing: -0.3, color: B.navy }}>
                {greeting}, Admin 👋
              </h1>
            </div>
            <p style={{ color: B.navySoft, fontSize: 12.5 }}>
              {loading ? 'Loading store data…'
                : `${kpi.totalOrders} orders · $${kpi.totalRev.toLocaleString('en-US')} GMV · $${kpi.paidRev.toLocaleString('en-US')} collected`}
            </p>
          </div>

          {/* Right — today card + actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{
              background: B.greenBg,
              border: `1px solid ${B.greenBorder}`,
              borderRadius: 12, padding: '12px 18px', minWidth: 148,
              boxShadow: '0 2px 10px rgba(26,122,74,0.08)',
            }}>
              <p style={{ color: B.navyGhost, fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 0.7, marginBottom: 3 }}>Today's Revenue</p>
              <p style={{ color: B.green, fontSize: 20, fontWeight: 800, letterSpacing: -0.5, lineHeight: 1 }}>
                {loading ? '…' : `$${kpi.todayRev.toLocaleString('en-US')}`}
              </p>
              <p style={{ color: B.navyGhost, fontSize: 10.5, marginTop: 3 }}>{kpi.todayOrders} order{kpi.todayOrders !== 1 ? 's' : ''} today</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
              <PrimaryBtn variant="primary"
                onClick={() => context.setIsOpenFullScreenPanel({ open: true, modal: 'Add product' })}>
                <TbPlus size={13} /> Add Product
              </PrimaryBtn>
              <PrimaryBtn variant="surface" onClick={refreshAll} disabled={loading}>
                <TbRefresh size={13} style={{ animation: loading ? 'spin 1s linear infinite' : undefined }} /> Refresh
              </PrimaryBtn>
            </div>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '20px 20px 40px' }}>

        {/* ══ TABS ══ */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: 3,
          background: B.surface2, border: `1px solid ${B.border}`,
          borderRadius: 12, padding: 5, marginBottom: 20,
          width: 'fit-content', overflowX: 'auto',
          boxShadow: '0 2px 8px rgba(28,43,58,0.05)',
        }}>
          {TABS.map(t => {
            const active = activeTab === t.id;
            return (
              <button key={t.id} onClick={() => setActiveTab(t.id)} style={{
                display: 'flex', alignItems: 'center', gap: 6,
                padding: '7px 16px', borderRadius: 8, fontSize: 12.5, fontWeight: 600,
                whiteSpace: 'nowrap', border: active ? `1px solid ${B.greenBorder}` : '1px solid transparent',
                cursor: 'pointer', transition: 'all .15s',
                background: active ? B.greenBg : 'transparent',
                color: active ? B.green : B.navySoft,
                boxShadow: active ? `0 2px 8px rgba(26,122,74,0.12)` : 'none',
              }}
                onMouseEnter={e => { if (!active) { e.currentTarget.style.color = B.navy; e.currentTarget.style.background = B.bgHover; } }}
                onMouseLeave={e => { if (!active) { e.currentTarget.style.color = B.navySoft; e.currentTarget.style.background = 'transparent'; } }}
              >
                {t.icon} {t.label}
              </button>
            );
          })}
        </div>

        {/* ══ OVERVIEW TAB ══ */}
        {activeTab === 'overview' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>

            {/* 4 KPI cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14 }} className="kpi-grid">
              {KPI_CARDS.map((c, i) => <KPICard key={i} {...c} />)}
            </div>

            {/* 4 Mini status pills */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 12 }}>
              <MiniStat icon={<TbTruck />} label="In Transit" value={loading ? '…' : kpi.inTransit} accentBg={B.blue.bg} accentColor={B.blue.text} accentBorder={B.blue.border} trend={loading ? undefined : kpi.transitTrend} />
              <MiniStat icon={<TbCircleCheck />} label="Delivered" value={loading ? '…' : kpi.delivered} accentBg={B.emerald.bg} accentColor={B.emerald.text} accentBorder={B.emerald.border} trend={loading ? undefined : kpi.deliveredTrend} />
              <MiniStat icon={<TbClock />} label="Pending" value={loading ? '…' : kpi.pending} accentBg={B.amber.bg} accentColor={B.amber.text} accentBorder={B.amber.border} trend={loading ? undefined : kpi.pendingTrend} />
              <MiniStat icon={<TbX />} label="Cancelled" value={loading ? '…' : kpi.cancelled} accentBg={B.red.bg} accentColor={B.red.text} accentBorder={B.red.border} trend={loading ? undefined : kpi.cancelledTrend} />
            </div>

            {/* Analytics + Activity feed */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 280px', gap: 16 }}>
              <Analytics orders={orders} products={products} />
              <ActivityFeed orders={orders} products={products} />
            </div>
          </div>
        )}

        {activeTab === 'orders' && <Orders token={token} />}
        {activeTab === 'products' && <ProductsList token={token} />}
        {activeTab === 'users' && <Users token={token} />}
        {activeTab === 'analytics' && <Analytics orders={orders} products={products} />}
      </div>

      {/* Responsive grid + spinner keyframes */}
      <style>{`
        @keyframes spin { from { transform: rotate(0deg) } to { transform: rotate(360deg) } }
        @media (max-width: 1100px) { .kpi-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 600px)  { .kpi-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  );
};

export default Dashboard;
