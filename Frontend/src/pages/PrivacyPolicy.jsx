// import React, { useState, useEffect, useRef } from "react";
// import { Link } from "react-router-dom";
// import { Helmet } from "react-helmet-async";
// import {
//     FiShield,
//     FiDatabase,
//     FiEye,
//     FiShare2,
//     FiLock,
//     FiUserCheck,
//     FiLink2,
//     FiRefreshCw,
//     FiMail,
//     FiChevronUp,
//     FiExternalLink,
// } from "react-icons/fi";

// /* ────────────────────────────────────────────────
//    CONTENT — edit copy here, layout stays untouched
// ──────────────────────────────────────────────── */
// const LAST_UPDATED = "July 10, 2026";

// const sections = [
//     {
//         id: "introduction",
//         icon: FiShield,
//         title: "Introduction",
//         body: (
//             <>
//                 <p>
//                     D Dolly Lamb ("we", "us", "our") designs and sells premium lambskin leather jackets, leather pillow covers, recliner slipcovers,
//                     leather aprons and desk pads through ddollylamb.com. This policy explains
//                     what information we collect when you visit our site or place an
//                     order, why we collect it, and the choices you have.
//                 </p>
//                 <p>
//                     By using our website, you agree to the collection and use of
//                     information in line with this policy. If you don't agree with any
//                     part of it, please don't continue to use the site.
//                 </p>
//             </>
//         ),
//     },
//     {
//         id: "information-we-collect",
//         icon: FiDatabase,
//         title: "Information We Collect",
//         body: (
//             <>
//                 <p className="font-semibold text-[#1E1B4B]">Information you give us</p>
//                 <ul className="list-disc pl-5 space-y-1.5 mb-4">
//                     <li>Name, email address, phone number, and shipping/billing address</li>
//                     <li>Order details, including size, style, and customisation requests for bespoke pieces</li>
//                     <li>Account credentials, if you create an account with us</li>
//                     <li>Messages you send through our contact form or customer support</li>
//                 </ul>
//                 <p className="font-semibold text-[#1E1B4B]">Information collected automatically</p>
//                 <ul className="list-disc pl-5 space-y-1.5 mb-4">
//                     <li>IP address, browser type, and device information</li>
//                     <li>Pages viewed, time spent on site, and referring URLs</li>
//                     <li>Cookie and analytics data (see the Cookies section below)</li>
//                 </ul>
//                 <p className="font-semibold text-[#1E1B4B]">Payment information</p>
//                 <p>
//                     Payments are processed by our third-party payment gateway. We do not
//                     store your full card number, CVV, or banking credentials on our
//                     servers — that information is handled directly by our payment
//                     processor under its own security standards.
//                 </p>
//             </>
//         ),
//     },
//     {
//         id: "how-we-use-it",
//         icon: FiEye,
//         title: "How We Use Your Information",
//         body: (
//             <>
//                 <ul className="list-disc pl-5 space-y-1.5">
//                     <li>To process orders, arrange shipping, and manage returns or exchanges</li>
//                     <li>To communicate order confirmations, dispatch updates, and support responses</li>
//                     <li>To personalise your experience and recommend relevant products</li>
//                     <li>To send marketing updates, if you've opted in — you can unsubscribe anytime</li>
//                     <li>To improve our website, catalogue, and customer service</li>
//                     <li>To detect and prevent fraud, abuse, or security incidents</li>
//                     <li>To meet legal, tax, and regulatory obligations</li>
//                 </ul>
//             </>
//         ),
//     },
//     {
//         id: "cookies",
//         icon: FiLock,
//         title: "Cookies & Tracking Technologies",
//         body: (
//             <>
//                 <p>
//                     We use cookies and similar technologies to keep you signed in,
//                     remember items in your cart, and understand how visitors use our
//                     site. These generally fall into three categories:
//                 </p>
//                 <ul className="list-disc pl-5 space-y-1.5 my-3">
//                     <li><span className="font-semibold text-[#1E1B4B]">Essential —</span> required for core functions like checkout and account login</li>
//                     <li><span className="font-semibold text-[#1E1B4B]">Analytics —</span> help us understand site traffic and usage patterns</li>
//                     <li><span className="font-semibold text-[#1E1B4B]">Marketing —</span> used to show you relevant offers on and off our site</li>
//                 </ul>
//                 <p>
//                     You can control or disable cookies through your browser settings.
//                     Blocking essential cookies may affect features like checkout or
//                     saved carts.
//                 </p>
//             </>
//         ),
//     },
//     {
//         id: "sharing",
//         icon: FiShare2,
//         title: "How We Share Your Information",
//         body: (
//             <>
//                 <p>We don't sell your personal information. We share it only with:</p>
//                 <ul className="list-disc pl-5 space-y-1.5 my-3">
//                     <li>Shipping and logistics partners, to deliver your order</li>
//                     <li>Payment processors, to complete transactions securely</li>
//                     <li>Analytics and marketing tools, to understand and improve the site</li>
//                     <li>Authorities, where required by law or to protect our legal rights</li>
//                 </ul>
//                 <p>
//                     Any partner we share data with is required to protect it and use it
//                     only for the purpose we've engaged them for.
//                 </p>
//             </>
//         ),
//     },
//     {
//         id: "security",
//         icon: FiLock,
//         title: "Data Retention & Security",
//         body: (
//             <>
//                 <p>
//                     We keep your information for as long as your account is active or
//                     as needed to fulfil orders, meet legal obligations, and resolve
//                     disputes. We use industry-standard safeguards — encrypted
//                     connections, restricted internal access, and secure hosting — to
//                     protect your data. No method of transmission over the internet is
//                     completely secure, so while we work hard to protect your
//                     information, we can't guarantee absolute security.
//                 </p>
//             </>
//         ),
//     },
//     {
//         id: "your-rights",
//         icon: FiUserCheck,
//         title: "Your Rights & Choices",
//         body: (
//             <>
//                 <p>Depending on where you live, you may have the right to:</p>
//                 <ul className="list-disc pl-5 space-y-1.5 my-3">
//                     <li>Access the personal information we hold about you</li>
//                     <li>Correct inaccurate or incomplete information</li>
//                     <li>Request deletion of your data, subject to legal retention requirements</li>
//                     <li>Withdraw consent for marketing communications at any time</li>
//                     <li>Request a copy of your data in a portable format</li>
//                 </ul>
//                 <p>
//                     To exercise any of these rights, contact us at{" "}
//                     <a href="mailto:info@ddollylamb.com" className="text-[#4F46E5] font-semibold hover:underline">
//                         info@ddollylamb.com
//                     </a>. We'll respond within a reasonable timeframe.
//                 </p>
//             </>
//         ),
//     },
//     {
//         id: "childrens-privacy",
//         icon: FiUserCheck,
//         title: "Children's Privacy",
//         body: (
//             <p>
//                 Our website is not directed at children under 16, and we do not
//                 knowingly collect personal information from them. If you believe a
//                 child has provided us with personal information, please contact us so
//                 we can remove it.
//             </p>
//         ),
//     },
//     {
//         id: "third-party-links",
//         icon: FiLink2,
//         title: "Third-Party Links",
//         body: (
//             <p>
//                 Our site may link to external sites — for example, our social media
//                 pages or shipping partners' tracking portals. We aren't responsible
//                 for the privacy practices of those sites, so we encourage you to
//                 review their policies separately.
//             </p>
//         ),
//     },
//     {
//         id: "changes",
//         icon: FiRefreshCw,
//         title: "Changes to This Policy",
//         body: (
//             <p>
//                 We may update this policy from time to time to reflect changes in our
//                 practices or for legal reasons. We'll post the revised version here
//                 with an updated "last updated" date. We encourage you to review this
//                 page periodically.
//             </p>
//         ),
//     },
//     {
//         id: "contact",
//         icon: FiMail,
//         title: "Contact Us",
//         body: (
//             <>
//                 <p className="mb-3">
//                     If you have questions about this policy or how we handle your
//                     information, reach out to us:
//                 </p>
//                 <ul className="space-y-1.5">
//                     <li><span className="font-semibold text-[#1E1B4B]">Email:</span> info@ddollylamb.com</li>
//                     <li><span className="font-semibold text-[#1E1B4B]">Phone:</span> +91 90881 10999</li>
//                     <li><span className="font-semibold text-[#1E1B4B]">Address:</span> Bypass Road, OTA, Gaya, Bihar 823001</li>
//                 </ul>
//             </>
//         ),
//     },
// ];

