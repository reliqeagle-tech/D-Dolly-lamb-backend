import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
    FiFileText,
    FiUserCheck,
    FiTag,
    FiCreditCard,
    FiScissors,
    FiTruck,
    FiRefreshCw,
    FiBookOpen,
    FiUsers,
    FiAlertTriangle,
    FiGlobe,
    FiEdit3,
    FiMail,
    FiChevronUp,
} from "react-icons/fi";

/* ────────────────────────────────────────────────
   CONTENT — edit copy here, layout stays untouched
──────────────────────────────────────────────── */
const LAST_UPDATED = "July 10, 2026";

const sections = [
    {
        id: "acceptance",
        icon: FiFileText,
        title: "Acceptance of Terms",
        body: (
            <>
                <p>
                    These Terms of Use ("Terms") govern your access to and use of
                    ddollylamb.com and any purchase you make from D Dolly Lamb ("we",
                    "us", "our"). By browsing our site or placing an order, you agree
                    to be bound by these Terms.
                </p>
                <p>
                    If you don't agree with any part of these Terms, please don't use
                    our website or services.
                </p>
            </>
        ),
    },
    {
        id: "eligibility",
        icon: FiUserCheck,
        title: "Eligibility & Your Account",
        body: (
            <>
                <p className="mb-3">
                    You must be at least 18 years old, or the age of majority in your
                    jurisdiction, to place an order with us. By using our site, you
                    confirm this is true.
                </p>
                <p>
                    If you create an account, you're responsible for keeping your login
                    details confidential and for all activity that happens under your
                    account. Let us know immediately if you suspect unauthorised use.
                </p>
            </>
        ),
    },
    {
        id: "products-pricing",
        icon: FiTag,
        title: "Products, Pricing & Availability",
        body: (
            <>
                <p className="mb-3">
                    We describe our leather jackets, pillow covers, recliner
                    slipcovers, aprons, and desk pads as accurately as possible,
                    including materials, sizing, dimensions, and craftsmanship details.
                    Since each hide is natural, minor variations in grain and tone
                    between the photo and the finished piece are normal and not a
                    defect.
                </p>
                <ul className="list-disc pl-5 space-y-1.5">
                    <li>Prices are listed in the currency shown at checkout and may change without prior notice</li>
                    <li>We reserve the right to limit quantities or discontinue any product at any time</li>
                    <li>In the rare case of a pricing or listing error, we'll contact you before processing the order</li>
                </ul>
            </>
        ),
    },
    {
        id: "orders-payment",
        icon: FiCreditCard,
        title: "Orders & Payment",
        body: (
            <>
                <p className="mb-3">
                    Placing an order is an offer to buy, which we may accept or decline
                    — for example, if a product is out of stock or a payment can't be
                    verified. Your order is confirmed once you receive a confirmation
                    email from us.
                </p>
                <p>
                    Payments are processed securely through our third-party payment
                    gateway. Full payment is required at the time of order unless we've
                    agreed otherwise in writing for a bespoke commission.
                </p>
            </>
        ),
    },
    {
        id: "bespoke-orders",
        icon: FiScissors,
        title: "Bespoke & Custom Orders",
        body: (
            <>
                <p className="mb-3">
                    Bespoke jackets are cut and stitched to your specified measurements
                    and preferences. Because each piece is made specifically for you:
                </p>
                <ul className="list-disc pl-5 space-y-1.5">
                    <li>Production typically takes 3–4 weeks from confirmed measurements</li>
                    <li>Please double-check measurements before confirming — we're happy to guide you through this</li>
                    <li>Bespoke and custom orders are final sale and cannot be cancelled once cutting has begun</li>
                    <li>Minor fit adjustments after delivery may be arranged at our discretion</li>
                </ul>
            </>
        ),
    },
    {
        id: "shipping",
        icon: FiTruck,
        title: "Shipping & Delivery",
        body: (
            <>
                <p className="mb-3">
                    We ship across India and to over 30 countries worldwide. Estimated
                    delivery times are provided at checkout and are not guaranteed, as
                    they depend on courier partners and customs processing for
                    international orders.
                </p>
                <p>
                    Title and risk of loss for products pass to you upon delivery to
                    the shipping carrier. International orders may be subject to
                    customs duties and import taxes, which are the buyer's
                    responsibility.
                </p>
            </>
        ),
    },
    {
        id: "returns",
        icon: FiRefreshCw,
        title: "Returns, Exchanges & Cancellations",
        body: (
            <>
                <ul className="list-disc pl-5 space-y-1.5 mb-3">
                    <li>Ready-to-wear items may be returned within 7 days of delivery in original, unworn condition with tags attached</li>
                    <li>Bespoke and custom orders are non-refundable, as noted above</li>
                    <li>Refunds are issued to the original payment method once the returned item is inspected</li>
                    <li>Return shipping costs are the customer's responsibility unless the item arrived damaged or incorrect</li>
                </ul>
                <p>
                    If your order arrives damaged or defective, contact us within 48
                    hours of delivery with photos so we can make it right.
                </p>
            </>
        ),
    },
    {
        id: "intellectual-property",
        icon: FiBookOpen,
        title: "Intellectual Property",
        body: (
            <p>
                All content on ddollylamb.com — including our logo, product designs,
                photography, and written copy — is owned by D Dolly Lamb or our
                licensors and protected by applicable intellectual property laws. You
                may not reproduce, distribute, or create derivative works from this
                content without our written permission.
            </p>
        ),
    },
    {
        id: "user-conduct",
        icon: FiUsers,
        title: "User Conduct",
        body: (
            <>
                <p className="mb-3">When using our site, you agree not to:</p>
                <ul className="list-disc pl-5 space-y-1.5">
                    <li>Use the site for any unlawful purpose or in violation of these Terms</li>
                    <li>Attempt to gain unauthorised access to our systems or another user's account</li>
                    <li>Upload harmful code, or interfere with the site's normal operation</li>
                    <li>Scrape, copy, or resell our product content without permission</li>
                </ul>
            </>
        ),
    },
    {
        id: "liability",
        icon: FiAlertTriangle,
        title: "Limitation of Liability",
        body: (
            <p>
                Our site and products are provided "as is." To the fullest extent
                permitted by law, D Dolly Lamb is not liable for any indirect,
                incidental, or consequential damages arising from your use of the
                site or products, beyond the value of your order. Nothing in these
                Terms limits liability that cannot legally be excluded, such as for
                fraud or gross negligence.
            </p>
        ),
    },
    {
        id: "governing-law",
        icon: FiGlobe,
        title: "Governing Law & Disputes",
        body: (
            <p>
                These Terms are governed by the laws of India. Any disputes arising
                from these Terms or your use of our site will be subject to the
                exclusive jurisdiction of the courts in Gaya, Bihar, unless otherwise
                required by applicable consumer protection law in your location.
            </p>
        ),
    },
    {
        id: "changes",
        icon: FiEdit3,
        title: "Changes to These Terms",
        body: (
            <p>
                We may update these Terms occasionally to reflect changes in our
                business or legal requirements. The revised version will be posted
                here with an updated "last updated" date. Continued use of our site
                after changes are posted means you accept the updated Terms.
            </p>
        ),
    },
    {
        id: "contact",
        icon: FiMail,
        title: "Contact Us",
        body: (
            <>
                <p className="mb-3">Questions about these Terms? Reach out:</p>
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
const TermsOfUse = () => {
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
                <title>Terms of Use | D Dolly Lamb</title>
                <meta
                    name="description"
                    content="Read the terms and conditions for shopping with D Dolly Lamb — orders, payments, bespoke commissions, shipping, and returns."
                />
                <meta name="robots" content="index, follow" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Terms of Use | D Dolly Lamb" />
                <meta property="og:description" content="Read the terms and conditions for shopping with D Dolly Lamb." />
                <meta property="og:url" content="https://ddollylamb.com/terms-of-service" />
                <meta property="og:site_name" content="D Dolly Lamb" />
                <meta property="og:image" content="https://ddollylamb.com/DDL_logo4.png" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Terms of Use | D Dolly Lamb" />
                <meta
                    name="twitter:description"
                    content="Read the terms and conditions for shopping with D Dolly Lamb."
                />
                <meta
                    name="twitter:image"
                    content="https://ddollylamb.com/DDL_logo4.png"
                />
                <link rel="canonical" href="https://ddollylamb.com/terms-of-service" />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        name: "D Dolly Lamb",
                        url: "https://ddollylamb.com",
                        logo: "https://ddollylamb.com/DDL_logo4.png",
                        "contactPoint": [
                            {
                                "@type": "ContactPoint",
                                "telephone": "+919088110999",
                                "contactType": "customer support",
                                "email": "info@ddollylamb.com"
                            }
                        ]
                    })}
                </script>
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "TermsOfService",
                        name: "Terms of Use",
                        url: "https://ddollylamb.com/terms-of-service",
                        description: "Read the Terms of Use governing purchases, payments, shipping, returns and use of the D Dolly Lamb website.",
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
                            { "@type": "ListItem", position: 2, name: "Terms of Use", item: "https://ddollylamb.com/terms-of-service" },
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
                            <FiFileText className="text-indigo-600" size={20} />
                        </div>
                    </div>

                    <div className="flex items-center justify-center gap-3 mb-3">
                        <span className="block w-8 h-px bg-gradient-to-r from-transparent to-indigo-500" />
                        <span className="text-[10px] tracking-[0.4em] text-indigo-600 font-bold uppercase">
                            The Fine Print, Made Plain
                        </span>
                        <span className="block w-8 h-px bg-gradient-to-l from-transparent to-indigo-500" />
                    </div>

                    <h1 className="font-serif text-3xl sm:text-4xl font-light text-[#1E1B4B] tracking-wide mb-3">
                        Terms{" "}
                        <span className="bg-gradient-to-r from-[#4338CA] via-[#6366F1] to-[#818CF8] bg-clip-text text-transparent font-normal">
                            of Use
                        </span>
                    </h1>

                    <p className="text-slate-500 leading-relaxed max-w-lg mx-auto mb-4 text-sm">
                        The terms and conditions for shopping, bespoke commissions, and
                        using ddollylamb.com.
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

export default TermsOfUse;