// import Button from '@mui/material/Button'
// import React, { useContext, useState } from 'react'
// import { Link } from 'react-router-dom'
// import { RxDashboard } from "react-icons/rx";
// import { FaRegImage } from "react-icons/fa";
// import { FiUsers } from "react-icons/fi";
// import { RiProductHuntLine } from "react-icons/ri";
// import { TbCategory } from "react-icons/tb";
// import { IoBagCheckOutline } from "react-icons/io5";
// import { IoMdLogOut } from "react-icons/io";
// import { FaAngleDown } from "react-icons/fa6";
// import { Collapse } from 'react-collapse';
// import { MyContext } from '../../App';

// const Sidebar = () => {
//     const [submenuIndex, setSubmenuIndex] = useState(null);
//     const isOpenSubMenu = (index) => {
//         if (submenuIndex === index) {
//             setSubmenuIndex(null);
//         } else {
//             setSubmenuIndex(index)
//         }
//     }

//     const context = useContext(MyContext)

//     /* ── SVG Logo ── */
//     const LogoMark = () => (
//         <svg
//             width="36"
//             height="36"
//             viewBox="0 0 36 36"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//             className="logo-mark flex-shrink-0"
//         >
//             <path
//                 d="M18 2L34 18L18 34L2 18L18 2Z"
//                 stroke="#6366f1"
//                 strokeWidth="1.5"
//                 fill="none"
//                 strokeLinejoin="round"
//             />
//             <path
//                 d="M18 8L28 18L18 28L8 18L18 8Z"
//                 fill="#6366f1"
//                 fillOpacity="0.15"
//                 stroke="#818cf8"
//                 strokeWidth="1"
//                 strokeLinejoin="round"
//             />
//             <text
//                 x="11"
//                 y="22"
//                 fontFamily="Cormorant Garamond, serif"
//                 fontSize="12"
//                 fontWeight="700"
//                 fill="#ffffff"
//             >
//                 L
//             </text>
//             <text
//                 x="18"
//                 y="22"
//                 fontFamily="Cormorant Garamond, serif"
//                 fontSize="12"
//                 fontWeight="700"
//                 fill="#818cf8"
//             >
//                 L
//             </text>
//         </svg>
//     );

//     return (
//         <>
//             <div className={`sidebar fixed bg-[#fafafa] top-0 left-0 h-full w-1/5 border-r border-gray-300 px-3 py-2 w-[${context.isSidebarOpen === true ? '20%' : '0px'}]`}>
//                 <div className='py-2 w-full'>
//                     {/* <Link to='/'>
//                         <div className="flex items-center gap-2 cursor-pointer">
//                             <div className="border-2 border-[#3872fa] p-2 lg:p-4 text-xl lg:text-2xl font-bold">D</div>

//                             <div className="text-xs md:text-lg leading-none">
//                                 <p className="font-semibold leading-none">DOLLY</p>
//                                 <p className="text-[#3872fa] leading-none">LAMB</p>
//                                 <p className="font-semibold leading-none">ADMIN</p>
//                             </div>
//                         </div>
//                     </Link> */}
//                     <Link
//                         to="/"
//                         className="logo-wrap flex items-center gap-2.5 flex-shrink-0 group"
//                     >
//                         <LogoMark />
//                         <div className="flex flex-col leading-none">
//                             <span className="nav-brand text-[18px] sm:text-[20px] font-semibold text-black leading-[1.1] tracking-wide">
//                                 <span className="text-indigo-400">LL</span>
//                                 <span className="text-black/70"> Leather</span>
//                             </span>
//                             <span className="nav-brand text-[10px] sm:text-[11px] tracking-[3px] text-black/50 uppercase font-normal">
//                                 Lovers
//                             </span>
//                             <span className="text-[10px] sm:text-[14px] tracking-[3px] text-indigo/50 uppercase font-medium">
//                                 Admin
//                             </span>
//                         </div>
//                     </Link>
//                 </div>