// /* ────────────────────────────────────────────────
//    PAGE
// ──────────────────────────────────────────────── */
// const PrivacyPolicy = () => {
//     const [activeId, setActiveId] = useState(sections[0].id);
//     const [showTop, setShowTop] = useState(false);
//     const sectionRefs = useRef({});

//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             (entries) => {
//                 entries.forEach((entry) => {
//                     if (entry.isIntersecting) setActiveId(entry.target.id);
//                 });
//             },
//             { rootMargin: "-15% 0px -70% 0px", threshold: 0 }
//         );

//         Object.values(sectionRefs.current).forEach((el) => {
//             if (el) observer.observe(el);
//         });

//         return () => observer.disconnect();
//     }, []);

//     useEffect(() => {
//         const onScroll = () => setShowTop(window.scrollY > 600);
//         window.addEventListener("scroll", onScroll);
//         return () => window.removeEventListener("scroll", onScroll);
//     }, []);

//     const scrollToSection = (id) => {
//         sectionRefs.current[id]?.scrollIntoView({ behavior: "smooth", block: "start" });
//     };

//     return (
//         <div className="min-h-screen bg-gradient-to-b from-white via-[#F4F5FF] to-[#EEF0FF] font-['Montserrat',sans-serif]">
//             <Helmet>
//                 <title>Privacy Policy | D Dolly Lamb</title>
//                 <meta
//                     name="description"
//                     content="Learn how D Dolly Lamb collects, uses and protects your personal information when you shop for premium lambskin leather products."
//                 />
//                 <meta
//                     name="robots"
//                     content="index, follow"
//                 />
//                 <link rel="canonical" href="https://ddollylamb.com/privacy-policy" />

