// import React, { useState, useEffect, useContext } from "react";
// import { IoBagCheckOutline } from "react-icons/io5";
// import { IoIosLogOut } from "react-icons/io";
// import { IoMdHeartEmpty } from "react-icons/io";
// import { NavLink } from "react-router-dom";
// import { FaRegUser } from "react-icons/fa";
// import Button from "@mui/material/Button";
// import axios from "axios";
// import { toast } from "react-toastify";
// import { ShopContext } from "../context/ShopContext";
// import { assets } from "../assets/assets";

// const AccountSidebar = () => {

//     const { backendUrl } = useContext(ShopContext);

//     const [user, setUser] = useState(null);
//     const [uploading, setUploading] = useState(false);
//     const [previewImage, setPreviewImage] = useState(null);

//     // ✅ Fetch User Data
//     useEffect(() => {
//         const fetchUser = async () => {
//             try {
//                 const token = localStorage.getItem("token");

//                 const { data } = await axios.get(
//                     `${backendUrl}/api/user/profile`,
//                     {
//                         headers: { Authorization: `Bearer ${token}` },
//                     }
//                 );

//                 if (data.success) {
//                     setUser(data.user);
//                 }
//             } catch (error) {
//                 console.error(error);
//             }
//         };

//         fetchUser();
//     }, [backendUrl]);

//     // ✅ Image Upload
//     const handleImageUpload = async (e) => {
//         const file = e.target.files[0];
//         if (!file) return;

//         setPreviewImage(URL.createObjectURL(file));

//         const formData = new FormData();
//         formData.append("image", file);

//         try {
//             setUploading(true);
//             const token = localStorage.getItem("token");

//             const { data } = await axios.post(
//                 `${backendUrl}/api/user/upload-profile`,
//                 formData,
//                 {
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                         "Content-Type": "multipart/form-data",
//                     },
//                 }
//             );

//             if (data.success) {
//                 toast.success("Profile photo updated!");
//                 setUser((prev) => ({
//                     ...prev,
//                     profilePhoto: data.imageUrl,
//                 }));
//                 setPreviewImage(null);
//             }
//         } catch (error) {
//             toast.error("Image upload failed");
//         } finally {
//             setUploading(false);
//         }
//     };

//     const handleLogout = () => {
//         localStorage.removeItem("token");
//         window.location.href = "/login";
//     };

//     if (!user) return null;

//     const imageSrc =
//         previewImage ||
//         (user.profilePhoto
//             ? `${backendUrl}${user.profilePhoto}`
//             : assets.profileImg);

//     return (
//         <div className="card bg-white shadow-md rounded-md sticky top-[10px]">
//             <div className="w-full p-5 flex items-center justify-center flex-col">

//                 {/* ✅ Profile Image */}
//                 <label className="relative cursor-pointer group">
//                     <img
//                         src={imageSrc}
//                         alt="Profile"
//                         className={`w-28 h-28 rounded-full border-2 border-gray-300 object-cover transition
//             ${uploading ? "opacity-50" : "hover:opacity-80"}`}
//                     />

//                     {uploading && (
//                         <div className="absolute inset-0 flex items-center justify-center bg-white/60 rounded-full">
//                             <div className="w-6 h-6 border-2 border-t-transparent border-black rounded-full animate-spin"></div>
//                         </div>
//                     )}

//                     <input
//                         type="file"
//                         accept="image/*"
//                         onChange={handleImageUpload}
//                         className="hidden"
//                     />

//                     <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-xs py-1 opacity-0 group-hover:opacity-100 text-center transition">
//                         Change photo
//                     </div>
//                 </label>

//                 {/* ✅ Dynamic Name & Email */}
//                 <h3 className="text-gray-800 font-semibold pt-4">
//                     {user.name}
//                 </h3>

//                 <h5 className="text-[13px] text-gray-500 font-medium">
//                     {user.email}
//                 </h5>
//             </div>

