import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { ShopContext } from "../context/ShopContext";

/* ── SVG Icons ─────────────────────────────────── */
const IconLock = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="11" width="18" height="11" rx="2" stroke="#c8973a" strokeWidth="1.4" strokeLinejoin="round" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="#c8973a" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
);
const IconEye = ({ show }) => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
        {show ? (
            <>
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="currentColor" strokeWidth="1.4" />
                <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.4" />
            </>
        ) : (
            <>
                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                <line x1="1" y1="1" x2="23" y2="23" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            </>
        )}
    </svg>
);
const IconShield = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L4 6v6c0 5 3.6 9.7 8 11 4.4-1.3 8-6 8-11V6l-8-4z" stroke="#c8973a" strokeWidth="1.3" strokeLinejoin="round" fill="rgba(200,151,58,0.08)" />
        <path d="M9 12l2 2 4-4" stroke="#c8973a" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);
const IconArrow = () => (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
        <path d="M19 12H5M12 5l-7 7 7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);
const IconCheck = () => (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
        <path d="M20 6L9 17l-5-5" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

/* ── Styles ─────────────────────────────────────── */
const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Cinzel:wght@400;500&display=swap');

  @keyframes rpFadeUp {
    from { opacity:0; transform:translateY(20px); }
    to   { opacity:1; transform:translateY(0); }
  }
  @keyframes rpGlow {
    0%,100% { opacity:0.4; }
    50%      { opacity:0.9; }
  }
  @keyframes rpShimmer {
    0%   { background-position: -200% center; }
    100% { background-position: 200% center; }
  }
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
  @keyframes successPop {
    0%   { transform: scale(0.8); opacity:0; }
    60%  { transform: scale(1.05); }
    100% { transform: scale(1); opacity:1; }
  }

  .rp-wrap { animation: rpFadeUp 0.55s cubic-bezier(0.16,1,0.3,1) both; }
  .rp-card { animation: rpFadeUp 0.6s cubic-bezier(0.16,1,0.3,1) 0.1s both; }

  .rp-input-wrap {
    position: relative;
    display: flex;
    align-items: center;
  }
  .rp-input {
    width: 100%;
    padding: 13px 44px 13px 16px;
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(200,151,58,0.2);
    color: #f5ede0;
    font-size: 13px;
    font-family: Georgia, serif;
    outline: none;
    border-radius: 2px;
    transition: border-color 0.25s, background 0.25s, box-shadow 0.25s;
    letter-spacing: 0.02em;
  }
  .rp-input:focus {
    border-color: #c8973a;
    background: rgba(200,151,58,0.05);
    box-shadow: 0 0 0 3px rgba(200,151,58,0.08);
  }
  .rp-input::placeholder {
    color: rgba(200,160,100,0.3);
    font-style: italic;
  }
  .rp-input.error {
    border-color: rgba(248,113,113,0.5);
    box-shadow: 0 0 0 3px rgba(248,113,113,0.06);
  }
  .rp-input.success {
    border-color: rgba(74,222,128,0.4);
  }

  .rp-eye-btn {
    position: absolute;
    right: 12px;
    background: none;
    border: none;
    color: rgba(200,151,58,0.5);
    cursor: pointer;
    padding: 2px;
    display: flex;
    align-items: center;
    transition: color 0.2s;
  }
  .rp-eye-btn:hover { color: #c8973a; }

  .rp-label {
    font-size: 8.5px;
    letter-spacing: 0.3em;
    color: #c8973a;
    font-family: 'Cinzel', serif;
    font-weight: 500;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    gap: 6px;
    margin-bottom: 6px;
  }

  .rp-btn {
    width: 100%;
    padding: 15px 28px;
    background: linear-gradient(135deg, #c8973a 0%, #f7c568 50%, #c8973a 100%);
    background-size: 200% auto;
    color: #1a0f0a;
    border: none;
    font-size: 10px;
    letter-spacing: 0.32em;
    font-family: 'Cinzel', serif;
    font-weight: 500;
    cursor: pointer;
    border-radius: 2px;
    transition: background-position 0.4s, box-shadow 0.3s, transform 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
  .rp-btn:hover:not(:disabled) {
    background-position: right center;
    box-shadow: 0 10px 32px rgba(200,151,58,0.3);
    transform: translateY(-1px);
  }
  .rp-btn:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }

  .rp-strength-bar {
    height: 2px;
    border-radius: 2px;
    transition: width 0.4s, background 0.4s;
  }

  .rp-back-btn {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    color: rgba(200,151,58,0.55);
    font-size: 9px;
    letter-spacing: 0.24em;
    font-family: 'Cinzel', serif;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    transition: color 0.2s, gap 0.2s;
    text-transform: uppercase;
  }
  .rp-back-btn:hover {
    color: #c8973a;
    gap: 10px;
  }

  .rp-spinner {
    width: 14px; height: 14px;
    border: 2px solid rgba(26,15,10,0.25);
    border-top-color: #1a0f0a;
    border-radius: 50%;
    animation: spin 0.7s linear infinite;
  }

  .rp-success-icon {
    animation: successPop 0.5s cubic-bezier(0.16,1,0.3,1) both;
  }

  .rp-rule {
    display: flex;
    align-items: center;
    gap: 7px;
    font-size: 10px;
    color: rgba(200,160,100,0.5);
    font-family: Georgia, serif;
    transition: color 0.2s;
  }
  .rp-rule.met { color: #4ade80; }
`;

/* ── Password strength ─────────────────────────── */
const getStrength = (pw) => {
    let score = 0;
    if (pw.length >= 8) score++;
    if (pw.length >= 12) score++;
    if (/[A-Z]/.test(pw)) score++;
    if (/[0-9]/.test(pw)) score++;
    if (/[^A-Za-z0-9]/.test(pw)) score++;
    return score;
};
const strengthLabel = ["", "Weak", "Fair", "Good", "Strong", "Very Strong"];
const strengthColor = ["", "#f87171", "#fb923c", "#facc15", "#4ade80", "#34d399"];

/* ── PasswordField ─────────────────────────────── */
const PasswordField = ({ label, name, value, onChange, placeholder, hasError, isSuccess }) => {
    const [show, setShow] = useState(false);
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <label className="rp-label">
                <IconLock />{label}
            </label>
            <div className="rp-input-wrap">
                <input
                    className={`rp-input${hasError ? " error" : isSuccess ? " success" : ""}`}
                    type={show ? "text" : "password"}
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    autoComplete="new-password"
                />
                <button type="button" className="rp-eye-btn" onClick={() => setShow(s => !s)} tabIndex={-1}>
                    <IconEye show={show} />
                </button>
            </div>
        </div>
    );
};

/* ══════════════════════════════════════════════════
   RESET PASSWORD PAGE
══════════════════════════════════════════════════ */
const ResetPassword = () => {
    const navigate = useNavigate();
    const { backendUrl } = useContext(ShopContext);

    const [form, setForm] = useState({
        email: "",
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",
    });
    const [loading, setLoading] = useState(false);
    const [done, setDone] = useState(false);

    const onChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

    const strength = getStrength(form.newPassword);
    const rules = [
        { label: "At least 8 characters", met: form.newPassword.length >= 8 },
        { label: "One uppercase letter", met: /[A-Z]/.test(form.newPassword) },
        { label: "One number", met: /[0-9]/.test(form.newPassword) },
        { label: "Passwords match", met: form.newPassword && form.newPassword === form.confirmPassword },
    ];

    const onSubmit = async (e) => {
        e.preventDefault();

        if (!form.email || !form.oldPassword || !form.newPassword || !form.confirmPassword) {
            toast.error("Please fill in all fields");
            return;
        }
        if (form.newPassword !== form.confirmPassword) {
            toast.error("Passwords do not match");
            return;
        }
        if (form.newPassword.length < 8) {
            toast.error("Password must be at least 8 characters");
            return;
        }

        setLoading(true);
        try {
            const { data } = await axios.post(`${backendUrl}/api/user/reset-password`, {
                email: form.email,
                oldPassword: form.oldPassword,
                newPassword: form.newPassword,
                confirmPassword: form.confirmPassword,
            });

            if (data.success) {
                setDone(true);
                setTimeout(() => navigate("/profile"), 3000);
            } else {
                toast.error(data.message || "Failed to reset password");
            }
        } catch (err) {
            toast.error(err?.response?.data?.message || "Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    /* ── Success State ── */
    if (done) {
        return (
            <>
                <style>{STYLES}</style>
                <div style={{
                    background: "linear-gradient(160deg,#0d0703,#1a0f0a)",
                    minHeight: "100vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "40px 20px",
                    fontFamily: "Georgia,serif",
                }}>
                    <div style={{ textAlign: "center", maxWidth: 420 }} className="rp-wrap">
                        {/* Success icon */}
                        <div className="rp-success-icon" style={{
                            width: 80, height: 80,
                            borderRadius: "50%",
                            background: "rgba(74,222,128,0.08)",
                            border: "1px solid rgba(74,222,128,0.3)",
                            display: "flex", alignItems: "center", justifyContent: "center",
                            margin: "0 auto 28px",
                        }}>
                            <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
                                <path d="M20 6L9 17l-5-5" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>

                        <p style={{ fontSize: 9, letterSpacing: "0.44em", color: "#c8973a", fontFamily: "'Cinzel',serif", marginBottom: 10 }}>
                            D DOLLY LAMB
                        </p>
                        <h2 style={{ fontSize: 26, color: "#f7c568", fontWeight: 400, letterSpacing: "0.08em", marginBottom: 14, fontFamily: "'Cormorant Garamond',serif" }}>
                            Password Updated
                        </h2>
                        <div style={{ height: 1, background: "linear-gradient(to right,transparent,rgba(200,151,58,0.4),transparent)", marginBottom: 20 }} />
                        <p style={{ fontSize: 13, color: "#a07848", lineHeight: 1.8, marginBottom: 8 }}>
                            Your password has been changed successfully.
                        </p>
                        <p style={{ fontSize: 11, color: "#5a3818", fontStyle: "italic" }}>
                            Redirecting to your profile...
                        </p>
                    </div>
                </div>
            </>
        );
    }

    /* ── Main Form ── */
    return (
        <>
            <style>{STYLES}</style>
            <div style={{
                background: "linear-gradient(160deg,#0d0703,#1a0f0a)",
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "40px 20px",
                fontFamily: "Georgia,serif",
                position: "relative",
                overflow: "hidden",
            }}>

                {/* Background decorative elements */}
                <div style={{
                    position: "absolute", top: "15%", left: "8%",
                    width: 300, height: 300,
                    borderRadius: "50%",
                    background: "radial-gradient(circle,rgba(200,151,58,0.04) 0%,transparent 70%)",
                    pointerEvents: "none",
                }} />
                <div style={{
                    position: "absolute", bottom: "10%", right: "6%",
                    width: 400, height: 400,
                    borderRadius: "50%",
                    background: "radial-gradient(circle,rgba(200,151,58,0.03) 0%,transparent 70%)",
                    pointerEvents: "none",
                }} />

                <div className="rp-wrap" style={{ width: "100%", maxWidth: 480 }}>

                    {/* Back button */}
                    <button className="rp-back-btn" onClick={() => navigate("/profile")} style={{ marginBottom: 32 }}>
                        <IconArrow /> Back to profile
                    </button>

                    {/* Card */}
                    <div className="rp-card" style={{
                        background: "linear-gradient(160deg,#1e120a,#150c05)",
                        border: "1px solid rgba(200,151,58,0.18)",
                        borderRadius: 3,
                        overflow: "hidden",
                    }}>
                        {/* Gold top line */}
                        <div style={{ height: 2, background: "linear-gradient(to right,transparent,#c8973a 30%,#f7c568 50%,#c8973a 70%,transparent)" }} />

                        <div style={{ padding: "36px 36px 40px" }}>

                            {/* Header */}
                            <div style={{ textAlign: "center", marginBottom: 32 }}>
                                <div style={{
                                    width: 52, height: 52,
                                    borderRadius: "50%",
                                    background: "rgba(200,151,58,0.08)",
                                    border: "1px solid rgba(200,151,58,0.25)",
                                    display: "flex", alignItems: "center", justifyContent: "center",
                                    margin: "0 auto 18px",
                                }}>
                                    <IconShield />
                                </div>
                                <p style={{ fontSize: 9, letterSpacing: "0.42em", color: "#c8973a", fontFamily: "'Cinzel',serif", marginBottom: 8 }}>
                                    ACCOUNT SECURITY
                                </p>
                                <h1 style={{
                                    fontSize: 26, color: "#f7c568",
                                    fontWeight: 400, letterSpacing: "0.08em",
                                    fontFamily: "'Cormorant Garamond',serif",
                                    margin: "0 0 14px",
                                }}>
                                    Reset Password
                                </h1>
                                {/* Gold rule */}
                                <div style={{ display: "flex", alignItems: "center", gap: 10, justifyContent: "center" }}>
                                    <span style={{ flex: 1, maxWidth: 60, height: 1, background: "linear-gradient(to right,transparent,rgba(200,151,58,0.3))" }} />
                                    <span style={{ width: 4, height: 4, background: "#c8973a", transform: "rotate(45deg)" }} />
                                    <span style={{ flex: 1, maxWidth: 60, height: 1, background: "linear-gradient(to left,transparent,rgba(200,151,58,0.3))" }} />
                                </div>
                            </div>

                            {/* Form */}
                            <form onSubmit={onSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>

                                {/* Email */}
                                <div style={{ display: "flex", flexDirection: "column" }}>
                                    <label className="rp-label">
                                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                                            <rect x="2" y="4" width="20" height="16" rx="2" stroke="#c8973a" strokeWidth="1.4" />
                                            <path d="M2 8l10 6 10-6" stroke="#c8973a" strokeWidth="1.4" strokeLinecap="round" />
                                        </svg>
                                        Email Address
                                    </label>
                                    <input
                                        className="rp-input"
                                        type="email"
                                        name="email"
                                        value={form.email}
                                        onChange={onChange}
                                        placeholder="your@email.com"
                                        autoComplete="email"
                                    />
                                </div>

                                {/* Divider */}
                                <div style={{ height: 1, background: "linear-gradient(to right,transparent,rgba(200,151,58,0.1),transparent)" }} />

                                {/* Old Password */}
                                <PasswordField
                                    label="Current Password"
                                    name="oldPassword"
                                    value={form.oldPassword}
                                    onChange={onChange}
                                    placeholder="Enter your current password"
                                />

                                {/* New Password */}
                                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                                    <PasswordField
                                        label="New Password"
                                        name="newPassword"
                                        value={form.newPassword}
                                        onChange={onChange}
                                        placeholder="Create a strong password"
                                        isSuccess={strength >= 3}
                                    />

                                    {/* Strength meter */}
                                    {form.newPassword && (
                                        <div>
                                            <div style={{ display: "flex", gap: 3, marginBottom: 5 }}>
                                                {[1, 2, 3, 4, 5].map(i => (
                                                    <div key={i} style={{
                                                        flex: 1, height: 2, borderRadius: 2,
                                                        background: i <= strength ? strengthColor[strength] : "rgba(200,151,58,0.1)",
                                                        transition: "background 0.3s",
                                                    }} />
                                                ))}
                                            </div>
                                            <p style={{ fontSize: 9, color: strengthColor[strength], letterSpacing: "0.14em", fontFamily: "'Cinzel',serif" }}>
                                                {strengthLabel[strength]}
                                            </p>
                                        </div>
                                    )}

                                    {/* Rules */}
                                    {form.newPassword && (
                                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5px 12px", marginTop: 4 }}>
                                            {rules.map((r, i) => (
                                                <div key={i} className={`rp-rule${r.met ? " met" : ""}`}>
                                                    {r.met
                                                        ? <IconCheck />
                                                        : <span style={{ width: 13, height: 13, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 9, color: "rgba(200,151,58,0.3)" }}>○</span>
                                                    }
                                                    {r.label}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* Confirm Password */}
                                <PasswordField
                                    label="Confirm New Password"
                                    name="confirmPassword"
                                    value={form.confirmPassword}
                                    onChange={onChange}
                                    placeholder="Repeat your new password"
                                    hasError={form.confirmPassword && form.newPassword !== form.confirmPassword}
                                    isSuccess={form.confirmPassword && form.newPassword === form.confirmPassword}
                                />

                                {/* Match message */}
                                {form.confirmPassword && (
                                    <p style={{
                                        fontSize: 10,
                                        color: form.newPassword === form.confirmPassword ? "#4ade80" : "#f87171",
                                        display: "flex", alignItems: "center", gap: 5,
                                        marginTop: -12,
                                        fontStyle: "italic",
                                    }}>
                                        {form.newPassword === form.confirmPassword
                                            ? <><IconCheck /> Passwords match</>
                                            : "✕  Passwords do not match"
                                        }
                                    </p>
                                )}

                                {/* Submit */}
                                <button
                                    type="submit"
                                    className="rp-btn"
                                    disabled={loading}
                                    style={{ marginTop: 8 }}
                                >
                                    {loading
                                        ? <><div className="rp-spinner" /> UPDATING PASSWORD...</>
                                        : <>
                                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                                                <rect x="3" y="11" width="18" height="11" rx="2" stroke="currentColor" strokeWidth="1.5" />
                                                <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                            </svg>
                                            UPDATE PASSWORD
                                        </>
                                    }
                                </button>

                            </form>

                            {/* Footer note */}
                            <p style={{ fontSize: 9, color: "#4a2e10", textAlign: "center", marginTop: 20, letterSpacing: "0.08em", fontStyle: "italic", lineHeight: 1.7 }}>
                                ◆ &nbsp;For security, you will remain logged in after changing your password.
                            </p>
                        </div>

                        {/* Gold bottom line */}
                        <div style={{ height: 1, background: "linear-gradient(to right,transparent,rgba(200,151,58,0.15),transparent)" }} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default ResetPassword;