//                 <meta property="og:type" content="website" />
//                 <meta property="og:title" content="Privacy Policy | D Dolly Lamb" />
//                 <meta
//                     property="og:description"
//                     content="Learn how D Dolly Lamb collects, uses and protects your personal information."
//                 />
//                 <meta
//                     property="og:url"
//                     content="https://ddollylamb.com/privacy-policy"
//                 />
//                 <meta
//                     property="og:image"
//                     content="https://ddollylamb.com/DDL_logo4.png"
//                 />

//                 <meta name="twitter:card" content="summary_large_image" />

//                 <meta
//                     name="twitter:title"
//                     content="Privacy Policy | D Dolly Lamb"
//                 />

//                 <meta
//                     name="twitter:description"
//                     content="Learn how D Dolly Lamb collects, uses and protects your personal information."
//                 />

//                 <meta
//                     name="twitter:image"
//                     content="https://ddollylamb.com/DDL_logo4.png"
//                 />

//                 <script type="application/ld+json">
//                     {JSON.stringify({
//                         "@context": "https://schema.org",
//                         "@type": "Organization",
//                         name: "D Dolly Lamb",
//                         url: "https://ddollylamb.com",
//                         logo: "https://ddollylamb.com/DDL_logo4.png",
//                     })}
//                 </script>

//                 <script type="application/ld+json">
//                     {JSON.stringify({
//                         "@context": "https://schema.org",
//                         "@type": "WebPage",
//                         "name": "Privacy Policy",
//                         "url": "https://ddollylamb.com/privacy-policy",
//                         "description": "Privacy Policy of D Dolly Lamb.",
//                         "isPartOf": {
//                             "@type": "WebSite",
//                             "url": "https://ddollylamb.com"
//                         }
//                     })}
//                 </script>

//                 <script type="application/ld+json">
//                     {JSON.stringify({
//                         "@context": "https://schema.org",
//                         "@type": "BreadcrumbList",
//                         itemListElement: [
//                             { "@type": "ListItem", position: 1, name: "Home", item: "https://ddollylamb.com" },
//                             { "@type": "ListItem", position: 2, name: "Privacy Policy", item: "https://ddollylamb.com/privacy-policy" },
//                         ],
//                     })}
//                 </script>
//             </Helmet>

//             {/* ── HEADER ── */}
//             <header className="relative overflow-hidden border-b border-indigo-100">
//                 <div className="absolute inset-0 pointer-events-none [background-image:linear-gradient(rgba(99,102,241,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.05)_1px,transparent_1px)] [background-size:40px_40px]" />
//                 <div className="absolute -top-32 -right-20 w-96 h-96 rounded-full bg-[radial-gradient(circle,rgba(129,140,248,0.12)_0%,transparent_70%)] pointer-events-none" />
//                 <div className="absolute -bottom-16 -left-16 w-72 h-72 rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.08)_0%,transparent_70%)] pointer-events-none" />

