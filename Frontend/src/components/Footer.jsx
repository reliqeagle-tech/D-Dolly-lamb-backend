import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

/* ── Premium SVG Social Icons ─────────────────── */
const IconEmail = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.4" />
    <path d="M2 7l10 7 10-7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);
const IconFacebook = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
      stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
  </svg>
);
const IconInstagram = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.4" />
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
  </svg>
);
const IconTwitter = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path d="M4 4l16 16M4 20L20 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M20 4H16l-4 5-4-5H4l7 9-7 7h4l4-5 4 5h4l-7-9 7-7z"
      stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
  </svg>
);
const IconArrow = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/*
  ═══════════════════════════════════════════════
  PROFESSIONAL COLOR SYSTEM — D DOLLY LAMB FOOTER
  ═══════════════════════════════════════════════

  OLD (muddy browns/ambers):
    bg:         #0d0703 → #1a0f0a   dark brown-black, looks muddy
    gold:       #c8973a / #f7c568   inconsistent warm golds
    text-dim:   #7a6050 / #5a4030   brown-tinted, hard to read
    border:     rgba(200,151,58,…)  warm, clashes with brand

  NEW (refined deep navy + champagne gold):
    bg-deep:    #09091A             rich blue-black (matches navbar theme)
    bg-mid:     #0D0D24             slightly lighter panel bg
    gold-hi:    #D4A853             champagne gold — warm but refined
    gold-mid:   #B8923E             mid gold for headings
    gold-dim:   #7A6030             muted gold for decorative accents
    text-hi:    #E8DCC8             warm ivory — primary readable text
    text-mid:   #A89880             warm grey — secondary text
    text-dim:   #6A5E50             muted — tertiary/hints
    border-hi:  rgba(212,168,83,0.28)  visible but not harsh
    border-lo:  rgba(212,168,83,0.12)  subtle dividers

  RATIONALE:
    • Deep navy base aligns with the navbar (#0D0D1F) for brand cohesion
    • Single gold ramp (D4A853→7A6030) replaces two conflicting amber sets
    • Ivory text (#E8DCC8) replaces pure white — softer, more luxurious
    • Warm grey mid-text (#A89880) is readable without being stark
    • Border opacity values are consistent: 0.28 hi / 0.12 lo (not 0.18/0.1/0.08/0.22)
  ═══════════════════════════════════════════════
*/

/* Semantic color tokens (easy to update in one place) */
const C = {
  bgDeep: "#09091A",
  bgMid: "#0D0D24",
  bgAccent: "rgba(212,168,83,0.06)",   /* subtle hover / focus bg */
  goldHi: "#D4A853",                  /* headings, icons, CTAs */
  goldMid: "#B8923E",                  /* col labels, decorative */
  goldDim: "rgba(212,168,83,0.28)",    /* borders high */
  goldFaint: "rgba(212,168,83,0.12)",   /* borders low / dividers */
  textHi: "#E8DCC8",                  /* primary body text — ivory */
  textMid: "#A89880",                  /* secondary/muted text */
  textDim: "#6A5E50",                  /* tertiary / placeholders */
  success: "#7EB68A",                  /* newsletter success check */
};

/* ── Footer Link ────────────────────────────────── */
const FooterLink = ({ to, href, children }) => {
  const cls = `
    group flex items-center gap-2 text-xs leading-relaxed
    transition-all duration-300 no-underline
  `;
  const inner = (
    <>
      <span style={{
        display: "block", width: 12, height: 1, flexShrink: 0,
        background: C.goldMid, opacity: 0.5,
        transition: "width 0.25s ease, opacity 0.25s ease",
      }} className="group-hover:!w-[18px] group-hover:!opacity-100" />
      <span style={{ color: C.textMid, transition: "color 0.2s, transform 0.2s" }}
        className="group-hover:!text-[#D4A853] group-hover:translate-x-0.5 font-serif tracking-[0.04em]">
        {children}
      </span>
    </>
  );
  return to
    ? <Link to={to} className={cls}>{inner}</Link>
    : <a href={href || "#"} className={cls}>{inner}</a>;
};

/* ── Column Heading ─────────────────────────────── */
const ColHeading = ({ children }) => (
  <div className="mb-5">
    <p style={{
      fontSize: 9, letterSpacing: "0.32em", fontWeight: 600,
      color: C.goldMid, textTransform: "uppercase",
      fontFamily: "Montserrat, sans-serif", marginBottom: 10,
    }}>
      {children}
    </p>
    <div className="flex items-center gap-2">
      <span style={{
        display: "block", height: 1, width: 28,
        background: `linear-gradient(to right, ${C.goldHi}, transparent)`,
      }} />
      <span style={{
        display: "block", width: 4, height: 4,
        transform: "rotate(45deg)", flexShrink: 0,
        background: C.goldHi, opacity: 0.45,
      }} />
    </div>
  </div>
);

