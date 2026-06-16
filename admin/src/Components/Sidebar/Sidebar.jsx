// import Button from '@mui/material/Button'
// import React, { useContext, useState } from 'react'
// import { Link, useLocation } from 'react-router-dom'
// import { RxDashboard } from "react-icons/rx";
// import { FaRegImage } from "react-icons/fa";
// import { FiUsers, FiSettings, FiBarChart2, FiBell } from "react-icons/fi";
// import { RiProductHuntLine } from "react-icons/ri";
// import { TbCategory, TbReportAnalytics, TbTag } from "react-icons/tb";
// import { IoBagCheckOutline } from "react-icons/io5";
// import { IoMdLogOut } from "react-icons/io";
// import { FaAngleDown, FaChevronRight } from "react-icons/fa6";
// import { MdOutlineInventory2, MdOutlineReviews, MdOutlineStorefront } from "react-icons/md";
// import { BiSolidCrown } from "react-icons/bi";
// import { Collapse } from 'react-collapse';
// import { MyContext } from '../../App';

// /* ─── D DOLLY LAMB Color Tokens ───
//    bg-primary:    #120800   (deep dark brown – main sidebar bg)
//    bg-secondary:  #1e1000   (slightly lighter for cards)
//    bg-hover:      #2a1800   (hover state)
//    gold:          #c9a84c   (primary gold accent – active states)
//    gold-light:    #e0c07a   (lighter gold – active text)
//    gold-mid:      #c4a55a   (readable inactive text on dark bg)
//    gold-icon:     #a08050   (icons, secondary text on dark bg)
//    gold-sub:      #b89060   (sub-item text)
//    gold-label:    #8a7040   (section labels)
//    border:        #3a2510   (subtle dark border, visible but not harsh)
//    text-primary:  #f5e6c8   (warm cream white)
// ──────────────────────────────── */

// /* ─── Premium Badge ─── */
// const PremiumBadge = () => (
//     <span
//         className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-sm text-[9px] font-bold tracking-wider uppercase flex-shrink-0"
//         style={{
//             background: 'linear-gradient(135deg, #c9a84c, #8a6f2e)',
//             color: '#120800',
//             letterSpacing: '0.08em',
//             border: '1px solid #c9a84c44'
//         }}>
//         <BiSolidCrown className="text-[8px]" /> PRO
//     </span>
// );

// /* ─── New Badge ─── */
// const NewBadge = () => (
//     <span
//         className="inline-flex items-center px-1.5 py-0.5 rounded-sm text-[9px] font-bold tracking-wider uppercase flex-shrink-0"
//         style={{
//             background: 'transparent',
//             color: '#c9a84c',
//             border: '1px solid #c9a84c',
//             letterSpacing: '0.08em'
//         }}>
//         NEW
//     </span>
// );

// /* ─── Notification Dot ─── */
// const NotifDot = ({ count }) => (
//     <span
//         className="ml-auto min-w-[20px] h-[20px] rounded-full flex items-center justify-center text-[10px] font-bold"
//         style={{ background: '#c9a84c', color: '#120800' }}>
//         {count}
//     </span>
// );

// /* ─── Diamond Logo Mark ─── */
// const LogoMark = () => (
//     <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
//         <path d="M18 3L33 18L18 33L3 18L18 3Z" stroke="#c9a84c" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
//         <path d="M18 3L33 18L18 33L3 18L18 3Z" fill="#c9a84c" fillOpacity="0.06" />
//         <text x="12" y="23" fontFamily="serif" fontSize="13" fontWeight="700" fill="#c9a84c">D</text>
//     </svg>
// );

// /* ─── Sidebar Item ─── */
// const SidebarItem = ({ to, icon, label, badge, notifCount, active, onClick }) => {
//     const baseClass = `w-full flex items-center gap-3 px-3 py-2.5 text-[13px] font-medium transition-all duration-200 cursor-pointer group`;
//     const activeStyle = active
//         ? { background: 'rgba(201,168,76,0.12)', borderLeft: '2px solid #c9a84c', color: '#e0c07a' }
//         : {};
//     const activeClass = active ? '' : '';