//                 <div className="relative z-10 max-w-3xl mx-auto text-center px-6 py-10 md:py-12">
//                     <div className="flex justify-center mb-3">
//                         <div className="w-11 h-11 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-center">
//                             <FiShield className="text-indigo-600" size={20} />
//                         </div>
//                     </div>

//                     <div className="flex items-center justify-center gap-3 mb-3">
//                         <span className="block w-8 h-px bg-gradient-to-r from-transparent to-indigo-500" />
//                         <span className="text-[10px] tracking-[0.4em] text-indigo-600 font-bold uppercase">
//                             Your Data, Explained Plainly
//                         </span>
//                         <span className="block w-8 h-px bg-gradient-to-l from-transparent to-indigo-500" />
//                     </div>

//                     <h1 className="font-serif text-3xl sm:text-4xl font-light text-[#1E1B4B] tracking-wide mb-3">
//                         Privacy{" "}
//                         <span className="bg-gradient-to-r from-[#4338CA] via-[#6366F1] to-[#818CF8] bg-clip-text text-transparent font-normal">
//                             Policy
//                         </span>
//                     </h1>

//                     <p className="text-slate-500 italic leading-relaxed max-w-lg mx-auto mb-4 text-sm">
//                         How D Dolly Lamb collects, uses, and protects your information —
//                         written to be actually readable.
//                     </p>

//                     <span className="inline-flex items-center gap-2 text-[11px] tracking-[0.15em] text-indigo-500 font-semibold bg-indigo-50 border border-indigo-100 rounded-full px-4 py-1.5 uppercase">
//                         Last updated: {LAST_UPDATED}
//                     </span>
//                 </div>
//             </header>

//             {/* ── BODY ── */}
//             <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-10">
//                 {/* Sticky TOC — desktop */}
//                 <nav className="hidden lg:block">
//                     <div className="sticky top-10">
//                         <p className="text-[10px] tracking-[0.28em] text-indigo-400 font-bold uppercase mb-4 px-3">
//                             On this page
//                         </p>
//                         <ul className="space-y-1 border-l border-indigo-100">
//                             {sections.map((s) => (
//                                 <li key={s.id}>
//                                     <button
//                                         onClick={() => scrollToSection(s.id)}
//                                         className={`w-full text-left text-[13px] pl-4 pr-3 py-2 border-l-2 -ml-px transition-colors duration-200 ${activeId === s.id
//                                             ? "border-indigo-600 text-indigo-700 font-semibold bg-indigo-50/60"
//                                             : "border-transparent text-slate-500 hover:text-indigo-600"
//                                             }`}
//                                     >
//                                         {s.title}
//                                     </button>
//                                 </li>
//                             ))}
//                         </ul>

//                         <Link
//                             to="/"
//                             className="mt-8 inline-flex items-center gap-2 text-[11px] tracking-[0.15em] text-indigo-600 font-semibold px-3 hover:underline uppercase"
//                         >
//                             ← Back to home
//                         </Link>
//                     </div>
//                 </nav>

//                 {/* Mobile TOC — horizontal scroll pills */}
//                 <nav className="lg:hidden -mx-6 px-6 pb-2 overflow-x-auto">
//                     <div className="flex gap-2 w-max">
//                         {sections.map((s) => (
//                             <button
//                                 key={s.id}
//                                 onClick={() => scrollToSection(s.id)}
//                                 className={`whitespace-nowrap text-[11px] tracking-wide font-semibold px-3.5 py-2 rounded-full border transition-colors ${activeId === s.id
//                                     ? "bg-indigo-600 text-white border-indigo-600"
//                                     : "bg-white text-slate-500 border-indigo-100"
//                                     }`}
//                             >
//                                 {s.title}
//                             </button>
//                         ))}
//                     </div>
//                 </nav>

