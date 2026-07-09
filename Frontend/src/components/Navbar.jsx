import React, { useContext, useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { Link, NavLink } from "react-router-dom";
import axios from "axios";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";


const C = {
    navBg: "rgba(255,255,255,0.97)",
    navBorder: "rgba(91,91,214,0.15)",
    megaBg: "linear-gradient(180deg,#FFFFFF 0%,#F8F7FF 100%)",
    indigo: "#5B5BD6",
    indigoLt: "#818CF8",
    indigoDk: "#4338CA",
    gold: "#C8924A",
    goldDk: "#8a5e2d",
    navText: "#1E1B4B",
    bodyText: "#4B5563",
    linkText: "#6B7280",
    mutedText: "#9CA3AF",
};

const IconSearch = () => (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
        <circle cx="10.5" cy="10.5" r="6.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M15.5 15.5L21 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
);
const IconUser = () => (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.5" />
        <path d="M4 20c0-4 3.582-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
);
const IconHeart = () => (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
        <path d="M12 21C12 21 3 14.5 3 8.5A5 5 0 0 1 12 5.5 5 5 0 0 1 21 8.5C21 14.5 12 21 12 21Z"
            stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="currentColor" fillOpacity="0.12" />
    </svg>
);
const IconBag = () => (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
        <path d="M6 2L3 7v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7l-3-5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M3 7h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M16 10a4 4 0 0 1-8 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
);
const IconMenu = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M4 6h16M4 12h10M4 18h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
);
const IconClose = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
);

