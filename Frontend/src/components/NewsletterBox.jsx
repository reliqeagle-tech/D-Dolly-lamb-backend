import React, { useState } from "react";

const IconMail = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.4" />
    <path d="M2 7l10 7 10-7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);
const IconArrow = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const IconSpinner = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" style={{ animation: "nlSpin 0.8s linear infinite" }}>
    <circle cx="12" cy="12" r="9" stroke="rgba(99,102,241,0.2)" strokeWidth="2" />
    <path d="M12 3a9 9 0 0 1 9 9" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" />
  </svg>
);
const IconCheck = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" stroke="#6366F1" strokeWidth="1.4" fill="rgba(99,102,241,0.08)" />
    <path d="M7 12l4 4 6-7" stroke="#6366F1" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const IconDiamond = () => (
  <svg width="32" height="32" viewBox="0 0 42 42" fill="none">
    <rect x="6" y="6" width="30" height="30" rx="1" transform="rotate(45 21 21)"
      stroke="#B8923E" strokeWidth="1.4" fill="none" />
    <rect x="11" y="11" width="20" height="20" rx="0.5" transform="rotate(45 21 21)"
      stroke="#D4A853" strokeWidth="0.7" fill="none" opacity="0.4" />
    <circle cx="21" cy="21" r="2.5" fill="#D4A853" opacity="0.6" />
  </svg>
);

/*
  ═══════════════════════════════════════════════
  LIGHT MODE — NewsletterBox.jsx
  ═══════════════════════════════════════════════
  OLD dark brown:
    bg: #0d0703 → #1a0f0a  dark brown
    accent: #c8973a / #f7c568  amber
    text: #f5ede0 / #6a5040 / #7a5a30
    border: #c8973a/15%
    input bg: white/3%
    btn: amber gradient / dark text

  NEW light mode (indigo system):
    bg: #F0F2FF → #EEF0FF → #E8ECFF  soft lavender
    grid: 40px indigo grid (matches hero)
    orbs: rgba(129,140,248,0.12) indigo blobs
    eyebrow: #6366F1 indigo
    heading: #1E1B4B deep navy
    highlight: #4338CA → #6366F1 → #818CF8 gradient
    subtitle: #6B7280 cool grey
    perk pills: rgba(99,102,241,0.06) bg, rgba(99,102,241,0.18) border
    input bg: #FFFFFF white
    input text: #1E1B4B / placeholder: #9CA3AF
    input border: rgba(99,102,241,0.2) / focused: #6366F1
    mail icon: #818CF8
    btn: #4338CA → #6366F1 indigo gradient / white text
    success check: #6366F1
    success text: #4338CA
    error: #EF4444 red (unchanged)
    shimmer: indigo (matches navbar/footer pattern)
    diamond logo: gold KEPT for brand identity
  ═══════════════════════════════════════════════
*/