//                 {/* Sections */}
//                 <main className="space-y-6">
//                     {sections.map((s, i) => {
//                         const Icon = s.icon;
//                         return (
//                             <section
//                                 key={s.id}
//                                 id={s.id}
//                                 ref={(el) => (sectionRefs.current[s.id] = el)}
//                                 className="scroll-mt-10 bg-white border border-indigo-100 rounded-2xl shadow-[0_4px_20px_rgba(99,102,241,0.06)] px-7 py-8"
//                             >
//                                 <div className="flex items-center gap-3 mb-4">
//                                     <div className="w-9 h-9 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center flex-shrink-0">
//                                         <Icon className="text-indigo-600" size={16} />
//                                     </div>
//                                     <h2 className="text-lg font-bold text-[#1E1B4B]">
//                                         {String(i + 1).padStart(2, "0")}. {s.title}
//                                     </h2>
//                                 </div>
//                                 <div className="text-[13.5px] text-slate-600 leading-[1.85] italic">
//                                     {s.body}
//                                 </div>
//                             </section>
//                         );
//                     })}

//                     <p className="text-center text-[11px] text-slate-400 italic pt-4">
//                         This policy is provided for general informational purposes. For
//                         binding legal advice tailored to your business, please consult a
//                         qualified legal professional.
//                     </p>
//                 </main>
//             </div>

//             {/* Back to top */}
//             <button
//                 onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//                 className={`fixed bottom-6 right-6 w-11 h-11 rounded-full bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 flex items-center justify-center transition-all duration-300 hover:bg-indigo-700 ${showTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
//                     }`}
//                 aria-label="Back to top"
//             >
//                 <FiChevronUp size={20} />
//             </button>
//         </div>
//     );
// };

// export default PrivacyPolicy;







import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
    FiShield,
    FiDatabase,
    FiEye,
    FiShare2,
    FiLock,
    FiUserCheck,
    FiLink2,
    FiRefreshCw,
    FiMail,
    FiChevronUp,
    FiExternalLink,
} from "react-icons/fi";

/* ────────────────────────────────────────────────
   CONTENT — edit copy here, layout stays untouched
──────────────────────────────────────────────── */
const LAST_UPDATED = "July 10, 2026";