//                 <ul className='mt-4'>
//                     <li> <Link to='/'> <Button className='w-full !capitalize !justify-start flex gap-3 !text-[14px] !text-gray-800 !py-2 hover:!bg-[#f1f1f1]'><RxDashboard className='text-[18px]' /> <span className='lg:text-[16px]'>Dashbord</span></Button> </Link></li>
//                     <li><Button className='w-full !capitalize !justify-start flex gap-3 !text-[14px] !text-gray-800 !py-2 hover:!bg-[#f1f1f1]' onClick={() => isOpenSubMenu(1)}><FaRegImage className={`text-[18px]`} /> <span className='lg:text-[16px]'>Home Slides</span> <span className='ml-auto w-[30px] h-[30px] flex items-center justify-center' ><FaAngleDown className={`transition-all ${submenuIndex === 1 ? 'rotate-180' : ''}`} /></span></Button>
//                         <Collapse isOpened={submenuIndex === 1 ? true : false}>
//                             <ul className='w-full'>
//                                 <li className='w-full'><Link to='/homeSlider/list'><Button className='!text-gray-800 !flex justify-start !pl-9 !capitalize !text-gray-600 flex gap-3'><span className='block w-[5px] h-[5px] rounded-full bg-gray-600'></span><span className='!text-[12px] lg:text-[12px] !font-medium '>Home Banners Slides List</span></Button></Link></li>
//                                 <li className='w-full'><Button className='!text-gray-800 !flex justify-start !pl-9 !capitalize !text-gray-600 flex gap-3' onClick={() => context.setIsOpenFullScreenPanel({ open: true, modal: 'Add Home Slide' })}><span className='block w-[5px] h-[5px] rounded-full bg-gray-600' ></span><span className='text-[12px] lg:text-[12px] font-medium leading-3'>Add Home Banner Slide</span></Button></li>
//                             </ul>
//                         </Collapse>
//                     </li>
//                     <li><Link to='/users'><Button className='w-full !capitalize !justify-start flex gap-3 !text-[14px] !text-gray-800 !py-2 hover:!bg-[#f1f1f1]'><FiUsers className='text-[18px]' /> <span className='lg:text-[16px]'>Users</span></Button></Link></li>
//                     <li><Button className='w-full !capitalize !justify-start flex gap-3 !text-[14px] !text-gray-800 !py-2 hover:!bg-[#f1f1f1]' onClick={() => isOpenSubMenu(3)}><RiProductHuntLine className={`text-[18px]`} /> <span className='lg:text-[16px]'>Products</span> <span className='ml-auto w-[30px] h-[30px] flex items-center justify-center' ><FaAngleDown className={`transition-all ${submenuIndex === 3 ? 'rotate-180' : ''}`} /></span></Button>
//                         <Collapse isOpened={submenuIndex === 3 ? true : false}>
//                             <ul className='w-full'>
//                                 <li className='w-full'><Link to='/products'> <Button className='!text-gray-800 !flex justify-start !pl-9 !capitalize !text-gray-600 flex gap-3'><span className='block w-[5px] h-[5px] rounded-full bg-gray-600'></span><span className='!text-[12px] lg:text-[12px] !font-medium '>Product List</span></Button></Link></li>
//                                 <li className='w-full'><Button className='!text-gray-800 !flex justify-start !pl-9 !capitalize !text-gray-600 flex gap-3' onClick={() => context.setIsOpenFullScreenPanel({ open: true, modal: 'Add product' })}><span className='block w-[5px] h-[5px] rounded-full bg-gray-600'></span><span className='text-[12px] lg:text-[12px] font-medium '>Product Upload</span></Button></li>
//                                 {/* <li className='w-full'><Button className='!text-gray-800 !flex justify-start !pl-9 !capitalize !text-gray-600 flex gap-3'><span className='block w-[5px] h-[5px] rounded-full bg-gray-600'></span><span className='text-[12px] lg:text-[12px] font-medium '>sub Category List</span></Button></li>
//                                 <li className='w-full'><Button className='!text-gray-800 !flex justify-start !pl-9 !capitalize !text-gray-600 flex gap-3'><span className='block w-[5px] h-[5px] rounded-full bg-gray-600'></span><span className='text-[12px] lg:text-[12px] font-medium '>Add A Sub Category</span></Button></li> */}
//                             </ul>
//                         </Collapse>
//                     </li>
//                     <li><Button className='w-full !capitalize !justify-start flex gap-3 !text-[14px] !text-gray-800 !py-2 hover:!bg-[#f1f1f1]' onClick={() => isOpenSubMenu(4)}><TbCategory className={`text-[18px]`} /> <span className='lg:text-[16px]'>Category</span> <span className='ml-auto w-[30px] h-[30px] flex items-center justify-center' ><FaAngleDown className={`transition-all ${submenuIndex === 4 ? 'rotate-180' : ''}`} /></span></Button>
//                         <Collapse isOpened={submenuIndex === 4 ? true : false}>
//                             <ul className='w-full'>
//                                 <li className='w-full'><Link to='/category/list'> <Button className='!text-gray-800 !flex justify-start !pl-9 !capitalize !text-gray-600 flex gap-3'><span className='block w-[5px] h-[5px] rounded-full bg-gray-600'></span><span className='!text-[12px] lg:text-[12px] !font-medium '>Category List</span></Button></Link> </li>
//                                 <li className='w-full'><Button className='!text-gray-800 !flex justify-start !pl-9 !capitalize !text-gray-600 flex gap-3' onClick={() => context.setIsOpenFullScreenPanel({ open: true, modal: 'Add New Category' })}><span className='block w-[5px] h-[5px] rounded-full bg-gray-600'></span><span className='text-[12px] lg:text-[12px] font-medium '>Add A Category</span></Button></li>
//                                 <li className='w-full'><Link to='/subCategory/list'><Button className='!text-gray-800 !flex justify-start !pl-9 !capitalize !text-gray-600 flex gap-3'><span className='block w-[5px] h-[5px] rounded-full bg-gray-600'></span><span className='text-[12px] lg:text-[12px] font-medium '>sub Category List</span></Button></Link></li>
//                                 <li className='w-full'><Button className='!text-gray-800 !flex justify-start !pl-9 !capitalize !text-gray-600 flex gap-3' onClick={() => context.setIsOpenFullScreenPanel({ open: true, modal: 'Add New Sub Category' })}><span className='block w-[5px] h-[5px] rounded-full bg-gray-600'></span><span className='text-[12px] lg:text-[12px] font-medium '>Add A Sub Category</span></Button></li>
//                             </ul>
//                         </Collapse>
//                     </li>
//                     <li><Link to='/orders'> <Button className='w-full !capitalize !justify-start flex gap-3 !text-[14px] !text-gray-800 !py-2 hover:!bg-[#f1f1f1]'><IoBagCheckOutline className='text-[20px]' /> <span className='lg:text-[16px]'>Orders</span> </Button></Link></li>
//                     <li><Button className='w-full !capitalize !justify-start flex gap-3 !text-[14px] !text-gray-800 !py-2 hover:!bg-[#f1f1f1]'><IoMdLogOut className='text-[20px]' /> <span className='lg:text-[16px]'>Logout</span></Button></li>
//                 </ul>
//             </div>
//         </>
//     )
// }

