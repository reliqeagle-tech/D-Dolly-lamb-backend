import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import AccountSidebar from "../components/AccountSidebar";
import { ShopContext } from "../context/ShopContext";

/* ── Color tokens — matched to Footer ─────────── */
const C = {
    bgLight: "#FFFFFF",
    bgSoft: "#F8F7FF",
    bgBottom: "#F0EEFF",
    bgCard: "#F4F2FF",
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
    success: "#059669",
    successBg: "rgba(5,150,105,0.08)",
    successBdr: "rgba(5,150,105,0.25)",
};

/* ── Inline SVG icons ─────────────────────────── */
const IconUser = () => (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="8" r="4" stroke={C.indigo} strokeWidth="1.4" />
        <path d="M4 20c0-4 3.582-7 8-7s8 3 8 7" stroke={C.indigo} strokeWidth="1.4" strokeLinecap="round" />
    </svg>
);
const IconMail = () => (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="4" width="20" height="16" rx="2" stroke={C.indigo} strokeWidth="1.4" />
        <path d="M2 8l10 6 10-6" stroke={C.indigo} strokeWidth="1.4" strokeLinecap="round" />
    </svg>
);
const IconPhone = () => (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
        <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C9.61 21 3 14.39 3 6a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.25 1.01l-2.2 2.2z"
            stroke={C.indigo} strokeWidth="1.4" strokeLinejoin="round" />
    </svg>
);
const IconSave = () => (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
        <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M17 21v-8H7v8M7 3v5h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);
const IconClose = () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
        <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
);
const IconShield = () => (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L4 6v6c0 5 3.6 9.7 8 11 4.4-1.3 8-6 8-11V6l-8-4z" stroke={C.indigo} strokeWidth="1.4" strokeLinejoin="round" />
        <path d="M9 12l2 2 4-4" stroke={C.indigo} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);
