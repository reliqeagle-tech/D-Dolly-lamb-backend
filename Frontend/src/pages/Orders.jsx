import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import AccountSidebar from "../components/AccountSidebar";

/* ── Color tokens — matched to Footer / MyAccount ── */
const C = {
  bgLight: "#FFFFFF",
  bgSoft: "#F8F7FF",
  bgBottom: "#F0EEFF",
  bgCard: "#F4F2FF",
  indigo: "#5B5BD6",
  indigoLt: "#818CF8",
  indigoDk: "#4338CA",
  textNavy: "#1E1B4B",
  textMuted: "#4B5563",
  textFaint: "#6B7280",
  borderHi: "rgba(91,91,214,0.20)",
  borderLo: "rgba(91,91,214,0.10)",
  borderMid: "rgba(91,91,214,0.15)",
  gold: "#C8924A",
  goldDk: "#8A5E2D",
};

/* ── Helpers ── */
const safe = (val) => {
  if (val === null || val === undefined) return "N/A";
  if (typeof val === "object") return Array.isArray(val) ? val.join(", ") : JSON.stringify(val);
  return String(val);
};
const getImage = (image) => {
  if (!image) return "";
  if (typeof image === "string") return image;
  if (Array.isArray(image)) return image[0] || "";
  if (typeof image === "object" && image.url) return image.url;
  return "";
};

/* ── Icons ── */
const IconBox = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
      stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    <path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);
const IconChevron = ({ open }) => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
    style={{ transition: "transform 0.3s", transform: open ? "rotate(180deg)" : "rotate(0deg)" }}>
    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const IconCalendar = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.4" />
    <path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);
const IconTag = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"
      stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    <circle cx="7" cy="7" r="1.5" fill="currentColor" />
  </svg>
);
const IconCreditCard = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
    <rect x="1" y="4" width="22" height="16" rx="2" stroke="currentColor" strokeWidth="1.4" />
    <path d="M1 10h22" stroke="currentColor" strokeWidth="1.4" />
  </svg>
);
const IconMapPin = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="1.4" />
    <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.4" />
  </svg>
);
const IconUser = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.4" />
    <path d="M4 20c0-4 3.582-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);
const IconEmpty = () => (
  <svg width="52" height="52" viewBox="0 0 24 24" fill="none">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
      stroke="rgba(91,91,214,0.25)" strokeWidth="0.8" strokeLinejoin="round" />
  </svg>
);

/* ── Status config — indigo palette ── */
const STATUS_CFG = {
  "Order Placed": { color: C.indigo, bg: "rgba(91,91,214,0.10)", border: C.borderHi, dot: C.indigo, step: 1 },
  "Packing": { color: "#7C3AED", bg: "rgba(124,58,237,0.10)", border: "rgba(124,58,237,0.25)", dot: "#7C3AED", step: 2 },
  "Shipped": { color: "#0284C7", bg: "rgba(2,132,199,0.10)", border: "rgba(2,132,199,0.25)", dot: "#0284C7", step: 3 },
  "Out for delivery": { color: "#0891B2", bg: "rgba(8,145,178,0.10)", border: "rgba(8,145,178,0.25)", dot: "#0891B2", step: 4 },
  "Delivered": { color: "#059669", bg: "rgba(5,150,105,0.10)", border: "rgba(5,150,105,0.25)", dot: "#059669", step: 5 },
};
const STATUS_STEPS = ["Order Placed", "Packing", "Shipped", "Out for delivery", "Delivered"];

