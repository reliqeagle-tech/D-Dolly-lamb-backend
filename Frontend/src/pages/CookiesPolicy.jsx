import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
    FiInfo,
    FiShield,
    FiBarChart2,
    FiTarget,
    FiShare2,
    FiEye,
    FiRefreshCw,
    FiMail,
    FiChevronUp,
    FiCheck,
} from "react-icons/fi";

/* ────────────────────────────────────────────────
   CONTENT
──────────────────────────────────────────────── */
const LAST_UPDATED = "July 10, 2026";

const sections = [
    {
        id: "what-are-cookies",
        icon: FiInfo,
        title: "What Are Cookies",
        body: (
            <p>
                Cookies are small text files placed on your device when you visit a
                website. They help the site remember your preferences, keep you
                signed in, and understand how you use it. Some cookies are set
                directly by D Dolly Lamb, and others by third-party services we use,
                like analytics and payment providers.
            </p>
        ),
    },
    {
        id: "how-we-use",
        icon: FiEye,
        title: "How We Use Cookies",
        body: (
            <ul className="list-disc pl-5 space-y-1.5">
                <li>Keeping items in your cart as you browse</li>
                <li>Remembering your sign-in session so you don't need to log in repeatedly</li>
                <li>Understanding which pages and products get the most attention</li>
                <li>Showing you relevant offers, on our site and occasionally elsewhere</li>
                <li>Detecting fraud and keeping checkout secure</li>
            </ul>
        ),
    },
    {
        id: "manage-preferences",
        icon: FiShield,
        title: "Manage Your Cookie Preferences",
        isPreferencePanel: true,
    },
    {
        id: "third-party",
        icon: FiShare2,
        title: "Third-Party Cookies",
        body: (
            <p>
                Some cookies on our site are set by trusted partners — for example,
                our payment gateway, shipping trackers, and analytics tools. These
                partners have their own privacy and cookie practices, which we
                encourage you to review separately. We don't control how third
                parties use cookies once set.
            </p>
        ),
    },
    {
        id: "browser-controls",
        icon: FiRefreshCw,
        title: "Managing Cookies in Your Browser",
        body: (
            <>
                <p className="mb-3">
                    Beyond the preferences above, you can control or delete cookies
                    directly through your browser settings — most browsers let you
                    view, block, or remove cookies for specific sites or all sites.
                    Search "cookie settings" in your browser's help menu for exact
                    steps.
                </p>
                <p>
                    Keep in mind that blocking essential cookies may affect how our
                    site works — for example, your cart may not save between visits.
                </p>
            </>
        ),
    },
    {
        id: "changes",
        icon: FiRefreshCw,
        title: "Changes to This Policy",
        body: (
            <p>
                We may update this Cookie Policy from time to time to reflect changes
                in the tools we use or in relevant regulations. Any changes will be
                posted here with a new "last updated" date.
            </p>
        ),
    },
    {
        id: "contact",
        icon: FiMail,
        title: "Contact Us",
        body: (
            <>
                <p className="mb-3">Questions about how we use cookies? Reach out:</p>
                <ul className="space-y-1.5">
                    <li><span className="font-semibold text-[#1E1B4B]">Email:</span> info@ddollylamb.com</li>
                    <li><span className="font-semibold text-[#1E1B4B]">Phone:</span> +91 90881 10999</li>
                </ul>
            </>
        ),
    },
];

