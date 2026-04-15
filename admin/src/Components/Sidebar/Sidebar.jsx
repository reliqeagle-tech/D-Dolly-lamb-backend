import Button from '@mui/material/Button'
import React, { useContext, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { RxDashboard } from "react-icons/rx";
import { FaRegImage } from "react-icons/fa";
import { FiUsers, FiSettings, FiBarChart2, FiBell } from "react-icons/fi";
import { RiProductHuntLine } from "react-icons/ri";
import { TbCategory, TbReportAnalytics, TbTag } from "react-icons/tb";
import { IoBagCheckOutline } from "react-icons/io5";
import { IoMdLogOut } from "react-icons/io";
import { FaAngleDown, FaChevronRight } from "react-icons/fa6";
import { MdOutlineInventory2, MdOutlineReviews, MdOutlineStorefront } from "react-icons/md";
import { BiSolidCrown } from "react-icons/bi";
import { Collapse } from 'react-collapse';
import { MyContext } from '../../App';

/* ─── D DOLLY LAMB Color Tokens ───
   bg-primary:    #120800   (deep dark brown – main sidebar bg)
   bg-secondary:  #1e1000   (slightly lighter for cards)
   bg-hover:      #2a1800   (hover state)
   gold:          #c9a84c   (primary gold accent – active states)
   gold-light:    #e0c07a   (lighter gold – active text)
   gold-mid:      #c4a55a   (readable inactive text on dark bg)
   gold-icon:     #a08050   (icons, secondary text on dark bg)
   gold-sub:      #b89060   (sub-item text)
   gold-label:    #8a7040   (section labels)
   border:        #3a2510   (subtle dark border, visible but not harsh)
   text-primary:  #f5e6c8   (warm cream white)
──────────────────────────────── */

/* ─── Premium Badge ─── */
const PremiumBadge = () => (
    <span
        className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-sm text-[9px] font-bold tracking-wider uppercase flex-shrink-0"
        style={{
            background: 'linear-gradient(135deg, #c9a84c, #8a6f2e)',
            color: '#120800',
            letterSpacing: '0.08em',
            border: '1px solid #c9a84c44'
        }}>
        <BiSolidCrown className="text-[8px]" /> PRO
    </span>
);

/* ─── New Badge ─── */
const NewBadge = () => (
    <span
        className="inline-flex items-center px-1.5 py-0.5 rounded-sm text-[9px] font-bold tracking-wider uppercase flex-shrink-0"
        style={{
            background: 'transparent',
            color: '#c9a84c',
            border: '1px solid #c9a84c',
            letterSpacing: '0.08em'
        }}>
        NEW
    </span>
);

/* ─── Notification Dot ─── */
const NotifDot = ({ count }) => (
    <span
        className="ml-auto min-w-[20px] h-[20px] rounded-full flex items-center justify-center text-[10px] font-bold"
        style={{ background: '#c9a84c', color: '#120800' }}>
        {count}
    </span>
);

/* ─── Diamond Logo Mark ─── */
const LogoMark = () => (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
        <path d="M18 3L33 18L18 33L3 18L18 3Z" stroke="#c9a84c" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
        <path d="M18 3L33 18L18 33L3 18L18 3Z" fill="#c9a84c" fillOpacity="0.06" />
        <text x="12" y="23" fontFamily="serif" fontSize="13" fontWeight="700" fill="#c9a84c">D</text>
    </svg>
);

/* ─── Sidebar Item ─── */
const SidebarItem = ({ to, icon, label, badge, notifCount, active, onClick }) => {
    const baseClass = `w-full flex items-center gap-3 px-3 py-2.5 text-[13px] font-medium transition-all duration-200 cursor-pointer group`;
    const activeStyle = active
        ? { background: 'rgba(201,168,76,0.12)', borderLeft: '2px solid #c9a84c', color: '#e0c07a' }
        : {};
    const activeClass = active ? '' : '';

    const content = (
        <div
            className={`${baseClass}`}
            style={active ? activeStyle : { borderLeft: '2px solid transparent' }}
            onClick={onClick}
            onMouseEnter={e => { if (!active) { e.currentTarget.style.background = 'rgba(201,168,76,0.06)'; e.currentTarget.style.color = '#e0c07a'; } }}
            onMouseLeave={e => { if (!active) { e.currentTarget.style.background = ''; e.currentTarget.style.color = ''; } }}
        >
            <span style={{ fontSize: '17px', flexShrink: 0, color: active ? '#c9a84c' : '#a08050', transition: 'color 0.2s' }}>
                {icon}
            </span>
            <span className="flex-1 truncate" style={{ color: active ? '#e0c07a' : '#c4a55a', letterSpacing: '0.02em' }}>{label}</span>
            {badge === 'pro' && <PremiumBadge />}
            {badge === 'new' && <NewBadge />}
            {notifCount && <NotifDot count={notifCount} />}
            {active && <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: '#c9a84c' }} />}
        </div>
    );

    return to ? <Link to={to}>{content}</Link> : content;
};