//     const content = (
//         <div
//             className={`${baseClass}`}
//             style={active ? activeStyle : { borderLeft: '2px solid transparent' }}
//             onClick={onClick}
//             onMouseEnter={e => { if (!active) { e.currentTarget.style.background = 'rgba(201,168,76,0.06)'; e.currentTarget.style.color = '#e0c07a'; } }}
//             onMouseLeave={e => { if (!active) { e.currentTarget.style.background = ''; e.currentTarget.style.color = ''; } }}
//         >
//             <span style={{ fontSize: '17px', flexShrink: 0, color: active ? '#c9a84c' : '#a08050', transition: 'color 0.2s' }}>
//                 {icon}
//             </span>
//             <span className="flex-1 truncate" style={{ color: active ? '#e0c07a' : '#c4a55a', letterSpacing: '0.02em' }}>{label}</span>
//             {badge === 'pro' && <PremiumBadge />}
//             {badge === 'new' && <NewBadge />}
//             {notifCount && <NotifDot count={notifCount} />}
//             {active && <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: '#c9a84c' }} />}
//         </div>
//     );

//     return to ? <Link to={to}>{content}</Link> : content;
// };

// /* ─── Collapsible Group ─── */
// const SidebarGroup = ({ icon, label, badge, index, submenuIndex, setSubmenuIndex, children }) => {
//     const isOpen = submenuIndex === index;
//     return (
//         <li>
//             <div
//                 className={`w-full flex items-center gap-3 px-3 py-2.5 text-[13px] font-medium transition-all duration-200 cursor-pointer`}
//                 style={{
//                     background: isOpen ? 'rgba(201,168,76,0.10)' : 'transparent',
//                     borderLeft: `2px solid ${isOpen ? '#c9a84c' : 'transparent'}`,
//                     color: isOpen ? '#e0c07a' : '#c4a55a'
//                 }}
//                 onClick={() => setSubmenuIndex(isOpen ? null : index)}
//             >
//                 <span style={{ fontSize: '17px', flexShrink: 0, color: isOpen ? '#c9a84c' : '#a08050', transition: 'color 0.2s' }}>
//                     {icon}
//                 </span>
//                 <span className="flex-1 truncate" style={{ letterSpacing: '0.02em' }}>{label}</span>
//                 {badge === 'pro' && <PremiumBadge />}
//                 {badge === 'new' && <NewBadge />}
//                 <FaAngleDown
//                     style={{
//                         fontSize: '10px',
//                         flexShrink: 0,
//                         color: isOpen ? '#c9a84c' : '#a08050',
//                         transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
//                         transition: 'transform 0.2s'
//                     }} />
//             </div>
//             <Collapse isOpened={isOpen}>
//                 <ul className="mt-1 ml-4 pl-3 pb-1 space-y-0.5" style={{ borderLeft: '1px solid #3a2510' }}>
//                     {children}
//                 </ul>
//             </Collapse>
//         </li>
//     );
// };

// /* ─── Sub Item ─── */
// const SubItem = ({ to, label, badge, onClick }) => {
//     const inner = (
//         <div
//             className="flex items-center gap-2 px-2 py-2 text-[12px] transition-all cursor-pointer group"
//             style={{ color: '#b89060', borderRadius: '2px' }}
//             onMouseEnter={e => { e.currentTarget.style.color = '#c9a84c'; e.currentTarget.style.background = 'rgba(201,168,76,0.06)'; }}
//             onMouseLeave={e => { e.currentTarget.style.color = '#b89060'; e.currentTarget.style.background = ''; }}
//             onClick={onClick}
//         >
//             <FaChevronRight style={{ fontSize: '7px', color: '#8a7040', flexShrink: 0 }} />
//             <span className="flex-1" style={{ letterSpacing: '0.02em' }}>{label}</span>
//             {badge === 'pro' && <PremiumBadge />}
//             {badge === 'new' && <NewBadge />}
//         </div>
//     );

//     return <li>{to ? <Link to={to}>{inner}</Link> : inner}</li>;
// };

// /* ─── Section Label ─── */
// const SectionLabel = ({ label }) => (
//     <li className="pt-5 pb-1 px-3">
//         <div className="flex items-center gap-2">
//             <span
//                 className="text-[9px] font-semibold tracking-[0.18em] uppercase"
//                 style={{ color: '#8a7040' }}>
//                 {label}
//             </span>
//             <div className="flex-1 h-px" style={{ background: '#3a2510' }} />
//         </div>
//     </li>
// );

