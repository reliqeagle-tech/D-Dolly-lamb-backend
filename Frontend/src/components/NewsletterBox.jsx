import React, { useState } from "react";

/* ── Premium SVG Icons ─────────────────────────── */
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
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" className="animate-[nlSpin_0.8s_linear_infinite]">
    <circle cx="12" cy="12" r="9" stroke="rgba(200,151,58,0.25)" strokeWidth="2" />
    <path d="M12 3a9 9 0 0 1 9 9" stroke="#c8973a" strokeWidth="2" strokeLinecap="round" />
  </svg>
);
const IconCheck = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" stroke="#c8973a" strokeWidth="1.4" />
    <path d="M7 12l4 4 6-7" stroke="#c8973a" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const IconDiamond = () => (
  <svg width="32" height="32" viewBox="0 0 42 42" fill="none">
    <rect x="6" y="6" width="30" height="30" rx="1" transform="rotate(45 21 21)"
      stroke="#c8924a" strokeWidth="1.4" fill="none" />
    <rect x="11" y="11" width="20" height="20" rx="0.5" transform="rotate(45 21 21)"
      stroke="#c8924a" strokeWidth="0.7" fill="none" opacity="0.4" />
    <circle cx="21" cy="21" r="2.5" fill="#c8973a" opacity="0.6" />
  </svg>
);