//             {/* ✅ Sidebar Links */}
//             <ul className="list-none bg-[#f1f1f1] myAccountTabs">
//                 <li className="w-full">
//                     <NavLink
//                         to="/profile"
//                         className={({ isActive }) =>
//                             isActive ? "active block" : "block"
//                         }
//                     >
//                         <Button className="flex items-center gap-4 w-full !text-gray-700 !text-left !justify-start !px-4 !py-2">
//                             <FaRegUser className="text-[16px]" /> My Profile
//                         </Button>
//                     </NavLink>
//                 </li>

//                 <li className="w-full">
//                     <NavLink
//                         to="/wishlist"
//                         className={({ isActive }) =>
//                             isActive ? "active block" : "block"
//                         }
//                     >
//                         <Button className="flex items-center gap-3 w-full !text-gray-700 !text-left !justify-start !px-4 !py-2">
//                             <IoMdHeartEmpty className="text-xl" /> My List
//                         </Button>
//                     </NavLink>
//                 </li>

//                 <li className="w-full">
//                     <NavLink
//                         to="/orders"
//                         className={({ isActive }) =>
//                             isActive ? "active block" : "block"
//                         }
//                     >
//                         <Button className="flex items-center gap-3 w-full !text-gray-700 !text-left !justify-start !px-4 !py-2">
//                             <IoBagCheckOutline className="text-xl" /> My Orders
//                         </Button>
//                     </NavLink>
//                 </li>

//                 <li className="w-full">
//                     <Button
//                         onClick={handleLogout}
//                         className="flex items-center gap-3 w-full !text-gray-700 !text-left !justify-start !px-4 !py-2"
//                     >
//                         <IoIosLogOut className="text-xl" /> Logout
//                     </Button>
//                 </li>
//             </ul>
//         </div>
//     );
// };

// export default AccountSidebar;







// import React, { useState, useEffect, useContext } from "react";
// import { NavLink } from "react-router-dom";
// import axios from "axios";
// import { toast } from "react-toastify";
// import { ShopContext } from "../context/ShopContext";
// import { assets } from "../assets/assets";

// /* ── Premium inline SVG icons ─────────────────── */
// const IconUser = () => (
//     <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
//         <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.5" />
//         <path d="M4 20c0-4 3.582-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
//     </svg>
// );
// const IconHeart = () => (
//     <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
//         <path d="M12 21C12 21 3 14.5 3 8.5A5 5 0 0 1 12 5.5 5 5 0 0 1 21 8.5C21 14.5 12 21 12 21Z"
//             stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
//     </svg>
// );
// const IconBag = () => (
//     <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
//         <path d="M6 2L3 7v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7l-3-5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
//         <path d="M3 7h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
//         <path d="M16 10a4 4 0 0 1-8 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
//     </svg>
// );
// const IconLogout = () => (
//     <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
//         <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
//         <path d="M16 17l5-5-5-5M21 12H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//     </svg>
// );
// const IconCamera = () => (
//     <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
//         <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
//         <circle cx="12" cy="13" r="4" stroke="currentColor" strokeWidth="1.5" />
//     </svg>
// );
// const IconDiamond = () => (
//     <svg width="8" height="8" viewBox="0 0 14 14" fill="none">
//         <rect x="2" y="2" width="10" height="10" rx="0.5" transform="rotate(45 7 7)"
//             stroke="#c8973a" strokeWidth="1.3" fill="rgba(200,151,58,0.15)" />
//     </svg>
// );

// const AccountSidebar = () => {
//     const { backendUrl } = useContext(ShopContext);
//     const [user, setUser] = useState(null);
//     const [uploading, setUploading] = useState(false);
//     const [previewImage, setPreviewImage] = useState(null);

