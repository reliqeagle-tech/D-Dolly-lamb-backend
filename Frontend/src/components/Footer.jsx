// import React,{useState} from 'react';
// import { FaEnvelope, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'; // Social icons from react-icons
// import { Link } from 'react-router-dom';
// import NewsletterBox from './NewsletterBox';


// const Footer = () => {
//   const isDevelopment = import.meta.env.MODE === 'development'
//     const backendUrl = isDevelopment ? import.meta.env.VITE_BACKEND_URL_D : import.meta.env.VITE_BACKEND_URL
//     const [loading, setLoading] = useState(false);

//     const onSubmitHandler = async (event) => {
//       event.preventDefault();
//       const email = event.target.email.value;

//       console.log(backendUrl)
//       setLoading(true);
//       try {
//         const res = await fetch(`${backendUrl}/api/user/send-mail`, {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ email }),
//         });

//         const data = await res.json();

//         if (data.success) {
//           alert("🎉 Subscription successful! Check your email.");
//           event.target.reset();
//         } else {
//           alert("⚠️ Error: " + data.message);
//         }
//       } catch (error) {
//         alert("❌ Error subscribing: " + error.message);
//       } finally {
//         setLoading(false);
//       }
//     };
//   return (
//     <footer className="bg-gradient-to-r from-[#340000] via-[#340000] to-black text-white py-12 px-4">
//   <div className="w-[95%] mx-auto px-4 sm:px-6 lg:px-10">

//     {/* Main Grid */}
//     <div className="
//       grid
//       grid-cols-1
//       sm:grid-cols-2
//       md:grid-cols-3
//       lg:grid-cols-6
//       gap-10
//       mb-12
//     ">
//       {/* Column 1 - INFO */}
//       <div className="space-y-4 text-center sm:text-left">
//         <h4 className="text-lg font-semibold text-white uppercase tracking-wide">INFO</h4>
//         <ul className="space-y-2 text-sm text-gray-300">
//           <li><Link to="/contact" className="hover:text-[#f7c568]">Contact Us</Link></li>
//           <li><Link to="/about" className="hover:text-[#f7c568]">About Us</Link></li>
//           <li><Link to="/orders" className="hover:text-[#f7c568]">Shipping & Returns</Link></li>
//           <li><Link to="/about" className="hover:text-[#f7c568]">Our Quality</Link></li>
//           {/* <li><Link to="" className="hover:text-white">Customer Gallery</Link></li>
//           <li><Link to="/CmInchConverter" className="hover:text-white">Cm to Inch Converter</Link></li> */}
//           <li><Link to="" className="hover:text-[#f7c568]">Leather Waxing</Link></li>
//           <li><Link to="" className="hover:text-[#f7c568]">Sizing Chart</Link></li>
//           <li><Link to="/bestseller" className="hover:text-[#f7c568]">Best Sellers</Link></li>
//           {/* <li><Link to="" className="hover:text-white">Testimonials</Link></li> */}
//         </ul>
//       </div>

//       {/* Column 2 - Women */}
//       <div className="space-y-4 text-center sm:text-left">
//         <h4 className="text-lg font-semibold text-white uppercase tracking-wide">Women's Collection</h4>
//         <ul className="space-y-2 text-sm text-gray-300">
//           <li><Link to="/collection?category=Women&sub=Topwear" className="hover:text-[#f7c568]">Women Leather Jackets</Link></li>
//           <li><Link to="/collection?category=Women&sub=Topwear" className="hover:text-[#f7c568]">Bomber Biker Jacket</Link></li>
//           <li><Link to="/collection?category=Women&sub=Topwear" className="hover:text-[#f7c568]">Moto Biker Jacket</Link></li>
//           <li><Link to="/collection?category=Women&sub=Topwear" className="hover:text-[#f7c568]">Women Winter Wear</Link></li>
//           <li><Link to="/collection?category=Women&sub=Topwear" className="hover:text-[#f7c568]">Women Night Dress</Link></li>
//           <li><Link to="/collection?category=Women&sub=Bottomwear" className="hover:text-[#f7c568]">Leather Pencil Skirt</Link></li>
//           <li><Link to="/collection?category=Women&sub=Bottomwear" className="hover:text-[#f7c568]">Leather Full Skirt</Link></li>
//           <li><Link to="/collection?category=Women&sub=Bottomwear" className="hover:text-[#f7c568]">Slim Bodycon Skirt</Link></li>
//         </ul>
//       </div>

