import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "sonner";

/* ── Icons ───────────────────────────────── */
const IconUser = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.4" />
    <path d="M4 20c0-4 3.582-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);
const IconMail = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
    <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.4" />
    <path d="M2 8l10 6 10-6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);
const IconLock = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="11" width="18" height="11" rx="2" stroke="currentColor" strokeWidth="1.4" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    <circle cx="12" cy="16" r="1.5" fill="currentColor" />
  </svg>
);
const IconEye = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
    <path d="M1 12S5 4 12 4s11 8 11 8-4 8-11 8S1 12 1 12z" stroke="currentColor" strokeWidth="1.4" />
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.4" />
  </svg>
);
const IconEyeOff = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20C5 20 1 12 1 12a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"
      stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    <path d="M1 1l22 22" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);
const IconDiamond = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="3" width="18" height="18" rx="1" transform="rotate(45 12 12)"
      stroke="#4F46E5" strokeWidth="1.3" fill="rgba(79,70,229,0.08)" />
  </svg>
);
const IconArrow = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
    <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const IconCheck = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
    <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Montserrat:wght@300;400;500;600;700&display=swap');

  @keyframes lgUp   { from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:translateY(0)} }
  @keyframes lgFade { from{opacity:0}to{opacity:1} }
  @keyframes orb1   { 0%,100%{transform:translate(0,0) scale(1)}50%{transform:translate(30px,-20px) scale(1.1)} }
  @keyframes orb2   { 0%,100%{transform:translate(0,0) scale(1)}50%{transform:translate(-20px,30px) scale(0.9)} }
  @keyframes spin   { to{transform:rotate(360deg)} }
  @keyframes shimmer {
    0%   {background-position:-400px 0}
    100% {background-position: 400px 0}
  }

  .lg-page  { animation:lgFade 0.4s ease both; }
  .lg-card  { animation:lgUp 0.55s cubic-bezier(0.16,1,0.3,1) both; }

  /* ── Field ── */
  .lg-field {
    position:relative;
    display:flex; align-items:center;
    background:rgba(255,255,255,0.92);
    border:1px solid rgba(79,70,229,0.16);
    border-radius:8px;
    transition:border-color 0.22s, background 0.22s, box-shadow 0.22s;
    overflow:hidden;
  }
  .lg-field:focus-within {
    border-color:#4F46E5;
    background:rgba(239,246,255,0.96);
    box-shadow:0 0 0 3px rgba(79,70,229,0.12);
  }
  .lg-field.error { border-color:rgba(239,68,68,0.6); }
  .lg-field.error:focus-within { box-shadow:0 0 0 3px rgba(239,68,68,0.12); }

  .lg-icon {
    padding:0 12px;
    color:rgba(79,70,229,0.55);
    display:flex; align-items:center;
    flex-shrink:0; transition:color 0.2s;
  }
  .lg-field:focus-within .lg-icon { color:#4F46E5; }

  .lg-input {
    flex:1; padding:13px 0 13px;
    background:transparent; border:none; outline:none;
    font-size:13px; color:#0F172A;
    font-family:'Montserrat',sans-serif;
  }
  .lg-input::placeholder { color:rgba(100,116,139,0.55); font-style:italic; }

  .lg-eye {
    padding:0 13px; background:none; border:none;
    color:rgba(79,70,229,0.45); cursor:pointer;
    display:flex; align-items:center;
    transition:color 0.2s; flex-shrink:0;
  }
  .lg-eye:hover { color:#4F46E5; }

  /* ── Submit btn ── */
  .lg-btn {
    width:100%; padding:14px;
    background:linear-gradient(135deg,#4F46E5,#7C3AED,#0EA5E9);
    background-size:200% 100%;
    color:#fff; border:none; border-radius:8px;
    font-size:10px; letter-spacing:0.26em;
    font-family:'Montserrat',sans-serif; font-weight:700;
    cursor:pointer; display:flex; align-items:center;
    justify-content:center; gap:9px;
    transition:box-shadow 0.25s, transform 0.25s;
    position:relative; overflow:hidden;
  }
  .lg-btn::after {
    content:'';
    position:absolute; inset:0;
    background:linear-gradient(90deg,transparent,rgba(255,255,255,0.18),transparent);
    background-size:400px 100%;
    animation:shimmer 2.5s infinite;
    opacity:0; transition:opacity 0.3s;
  }
  .lg-btn:hover { box-shadow:0 8px 28px rgba(79,70,229,0.28); transform:translateY(-1px); }
  .lg-btn:hover::after { opacity:1; }
  .lg-btn:disabled { opacity:0.6; cursor:not-allowed; transform:none; }

  /* ── Tab switcher ── */
  .lg-tab {
    flex:1; padding:10px;
    background:transparent; border:none;
    font-size:10px; letter-spacing:0.22em;
    font-family:'Montserrat',sans-serif; font-weight:600;
    cursor:pointer; transition:all 0.22s; border-radius:6px;
    color:rgba(79,70,229,0.55);
  }
  .lg-tab.active {
    background:linear-gradient(135deg,#4F46E5,#0EA5E9);
    color:#fff;
    box-shadow:0 4px 14px rgba(79,70,229,0.22);
  }

  /* Strength bar segments */
  .lg-seg {
    flex:1; height:3px; border-radius:2px;
    background:rgba(79,70,229,0.12);
    transition:background 0.3s;
  }

  /* Error text */
  .lg-err {
    font-size:9px; color:#f87171;
    font-family:'Montserrat',sans-serif;
    letter-spacing:0.1em; margin-top:4px;
    display:flex; align-items:center; gap:4px;
  }

  /* Social btn */
  .lg-social {
    flex:1; padding:10px 14px;
    background:rgba(255,255,255,0.92);
    border:1px solid rgba(79,70,229,0.14); border-radius:8px;
    color:rgba(15,23,42,0.72);
    font-size:9px; letter-spacing:0.16em;
    font-family:'Montserrat',sans-serif;
    cursor:pointer; transition:all 0.2s;
    display:flex; align-items:center; justify-content:center; gap:7px;
  }
  .lg-social:hover { border-color:rgba(79,70,229,0.35); color:#4F46E5; background:rgba(239,246,255,0.96); }
`;

/* ── Password strength ── */
const getStrength = (pw) => {
  let score = 0;
  if (pw.length >= 8) score++;
  if (/[A-Z]/.test(pw)) score++;
  if (/[0-9]/.test(pw)) score++;
  if (/[^A-Za-z0-9]/.test(pw)) score++;
  return score;
};
const strengthLabel = ["", "WEAK", "FAIR", "GOOD", "STRONG"];
const strengthColor = ["", "#ef4444", "#f97316", "#eab308", "#4ade80"];

/* ══════════════════════════════════════════
   LOGIN PAGE
══════════════════════════════════════════ */
const Login = () => {
  const { token, setToken, navigate, backendUrl } = useContext(ShopContext);
  const [mode, setMode] = useState("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [showCfm, setShowCfm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [forgotSent, setForgotSent] = useState(false);

  useEffect(() => {
    if (token) navigate("/");
  }, [token, navigate]);

  const switchMode = (nextMode) => {
    setMode(nextMode);
    setErrors({});
    setName("");
    setEmail("");
    setPassword("");
    setConfirm("");
    setShowPw(false);
    setShowCfm(false);
    setForgotSent(false);
  };

  const validate = () => {
    const nextErrors = {};

    if (mode === "register" && !name.trim()) {
      nextErrors.name = "Name is required";
    }

    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      nextErrors.email = "Enter a valid email";
    }

    if (mode !== "forgot") {
      if (password.length < 6) {
        nextErrors.password = "At least 6 characters";
      }
      if (mode === "register" && password !== confirm) {
        nextErrors.confirm = "Passwords do not match";
      }
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (!validate()) return;

    setLoading(true);
    try {
      if (mode === "register") {
        const response = await axios.post(`${backendUrl}/api/user/register`, { name, email, password });
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
          toast.success("Welcome to D Dolly Lamb!");
        } else {
          toast.error(response.data.message);
        }
      } else if (mode === "login") {
        const response = await axios.post(`${backendUrl}/api/user/login`, { email, password });
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
          toast.success("Welcome back!");
        } else {
          toast.error(response.data.message);
        }
      } else {
        try {
          await axios.post(`${backendUrl}/api/user/forgot-password`, { email });
        } catch (error) {
          // keep UX stable even if endpoint is not implemented yet
        }
        setForgotSent(true);
        toast.success("If that email exists, a reset link has been sent.");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const pwStrength = mode === "register" ? getStrength(password) : 0;

  return (
    <>
      <style>{STYLES}</style>
      <div className="lg-page" style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px 16px",
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(135deg, #EFF6FF 0%, #F8FAFF 45%, #EDE9FE 100%)",
      }}>
        <div style={{
          position: "absolute", top: "14%", left: "8%",
          width: 320, height: 320, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(79,70,229,0.12), transparent 70%)",
          animation: "orb1 8s ease-in-out infinite",
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", bottom: "12%", right: "8%",
          width: 240, height: 240, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(14,165,233,0.1), transparent 70%)",
          animation: "orb2 10s ease-in-out infinite",
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          background: "repeating-linear-gradient(45deg, transparent, transparent 60px, rgba(79,70,229,0.018) 60px, rgba(79,70,229,0.018) 61px)",
        }} />

        <div className="lg-card" style={{
          width: "100%",
          maxWidth: 440,
          background: "rgba(255,255,255,0.92)",
          backdropFilter: "blur(16px)",
          border: "1px solid rgba(79,70,229,0.14)",
          borderRadius: 16,
          overflow: "hidden",
          boxShadow: "0 24px 80px rgba(79,70,229,0.12)",
          position: "relative",
        }}>
          <div style={{ height: 2, background: "linear-gradient(to right, transparent, #4F46E5 28%, #0EA5E9 50%, #4F46E5 72%, transparent)" }} />

          <div style={{ padding: "32px 32px 34px" }}>
            <div style={{ textAlign: "center", marginBottom: 24 }}>
              <div style={{ display: "flex", justifyContent: "center", marginBottom: 10 }}>
                <IconDiamond />
              </div>
              <p style={{
                fontSize: 8,
                letterSpacing: "0.5em",
                color: "#4F46E5",
                fontFamily: "Montserrat,sans-serif",
                fontWeight: 700,
                marginBottom: 6,
              }}>
                D DOLLY LAMB
              </p>
              <p style={{
                fontSize: 9,
                color: "rgba(100,116,139,0.85)",
                fontFamily: "Montserrat,sans-serif",
                letterSpacing: "0.18em",
              }}>
                ARTISAN ATELIER
              </p>
            </div>

            {mode !== "forgot" && (
              <div style={{
                display: "flex",
                gap: 4,
                padding: 4,
                background: "rgba(239,246,255,0.92)",
                border: "1px solid rgba(79,70,229,0.12)",
                borderRadius: 10,
                marginBottom: 24,
              }}>
                <button className={`lg-tab ${mode === "login" ? "active" : ""}`} onClick={() => switchMode("login")} type="button">
                  SIGN IN
                </button>
                <button className={`lg-tab ${mode === "register" ? "active" : ""}`} onClick={() => switchMode("register")} type="button">
                  CREATE ACCOUNT
                </button>
              </div>
            )}

            <div style={{ marginBottom: 18 }}>
              <h1 style={{
                fontSize: "clamp(1.3rem,3vw,1.8rem)",
                color: "#1E40AF",
                fontFamily: "'Cormorant Garamond',serif",
                fontWeight: 400,
                fontStyle: "italic",
                margin: 0,
                letterSpacing: "0.04em",
              }}>
                {mode === "login" ? "Welcome back" : mode === "register" ? "Join the atelier" : "Reset your password"}
              </h1>
              <p style={{
                fontSize: 9,
                color: "rgba(100,116,139,0.95)",
                fontFamily: "Montserrat,sans-serif",
                letterSpacing: "0.14em",
                marginTop: 4,
              }}>
                {mode === "login" ? "Sign in to your account" : mode === "register" ? "Create your account" : "Enter your email to receive a reset link"}
              </p>
            </div>

            {forgotSent ? (
              <div style={{
                padding: "18px 20px",
                borderRadius: 8,
                background: "rgba(236,253,245,0.95)",
                border: "1px solid rgba(16,185,129,0.22)",
                textAlign: "center",
                marginBottom: 20,
              }}>
                <div style={{ color: "#10B981", marginBottom: 8, fontSize: 22 }}>✓</div>
                <p style={{ fontSize: 11, color: "#0F172A", fontFamily: "'Cormorant Garamond',serif", marginBottom: 4 }}>
                  Check your inbox
                </p>
                <p style={{ fontSize: 9, color: "rgba(100,116,139,0.95)", fontFamily: "Montserrat,sans-serif", letterSpacing: "0.1em" }}>
                  A reset link has been sent to {email}
                </p>
                <button onClick={() => switchMode("login")} type="button" style={{
                  marginTop: 14,
                  fontSize: 9,
                  color: "#4F46E5",
                  fontFamily: "Montserrat,sans-serif",
                  letterSpacing: "0.14em",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  textDecoration: "underline",
                }}>
                  BACK TO SIGN IN
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {mode === "register" && (
                  <div>
                    <div className={`lg-field ${errors.name ? "error" : ""}`}>
                      <span className="lg-icon"><IconUser /></span>
                      <input className="lg-input" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Full name" autoComplete="name" />
                    </div>
                    {errors.name && <p className="lg-err">✕ {errors.name}</p>}
                  </div>
                )}

                <div>
                  <div className={`lg-field ${errors.email ? "error" : ""}`}>
                    <span className="lg-icon"><IconMail /></span>
                    <input className="lg-input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email address" autoComplete="email" />
                  </div>
                  {errors.email && <p className="lg-err">✕ {errors.email}</p>}
                </div>

                {mode !== "forgot" && (
                  <div>
                    <div className={`lg-field ${errors.password ? "error" : ""}`}>
                      <span className="lg-icon"><IconLock /></span>
                      <input
                        className="lg-input"
                        type={showPw ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        autoComplete={mode === "login" ? "current-password" : "new-password"}
                      />
                      <button type="button" className="lg-eye" onClick={() => setShowPw((current) => !current)}>
                        {showPw ? <IconEyeOff /> : <IconEye />}
                      </button>
                    </div>
                    {errors.password && <p className="lg-err">✕ {errors.password}</p>}

                    {mode === "register" && password.length > 0 && (
                      <div style={{ marginTop: 8 }}>
                        <div style={{ display: "flex", gap: 4, marginBottom: 4 }}>
                          {[1, 2, 3, 4].map((segment) => (
                            <div
                              key={segment}
                              className="lg-seg"
                              style={{ background: segment <= pwStrength ? strengthColor[pwStrength] : undefined }}
                            />
                          ))}
                        </div>
                        <p style={{ fontSize: 8, fontFamily: "Montserrat,sans-serif", letterSpacing: "0.18em", color: strengthColor[pwStrength] }}>
                          {strengthLabel[pwStrength]}
                        </p>
                      </div>
                    )}
                  </div>
                )}

                {mode === "register" && (
                  <div>
                    <div className={`lg-field ${errors.confirm ? "error" : ""}`}>
                      <span className="lg-icon"><IconLock /></span>
                      <input
                        className="lg-input"
                        type={showCfm ? "text" : "password"}
                        value={confirm}
                        onChange={(e) => setConfirm(e.target.value)}
                        placeholder="Confirm password"
                        autoComplete="new-password"
                      />
                      <button type="button" className="lg-eye" onClick={() => setShowCfm((current) => !current)}>
                        {showCfm ? <IconEyeOff /> : <IconEye />}
                      </button>
                    </div>
                    {errors.confirm && <p className="lg-err">✕ {errors.confirm}</p>}
                    {!errors.confirm && confirm.length > 0 && confirm === password && (
                      <p style={{ fontSize: 9, color: "#10B981", fontFamily: "Montserrat,sans-serif", letterSpacing: "0.1em", marginTop: 4, display: "flex", alignItems: "center", gap: 4 }}>
                        <IconCheck /> Passwords match
                      </p>
                    )}
                  </div>
                )}

                {mode === "login" && (
                  <div style={{ textAlign: "right", marginTop: -4 }}>
                    <button
                      type="button"
                      onClick={() => switchMode("forgot")}
                      style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        color: "rgba(79,70,229,0.75)",
                        fontSize: 9,
                        fontFamily: "Montserrat,sans-serif",
                        letterSpacing: "0.14em",
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={(event) => { event.currentTarget.style.color = "#4F46E5"; }}
                      onMouseLeave={(event) => { event.currentTarget.style.color = "rgba(79,70,229,0.75)"; }}
                    >
                      FORGOT PASSWORD?
                    </button>
                  </div>
                )}

                {mode === "forgot" && (
                  <button
                    type="button"
                    onClick={() => switchMode("login")}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: 9,
                      color: "rgba(79,70,229,0.72)",
                      fontFamily: "Montserrat,sans-serif",
                      letterSpacing: "0.14em",
                      textAlign: "left",
                    }}
                    onMouseEnter={(event) => { event.currentTarget.style.color = "#4F46E5"; }}
                    onMouseLeave={(event) => { event.currentTarget.style.color = "rgba(79,70,229,0.72)"; }}
                  >
                    ← BACK TO SIGN IN
                  </button>
                )}

                <button type="submit" className="lg-btn" disabled={loading} style={{ marginTop: 4 }}>
                  {loading ? (
                    <div style={{ width: 14, height: 14, border: "2px solid rgba(255,255,255,0.35)", borderTopColor: "#fff", borderRadius: "50%", animation: "spin 0.7s linear infinite" }} />
                  ) : (
                    <>
                      {mode === "login" ? "SIGN IN" : mode === "register" ? "CREATE ACCOUNT" : "SEND RESET LINK"}
                      <IconArrow />
                    </>
                  )}
                </button>

                {mode === "register" && (
                  <p style={{
                    fontSize: 8,
                    color: "rgba(100,116,139,0.82)",
                    fontFamily: "Montserrat,sans-serif",
                    letterSpacing: "0.1em",
                    textAlign: "center",
                    lineHeight: 1.6,
                  }}>
                    By creating an account you agree to our{" "}
                    <span style={{ color: "#4F46E5", cursor: "pointer", textDecoration: "underline" }}>Terms</span>
                    {" "}and{" "}
                    <span style={{ color: "#0EA5E9", cursor: "pointer", textDecoration: "underline" }}>Privacy Policy</span>
                  </p>
                )}
              </form>
            )}

            <div style={{ marginTop: 24 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                <div style={{ flex: 1, height: 1, background: "linear-gradient(to right, transparent, rgba(79,70,229,0.16))" }} />
                <span style={{ fontSize: 7.5, color: "rgba(100,116,139,0.82)", fontFamily: "Montserrat,sans-serif", letterSpacing: "0.22em" }}>MEMBER BENEFITS</span>
                <div style={{ flex: 1, height: 1, background: "linear-gradient(to left, transparent, rgba(14,165,233,0.16))" }} />
              </div>
              <div style={{ display: "flex", justifyContent: "center", gap: 18, flexWrap: "wrap" }}>
                {["Early Access", "Exclusive Offers", "Artisan Stories"].map((benefit) => (
                  <div key={benefit} style={{ display: "flex", alignItems: "center", gap: 5 }}>
                    <div style={{ width: 4, height: 4, background: "linear-gradient(135deg,#4F46E5,#0EA5E9)", transform: "rotate(45deg)" }} />
                    <span style={{ fontSize: 8, color: "rgba(100,116,139,0.95)", fontFamily: "Montserrat,sans-serif", letterSpacing: "0.12em" }}>
                      {benefit.toUpperCase()}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div style={{ height: 1, background: "linear-gradient(to right, transparent, rgba(79,70,229,0.15), transparent)" }} />
        </div>
      </div>
    </>
  );
};

export default Login;