//     useEffect(() => {
//         const fetchUser = async () => {
//             try {
//                 const token = localStorage.getItem("token");
//                 const { data } = await axios.get(`${backendUrl}/api/user/profile`, {
//                     headers: { Authorization: `Bearer ${token}` },
//                 });
//                 if (data.success) setUser(data.user);
//             } catch (err) { console.error(err); }
//         };
//         fetchUser();
//     }, [backendUrl]);

//     const handleImageUpload = async (e) => {
//         const file = e.target.files[0];
//         if (!file) return;

//         setPreviewImage(URL.createObjectURL(file));

//         const formData = new FormData();
//         formData.append("avatar", file);

//         try {
//             setUploading(true);
//             const token = localStorage.getItem("token");
//             const { data } = await axios.put(
//                 `${backendUrl}/api/user/user-avatar`,
//                 formData,
//                 {
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                         "Content-Type": "multipart/form-data",
//                     },
//                 }
//             );
//             if (data.success) {
//                 toast.success("Profile photo updated!");
//                 setUser(prev => ({ ...prev, avatar: data.imageUrl }));
//                 setPreviewImage(null);
//             }
//         } catch (error) {
//             console.error(error);
//             toast.error("Image upload failed");
//         } finally {
//             setUploading(false);
//         }
//     };

//     const handleLogout = () => {
//         localStorage.removeItem("token");
//         window.location.href = "/login";
//     };

//     if (!user) return null;

//     const imageSrc = previewImage || user.avatar || assets.profileImg;

//     const navItems = [
//         { to: "/profile", label: "My Profile", icon: <IconUser /> },
//         { to: "/wishlist", label: "My Wishlist", icon: <IconHeart /> },
//         { to: "/orders", label: "My Orders", icon: <IconBag /> },
//     ];

//     return (
//         <>
//             {/* Keyframe animations injected once — Tailwind has no built-in for these custom ones */}
//             <style>{`
//                 @keyframes sbFadeUp {
//                     from { opacity: 0; transform: translateY(10px); }
//                     to   { opacity: 1; transform: translateY(0); }
//                 }
//                 .asb-fade-up { animation: sbFadeUp 0.45s cubic-bezier(0.16,1,0.3,1) both; }
//                 @keyframes spin { to { transform: rotate(360deg); } }
//                 .asb-spin { animation: spin 0.7s linear infinite; }
//                 .asb-avatar-overlay { opacity: 0; transition: opacity 0.25s; }
//                 .asb-avatar-wrap:hover .asb-avatar-overlay { opacity: 1; }
//             `}</style>

//             <div
//                 className="asb-fade-up sticky top-20 overflow-hidden rounded-sm font-serif"
//                 style={{
//                     background: "linear-gradient(160deg,#1e120a,#150c05)",
//                     border: "1px solid rgba(200,151,58,0.18)",
//                 }}
//             >
//                 {/* Gold top accent */}
//                 <div
//                     className="h-0.5 opacity-70"
//                     style={{ background: "linear-gradient(to right,transparent,#c8973a 35%,#f7c568 50%,#c8973a 65%,transparent)" }}
//                 />

//                 {/* ── Avatar section ── */}
//                 <div
//                     className="px-5 pt-8 pb-6 text-center"
//                     style={{ borderBottom: "1px solid rgba(200,151,58,0.1)" }}
//                 >
//                     {/* Avatar with gold ring */}
//                     <div className="relative inline-block mb-4">
//                         <label className="asb-avatar-wrap block cursor-pointer relative">
//                             {/* Gold ring */}
//                             <div
//                                 className="inline-block rounded-full p-[3px]"
//                                 style={{
//                                     width: 92,
//                                     height: 92,
//                                     background: "linear-gradient(135deg,#c8973a,#f7c568,#c8973a)",
//                                 }}
//                             >
//                                 <div
//                                     className="w-full h-full rounded-full overflow-hidden"
//                                     style={{ background: "#1a0f0a" }}
//                                 >
//                                     <img
//                                         src={imageSrc}
//                                         alt="Profile"
//                                         className="w-full h-full object-cover transition-opacity duration-200"
//                                         style={{ opacity: uploading ? 0.4 : 1 }}
//                                     />
//                                 </div>
//                             </div>