//       {/* Column 3 - Men */}
//       <div className="space-y-4 text-center sm:text-left">
//         <h4 className="text-lg font-semibold text-white uppercase tracking-wide">Men's Collection</h4>
//         <ul className="space-y-2 text-sm text-gray-300">
//           <li><Link to="/collection?category=Men&sub=Topwear" className="hover:text-[#f7c568]">Men Leather Jackets</Link></li>
//           <li><Link to="/collection?category=Men&sub=Topwear" className="hover:text-[#f7c568]">Coats</Link></li>
//           <li><Link to="/collection?category=Men&sub=Topwear" className="hover:text-[#f7c568]">Bomber Biker Jacket</Link></li>
//           {/* <li><Link to="/collection?category=Men&sub=Topwear" className="hover:text-white">Leather Long Coats</Link></li>
//           <li><Link to="/collection?category=Men&sub=Topwear" className="hover:text-white">Leather Suits</Link></li>
//           <li><Link to="/collection?category=Men&sub=Bottomwear" className="hover:text-white">Leather Shorts</Link></li>
//           <li><Link to="/collection?category=Men&sub=Celebrity" className="hover:text-white">Celebrity Leather Jackets</Link></li>
//           <li><Link to="/collection?category=Men&sub=Topwear" className="hover:text-white">Leather Blazers</Link></li> */}
//         </ul>
//       </div>

//       {/* Column 4 - Accessories */}
//       <div className="space-y-4 text-center sm:text-left">
//         <h4 className="text-lg font-semibold text-white uppercase tracking-wide">Others</h4>
//         <ul className="space-y-2 text-sm text-gray-300">
//           <li><Link to="/collection?category=Others&sub=Pillow" className="hover:text-[#f7c568]">Pillow Covers</Link></li>
//           <li><Link to="/collection?category=Others&sub=Cushion Cover" className="hover:text-[#f7c568]">Cushion Cover</Link></li>
//           <li><Link to="/collection?category=Others&sub=Aprons" className="hover:text-[#f7c568]">Aprons</Link></li>
//           <li><Link to="/collection?category=Others&sub=Desk Mat" className="hover:text-[#f7c568]">Desk Mat</Link></li>
//           <li><Link to="/collection?category=Others&sub=Chair Cover" className="hover:text-[#f7c568]">Recliner Chair Headrest Cover</Link></li>
//           {/* <li><a href="#" className="hover:text-white">Leather Hood</a></li>
//           <li><a href="#" className="hover:text-white">Leather Belt</a></li>
//           <li><a href="#" className="hover:text-white">Pillow Cover</a></li> */}
//         </ul>
//       </div>
//       {/* Column 5 - New Arrivals */}
//       <div className="space-y-4 text-center sm:text-left">
//         <h4 className="text-lg font-semibold text-white uppercase tracking-wide">New Arrivals</h4>
//         <ul className="space-y-2 text-sm text-gray-300">
//           <li><a href="/collection?category=Men&sub=Topwear" className="hover:text-[#f7c568]">Men's New Arrivals</a></li>
//           <li><a href="/collection?category=Women&sub=Topwear" className="hover:text-[#f7c568]">Women's New Arrivals</a></li>
//         </ul>
//       </div>

//       {/* Column 6 - Newsletter */}
//       <div className="space-y-4 text-center sm:text-left">
//         <h4 className="text-lg font-semibold text-white uppercase tracking-wide">Newsletter</h4>
//         <p className="text-sm text-gray-300">
//           Join the D Dolly Lamb mailing list for the latest arrivals, events, collections, and offers.
//         </p>

//         <form onSubmit={onSubmitHandler} className="relative">
//           <input
//             type="email"
//             name="email"
//             placeholder="Email address"
//             className="w-full px-3 py-2 bg-black border border-gray-700 rounded-md text-white text-sm focus:outline-none focus:ring-2 focus:ring-white"
//           />
//           <button
//             type="submit"
//             disabled={loading}
//             className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300 hover:text-white"
//           >
//             &gt;
//           </button>
//         </form>

//         <div className="flex justify-center sm:justify-start space-x-4 pt-2">
//           <FaEnvelope size={16} className="text-white hover:text-[#f7c568]" />
//           <FaFacebookF size={16} className="text-white hover:text-[#f7c568]" />
//           <FaInstagram size={16} className="text-white hover:text-[#f7c568]" />
//           <FaTwitter size={16} className="text-white hover:text-[#f7c568]" />
//         </div>
//       </div>
//     </div>

//     {/* Bottom copyright */}
//     <div className="border-t border-gray-200 pt-6 text-center text-xs text-white">
//       COPYRIGHT © 2025 ddollylamb.com — All Rights Reserved — Privacy Policy
//     </div>
//   </div>
// </footer>

//   );
// };