const ANIM = `
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');

  @keyframes nlFadeUp {
    from { opacity: 0; transform: translateY(18px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes nlSpin { to { transform: rotate(360deg); } }
  @keyframes nlPulse {
    0%, 100% { opacity: 0.5; transform: scale(1); }
    50%       { opacity: 0.8; transform: scale(1.06); }
  }
  @keyframes nlCheckIn {
    from { opacity: 0; transform: scale(0.85) translateY(10px); }
    to   { opacity: 1; transform: scale(1) translateY(0); }
  }
  @keyframes nlGlowIndigo {
    0%, 100% { box-shadow: 0 0 0 0 rgba(99,102,241,0); }
    50%       { box-shadow: 0 0 0 4px rgba(99,102,241,0.15); }
  }
  @keyframes shimmerIndigo {
    0%   { background-position: -200% center; }
    100% { background-position: 200% center; }
  }

  .nl-wrap    { animation: nlFadeUp 0.6s ease both; }
  .nl-tag     { animation: nlFadeUp 0.6s ease 0.1s both; }
  .nl-title   { animation: nlFadeUp 0.6s ease 0.2s both; }
  .nl-sub     { animation: nlFadeUp 0.6s ease 0.3s both; }
  .nl-perks   { animation: nlFadeUp 0.6s ease 0.4s both; }
  .nl-form    { animation: nlFadeUp 0.6s ease 0.5s both; }
  .nl-success { animation: nlCheckIn 0.5s cubic-bezier(0.16,1,0.3,1) both; }
  .nl-orb     { animation: nlPulse 5s ease-in-out infinite; }
  .nl-glow    { animation: nlGlowIndigo 2s ease infinite; }

  .nl-shimmer {
    background: linear-gradient(90deg,
      transparent 0%, rgba(99,102,241,0.3) 20%,
      #6366F1 45%, #818CF8 50%, #6366F1 55%,
      rgba(99,102,241,0.3) 80%, transparent 100%);
    background-size: 200% auto;
    animation: shimmerIndigo 4s linear infinite;
    height: 1.5px;
  }

  .nl-grid-bg::before {
    content: '';
    position: absolute; inset: 0;
    background-image:
      linear-gradient(rgba(99,102,241,0.05) 1px, transparent 1px),
      linear-gradient(90deg, rgba(99,102,241,0.05) 1px, transparent 1px);
    background-size: 40px 40px;
    pointer-events: none;
  }

  .nl-input-wrap {
    display: flex;
    border-radius: 10px;
    overflow: hidden;
    border: 1.5px solid rgba(99,102,241,0.2);
    background: #FFFFFF;
    transition: border-color 0.25s, box-shadow 0.25s;
    box-shadow: 0 2px 12px rgba(99,102,241,0.06);
  }
  .nl-input-wrap.focused {
    border-color: #6366F1;
    box-shadow: 0 0 0 4px rgba(99,102,241,0.12);
  }
  .nl-input-wrap.focused .nl-glow { animation: nlGlowIndigo 2s ease infinite; }

  .nl-input {
    flex: 1; min-width: 0;
    padding: 14px 14px;
    background: transparent; border: none; outline: none;
    color: #1E1B4B; font-size: 13px;
    font-family: 'Montserrat', sans-serif;
    font-style: italic; letter-spacing: 0.03em;
  }
  .nl-input::placeholder { color: #9CA3AF; }
  .nl-input:disabled { opacity: 0.6; }

  .nl-btn {
    flex-shrink: 0;
    display: flex; align-items: center; gap: 7px;
    padding: 14px 22px;
    background: linear-gradient(135deg, #4338CA, #6366F1);
    color: #FFFFFF;
    font-size: 10px; letter-spacing: 0.22em;
    font-family: 'Montserrat', sans-serif; font-weight: 700;
    border: none; cursor: pointer; white-space: nowrap;
    transition: opacity 0.2s, transform 0.2s, box-shadow 0.2s;
  }
  .nl-btn:hover:not(:disabled) {
    opacity: 0.92;
    box-shadow: 0 4px 18px rgba(99,102,241,0.35);
    transform: translateX(1px);
  }
  .nl-btn:disabled { opacity: 0.55; cursor: not-allowed; }

  .nl-perk-pill {
    font-size: 9px; letter-spacing: 0.14em;
    color: #6366F1; font-weight: 600;
    font-family: 'Montserrat', sans-serif;
    border: 1px solid rgba(99,102,241,0.18);
    padding: 5px 12px; border-radius: 20px;
    background: rgba(99,102,241,0.06);
    transition: background 0.2s, border-color 0.2s;
  }
  .nl-perk-pill:hover {
    background: rgba(99,102,241,0.12);
    border-color: rgba(99,102,241,0.35);
  }
`;