//                             {/* Hover overlay */}
//                             <div
//                                 className="asb-avatar-overlay absolute inset-0 rounded-full flex flex-col items-center justify-center gap-1 cursor-pointer"
//                                 style={{ background: "rgba(0,0,0,0.55)" }}
//                             >
//                                 {uploading ? (
//                                     <div
//                                         className="asb-spin w-5 h-5 rounded-full border-2"
//                                         style={{
//                                             borderColor: "rgba(200,151,58,0.3)",
//                                             borderTopColor: "#c8973a",
//                                         }}
//                                     />
//                                 ) : (
//                                     <>
//                                         <IconCamera />
//                                         <span
//                                             className="text-[8px] tracking-[0.15em] font-sans"
//                                             style={{ color: "#f7c568" }}
//                                         >
//                                             CHANGE
//                                         </span>
//                                     </>
//                                 )}
//                             </div>

//                             <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
//                         </label>

//                         {/* Online indicator */}
//                         <div
//                             className="absolute bottom-1 right-1 w-3 h-3 rounded-full bg-green-400"
//                             style={{ border: "2px solid #150c05" }}
//                         />
//                     </div>

//                     {/* Name */}
//                     <p
//                         className="text-sm tracking-wide mb-1 font-normal"
//                         style={{ color: "#f7c568" }}
//                     >
//                         {user.name}
//                     </p>

//                     {/* Email */}
//                     <p
//                         className="text-[10px] tracking-wider italic mb-3"
//                         style={{ color: "#7a6040" }}
//                     >
//                         {user.email}
//                     </p>

//                     {/* Member badge */}
//                     <div
//                         className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm"
//                         style={{
//                             background: "rgba(200,151,58,0.08)",
//                             border: "1px solid rgba(200,151,58,0.2)",
//                         }}
//                     >
//                         <IconDiamond />
//                         <span
//                             className="text-[8px] tracking-[0.28em] font-bold font-sans"
//                             style={{ color: "#c8973a" }}
//                         >
//                             MEMBER
//                         </span>
//                     </div>
//                 </div>

//                 {/* ── Nav links ── */}
//                 <nav className="py-2">
//                     {navItems.map((item) => (
//                         <NavLink
//                             key={item.to}
//                             to={item.to}
//                             className={({ isActive }) =>
//                                 [
//                                     "flex items-center gap-3 px-5 py-3 text-[10px] tracking-[0.22em] font-semibold font-sans uppercase no-underline",
//                                     "border-l-2 transition-all duration-200 cursor-pointer w-full text-left",
//                                     "hover:pl-6 hover:bg-[rgba(200,151,58,0.06)] hover:border-l-[rgba(200,151,58,0.4)]",
//                                     isActive
//                                         ? "text-[#f7c568] bg-[rgba(200,151,58,0.1)] border-l-[#c8973a]"
//                                         : "text-[rgba(240,220,190,0.55)] border-l-transparent",
//                                 ].join(" ")
//                             }
//                             style={({ isActive }) =>
//                                 isActive ? { color: "#f7c568" } : { color: "rgba(240,220,190,0.55)" }
//                             }
//                         >
//                             <span className="opacity-80">{item.icon}</span>
//                             {item.label}
//                         </NavLink>
//                     ))}

//                     {/* Divider */}
//                     <div
//                         className="h-px my-2"
//                         style={{ background: "linear-gradient(to right,transparent,rgba(200,151,58,0.12),transparent)" }}
//                     />