const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');

  @keyframes odUp  { from{opacity:0;transform:translateY(14px)} to{opacity:1;transform:translateY(0)} }
  @keyframes odIn  { from{opacity:0;transform:translateY(18px) scale(0.97)} to{opacity:1;transform:translateY(0) scale(1)} }
  @keyframes shimmerIndigo {
    0%   { background-position:-200% center; }
    100% { background-position: 200% center; }
  }
  @keyframes spin { to { transform:rotate(360deg); } }

  .od-page { animation: odUp 0.45s cubic-bezier(0.16,1,0.3,1) both; }

  /* Shimmer bar */
  .od-shimmer {
    background: linear-gradient(90deg,
      transparent 0%, rgba(91,91,214,0.25) 15%,
      #5B5BD6 40%, #818CF8 50%, #5B5BD6 60%,
      rgba(91,91,214,0.25) 85%, transparent 100%);
    background-size: 200% auto;
    animation: shimmerIndigo 3.5s linear infinite;
  }

  /* Order card */
  .od-card {
    background: ${C.bgLight};
    border: 1px solid ${C.borderHi};
    border-radius: 6px;
    overflow: hidden;
    box-shadow: 0 2px 12px rgba(91,91,214,0.06);
    transition: border-color 0.28s, box-shadow 0.28s;
    animation: odIn 0.45s cubic-bezier(0.16,1,0.3,1) both;
  }
  .od-card:hover {
    border-color: rgba(91,91,214,0.40);
    box-shadow: 0 8px 32px rgba(91,91,214,0.12);
  }

  /* Card top accent */
  .od-card-accent {
    height: 2px;
    background: linear-gradient(to right, transparent, ${C.indigoDk} 35%, ${C.indigoLt} 50%, ${C.indigoDk} 65%, transparent);
    opacity: 0.65;
  }

  /* Toggle button */
  .od-toggle {
    width: 100%; display: flex; align-items: center; justify-content: space-between;
    padding: 16px 20px; background: none; border: none; cursor: pointer;
    text-align: left; transition: background 0.2s;
  }
  .od-toggle:hover { background: rgba(91,91,214,0.03); }

  /* Meta pill */
  .od-pill {
    display: inline-flex; align-items: center; gap: 5px;
    padding: 4px 10px; border-radius: 20px;
    font-size: 9px; letter-spacing: 0.14em;
    font-family: Montserrat, sans-serif; font-weight: 600;
    white-space: nowrap;
  }

  /* Progress */
  .od-step-dot {
    width: 28px; height: 28px; border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0; font-size: 9px; font-weight: 700;
    font-family: Montserrat, sans-serif;
    transition: all 0.3s;
  }
  .od-step-line {
    flex: 1; height: 2px;
    background: ${C.borderLo};
    transition: background 0.3s;
  }
  .od-step-line.done {
    background: linear-gradient(to right, ${C.indigoDk}, ${C.indigoLt});
  }

  /* Product row */
  .od-product-row {
    display: flex; align-items: center; gap: 14px;
    padding: 14px 0;
    border-bottom: 1px solid ${C.borderLo};
  }
  .od-product-row:last-child { border-bottom: none; }

  /* Info grid */
  .od-info-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: 10px;
  }
  .od-info-cell {
    display: flex; flex-direction: column; gap: 3px;
    padding: 10px 14px;
    background: ${C.bgSoft};
    border: 1px solid ${C.borderLo};
    border-radius: 4px;
  }

  /* Detail expand */
  .od-detail {
    overflow: hidden;
    transition: max-height 0.38s cubic-bezier(0.16,1,0.3,1), opacity 0.28s;
  }

  /* Copy btn */
  .od-copy-btn {
    background: none; border: none; cursor: pointer;
    color: ${C.indigoLt}; font-size: 9px;
    font-family: Montserrat, sans-serif; letter-spacing: 0.1em;
    padding: 0; transition: color 0.2s;
  }
  .od-copy-btn:hover { color: ${C.indigo}; }

  /* Filter btn */
  .od-filter-btn {
    padding: 6px 13px; border-radius: 20px; cursor: pointer;
    font-size: 9px; letter-spacing: 0.14em;
    font-family: Montserrat, sans-serif; font-weight: 600;
    transition: all 0.2s; border: 1px solid ${C.borderHi};
    background: transparent; color: ${C.textFaint};
  }
  .od-filter-btn:hover { border-color: ${C.indigo}; color: ${C.indigo}; }
  .od-filter-btn.active-filter {
    background: rgba(91,91,214,0.10);
    border-color: ${C.indigo};
    color: ${C.indigo};
  }

  /* Track btn */
  .od-track-btn {
    padding: 6px 14px; border-radius: 4px; cursor: pointer;
    border: 1px solid ${C.borderHi};
    background: transparent; color: ${C.indigoLt};
    font-size: 8.5px; letter-spacing: 0.18em;
    font-family: Montserrat, sans-serif; font-weight: 600;
    transition: all 0.2s; white-space: nowrap;
  }
  .od-track-btn:hover {
    border-color: ${C.indigo}; color: ${C.indigo};
    background: rgba(91,91,214,0.06);
  }

  .od-spinner {
    width: 26px; height: 26px;
    border: 2px solid ${C.borderHi};
    border-top-color: ${C.indigo}; border-radius: 50%;
    animation: spin 0.8s linear infinite;
    margin: 0 auto 14px;
  }