const sections = [
    {
        id: "introduction",
        icon: FiShield,
        title: "Introduction",
        body: (
            <>
                <p>
                    D Dolly Lamb ("we", "us", "our") designs and sells premium lambskin leather jackets, leather pillow covers, recliner slipcovers,                     leather aprons and desk pads through ddollylamb.com. This policy explains
                    what information we collect when you visit our site or place an
                    order, why we collect it, and the choices you have.
                </p>
                <p>
                    By using our website, you agree to the collection and use of
                    information in line with this policy. If you don't agree with any
                    part of it, please don't continue to use the site.
                </p>
            </>
        ),
    },
    {
        id: "information-we-collect",
        icon: FiDatabase,
        title: "Information We Collect",
        body: (
            <>
                <p className="font-semibold text-[#1E1B4B]">Information you give us</p>
                <ul className="list-disc pl-5 space-y-1.5 mb-4">
                    <li>Name, email address, phone number, and shipping/billing address</li>
                    <li>Order details, including size, style, and customisation requests for bespoke pieces</li>
                    <li>Account credentials, if you create an account with us</li>
                    <li>Messages you send through our contact form or customer support</li>
                </ul>
                <p className="font-semibold text-[#1E1B4B]">Information collected automatically</p>
                <ul className="list-disc pl-5 space-y-1.5 mb-4">
                    <li>IP address, browser type, and device information</li>
                    <li>Pages viewed, time spent on site, and referring URLs</li>
                    <li>Cookie and analytics data (see the Cookies section below)</li>
                </ul>
                <p className="font-semibold text-[#1E1B4B]">Payment information</p>
                <p>
                    Payments are processed by our third-party payment gateway. We do not
                    store your full card number, CVV, or banking credentials on our
                    servers — that information is handled directly by our payment
                    processor under its own security standards.
                </p>
            </>
        ),
    },
    {
        id: "how-we-use-it",
        icon: FiEye,
        title: "How We Use Your Information",
        body: (
            <>
                <ul className="list-disc pl-5 space-y-1.5">
                    <li>To process orders, arrange shipping, and manage returns or exchanges</li>
                    <li>To communicate order confirmations, dispatch updates, and support responses</li>
                    <li>To personalise your experience and recommend relevant products</li>
                    <li>To send marketing updates, if you've opted in — you can unsubscribe anytime</li>
                    <li>To improve our website, catalogue, and customer service</li>
                    <li>To detect and prevent fraud, abuse, or security incidents</li>
                    <li>To meet legal, tax, and regulatory obligations</li>
                </ul>
            </>
        ),
    },
    {
        id: "cookies",
        icon: FiLock,
        title: "Cookies & Tracking Technologies",
        body: (
            <>
                <p>
                    We use cookies and similar technologies to keep you signed in,
                    remember items in your cart, and understand how visitors use our
                    site. These generally fall into three categories:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 my-3">
                    <li><span className="font-semibold text-[#1E1B4B]">Essential —</span> required for core functions like checkout and account login</li>
                    <li><span className="font-semibold text-[#1E1B4B]">Analytics —</span> help us understand site traffic and usage patterns</li>
                    <li><span className="font-semibold text-[#1E1B4B]">Marketing —</span> used to show you relevant offers on and off our site</li>
                </ul>
                <p>
                    You can control or disable cookies through your browser settings.
                    Blocking essential cookies may affect features like checkout or
                    saved carts.
                </p>
            </>
        ),
    },
    {
        id: "sharing",
        icon: FiShare2,
        title: "How We Share Your Information",
        body: (
            <>
                <p>We don't sell your personal information. We share it only with:</p>
                <ul className="list-disc pl-5 space-y-1.5 my-3">
                    <li>Shipping and logistics partners, to deliver your order</li>
                    <li>Payment processors, to complete transactions securely</li>
                    <li>Analytics and marketing tools, to understand and improve the site</li>
                    <li>Authorities, where required by law or to protect our legal rights</li>
                </ul>
                <p>
                    Any partner we share data with is required to protect it and use it
                    only for the purpose we've engaged them for.
                </p>
            </>
        ),
    },
    {
        id: "security",
        icon: FiLock,
        title: "Data Retention & Security",
        body: (
            <>
                <p>
                    We keep your information for as long as your account is active or
                    as needed to fulfil orders, meet legal obligations, and resolve
                    disputes. We use industry-standard safeguards — encrypted
                    connections, restricted internal access, and secure hosting — to
                    protect your data. No method of transmission over the internet is
                    completely secure, so while we work hard to protect your
                    information, we can't guarantee absolute security.
                </p>
            </>
        ),
    },
    {
        id: "your-rights",
        icon: FiUserCheck,
        title: "Your Rights & Choices",
        body: (
            <>
                <p>Depending on where you live, you may have the right to:</p>
                <ul className="list-disc pl-5 space-y-1.5 my-3">
                    <li>Access the personal information we hold about you</li>
                    <li>Correct inaccurate or incomplete information</li>
                    <li>Request deletion of your data, subject to legal retention requirements</li>
                    <li>Withdraw consent for marketing communications at any time</li>
                    <li>Request a copy of your data in a portable format</li>
                </ul>
                <p>
                    To exercise any of these rights, contact us at{" "}
                    <a href="mailto:info@ddollylamb.com" className="text-[#4F46E5] font-semibold hover:underline">
                        info@ddollylamb.com
                    </a>. We'll respond within a reasonable timeframe.
                </p>
            </>
        ),
    },
    {
        id: "childrens-privacy",
        icon: FiUserCheck,
        title: "Children's Privacy",
        body: (
            <p>
                Our website is not directed at children under 16, and we do not
                knowingly collect personal information from them. If you believe a
                child has provided us with personal information, please contact us so
                we can remove it.
            </p>
        ),
    },
    {
        id: "third-party-links",
        icon: FiLink2,
        title: "Third-Party Links",
        body: (
            <p>
                Our site may link to external sites — for example, our social media
                pages or shipping partners' tracking portals. We aren't responsible
                for the privacy practices of those sites, so we encourage you to
                review their policies separately.
            </p>
        ),
    },
    {
        id: "changes",
        icon: FiRefreshCw,
        title: "Changes to This Policy",
        body: (
            <p>
                We may update this policy from time to time to reflect changes in our
                practices or for legal reasons. We'll post the revised version here
                with an updated "last updated" date. We encourage you to review this
                page periodically.
            </p>
        ),
    },
    {
        id: "contact",
        icon: FiMail,
        title: "Contact Us",
        body: (
            <>
                <p className="mb-3">
                    If you have questions about this policy or how we handle your
                    information, reach out to us:
                </p>
                <ul className="space-y-1.5">
                    <li><span className="font-semibold text-[#1E1B4B]">Email:</span> info@ddollylamb.com</li>
                    <li><span className="font-semibold text-[#1E1B4B]">Phone:</span> +91 90881 10999</li>
                    <li><span className="font-semibold text-[#1E1B4B]">Address:</span> Bypass Road, OTA, Gaya, Bihar 823001</li>
                </ul>
            </>
        ),
    },
];

