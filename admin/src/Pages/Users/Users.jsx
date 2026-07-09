import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { backendUrl } from '../../App';
import {
  TbSearch, TbX, TbDownload, TbUsers,
  TbChevronLeft, TbChevronRight, TbArrowUp, TbArrowDown,
  TbMail, TbPhone, TbMapPin, TbShoppingBag,
  TbCurrencyDollar, TbCalendar, TbClock,
} from 'react-icons/tb';

/* ════════════════════════════════════════════════════════════════
   D DOLLY LAMB — USERS / CUSTOMERS  |  Light Luxury Theme
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
  blue: { bg: '#EFF6FF', text: '#2563EB', border: '#BFDBFE', dot: '#3B82F6' },
  emerald: { bg: '#ECFDF5', text: '#065F46', border: '#A7F3D0', dot: '#10B981' },
  amber: { bg: '#FFFBEB', text: '#92400E', border: '#FDE68A', dot: '#F59E0B' },
  red: { bg: '#FEF2F2', text: '#991B1B', border: '#FECACA', dot: '#EF4444' },
  violet: { bg: '#F5F3FF', text: '#5B21B6', border: '#DDD6FE', dot: '#7C3AED' },
  teal: { bg: '#F0FDFA', text: '#134E4A', border: '#99F6E4', dot: '#14B8A6' },
};

/* ── 6 avatar palettes — distinct hues on light bg ── */
const AVATAR_PALETTES = [
  { bg: B.greenBg, text: B.green, border: B.greenBdr },
  { bg: B.blue.bg, text: B.blue.text, border: B.blue.border },
  { bg: B.goldBg, text: B.gold, border: B.goldBdr },
  { bg: '#FDF2F8', text: '#9D174D', border: '#FBCFE8' },
  { bg: B.violet.bg, text: B.violet.text, border: B.violet.border },
  { bg: B.teal.bg, text: B.teal.text, border: B.teal.border },
];

/* ─── Skeleton shimmer ─── */
const Skel = ({ w = '100%', h = 14, r = 6 }) => (
  <div style={{
    width: w, height: h, borderRadius: r,
    background: B.surface2,
    animation: 'uPulse 1.6s ease-in-out infinite',
  }} />
);

/* ─── Light search input ─── */
const SearchInput = ({ value, onChange, placeholder = 'Search…' }) => (
  <div style={{ position: 'relative', width: 240 }}>
    <TbSearch size={14} style={{
      position: 'absolute', left: 11, top: '50%',
      transform: 'translateY(-50%)', color: B.navyGhost, pointerEvents: 'none',
    }} />
    <input
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder={placeholder}
      style={{
        width: '100%', padding: '8px 32px 8px 34px', borderRadius: 9,
        background: B.surfaceCard, color: B.navy,
        border: `1px solid ${B.border}`,
        fontSize: 12.5, outline: 'none',
        transition: 'border-color .15s', boxSizing: 'border-box',
        fontFamily: 'inherit',
      }}
      onFocus={e => e.target.style.borderColor = B.greenBdr}
      onBlur={e => e.target.style.borderColor = B.border}
    />
    {value && (
      <button
        onClick={() => onChange('')}
        style={{
          position: 'absolute', right: 9, top: '50%', transform: 'translateY(-50%)',
          width: 16, height: 16, borderRadius: '50%', border: 'none',
          background: B.surface2, color: B.navyGhost,
          display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
        }}>
        <TbX size={9} />
      </button>
    )}
  </div>
);

/* ─── Light select ─── */
const LightSelect = ({ value, onChange, options, minWidth = 160 }) => (
  <select
    value={value}
    onChange={e => onChange(e.target.value)}
    style={{
      padding: '8px 30px 8px 12px', borderRadius: 9, fontSize: 12,
      fontWeight: 600, background: B.surfaceCard, color: B.navyMid,
      border: `1px solid ${B.border}`, outline: 'none', cursor: 'pointer',
      minWidth, appearance: 'none',
      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 24 24' fill='none' stroke='%238FA0AD' stroke-width='2.5'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`,
      backgroundRepeat: 'no-repeat', backgroundPosition: 'right 10px center',
      transition: 'border-color .15s', fontFamily: 'inherit',
      letterSpacing: '0.01em',
    }}
    onFocus={e => e.target.style.borderColor = B.greenBdr}
    onBlur={e => e.target.style.borderColor = B.border}>
    {options.map(([v, l]) =>
      <option key={v} value={v}>{l}</option>
    )}
  </select>
);