// /* ══════════════════════════════════════════ */
// const Sidebar = () => {
//     const [submenuIndex, setSubmenuIndex] = useState(null);
//     const location = useLocation();
//     const context = useContext(MyContext);

//     const isActive = (path) => location.pathname === path;

//     return (
//         <div
//             className={`sidebar fixed top-0 left-0 h-full flex flex-col transition-all duration-300 overflow-hidden`}
//             style={{
//                 width: context.isSidebarOpen ? '260px' : '0px',
//                 background: '#120800',
//                 borderRight: '1px solid #3a2510',
//                 boxShadow: '4px 0 32px rgba(0,0,0,0.5)',
//                 WebkitFontSmoothing: 'antialiased',
//                 MozOsxFontSmoothing: 'grayscale',
//                 textRendering: 'optimizeLegibility',
//                 fontFamily: 'system-ui, -apple-system, sans-serif'
//             }}>

//             {/* ── Logo ── */}
//             <div
//                 className="flex items-center gap-3 px-4 py-5 flex-shrink-0"
//                 style={{ borderBottom: '1px solid #3a2510' }}>
//                 <Link to="/" className="flex items-center gap-3">
//                     <LogoMark />
//                     <div className="flex flex-col leading-none">
//                         <span
//                             className="text-[15px] font-bold leading-tight tracking-wider uppercase"
//                             style={{ WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale' }}>
//                             <span style={{ color: '#c9a84c' }}>D DOLLY</span>
//                             <span style={{ color: '#f5e6c8' }}> LAMB</span>
//                         </span>
//                         <span
//                             className="text-[9px] uppercase mt-1.5 font-semibold"
//                             style={{
//                                 color: '#c4a55a',
//                                 letterSpacing: '0.22em',
//                                 WebkitFontSmoothing: 'antialiased',
//                                 MozOsxFontSmoothing: 'grayscale'
//                             }}>
//                             Admin
//                         </span>
//                     </div>
//                 </Link>
//                 <div className="ml-auto flex-shrink-0">
//                     <PremiumBadge />
//                 </div>
//             </div>

//             {/* ── Admin Card ── */}
//             <div
//                 className="mx-3 mt-3 rounded-sm p-3 flex items-center gap-3 flex-shrink-0"
//                 style={{
//                     background: 'rgba(201,168,76,0.06)',
//                     border: '1px solid #3a2510'
//                 }}>
//                 <div
//                     className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
//                     style={{
//                         background: 'linear-gradient(135deg, #c9a84c, #8a6f2e)',
//                         color: '#120800',
//                         fontFamily: 'serif'
//                     }}>
//                     A
//                 </div>
//                 <div className="flex-1 min-w-0">
//                     <p className="text-[12px] font-semibold truncate" style={{ color: '#e0c07a' }}>Admin User</p>
//                     <p className="text-[10px] truncate" style={{ color: '#a08050', letterSpacing: '0.03em' }}>admin@ddollylamb.com</p>
//                 </div>
//                 <FiBell
//                     className="flex-shrink-0 cursor-pointer transition-colors"
//                     style={{ fontSize: '15px', color: '#a08050' }}
//                     onMouseEnter={e => e.currentTarget.style.color = '#c9a84c'}
//                     onMouseLeave={e => e.currentTarget.style.color = '#a08050'}
//                 />
//             </div>

//             {/* ── Nav ── */}
//             <nav className="flex-1 overflow-y-auto pb-4 mt-2 scrollbar-hide" style={{ scrollbarWidth: 'none' }}>
//                 <ul className="space-y-0.5">

//                     {/* MAIN */}
//                     <SectionLabel label="Main" />

//                     <li>
//                         <SidebarItem to="/" icon={<RxDashboard />} label="Dashboard" active={isActive('/')} />
//                     </li>

//                     <li>
//                         <SidebarItem to="/analytics" icon={<FiBarChart2 />} label="Analytics" badge="pro" active={isActive('/analytics')} />
//                     </li>

//                     {/* CATALOG */}
//                     <SectionLabel label="Catalog" />