/* ────────────────────────────────────────────────
   PAGE
──────────────────────────────────────────────── */
const PrivacyPolicy = () => {
    const [activeId, setActiveId] = useState(sections[0].id);
    const [showTop, setShowTop] = useState(false);
    const sectionRefs = useRef({});

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActiveId(entry.target.id);
                });
            },
            { rootMargin: "-15% 0px -70% 0px", threshold: 0 }
        );

        Object.values(sectionRefs.current).forEach((el) => {
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const onScroll = () => setShowTop(window.scrollY > 600);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const scrollToSection = (id) => {
        sectionRefs.current[id]?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-white via-[#F4F5FF] to-[#EEF0FF] font-['Montserrat',sans-serif]">
            <Helmet>
                <title>Privacy Policy | D Dolly Lamb</title>
                <meta
                    name="description"
                    content="Learn how D Dolly Lamb collects, uses and protects your personal information when you shop for premium lambskin leather products."
                />
                <meta
                    name="robots"
                    content="index, follow"
                />
                <link rel="canonical" href="https://ddollylamb.com/privacy-policy" />

                <meta property="og:type" content="website" />
                <meta property="og:title" content="Privacy Policy | D Dolly Lamb" />
                <meta
                    property="og:description"
                    content="Learn how D Dolly Lamb collects, uses and protects your personal information."
                />
                <meta
                    property="og:url"
                    content="https://ddollylamb.com/privacy-policy"
                />
                <meta
                    property="og:image"
                    content="https://ddollylamb.com/DDL_logo4.png"
                />

                <meta name="twitter:card" content="summary_large_image" />

                <meta
                    name="twitter:title"
                    content="Privacy Policy | D Dolly Lamb"
                />

                <meta
                    name="twitter:description"
                    content="Learn how D Dolly Lamb collects, uses and protects your personal information."
                />

                <meta
                    name="twitter:image"
                    content="https://ddollylamb.com/DDL_logo4.png"
                />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        name: "D Dolly Lamb",
                        url: "https://ddollylamb.com",
                        logo: "https://ddollylamb.com/DDL_logo4.png",
                    })}
                </script>

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        "name": "Privacy Policy",
                        "url": "https://ddollylamb.com/privacy-policy",
                        "description": "Learn how D Dolly Lamb collects, uses and protects your personal information.",
                        "isPartOf": {
                            "@type": "WebSite",
                            "url": "https://ddollylamb.com"
                        }
                    })}
                </script>

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        itemListElement: [
                            { "@type": "ListItem", position: 1, name: "Home", item: "https://ddollylamb.com" },
                            { "@type": "ListItem", position: 2, name: "Privacy Policy", item: "https://ddollylamb.com/privacy-policy" },
                        ],
                    })}
                </script>
            </Helmet>

            {/* ── HEADER ── */}
            <header className="relative overflow-hidden border-b border-indigo-100">
                <div className="absolute inset-0 pointer-events-none [background-image:linear-gradient(rgba(99,102,241,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.05)_1px,transparent_1px)] [background-size:40px_40px]" />
                <div className="absolute -top-32 -right-20 w-96 h-96 rounded-full bg-[radial-gradient(circle,rgba(129,140,248,0.12)_0%,transparent_70%)] pointer-events-none" />
                <div className="absolute -bottom-16 -left-16 w-72 h-72 rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.08)_0%,transparent_70%)] pointer-events-none" />

                <div className="relative z-10 max-w-3xl mx-auto text-center px-6 py-10 md:py-12">
                    <div className="flex justify-center mb-3">
                        <div className="w-11 h-11 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-center">
                            <FiShield className="text-indigo-600" size={20} />
                        </div>
                    </div>

                    <div className="flex items-center justify-center gap-3 mb-3">
                        <span className="block w-8 h-px bg-gradient-to-r from-transparent to-indigo-500" />
                        <span className="text-[10px] tracking-[0.4em] text-indigo-600 font-bold uppercase">
                            Your Data, Explained Plainly
                        </span>
                        <span className="block w-8 h-px bg-gradient-to-l from-transparent to-indigo-500" />
                    </div>

                    <h1 className="font-serif text-3xl sm:text-4xl font-light text-[#1E1B4B] tracking-wide mb-3">
                        Privacy{" "}
                        <span className="bg-gradient-to-r from-[#4338CA] via-[#6366F1] to-[#818CF8] bg-clip-text text-transparent font-normal">
                            Policy
                        </span>
                    </h1>

                    <p className="text-slate-500 leading-relaxed max-w-lg mx-auto mb-4 text-sm">
                        How D Dolly Lamb collects, uses, and protects your information —
                        written to be actually readable.
                    </p>

                    <span className="inline-flex items-center gap-2 text-[11px] tracking-[0.15em] text-indigo-500 font-semibold bg-indigo-50 border border-indigo-100 rounded-full px-4 py-1.5 uppercase">
                        Last updated: {LAST_UPDATED}
                    </span>
                </div>
            </header>

            {/* ── BODY ── */}
            <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-10">
                {/* Sticky TOC — desktop */}
                <nav className="hidden lg:block">
                    <div className="sticky top-10">
                        <p className="text-[10px] tracking-[0.28em] text-indigo-400 font-bold uppercase mb-4 px-3">
                            On this page
                        </p>
                        <ul className="space-y-1 border-l border-indigo-100">
                            {sections.map((s) => (
                                <li key={s.id}>
                                    <button
                                        onClick={() => scrollToSection(s.id)}
                                        className={`w-full text-left text-[13px] pl-4 pr-3 py-2 border-l-2 -ml-px transition-colors duration-200 ${activeId === s.id
                                            ? "border-indigo-600 text-indigo-700 font-semibold bg-indigo-50/60"
                                            : "border-transparent text-slate-500 hover:text-indigo-600"
                                            }`}
                                    >
                                        {s.title}
                                    </button>
                                </li>
                            ))}
                        </ul>

                        <Link
                            to="/"
                            className="mt-8 inline-flex items-center gap-2 text-[11px] tracking-[0.15em] text-indigo-600 font-semibold px-3 hover:underline uppercase"
                        >
                            ← Back to home
                        </Link>
                    </div>
                </nav>

                {/* Mobile TOC — horizontal scroll pills */}
                <nav className="lg:hidden -mx-6 px-6 pb-2 overflow-x-auto">
                    <div className="flex gap-2 w-max">
                        {sections.map((s) => (
                            <button
                                key={s.id}
                                onClick={() => scrollToSection(s.id)}
                                className={`whitespace-nowrap text-[11px] tracking-wide font-semibold px-3.5 py-2 rounded-full border transition-colors ${activeId === s.id
                                    ? "bg-indigo-600 text-white border-indigo-600"
                                    : "bg-white text-slate-500 border-indigo-100"
                                    }`}
                            >
                                {s.title}
                            </button>
                        ))}
                    </div>
                </nav>

                {/* Sections */}
                <main className="space-y-6">
                    {sections.map((s, i) => {
                        const Icon = s.icon;
                        return (
                            <section
                                key={s.id}
                                id={s.id}
                                ref={(el) => (sectionRefs.current[s.id] = el)}
                                className="scroll-mt-10 bg-white border border-indigo-100 rounded-2xl shadow-[0_4px_20px_rgba(99,102,241,0.06)] px-7 py-8"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-9 h-9 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center flex-shrink-0">
                                        <Icon className="text-indigo-600" size={16} />
                                    </div>
                                    <h2 className="text-lg font-bold font-serif text-[#1E1B4B]">
                                        {String(i + 1).padStart(2, "0")}. {s.title}
                                    </h2>
                                </div>
                                <div className="font-serif text-[15px] text-slate-700 leading-[1.85]">
                                    {s.body}
                                </div>
                            </section>
                        );
                    })}

                    <p className="text-center text-[11px] text-slate-400 pt-4">
                        This policy is provided for general informational purposes. For
                        binding legal advice tailored to your business, please consult a
                        qualified legal professional.
                    </p>
                </main>
            </div>

            {/* Back to top */}
            <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className={`fixed bottom-6 right-6 w-11 h-11 rounded-full bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 flex items-center justify-center transition-all duration-300 hover:bg-indigo-700 ${showTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
                    }`}
                aria-label="Back to top"
            >
                <FiChevronUp size={20} />
            </button>
        </div>
    );
};

export default PrivacyPolicy;