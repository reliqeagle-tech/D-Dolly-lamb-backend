

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




import React, { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";

/* ── Premium inline SVG icons ─────────────────── */
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
        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <circle cx="12" cy="13" r="4" stroke="currentColor" strokeWidth="1.5" />
    </svg>
);
const IconDiamond = () => (
    <svg width="8" height="8" viewBox="0 0 14 14" fill="none">
        <rect x="2" y="2" width="10" height="10" rx="0.5" transform="rotate(45 7 7)"
            stroke="#c8973a" strokeWidth="1.3" fill="rgba(200,151,58,0.15)" />
    </svg>
);

const STYLES = `
  @keyframes sbFadeUp {
    from { opacity:0; transform:translateY(10px); }
    to   { opacity:1; transform:translateY(0); }
  }
  .asb-wrap { animation: sbFadeUp 0.45s cubic-bezier(0.16,1,0.3,1) both; }

  .asb-navlink {
    display: flex; align-items: center; gap: 12px;
    padding: 13px 20px;
    font-size: 10px; letter-spacing: 0.22em;
    font-family: Arial, sans-serif; font-weight: 600;
    text-transform: uppercase; text-decoration: none;
    color: rgba(240,220,190,0.55);
    border-left: 2px solid transparent;
    transition: all 0.22s;
    position: relative;
    cursor: pointer; background: none; border-right: none;
    border-top: none; border-bottom: none; width: 100%;
    text-align: left;
  }
  .asb-navlink:hover {
    color: #f7c568;
    background: rgba(200,151,58,0.06);
    border-left-color: rgba(200,151,58,0.4);
    padding-left: 26px;
  }
  .asb-navlink.active {
    color: #f7c568;
    background: rgba(200,151,58,0.1);
    border-left-color: #c8973a;
  }
  .asb-navlink.active svg { color: #c8973a; }

  .asb-logout:hover {
    color: rgba(220,100,100,0.9) !important;
    background: rgba(200,60,60,0.07) !important;
    border-left-color: rgba(200,60,60,0.4) !important;
  }

  .asb-avatar-overlay {
    position: absolute; inset: 0;
    background: rgba(0,0,0,0.55);
    border-radius: 50%;
    display: flex; flex-direction: column;
    align-items: center; justify-content: center;
    gap: 4px;
    opacity: 0;
    transition: opacity 0.25s;
    cursor: pointer;
  }
  .asb-avatar-wrap:hover .asb-avatar-overlay { opacity: 1; }

  @keyframes spin { to { transform: rotate(360deg); } }
  .asb-spinner {
    width: 20px; height: 20px;
    border: 2px solid rgba(200,151,58,0.3);
    border-top-color: #c8973a;
    border-radius: 50%;
    animation: spin 0.7s linear infinite;
  }
`;

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
        formData.append("image", file);
        try {
            setUploading(true);
            const token = localStorage.getItem("token");
            const { data } = await axios.post(`${backendUrl}/api/user/upload-profile`, formData, {
                headers: { Authorization: `Bearer ${token}`, "Content-Type": "multipart/form-data" },
            });
            if (data.success) {
                toast.success("Profile photo updated!");
                setUser(prev => ({ ...prev, profilePhoto: data.imageUrl }));
                setPreviewImage(null);
            }
        } catch { toast.error("Image upload failed"); }
        finally { setUploading(false); }
    };

    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.href = "/login";
    };

    if (!user) return null;

    const imageSrc = previewImage || (user.profilePhoto ? `${backendUrl}${user.profilePhoto}` : assets.profileImg);

    const navItems = [
        { to: "/profile", label: "My Profile", icon: <IconUser /> },
        { to: "/wishlist", label: "My Wishlist", icon: <IconHeart /> },
        { to: "/orders", label: "My Orders", icon: <IconBag /> },
    ];

    return (
        <>
            <style>{STYLES}</style>
            <div className="asb-wrap" style={{
                background: "linear-gradient(160deg,#1e120a,#150c05)",
                border: "1px solid rgba(200,151,58,0.18)",
                borderRadius: 3,
                overflow: "hidden",
                position: "sticky",
                top: 16,
                fontFamily: "Georgia,serif",
            }}>
                {/* Gold top accent */}
                <div style={{ height: 2, background: "linear-gradient(to right,transparent,#c8973a 35%,#f7c568 50%,#c8973a 65%,transparent)", opacity: 0.7 }} />

                {/* ── Avatar section ── */}
                <div style={{ padding: "30px 20px 22px", textAlign: "center", borderBottom: "1px solid rgba(200,151,58,0.1)" }}>

                    {/* Avatar */}
                    <div style={{ position: "relative", display: "inline-block", marginBottom: 16 }}>
                        <label className="asb-avatar-wrap" style={{ display: "block", cursor: "pointer", position: "relative" }}>
                            {/* Gold ring */}
                            <div style={{
                                width: 92, height: 92, borderRadius: "50%", padding: 3,
                                background: "linear-gradient(135deg,#c8973a,#f7c568,#c8973a)",
                                display: "inline-block",
                            }}>
                                <div style={{ width: "100%", height: "100%", borderRadius: "50%", overflow: "hidden", background: "#1a0f0a" }}>
                                    <img src={imageSrc} alt="Profile"
                                        style={{ width: "100%", height: "100%", objectFit: "cover", opacity: uploading ? 0.4 : 1, transition: "opacity 0.2s" }}
                                    />
                                </div>
                            </div>

                            {/* Hover overlay */}
                            <div className="asb-avatar-overlay">
                                {uploading
                                    ? <div className="asb-spinner" />
                                    : <>
                                        <IconCamera />
                                        <span style={{ fontSize: 8, letterSpacing: "0.15em", color: "#f7c568", fontFamily: "Arial" }}>CHANGE</span>
                                    </>
                                }
                            </div>

                            <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
                        </label>

                        {/* Online indicator */}
                        <div style={{
                            position: "absolute", bottom: 4, right: 4,
                            width: 12, height: 12, borderRadius: "50%",
                            background: "#4ade80",
                            border: "2px solid #150c05",
                        }} />
                    </div>

                    {/* Name */}
                    <p style={{ fontSize: 14, color: "#f7c568", letterSpacing: "0.06em", marginBottom: 4, fontWeight: 400 }}>
                        {user.name}
                    </p>

                    {/* Email */}
                    <p style={{ fontSize: 10, color: "#7a6040", letterSpacing: "0.08em", fontStyle: "italic", marginBottom: 12 }}>
                        {user.email}
                    </p>

                    {/* Member badge */}
                    <div style={{
                        display: "inline-flex", alignItems: "center", gap: 6,
                        padding: "4px 12px",
                        background: "rgba(200,151,58,0.08)",
                        border: "1px solid rgba(200,151,58,0.2)",
                        borderRadius: 2,
                    }}>
                        <IconDiamond />
                        <span style={{ fontSize: 8, letterSpacing: "0.28em", color: "#c8973a", fontFamily: "Arial", fontWeight: 700 }}>
                            MEMBER
                        </span>
                    </div>
                </div>

                {/* ── Nav links ── */}
                <nav style={{ padding: "8px 0" }}>
                    {navItems.map((item) => (
                        <NavLink
                            key={item.to}
                            to={item.to}
                            className={({ isActive }) => `asb-navlink${isActive ? " active" : ""}`}
                        >
                            <span style={{ opacity: 0.8 }}>{item.icon}</span>
                            {item.label}
                        </NavLink>
                    ))}

                    {/* Divider */}
                    <div style={{ height: 1, background: "linear-gradient(to right,transparent,rgba(200,151,58,0.12),transparent)", margin: "8px 0" }} />

                    {/* Logout */}
                    <button className="asb-navlink asb-logout" onClick={handleLogout}>
                        <span style={{ opacity: 0.8 }}><IconLogout /></span>
                        Logout
                    </button>
                </nav>

                {/* Bottom gold accent */}
                <div style={{ height: 1, background: "linear-gradient(to right,transparent,rgba(200,151,58,0.15),transparent)" }} />
            </div>
        </>
    );
};

export default AccountSidebar;