//                     {/* Logout */}
//                     <button
//                         onClick={handleLogout}
//                         className={[
//                             "flex items-center gap-3 px-5 py-3 text-[10px] tracking-[0.22em] font-semibold font-sans uppercase",
//                             "border-l-2 border-l-transparent transition-all duration-200 cursor-pointer w-full text-left bg-transparent",
//                             "text-[rgba(240,220,190,0.55)]",
//                             "hover:pl-6 hover:text-[rgba(220,100,100,0.9)] hover:bg-[rgba(200,60,60,0.07)] hover:border-l-[rgba(200,60,60,0.4)]",
//                         ].join(" ")}
//                     >
//                         <span className="opacity-80"><IconLogout /></span>
//                         Logout
//                     </button>
//                 </nav>

//                 {/* Bottom gold accent */}
//                 <div
//                     className="h-px"
//                     style={{ background: "linear-gradient(to right,transparent,rgba(200,151,58,0.15),transparent)" }}
//                 />
//             </div>
//         </>
//     );
// };

// export default AccountSidebar;


import React, { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";

/* ── Color tokens — matched to Footer / MyAccount / Orders ── */
const C = {
    bgLight: "#FFFFFF",
    bgSoft: "#F8F7FF",
    bgBottom: "#F0EEFF",
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

/* ── Icons ── */
const IconUser = () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.5" />
        <path d="M4 20c0-4 3.582-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
);
const IconHeart = () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
        <path d="M12 21C12 21 3 14.5 3 8.5A5 5 0 0 1 12 5.5 5 5 0 0 1 21 8.5C21 14.5 12 21 12 21Z"
            stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
);
const IconBag = () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
        <path d="M6 2L3 7v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7l-3-5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M3 7h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M16 10a4 4 0 0 1-8 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
);
const IconLogout = () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M16 17l5-5-5-5M21 12H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);
const IconCamera = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"
            stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <circle cx="12" cy="13" r="4" stroke="currentColor" strokeWidth="1.5" />
    </svg>
);