const Footer = () => {
  const isDevelopment = import.meta.env.MODE === 'development';
  // const backendUrl = isDevelopment
  //   ? import.meta.env.VITE_BACKEND_URL_D
  //   : import.meta.env.VITE_BACKEND_URL;
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get(`${backendUrl}/api/category/list`);

        if (res.data.success) {
          setCategories(res.data.categories || []);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchCategories();
  }, [backendUrl]);

  const buildUrl = (categoryName, subCategory) =>
    `/collection?category=${encodeURIComponent(categoryName)}&sub=${encodeURIComponent(subCategory)}`;

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    setLoading(true);
    try {
      const res = await fetch(`${backendUrl}/api/user/send-mail`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
        event.target.reset();
        setTimeout(() => setSubmitted(false), 4000);
      } else {
        alert("⚠️ " + data.message);
      }
    } catch (error) {
      alert("❌ " + error.message);
    } finally {
      setLoading(false);
    }
  };

  const socials = [
    { icon: <IconEmail />, label: "Email", href: "mailto:info@ddollylamb.com" },
    { icon: <IconFacebook />, label: "Facebook", href: "#" },
    { icon: <IconInstagram />, label: "Instagram", href: "#" },
    { icon: <IconTwitter />, label: "X / Twitter", href: "#" },
  ];

  const trustBadges = [
    { icon: "✦", text: "Grade A Lambskin" },
    { icon: "◈", text: "Handcrafted Quality" },
    { icon: "◆", text: "Est. 2001" },
  ];

  return (
    <footer style={{
      background: `linear-gradient(180deg, ${C.bgDeep} 0%, ${C.bgMid} 100%)`,
      borderTop: `1px solid ${C.goldDim}`,
      fontFamily: "Georgia, 'Times New Roman', serif",
    }}>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap');

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes marqueeScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes checkIn {
          from { opacity: 0; transform: scale(0.85); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes shimmerGold {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .ft-anim-1 { animation: fadeUp 0.5s ease 0.05s both; }
        .ft-anim-2 { animation: fadeUp 0.5s ease 0.12s both; }
        .ft-anim-3 { animation: fadeUp 0.5s ease 0.19s both; }
        .ft-anim-4 { animation: fadeUp 0.5s ease 0.26s both; }
        .ft-anim-5 { animation: fadeUp 0.5s ease 0.33s both; }
        .ft-anim-6 { animation: fadeUp 0.5s ease 0.40s both; }
        .ft-success { animation: checkIn 0.4s ease both; }
        .marquee-track { animation: marqueeScroll 30s linear infinite; }
        .ft-shimmer-bar {
          background: linear-gradient(90deg,
            transparent 0%, #8A6A30 20%, #D4A853 45%, #F0C97A 55%, #B8923E 75%, transparent 100%);
          background-size: 200% auto;
          animation: shimmerGold 5s linear infinite;
        }
        .ft-newsletter-input {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(212,168,83,0.22);
          color: #E8DCC8;
          font-family: Georgia, serif;
          font-style: italic;
          font-size: 12px;
          letter-spacing: 0.04em;
          outline: none;
          width: 100%;
          padding: 11px 44px 11px 14px;
          transition: border-color 0.3s, box-shadow 0.3s;
        }
        .ft-newsletter-input::placeholder { color: #6A5E50; }
        .ft-newsletter-input:focus {
          border-color: #D4A853;
          box-shadow: 0 0 0 3px rgba(212,168,83,0.1);
        }
        .ft-social-btn {
          width: 36px; height: 36px;
          border: 1px solid rgba(212,168,83,0.22);
          display: flex; align-items: center; justify-content: center;
          color: #6A5E50;
          text-decoration: none;
          transition: border-color 0.3s, color 0.3s, background 0.3s, transform 0.2s;
        }
        .ft-social-btn:hover {
          border-color: #D4A853;
          color: #D4A853;
          background: rgba(212,168,83,0.08);
          transform: translateY(-2px);
        }
      `}</style>

      {/* ── SHIMMER TOP LINE — matches navbar bottom shimmer ── */}
      <div className="ft-shimmer-bar" style={{ height: "1.5px" }} />

      {/* ── BRAND HERO ROW ── */}
      <div style={{
        textAlign: "center", padding: "48px 24px 40px",
        borderBottom: `1px solid ${C.goldFaint}`,
      }}>
        {/* Diamond logo */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 16 }}>
          <svg width="48" height="48" viewBox="0 0 42 42" fill="none">
            <rect x="6" y="6" width="30" height="30" rx="1"
              transform="rotate(45 21 21)" stroke={C.goldMid} strokeWidth="1.4" fill="none" />
            <rect x="11" y="11" width="20" height="20" rx="0.5"
              transform="rotate(45 21 21)" stroke={C.goldHi} strokeWidth="0.7" fill="none" opacity="0.4" />
            <text x="21" y="26.5" fontFamily="Montserrat,sans-serif" fontSize="13"
              fontWeight="600" fill={C.goldHi} textAnchor="middle">D</text>
          </svg>
        </div>

        <h2 style={{
          fontFamily: "Georgia, serif", fontWeight: 400,
          fontSize: "clamp(1.5rem,4vw,2.6rem)",
          color: C.goldHi, letterSpacing: "0.08em",
          margin: "0 0 6px",
        }}>
          D DOLLY <span style={{ color: C.textHi }}>LAMB</span>
        </h2>

        <p style={{
          fontSize: 9, letterSpacing: "0.42em", color: C.goldMid,
          marginBottom: 16, fontFamily: "Montserrat, sans-serif",
        }}>
          ARTISAN LEATHER ATELIER · EST. 2001
        </p>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12 }}>
          <span style={{ display: "block", height: 1, width: 64, background: `linear-gradient(to right, transparent, ${C.goldDim})` }} />
          <span style={{ display: "block", width: 6, height: 6, transform: "rotate(45deg)", background: C.goldMid, flexShrink: 0 }} />
          <span style={{ display: "block", height: 1, width: 64, background: `linear-gradient(to left, transparent, ${C.goldDim})` }} />
        </div>
      </div>

      {/* ── MAIN LINK GRID ── */}
      <div style={{ width: "95%", margin: "0 auto", padding: "56px 16px" }}>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10">
          {/* <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-x-12 gap-y-16"> */}

          {/* INFO */}
          <div className="ft-anim-1">
            <ColHeading>Info</ColHeading>
            <ul className="space-y-2.5 list-none p-0 m-0">
              <li><FooterLink to="/contact">Contact Us</FooterLink></li>
              <li><FooterLink to="/about">About Us</FooterLink></li>
              <li><FooterLink to="/orders">Shipping &amp; Returns</FooterLink></li>
              <li><FooterLink to="/about">Our Quality</FooterLink></li>
              <li><FooterLink to="#">Leather Waxing</FooterLink></li>
              <li><FooterLink to="#">Sizing Chart</FooterLink></li>
              <li><FooterLink to="/bestseller">Best Sellers</FooterLink></li>
            </ul>
          </div>

          {/* WOMEN */}
          {/* <div className="ft-anim-2">
            <ColHeading>Women's</ColHeading>
            <ul className="space-y-2.5 list-none p-0 m-0">
              {categories
                .find((c) => c.categoryName === "Women's")
                ?.subCategories?.map((sub) => (
                  <li key={sub}>
                    <FooterLink
                      to={buildUrl("Women's", sub)}
                    >
                      {sub}
                    </FooterLink>
                  </li>
                ))}
            </ul>
          </div> */}

          {/* MEN */}
          {/* <div className="ft-anim-3">
            <ColHeading>Men's</ColHeading>
            <ul className="space-y-2.5 list-none p-0 m-0">
              {categories
                .find((c) => c.categoryName === "Men's")
                ?.subCategories?.map((sub) => (
                  <li key={sub}>
                    <FooterLink
                      to={buildUrl("Men's", sub)}
                    >
                      {sub}
                    </FooterLink>
                  </li>
                ))}
            </ul>
          </div> */}

          {/* OTHERS */}
          {/* <div className="ft-anim-4">
            <ColHeading>Pillow Covers</ColHeading>
            <ul className="space-y-2.5 list-none p-0 m-0">
              {categories.find((c) => c.categoryName === "Pillow Covers")?.subCategories?.map((sub) => (
                <li key={sub}>
                  <FooterLink to={buildUrl("Pillow Covers", sub)}>
                    {sub}
                  </FooterLink>
                </li>
              ))}
            </ul>
          </div> */}

          {categories.map((category) => (
            <div key={category._id}>
              <ColHeading>{category.categoryName}</ColHeading>

              <ul className="space-y-2.5 list-none p-0 m-0">
                {category.subCategories?.map((sub) => (
                  <li key={sub}>
                    <FooterLink
                      to={buildUrl(category.categoryName, sub)}
                    >
                      {sub}
                    </FooterLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* NEW ARRIVALS */}
          <div className="ft-anim-5">
            <ColHeading>New Arrivals</ColHeading>
            <ul className="space-y-2.5 list-none p-0 m-0">
              {/* <li><FooterLink href="/collection?category=Men&sub=Topwear">Men's New Arrivals</FooterLink></li>
              <li><FooterLink href="/collection?category=Women&sub=Topwear">Women's New Arrivals</FooterLink></li> */}
              {categories.slice(0, 3).map((category) => (
                category.subCategories?.length > 0 && (
                  <FooterLink
                    key={category._id}
                    to={buildUrl(
                      category.categoryName,
                      category.subCategories[0]
                    )}
                  >
                    {/* {category.categoryName}'s Arrivals */}
                    {category.categoryName === "Men"
                      ? "Men's Arrivals"
                      : category.categoryName === "Women"
                        ? "Women's Arrivals"
                        : `${category.categoryName} Arrivals`}
                  </FooterLink>
                )
              ))}
            </ul>

            {/* Trust badges */}
            <div style={{ marginTop: 32 }} className="space-y-3">
              {trustBadges.map((b, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ fontSize: 9, color: C.goldMid }}>{b.icon}</span>
                  <span style={{
                    fontSize: 10, color: C.textMid,
                    letterSpacing: "0.1em", fontFamily: "Georgia, serif",
                  }}>{b.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* NEWSLETTER */}
          <div className="ft-anim-6">
            <ColHeading>Newsletter</ColHeading>
            <p style={{
              fontSize: 12, color: C.textMid, fontStyle: "italic",
              lineHeight: 1.75, marginBottom: 16,
            }}>
              Join our inner circle for early access to new drops, private sales &amp; artisan stories.
            </p>

            {submitted ? (
              <div className="ft-success" style={{
                display: "flex", alignItems: "center", gap: 8,
                fontSize: 11, color: C.success, fontStyle: "italic",
                fontFamily: "Georgia, serif", padding: "10px 0",
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke={C.success} strokeWidth="1.4" />
                  <path d="M7 12l4 4 6-7" stroke={C.success} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                You're on the list!
              </div>
            ) : (
              <form onSubmit={onSubmitHandler} style={{ position: "relative", marginBottom: 20 }}>
                <input
                  type="email"
                  name="email"
                  placeholder="Your email address..."
                  required
                  className="ft-newsletter-input"
                />
                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    position: "absolute", right: 0, top: 0, bottom: 0,
                    padding: "0 14px",
                    background: `linear-gradient(135deg, ${C.goldMid}, ${C.goldHi})`,
                    border: "none", cursor: "pointer",
                    color: C.bgDeep,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    transition: "opacity 0.2s",
                    opacity: loading ? 0.5 : 1,
                  }}
                >
                  {loading
                    ? <span style={{ fontSize: 10, letterSpacing: "0.1em" }}>...</span>
                    : <IconArrow />
                  }
                </button>
              </form>
            )}

            {/* Social icons */}
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 16, flexWrap: "wrap" }}>
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noreferrer"
                  className="ft-social-btn"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div style={{ borderTop: `1px solid ${C.goldFaint}` }}>

        {/* Marquee strip */}
        <div style={{
          overflow: "hidden",
          borderBottom: `1px solid ${C.goldFaint}`,
          padding: "10px 0",
        }}>
          <div className="inline-block whitespace-nowrap marquee-track">
            {Array(6).fill("◆  PREMIUM LAMBSKIN  ◆  HANDCRAFTED IN ITALY  ◆  EST. 2001  ◆  D DOLLY LAMB  ").map((t, i) => (
              <span key={i} style={{
                fontSize: 9, letterSpacing: "0.22em",
                color: "rgba(212,168,83,0.45)",
                fontFamily: "Georgia, serif",
              }}>{t}</span>
            ))}
          </div>
        </div>

        {/* Copyright row */}
        <div style={{
          width: "95%", margin: "0 auto",
          padding: "18px 16px",
          display: "flex", flexWrap: "wrap",
          alignItems: "center", justifyContent: "space-between", gap: 12,
        }}>
          <p style={{
            fontSize: 10, color: C.textDim,
            letterSpacing: "0.14em",
            fontFamily: "Georgia, serif", margin: 0,
          }}>
            COPYRIGHT © 2025 <span style={{ color: C.goldMid }}>DDOLLYLAMB.COM</span> — ALL RIGHTS RESERVED
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            {["Privacy Policy", "Terms of Use", "Cookies"].map((item, i) => (
              <a
                key={i}
                href="#"
                style={{
                  fontSize: 9, color: C.textDim,
                  letterSpacing: "0.14em", textDecoration: "none",
                  fontFamily: "Georgia, serif",
                  transition: "color 0.2s",
                }}
                onMouseEnter={e => e.currentTarget.style.color = C.goldHi}
                onMouseLeave={e => e.currentTarget.style.color = C.textDim}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── SHIMMER BOTTOM LINE — bookend with top shimmer ── */}
      <div className="ft-shimmer-bar" style={{ height: "1.5px" }} />

    </footer >
  );
};

export default Footer;




// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// /* ── Premium SVG Social Icons ─────────────────── */
// const IconEmail = () => (
//   <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
//     <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.4" />
//     <path d="M2 7l10 7 10-7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
//   </svg>
// );
// const IconFacebook = () => (
//   <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
//     <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
//       stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
//   </svg>
// );
// const IconInstagram = () => (
//   <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
//     <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.4" />
//     <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.4" />
//     <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
//   </svg>
// );
// const IconTwitter = () => (
//   <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
//     <path d="M4 4l16 16M4 20L20 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
//     <path d="M20 4H16l-4 5-4-5H4l7 9-7 7h4l4-5 4 5h4l-7-9 7-7z"
//       stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
//   </svg>
// );
// const IconArrow = () => (
//   <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
//     <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//   </svg>
// );

// /* ─── Color tokens — exactly matched to Navbar ── */
// const C = {
//   bgLight: "#FFFFFF",
//   bgSoft: "#F8F7FF",
//   bgBottom: "#F0EEFF",        /* ✅ light indigo — replaces dark navy bottom bar */
//   indigo: "#5B5BD6",
//   indigoLt: "#818CF8",
//   indigoDk: "#4338CA",
//   textNavy: "#1E1B4B",        /* ✅ same as navbar primary — dark & readable */
//   textMuted: "#4B5563",
//   textFaint: "#6B7280",
//   borderHi: "rgba(91,91,214,0.20)",
//   borderLo: "rgba(91,91,214,0.10)",
//   borderMid: "rgba(91,91,214,0.15)",
//   gold: "#C8924A",
//   goldDk: "#8A5E2D",
//   success: "#059669",
// };

// /* ── Footer Link — dark text matching navbar ── */
// const FooterLink = ({ to, href, children }) => {
//   const content = (
//     <>
//       <span className="ft-link-dash" />
//       <span className="ft-link-text">{children}</span>
//     </>
//   );
//   return to ? (
//     <Link to={to} className="ft-link-item">{content}</Link>
//   ) : (
//     <a href={href || "#"} className="ft-link-item">{content}</a>
//   );
// };

// /* ── Column Heading ── */
// const ColHeading = ({ children }) => (
//   <div style={{ marginBottom: 20 }}>
//     <p style={{
//       fontSize: 9, letterSpacing: "0.32em", fontWeight: 700,
//       color: C.indigo, textTransform: "uppercase",
//       fontFamily: "Montserrat, sans-serif", margin: "0 0 10px",
//     }}>
//       {children}
//     </p>
//     <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
//       <span style={{
//         display: "block", height: 1, width: 28,
//         background: `linear-gradient(to right, ${C.indigo}, transparent)`,
//       }} />
//       <span style={{
//         display: "block", width: 4, height: 4,
//         transform: "rotate(45deg)", flexShrink: 0,
//         background: C.indigo, opacity: 0.40,
//       }} />
//     </div>
//   </div>
// );

// const Footer = () => {
//   const isDevelopment = import.meta.env.MODE === 'development';
//   const backendUrl = isDevelopment
//     ? import.meta.env.VITE_BACKEND_URL_D
//     : import.meta.env.VITE_BACKEND_URL;

//   const [loading, setLoading] = useState(false);
//   const [submitted, setSubmitted] = useState(false);

//   const onSubmitHandler = async (event) => {
//     event.preventDefault();
//     const email = event.target.email.value;
//     setLoading(true);
//     try {
//       const res = await fetch(`${backendUrl}/api/user/send-mail`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email }),
//       });
//       const data = await res.json();
//       if (data.success) {
//         setSubmitted(true);
//         event.target.reset();
//         setTimeout(() => setSubmitted(false), 4000);
//       } else {
//         alert("⚠️ " + data.message);
//       }
//     } catch (error) {
//       alert("❌ " + error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const socials = [
//     { icon: <IconEmail />, label: "Email", href: "mailto:info@ddollylamb.com" },
//     { icon: <IconFacebook />, label: "Facebook", href: "#" },
//     { icon: <IconInstagram />, label: "Instagram", href: "#" },
//     { icon: <IconTwitter />, label: "X / Twitter", href: "#" },
//   ];

//   const trustBadges = [
//     { icon: "✦", text: "Grade A Lambskin" },
//     { icon: "◈", text: "Handcrafted Quality" },
//     { icon: "◆", text: "Est. 2001" },
//   ];

//   return (
//     <footer style={{
//       background: C.bgLight,
//       borderTop: `1px solid ${C.indigo}`,
//       fontFamily: "Montserrat, sans-serif",
//     }}>

//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');

//         @keyframes fadeUp {
//           from { opacity: 0; transform: translateY(14px); }
//           to   { opacity: 1; transform: translateY(0); }
//         }
//         @keyframes marqueeScroll {
//           0%   { transform: translateX(0); }
//           100% { transform: translateX(-50%); }
//         }
//         @keyframes checkIn {
//           from { opacity: 0; transform: scale(0.85); }
//           to   { opacity: 1; transform: scale(1); }
//         }
//         @keyframes shimmerIndigo {
//           0%   { background-position: -200% center; }
//           100% { background-position: 200% center; }
//         }

//         .ft-anim-1 { animation: fadeUp 0.5s ease 0.05s both; }
//         .ft-anim-2 { animation: fadeUp 0.5s ease 0.12s both; }
//         .ft-anim-3 { animation: fadeUp 0.5s ease 0.19s both; }
//         .ft-anim-4 { animation: fadeUp 0.5s ease 0.26s both; }
//         .ft-anim-5 { animation: fadeUp 0.5s ease 0.33s both; }
//         .ft-anim-6 { animation: fadeUp 0.5s ease 0.40s both; }
//         .ft-success { animation: checkIn 0.4s ease both; }
//         .marquee-track { animation: marqueeScroll 30s linear infinite; }

//         /* Shimmer — indigo, exactly matches navbar */
//         .ft-shimmer-bar {
//           background: linear-gradient(90deg,
//             transparent 0%,
//             rgba(91,91,214,0.25) 15%,
//             #5B5BD6 40%,
//             #818CF8 50%,
//             #5B5BD6 60%,
//             rgba(91,91,214,0.25) 85%,
//             transparent 100%);
//           background-size: 200% auto;
//           animation: shimmerIndigo 3.5s linear infinite;
//         }

//         /* ✅ Footer links — dark #1E1B4B like navbar, hover → indigo */
//         .ft-link-item {
//           text-decoration: none;
//           display: flex;
//           align-items: center;
//           gap: 8px;
//           padding: 2px 0;
//           cursor: pointer;
//         }
//         .ft-link-dash {
//           display: block;
//           width: 10px;
//           height: 1.5px;
//           flex-shrink: 0;
//           background: #1E1B4B;
//           opacity: 0.30;
//           transition: width 0.25s ease, background 0.25s ease, opacity 0.25s ease;
//         }
//         .ft-link-text {
//           font-size: 12px;
//           font-family: Montserrat, sans-serif;
//           font-weight: 500;
//           letter-spacing: 0.04em;
//           color: #1E1B4B;
//           transition: color 0.2s ease, transform 0.2s ease;
//           display: inline-block;
//         }
//         .ft-link-item:hover .ft-link-dash {
//           width: 16px;
//           background: #5B5BD6;
//           opacity: 1;
//         }
//         .ft-link-item:hover .ft-link-text {
//           color: #5B5BD6;
//           transform: translateX(2px);
//         }

//         /* Newsletter input */
//         .ft-newsletter-input {
//           background: #F8F7FF;
//           border: 1px solid rgba(91,91,214,0.20);
//           color: #1E1B4B;
//           font-family: Montserrat, sans-serif;
//           font-size: 12px;
//           letter-spacing: 0.04em;
//           outline: none;
//           width: 100%;
//           padding: 11px 44px 11px 14px;
//           transition: border-color 0.3s, box-shadow 0.3s, background 0.3s;
//         }
//         .ft-newsletter-input::placeholder { color: #9CA3AF; }
//         .ft-newsletter-input:focus {
//           background: #FFFFFF;
//           border-color: #5B5BD6;
//           box-shadow: 0 0 0 3px rgba(91,91,214,0.10);
//         }

//         /* Social icon buttons */
//         .ft-social-btn {
//           width: 36px; height: 36px;
//           border: 1px solid rgba(91,91,214,0.20);
//           display: flex; align-items: center; justify-content: center;
//           color: #6B7280;
//           text-decoration: none;
//           transition: border-color 0.3s, color 0.3s, background 0.3s, transform 0.2s;
//         }
//         .ft-social-btn:hover {
//           border-color: #5B5BD6;
//           color: #5B5BD6;
//           background: rgba(91,91,214,0.07);
//           transform: translateY(-2px);
//         }

//         /* ✅ Policy links — dark on light bottom bar */
//         .ft-policy-link {
//           font-size: 9px;
//           letter-spacing: 0.14em;
//           text-decoration: none;
//           font-family: Montserrat, sans-serif;
//           font-weight: 600;
//           text-transform: uppercase;
//           color: #6B7280;
//           transition: color 0.2s;
//         }
//         .ft-policy-link:hover { color: #5B5BD6; }
//       `}</style>

//       {/* ── TOP SHIMMER ── */}
//       <div className="ft-shimmer-bar" style={{ height: "1.5px" }} />

//       {/* ── BRAND HERO ── */}
//       <div style={{
//         textAlign: "center",
//         padding: "20px 24px 20px",
//         background: `linear-gradient(180deg, ${C.bgSoft} 0%, ${C.bgLight} 100%)`,
//         borderBottom: `1px solid ${C.borderLo}`,
//       }}>
//         <div style={{ display: "flex", justifyContent: "center", marginBottom: 16 }}>
//           <svg width="48" height="48" viewBox="0 0 42 42" fill="none">
//             <rect x="6" y="6" width="30" height="30" rx="1"
//               transform="rotate(45 21 21)" stroke={C.goldDk} strokeWidth="1.4" fill="none" />
//             <rect x="11" y="11" width="20" height="20" rx="0.5"
//               transform="rotate(45 21 21)" stroke={C.gold} strokeWidth="0.7" fill="none" opacity="0.4" />
//             <text x="21" y="26.5" fontFamily="Montserrat,sans-serif" fontSize="13"
//               fontWeight="600" fill={C.gold} textAnchor="middle">D</text>
//           </svg>
//         </div>

//         <h2 style={{
//           fontFamily: "Georgia, serif", fontWeight: 400,
//           fontSize: "clamp(1.5rem,4vw,2.6rem)",
//           color: C.textNavy, letterSpacing: "0.08em",
//           margin: "0 0 6px",
//         }}>
//           D DOLLY <span style={{ color: C.indigo }}>LAMB</span>
//         </h2>

//         <p style={{
//           fontSize: 9, letterSpacing: "0.42em", color: C.indigoLt,
//           marginBottom: 18, fontFamily: "Montserrat, sans-serif", fontWeight: 600,
//         }}>
//           ARTISAN LEATHER ATELIER · EST. 2001
//         </p>

//         <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12 }}>
//           <span style={{ display: "block", height: 2, width: 64, background: `linear-gradient(to right, transparent, ${C.indigo})` }} />
//           <span style={{ display: "block", width: 6, height: 6, transform: "rotate(45deg)", background: C.indigo, flexShrink: 0, opacity: 0.85 }} />
//           <span style={{ display: "block", height: 2, width: 64, background: `linear-gradient(to left, transparent, ${C.indigo})` }} />
//         </div>
//       </div>

//       {/* ── MAIN LINK GRID ── */}
//       <div style={{ width: "95%", margin: "0 auto", padding: "52px 16px 48px" }}>
//         <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-10">

//           {/* INFO */}
//           <div className="ft-anim-1">
//             <ColHeading>Info</ColHeading>
//             <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
//               <li><FooterLink to="/contact">Contact Us</FooterLink></li>
//               <li><FooterLink to="/about">About Us</FooterLink></li>
//               <li><FooterLink to="/orders">Shipping &amp; Returns</FooterLink></li>
//               <li><FooterLink to="/about">Our Quality</FooterLink></li>
//               <li><FooterLink to="#">Leather Waxing</FooterLink></li>
//               <li><FooterLink to="#">Sizing Chart</FooterLink></li>
//               <li><FooterLink to="/bestseller">Best Sellers</FooterLink></li>
//             </ul>
//           </div>

//           {/* WOMEN'S */}
//           <div className="ft-anim-2">
//             <ColHeading>Women's</ColHeading>
//             <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
//               <li><FooterLink to="/collection?category=Women&sub=Bomber%20Biker%20Jacket">Bomber Biker Jacket</FooterLink></li>
//               <li><FooterLink to="/collection?category=Women&sub=Moto%20Biker%20Jacket">Moto Biker Jacket</FooterLink></li>
//               <li><FooterLink to="/collection?category=Women&sub=Racing%20Coat">Racing Coat</FooterLink></li>
//               <li><FooterLink to="/collection?category=Women&sub=Women%20Winter%20Wear">Women Winter Wear</FooterLink></li>
//               <li><FooterLink to="/collection?category=Women&sub=Women%20Night%20Dress">Women Night Dress</FooterLink></li>
//               <li><FooterLink to="/collection?category=Women&sub=Leather%20Pencil%20Skirt">Leather Pencil Skirt</FooterLink></li>
//               <li><FooterLink to="/collection?category=Women&sub=Leather%20Full%20Skirt">Leather Full Skirt</FooterLink></li>
//               <li><FooterLink to="/collection?category=Women&sub=Slim%20Bodycon%20Skirt">Slim Bodycon Skirt</FooterLink></li>
//             </ul>
//           </div>

//           {/* MEN'S */}
//           <div className="ft-anim-3">
//             <ColHeading>Men's</ColHeading>
//             <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
//               <li><FooterLink to="/collection?category=Men&sub=Biker%20Jacket">Biker Jacket</FooterLink></li>
//               <li><FooterLink to="/collection?category=Men&sub=Bomber%20Biker%20Jacket">Bomber Biker Jacket</FooterLink></li>
//               <li><FooterLink to="/collection?category=Men&sub=Moto%20Biker%20Jacket">Moto Biker Jacket</FooterLink></li>
//             </ul>
//           </div>

//           {/* OTHERS */}
//           <div className="ft-anim-4">
//             <ColHeading>Others</ColHeading>
//             <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
//               <li><FooterLink to="/collection?category=Others&sub=Pillow">Pillow Covers</FooterLink></li>
//               <li><FooterLink to="/collection?category=Others&sub=Cushion Cover">Cushion Cover</FooterLink></li>
//               <li><FooterLink to="/collection?category=Others&sub=Aprons">Aprons</FooterLink></li>
//               <li><FooterLink to="/collection?category=Others&sub=Desk Mat">Desk Mat</FooterLink></li>
//               <li><FooterLink to="/collection?category=Others&sub=Chair Cover">Chair Cover</FooterLink></li>
//             </ul>
//           </div>

//           {/* NEW ARRIVALS */}
//           <div className="ft-anim-5">
//             <ColHeading>New Arrivals</ColHeading>
//             <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
//               <li><FooterLink href="/collection?category=Men&sub=Topwear">Men's New Arrivals</FooterLink></li>
//               <li><FooterLink href="/collection?category=Women&sub=Topwear">Women's New Arrivals</FooterLink></li>
//             </ul>

//             <div style={{ marginTop: 28, display: "flex", flexDirection: "column", gap: 10 }}>
//               {trustBadges.map((b, i) => (
//                 <div key={i} style={{ display: "flex", alignItems: "center", gap: 8 }}>
//                   <span style={{ fontSize: 9, color: C.indigo }}>{b.icon}</span>
//                   <span style={{
//                     fontSize: 11.5, color: C.textNavy,
//                     letterSpacing: "0.06em",
//                     fontFamily: "Montserrat, sans-serif",
//                     fontWeight: 500,
//                   }}>{b.text}</span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* NEWSLETTER */}
//           <div className="ft-anim-6">
//             <ColHeading>Newsletter</ColHeading>
//             <p style={{
//               fontSize: 11.5, color: C.textMuted,
//               lineHeight: 1.8, marginBottom: 16,
//               fontFamily: "Montserrat, sans-serif", fontWeight: 400,
//             }}>
//               Join our inner circle for early access to new drops, private sales &amp; artisan stories.
//             </p>

//             {submitted ? (
//               <div className="ft-success" style={{
//                 display: "flex", alignItems: "center", gap: 8,
//                 fontSize: 11, color: C.success,
//                 fontFamily: "Montserrat, sans-serif", padding: "10px 0",
//               }}>
//                 <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
//                   <circle cx="12" cy="12" r="10" stroke={C.success} strokeWidth="1.4" />
//                   <path d="M7 12l4 4 6-7" stroke={C.success} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//                 </svg>
//                 You're on the list!
//               </div>
//             ) : (
//               <form onSubmit={onSubmitHandler} style={{ position: "relative", marginBottom: 20 }}>
//                 <input
//                   type="email" name="email"
//                   placeholder="Your email address..."
//                   required className="ft-newsletter-input"
//                 />
//                 <button type="submit" disabled={loading} style={{
//                   position: "absolute", right: 0, top: 0, bottom: 0,
//                   padding: "0 14px",
//                   background: `linear-gradient(135deg, ${C.indigoDk}, ${C.indigo})`,
//                   border: "none", cursor: "pointer", color: "#FFFFFF",
//                   display: "flex", alignItems: "center", justifyContent: "center",
//                   transition: "opacity 0.2s",
//                   opacity: loading ? 0.5 : 1,
//                 }}>
//                   {loading ? <span style={{ fontSize: 10, color: "#fff" }}>...</span> : <IconArrow />}
//                 </button>
//               </form>
//             )}

//             <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 16, flexWrap: "wrap" }}>
//               {socials.map((s, i) => (
//                 <a key={i} href={s.href} aria-label={s.label}
//                   target="_blank" rel="noreferrer" className="ft-social-btn">
//                   {s.icon}
//                 </a>
//               ))}
//             </div>
//           </div>

//         </div>
//       </div>

//       {/* ✅ BOTTOM BAR — light indigo tint (#F0EEFF), NOT dark navy */}
//       <div style={{
//         background: C.bgBottom,
//         borderTop: `1px solid ${C.borderMid}`,
//       }}>

//         {/* Marquee */}
//         <div style={{
//           overflow: "hidden",
//           borderBottom: `1px solid ${C.borderLo}`,
//           padding: "10px 0",
//         }}>
//           <div className="inline-block whitespace-nowrap marquee-track">
//             {Array(6).fill("◆  PREMIUM LAMBSKIN  ◆  HANDCRAFTED IN ITALY  ◆  EST. 2001  ◆  D DOLLY LAMB  ").map((t, i) => (
//               <span key={i} style={{
//                 fontSize: 9, letterSpacing: "0.22em",
//                 color: C.indigo,
//                 fontFamily: "Montserrat, sans-serif",
//                 fontWeight: 600,
//               }}>{t}</span>
//             ))}
//           </div>
//         </div>

//         {/* Copyright */}
//         <div style={{
//           width: "95%", margin: "0 auto",
//           padding: "16px 16px",
//           display: "flex", flexWrap: "wrap",
//           alignItems: "center", justifyContent: "space-between", gap: 12,
//         }}>
//           <p style={{
//             fontSize: 10, color: C.textFaint,
//             letterSpacing: "0.12em",
//             fontFamily: "Montserrat, sans-serif",
//             fontWeight: 500, textTransform: "uppercase",
//             margin: 0,
//           }}>
//             Copyright © 2025{" "}
//             <span style={{ color: C.indigo, fontWeight: 700 }}>DDOLLYLAMB.COM</span>
//             {" "}— All Rights Reserved
//           </p>
//           <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
//             {["Privacy Policy", "Terms of Use", "Cookies"].map((item, i) => (
//               <a key={i} href="#" className="ft-policy-link">{item}</a>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* ── BOTTOM SHIMMER ── */}
//       <div className="ft-shimmer-bar" style={{ height: "1.5px" }} />

//     </footer>
//   );
// };

// export default Footer;