//                     <SidebarGroup icon={<FaRegImage />} label="Home Slides" index={1} submenuIndex={submenuIndex} setSubmenuIndex={setSubmenuIndex}>
//                         <SubItem to="/homeSlider/list" label="Banner Slides List" />
//                         <SubItem label="Add Banner Slide" onClick={() => context.setIsOpenFullScreenPanel({ open: true, modal: 'Add Home Slide' })} />
//                     </SidebarGroup>

//                     <SidebarGroup icon={<RiProductHuntLine />} label="Products" index={3} submenuIndex={submenuIndex} setSubmenuIndex={setSubmenuIndex}>
//                         <SubItem to="/products" label="Product List" />
//                         <SubItem label="Add Product" onClick={() => context.setIsOpenFullScreenPanel({ open: true, modal: 'Add product' })} />
//                         <SubItem to="/bulk-upload" label="Bulk Add Products" badge="new" />
//                         <SubItem to="/reviews" label="Reviews & Ratings" />
//                     </SidebarGroup>

//                     <SidebarGroup icon={<TbCategory />} label="Category" index={4} submenuIndex={submenuIndex} setSubmenuIndex={setSubmenuIndex}>
//                         <SubItem to="/category/list" label="Category List" />
//                         <SubItem label="Add Category" onClick={() => context.setIsOpenFullScreenPanel({ open: true, modal: 'Add New Category' })} />
//                         <SubItem to="/subCategory/list" label="Sub Category List" />
//                         <SubItem label="Add Sub Category" onClick={() => context.setIsOpenFullScreenPanel({ open: true, modal: 'Add New Sub Category' })} />
//                     </SidebarGroup>

//                     {/* SALES */}
//                     <SectionLabel label="Sales" />

//                     <li>
//                         <SidebarItem to="/orders" icon={<IoBagCheckOutline />} label="Orders" notifCount={5} active={isActive('/orders')} />
//                     </li>

//                     <SidebarGroup icon={<TbTag />} label="Coupons & Offers" index={5} submenuIndex={submenuIndex} setSubmenuIndex={setSubmenuIndex} badge="new">
//                         <SubItem to="/coupons" label="All Coupons" />
//                         <SubItem to="/coupons/add" label="Create Coupon" />
//                         <SubItem to="/offers" label="Flash Sales" badge="pro" />
//                     </SidebarGroup>

//                     <li>
//                         <SidebarItem to="/reports" icon={<TbReportAnalytics />} label="Reports" badge="pro" active={isActive('/reports')} />
//                     </li>

//                     {/* MANAGE */}
//                     <SectionLabel label="Manage" />

//                     <li>
//                         <SidebarItem to="/users" icon={<FiUsers />} label="Users" active={isActive('/users')} />
//                     </li>

//                     <li>
//                         <SidebarItem to="/store" icon={<MdOutlineStorefront />} label="Store Settings" active={isActive('/store')} />
//                     </li>

//                     <SidebarGroup icon={<FiSettings />} label="Settings" index={6} submenuIndex={submenuIndex} setSubmenuIndex={setSubmenuIndex}>
//                         <SubItem to="/settings/general" label="General" />
//                         <SubItem to="/settings/payments" label="Payment Methods" />
//                         <SubItem to="/settings/shipping" label="Shipping Zones" />
//                         <SubItem to="/settings/notifications" label="Notifications" />
//                     </SidebarGroup>

//                 </ul>
//             </nav>

//             {/* ── Footer ── */}
//             <div
//                 className="px-3 pb-4 flex-shrink-0 pt-3"
//                 style={{ borderTop: '1px solid #2e1c08' }}>