const IconEdit = () => (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
);
const IconVerified = () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke={C.indigo} strokeWidth="1.4" />
        <path d="M9 12l2 2 4-4" stroke={C.indigo} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');

  @keyframes maFadeUp {
    from { opacity:0; transform:translateY(14px); }
    to   { opacity:1; transform:translateY(0); }
  }
  @keyframes shimmerIndigo {
    0%   { background-position: -200% center; }
    100% { background-position:  200% center; }
  }

  .ma-card {
    animation: maFadeUp 0.45s cubic-bezier(0.16,1,0.3,1) both;
  }
  .ma-card:nth-child(1){ animation-delay:0.05s; }
  .ma-card:nth-child(2){ animation-delay:0.12s; }

  /* Shimmer bar — same as footer */
  .ma-shimmer-bar {
    background: linear-gradient(90deg,
      transparent 0%,
      rgba(91,91,214,0.25) 15%,
      #5B5BD6 40%,
      #818CF8 50%,
      #5B5BD6 60%,
      rgba(91,91,214,0.25) 85%,
      transparent 100%);
    background-size: 200% auto;
    animation: shimmerIndigo 3.5s linear infinite;
  }

  .ma-field { display:flex; flex-direction:column; gap:5px; }

  .ma-label {
    font-size:8.5px; letter-spacing:0.28em;
    color:${C.indigo}; font-family:Montserrat,sans-serif;
    font-weight:700; text-transform:uppercase;
    display:flex; align-items:center; gap:5px;
  }

  .ma-input {
    padding:11px 14px;
    background:${C.bgSoft};
    border:1px solid ${C.borderHi};
    color:${C.textNavy}; font-size:13px;
    font-family:Montserrat,sans-serif;
    outline:none; border-radius:2px;
    transition:border-color 0.2s, background 0.2s, box-shadow 0.2s;
    width:100%;
  }
  .ma-input:focus {
    border-color:${C.indigo};
    background:#FFFFFF;
    box-shadow:0 0 0 3px rgba(91,91,214,0.10);
  }
  .ma-input::placeholder { color:${C.textFaint}; font-style:italic; }
  .ma-input:disabled {
    opacity:0.55; cursor:not-allowed;
    background:${C.bgBottom};
    color:${C.textMuted};
  }

  /* Primary button — indigo gradient */
  .ma-btn-indigo {
    display:inline-flex; align-items:center; gap:8px;
    padding:12px 28px;
    background:linear-gradient(135deg,${C.indigoDk},${C.indigo});
    color:#FFFFFF; border:none;
    font-size:10px; letter-spacing:0.22em;
    font-family:Montserrat,sans-serif; font-weight:700;
    cursor:pointer; transition:all 0.25s; border-radius:2px;
  }
  .ma-btn-indigo:hover:not(:disabled) {
    box-shadow:0 8px 28px rgba(91,91,214,0.30);
    transform:translateY(-1px);
  }
  .ma-btn-indigo:disabled { opacity:0.55; cursor:not-allowed; }

  /* Ghost button — indigo border */
  .ma-btn-ghost {
    display:inline-flex; align-items:center; gap:8px;
    padding:12px 28px;
    background:transparent;
    color:${C.indigo}; border:1px solid ${C.borderHi};
    font-size:10px; letter-spacing:0.22em;
    font-family:Montserrat,sans-serif; font-weight:600;
    cursor:pointer; transition:all 0.25s; border-radius:2px;
  }
  .ma-btn-ghost:hover {
    border-color:${C.indigo};
    background:rgba(91,91,214,0.07);
    color:${C.indigoDk};
  }

  @keyframes spin { to { transform:rotate(360deg); } }
  .ma-spinner {
    width:14px; height:14px;
    border:2px solid rgba(255,255,255,0.3);
    border-top-color:#FFFFFF; border-radius:50%;
    animation:spin 0.7s linear infinite;
  }

  input[type=number]::-webkit-inner-spin-button,
  input[type=number]::-webkit-outer-spin-button { -webkit-appearance:none; }

  /* Card section label */
  .ma-section-label {
    font-size:8px; letter-spacing:0.34em;
    color:${C.indigo}; font-family:Montserrat,sans-serif;
    font-weight:700; text-transform:uppercase; margin-bottom:2px;
  }
  .ma-section-title {
    font-size:14px; color:${C.textNavy};
    letter-spacing:0.06em; font-family:Montserrat,sans-serif;
    font-weight:600;
  }