const NewsletterBox = () => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [focused, setFocused] = useState(false);
  const [email, setEmail] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    setErrorMsg("");
    if (!backendUrl) { setErrorMsg("Server configuration error. Please try again later."); return; }
    setLoading(true);
    try {
      const res = await fetch(`${backendUrl}/api/user/send-mail`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) {
        const text = await res.text();
        throw new Error(`Server error ${res.status}: ${text || "No response body"}`);
      }
      const data = await res.json();
      if (data.success) { setSuccess(true); setEmail(""); }
      else setErrorMsg(data.message || "Something went wrong. Please try again.");
    } catch (error) {
      setErrorMsg(error.message || "Network error. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section style={{
      position: "relative", overflow: "hidden",
      background: "linear-gradient(180deg, #EEF0FF 0%, #E8EAFF 50%, #DDE2FF 100%)",
      borderTop: "1px solid rgba(99,102,241,0.14)",
      borderBottom: "1px solid rgba(99,102,241,0.14)",
    }} className="nl-grid-bg">
      <style>{ANIM}</style>

      {/* Indigo orbs — matching hero/section blobs */}
      <div className="nl-orb" style={{
        position: "absolute", borderRadius: "50%", pointerEvents: "none",
        width: 380, height: 380, top: -120, left: -80,
        background: "radial-gradient(circle, rgba(129,140,248,0.12) 0%, transparent 70%)",
      }} />
      <div className="nl-orb" style={{
        position: "absolute", borderRadius: "50%", pointerEvents: "none",
        width: 300, height: 300, bottom: -80, right: -60,
        background: "radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 70%)",
        animationDelay: "2.5s",
      }} />

      {/* Top shimmer */}
      <div className="nl-shimmer" />

      <div className="nl-wrap" style={{
        position: "relative", zIndex: 1,
        display: "flex", flexDirection: "column", alignItems: "center",
        textAlign: "center", padding: "72px 24px",
        maxWidth: 620, margin: "0 auto",
      }}>

        {/* Diamond — gold kept for brand */}
        <div className="nl-tag" style={{ marginBottom: 18 }}>
          <IconDiamond />
        </div>

        {/* Eyebrow */}
        <div className="nl-tag" style={{
          display: "flex", alignItems: "center", gap: 12, marginBottom: 18,
        }}>
          <span style={{ display: "block", width: 32, height: 1, background: "linear-gradient(to right, transparent, #6366F1)" }} />
          <span style={{
            fontSize: 9, letterSpacing: "0.4em", color: "#6366F1",
            fontFamily: "'Montserrat', sans-serif", fontWeight: 700, textTransform: "uppercase",
          }}>THE INNER CIRCLE</span>
          <span style={{ display: "block", width: 32, height: 1, background: "linear-gradient(to left, transparent, #6366F1)" }} />
        </div>

        {/* Heading */}
        <h2 className="nl-title" style={{
          fontFamily: "'Montserrat', sans-serif",
          fontSize: "clamp(1.6rem,4vw,2.4rem)",
          fontWeight: 700, color: "#1E1B4B",
          letterSpacing: "0.02em", lineHeight: 1.25, marginBottom: 12,
        }}>
          Subscribe & receive{" "}
          <span style={{
            background: "linear-gradient(135deg, #4338CA, #6366F1, #818CF8)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
          }}>20% off</span>{" "}your first order
        </h2>

        {/* Subtitle */}
        <p className="nl-sub" style={{
          fontSize: 13, color: "#6B7280",
          fontFamily: "'Montserrat', sans-serif",
          fontStyle: "italic", lineHeight: 1.8,
          maxWidth: 420, marginBottom: 24,
        }}>
          Early access to new drops, private sales, artisan stories &amp; curated style notes — delivered to your inbox.
        </p>

        {/* Perk pills */}
        <div className="nl-perks" style={{
          display: "flex", flexWrap: "wrap", justifyContent: "center",
          gap: 8, marginBottom: 32,
        }}>
          {["✦ Exclusive Drops", "◈ Private Sales", "◆ Style Notes", "✦ No Spam"].map((perk, i) => (
            <span key={i} className="nl-perk-pill">{perk}</span>
          ))}
        </div>

        {/* Form or Success */}
        {success ? (
          <div className="nl-success" style={{
            display: "flex", flexDirection: "column", alignItems: "center", gap: 12,
          }}>
            <IconCheck />
            <p style={{
              fontSize: 14, color: "#4338CA",
              fontFamily: "'Montserrat', sans-serif",
              fontStyle: "italic", fontWeight: 500,
            }}>
              You're on the list — welcome to the inner circle.
            </p>
          </div>
        ) : (
          <div className="nl-form" style={{ width: "100%", maxWidth: 460 }}>
            <form onSubmit={onSubmitHandler}>
              <div className={`nl-input-wrap${focused ? " focused" : ""}`}>

                {/* Mail icon */}
                <div style={{
                  display: "flex", alignItems: "center", padding: "0 12px",
                  color: "#818CF8", flexShrink: 0,
                }}>
                  <IconMail />
                </div>

                {/* Input */}
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Your email address..."
                  required
                  disabled={loading}
                  onFocus={() => setFocused(true)}
                  onBlur={() => setFocused(false)}
                  className="nl-input"
                />

                {/* Submit */}
                <button type="submit" disabled={loading} className="nl-btn">
                  {loading ? <IconSpinner /> : <><IconArrow /><span>JOIN</span></>}
                </button>
              </div>
            </form>

            {errorMsg && (
              <p style={{
                marginTop: 10, fontSize: 11, color: "#EF4444",
                fontFamily: "'Montserrat', sans-serif",
                fontStyle: "italic", letterSpacing: "0.03em",
              }}>⚠ {errorMsg}</p>
            )}

            <p style={{
              marginTop: 12, fontSize: 9, color: "#9CA3AF",
              letterSpacing: "0.16em",
              fontFamily: "'Montserrat', sans-serif", fontWeight: 500,
            }}>
              UNSUBSCRIBE ANYTIME · NO SPAM · PRIVACY PROTECTED
            </p>
          </div>
        )}
      </div>

      {/* Bottom shimmer */}
      <div className="nl-shimmer" />
    </section>
  );
};

export default NewsletterBox;