const ANIM = `
  @keyframes nlFadeUp {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes nlSpin { to { transform: rotate(360deg); } }
  @keyframes nlPulse {
    0%, 100% { opacity: 0.4; transform: scale(1); }
    50%       { opacity: 0.7; transform: scale(1.06); }
  }
  @keyframes nlCheckIn {
    from { opacity: 0; transform: scale(0.85) translateY(10px); }
    to   { opacity: 1; transform: scale(1) translateY(0); }
  }
  @keyframes nlGlow {
    0%, 100% { box-shadow: 0 0 0 0 rgba(200,151,58,0); }
    50%       { box-shadow: 0 0 24px 4px rgba(200,151,58,0.18); }
  }
  .nl-wrap    { animation: nlFadeUp 0.6s ease both; }
  .nl-tag     { animation: nlFadeUp 0.6s ease 0.1s both; }
  .nl-title   { animation: nlFadeUp 0.6s ease 0.2s both; }
  .nl-sub     { animation: nlFadeUp 0.6s ease 0.3s both; }
  .nl-perks   { animation: nlFadeUp 0.6s ease 0.4s both; }
  .nl-form    { animation: nlFadeUp 0.6s ease 0.5s both; }
  .nl-success { animation: nlCheckIn 0.5s cubic-bezier(0.16,1,0.3,1) both; }
  .nl-orb     { animation: nlPulse 5s ease-in-out infinite; }
  .nl-glow    { animation: nlGlow 2s ease infinite; }
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
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0d0703] via-[#1a0f0a] to-[#120a05] border-t border-b border-[#c8973a]/15">
      <style>{ANIM}</style>

      {/* Ambient orbs */}
      <div className="nl-orb absolute rounded-full pointer-events-none w-80 h-80 -top-20 -left-20"
        style={{ background: "radial-gradient(circle, rgba(200,151,58,0.07) 0%, transparent 70%)" }} />
      <div className="nl-orb absolute rounded-full pointer-events-none w-[280px] h-[280px] -bottom-16 -right-16"
        style={{ background: "radial-gradient(circle, rgba(200,151,58,0.05) 0%, transparent 70%)", animationDelay: "2.5s" }} />

      {/* Gold top rule */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#f7c568] to-transparent opacity-50" />

      <div className="nl-wrap relative z-10 flex flex-col items-center text-center px-6 py-16 md:py-20 max-w-2xl mx-auto">

        {/* Diamond icon */}
        <div className="nl-tag mb-5"><IconDiamond /></div>

        {/* Eyebrow */}
        <div className="nl-tag flex items-center gap-3 mb-5">
          <span className="block w-8 h-px bg-gradient-to-r from-transparent to-[#c8973a]/50" />
          <span className="text-[9px] tracking-[0.42em] text-[#c8973a] font-['Georgia',serif] font-semibold">
            THE INNER CIRCLE
          </span>
          <span className="block w-8 h-px bg-gradient-to-l from-transparent to-[#c8973a]/50" />
        </div>

        {/* Heading */}
        <h2 className="nl-title font-['Georgia',serif] text-[clamp(1.6rem,4vw,2.5rem)] font-normal text-[#f5ede0] tracking-[0.04em] leading-[1.25] mb-3.5">
          Subscribe & receive{" "}
          <span className="bg-gradient-to-br from-[#c8973a] to-[#f7c568] bg-clip-text text-transparent">
            20% off
          </span>{" "}
          your first order
        </h2>

        {/* Subtitle */}
        <p className="nl-sub text-[13px] text-[#6a5040] font-['Georgia',serif] italic leading-[1.8] max-w-[420px] mb-6">
          Early access to new drops, private sales, artisan stories &amp; curated style notes — delivered to your inbox.
        </p>

        {/* Perk pills */}
        <div className="nl-perks flex flex-wrap justify-center gap-2 mb-8">
          {["✦ Exclusive Drops", "◈ Private Sales", "◆ Style Notes", "✦ No Spam"].map((perk, i) => (
            <span
              key={i}
              className="text-[9px] tracking-[0.16em] text-[#7a5a30] font-['Georgia',serif] border border-[#c8973a]/15 px-3 py-[5px] rounded-[2px] bg-[rgba(200,151,58,0.04)]"
            >
              {perk}
            </span>
          ))}
        </div>

        {/* Form or Success */}
        {success ? (
          <div className="nl-success flex flex-col items-center gap-4">
            <IconCheck />
            <p className="text-[14px] text-[#c8973a] font-['Georgia',serif] italic">
              You're on the list — welcome to the inner circle.
            </p>
          </div>
        ) : (
          <div className="nl-form w-full max-w-md">
            <form onSubmit={onSubmitHandler}>
              <div
                className={`flex rounded-lg overflow-hidden transition-[border-color,box-shadow] duration-[250ms] border ${focused ? "border-[#c8973a] nl-glow" : "border-[#c8973a]/[0.22]"}`}
              >
                {/* Mail icon */}
                <div className="flex items-center px-3.5 text-[#5a4030] flex-shrink-0">
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
                  className="
                    flex-1 min-w-0 py-3.5 px-[18px]
                    bg-white/[0.03] border-none outline-none
                    text-[#f5ede0] text-[13px] font-['Georgia',serif] italic tracking-[0.04em]
                    placeholder:text-[#4a3020]
                    disabled:opacity-60
                  "
                />

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="
                    flex-shrink-0 flex items-center gap-2 px-7 py-3.5
                    bg-gradient-to-br from-[#c8973a] to-[#f7c568]
                    text-[#1a0f0a] text-[10px] tracking-[0.26em] font-['Georgia',serif] font-bold
                    border-none cursor-pointer whitespace-nowrap rounded-r-lg
                    transition-[opacity,transform] duration-200
                    hover:enabled:opacity-[0.88] hover:enabled:translate-x-0.5
                    disabled:opacity-60 disabled:cursor-not-allowed
                  "
                >
                  {loading ? <IconSpinner /> : <><IconArrow /><span>JOIN</span></>}
                </button>
              </div>
            </form>

            {errorMsg && (
              <p className="mt-2.5 text-[11px] text-red-400 font-['Georgia',serif] italic tracking-[0.04em]">
                ⚠ {errorMsg}
              </p>
            )}

            <p className="mt-3 text-[9px] text-[#8a6a40] tracking-[0.16em] font-['Georgia',serif]">
              UNSUBSCRIBE ANYTIME · NO SPAM · PRIVACY PROTECTED
            </p>
          </div>
        )}
      </div>

      {/* Gold bottom rule */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#f7c568] to-transparent opacity-50" />
    </section>
  );
};

export default NewsletterBox;