`;

/* ── Icon avatar circle ── */
const AvatarCircle = ({ children }) => (
    <div style={{
        width: 32, height: 32, borderRadius: "50%",
        background: `rgba(91,91,214,0.10)`,
        border: `1px solid ${C.borderHi}`,
        display: "flex", alignItems: "center", justifyContent: "center",
        flexShrink: 0,
    }}>
        {children}
    </div>
);

/* ── Column heading — same as Footer ── */
const SectionDivider = () => (
    <div style={{ display: "flex", alignItems: "center", gap: 6, margin: "4px 0 0" }}>
        <span style={{ display: "block", height: 1, width: 28, background: `linear-gradient(to right, ${C.indigo}, transparent)` }} />
        <span style={{ display: "block", width: 4, height: 4, transform: "rotate(45deg)", flexShrink: 0, background: C.indigo, opacity: 0.40 }} />
    </div>
);

/* ── Field component ── */
const Field = ({ icon, label, name, value, onChange, type = "text", placeholder, disabled, half }) => (
    <div className="ma-field" style={{ flex: half ? "1 1 calc(50% - 8px)" : "1 1 100%", minWidth: half ? 120 : "auto" }}>
        <label className="ma-label">{icon}{label}</label>
        <input
            className="ma-input"
            type={type} name={name} value={value}
            onChange={onChange} placeholder={placeholder}
            disabled={disabled}
        />
    </div>
);

/* ══════════════════════════════════════════════
   MY ACCOUNT PAGE
══════════════════════════════════════════════ */
const MyAccount = () => {
    const navigate = useNavigate();
    const { backendUrl } = useContext(ShopContext);
    const [loading, setLoading] = useState(false);
    const [editing, setEditing] = useState(false);
    const [userId, setUserId] = useState(null);

    const [form, setForm] = useState({
        firstName: "", lastName: "", email: "", phone: "",
    });
    const [saved, setSaved] = useState(false);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const token = localStorage.getItem("token");
                const { data } = await axios.get(`${backendUrl}/api/user/profile`, {
                    headers: { Authorization: `Bearer ${token}` },
                });
                if (data.success) {
                    const u = data.user;
                    setUserId(u._id);
                    const parts = (u.name || "").split(" ");
                    setForm({
                        firstName: parts[0] || "",
                        lastName: parts.slice(1).join(" ") || "",
                        email: u.email || "",
                        phone: u.mobile || "",
                    });
                }
            } catch (err) { console.error(err); }
        };
        fetchUser();
    }, [backendUrl]);

    const onChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

    const onSave = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const token = localStorage.getItem("token");
            const { data } = await axios.put(`${backendUrl}/api/user/${userId}`, {
                name: `${form.firstName} ${form.lastName}`.trim(),
                mobile: form.phone,
            }, { headers: { Authorization: `Bearer ${token}` } });

            if (data.success) {
                toast.success("Profile updated successfully");
                setSaved(true);
                setEditing(false);
                setTimeout(() => setSaved(false), 3000);
            }
        } catch { toast.error("Failed to update profile"); }
        finally { setLoading(false); }
    };

    const onCancel = () => setEditing(false);

    return (
        <>
            <style>{STYLES}</style>

            <div style={{
                background: C.bgLight,
                minHeight: "100vh",
                color: C.textNavy,
                fontFamily: "Montserrat, sans-serif",
                borderTop: `1px solid ${C.borderHi}`,
            }}>

                {/* ── TOP SHIMMER (matches footer) ── */}
                <div className="ma-shimmer-bar" style={{ height: "1.5px" }} />

                {/* ── PAGE HERO — with grid background like Contact page ── */}
                <div style={{
                    textAlign: "center",
                    padding: "48px 24px 40px",
                    borderBottom: `1px solid ${C.borderLo}`,
                    position: "relative",
                    overflow: "hidden",
                    background: `
            linear-gradient(180deg, ${C.bgSoft} 0%, ${C.bgLight} 100%)
          `,
                }}>
                    {/* Grid overlay */}
                    <div style={{
                        position: "absolute",
                        inset: 0,
                        backgroundImage: `
              linear-gradient(rgba(91,91,214,0.07) 1px, transparent 1px),
              linear-gradient(90deg, rgba(91,91,214,0.07) 1px, transparent 1px)
            `,
                        backgroundSize: "40px 40px",
                        pointerEvents: "none",
                    }} />
                    {/* Radial fade so edges stay clean */}
                    <div style={{
                        position: "absolute",
                        inset: 0,
                        background: "radial-gradient(ellipse 70% 80% at 50% 50%, transparent 40%, #F8F7FF 100%)",
                        pointerEvents: "none",
                    }} />

                    {/* Hero content — above grid */}
                    <div style={{ position: "relative", zIndex: 1 }}>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 14 }}>
                            <span style={{ display: "block", width: 36, height: 1, background: `linear-gradient(to right, transparent, ${C.indigo})` }} />
                            <span style={{
                                fontSize: 9, letterSpacing: "0.38em", color: C.indigo,
                                fontFamily: "Montserrat, sans-serif", fontWeight: 700, textTransform: "uppercase",
                            }}>D DOLLY LAMB</span>
                            <span style={{ display: "block", width: 36, height: 1, background: `linear-gradient(to left, transparent, ${C.indigo})` }} />
                        </div>
                        <h1 style={{
                            fontFamily: "Georgia, serif", fontWeight: 400,
                            fontSize: "clamp(1.4rem,3vw,2.2rem)",
                            color: C.textNavy, letterSpacing: "0.1em", margin: "0 0 6px",
                        }}>
                            MY <span style={{ color: C.indigo }}>ACCOUNT</span>
                        </h1>

                        {/* Decorative divider — same as footer */}
                        <div style={{ display: "flex", alignItems: "center", gap: 12, justifyContent: "center", marginTop: 12 }}>
                            <span style={{ flex: 1, maxWidth: 80, height: 1, background: `linear-gradient(to right, transparent, ${C.indigo})` }} />
                            <span style={{ width: 6, height: 6, background: C.indigo, transform: "rotate(45deg)", flexShrink: 0, opacity: 0.45 }} />
                            <span style={{ flex: 1, maxWidth: 80, height: 1, background: `linear-gradient(to left, transparent, ${C.indigo})` }} />
                        </div>
                    </div>{/* end hero content */}
                </div>{/* end hero section */}

                {/* ── MAIN CONTENT ── */}
                <div style={{ width: "95%", margin: "0 auto", padding: "40px 16px 80px" }}>
                    <div className="flex flex-col md:flex-row gap-6 max-w-5xl mx-auto">

                        {/* Sidebar */}
                        <div className="w-full md:w-64 flex-shrink-0">
                            <AccountSidebar />
                        </div>

                        {/* Cards */}
                        <div className="flex-1 flex flex-col gap-5">

                            {/* ── PROFILE CARD ── */}
                            <div className="ma-card" style={{
                                background: C.bgLight,
                                border: `1px solid ${C.borderHi}`,
                                borderRadius: 3,
                                overflow: "hidden",
                                boxShadow: "0 2px 16px rgba(91,91,214,0.06)",
                            }}>
                                {/* Indigo top accent */}
                                <div style={{
                                    height: 2,
                                    background: `linear-gradient(to right, transparent, ${C.indigoDk} 35%, ${C.indigoLt} 50%, ${C.indigoDk} 65%, transparent)`,
                                    opacity: 0.7,
                                }} />

                                <div style={{ padding: "24px 26px" }}>
                                    {/* Card header */}
                                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 24 }}>
                                        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                                            <AvatarCircle><IconUser /></AvatarCircle>
                                            <div>
                                                <p className="ma-section-label">PERSONAL</p>
                                                <p className="ma-section-title">Profile Details</p>
                                                <SectionDivider />
                                            </div>
                                        </div>
                                        {!editing && (
                                            <button className="ma-btn-ghost" style={{ padding: "8px 18px" }} onClick={() => setEditing(true)}>
                                                <IconEdit /> EDIT
                                            </button>
                                        )}
                                    </div>

                                    {/* Success banner */}
                                    {saved && (
                                        <div style={{
                                            marginBottom: 20, padding: "10px 16px",
                                            background: C.successBg,
                                            border: `1px solid ${C.successBdr}`,
                                            borderRadius: 2,
                                            display: "flex", alignItems: "center", gap: 8,
                                        }}>
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                                <circle cx="12" cy="12" r="10" stroke={C.success} strokeWidth="1.4" />
                                                <path d="M7 12l4 4 6-7" stroke={C.success} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <span style={{ fontSize: 11, color: C.success, letterSpacing: "0.08em", fontFamily: "Montserrat, sans-serif" }}>
                                                Profile updated successfully
                                            </span>
                                        </div>
                                    )}

                                    {/* Form */}
                                    <form onSubmit={onSave}>
                                        <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                                            <Field icon={<IconUser />} label="First Name" name="firstName" value={form.firstName}
                                                onChange={onChange} placeholder="James" disabled={!editing} half />
                                            <Field icon={<IconUser />} label="Last Name" name="lastName" value={form.lastName}
                                                onChange={onChange} placeholder="Harrington" disabled={!editing} half />
                                            <Field icon={<IconMail />} label="Email Address" name="email" value={form.email}
                                                onChange={onChange} type="email" placeholder="james@example.com" disabled />
                                            <Field icon={<IconPhone />} label="Phone Number" name="phone" value={form.phone}
                                                onChange={onChange} type="number" placeholder="+44 7700 900000" disabled={!editing} />
                                        </div>

                                        {/* Email note */}
                                        <p style={{
                                            fontSize: 9, color: C.indigoLt,
                                            fontStyle: "italic", marginTop: 8,
                                            letterSpacing: "0.06em",
                                            fontFamily: "Montserrat, sans-serif",
                                        }}>
                                            ◆ &nbsp;Email address cannot be changed. Contact support for assistance.
                                        </p>

                                        {/* Action buttons */}
                                        {editing && (
                                            <div style={{ display: "flex", gap: 10, marginTop: 22, flexWrap: "wrap" }}>
                                                <button type="submit" className="ma-btn-indigo" disabled={loading}>
                                                    {loading
                                                        ? <><div className="ma-spinner" /> SAVING...</>
                                                        : <><IconSave /> SAVE CHANGES</>}
                                                </button>
                                                <button type="button" className="ma-btn-ghost" onClick={onCancel}>
                                                    <IconClose /> CANCEL
                                                </button>
                                            </div>
                                        )}
                                    </form>
                                </div>
                            </div>

                            {/* ── SECURITY CARD ── */}
                            <div className="ma-card" style={{
                                background: C.bgLight,
                                border: `1px solid ${C.borderHi}`,
                                borderRadius: 3,
                                overflow: "hidden",
                                boxShadow: "0 2px 16px rgba(91,91,214,0.06)",
                            }}>
                                <div style={{
                                    height: 2,
                                    background: `linear-gradient(to right, transparent, ${C.indigoDk} 35%, ${C.indigoLt} 50%, ${C.indigoDk} 65%, transparent)`,
                                    opacity: 0.7,
                                }} />

                                <div style={{ padding: "22px 26px" }}>
                                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 22 }}>
                                        <AvatarCircle><IconShield /></AvatarCircle>
                                        <div>
                                            <p className="ma-section-label">ACCOUNT</p>
                                            <p className="ma-section-title">Security</p>
                                            <SectionDivider />
                                        </div>
                                    </div>

                                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
                                        <div>
                                            <p style={{ fontSize: 13, color: C.textNavy, marginBottom: 3, fontFamily: "Montserrat, sans-serif", fontWeight: 500 }}>
                                                Password
                                            </p>
                                            <p style={{ fontSize: 10, color: C.textFaint, fontStyle: "italic", fontFamily: "Montserrat, sans-serif" }}>
                                                Last changed — never
                                            </p>
                                        </div>
                                        <button
                                            className="ma-btn-ghost"
                                            style={{ padding: "10px 20px" }}
                                            onClick={() => navigate("/reset-password")}
                                        >
                                            CHANGE PASSWORD
                                        </button>
                                    </div>

                                    {/* Divider */}
                                    <div style={{
                                        height: 1,
                                        background: `linear-gradient(to right, transparent, ${C.borderMid}, transparent)`,
                                        margin: "18px 0",
                                    }} />

                                    {/* Trust badges */}
                                    <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
                                        {[
                                            { icon: <IconShield />, label: "Data Encrypted" },
                                            { icon: <IconVerified />, label: "Verified Account" },
                                        ].map((b, i) => (
                                            <div key={i} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                                                {b.icon}
                                                <span style={{
                                                    fontSize: 9, color: C.textFaint,
                                                    letterSpacing: "0.12em",
                                                    fontFamily: "Montserrat, sans-serif",
                                                    fontWeight: 600, textTransform: "uppercase",
                                                }}>{b.label}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* ── BOTTOM SHIMMER ── */}
                <div className="ma-shimmer-bar" style={{ height: "1.5px" }} />
            </div>
        </>
    );
};

export default MyAccount;