/* ─── Green primary button — matches sidebar CTA ─── */
const GreenBtn = ({ children, onClick }) => (
  <button
    onClick={onClick}
    style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      padding: '8px 16px', borderRadius: 9,
      background: B.green,
      color: '#FFFFFF', border: 'none', fontSize: 12, fontWeight: 700,
      cursor: 'pointer', transition: 'background .15s',
      whiteSpace: 'nowrap', letterSpacing: '0.04em', textTransform: 'uppercase',
    }}
    onMouseEnter={e => e.currentTarget.style.background = B.greenLight}
    onMouseLeave={e => e.currentTarget.style.background = B.green}>
    {children}
  </button>
);

/* ── Status pill ── */
const Pill = ({ palette, children }) => (
  <span style={{
    display: 'inline-flex', alignItems: 'center', gap: 5,
    padding: '4px 10px', borderRadius: 99, fontSize: 11.5, fontWeight: 700,
    background: palette.bg, color: palette.text, border: `1px solid ${palette.border}`,
    letterSpacing: '0.01em',
  }}>
    {children}
  </span>
);

/* ════════════════════════════════════════════════════════════════
   MAIN COMPONENT
════════════════════════════════════════════════════════════════ */
const Users = ({ token }) => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState('spent');
  const [sortDir, setSortDir] = useState('desc');
  const [page, setPage] = useState(1);
  const PER_PAGE = 10;

  /* ── Fetch orders → build user profiles ── */
  useEffect(() => {
    if (!token) return;
    setLoading(true);
    axios.post(backendUrl + '/api/order/list', {}, { headers: { token } })
      .then(res => {
        if (res.data.success) setOrders(res.data.orders || []);
        else toast.error(res.data.message);
      })
      .catch(e => toast.error(e?.message || 'Failed to load users'))
      .finally(() => setLoading(false));
  }, [token]);

  /* ── Build one row per unique email ── */
  const users = useMemo(() => {
    const map = {};
    orders.forEach(o => {
      const email = (o.address?.email || '').toLowerCase().trim();
      if (!email) return;
      if (!map[email]) map[email] = {
        email,
        name: `${o.address?.firstName || ''} ${o.address?.lastName || ''}`.trim() || email,
        phone: o.address?.phone || '—',
        city: o.address?.city || '—',
        country: o.address?.country || '—',
        orders: 0, spent: 0, paid: 0,
        lastOrder: null, firstOrder: null,
      };
      const u = map[email];
      const amt = Number(o.finalAmount) || Number(o.amount) || 0;
      u.orders += 1; u.spent += amt;
      if (o.payment) u.paid += amt;
      const ts = o.date ? new Date(o.date) : null;
      if (ts) {
        if (!u.lastOrder || ts > u.lastOrder) u.lastOrder = ts;
        if (!u.firstOrder || ts < u.firstOrder) u.firstOrder = ts;
      }
    });
    return Object.values(map);
  }, [orders]);

  /* ── Search + sort ── */
  const filtered = useMemo(() => {
    let r = [...users];
    if (search.trim()) {
      const q = search.toLowerCase();
      r = r.filter(u =>
        u.name.toLowerCase().includes(q) ||
        u.email.toLowerCase().includes(q) ||
        u.phone.includes(q) ||
        u.city.toLowerCase().includes(q)
      );
    }
    r.sort((a, b) => {
      if (sortBy === 'name')
        return sortDir === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
      const av = sortBy === 'spent' ? a.spent
        : sortBy === 'orders' ? a.orders
          : sortBy === 'recent' ? (a.lastOrder?.getTime() || 0)
            : (a.firstOrder?.getTime() || 0);
      const bv = sortBy === 'spent' ? b.spent
        : sortBy === 'orders' ? b.orders
          : sortBy === 'recent' ? (b.lastOrder?.getTime() || 0)
            : (b.firstOrder?.getTime() || 0);
      return sortDir === 'asc' ? av - bv : bv - av;
    });
    return r;
  }, [users, search, sortBy, sortDir]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const paginated = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const handleSort = col => {
    if (sortBy === col) setSortDir(d => d === 'asc' ? 'desc' : 'asc');
    else { setSortBy(col); setSortDir('desc'); }
    setPage(1);
  };

  /* ── Formatters ── */
  const fmtDate = d => d
    ? d.toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' }) : '—';
  const fmtRel = d => {
    if (!d) return '—';
    const days = Math.floor((Date.now() - d.getTime()) / 86400000);
    if (days === 0) return 'Today';
    if (days === 1) return 'Yesterday';
    if (days < 30) return `${days}d ago`;
    if (days < 365) return `${Math.floor(days / 30)}mo ago`;
    return `${Math.floor(days / 365)}y ago`;
  };
  const initials = name =>
    name.split(' ').map(n => n[0] || '').join('').slice(0, 2).toUpperCase() || '?';

  /* ── Export CSV ── */
  const exportCSV = () => {
    const rows = [['Name', 'Email', 'Phone', 'City', 'Country', 'Orders', 'Total Spent', 'Paid Amount', 'Last Order', 'First Order']];
    filtered.forEach(u => rows.push([
      u.name, u.email, u.phone, u.city, u.country,
      u.orders, u.spent.toFixed(0), u.paid.toFixed(0),
      fmtDate(u.lastOrder), fmtDate(u.firstOrder),
    ]));
    const csv = rows.map(r => r.map(c => `"${String(c).replace(/"/g, '""')}"`).join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = `customers_${new Date().toISOString().slice(0, 10)}.csv`; a.click();
    URL.revokeObjectURL(url); toast.success('Customers exported!');
  };

  /* ── Summary KPIs ── */
  const totalSpent = users.reduce((s, u) => s + u.spent, 0);
  const totalPaid = users.reduce((s, u) => s + u.paid, 0);
  const totalOrders = users.reduce((s, u) => s + u.orders, 0);
  const avgSpend = users.length ? totalSpent / users.length : 0;

  const SUMMARY = [
    {
      label: 'Total Customers', value: loading ? '…' : users.length.toLocaleString(),
      pal: B.blue, icon: <TbUsers size={16} />
    },
    {
      label: 'Total Revenue', value: loading ? '…' : `$${totalSpent.toLocaleString('en-US', { maximumFractionDigits: 0 })}`,
      pal: { bg: B.goldBg, text: B.gold, border: B.goldBdr, dot: B.gold }, icon: <TbCurrencyDollar size={16} />
    },
    {
      label: 'Paid Amount', value: loading ? '…' : `$${totalPaid.toLocaleString('en-US', { maximumFractionDigits: 0 })}`,
      pal: B.emerald, icon: <TbCurrencyDollar size={16} />
    },
    {
      label: 'Total Orders', value: loading ? '…' : totalOrders.toLocaleString(),
      pal: B.violet, icon: <TbShoppingBag size={16} />
    },
    {
      label: 'Avg. Spend', value: loading ? '…' : `$${avgSpend.toLocaleString('en-US', { maximumFractionDigits: 0 })}`,
      pal: B.amber, icon: <TbCurrencyDollar size={16} />
    },
  ];

  /* ── Sortable TH ── */
  const SortTh = ({ col, label, icon }) => {
    const active = sortBy === col;
    return (
      <th
        onClick={() => handleSort(col)}
        style={{
          padding: '11px 18px', textAlign: 'left', fontWeight: 700, fontSize: 10.5,
          textTransform: 'uppercase', letterSpacing: '.7px', whiteSpace: 'nowrap',
          cursor: 'pointer', userSelect: 'none', transition: 'color .15s',
          color: active ? B.green : B.navy,
          borderBottom: `1px solid ${B.border}`,
          background: B.surface,
        }}
        onMouseEnter={e => { if (!active) e.currentTarget.style.color = B.navyMid; }}
        onMouseLeave={e => { if (!active) e.currentTarget.style.color = B.navyGhost; }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}>
          {icon && <span style={{ opacity: .55 }}>{icon}</span>}
          {label}
          <span style={{ opacity: active ? 1 : 0, color: B.green, transition: 'opacity .15s' }}>
            {sortDir === 'asc' ? <TbArrowUp size={11} /> : <TbArrowDown size={11} />}
          </span>
        </span>
      </th>
    );
  };

  /* ── Static TH ── */
  const StaticTh = ({ label, icon }) => (
    <th style={{
      padding: '11px 18px', textAlign: 'left', fontWeight: 700, fontSize: 10.5,
      textTransform: 'uppercase', letterSpacing: '.7px',
      background: B.surface, borderBottom: `1px solid ${B.border}`, whiteSpace: 'nowrap',
    }}
      className='text-gray-500'>
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}>
        {icon && <span style={{ opacity: .55 }}>{icon}</span>}
        {label}
      </span>
    </th>
  );

  /* ════════════════════════════════════════════════════
     RENDER
  ════════════════════════════════════════════════════ */
  return (
    <div style={{
      fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
      WebkitFontSmoothing: 'antialiased',
      background: B.bg,
    }}>
      <style>{`
        @keyframes uPulse  { 0%,100% { opacity:1 } 50% { opacity:.4 } }
        @keyframes uFadeUp { from { opacity:0; transform:translateY(8px) } to { opacity:1; transform:translateY(0) } }
        .u-row:hover td { background: ${B.greenBg} !important; }
        .u-pg-btn:hover:not(:disabled) {
          background: ${B.greenBg} !important;
          border-color: ${B.greenBdr} !important;
          color: ${B.green} !important;
        }
      `}</style>

      {/* ── SUMMARY KPI CARDS ── */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 12, marginBottom: 18 }}>
        {SUMMARY.map((s, i) => (
          <div
            key={i}
            style={{
              background: B.surfaceCard,
              border: `1px solid ${B.border}`,
              borderRadius: 12,
              padding: '14px 16px',
              boxShadow: '0 1px 4px rgba(28,43,58,0.06)',
              animation: `uFadeUp .35s ease ${i * .06}s both`,
              transition: 'box-shadow .2s, border-color .2s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(28,43,58,0.1)';
              e.currentTarget.style.borderColor = B.greenBdr;
            }}
            onMouseLeave={e => {
              e.currentTarget.style.boxShadow = '0 1px 4px rgba(28,43,58,0.06)';
              e.currentTarget.style.borderColor = B.border;
            }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
              <div style={{
                width: 32, height: 32, borderRadius: 9,
                background: s.pal.bg, color: s.pal.text,
                border: `1px solid ${s.pal.border}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                {s.icon}
              </div>
              <span style={{
                color: B.navyGhost, fontSize: 10.5, fontWeight: 700,
                textTransform: 'uppercase', letterSpacing: '.6px',
              }}>{s.label}</span>
            </div>
            <div style={{
              color: B.navy, fontSize: 22, fontWeight: 800,
              letterSpacing: -.5, fontFamily: 'Georgia, serif',
            }}>{s.value}</div>
          </div>
        ))}
      </div>

      {/* ── MAIN CARD ── */}
      <div style={{
        background: B.surfaceCard,
        border: `1px solid ${B.border}`,
        borderRadius: 14, overflow: 'hidden',
        boxShadow: '0 1px 4px rgba(28,43,58,0.06)',
        animation: 'uFadeUp .4s ease .1s both',
      }}>

        {/* Card Header */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '16px 22px', borderBottom: `1px solid ${B.border}`,
          background: B.surface, flexWrap: 'wrap', gap: 12,
        }}>
          <div>
            <h2 style={{
              color: B.navy, fontSize: 14, fontWeight: 800, margin: 0,
              display: 'flex', alignItems: 'center', gap: 8,
              fontFamily: 'Georgia, serif',
            }}>
              <TbUsers size={17} style={{ color: B.green }} />
              Customers
            </h2>
            <p style={{ color: B.navyGhost, fontSize: 11, marginTop: 3, letterSpacing: '0.02em' }}>
              {loading
                ? 'Loading…'
                : `${filtered.length} unique customers from ${orders.length} orders`}
            </p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
            <SearchInput
              value={search}
              onChange={v => { setSearch(v); setPage(1); }}
              placeholder="Search name, email, city…"
            />
            <LightSelect
              value={`${sortBy}-${sortDir}`}
              onChange={v => { const [s, d] = v.split('-'); setSortBy(s); setSortDir(d); setPage(1); }}
              options={[
                ['spent-desc', 'Top Spenders'],
                ['orders-desc', 'Most Orders'],
                ['recent-desc', 'Most Recent'],
                ['joined-asc', 'Earliest Joined'],
                ['name-asc', 'Name A–Z'],
              ]}
            />
            <GreenBtn onClick={exportCSV}>
              <TbDownload size={13} /> Export CSV
            </GreenBtn>
          </div>
        </div>

        {/* ── TABLE ── */}
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>

            {/* Head */}
            <thead>
              <tr>
                <SortTh col="name" label="Customer" icon={<TbUsers size={14} />} />
                <StaticTh label="Contact" icon={<TbMail size={14} />} />
                <SortTh col="orders" label="Orders" icon={<TbShoppingBag size={14} />} />
                <SortTh col="spent" label="Total Spent" icon={<TbCurrencyDollar size={14} />} />
                <StaticTh label="Paid" icon={<TbCurrencyDollar size={14} />} />
                <SortTh col="recent" label="Last Order" icon={<TbClock size={14} />} />
                <SortTh col="joined" label="Customer Since" icon={<TbCalendar size={14} />} />
              </tr>
            </thead>

            {/* Body */}
            <tbody>

              {/* Skeleton rows */}
              {loading && Array(6).fill(0).map((_, i) => (
                <tr key={i} style={{ borderBottom: `1px solid ${B.border}` }}>
                  {[140, 180, 70, 80, 70, 90, 100].map((w, j) => (
                    <td key={j} style={{ padding: '14px 18px' }}>
                      <Skel w={w} h={j === 0 ? 36 : 13} r={j === 0 ? 10 : 5} />
                    </td>
                  ))}
                </tr>
              ))}

              {/* Empty state */}
              {!loading && paginated.length === 0 && (
                <tr>
                  <td colSpan={7} style={{ padding: '64px 24px', textAlign: 'center' }}>
                    <TbUsers size={36} style={{ color: B.navyGhost, margin: '0 auto 12px', display: 'block' }} />
                    <p style={{ color: B.navySoft, fontSize: 14 }}>
                      {search ? 'No customers match your search' : 'No customer data yet'}
                    </p>
                    {search && (
                      <button
                        onClick={() => setSearch('')}
                        style={{
                          marginTop: 8, color: B.green, fontSize: 12.5,
                          background: 'none', border: 'none',
                          cursor: 'pointer', textDecoration: 'underline',
                        }}>
                        Clear search
                      </button>
                    )}
                  </td>
                </tr>
              )}

              {/* Data rows */}
              {!loading && paginated.map((u, i) => {
                const pal = AVATAR_PALETTES[((page - 1) * PER_PAGE + i) % AVATAR_PALETTES.length];
                const paidPct = u.spent > 0 ? u.paid / u.spent : 1;
                const isFullPaid = u.paid >= u.spent;
                const hasUnpaid = u.paid > 0 && u.paid < u.spent;

                return (
                  <tr
                    key={u.email}
                    className="u-row"
                    style={{ borderBottom: `1px solid ${B.border}`, transition: 'background .12s', cursor: 'default' }}>

                    {/* Customer */}
                    <td style={{ padding: '13px 18px', minWidth: 200 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
                        {/* Avatar */}
                        <div style={{
                          width: 38, height: 38, borderRadius: 10, flexShrink: 0,
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          fontWeight: 800, fontSize: 13,
                          background: pal.bg, color: pal.text,
                          border: `1.5px solid ${pal.border}`,
                          fontFamily: 'Georgia, serif',
                          whiteSpace: 'nowrap',
                        }}>
                          {initials(u.name)}
                        </div>
                        <div>
                          <p style={{ color: B.navy, fontWeight: 700, fontSize: 13, lineHeight: 1.2 }}>{u.name}</p>
                          <p style={{
                            color: B.navyGhost, fontSize: 11.5, marginTop: 2,
                            display: 'flex', alignItems: 'center', gap: 4,
                          }}>
                            <TbMapPin size={14} />
                            {u.city}{u.country && u.country !== u.city ? `, ${u.country}` : ''}
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* Contact */}
                    <td style={{ padding: '13px 18px' }}>
                      <p style={{
                        display: 'flex', alignItems: 'center', gap: 2,
                        color: B.navyMid, fontSize: 12.5,
                        overflow: 'hidden', textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap', maxWidth: 190,
                      }}>
                        <TbMail size={14} style={{ color: B.navyGhost, marginRight: 4, verticalAlign: 'middle' }} />
                        {u.email}
                      </p>
                      <p style={{
                        color: B.navyGhost, fontSize: 11.5, marginTop: 3,
                        display: 'flex', alignItems: 'center', gap: 4,
                      }}>
                        <TbPhone size={14} />{u.phone}
                      </p>
                    </td>

                    {/* Orders */}
                    <td style={{ padding: '13px 18px' }}>
                      <Pill palette={B.blue}>
                        {u.orders} order{u.orders !== 1 ? 's' : ''}
                      </Pill>
                    </td>

                    {/* Total Spent */}
                    <td style={{ padding: '13px 18px' }}>
                      <span style={{
                        color: B.green, fontSize: 15, fontWeight: 800,
                        letterSpacing: -.3, fontFamily: 'Georgia, serif',
                      }}>
                        ${u.spent.toLocaleString('en-US')}
                      </span>
                    </td>

                    {/* Paid */}
                    <td style={{ padding: '13px 18px' }}>
                      <span style={{
                        fontSize: 13, fontWeight: 700,
                        color: isFullPaid ? B.emerald.text : hasUnpaid ? B.amber.text : B.red.text,
                      }}>
                        ${u.paid.toLocaleString('en-US')}
                      </span>
                      {!isFullPaid && u.spent > 0 && (
                        <div style={{ marginTop: 5, width: 80 }}>
                          <div style={{
                            height: 3, borderRadius: 4,
                            background: B.surface2, overflow: 'hidden',
                          }}>
                            <div style={{
                              height: '100%', borderRadius: 4,
                              width: `${Math.round(paidPct * 100)}%`,
                              background: hasUnpaid ? B.amber.dot : B.red.dot,
                              transition: 'width .4s',
                            }} />
                          </div>
                          <p style={{ color: B.red.text, fontSize: 10, marginTop: 3, fontWeight: 600 }}>
                            ${(u.spent - u.paid).toLocaleString('en-US')} unpaid
                          </p>
                        </div>
                      )}
                    </td>

                    {/* Last Order */}
                    <td style={{ padding: '13px 18px', whiteSpace: 'nowrap' }}>
                      <p style={{ color: B.navy, fontSize: 12.5, fontWeight: 600 }}>{fmtRel(u.lastOrder)}</p>
                      <p style={{ color: B.navyGhost, fontSize: 11, marginTop: 2 }}>{fmtDate(u.lastOrder)}</p>
                    </td>

                    {/* Customer Since */}
                    <td style={{ padding: '13px 18px', whiteSpace: 'nowrap' }}>
                      <p style={{ color: B.navySoft, fontSize: 12.5 }}>{fmtDate(u.firstOrder)}</p>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* ── PAGINATION ── */}
        {!loading && totalPages > 1 && (
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '12px 22px', borderTop: `1px solid ${B.border}`,
            background: B.surface, flexWrap: 'wrap', gap: 10,
          }}>
            <p style={{ color: B.navyGhost, fontSize: 12 }}>
              Showing{' '}
              <strong style={{ color: B.navy }}>{(page - 1) * PER_PAGE + 1}–{Math.min(page * PER_PAGE, filtered.length)}</strong>
              {' '}of{' '}
              <strong style={{ color: B.navy }}>{filtered.length}</strong> customers
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>

              {/* Prev */}
              <button
                onClick={() => setPage(p => Math.max(1, p - 1))}
                disabled={page === 1}
                className="u-pg-btn"
                style={{
                  width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  borderRadius: 8, border: `1px solid ${B.border}`, background: B.surfaceCard,
                  color: B.navyGhost, cursor: 'pointer', transition: 'all .15s',
                  opacity: page === 1 ? .4 : 1,
                }}>
                <TbChevronLeft size={14} />
              </button>

              {/* Page numbers */}
              {Array.from({ length: totalPages }, (_, i) => i + 1)
                .filter(p => p === 1 || p === totalPages || Math.abs(p - page) <= 1)
                .reduce((acc, p, i, arr) => {
                  if (i > 0 && arr[i - 1] !== p - 1) acc.push('…');
                  acc.push(p); return acc;
                }, [])
                .map((p, i) => p === '…'
                  ? <span key={`e${i}`} style={{ color: B.navyGhost, padding: '0 4px', fontSize: 13 }}>…</span>
                  : <button
                    key={p}
                    onClick={() => setPage(p)}
                    className="u-pg-btn"
                    style={{
                      width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center',
                      borderRadius: 8, fontSize: 12.5, fontWeight: 700, cursor: 'pointer', transition: 'all .15s',
                      border: page === p ? `1px solid ${B.green}` : `1px solid ${B.border}`,
                      background: page === p ? B.green : B.surfaceCard,
                      color: page === p ? '#FFFFFF' : B.navyGhost,
                    }}>
                    {p}
                  </button>
                )}

              {/* Next */}
              <button
                onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                className="u-pg-btn"
                style={{
                  width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  borderRadius: 8, border: `1px solid ${B.border}`, background: B.surfaceCard,
                  color: B.navyGhost, cursor: 'pointer', transition: 'all .15s',
                  opacity: page === totalPages ? .4 : 1,
                }}>
                <TbChevronRight size={14} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Users;