/* ─── Collapsible Group ─── */
const SidebarGroup = ({ icon, label, badge, index, submenuIndex, setSubmenuIndex, children }) => {
    const isOpen = submenuIndex === index;
    return (
        <li>
            <div
                className={`w-full flex items-center gap-3 px-3 py-2.5 text-[13px] font-medium transition-all duration-200 cursor-pointer`}
                style={{
                    background: isOpen ? 'rgba(201,168,76,0.10)' : 'transparent',
                    borderLeft: `2px solid ${isOpen ? '#c9a84c' : 'transparent'}`,
                    color: isOpen ? '#e0c07a' : '#c4a55a'
                }}
                onClick={() => setSubmenuIndex(isOpen ? null : index)}
            >
                <span style={{ fontSize: '17px', flexShrink: 0, color: isOpen ? '#c9a84c' : '#a08050', transition: 'color 0.2s' }}>
                    {icon}
                </span>
                <span className="flex-1 truncate" style={{ letterSpacing: '0.02em' }}>{label}</span>
                {badge === 'pro' && <PremiumBadge />}
                {badge === 'new' && <NewBadge />}
                <FaAngleDown
                    style={{
                        fontSize: '10px',
                        flexShrink: 0,
                        color: isOpen ? '#c9a84c' : '#a08050',
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.2s'
                    }} />
            </div>
            <Collapse isOpened={isOpen}>
                <ul className="mt-1 ml-4 pl-3 pb-1 space-y-0.5" style={{ borderLeft: '1px solid #3a2510' }}>
                    {children}
                </ul>
            </Collapse>
        </li>
    );
};

/* ─── Sub Item ─── */
const SubItem = ({ to, label, badge, onClick }) => {
    const inner = (
        <div
            className="flex items-center gap-2 px-2 py-2 text-[12px] transition-all cursor-pointer group"
            style={{ color: '#b89060', borderRadius: '2px' }}
            onMouseEnter={e => { e.currentTarget.style.color = '#c9a84c'; e.currentTarget.style.background = 'rgba(201,168,76,0.06)'; }}
            onMouseLeave={e => { e.currentTarget.style.color = '#b89060'; e.currentTarget.style.background = ''; }}
            onClick={onClick}
        >
            <FaChevronRight style={{ fontSize: '7px', color: '#8a7040', flexShrink: 0 }} />
            <span className="flex-1" style={{ letterSpacing: '0.02em' }}>{label}</span>
            {badge === 'pro' && <PremiumBadge />}
            {badge === 'new' && <NewBadge />}
        </div>
    );

    return <li>{to ? <Link to={to}>{inner}</Link> : inner}</li>;
};

/* ─── Section Label ─── */
const SectionLabel = ({ label }) => (
    <li className="pt-5 pb-1 px-3">
        <div className="flex items-center gap-2">
            <span
                className="text-[9px] font-semibold tracking-[0.18em] uppercase"
                style={{ color: '#8a7040' }}>
                {label}
            </span>
            <div className="flex-1 h-px" style={{ background: '#3a2510' }} />
        </div>
    </li>
);