const AccountSidebar = () => {
    const { backendUrl } = useContext(ShopContext);
    const [user, setUser] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [previewImage, setPreviewImage] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const token = localStorage.getItem("token");
                const { data } = await axios.get(`${backendUrl}/api/user/profile`, {
                    headers: { Authorization: `Bearer ${token}` },
                });
                if (data.success) setUser(data.user);
            } catch (err) { console.error(err); }
        };
        fetchUser();
    }, [backendUrl]);

    const handleImageUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;
        setPreviewImage(URL.createObjectURL(file));
        const formData = new FormData();
        formData.append("avatar", file);
        try {
            setUploading(true);
            const token = localStorage.getItem("token");
            const { data } = await axios.put(
                `${backendUrl}/api/user/user-avatar`,
                formData,
                { headers: { Authorization: `Bearer ${token}`, "Content-Type": "multipart/form-data" } }
            );
            if (data.success) {
                toast.success("Profile photo updated!");
                setUser(prev => ({ ...prev, avatar: data.imageUrl }));
                setPreviewImage(null);
            }
        } catch (error) {
            console.error(error);
            toast.error("Image upload failed");
        } finally {
            setUploading(false);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.href = "/login";
    };

    if (!user) return null;

    const imageSrc = previewImage || user.avatar || assets.profileImg;

    const navItems = [
        { to: "/profile", label: "My Profile", icon: <IconUser /> },
        { to: "/wishlist", label: "My Wishlist", icon: <IconHeart /> },
        { to: "/orders", label: "My Orders", icon: <IconBag /> },
    ];

    return (
        <>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');

        @keyframes sbFadeUp {
          from { opacity:0; transform:translateY(10px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes sbShimmer {
          0%   { background-position:-200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes spin { to { transform:rotate(360deg); } }

        .asb-root {
          animation: sbFadeUp 0.45s cubic-bezier(0.16,1,0.3,1) both;
          position: sticky;
          top: 80px;
          overflow: hidden;
          border-radius: 6px;
          background: ${C.bgLight};
          border: 1px solid ${C.borderHi};
          box-shadow: 0 2px 16px rgba(91,91,214,0.07);
          font-family: Montserrat, sans-serif;
        }

        /* Shimmer top accent */
        .asb-shimmer {
          height: 2px;
          background: linear-gradient(90deg,
            transparent 0%, rgba(91,91,214,0.25) 15%,
            #5B5BD6 40%, #818CF8 50%, #5B5BD6 60%,
            rgba(91,91,214,0.25) 85%, transparent 100%);
          background-size: 200% auto;
          animation: sbShimmer 3.5s linear infinite;
        }

        /* Avatar wrap hover */
        .asb-avatar-overlay {
          opacity: 0;
          transition: opacity 0.25s;
        }
        .asb-avatar-wrap:hover .asb-avatar-overlay { opacity: 1; }

        /* Spinner */
        .asb-spin {
          animation: spin 0.7s linear infinite;
          width: 18px; height: 18px;
          border-radius: 50%;
          border: 2px solid ${C.borderHi};
          border-top-color: ${C.indigo};
        }

        /* Nav link base */
        .asb-nav-link {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 11px 18px;
          font-size: 10px;
          letter-spacing: 0.22em;
          font-weight: 800;
          font-family: Montserrat, sans-serif;
          text-transform: uppercase;
          text-decoration: none;
          border-left: 2px solid transparent;
          color: ${C.textFaint};
          transition: all 0.2s ease;
          background: transparent;
          width: 100%;
          text-align: left;
          cursor: pointer;
          border-top: none;
          border-right: none;
          border-bottom: none;
        }
        .asb-nav-link:hover {
          padding-left: 22px;
          color: ${C.indigo};
          background: rgba(91,91,214,0.05);
          border-left-color: rgba(91,91,214,0.35);
        }
        .asb-nav-link.active {
          color: ${C.indigo};
          background: rgba(91,91,214,0.08);
          border-left-color: ${C.indigo};
        }

        /* Logout btn */
        .asb-logout-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 11px 18px;
          font-size: 10px;
          letter-spacing: 0.22em;
          font-weight: 600;
          font-family: Montserrat, sans-serif;
          text-transform: uppercase;
          border: none;
          border-left: 2px solid transparent;
          color: ${C.textFaint};
          background: transparent;
          cursor: pointer;
          width: 100%;
          text-align: left;
          transition: all 0.2s ease;
        }
        .asb-logout-btn:hover {
          padding-left: 22px;
          color: #DC2626;
          background: rgba(220,38,38,0.05);
          border-left-color: rgba(220,38,38,0.35);
        }
      `}</style>

            <div className="asb-root">

                {/* Shimmer top bar */}
                <div className="asb-shimmer" />

                {/* ── Avatar section ── */}
                <div style={{
                    padding: "28px 20px 22px",
                    textAlign: "center",
                    borderBottom: `1px solid ${C.borderLo}`,
                    background: `linear-gradient(180deg, ${C.bgSoft} 0%, ${C.bgLight} 100%)`,
                }}>

                    {/* Avatar with indigo ring */}
                    <div style={{ position: "relative", display: "inline-block", marginBottom: 14 }}>
                        <label className="asb-avatar-wrap" style={{ display: "block", cursor: "pointer", position: "relative" }}>

                            {/* Indigo ring */}
                            <div style={{
                                width: 88, height: 88,
                                borderRadius: "50%",
                                padding: 3,
                                background: `linear-gradient(135deg, ${C.indigoDk}, ${C.indigoLt}, ${C.indigoDk})`,
                                display: "inline-block",
                            }}>
                                <div style={{
                                    width: "100%", height: "100%",
                                    borderRadius: "50%",
                                    overflow: "hidden",
                                    background: C.bgSoft,
                                }}>
                                    <img
                                        src={imageSrc}
                                        alt="Profile"
                                        style={{
                                            width: "100%", height: "100%",
                                            objectFit: "cover",
                                            opacity: uploading ? 0.4 : 1,
                                            transition: "opacity 0.2s",
                                        }}
                                    />
                                </div>
                            </div>

                            {/* Hover overlay */}
                            <div
                                className="asb-avatar-overlay"
                                style={{
                                    position: "absolute", inset: 0,
                                    borderRadius: "50%",
                                    display: "flex", flexDirection: "column",
                                    alignItems: "center", justifyContent: "center",
                                    gap: 3,
                                    background: "rgba(67,56,202,0.65)",
                                    color: "#FFFFFF",
                                    cursor: "pointer",
                                }}
                            >
                                {uploading
                                    ? <div className="asb-spin" />
                                    : <>
                                        <IconCamera />
                                        <span style={{ fontSize: 8, letterSpacing: "0.15em", fontFamily: "Montserrat,sans-serif", fontWeight: 700, color: "#FFFFFF" }}>
                                            CHANGE
                                        </span>
                                    </>
                                }
                            </div>

                            <input type="file" accept="image/*" onChange={handleImageUpload} style={{ display: "none" }} />
                        </label>

                        {/* Online dot */}
                        <div style={{
                            position: "absolute", bottom: 4, right: 4,
                            width: 11, height: 11,
                            borderRadius: "50%",
                            background: "#22C55E",
                            border: `2px solid ${C.bgLight}`,
                        }} />
                    </div>

                    {/* Name */}
                    <p style={{
                        fontSize: 16, color: C.textNavy,
                        fontFamily: "Georgia, serif",
                        fontWeight: 500, letterSpacing: "0.06em",
                        marginBottom: 3,
                    }}>
                        {user.name}
                    </p>

                    {/* Email */}
                    <p style={{
                        fontSize: 12, color: C.textFaint,
                        fontFamily: "Montserrat, sans-serif",
                        letterSpacing: "0.06em",
                        fontStyle: "italic",
                        marginBottom: 14,
                        fontWeight: 500,
                    }}>
                        {user.email}
                    </p>

                    {/* Member badge */}
                    <div style={{
                        display: "inline-flex", alignItems: "center", gap: 6,
                        padding: "5px 14px",
                        borderRadius: 20,
                        background: "rgba(91,91,214,0.08)",
                        border: `1px solid ${C.borderHi}`,
                    }}>
                        {/* Diamond icon in indigo */}
                        <svg width="8" height="8" viewBox="0 0 14 14" fill="none">
                            <rect x="2" y="2" width="10" height="10" rx="0.5" transform="rotate(45 7 7)"
                                stroke={C.indigo} strokeWidth="1.3" fill="rgba(91,91,214,0.15)" />
                        </svg>
                        <span style={{
                            fontSize: 10, letterSpacing: "0.22em",
                            fontFamily: "Montserrat, sans-serif",
                            fontWeight: 700, color: C.indigo,
                        }}>
                            MEMBER
                        </span>
                    </div>
                </div>

                {/* ── Nav links ── */}
                <nav style={{ paddingTop: 6, paddingBottom: 6 }}>
                    {navItems.map((item) => (
                        <NavLink
                            key={item.to}
                            to={item.to}
                            className={({ isActive }) => `asb-nav-link${isActive ? " active" : ""}`}
                        >
                            <span style={{ opacity: 0.99, flexShrink: 0 }}>{item.icon}</span>
                            {item.label}
                        </NavLink>
                    ))}

                    {/* Divider */}
                    <div style={{
                        height: 1,
                        margin: "6px 0",
                        background: `linear-gradient(to right, transparent, ${C.borderMid}, transparent)`,
                    }} />

                    {/* Logout */}
                    <button className="asb-logout-btn" onClick={handleLogout}>
                        <span style={{ opacity: 0.85, flexShrink: 0 }}><IconLogout /></span>
                        Logout
                    </button>
                </nav>

                {/* Bottom shimmer */}
                <div style={{
                    height: 1,
                    background: `linear-gradient(to right, transparent, ${C.borderMid}, transparent)`,
                }} />

            </div>
        </>
    );
};

export default AccountSidebar;