//                 {/* Upgrade Banner – dark brown + gold gradient */}
//                 <div
//                     className="rounded-sm p-3 mb-3 relative overflow-hidden"
//                     style={{ background: 'linear-gradient(135deg, #1e1000 0%, #2a1800 100%)', border: '1px solid #c9a84c44' }}>
//                     {/* Decorative diamond watermark */}
//                     <div
//                         className="absolute top-1 right-2 opacity-10"
//                         style={{ fontSize: '48px', color: '#c9a84c', fontFamily: 'serif', lineHeight: 1 }}>
//                         ◆
//                     </div>
//                     <BiSolidCrown style={{ color: '#c9a84c', fontSize: '15px', marginBottom: '4px' }} />
//                     <p className="text-[11px] font-semibold leading-tight" style={{ color: '#e0c07a', letterSpacing: '0.04em' }}>
//                         Upgrade to Enterprise
//                     </p>
//                     <p className="text-[10px] mt-0.5" style={{ color: '#a08050' }}>
//                         Unlock advanced analytics & more
//                     </p>
//                     <button
//                         className="mt-2 text-[10px] font-bold px-3 py-1 transition-all"
//                         style={{
//                             background: 'linear-gradient(135deg, #c9a84c, #8a6f2e)',
//                             color: '#120800',
//                             borderRadius: '2px',
//                             letterSpacing: '0.06em',
//                             textTransform: 'uppercase',
//                             border: 'none'
//                         }}
//                         onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
//                         onMouseLeave={e => e.currentTarget.style.opacity = '1'}
//                     >
//                         Upgrade Now
//                     </button>
//                 </div>

//                 {/* Logout */}
//                 <div
//                     className="flex items-center gap-3 px-3 py-2.5 text-[13px] font-medium transition-all cursor-pointer"
//                     style={{ color: '#c4a55a', borderLeft: '2px solid transparent' }}
//                     onMouseEnter={e => { e.currentTarget.style.color = '#e05a5a'; e.currentTarget.style.background = 'rgba(224,90,90,0.06)'; }}
//                     onMouseLeave={e => { e.currentTarget.style.color = '#c4a55a'; e.currentTarget.style.background = ''; }}>
//                     <IoMdLogOut style={{ fontSize: '17px' }} />
//                     <span style={{ letterSpacing: '0.04em' }}>Logout</span>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Sidebar;






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
import { assets } from '../../assets/assets';

/* ─── D DOLLY LAMB — Light Luxury Color Tokens ───
   bg-base:       #FAFAF8   (warm ivory white – sidebar bg)
   bg-surface:    #F4F2EE   (soft warm off-white for cards)
   bg-hover:      #EDE9E2   (hover state, warm linen)
   bg-active:     #E8F4EE   (active item bg – soft sage green)

   navy:          #1C2B3A   (deep ink navy – primary text, strong headers)
   navy-mid:      #2E4057   (secondary text, nav labels)
   navy-soft:     #4A6070   (muted body text, icons)
   navy-ghost:    #8FA0AD   (placeholder, section labels)

   green:         #1A7A4A   (primary accent – active state, CTAs)
   green-light:   #2A9960   (hover on green elements)
   green-bg:      #E8F4EE   (active item background)
   green-border:  #A8D5BC   (active item border)

   champagne:     #B8985A   (premium badge, gold accent)
   champagne-bg:  #FBF5E8   (subtle gold background)
   champagne-bdr: #DBC98A   (gold border)

   border:        #E0DBD3   (subtle warm border)
   border-strong: #C8C2B8   (more visible divider)
   danger-soft:   #C0392B   (logout hover)
──────────────────────────────── */

/* ─── Premium Badge ─── */
const PremiumBadge = () => (
    <span
        className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[9px] font-bold tracking-wider uppercase flex-shrink-0"
        style={{
            background: '#FBF5E8',
            color: '#8B6914',
            border: '1px solid #DBC98A',
            letterSpacing: '0.08em',
            fontFamily: 'system-ui, sans-serif'
        }}>
        <BiSolidCrown style={{ fontSize: '8px', color: '#B8985A' }} /> PRO
    </span>
);

/* ─── New Badge ─── */
const NewBadge = () => (
    <span
        className="inline-flex items-center px-1.5 py-0.5 rounded text-[9px] font-bold tracking-wider uppercase flex-shrink-0"
        style={{
            background: '#E8F4EE',
            color: '#1A7A4A',
            border: '1px solid #A8D5BC',
            letterSpacing: '0.08em'
        }}>
        NEW
    </span>
);

/* ─── Notification Dot ─── */
const NotifDot = ({ count }) => (
    <span
        className="ml-auto min-w-[20px] h-[20px] rounded-full flex items-center justify-center text-[10px] font-bold"
        style={{ background: '#1A7A4A', color: '#FFFFFF' }}>
        {count}
    </span>
);