const ANIM_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');

  @keyframes megaIn {
    from { opacity:0; transform:translateY(-8px); }
    to   { opacity:1; transform:translateY(0); }
  }
  @keyframes colIn {
    from { opacity:0; transform:translateY(10px); }
    to   { opacity:1; transform:translateY(0); }
  }
  @keyframes lineExpand {
    from { width:0; }
    to   { width:100%; }
  }
  @keyframes imgReveal {
    from { opacity:0; transform:scale(1.05); }
    to   { opacity:1; transform:scale(1); }
  }
  @keyframes itemSlide {
    from { opacity:0; transform:translateX(-8px); }
    to   { opacity:1; transform:translateX(0); }
  }
  @keyframes shimmerIndigo {
    0%   { background-position:-200% center; }
    100% { background-position: 200% center; }
  }

  .nav-shimmer {
    background: linear-gradient(90deg,
      transparent 0%, rgba(91,91,214,0.25) 15%,
      #5B5BD6 40%, #818CF8 50%, #5B5BD6 60%,
      rgba(91,91,214,0.25) 85%, transparent 100%);
    background-size: 200% auto;
    animation: shimmerIndigo 3.5s linear infinite;
  }

  .ddl-mega     { animation: megaIn 0.22s cubic-bezier(0.16,1,0.3,1) both; }
  .ddl-mega-col { animation: colIn 0.32s ease both; }
  .ddl-mega-col:nth-child(1) { animation-delay:0.04s; }
  .ddl-mega-col:nth-child(2) { animation-delay:0.08s; }
  .ddl-mega-col:nth-child(3) { animation-delay:0.12s; }
  .ddl-mega-col:nth-child(4) { animation-delay:0.16s; }
  .ddl-mega-col:nth-child(5) { animation-delay:0.20s; }
  .ddl-mega-col:nth-child(6) { animation-delay:0.24s; }
  .ddl-mega-col:nth-child(7) { animation-delay:0.28s; }

  .ddl-col-rule {
    display:block; height:1px; width:0;
    background:linear-gradient(to right,#5B5BD6,transparent);
    animation:lineExpand 0.45s ease 0.08s both;
  }
  .ddl-mega-img-wrap { animation:imgReveal 0.4s ease 0.06s both; }
  .ddl-mega-item     { animation:itemSlide 0.28s ease both; }
  .ddl-mega-item:nth-child(1) { animation-delay:0.08s; }
  .ddl-mega-item:nth-child(2) { animation-delay:0.12s; }
  .ddl-mega-item:nth-child(3) { animation-delay:0.16s; }
  .ddl-mega-item:nth-child(4) { animation-delay:0.20s; }
  .ddl-mega-item:nth-child(5) { animation-delay:0.24s; }
  .ddl-mega-item:nth-child(6) { animation-delay:0.28s; }
  .ddl-mega-item:nth-child(7) { animation-delay:0.32s; }
  .ddl-mega-item:nth-child(8) { animation-delay:0.36s; }

  .nav-link-item {
    position:relative; display:inline-flex; align-items:center; gap:5px;
    padding-bottom:3px; font-size:11px; font-weight:600;
    letter-spacing:0.16em; text-transform:uppercase;
    cursor:pointer; text-decoration:none; color:#1E1B4B;
    transition:color 0.2s; font-family:'Montserrat',sans-serif; white-space:nowrap;
  }
  .nav-link-item::after {
    content:''; position:absolute; bottom:0; left:0;
    height:1.5px; width:0;
    background:linear-gradient(90deg,#4338CA,#5B5BD6,#818CF8);
    border-radius:2px; transition:width 0.28s ease;
  }
  .nav-link-item:hover        { color:#5B5BD6; }
  .nav-link-item:hover::after { width:100%; }
  .nav-link-item.active        { color:#5B5BD6; }
  .nav-link-item.active::after { width:100%; }

  .mega-link {
    display:flex; align-items:center; gap:8px;
    font-size:12px; letter-spacing:0.03em;
    text-decoration:none; font-weight:500; color:#1E1B4B;
    font-family:'Montserrat',sans-serif;
    transition:color 0.18s, padding-left 0.18s;
  }
  .mega-link:hover { color:#5B5BD6; padding-left:4px; }
  .mega-link .ml {
    display:inline-block; width:10px; height:1px;
    background:#1E1B4B; flex-shrink:0;
    transition:width 0.18s, background 0.18s;
  }
  .mega-link:hover .ml { width:14px; background:#5B5BD6; }

  .nav-icon-btn {
    background:transparent; border:none; cursor:pointer; color:#4B5563;
    display:flex; align-items:center; justify-content:center;
    padding:7px; margin:-7px; border-radius:8px;
    transition:color 0.18s, background 0.18s;
    text-decoration:none; position:relative;
  }
  .nav-icon-btn:hover { color:#5B5BD6; background:rgba(91,91,214,0.08); }

  .mob-nav-link {
    display:block; padding:13px 24px;
    font-size:11px; font-weight:600; letter-spacing:0.2em;
    text-transform:uppercase; text-decoration:none;
    color:#1E1B4B; font-family:'Montserrat',sans-serif;
    border-bottom:1px solid rgba(91,91,214,0.08);
    transition:color 0.2s, padding-left 0.2s, background 0.2s;
  }
  .mob-nav-link:hover,
  .mob-nav-link.active { color:#5B5BD6; padding-left:32px; background:rgba(91,91,214,0.04); }

  .mega-view-all {
    display:flex; align-items:center; gap:8px; padding:9px 12px;
    text-decoration:none; font-size:10px; letter-spacing:0.18em;
    text-transform:uppercase; font-family:'Montserrat',sans-serif; font-weight:600;
    color:#5B5BD6; border:1.5px solid rgba(91,91,214,0.3);
    border-radius:4px; margin-top:auto;
    transition:background 0.2s, border-color 0.2s, color 0.2s;
  }
  .mega-view-all:hover { background:rgba(91,91,214,0.08); border-color:#5B5BD6; }

  body.sidebar-open { overflow: hidden; }
`;

const DiamondIcon = () => (
    <svg width="36" height="36" viewBox="0 0 42 42" fill="none">
        <rect x="6" y="6" width="30" height="30" rx="1"
            transform="rotate(45 21 21)" stroke={C.goldDk} strokeWidth="1.4" fill="none" />
        <rect x="11" y="11" width="20" height="20" rx="0.5"
            transform="rotate(45 21 21)" stroke={C.gold} strokeWidth="0.7" fill="none" opacity="0.4" />
        <text x="21" y="26.5" fontFamily="Montserrat,sans-serif"
            fontSize="13" fontWeight="600" fill={C.gold} textAnchor="middle">D</text>
    </svg>
);

const MegaBadge = ({ text }) => (
    <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 14, marginTop: 2 }}>
        <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
            <path d="M7 1l1.5 3.1 3.4.5-2.5 2.4.6 3.4L7 9l-3 1.4.6-3.4L2.1 4.6l3.4-.5z"
                stroke={C.indigo} strokeWidth="1" fill="rgba(91,91,214,0.12)" strokeLinejoin="round" />
        </svg>
        <span style={{
            fontSize: 8, letterSpacing: "0.28em", fontFamily: "Montserrat,sans-serif",
            fontWeight: 700, textTransform: "uppercase", color: C.indigoLt,
        }}>{text}</span>
    </div>
);

const Chevron = ({ open }) => (
    <span style={{
        display: "inline-block", width: 5, height: 5, flexShrink: 0,
        borderRight: "1.5px solid currentColor", borderBottom: "1.5px solid currentColor",
        transform: open ? "rotate(-135deg) translateY(2px)" : "rotate(45deg) translateY(-1px)",
        transition: "transform 0.22s",
    }} />
);

/* ──────────────────────────────────────────────────────────
   buildUrl — DYNAMIC version.
   Every nav item now carries { label, categoryName }, where
   categoryName matches the exact "categoryName" stored in
   MongoDB (e.g. "Men's", "Women's", "Pillow Covers" …) and
   label matches a string inside that category's subCategories
   array. This maps 1:1 to Collection.jsx's subCategoriesMap,
   so the ?category=&sub= query params work correctly.
────────────────────────────────────────────────────────── */
const buildUrl = (categoryName, label) =>
    `/collection?category=${encodeURIComponent(categoryName)}&sub=${encodeURIComponent(label)}`;

const corners = [
    { pos: "top-2 left-2", b: "border-t-[1.5px] border-l-[1.5px]" },
    { pos: "top-2 right-2", b: "border-t-[1.5px] border-r-[1.5px]" },
    { pos: "bottom-2 left-2", b: "border-b-[1.5px] border-l-[1.5px]" },
    { pos: "bottom-2 right-2", b: "border-b-[1.5px] border-r-[1.5px]" },
];

const MegaMenu = ({ children, showMenu, hideMenu, wide = false }) => (
    <div className="ddl-mega" style={{
        position: "fixed", left: 0, right: 0, top: 64, zIndex: 9998,
        background: C.megaBg,
        borderTop: `1px solid ${C.navBorder}`,
        borderBottom: `1px solid ${C.navBorder}`,
        boxShadow: "0 16px 48px rgba(91,91,214,0.10), 0 4px 16px rgba(0,0,0,0.05)",
    }} onMouseEnter={showMenu} onMouseLeave={hideMenu}>
        <div style={{
            height: 1,
            background: "linear-gradient(90deg,transparent,rgba(91,91,214,0.45) 30%,#5B5BD6 50%,rgba(91,91,214,0.45) 70%,transparent)",
        }} />
        <div style={{
            maxWidth: wide ? 1500 : 1400, margin: "0 auto",
            padding: "28px 40px", display: "flex", gap: 36, alignItems: "flex-start",
            overflowX: "auto",
        }}>
            {children}
        </div>
    </div>
);

/* items: [{ label, categoryName }] */
const MegaColumn = ({ title, badge, items, compact = false }) => (
    <div className="ddl-mega-col" style={{ minWidth: compact ? 125 : 145, flexShrink: 0 }}>
        {badge && <MegaBadge text={badge} />}
        <div style={{
            fontSize: 9, fontWeight: 700, letterSpacing: "0.28em",
            color: C.indigo, textTransform: "uppercase",
            fontFamily: "Montserrat,sans-serif", marginBottom: 10,
        }}>{title}</div>
        <span className="ddl-col-rule" style={{ display: "block", marginBottom: 12 }} />
        {items.length > 0 ? (
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 9 }}>
                {items.map((item, i) => (
                    <li key={i} className="ddl-mega-item">
                        <Link to={buildUrl(item.categoryName, item.label)} className="mega-link">
                            <span className="ml" />{item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        ) : (
            <p style={{ fontSize: 11, color: C.mutedText, fontFamily: "Montserrat,sans-serif", fontStyle: "italic" }}>
                Coming soon
            </p>
        )}
    </div>
);

/* sections: { [sectionTitle]: [{label, categoryName}] } */
const MobileAccordion = ({ title, open, toggle, sections, closeSidebar }) => (
    <div>
        <button onClick={toggle} style={{
            width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between",
            padding: "13px 24px", fontSize: 11, fontWeight: 600, letterSpacing: "0.2em",
            textTransform: "uppercase", fontFamily: "Montserrat,sans-serif",
            color: open ? C.indigo : C.navText,
            borderBottom: "1px solid rgba(91,91,214,0.1)",
            background: open ? "rgba(91,91,214,0.04)" : "transparent",
            border: "none", cursor: "pointer",
            transition: "color 0.2s, background 0.2s",
        }}>
            {title} <Chevron open={open} />
        </button>
        <div style={{
            maxHeight: open ? 1400 : 0, opacity: open ? 1 : 0,
            overflow: "hidden", transition: "max-height 0.4s ease, opacity 0.35s ease",
        }}>
            {Object.entries(sections).map(([sec, items], idx) => (
                <div key={idx} style={{ padding: "10px 36px", borderBottom: "1px solid rgba(91,91,214,0.06)" }}>
                    <h4 style={{
                        fontSize: 8, letterSpacing: "0.28em", textTransform: "uppercase",
                        fontWeight: 700, color: C.indigoLt,
                        fontFamily: "Montserrat,sans-serif", marginBottom: 8,
                    }}>{sec}</h4>
                    {items.length > 0 ? items.map((item, i) => (
                        <Link key={i} onClick={closeSidebar} to={buildUrl(item.categoryName, item.label)} style={{
                            display: "block", padding: "5px 0",
                            fontSize: 11, textDecoration: "none", letterSpacing: "0.05em",
                            color: C.linkText, fontFamily: "Montserrat,sans-serif",
                            transition: "color 0.18s",
                        }}
                            onMouseEnter={e => e.currentTarget.style.color = C.indigo}
                            onMouseLeave={e => e.currentTarget.style.color = C.linkText}
                        >{item.label}</Link>
                    )) : (
                        <p style={{ fontSize: 10, color: C.mutedText, fontFamily: "Montserrat,sans-serif", fontStyle: "italic" }}>Coming soon</p>
                    )}
                </div>
            ))}
        </div>
    </div>
);

/* ══════════════════════════════════════
   NAVBAR
══════════════════════════════════════ */
const Navbar = () => {
    const [visible, setVisible] = useState(false);
    const [activeMenu, setActiveMenu] = useState(null);
    const [mobileAccord, setMobileAccord] = useState(null);
    const [profileOpen, setProfileOpen] = useState(false);

    // ✅ Reliable isMobile — lazy init + sync on resize
    const [isMobile, setIsMobile] = useState(() =>
        typeof window !== "undefined" ? window.innerWidth < 768 : false
    );

    const hideRef = useRef(null);
    const profileRef = useRef(null);

    /* ──────────────────────────────────────────────
       Dynamic categories — fetched once from backend.
       Shape: [{ _id, categoryName, subCategories: [...] }]
    ────────────────────────────────────────────── */
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const res = await axios.get(`${backendUrl}/api/category/list`);
                if (res.data.success) setCategories(res.data.categories || []);
            } catch (err) {
                console.error("Failed to load categories for navbar:", err.message);
            }
        };
        fetchCategories();
    }, []);

    // Helper: get subcategory string array for a given categoryName
    const getSubcats = (categoryName) => {
        const cat = categories.find(c => c.categoryName === categoryName);
        return cat?.subCategories || [];
    };
    // Helper: turn a string array into [{label, categoryName}]
    const toItems = (categoryName, subs) => subs.map(s => ({ label: s, categoryName }));

    const menSubs = toItems("Men's", getSubcats("Men's"));
    const womenSubsAll = getSubcats("Women's");
    const womenHalf = Math.ceil(womenSubsAll.length / 2);
    const womenSubsCol1 = toItems("Women's", womenSubsAll.slice(0, womenHalf));
    const womenSubsCol2 = toItems("Women's", womenSubsAll.slice(womenHalf));

    useEffect(() => {
        const onResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener("resize", onResize);
        onResize();
        return () => window.removeEventListener("resize", onResize);
    }, []);

    // ✅ Body scroll lock
    useEffect(() => {
        document.body.classList.toggle("sidebar-open", visible);
        return () => document.body.classList.remove("sidebar-open");
    }, [visible]);

    const { wishlist, setShowSearch, getCartCount, navigate, token, setToken, setCartItems, backendUrl } = useContext(ShopContext);

    useEffect(() => {
        const h = (e) => {
            if (profileRef.current && !profileRef.current.contains(e.target)) setProfileOpen(false);
        };
        if (profileOpen) document.addEventListener("mousedown", h);
        return () => document.removeEventListener("mousedown", h);
    }, [profileOpen]);

    const logout = () => {
        setProfileOpen(false); navigate("/login");
        localStorage.removeItem("token"); setToken(""); setCartItems({});
    };

    const hideMenu = () => { hideRef.current = setTimeout(() => setActiveMenu(null), 380); };
    const showMenu = (m) => { if (hideRef.current) clearTimeout(hideRef.current); setActiveMenu(m); };

    // ✅ closeSidebar resets accordion too
    const closeSidebar = () => { setVisible(false); setMobileAccord(null); };

    // ✅ Close on route change
    useEffect(() => { setVisible(false); setMobileAccord(null); }, [navigate]);

    /* ──────────────────────────────────────────────
       Mobile "Collection" accordion sections —
       one section per category, dynamically.
    ────────────────────────────────────────────── */
    const collectionSections = {};
    categories.forEach(cat => {
        collectionSections[cat.categoryName.toUpperCase()] = toItems(cat.categoryName, cat.subCategories || []);
    });

    // ✅ Sidebar JSX — extracted so we can portal it
    const sidebarJSX = (
        <>
            {/* Backdrop — clicks close sidebar */}
            {visible && (
                <div onClick={closeSidebar} style={{
                    position: "fixed", inset: 0, zIndex: 99997,
                    background: "rgba(30,27,75,0.30)",
                    backdropFilter: "blur(4px)",
                    WebkitBackdropFilter: "blur(4px)",
                }} />
            )}

            {/* Sidebar panel */}
            <div style={{
                position: "fixed", top: 0, right: 0, bottom: 0, zIndex: 99999,
                background: "#FFFFFF",
                borderLeft: `1px solid ${C.navBorder}`,
                boxShadow: visible ? "-12px 0 40px rgba(91,91,214,0.12)" : "none",
                // ✅ transform-based slide — never clipped by parent stacking context
                width: "300px",
                maxWidth: "85vw",
                transform: visible ? "translateX(0)" : "translateX(110%)",
                transition: "transform 0.32s cubic-bezier(0.4,0,0.2,1), box-shadow 0.3s ease",
                visibility: visible ? "visible" : "hidden",
                pointerEvents: visible ? "all" : "none",
                overflowX: "hidden", overflowY: "auto",
                fontFamily: "Montserrat,sans-serif",
            }}>
                {/* Header */}
                <div style={{
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    padding: "14px 20px",
                    borderBottom: "1px solid rgba(91,91,214,0.1)",
                    background: "linear-gradient(135deg,#F8F7FF,#EEF0FF)",
                }}>
                    <Link to="/" onClick={closeSidebar} style={{
                        display: "flex", alignItems: "center", gap: 8, textDecoration: "none",
                    }}>
                        <DiamondIcon />
                        <div>
                            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: C.navText }}>
                                <span style={{ color: C.gold }}>D DOLLY</span> LAMB
                            </div>
                            <div style={{ fontSize: 7, letterSpacing: "0.3em", color: C.indigoLt, textTransform: "uppercase" }}>
                                ARTISAN ATELIER
                            </div>
                        </div>
                    </Link>
                    <button onClick={closeSidebar} style={{
                        background: "rgba(91,91,214,0.08)", border: "none", cursor: "pointer",
                        color: C.indigo, display: "flex", alignItems: "center", justifyContent: "center",
                        width: 32, height: 32, borderRadius: 8, transition: "background 0.18s",
                        touchAction: "manipulation",
                    }}
                        onMouseEnter={e => e.currentTarget.style.background = "rgba(91,91,214,0.15)"}
                        onMouseLeave={e => e.currentTarget.style.background = "rgba(91,91,214,0.08)"}
                    ><IconClose /></button>
                </div>

                {/* Shimmer stripe */}
                <div style={{
                    height: 2,
                    background: "linear-gradient(90deg,transparent,#5B5BD6 50%,transparent)",
                    opacity: 0.45,
                }} />

                <NavLink className="mob-nav-link" to="/" onClick={closeSidebar}>Home</NavLink>

                {/* MEN — only "Men's" category subcategories */}
                <MobileAccordion title="Men" open={mobileAccord === "men"}
                    toggle={() => setMobileAccord(mobileAccord === "men" ? null : "men")}
                    sections={{ "SHOP MEN'S": menSubs }}
                    closeSidebar={closeSidebar}
                />

                {/* WOMEN — only "Women's" category subcategories */}
                <MobileAccordion title="Women" open={mobileAccord === "women"}
                    toggle={() => setMobileAccord(mobileAccord === "women" ? null : "women")}
                    sections={{ "SHOP WOMEN'S": toItems("Women's", womenSubsAll) }}
                    closeSidebar={closeSidebar}
                />

                {/* COLLECTION — every category as its own section */}
                <MobileAccordion title="Collection" open={mobileAccord === "collection"}
                    toggle={() => setMobileAccord(mobileAccord === "collection" ? null : "collection")}
                    sections={collectionSections}
                    closeSidebar={closeSidebar}
                />

                {[{ to: "/about", label: "About" }, { to: "/contact", label: "Contact" }].map(({ to, label }) => (
                    <NavLink key={to} className="mob-nav-link" to={to} onClick={closeSidebar}>
                        {label}
                    </NavLink>
                ))}

                {/* Bottom CTA */}
                <div style={{ padding: "20px", borderTop: "1px solid rgba(91,91,214,0.1)", marginTop: 8 }}>
                    <Link to="/collection" onClick={closeSidebar} style={{
                        display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                        padding: "12px 20px", textDecoration: "none",
                        background: `linear-gradient(135deg,${C.indigoDk},${C.indigo})`,
                        color: "#fff", borderRadius: 8,
                        fontSize: 10, fontWeight: 700, letterSpacing: "0.18em",
                        textTransform: "uppercase", fontFamily: "Montserrat,sans-serif",
                        boxShadow: "0 4px 16px rgba(91,91,214,0.30)",
                        touchAction: "manipulation",
                    }}>
                        Shop the Collection →
                    </Link>
                </div>
            </div>
        </>
    );

    return (
        <>
            <style>{ANIM_STYLES}</style>

            <header style={{
                position: "sticky", top: 0,
                background: C.navBg,
                borderBottom: `1px solid ${C.navBorder}`,
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                zIndex: 9998, overflow: "visible",
                fontFamily: "Montserrat,sans-serif",
                boxShadow: "0 2px 20px rgba(91,91,214,0.07)",
            }}>
                <div className="nav-shimmer" style={{ height: "1.5px" }} />

                <div style={{
                    maxWidth: 1400, margin: "0 auto",
                    padding: "0 24px",
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    gap: 20, height: 62,
                }}>
                    {/* LOGO */}
                    <Link to="/">
                        <img className=" w-[124px]" src={assets.DDL_logo4} alt="" />
                    </Link>

                    {/* CENTER NAV — desktop only */}
                    <ul style={{
                        listStyle: "none", margin: 0, padding: 0,
                        display: isMobile ? "none" : "flex",
                        alignItems: "center", gap: 28, flexShrink: 0,
                    }}>
                        <li>
                            <NavLink to="/" className={({ isActive }) => `nav-link-item${isActive ? " active" : ""}`}>
                                Home
                            </NavLink>
                        </li>

                        {/* MEN */}
                        <li style={{ position: "relative" }}
                            onMouseEnter={() => showMenu("men")} onMouseLeave={hideMenu}>
                            <div className={`nav-link-item${activeMenu === "men" ? " active" : ""}`}>
                                Men <Chevron open={activeMenu === "men"} />
                            </div>
                            {activeMenu === "men" && (
                                <MegaMenu showMenu={() => showMenu("men")} hideMenu={hideMenu}>
                                    <MegaColumn title="Shop By Type" badge="MEN'S COLLECTION" items={menSubs} />
                                    <div style={{ width: 1, alignSelf: "stretch", background: C.navBorder }} />
                                    <div className="ddl-mega-img-wrap" style={{
                                        marginLeft: "auto", flexShrink: 0, width: 170,
                                        position: "relative", overflow: "hidden", borderRadius: 6,
                                        boxShadow: "0 4px 20px rgba(91,91,214,0.12)",
                                    }}>
                                        <img src={assets.men_nav} alt="Men's Collection" style={{
                                            width: "100%", height: 220, objectFit: "cover", display: "block",
                                            filter: "brightness(0.82)", transition: "transform 0.5s",
                                        }}
                                            onMouseEnter={e => e.target.style.transform = "scale(1.05)"}
                                            onMouseLeave={e => e.target.style.transform = "scale(1)"}
                                        />
                                        {corners.map((c, i) => (
                                            <span key={i} className={`absolute w-4 h-4 ${c.pos} ${c.b}`}
                                                style={{ borderColor: C.indigo, opacity: 0.6 }} />
                                        ))}
                                        <div style={{
                                            position: "absolute", bottom: 0, left: 0, right: 0,
                                            padding: "8px 12px", fontSize: 8, fontWeight: 700,
                                            letterSpacing: "0.25em", textTransform: "uppercase",
                                            textAlign: "center", color: "#fff",
                                            background: "linear-gradient(to top,rgba(30,27,75,0.88),transparent)",
                                        }}>Men's Collection</div>
                                    </div>
                                </MegaMenu>
                            )}
                        </li>

                        {/* WOMEN */}
                        <li style={{ position: "relative" }}
                            onMouseEnter={() => showMenu("women")} onMouseLeave={hideMenu}>
                            <div className={`nav-link-item${activeMenu === "women" ? " active" : ""}`}>
                                Women <Chevron open={activeMenu === "women"} />
                            </div>
                            {activeMenu === "women" && (
                                <MegaMenu showMenu={() => showMenu("women")} hideMenu={hideMenu}>
                                    <MegaColumn title="Shop By Type" badge="WOMEN'S COLLECTION" items={womenSubsCol1} />
                                    <div style={{ width: 1, alignSelf: "stretch", background: C.navBorder }} />
                                    <MegaColumn title="More Styles" items={womenSubsCol2} />
                                    <div style={{ width: 1, alignSelf: "stretch", background: C.navBorder }} />
                                    <div className="ddl-mega-img-wrap" style={{
                                        marginLeft: "auto", flexShrink: 0, width: 170,
                                        position: "relative", overflow: "hidden", borderRadius: 6,
                                        boxShadow: "0 4px 20px rgba(91,91,214,0.12)",
                                    }}>
                                        <img src={assets.women_nav} alt="Women's Collection" style={{
                                            width: "100%", height: 220, objectFit: "cover", display: "block",
                                            filter: "brightness(0.82)", transition: "transform 0.5s",
                                        }}
                                            onMouseEnter={e => e.target.style.transform = "scale(1.05)"}
                                            onMouseLeave={e => e.target.style.transform = "scale(1)"}
                                        />
                                        {corners.map((c, i) => (
                                            <span key={i} className={`absolute w-4 h-4 ${c.pos} ${c.b}`}
                                                style={{ borderColor: C.indigo, opacity: 0.6 }} />
                                        ))}
                                        <div style={{
                                            position: "absolute", bottom: 0, left: 0, right: 0,
                                            padding: "8px 12px", fontSize: 8, fontWeight: 700,
                                            letterSpacing: "0.25em", textTransform: "uppercase",
                                            textAlign: "center", color: "#fff",
                                            background: "linear-gradient(to top,rgba(30,27,75,0.88),transparent)",
                                        }}>Women's Collection</div>
                                    </div>
                                </MegaMenu>
                            )}
                        </li>

                        {/* COLLECTION — every category from DB, one column each */}
                        <li style={{ position: "relative" }}
                            onMouseEnter={() => showMenu("collection")} onMouseLeave={hideMenu}>
                            <div className={`nav-link-item${activeMenu === "collection" ? " active" : ""}`}>
                                Collection <Chevron open={activeMenu === "collection"} />
                            </div>
                            {activeMenu === "collection" && (
                                <MegaMenu showMenu={() => showMenu("collection")} hideMenu={hideMenu} wide>
                                    {categories.map((cat, idx) => (
                                        <React.Fragment key={cat._id}>
                                            <MegaColumn
                                                title={cat.categoryName}
                                                compact
                                                items={toItems(cat.categoryName, cat.subCategories || [])}
                                            />
                                            <div style={{ width: 1, alignSelf: "stretch", background: C.navBorder, flexShrink: 0 }} />
                                        </React.Fragment>
                                    ))}
                                    <div className="ddl-mega-col" style={{ minWidth: 130, display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
                                        <Link to="/collection" className="mega-view-all"
                                            onMouseDown={e => e.preventDefault()}
                                            onClick={() => setActiveMenu(null)}>
                                            <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
                                                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            View All
                                        </Link>
                                    </div>
                                </MegaMenu>
                            )}
                        </li>

                        {[{ to: "/about", label: "About" }, { to: "/contact", label: "Contact" }].map(({ to, label }) => (
                            <li key={to}>
                                <NavLink to={to} className={({ isActive }) => `nav-link-item${isActive ? " active" : ""}`}>
                                    {label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>

                    {/* RIGHT ICONS */}
                    <div style={{ display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
                        <button className="nav-icon-btn" aria-label="Search"
                            onClick={() => { setShowSearch(true); navigate("/collection"); }}>
                            <IconSearch />
                        </button>

                        <div ref={profileRef} style={{ position: "relative" }}>
                            <button className="nav-icon-btn" aria-label="Account"
                                onClick={() => token ? setProfileOpen(p => !p) : navigate("/login")}>
                                <IconUser />
                            </button>
                            {token && profileOpen && (
                                <div style={{
                                    position: "absolute", top: "calc(100% + 10px)", right: 0,
                                    minWidth: 185, zIndex: 999999,
                                    background: "#FFFFFF",
                                    border: `1px solid ${C.navBorder}`,
                                    borderTop: `2px solid ${C.indigo}`,
                                    borderRadius: 8,
                                    boxShadow: "0 12px 40px rgba(91,91,214,0.15)",
                                    animation: "megaIn 0.18s ease both",
                                }}>
                                    <div style={{
                                        padding: "11px 16px",
                                        borderBottom: "1px solid rgba(91,91,214,0.1)",
                                        display: "flex", alignItems: "center", gap: 10,
                                    }}>
                                        <div style={{
                                            width: 28, height: 28, borderRadius: "50%", flexShrink: 0,
                                            background: `linear-gradient(135deg,${C.indigoDk},${C.indigo})`,
                                            display: "flex", alignItems: "center", justifyContent: "center", color: "#fff",
                                        }}><IconUser /></div>
                                        <span style={{
                                            fontSize: 9, letterSpacing: "0.16em", color: C.indigo,
                                            textTransform: "uppercase", fontFamily: "Montserrat,sans-serif", fontWeight: 600,
                                        }}>My Account</span>
                                    </div>
                                    {[
                                        { label: "My Profile", action: () => { setProfileOpen(false); navigate("/profile"); } },
                                        { label: "Orders", action: () => { setProfileOpen(false); navigate("/orders"); } },
                                        { label: "Logout", action: logout },
                                    ].map(({ label, action }, i, arr) => (
                                        <p key={label} onClick={action} style={{
                                            margin: 0, padding: "10px 16px",
                                            fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase",
                                            cursor: "pointer", fontFamily: "Montserrat,sans-serif",
                                            color: C.bodyText, fontWeight: 500,
                                            borderBottom: i < arr.length - 1 ? "1px solid rgba(91,91,214,0.08)" : "none",
                                            transition: "background 0.15s, color 0.15s, padding-left 0.15s",
                                        }}
                                            onMouseEnter={e => { e.currentTarget.style.background = "rgba(91,91,214,0.06)"; e.currentTarget.style.color = C.indigo; e.currentTarget.style.paddingLeft = "22px"; }}
                                            onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = C.bodyText; e.currentTarget.style.paddingLeft = "16px"; }}
                                        >{label}</p>
                                    ))}
                                </div>
                            )}
                        </div>

                        <Link to="/wishlist" className="nav-icon-btn" aria-label="Wishlist" style={{ position: "relative" }}>
                            <IconHeart />
                            {wishlist?.length > 0 && (
                                <span style={{
                                    position: "absolute", top: 2, right: 2,
                                    minWidth: 15, height: 15, borderRadius: "50%",
                                    display: "flex", alignItems: "center", justifyContent: "center",
                                    fontSize: 7.5, fontWeight: 700,
                                    background: C.indigo, color: "#fff",
                                    fontFamily: "Montserrat,sans-serif",
                                }}>{wishlist.length}</span>
                            )}
                        </Link>

                        <Link to="/cart" className="nav-icon-btn" aria-label="Cart" style={{ position: "relative" }}>
                            <IconBag />
                            <span style={{
                                position: "absolute", top: 2, right: 2,
                                minWidth: 15, height: 15, borderRadius: "50%",
                                display: "flex", alignItems: "center", justifyContent: "center",
                                fontSize: 7.5, fontWeight: 700,
                                background: C.indigo, color: "#fff",
                                fontFamily: "Montserrat,sans-serif",
                            }}>{getCartCount()}</span>
                        </Link>

                        {isMobile && (
                            <button className="nav-icon-btn" aria-label="Menu"
                                onClick={() => setVisible(true)}
                                style={{ touchAction: "manipulation" }}>
                                <IconMenu />
                            </button>
                        )}
                    </div>
                </div>

                <div className="nav-shimmer" style={{ height: "1.5px" }} />
            </header>

            {/*
              ✅ PORTAL FIX — createPortal renders sidebar directly on document.body.
              This ESCAPES the header's backdropFilter stacking context.
              backdropFilter on a parent breaks position:fixed for ALL children —
              they become fixed relative to the parent, not the viewport.
              Portal is the ONLY correct fix for this CSS spec behaviour.
            */}
            {createPortal(sidebarJSX, document.body)}
        </>
    );
};

export default Navbar;