/* ────────────────────────────────────────────────
   TOGGLE SWITCH
──────────────────────────────────────────────── */
const Toggle = ({ checked, onChange, disabled }) => (
    <button
        type="button"
        role="switch"
        aria-checked={checked}
        disabled={disabled}
        onClick={() => !disabled && onChange(!checked)}
        className={`relative w-11 h-6 rounded-full flex-shrink-0 transition-colors duration-200 ${disabled ? "bg-indigo-300 cursor-not-allowed" : checked ? "bg-indigo-600" : "bg-slate-200"
            }`}
    >
        <span
            className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform duration-200 ${checked ? "translate-x-5" : "translate-x-0"
                }`}
        />
    </button>
);

/* ────────────────────────────────────────────────
   PREFERENCE PANEL — the signature element
──────────────────────────────────────────────── */
const PreferencePanel = () => {
    const [prefs, setPrefs] = useState({ essential: true, analytics: true, marketing: false });
    const [saved, setSaved] = useState(false);

    const categories = [
        {
            key: "essential",
            icon: FiShield,
            label: "Essential",
            desc: "Required for checkout, cart, and account login. Can't be switched off.",
            locked: true,
        },
        {
            key: "analytics",
            icon: FiBarChart2,
            label: "Analytics",
            desc: "Helps us understand traffic and improve the site experience.",
            locked: false,
        },
        {
            key: "marketing",
            icon: FiTarget,
            label: "Marketing",
            desc: "Used to show relevant offers on and off our site.",
            locked: false,
        },
    ];

    const handleSave = () => {
        setSaved(true);
        setTimeout(() => setSaved(false), 2500);
    };

    return (
        <div>
            <p className="font-serif text-[14.5px] text-slate-700 leading-[1.85] mb-5">
                Choose which categories of cookies you're comfortable with. Essential
                cookies are always on since the site can't function without them.
            </p>

            <div className="space-y-3">
                {categories.map((c) => {
                    const Icon = c.icon;
                    return (
                        <div
                            key={c.key}
                            className="flex items-center justify-between gap-4 border border-indigo-100 rounded-xl px-4 py-3.5 bg-indigo-50/30"
                        >
                            <div className="flex items-center gap-3 min-w-0">
                                <div className="w-8 h-8 rounded-lg bg-white border border-indigo-100 flex items-center justify-center flex-shrink-0">
                                    <Icon className="text-indigo-600" size={14} />
                                </div>
                                <div className="min-w-0">
                                    <p className="text-[13px] font-semibold text-[#1E1B4B]">{c.label}</p>
                                    <p className="text-[11.5px] text-slate-500 leading-snug">{c.desc}</p>
                                </div>
                            </div>
                            <Toggle
                                checked={prefs[c.key]}
                                disabled={c.locked}
                                onChange={(val) => setPrefs((p) => ({ ...p, [c.key]: val }))}
                            />
                        </div>
                    );
                })}
            </div>

            <button
                onClick={handleSave}
                className="mt-5 inline-flex items-center gap-2 text-[11px] tracking-[0.15em] font-bold uppercase text-white bg-indigo-600 hover:bg-indigo-700 transition-colors rounded-lg px-5 py-2.5"
            >
                {saved ? (
                    <>
                        <FiCheck size={14} /> Preferences Saved
                    </>
                ) : (
                    "Save Preferences"
                )}
            </button>
        </div>
    );
};

/* ────────────────────────────────────────────────
   PAGE
──────────────────────────────────────────────── */
const CookiesPolicy = () => {
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
                <title>Cookie Policy | D Dolly Lamb</title>
                <meta name="description" content="Learn how D Dolly Lamb uses cookies, what categories exist, and how to manage your preferences." />
                <link rel="canonical" href="https://ddollylamb.com/cookies-policy" />
                <meta name="robots" content="index, follow" />

                <meta property="og:type" content="website" />
                <meta property="og:title" content="Cookie Policy | D Dolly Lamb" />
                <meta property="og:description" content="Learn how D Dolly Lamb uses cookies and how you can manage your cookie preferences." />
                <meta property="og:url" content="https://ddollylamb.com/cookies-policy" />
                <meta property="og:site_name" content="D Dolly Lamb" />
                <meta property="og:image" content="https://ddollylamb.com/DDL_logo4.png" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Cookie Policy | D Dolly Lamb" />
                <meta name="twitter:description" content="Learn how D Dolly Lamb uses cookies and how you can manage your cookie preferences." />
                <meta name="twitter:image" content="https://ddollylamb.com/DDL_logo4.png" />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        name: "D Dolly Lamb",
                        url: "https://ddollylamb.com",
                        logo: "https://ddollylamb.com/DDL_logo4.png",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "Reliq Eagle, 511, Maranpur, Opposite Shiv Mandir, Gaya Bypass Road",
                            "addressLocality": "Gaya",
                            "addressRegion": "Bihar",
                            "postalCode": "823001",
                            "addressCountry": "IN"
                        },
                        "contactPoint": [
                            {
                                "@type": "ContactPoint",
                                "telephone": "+91-9088110999",
                                "contactType": "customer support",
                                "email": "info@ddollylamb.com",
                                "availableLanguage": ["English", "Hindi"]
                            }
                        ]
                    })}
                </script>
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "CookiePolicy",
                        name: "Cookie Policy",
                        url: "https://ddollylamb.com/cookies-policy",
                        description: "Learn how D Dolly Lamb uses cookies and how you can manage your cookie preferences.",
                        inLanguage: "en",
                        isPartOf: {
                            "@type": "WebSite",
                            url: "https://ddollylamb.com"
                        }
                    })}
                </script>
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        itemListElement: [
                            { "@type": "ListItem", position: 1, name: "Home", item: "https://ddollylamb.com" },
                            { "@type": "ListItem", position: 2, name: "Cookie Policy", item: "https://ddollylamb.com/cookies-policy" },
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
                            <FiInfo className="text-indigo-600" size={20} />
                        </div>
                    </div>

                    <div className="flex items-center justify-center gap-3 mb-3">
                        <span className="block w-8 h-px bg-gradient-to-r from-transparent to-indigo-500" />
                        <span className="text-[10px] tracking-[0.4em] text-indigo-600 font-bold uppercase">
                            What We Track, And Why
                        </span>
                        <span className="block w-8 h-px bg-gradient-to-l from-transparent to-indigo-500" />
                    </div>

                    <h1 className="font-serif text-3xl sm:text-4xl font-light text-[#1E1B4B] tracking-wide mb-3">
                        Cookie{" "}
                        <span className="bg-gradient-to-r from-[#4338CA] via-[#6366F1] to-[#818CF8] bg-clip-text text-transparent font-normal">
                            Policy
                        </span>
                    </h1>

                    <p className="text-slate-500 leading-relaxed max-w-lg mx-auto mb-4 text-sm">
                        How D Dolly Lamb uses cookies, and how you can manage your
                        preferences.
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

                                {s.isPreferencePanel ? (
                                    <PreferencePanel />
                                ) : (
                                    <div className="font-serif text-[15px] text-slate-700 leading-[1.85]">
                                        {s.body}
                                    </div>
                                )}
                            </section>
                        );
                    })}

                    <p className="text-center text-[11px] text-slate-400 pt-4">
                        This page is provided for general informational purposes. For
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

export default CookiesPolicy;