// export default Footer;




import React, { useState } from 'react';
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

/* ── Footer Link with animated rule ────────────── */
const FooterLink = ({ to, href, children }) => {
  const cls = "group flex items-center gap-2 text-xs text-[#7a6050] hover:text-[#f7c568] transition-all duration-300 leading-relaxed";
  const inner = (
    <>
      <span className="block w-3 h-px flex-shrink-0 transition-all duration-300 group-hover:w-5"
        style={{ background: "rgba(200,151,58,0.4)" }} />
      <span className="transition-all duration-200 group-hover:translate-x-0.5"
        style={{ fontFamily: "Georgia, serif", letterSpacing: "0.04em" }}>
        {children}
      </span>
    </>
  );
  return to
    ? <Link to={to} className={cls}>{inner}</Link>
    : <a href={href || "#"} className={cls}>{inner}</a>;
};

/* ── Column heading ─────────────────────────────── */
const ColHeading = ({ children }) => (
  <div className="mb-5">
    <p style={{
      fontSize: "9px", letterSpacing: "0.32em", fontWeight: 600,
      color: "#c8973a", textTransform: "uppercase",
      fontFamily: "Montserrat, Georgia, serif", marginBottom: "10px"
    }}>
      {children}
    </p>
    <div className="flex items-center gap-2">
      <span className="block h-px w-8" style={{ background: "linear-gradient(to right, #c8973a, transparent)" }} />
      <span className="block w-1 h-1 rotate-45 flex-shrink-0" style={{ background: "#c8973a", opacity: 0.5 }} />
    </div>
  </div>
);