/* ─── Logo Mark ─── */
const LogoMark = () => (
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
        <rect width="34" height="34" rx="8" fill="#1A7A4A" fillOpacity="0.08" />
        <path d="M17 5L29 17L17 29L5 17L17 5Z" stroke="#1A7A4A" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
        <text x="11" y="22" fontFamily="Georgia, serif" fontSize="13" fontWeight="700" fill="#1A7A4A">D</text>
    </svg>
);

/* ─── Sidebar Item ─── */
const SidebarItem = ({ to, icon, label, badge, notifCount, active, onClick }) => {
    const content = (
        <div
            className={`w-full flex items-center gap-3 px-3 py-2 text-[13px] font-medium transition-all duration-150 cursor-pointer rounded-md mx-1`}
            style={active
                ? {
                    background: '#E8F4EE',
                    borderLeft: '2px solid #1A7A4A',
                    color: '#1A7A4A',
                    borderRadius: '0 6px 6px 0',
                    marginLeft: 0,
                    paddingLeft: '11px'
                }
                : { borderLeft: '2px solid transparent', color: '#4A6070' }
            }
            onClick={onClick}
            onMouseEnter={e => {
                if (!active) {
                    e.currentTarget.style.background = '#EDE9E2';
                    e.currentTarget.style.color = '#1C2B3A';
                }
            }}
            onMouseLeave={e => {
                if (!active) {
                    e.currentTarget.style.background = '';
                    e.currentTarget.style.color = '#4A6070';
                }
            }}
        >
            <span style={{ fontSize: '16px', flexShrink: 0, color: active ? '#1A7A4A' : '#8FA0AD', transition: 'color 0.15s' }}>
                {icon}
            </span>
            <span className="flex-1 truncate" style={{ color: active ? '#1A7A4A' : '#2E4057', letterSpacing: '0.01em', fontWeight: active ? 600 : 500 }}>
                {label}
            </span>
            {badge === 'pro' && <PremiumBadge />}
            {badge === 'new' && <NewBadge />}
            {notifCount && <NotifDot count={notifCount} />}
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
                className="w-full flex items-center gap-3 px-3 py-2 text-[13px] font-medium transition-all duration-150 cursor-pointer rounded-md"
                style={{
                    background: isOpen ? '#EDE9E2' : 'transparent',
                    borderLeft: `2px solid ${isOpen ? '#1A7A4A' : 'transparent'}`,
                    borderRadius: isOpen ? '0 6px 6px 0' : '6px',
                    paddingLeft: isOpen ? '11px' : '12px',
                    color: isOpen ? '#1C2B3A' : '#4A6070',
                    marginLeft: 0
                }}
                onClick={() => setSubmenuIndex(isOpen ? null : index)}
            >
                <span style={{ fontSize: '16px', flexShrink: 0, color: isOpen ? '#1A7A4A' : '#8FA0AD', transition: 'color 0.15s' }}>
                    {icon}
                </span>
                <span className="flex-1 truncate" style={{ letterSpacing: '0.01em', fontWeight: isOpen ? 600 : 500, color: isOpen ? '#1C2B3A' : '#2E4057' }}>
                    {label}
                </span>
                {badge === 'pro' && <PremiumBadge />}
                {badge === 'new' && <NewBadge />}
                <FaAngleDown
                    style={{
                        fontSize: '10px',
                        flexShrink: 0,
                        color: isOpen ? '#1A7A4A' : '#8FA0AD',
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.2s'
                    }} />
            </div>
            <Collapse isOpened={isOpen}>
                <ul className="mt-1 ml-4 pl-3 pb-1 space-y-0.5" style={{ borderLeft: '1.5px solid #E0DBD3' }}>
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
            className="flex items-center gap-2 px-2 py-1.5 text-[12px] transition-all cursor-pointer"
            style={{ color: '#8FA0AD', borderRadius: '4px' }}
            onMouseEnter={e => { e.currentTarget.style.color = '#1A7A4A'; e.currentTarget.style.background = '#E8F4EE'; }}
            onMouseLeave={e => { e.currentTarget.style.color = '#8FA0AD'; e.currentTarget.style.background = ''; }}
            onClick={onClick}
        >
            <FaChevronRight style={{ fontSize: '7px', color: '#C8C2B8', flexShrink: 0 }} />
            <span className="flex-1" style={{ letterSpacing: '0.01em', color: 'inherit' }}>{label}</span>
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
                className="text-[9px] font-bold tracking-[0.2em] uppercase"
                style={{ color: '#8FA0AD' }}>
                {label}
            </span>
            <div className="flex-1 h-px" style={{ background: '#E0DBD3' }} />
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
                background: '#FAFAF8',
                borderRight: '1px solid #E0DBD3',
                boxShadow: '2px 0 20px rgba(28,43,58,0.06)',
                WebkitFontSmoothing: 'antialiased',
                MozOsxFontSmoothing: 'grayscale',
                textRendering: 'optimizeLegibility',
                fontFamily: "'Inter', system-ui, -apple-system, sans-serif"
            }}>

            {/* ── Logo ── */}
            <div
                className="flex items-center gap-3 px-4 py-4 flex-shrink-0"
                style={{ borderBottom: '1px solid #E0DBD3' }}>
                <Link to="/" className="flex items-center gap-3">
                    {/* <LogoMark /> */}
                    <div className="flex flex-col justify-center m-auto p-auto">
                        {/* <span
                            className="text-[15px] font-bold leading-tight tracking-wide uppercase"
                            style={{ fontFamily: 'Georgia, serif' }}>
                            <span style={{ color: '#1A7A4A' }}>D Dolly</span>
                            <span style={{ color: '#1C2B3A' }}> Lamb</span>
                        </span> */}
                        <span className='ml-12'>
                            <img className='w-32 h-16 rounded' src={assets.admin_logo} alt="Admin Logo " />
                        </span>
                        <span
                            className="text-[9px] uppercase mt-1.5 ml-12 font-semibold"
                            style={{
                                color: '#8FA0AD',
                                letterSpacing: '0.22em'
                            }}>
                            Admin Portal
                        </span>
                    </div>
                </Link>
                {/* <div className="ml-auto flex-shrink-0">
                    <PremiumBadge />
                </div> */}
            </div>

            {/* ── Admin Card ── */}
            <div
                className="mx-3 mt-3 rounded-lg p-3 flex items-center gap-3 flex-shrink-0"
                style={{
                    background: '#F4F2EE',
                    border: '1px solid #E0DBD3'
                }}>
                <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                    style={{
                        background: '#1A7A4A',
                        color: '#FFFFFF',
                        fontFamily: 'Georgia, serif',
                        fontSize: '14px'
                    }}>
                    A
                </div>
                <div className="flex-1 min-w-0">
                    <p className="text-[12px] font-semibold truncate" style={{ color: '#1C2B3A' }}>Admin User</p>
                    <p className="text-[10px] truncate" style={{ color: '#8FA0AD', letterSpacing: '0.02em' }}>info@ddollylamb.com</p>
                </div>
                <div
                    className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 cursor-pointer transition-all"
                    style={{ background: '#FFFFFF', border: '1px solid #E0DBD3' }}
                    onMouseEnter={e => { e.currentTarget.style.background = '#E8F4EE'; e.currentTarget.style.borderColor = '#A8D5BC'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = '#FFFFFF'; e.currentTarget.style.borderColor = '#E0DBD3'; }}
                >
                    <FiBell style={{ fontSize: '12px', color: '#8FA0AD' }} />
                </div>
            </div>

            {/* ── Nav ── */}
            <nav className="flex-1 overflow-y-auto pb-4 mt-2 px-2" style={{ scrollbarWidth: 'none' }}>
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

                    {/* <SidebarGroup icon={<FaRegImage />} label="Home Slides" index={1} submenuIndex={submenuIndex} setSubmenuIndex={setSubmenuIndex}>
                        <SubItem to="/homeSlider/list" label="Banner Slides List" />
                        <SubItem label="Add Banner Slide" onClick={() => context.setIsOpenFullScreenPanel({ open: true, modal: 'Add Home Slide' })} />
                    </SidebarGroup> */}

                    <SidebarGroup icon={<RiProductHuntLine />} label="Products" index={3} submenuIndex={submenuIndex} setSubmenuIndex={setSubmenuIndex}>
                        <SubItem to="/products" label="Product List" />
                        <SubItem label="Add Product" onClick={() => context.setIsOpenFullScreenPanel({ open: true, modal: 'Add product' })} />
                        <SubItem to="/bulk-upload" label="Bulk Add Products" badge="new" />
                        <SubItem to="/reviews" label="Reviews & Ratings" />
                    </SidebarGroup>

                    <SidebarGroup icon={<TbCategory />} label="Category" index={4} submenuIndex={submenuIndex} setSubmenuIndex={setSubmenuIndex}>
                        <SubItem to="/category-management" label="Category Management" />
                        {/* <SubItem label="Add Category" onClick={() => context.setIsOpenFullScreenPanel({ open: true, modal: 'Add New Category' })} />
                        <SubItem to="/subCategory/list" label="Sub Category List" />
                        <SubItem label="Add Sub Category" onClick={() => context.setIsOpenFullScreenPanel({ open: true, modal: 'Add New Sub Category' })} /> */}
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
                style={{ borderTop: '1px solid #E0DBD3' }}>

                {/* Upgrade Banner */}
                <div
                    className="rounded-lg p-3 mb-3 relative overflow-hidden"
                    style={{
                        background: '#F0F8F4',
                        border: '1px solid #A8D5BC'
                    }}>
                    {/* Decorative accent */}
                    <div
                        className="absolute top-0 right-0 w-16 h-16 opacity-5"
                        style={{
                            background: '#1A7A4A',
                            borderRadius: '0 8px 0 100%'
                        }}
                    />
                    <div className="flex items-center gap-2 mb-2">
                        <BiSolidCrown style={{ color: '#B8985A', fontSize: '14px' }} />
                        <span className="text-[11px] font-bold uppercase tracking-wider" style={{ color: '#1A7A4A', letterSpacing: '0.1em' }}>Enterprise</span>
                    </div>
                    <p className="text-[11px] font-semibold leading-tight" style={{ color: '#1C2B3A' }}>
                        Upgrade your plan
                    </p>
                    <p className="text-[10px] mt-0.5 mb-2" style={{ color: '#8FA0AD' }}>
                        Advanced analytics & priority support
                    </p>
                    <button
                        className="text-[10px] font-bold px-3 py-1.5 transition-all w-full"
                        style={{
                            background: '#1A7A4A',
                            color: '#FFFFFF',
                            borderRadius: '5px',
                            letterSpacing: '0.06em',
                            textTransform: 'uppercase',
                            border: 'none',
                            cursor: 'pointer'
                        }}
                        onMouseEnter={e => e.currentTarget.style.background = '#2A9960'}
                        onMouseLeave={e => e.currentTarget.style.background = '#1A7A4A'}
                    >
                        Upgrade Now
                    </button>
                </div>

                {/* Logout */}
                {/* <div
                    className="flex items-center gap-3 px-3 py-2.5 text-[13px] font-medium transition-all cursor-pointer rounded-md"
                    style={{ color: '#8FA0AD' }}
                    onMouseEnter={e => {
                        e.currentTarget.style.color = '#C0392B';
                        e.currentTarget.style.background = '#FEF2F2';
                    }}
                    onMouseLeave={e => {
                        e.currentTarget.style.color = '#8FA0AD';
                        e.currentTarget.style.background = '';
                    }}>
                    <IoMdLogOut style={{ fontSize: '16px' }} />
                    <span style={{ letterSpacing: '0.02em' }}>Sign Out</span>
                </div> */}
                <div
                    className="flex items-center gap-3 px-3 py-2.5 text-[13px] font-medium transition-all cursor-pointer rounded-md"
                    style={{
                        color: '#374151',  // 🔥 darker default text
                    }}
                    onClick={() => {
                        context?.setToken('');
                        context?.setIsLogin(false);
                        localStorage.removeItem('token');
                    }}
                    onMouseEnter={e => {
                        e.currentTarget.style.color = '#DC2626';        // strong red
                        e.currentTarget.style.background = 'rgba(220,38,38,0.1)'; // subtle red bg
                    }}
                    onMouseLeave={e => {
                        e.currentTarget.style.color = '#374151';
                        e.currentTarget.style.background = 'transparent';
                    }}
                >
                    <IoMdLogOut style={{ fontSize: '16px' }} />
                    <span style={{ letterSpacing: '0.02em' }}>Sign Out</span>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;