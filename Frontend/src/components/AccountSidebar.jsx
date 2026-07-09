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