const Footer = () => {
  const isDevelopment = import.meta.env.MODE === 'development';
  const backendUrl = isDevelopment
    ? import.meta.env.VITE_BACKEND_URL_D
    : import.meta.env.VITE_BACKEND_URL;

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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

  return (
    <footer
      style={{
        background: "linear-gradient(180deg, #0d0703 0%, #1a0f0a 100%)",
        borderTop: "1px solid rgba(200,151,58,0.18)",
        fontFamily: "Georgia, serif",
      }}
    >
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes marqueeScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .ft-social-btn {
          width: 36px; height: 36px;
          border: 1px solid rgba(200,151,58,0.22);
          border-radius: 2px;
          display: flex; align-items: center; justify-content: center;
          color: #7a6050;
          transition: all 0.3s;
          cursor: pointer; background: transparent;
          text-decoration: none;
        }
        .ft-social-btn:hover {
          border-color: #c8973a;
          color: #f7c568;
          background: rgba(200,151,58,0.08);
          transform: translateY(-3px);
          box-shadow: 0 6px 20px rgba(200,151,58,0.15);
        }
        .ft-input {
          width: 100%; padding: 11px 44px 11px 16px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(200,151,58,0.2);
          border-radius: 2px;
          color: #f5ede0; font-size: 12px;
          font-family: Georgia, serif; font-style: italic;
          outline: none; transition: border-color 0.3s, box-shadow 0.3s;
          letter-spacing: 0.04em;
        }
        .ft-input::placeholder { color: #5a4030; }
        .ft-input:focus {
          border-color: #c8973a;
          box-shadow: 0 0 0 3px rgba(200,151,58,0.08);
        }
        .ft-submit {
          position: absolute; right: 0; top: 0; bottom: 0;
          padding: 0 14px;
          background: linear-gradient(135deg, #c8973a, #f7c568);
          border: none; border-radius: 0 2px 2px 0;
          color: #1a0f0a; cursor: pointer;
          transition: opacity 0.2s, transform 0.2s;
          display: flex; align-items: center; justify-content: center;
        }
        .ft-submit:hover { opacity: 0.88; transform: translateX(2px); }
        .ft-submit:disabled { opacity: 0.5; cursor: not-allowed; }

        @keyframes checkIn {
          from { opacity: 0; transform: scale(0.8); }
          to   { opacity: 1; transform: scale(1); }
        }
        .ft-success {
          animation: checkIn 0.4s ease both;
          display: flex; align-items: center; gap: 8px;
          font-size: 11px; color: #c8973a;
          font-family: Georgia, serif; font-style: italic;
          padding: 10px 0;
        }
      `}</style>

      {/* ── TOP GOLD LINE ── */}
      <div style={{ height: "2px", background: "linear-gradient(to right, transparent, #c8973a 30%, #f7c568 50%, #c8973a 70%, transparent)", opacity: 0.6 }} />

      {/* ── BRAND HERO ROW ── */}
      <div className="text-center py-12 px-6" style={{ borderBottom: "1px solid rgba(200,151,58,0.1)" }}>
        {/* Diamond icon */}
        <div className="flex justify-center mb-4">
          <svg width="48" height="48" viewBox="0 0 42 42" fill="none">
            <rect x="6" y="6" width="30" height="30" rx="1"
              transform="rotate(45 21 21)" stroke="#c8924a" strokeWidth="1.4" fill="none" />
            <rect x="11" y="11" width="20" height="20" rx="0.5"
              transform="rotate(45 21 21)" stroke="#c8924a" strokeWidth="0.7" fill="none" opacity="0.4" />
            <text x="21" y="26.5" fontFamily="Montserrat,sans-serif" fontSize="13"
              fontWeight="600" fill="#c8924a" textAnchor="middle">D</text>
          </svg>
        </div>

        <h2 style={{
          fontFamily: "Georgia, serif", fontSize: "clamp(1.6rem, 4vw, 2.8rem)",
          fontWeight: 400, color: "#f7c568", letterSpacing: "0.08em", margin: "0 0 6px",
        }}>
          D DOLLY <span style={{ color: "#f5ede0" }}>LAMB</span>
        </h2>
        <p style={{ fontSize: "9px", letterSpacing: "0.45em", color: "#c8973a", marginBottom: "16px" }}>
          ARTISAN LEATHER ATELIER · EST. 2001
        </p>

        <div className="flex items-center justify-center gap-3">
          <span className="block h-px w-16" style={{ background: "linear-gradient(to right, transparent, rgba(200,151,58,0.4))" }} />
          <span className="block w-1.5 h-1.5 rotate-45 flex-shrink-0" style={{ background: "#c8973a" }} />
          <span className="block h-px w-16" style={{ background: "linear-gradient(to left, transparent, rgba(200,151,58,0.4))" }} />
        </div>
      </div>

      {/* ── MAIN LINK GRID ── */}
      <div className="w-[95%] mx-auto px-4 sm:px-6 lg:px-10 py-14">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-10">

          {/* INFO */}
          <div style={{ animation: "fadeUp 0.5s ease 0.05s both" }}>
            <ColHeading>Info</ColHeading>
            <ul className="space-y-2.5 list-none p-0 m-0">
              <li><FooterLink to="/contact">Contact Us</FooterLink></li>
              <li><FooterLink to="/about">About Us</FooterLink></li>
              <li><FooterLink to="/orders">Shipping & Returns</FooterLink></li>
              <li><FooterLink to="/about">Our Quality</FooterLink></li>
              <li><FooterLink to="#">Leather Waxing</FooterLink></li>
              <li><FooterLink to="#">Sizing Chart</FooterLink></li>
              <li><FooterLink to="/bestseller">Best Sellers</FooterLink></li>
            </ul>
          </div>

          {/* WOMEN */}
          <div style={{ animation: "fadeUp 0.5s ease 0.12s both" }}>
            <ColHeading>Women's</ColHeading>
            <ul className="space-y-2.5 list-none p-0 m-0">
              <li><FooterLink to="/collection?category=Women&sub=Topwear">Leather Jackets</FooterLink></li>
              <li><FooterLink to="/collection?category=Women&sub=Topwear">Bomber Biker Jacket</FooterLink></li>
              <li><FooterLink to="/collection?category=Women&sub=Topwear">Moto Biker Jacket</FooterLink></li>
              <li><FooterLink to="/collection?category=Women&sub=Topwear">Winter Wear</FooterLink></li>
              <li><FooterLink to="/collection?category=Women&sub=Topwear">Night Dress</FooterLink></li>
              <li><FooterLink to="/collection?category=Women&sub=Bottomwear">Pencil Skirt</FooterLink></li>
              <li><FooterLink to="/collection?category=Women&sub=Bottomwear">Full Skirt</FooterLink></li>
            </ul>
          </div>

          {/* MEN */}
          <div style={{ animation: "fadeUp 0.5s ease 0.19s both" }}>
            <ColHeading>Men's</ColHeading>
            <ul className="space-y-2.5 list-none p-0 m-0">
              <li><FooterLink to="/collection?category=Men&sub=Topwear">Leather Jackets</FooterLink></li>
              <li><FooterLink to="/collection?category=Men&sub=Topwear">Coats</FooterLink></li>
              <li><FooterLink to="/collection?category=Men&sub=Topwear">Bomber Biker Jacket</FooterLink></li>
            </ul>
          </div>

          {/* OTHERS */}
          <div style={{ animation: "fadeUp 0.5s ease 0.26s both" }}>
            <ColHeading>Others</ColHeading>
            <ul className="space-y-2.5 list-none p-0 m-0">
              <li><FooterLink to="/collection?category=Others&sub=Pillow">Pillow Covers</FooterLink></li>
              <li><FooterLink to="/collection?category=Others&sub=Cushion Cover">Cushion Cover</FooterLink></li>
              <li><FooterLink to="/collection?category=Others&sub=Aprons">Aprons</FooterLink></li>
              <li><FooterLink to="/collection?category=Others&sub=Desk Mat">Desk Mat</FooterLink></li>
              <li><FooterLink to="/collection?category=Others&sub=Chair Cover">Chair Cover</FooterLink></li>
            </ul>
          </div>

          {/* NEW ARRIVALS */}
          <div style={{ animation: "fadeUp 0.5s ease 0.33s both" }}>
            <ColHeading>New Arrivals</ColHeading>
            <ul className="space-y-2.5 list-none p-0 m-0">
              <li><FooterLink href="/collection?category=Men&sub=Topwear">Men's New Arrivals</FooterLink></li>
              <li><FooterLink href="/collection?category=Women&sub=Topwear">Women's New Arrivals</FooterLink></li>
            </ul>

            {/* Trust badges */}
            <div className="mt-8 space-y-3">
              {[
                { icon: "✦", text: "Grade A Lambskin" },
                { icon: "◈", text: "Handcrafted Quality" },
                { icon: "◆", text: "Est. 2001" },
              ].map((b, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span style={{ fontSize: "8px", color: "#c8973a" }}>{b.icon}</span>
                  <span style={{ fontSize: "10px", color: "#5a4030", letterSpacing: "0.1em", fontFamily: "Georgia, serif" }}>{b.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* NEWSLETTER */}
          <div style={{ animation: "fadeUp 0.5s ease 0.4s both" }}>
            <ColHeading>Newsletter</ColHeading>
            <p style={{ fontSize: "12px", color: "#5a4030", fontStyle: "italic", lineHeight: 1.75, marginBottom: "16px" }}>
              Join our inner circle for early access to new drops, private sales & artisan stories.
            </p>

            {submitted ? (
              <div className="ft-success">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="#c8973a" strokeWidth="1.4" />
                  <path d="M7 12l4 4 6-7" stroke="#c8973a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                You're on the list!
              </div>
            ) : (
              <form onSubmit={onSubmitHandler} className="relative mb-5">
                <input
                  type="email"
                  name="email"
                  placeholder="Your email address..."
                  className="ft-input"
                  required
                />
                <button type="submit" disabled={loading} className="ft-submit">
                  {loading
                    ? <span style={{ fontSize: 10, letterSpacing: "0.1em" }}>...</span>
                    : <IconArrow />
                  }
                </button>
              </form>
            )}

            {/* Socials */}
            <div className="flex items-center gap-2 mt-4 flex-wrap">
              {socials.map((s, i) => (
                <a key={i} href={s.href} className="ft-social-btn" aria-label={s.label} target="_blank" rel="noreferrer">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div style={{ borderTop: "1px solid rgba(200,151,58,0.12)" }}>
        {/* Marquee strip */}
        <div style={{ overflow: "hidden", borderBottom: "1px solid rgba(200,151,58,0.08)", padding: "10px 0" }}>
          <div style={{
            display: "inline-block", whiteSpace: "nowrap",
            animation: "marqueeScroll 25s linear infinite",
          }}>
            {Array(6).fill("◆  PREMIUM LAMBSKIN  ◆  HANDCRAFTED IN ITALY  ◆  EST. 2001  ◆  D DOLLY LAMB  ").map((t, i) => (
              <span key={i} style={{ fontSize: "9px", letterSpacing: "0.22em", color: "rgba(200,151,58,0.55)", fontFamily: "Georgia, serif" }}>{t}</span>
            ))}
          </div>
        </div>

        <div className="w-[95%] mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p style={{ fontSize: "10px", color: "#8a6040", letterSpacing: "0.14em", fontFamily: "Georgia, serif" }}>
            COPYRIGHT © 2025 <span style={{ color: "#c8973a" }}>DDOLLYLAMB.COM</span> — ALL RIGHTS RESERVED
          </p>
          <div className="flex items-center gap-5">
            {["Privacy Policy", "Terms of Use", "Cookies"].map((item, i) => (
              <a key={i} href="#" style={{
                fontSize: "9px", color: "#8a6040", letterSpacing: "0.14em",
                textDecoration: "none", transition: "color 0.2s",
                fontFamily: "Georgia, serif",
              }}
                onMouseEnter={e => e.target.style.color = "#f7c568"}
                onMouseLeave={e => e.target.style.color = "#8a6040"}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;