/* ══════════════════════════════════════════ */
const Sidebar = () => {
    const [submenuIndex, setSubmenuIndex] = useState(null);
    const location = useLocation();
    const context = useContext(MyContext);

    const isActive = (path) => location.pathname === path;

    return (
        <div
            className={`sidebar fixed top-0 left-0 h-full flex flex-col transition-all duration-300 overflow-hidden`}
            style={{
                width: context.isSidebarOpen ? '260px' : '0px',
                background: '#120800',
                borderRight: '1px solid #3a2510',
                boxShadow: '4px 0 32px rgba(0,0,0,0.5)',
                WebkitFontSmoothing: 'antialiased',
                MozOsxFontSmoothing: 'grayscale',
                textRendering: 'optimizeLegibility',
                fontFamily: 'system-ui, -apple-system, sans-serif'
            }}>

            {/* ── Logo ── */}
            <div
                className="flex items-center gap-3 px-4 py-5 flex-shrink-0"
                style={{ borderBottom: '1px solid #3a2510' }}>
                <Link to="/" className="flex items-center gap-3">
                    <LogoMark />
                    <div className="flex flex-col leading-none">
                        <span
                            className="text-[15px] font-bold leading-tight tracking-wider uppercase"
                            style={{ WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale' }}>
                            <span style={{ color: '#c9a84c' }}>D DOLLY</span>
                            <span style={{ color: '#f5e6c8' }}> LAMB</span>
                        </span>
                        <span
                            className="text-[9px] uppercase mt-1.5 font-semibold"
                            style={{
                                color: '#c4a55a',
                                letterSpacing: '0.22em',
                                WebkitFontSmoothing: 'antialiased',
                                MozOsxFontSmoothing: 'grayscale'
                            }}>
                            Admin
                        </span>
                    </div>
                </Link>
                <div className="ml-auto flex-shrink-0">
                    <PremiumBadge />
                </div>
            </div>

            {/* ── Admin Card ── */}
            <div
                className="mx-3 mt-3 rounded-sm p-3 flex items-center gap-3 flex-shrink-0"
                style={{
                    background: 'rgba(201,168,76,0.06)',
                    border: '1px solid #3a2510'
                }}>
                <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                    style={{
                        background: 'linear-gradient(135deg, #c9a84c, #8a6f2e)',
                        color: '#120800',
                        fontFamily: 'serif'
                    }}>
                    A
                </div>
                <div className="flex-1 min-w-0">
                    <p className="text-[12px] font-semibold truncate" style={{ color: '#e0c07a' }}>Admin User</p>
                    <p className="text-[10px] truncate" style={{ color: '#a08050', letterSpacing: '0.03em' }}>admin@ddollylamb.com</p>
                </div>
                <FiBell
                    className="flex-shrink-0 cursor-pointer transition-colors"
                    style={{ fontSize: '15px', color: '#a08050' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#c9a84c'}
                    onMouseLeave={e => e.currentTarget.style.color = '#a08050'}
                />
            </div>

            {/* ── Nav ── */}
            <nav className="flex-1 overflow-y-auto pb-4 mt-2 scrollbar-hide" style={{ scrollbarWidth: 'none' }}>
                <ul className="space-y-0.5">

                    {/* MAIN */}
                    <SectionLabel label="Main" />

                    <li>
                        <SidebarItem to="/" icon={<RxDashboard />} label="Dashboard" active={isActive('/')} />
                    </li>

                    <li>
                        <SidebarItem to="/analytics" icon={<FiBarChart2 />} label="Analytics" badge="pro" active={isActive('/analytics')} />
                    </li>

                    {/* CATALOG */}
                    <SectionLabel label="Catalog" />

                    <SidebarGroup icon={<FaRegImage />} label="Home Slides" index={1} submenuIndex={submenuIndex} setSubmenuIndex={setSubmenuIndex}>
                        <SubItem to="/homeSlider/list" label="Banner Slides List" />
                        <SubItem label="Add Banner Slide" onClick={() => context.setIsOpenFullScreenPanel({ open: true, modal: 'Add Home Slide' })} />
                    </SidebarGroup>

                    <SidebarGroup icon={<RiProductHuntLine />} label="Products" index={3} submenuIndex={submenuIndex} setSubmenuIndex={setSubmenuIndex}>
                        <SubItem to="/products" label="Product List" />
                        <SubItem label="Add Product" onClick={() => context.setIsOpenFullScreenPanel({ open: true, modal: 'Add product' })} />
                        <SubItem to="/bulk-upload" label="Bulk Add Products" badge="new" />
                        <SubItem to="/reviews" label="Reviews & Ratings" />
                    </SidebarGroup>

                    <SidebarGroup icon={<TbCategory />} label="Category" index={4} submenuIndex={submenuIndex} setSubmenuIndex={setSubmenuIndex}>
                        <SubItem to="/category/list" label="Category List" />
                        <SubItem label="Add Category" onClick={() => context.setIsOpenFullScreenPanel({ open: true, modal: 'Add New Category' })} />
                        <SubItem to="/subCategory/list" label="Sub Category List" />
                        <SubItem label="Add Sub Category" onClick={() => context.setIsOpenFullScreenPanel({ open: true, modal: 'Add New Sub Category' })} />
                    </SidebarGroup>

                    {/* SALES */}
                    <SectionLabel label="Sales" />

                    <li>
                        <SidebarItem to="/orders" icon={<IoBagCheckOutline />} label="Orders" notifCount={5} active={isActive('/orders')} />
                    </li>

                    <SidebarGroup icon={<TbTag />} label="Coupons & Offers" index={5} submenuIndex={submenuIndex} setSubmenuIndex={setSubmenuIndex} badge="new">
                        <SubItem to="/coupons" label="All Coupons" />
                        <SubItem to="/coupons/add" label="Create Coupon" />
                        <SubItem to="/offers" label="Flash Sales" badge="pro" />
                    </SidebarGroup>

                    <li>
                        <SidebarItem to="/reports" icon={<TbReportAnalytics />} label="Reports" badge="pro" active={isActive('/reports')} />
                    </li>

                    {/* MANAGE */}
                    <SectionLabel label="Manage" />

                    <li>
                        <SidebarItem to="/users" icon={<FiUsers />} label="Users" active={isActive('/users')} />
                    </li>

                    <li>
                        <SidebarItem to="/store" icon={<MdOutlineStorefront />} label="Store Settings" active={isActive('/store')} />
                    </li>

                    <SidebarGroup icon={<FiSettings />} label="Settings" index={6} submenuIndex={submenuIndex} setSubmenuIndex={setSubmenuIndex}>
                        <SubItem to="/settings/general" label="General" />
                        <SubItem to="/settings/payments" label="Payment Methods" />
                        <SubItem to="/settings/shipping" label="Shipping Zones" />
                        <SubItem to="/settings/notifications" label="Notifications" />
                    </SidebarGroup>

                </ul>
            </nav>

            {/* ── Footer ── */}
            <div
                className="px-3 pb-4 flex-shrink-0 pt-3"
                style={{ borderTop: '1px solid #2e1c08' }}>

                {/* Upgrade Banner – dark brown + gold gradient */}
                <div
                    className="rounded-sm p-3 mb-3 relative overflow-hidden"
                    style={{ background: 'linear-gradient(135deg, #1e1000 0%, #2a1800 100%)', border: '1px solid #c9a84c44' }}>
                    {/* Decorative diamond watermark */}
                    <div
                        className="absolute top-1 right-2 opacity-10"
                        style={{ fontSize: '48px', color: '#c9a84c', fontFamily: 'serif', lineHeight: 1 }}>
                        ◆
                    </div>
                    <BiSolidCrown style={{ color: '#c9a84c', fontSize: '15px', marginBottom: '4px' }} />
                    <p className="text-[11px] font-semibold leading-tight" style={{ color: '#e0c07a', letterSpacing: '0.04em' }}>
                        Upgrade to Enterprise
                    </p>
                    <p className="text-[10px] mt-0.5" style={{ color: '#a08050' }}>
                        Unlock advanced analytics & more
                    </p>
                    <button
                        className="mt-2 text-[10px] font-bold px-3 py-1 transition-all"
                        style={{
                            background: 'linear-gradient(135deg, #c9a84c, #8a6f2e)',
                            color: '#120800',
                            borderRadius: '2px',
                            letterSpacing: '0.06em',
                            textTransform: 'uppercase',
                            border: 'none'
                        }}
                        onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
                        onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                    >
                        Upgrade Now
                    </button>
                </div>

                {/* Logout */}
                <div
                    className="flex items-center gap-3 px-3 py-2.5 text-[13px] font-medium transition-all cursor-pointer"
                    style={{ color: '#c4a55a', borderLeft: '2px solid transparent' }}
                    onMouseEnter={e => { e.currentTarget.style.color = '#e05a5a'; e.currentTarget.style.background = 'rgba(224,90,90,0.06)'; }}
                    onMouseLeave={e => { e.currentTarget.style.color = '#c4a55a'; e.currentTarget.style.background = ''; }}>
                    <IoMdLogOut style={{ fontSize: '17px' }} />
                    <span style={{ letterSpacing: '0.04em' }}>Logout</span>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;