`;

/* ── Copy hook ── */
const useCopy = () => {
  const [copied, setCopied] = useState(null);
  const copy = (text, key) => {
    navigator.clipboard?.writeText(text);
    setCopied(key);
    setTimeout(() => setCopied(null), 1800);
  };
  return { copied, copy };
};

/* ── Status badge ── */
const StatusBadge = ({ status }) => {
  const cfg = STATUS_CFG[status] || { color: C.textFaint, bg: "rgba(107,114,128,0.10)", border: C.borderLo, dot: C.textFaint };
  return (
    <div className="od-pill" style={{ background: cfg.bg, border: `1px solid ${cfg.border}`, color: cfg.color }}>
      <span style={{ width: 6, height: 6, borderRadius: "50%", background: cfg.dot, flexShrink: 0, display: "inline-block" }} />
      {status || "Pending"}
    </div>
  );
};

/* ── Progress bar ── */
const ProgressBar = ({ status }) => {
  const cur = STATUS_CFG[status]?.step || 0;
  return (
    <div style={{ padding: "18px 20px 20px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 0, width: "100%" }}>
        {STATUS_STEPS.map((s, i) => {
          const done = cur >= i + 1;
          const current = cur === i + 1;
          return (
            <React.Fragment key={s}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 5, flexShrink: 0 }}>
                <div className="od-step-dot" style={{
                  background: done ? `linear-gradient(135deg, ${C.indigoDk}, ${C.indigo})` : C.bgSoft,
                  border: current ? `2px solid ${C.indigoLt}` : done ? "none" : `1px solid ${C.borderHi}`,
                  color: done ? "#FFFFFF" : C.textFaint,
                  boxShadow: current ? `0 0 12px rgba(91,91,214,0.30)` : "none",
                }}>
                  {done ? "✓" : i + 1}
                </div>
              </div>
              {i < STATUS_STEPS.length - 1 && (
                <div className={`od-step-line ${cur > i + 1 ? "done" : ""}`} />
              )}
            </React.Fragment>
          );
        })}
      </div>
      <p style={{
        fontSize: 9, color: C.indigo, fontFamily: "Montserrat,sans-serif",
        letterSpacing: "0.22em", marginTop: 12, textAlign: "center", fontWeight: 600,
      }}>
        {status?.toUpperCase() || "PENDING"}
      </p>
    </div>
  );
};

/* ── Info cell label ── */
const CellLabel = ({ icon, text }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 5, marginBottom: 2, color: C.indigo }}>
    {icon}
    <span style={{ fontSize: 7.5, color: C.indigo, fontFamily: "Montserrat,sans-serif", letterSpacing: "0.24em", fontWeight: 700 }}>
      {text}
    </span>
  </div>
);

/* ── Single order card ── */
const OrderCard = ({ item, index, currency, loadOrderData }) => {
  const [open, setOpen] = useState(false);
  const { copied, copy } = useCopy();
  const imgSrc = getImage(item.image);

  return (
    <div className="od-card" style={{ animationDelay: `${index * 0.06}s` }}>
      <div className="od-card-accent" />

      {/* Toggle header */}
      <button className="od-toggle" onClick={() => setOpen(o => !o)}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, flex: 1, flexWrap: "wrap", minWidth: 0 }}>

          {/* Thumbnail */}
          <div style={{
            width: 46, height: 46, borderRadius: 6, overflow: "hidden",
            background: C.bgSoft, flexShrink: 0, border: `1px solid ${C.borderHi}`,
          }}>
            {imgSrc
              ? <img src={imgSrc} alt={item.name} style={{ width: "100%", height: "100%", objectFit: "contain", padding: 3 }} />
              : <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", color: C.indigoLt }}>
                <IconBox />
              </div>
            }
          </div>

          {/* Name + meta */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <p style={{
              fontSize: 13, color: C.textNavy, fontFamily: "Georgia,serif",
              lineHeight: 1.3, marginBottom: 3, fontWeight: 600,
              overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: 260,
            }}>
              {safe(item.name)}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
              <span style={{ fontSize: 9, color: C.indigo, fontFamily: "Montserrat,sans-serif", letterSpacing: "0.1em", fontWeight: 600 }}>
                #{safe(item.orderId).slice(-10).toUpperCase()}
              </span>
              <span style={{ width: 3, height: 3, borderRadius: "50%", background: C.borderHi }} />
              <div style={{ display: "flex", alignItems: "center", gap: 4, color: C.textFaint }}>
                <IconCalendar />
                <span style={{ fontSize: 8, fontFamily: "Montserrat,sans-serif", letterSpacing: "0.08em" }}>
                  {new Date(item.date).toDateString()}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: status + price + actions */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, flexShrink: 0 }}>
          <StatusBadge status={item.status} />
          <div style={{ textAlign: "right" }}>
            <p style={{ fontSize: 15, color: C.textNavy, fontFamily: "Georgia,serif", fontWeight: 700, lineHeight: 1 }}>
              {currency}{item.subtotal.toFixed(2)}
            </p>
            <p style={{ fontSize: 8, color: C.textFaint, fontFamily: "Montserrat,sans-serif", letterSpacing: "0.1em", marginTop: 2 }}>
              QTY {item.quantity ?? 1}
            </p>
          </div>
          <button
            type="button"
            className="od-track-btn"
            onClick={(e) => { e.stopPropagation(); loadOrderData?.(); }}
          >
            TRACK
          </button>
          <div style={{ color: C.indigoLt }}>
            <IconChevron open={open} />
          </div>
        </div>
      </button>

      {/* Expandable detail */}
      <div className="od-detail" style={{ maxHeight: open ? 900 : 0, opacity: open ? 1 : 0 }}>
        <div style={{ borderTop: `1px solid ${C.borderLo}`, padding: "0 20px 22px" }}>

          <ProgressBar status={item.status} />

          <div style={{ height: 1, background: `linear-gradient(to right,transparent,${C.borderMid},transparent)`, margin: "4px 0 18px" }} />

          {/* Product detail */}
          <div style={{ display: "flex", gap: 14, marginBottom: 18, flexWrap: "wrap" }}>
            <div style={{
              width: 80, height: 80, borderRadius: 6, overflow: "hidden",
              background: C.bgSoft, flexShrink: 0, border: `1px solid ${C.borderHi}`,
            }}>
              {imgSrc
                ? <img src={imgSrc} alt={item.name} style={{ width: "100%", height: "100%", objectFit: "contain", padding: 6 }} />
                : <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", color: C.indigoLt }}>
                  <IconBox />
                </div>
              }
            </div>

            <div style={{ flex: 1, minWidth: 180 }}>
              <p style={{ fontSize: 8, color: C.indigoLt, letterSpacing: "0.26em", fontFamily: "Montserrat,sans-serif", fontWeight: 600, marginBottom: 4 }}>
                LAMBSKIN LEATHER
              </p>
              <p style={{ fontSize: 15, color: C.textNavy, fontFamily: "Georgia,serif", fontWeight: 600, lineHeight: 1.4, marginBottom: 8 }}>
                {safe(item.name)}
              </p>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {item.size && (
                  <span style={{
                    fontSize: 9, color: C.indigo, fontFamily: "Montserrat,sans-serif",
                    letterSpacing: "0.16em", padding: "3px 10px",
                    background: "rgba(91,91,214,0.08)", border: `1px solid ${C.borderHi}`,
                    borderRadius: 4, fontWeight: 600,
                  }}>
                    SIZE: {safe(item.size)}
                  </span>
                )}
                <span style={{
                  fontSize: 9, color: C.textMuted, fontFamily: "Montserrat,sans-serif",
                  letterSpacing: "0.14em", padding: "3px 10px",
                  background: C.bgSoft, border: `1px solid ${C.borderLo}`,
                  borderRadius: 4,
                }}>
                  QTY: {item.quantity ?? 1}
                </span>
                {item.saved > 0 && (
                  <span style={{
                    fontSize: 9, color: "#059669", fontFamily: "Montserrat,sans-serif",
                    letterSpacing: "0.12em", padding: "3px 10px",
                    background: "rgba(5,150,105,0.08)", border: "1px solid rgba(5,150,105,0.2)",
                    borderRadius: 4, fontWeight: 600,
                  }}>
                    SAVED {currency}{item.saved.toFixed(2)}
                  </span>
                )}
              </div>
            </div>

            {/* Subtotal */}
            <div style={{ textAlign: "right", flexShrink: 0 }}>
              <p style={{ fontSize: 9, color: C.textFaint, fontFamily: "Montserrat,sans-serif", letterSpacing: "0.18em", marginBottom: 4, fontWeight: 600 }}>
                TOTAL
              </p>
              <p style={{ fontSize: 22, color: C.textNavy, fontFamily: "Georgia,serif", fontWeight: 700 }}>
                {currency}{item.orderTotal.toFixed(2)}
              </p>
              <p style={{ fontSize: 9, color: C.textFaint, fontFamily: "Montserrat,sans-serif", letterSpacing: "0.1em", marginTop: 2 }}>
                incl. shipping
              </p>
            </div>
          </div>

          {/* Info grid */}
          <div className="od-info-grid">
            {/* Order ID */}
            <div className="od-info-cell">
              <CellLabel icon={<IconTag />} text="ORDER ID" />
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <span style={{ fontSize: 9.5, color: C.textNavy, fontFamily: "Montserrat,sans-serif", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: 130 }}>
                  {safe(item.orderId)}
                </span>
                <button className="od-copy-btn" onClick={() => copy(safe(item.orderId), `oid-${index}`)}>
                  {copied === `oid-${index}` ? "✓" : "COPY"}
                </button>
              </div>
            </div>

            {/* Payment */}
            <div className="od-info-cell">
              <CellLabel icon={<IconCreditCard />} text="PAYMENT" />
              <span style={{ fontSize: 10, color: C.textNavy, fontFamily: "Montserrat,sans-serif", fontWeight: 500 }}>
                {safe(item.paymentMethod)}
              </span>
              {item.paymentId && item.paymentId !== "N/A" && (
                <span style={{ fontSize: 8, color: C.textFaint, fontFamily: "Montserrat,sans-serif", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                  {safe(item.paymentId).slice(0, 18)}…
                </span>
              )}
            </div>

            {/* Customer */}
            <div className="od-info-cell">
              <CellLabel icon={<IconUser />} text="CUSTOMER" />
              <span style={{ fontSize: 10, color: C.textNavy, fontFamily: "Montserrat,sans-serif", fontWeight: 500 }}>
                {safe(item.firstName)} {safe(item.lastName)}
              </span>
              <span style={{ fontSize: 8, color: C.textFaint, fontFamily: "Montserrat,sans-serif" }}>
                {safe(item.phone)}
              </span>
            </div>

            {/* Address */}
            <div className="od-info-cell" style={{ gridColumn: "span 2" }}>
              <CellLabel icon={<IconMapPin />} text="DELIVERY ADDRESS" />
              <span style={{ fontSize: 10, color: C.textNavy, fontFamily: "Montserrat,sans-serif", lineHeight: 1.6, fontWeight: 500 }}>
                {[item.street, item.city, item.state, item.country].filter(v => v && v !== "N/A").join(", ")}
              </span>
              {item.zipcode && item.zipcode !== "N/A" && (
                <span style={{ fontSize: 8, color: C.textFaint, fontFamily: "Montserrat,sans-serif" }}>
                  PIN: {safe(item.zipcode)}
                </span>
              )}
            </div>

            {/* Date */}
            <div className="od-info-cell">
              <CellLabel icon={<IconCalendar />} text="ORDER DATE" />
              <span style={{ fontSize: 10, color: C.textNavy, fontFamily: "Montserrat,sans-serif", fontWeight: 500 }}>
                {new Date(item.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ══════════════════════════════════════════
   ORDERS PAGE
══════════════════════════════════════════ */
const Orders = () => {
  const { backendUrl, token, currency } = useContext(ShopContext);
  const [orderData, setOrderData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("ALL");

  const loadOrderData = async () => {
    try {
      if (!token) return;
      setLoading(true);
      const res = await axios.post(
        backendUrl + "/api/order/userorders", {},
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (res.data.success) {
        let flat = [];
        res.data.orders.forEach(order => {
          order.items.forEach(item => {
            let qtyData = item.quantity;
            let qty = typeof qtyData === "object" && qtyData !== null ? (qtyData.quantity ?? 1) : (qtyData ?? 1);
            let customPrice = typeof qtyData === "object" && qtyData !== null ? qtyData.customPrice : null;
            let total = customPrice
              ? customPrice * qty
              : item.amount
                ? Number(item.amount)
                : (Number(item.price) || 0) * qty;

            const img = typeof item.image === "string"
              ? item.image
              : Array.isArray(item.image) ? item.image[0] : "";

            flat.push({
              ...item,
              image: img, quantity: qty,
              subtotal: total,
              saved: Number(item.saved) || 0,
              finalPrice: Number(item.finalPrice) || 0,
              orderId: order._id,
              userId: order.userId,
              productId: item.productId || item._id || "N/A",
              orderTotal: Number(order.finalAmount) || Number(order.amount) || total,
              paymentMethod: order.paymentMethod,
              payment: order.payment,
              paymentId: order.paymentId,
              status: order.status,
              date: order.date,
              firstName: order.address?.firstName,
              lastName: order.address?.lastName,
              email: order.address?.email,
              phone: order.address?.phone,
              street: order.address?.street,
              city: order.address?.city,
              state: order.address?.state,
              country: order.address?.country,
              zipcode: order.address?.zipcode,
            });
          });
        });
        setOrderData(flat.reverse());
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { loadOrderData(); }, [token]);

  const statusFilters = ["ALL", ...STATUS_STEPS];
  const filtered = filter === "ALL" ? orderData : orderData.filter(o => o.status === filter);

  return (
    <>
      <style>{STYLES}</style>

      <div className="od-page" style={{
        background: C.bgLight,
        minHeight: "100vh",
        fontFamily: "Montserrat, sans-serif",
        borderTop: `1px solid ${C.borderHi}`,
      }}>

        {/* Top shimmer */}
        <div className="od-shimmer" style={{ height: "1.5px" }} />

        {/* ── PAGE HERO with grid ── */}
        <div style={{
          textAlign: "center",
          padding: "42px 24px 36px",
          borderBottom: `1px solid ${C.borderLo}`,
          position: "relative",
          overflow: "hidden",
          background: `linear-gradient(180deg, ${C.bgSoft} 0%, ${C.bgLight} 100%)`,
        }}>
          {/* Grid */}
          <div style={{
            position: "absolute", inset: 0,
            backgroundImage: `
              linear-gradient(rgba(91,91,214,0.07) 1px, transparent 1px),
              linear-gradient(90deg, rgba(91,91,214,0.07) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
            pointerEvents: "none",
          }} />
          {/* Radial fade */}
          <div style={{
            position: "absolute", inset: 0,
            background: "radial-gradient(ellipse 70% 80% at 50% 50%, transparent 40%, #F8F7FF 100%)",
            pointerEvents: "none",
          }} />

          <div style={{ position: "relative", zIndex: 1 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 14 }}>
              <span style={{ display: "block", width: 36, height: 1, background: `linear-gradient(to right, transparent, ${C.indigo})` }} />
              <span style={{
                fontSize: 9, letterSpacing: "0.38em", color: C.indigo,
                fontFamily: "Montserrat, sans-serif", fontWeight: 700, textTransform: "uppercase",
              }}>D DOLLY LAMB</span>
              <span style={{ display: "block", width: 36, height: 1, background: `linear-gradient(to left, transparent, ${C.indigo})` }} />
            </div>
            <h1 style={{
              fontFamily: "Georgia, serif", fontWeight: 400,
              fontSize: "clamp(1.4rem,3vw,2.2rem)",
              color: C.textNavy, letterSpacing: "0.1em", margin: "0 0 6px",
            }}>
              MY <span style={{ color: C.indigo }}>ORDERS</span>
            </h1>
            <p style={{
              fontSize: 9, letterSpacing: "0.32em", color: C.indigoLt,
              fontFamily: "Montserrat, sans-serif", fontWeight: 600, marginBottom: 14,
            }}>
              ORDER HISTORY &amp; TRACKING
            </p>
            {/* Decorative divider — same as footer */}
            <div style={{ display: "flex", alignItems: "center", gap: 12, justifyContent: "center", marginTop: 12 }}>
              <span style={{ flex: 1, maxWidth: 80, height: 1, background: `linear-gradient(to right, transparent, ${C.indigo})` }} />
              <span style={{ width: 6, height: 6, background: C.indigo, transform: "rotate(45deg)", flexShrink: 0, opacity: 0.45 }} />
              <span style={{ flex: 1, maxWidth: 80, height: 1, background: `linear-gradient(to left, transparent, ${C.indigo})` }} />
            </div>
          </div>
        </div>

        {/* ── MAIN CONTENT ── */}
        <div style={{ width: "95%", maxWidth: 1200, margin: "0 auto", padding: "36px 16px 80px" }}>
          <div className="flex flex-col md:flex-row gap-6">

            {/* Sidebar */}
            <div style={{ width: "100%", maxWidth: 240, flexShrink: 0 }}>
              <AccountSidebar />
            </div>

            {/* Main */}
            <div style={{ flex: 1, minWidth: 0 }}>

              {/* Sub-header */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 10, marginBottom: 20 }}>
                <p style={{ fontSize: 11, color: C.textMuted, fontFamily: "Montserrat,sans-serif", letterSpacing: "0.06em" }}>
                  {filtered.length} {filtered.length === 1 ? "order" : "orders"} found
                </p>
              </div>

              {/* Filter tabs */}
              <div style={{
                background: C.bgSoft,
                border: `1px solid ${C.borderLo}`,
                borderRadius: 6,
                padding: "10px 14px",
                marginBottom: 18,
                display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap",
              }}>
                <span style={{
                  fontSize: 8, color: C.textFaint, letterSpacing: "0.24em",
                  fontFamily: "Montserrat,sans-serif", fontWeight: 600, marginRight: 4,
                }}>FILTER</span>
                {statusFilters.map(s => {
                  const cfg = STATUS_CFG[s];
                  const active = filter === s;
                  return (
                    <button key={s}
                      className={`od-filter-btn${active ? " active-filter" : ""}`}
                      style={active && cfg ? {
                        background: cfg.bg,
                        borderColor: cfg.color,
                        color: cfg.color,
                      } : {}}
                      onClick={() => setFilter(s)}
                    >
                      {s}
                    </button>
                  );
                })}
              </div>

              {/* Loading */}
              {loading ? (
                <div style={{ textAlign: "center", padding: "60px 0" }}>
                  <div className="od-spinner" />
                  <p style={{ fontSize: 10, color: C.textFaint, fontFamily: "Montserrat,sans-serif", letterSpacing: "0.2em" }}>
                    LOADING ORDERS…
                  </p>
                </div>

              ) : filtered.length === 0 ? (
                <div style={{
                  background: C.bgSoft,
                  border: `1px solid ${C.borderHi}`,
                  borderRadius: 8,
                  padding: "70px 24px", textAlign: "center",
                }}>
                  <div style={{ marginBottom: 18, opacity: 0.5 }}><IconEmpty /></div>
                  <p style={{
                    fontSize: "clamp(1.1rem,2.5vw,1.6rem)", color: C.textNavy,
                    fontFamily: "Georgia,serif", fontStyle: "italic", marginBottom: 10,
                  }}>
                    No orders yet
                  </p>
                  <p style={{ fontSize: 10, color: C.textFaint, fontFamily: "Montserrat,sans-serif", letterSpacing: "0.1em" }}>
                    Your order history will appear here
                  </p>
                </div>

              ) : (
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {filtered.map((item, i) => (
                    <OrderCard key={`${item.orderId}-${i}`} item={item} index={i} currency={currency} loadOrderData={loadOrderData} />
                  ))}
                </div>
              )}

            </div>
          </div>
        </div>

        {/* Bottom shimmer */}
        <div className="od-shimmer" style={{ height: "1.5px" }} />
      </div>
    </>
  );
};

export default Orders;