// export default Sidebar




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

/* ─── Premium Badge ─── */
const PremiumBadge = () => (
    <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full text-[9px] font-bold tracking-wider uppercase"
        style={{ background: 'linear-gradient(135deg, #f59e0b, #d97706)', color: '#fff', letterSpacing: '0.08em' }}>
        <BiSolidCrown className="text-[8px]" /> PRO
    </span>
);

/* ─── New Badge ─── */
const NewBadge = () => (
    <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-[9px] font-bold tracking-wider uppercase"
        style={{ background: 'linear-gradient(135deg, #6366f1, #818cf8)', color: '#fff' }}>
        NEW
    </span>
);

/* ─── Notification Dot ─── */
const NotifDot = ({ count }) => (
    <span className="ml-auto min-w-[20px] h-[20px] rounded-full flex items-center justify-center text-[10px] font-bold text-white"
        style={{ background: '#ef4444' }}>
        {count}
    </span>
);

/* ─── SVG Logo ─── */
const LogoMark = () => (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
        <path d="M18 2L34 18L18 34L2 18L18 2Z" stroke="#6366f1" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
        <path d="M18 8L28 18L18 28L8 18L18 8Z" fill="#6366f1" fillOpacity="0.15" stroke="#818cf8" strokeWidth="1" strokeLinejoin="round" />
        <text x="11" y="22" fontFamily="Cormorant Garamond, serif" fontSize="12" fontWeight="700" fill="#ffffff">L</text>
        <text x="18" y="22" fontFamily="Cormorant Garamond, serif" fontSize="12" fontWeight="700" fill="#818cf8">L</text>
    </svg>
);

/* ─── Sidebar Item ─── */
const SidebarItem = ({ to, icon, label, badge, notifCount, active, onClick }) => {
    const baseClass = `w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-[13.5px] font-medium transition-all duration-200 cursor-pointer group`;
    const activeClass = active
        ? 'bg-indigo-50 text-indigo-600 shadow-sm'
        : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900';

    const content = (
        <div className={`${baseClass} ${activeClass}`} onClick={onClick}>
            <span className={`text-[18px] flex-shrink-0 transition-colors ${active ? 'text-indigo-500' : 'text-gray-400 group-hover:text-gray-600'}`}>
                {icon}
            </span>
            <span className="flex-1 truncate">{label}</span>
            {badge === 'pro' && <PremiumBadge />}
            {badge === 'new' && <NewBadge />}
            {notifCount && <NotifDot count={notifCount} />}
            {active && <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0" />}
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
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-[13.5px] font-medium transition-all duration-200 cursor-pointer group
                    ${isOpen ? 'bg-indigo-50 text-indigo-600' : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'}`}
                onClick={() => setSubmenuIndex(isOpen ? null : index)}
            >
                <span className={`text-[18px] flex-shrink-0 transition-colors ${isOpen ? 'text-indigo-500' : 'text-gray-400 group-hover:text-gray-600'}`}>
                    {icon}
                </span>
                <span className="flex-1 truncate">{label}</span>
                {badge === 'pro' && <PremiumBadge />}
                {badge === 'new' && <NewBadge />}
                <FaAngleDown className={`text-[11px] flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-indigo-500' : 'text-gray-400'}`} />
            </div>
            <Collapse isOpened={isOpen}>
                <ul className="mt-1 ml-4 pl-3 border-l-2 border-indigo-100 space-y-0.5 pb-1">
                    {children}
                </ul>
            </Collapse>
        </li>
    );
};

/* ─── Sub Item ─── */
const SubItem = ({ to, label, badge, onClick }) => (
    <li>
        {to ? (
            <Link to={to}>
                <div className="flex items-center gap-2 px-2 py-2 rounded-lg text-[12.5px] text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 transition-all cursor-pointer group">
                    <FaChevronRight className="text-[8px] text-gray-300 group-hover:text-indigo-400 flex-shrink-0" />
                    <span className="flex-1">{label}</span>
                    {badge === 'pro' && <PremiumBadge />}
                    {badge === 'new' && <NewBadge />}
                </div>
            </Link>
        ) : (
            <div onClick={onClick} className="flex items-center gap-2 px-2 py-2 rounded-lg text-[12.5px] text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 transition-all cursor-pointer group">
                <FaChevronRight className="text-[8px] text-gray-300 group-hover:text-indigo-400 flex-shrink-0" />
                <span className="flex-1">{label}</span>
                {badge === 'pro' && <PremiumBadge />}
                {badge === 'new' && <NewBadge />}
            </div>
        )}
    </li>
);

/* ─── Section Label ─── */
const SectionLabel = ({ label }) => (
    <li className="pt-4 pb-1 px-3">
        <span className="text-[10px] font-semibold tracking-[0.12em] uppercase text-gray-400">{label}</span>
    </li>
);

/* ══════════════════════════════════════════ */
const Sidebar = () => {
    const [submenuIndex, setSubmenuIndex] = useState(null);
    const location = useLocation();
    const context = useContext(MyContext);

    const isActive = (path) => location.pathname === path;

    return (
        <div className={`sidebar fixed bg-white top-0 left-0 h-full flex flex-col border-r border-gray-200 transition-all duration-300 overflow-hidden`}
            style={{ width: context.isSidebarOpen ? '260px' : '0px', boxShadow: '4px 0 24px rgba(0,0,0,0.04)' }}>

            {/* ── Logo ── */}
            <div className="flex items-center gap-3 px-4 py-5 border-b border-gray-100 flex-shrink-0">
                <Link to="/" className="flex items-center gap-3 group">
                    <LogoMark />
                    <div className="flex flex-col leading-none">
                        <span className="text-[17px] font-semibold leading-tight">
                            <span className="text-indigo-500">LL</span>
                            <span className="text-gray-700"> Leather</span>
                        </span>
                        <span className="text-[9px] tracking-[3px] text-gray-400 uppercase mt-0.5">Lovers · Admin</span>
                    </div>
                </Link>
                <div className="ml-auto">
                    <PremiumBadge />
                </div>
            </div>

            {/* ── Admin Card ── */}
            <div className="mx-3 mt-3 rounded-xl p-3 flex items-center gap-3 flex-shrink-0"
                style={{ background: 'linear-gradient(135deg, #eef2ff 0%, #f5f3ff 100%)', border: '1px solid #e0e7ff' }}>
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg, #6366f1, #818cf8)' }}>A</div>
                <div className="flex-1 min-w-0">
                    <p className="text-[12px] font-semibold text-gray-800 truncate">Admin User</p>
                    <p className="text-[10px] text-indigo-400 truncate">admin@llleather.com</p>
                </div>
                <FiBell className="text-[16px] text-indigo-400 flex-shrink-0 cursor-pointer hover:text-indigo-600 transition-colors" />
            </div>

            {/* ── Nav ── */}
            <nav className="flex-1 overflow-y-auto px-3 pb-4 mt-2 scrollbar-hide">
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
                        <SubItem to="/products/inventory" label="Inventory" badge="new" />
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
            <div className="px-3 pb-4 flex-shrink-0 border-t border-gray-100 pt-3">
                {/* Upgrade Banner */}
                <div className="rounded-xl p-3 mb-3 relative overflow-hidden"
                    style={{ background: 'linear-gradient(135deg, #6366f1 0%, #818cf8 100%)' }}>
                    <div className="absolute top-0 right-0 w-16 h-16 rounded-full opacity-10"
                        style={{ background: 'white', transform: 'translate(20%, -30%)' }} />
                    <BiSolidCrown className="text-yellow-300 text-[16px] mb-1" />
                    <p className="text-white text-[11px] font-semibold leading-tight">Upgrade to Enterprise</p>
                    <p className="text-indigo-200 text-[10px] mt-0.5">Unlock advanced analytics & more</p>
                    <button className="mt-2 bg-white text-indigo-600 text-[10px] font-bold px-3 py-1 rounded-full hover:bg-indigo-50 transition-colors">
                        Upgrade Now
                    </button>
                </div>

                {/* Logout */}
                <div className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-[13.5px] font-medium text-red-400 hover:bg-red-50 hover:text-red-500 transition-all cursor-pointer group">
                    <IoMdLogOut className="text-[18px]" />
                    <span>Logout</span>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;