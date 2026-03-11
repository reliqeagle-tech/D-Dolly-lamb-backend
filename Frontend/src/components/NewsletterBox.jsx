// // import React from 'react'

// // const NewsletterBox = () => {

// //     const onSubmitHandler = (event) => {
// //         event.preventDefault();
// //     }

// //   return (
// //     <div className=' text-center'>
// //       <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off</p>
// //       <p className='text-gray-400 mt-3'>
// //       Lorem Ipsum is simply dummy text of the printing and typesetting industry.
// //       </p>
// //       <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
// //         <input className='w-full sm:flex-1 outline-none' type="email" placeholder='Enter your email' required/>
// //         <button type='submit' className='bg-black text-white text-xs px-10 py-4 hover:bg-gray-500 hover:text-white  transition duration-300'>SUBSCRIBE</button>
// //       </form>
// //     </div>
// //   )
// // }

// // export default NewsletterBox


// import React from 'react';

// const NewsletterBox = () => {
//   const backendUrl = import.meta.env.VITE_BACKEND_URL
//   const onSubmitHandler = async (event) => {
//     event.preventDefault();
//     const email = event.target.email.value;

//     try {
//       const res = await fetch(backendUrl +'/api/user/send-mail', {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email }),
//       });

//       const data = await res.json();

//       if (data.success) {
//         alert("Subscription successful! Check your email.");
//       } else {
//         alert("Error: " + data.message);
//       }
//     } catch (error) {
//       alert("Error subscribing: " + error.message);
//     }
//   };

//   return (
//     <div className='text-center'>
//       <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off</p>
//       <p className='text-gray-400 mt-3'>
//         Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//       </p>
//       <form
//         onSubmit={onSubmitHandler}
//         className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'
//       >
//         <input
//           className='w-full sm:flex-1 outline-none'
//           type='email'
//           name='email'
//           placeholder='Enter your email'
//           required
//         />
//         <button
//           type='submit'
//           className='bg-black text-white text-xs px-10 py-4 hover:bg-gray-500 hover:text-white transition duration-300'
//         >
//           SUBSCRIBE
//         </button>
//       </form>
//     </div>
//   );
// };

// export default NewsletterBox;

// import React, { useState } from "react";

// const NewsletterBox = () => {
//   const isDevelopment = import.meta.env.MODE === 'development'
//   const backendUrl = isDevelopment ? import.meta.env.VITE_BACKEND_URL_D : import.meta.env.VITE_BACKEND_URL
//   const [loading, setLoading] = useState(false);

//   const onSubmitHandler = async (event) => {
//     event.preventDefault();
//     const email = event.target.email.value;

//     console.log(backendUrl)
//     setLoading(true);
//     try {
//       const res = await fetch(`${backendUrl}/api/user/send-mail`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email }),
//       });

//       const data = await res.json();

//       if (data.success) {
//         alert("🎉 Subscription successful! Check your email.");
//         event.target.reset();
//       } else {
//         alert("⚠️ Error: " + data.message);
//       }
//     } catch (error) {
//       alert("❌ Error subscribing: " + error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <section className="flex flex-col items-center justify-center text-center bg-white py-16 px-6 rounded-2xl">
//       {/* Title */}
//       <h2 className="text-2xl md:text-3xl !font-medium text-gray-800 prata-regular">
//         Subscribe now & get <span className="text-gray-800 !font-medium prata-regular">20% off</span>
//       </h2>

//       {/* Subtitle */}
//       <p className="mt-3 text-gray-500 max-w-xl">
//         Stay updated with our latest arrivals, exclusive offers, and style
//         inspiration—delivered straight to your inbox.
//       </p>

//       {/* Form */}
//       <form
//         onSubmit={onSubmitHandler}
//         className="mt-6 w-full sm:w-1/2 flex items-center bg-white border border-gray-300 rounded-md overflow-hidden shadow-sm"
//       >
//         <input
//           type="email"
//           name="email"
//           placeholder="Enter your email"
//           required
//           disabled={loading}
//           className="flex-1 w-[60%] px-4 py-3 text-gray-800 placeholder-gray-500 outline-none bg-white"
//         />
//         <button
//           type="submit"
//           disabled={loading}
//           className="px-6 w-[40%] py-3 bg-black text-white text-sm font-medium hover:bg-[#674c47] transition   rounded-md"
//         >
//           {loading ? "Sending..." : "SUBSCRIBE"}
//         </button>
//       </form>
//     </section>
//   );
// };

// export default NewsletterBox;



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
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" style={{ animation: "nlSpin 0.8s linear infinite" }}>
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

const NewsletterBox = () => {
  const isDevelopment = import.meta.env.MODE === 'development';
  const backendUrl = isDevelopment
    ? import.meta.env.VITE_BACKEND_URL_D
    : import.meta.env.VITE_BACKEND_URL;

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [focused, setFocused] = useState(false);
  const [email, setEmail] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`${backendUrl}/api/user/send-mail`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (data.success) {
        setSuccess(true);
        setEmail("");
      } else {
        alert("⚠️ " + data.message);
      }
    } catch (error) {
      alert("❌ " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section style={{
      background: "linear-gradient(160deg, #0d0703 0%, #1a0f0a 50%, #120a05 100%)",
      borderTop: "1px solid rgba(200,151,58,0.15)",
      borderBottom: "1px solid rgba(200,151,58,0.15)",
      position: "relative",
      overflow: "hidden",
    }}>
      <style>{`
        @keyframes nlFadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes nlSpin {
          to { transform: rotate(360deg); }
        }
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
        .nl-wrap  { animation: nlFadeUp 0.6s ease both; }
        .nl-tag   { animation: nlFadeUp 0.6s ease 0.1s both; }
        .nl-title { animation: nlFadeUp 0.6s ease 0.2s both; }
        .nl-sub   { animation: nlFadeUp 0.6s ease 0.3s both; }
        .nl-perks { animation: nlFadeUp 0.6s ease 0.4s both; }
        .nl-form  { animation: nlFadeUp 0.6s ease 0.5s both; }
        .nl-success { animation: nlCheckIn 0.5s cubic-bezier(0.16,1,0.3,1) both; }

        .nl-input {
          flex: 1;
          padding: 14px 18px;
          background: rgba(255,255,255,0.03);
          border: none;
          outline: none;
          color: #f5ede0;
          font-size: 13px;
          font-family: Georgia, serif;
          font-style: italic;
          letter-spacing: 0.04em;
          min-width: 0;
        }
        .nl-input::placeholder { color: #4a3020; }

        .nl-submit {
          padding: 14px 28px;
          background: linear-gradient(135deg, #c8973a, #f7c568);
          border: none;
          color: #1a0f0a;
          font-size: 10px;
          letter-spacing: 0.26em;
          font-family: Georgia, serif;
          font-weight: 700;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: opacity 0.2s, transform 0.2s;
          white-space: nowrap;
          flex-shrink: 0;
          border-radius: 0 7px 7px 0;
        }
        .nl-submit:hover:not(:disabled) { opacity: 0.88; transform: translateX(2px); }
        .nl-submit:disabled { opacity: 0.6; cursor: not-allowed; }

        .nl-orb {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          animation: nlPulse 5s ease-in-out infinite;
        }
      `}</style>

      {/* Ambient orbs */}
      <div className="nl-orb" style={{ width: 320, height: 320, top: -80, left: -80, background: "radial-gradient(circle, rgba(200,151,58,0.07) 0%, transparent 70%)" }} />
      <div className="nl-orb" style={{ width: 280, height: 280, bottom: -60, right: -60, background: "radial-gradient(circle, rgba(200,151,58,0.05) 0%, transparent 70%)", animationDelay: "2.5s" }} />

      {/* Gold top rule */}
      <div style={{ height: "1px", background: "linear-gradient(to right, transparent, #c8973a 30%, #f7c568 50%, #c8973a 70%, transparent)", opacity: 0.5 }} />

      <div className="nl-wrap relative z-10 flex flex-col items-center text-center px-6 py-16 md:py-20 max-w-2xl mx-auto">

        {/* Diamond icon */}
        <div className="nl-tag mb-5">
          <IconDiamond />
        </div>

        {/* Eyebrow */}
        <div className="nl-tag flex items-center gap-3 mb-5">
          <span className="block w-8 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(200,151,58,0.5))" }} />
          <span style={{ fontSize: "9px", letterSpacing: "0.42em", color: "#c8973a", fontFamily: "Georgia, serif", fontWeight: 600 }}>
            THE INNER CIRCLE
          </span>
          <span className="block w-8 h-px" style={{ background: "linear-gradient(to left, transparent, rgba(200,151,58,0.5))" }} />
        </div>

        {/* Heading */}
        <h2 className="nl-title" style={{
          fontFamily: "Georgia, serif",
          fontSize: "clamp(1.6rem, 4vw, 2.5rem)",
          fontWeight: 400,
          color: "#f5ede0",
          letterSpacing: "0.04em",
          lineHeight: 1.25,
          marginBottom: "14px",
        }}>
          Subscribe & receive{" "}
          <span style={{
            background: "linear-gradient(135deg, #c8973a, #f7c568)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
            20% off
          </span>{" "}
          your first order
        </h2>

        {/* Subtitle */}
        <p className="nl-sub" style={{
          fontSize: "13px", color: "#6a5040",
          fontFamily: "Georgia, serif", fontStyle: "italic",
          lineHeight: 1.8, maxWidth: "420px", marginBottom: "24px",
        }}>
          Early access to new drops, private sales, artisan stories &amp; curated style notes — delivered to your inbox.
        </p>

        {/* Perk pills */}
        <div className="nl-perks flex flex-wrap justify-center gap-2 mb-8">
          {["✦ Exclusive Drops", "◈ Private Sales", "◆ Style Notes", "✦ No Spam"].map((perk, i) => (
            <span key={i} style={{
              fontSize: "9px", letterSpacing: "0.16em",
              color: "#7a5a30", fontFamily: "Georgia, serif",
              border: "1px solid rgba(200,151,58,0.15)",
              padding: "5px 12px", borderRadius: "2px",
              background: "rgba(200,151,58,0.04)",
            }}>
              {perk}
            </span>
          ))}
        </div>

        {/* Form or Success */}
        {success ? (
          <div className="nl-success flex flex-col items-center gap-4">
            <IconCheck />
            <p style={{ fontSize: "14px", color: "#c8973a", fontFamily: "Georgia, serif", fontStyle: "italic" }}>
              You're on the list — welcome to the inner circle.
            </p>
            <p style={{ fontSize: "10px", color: "#5a4030", letterSpacing: "0.18em", fontFamily: "Georgia, serif" }}>
              CHECK YOUR INBOX FOR YOUR 20% OFF CODE
            </p>
          </div>
        ) : (
          <div className="nl-form w-full max-w-md">
            <form onSubmit={onSubmitHandler}>
              {/* Input wrapper */}
              <div style={{
                display: "flex",
                border: `1px solid ${focused ? "#c8973a" : "rgba(200,151,58,0.22)"}`,
                borderRadius: "8px",
                overflow: "hidden",
                transition: "border-color 0.25s, box-shadow 0.25s",
                boxShadow: focused ? "0 0 0 3px rgba(200,151,58,0.08)" : "none",
                animation: focused ? "nlGlow 2s ease infinite" : "none",
              }}>
                <div style={{ display: "flex", alignItems: "center", padding: "0 14px", color: "#5a4030", flexShrink: 0 }}>
                  <IconMail />
                </div>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Your email address..."
                  required
                  disabled={loading}
                  className="nl-input"
                  onFocus={() => setFocused(true)}
                  onBlur={() => setFocused(false)}
                />
                <button type="submit" disabled={loading} className="nl-submit">
                  {loading ? <IconSpinner /> : <><IconArrow /><span>JOIN</span></>}
                </button>
              </div>
            </form>

            <p style={{ marginTop: "12px", fontSize: "9px", color: "#8a6a40", letterSpacing: "0.16em", fontFamily: "Georgia, serif" }}>
              UNSUBSCRIBE ANYTIME · NO SPAM · PRIVACY PROTECTED
            </p>
          </div>
        )}

      </div>

      {/* Gold bottom rule */}
      <div style={{ height: "1px", background: "linear-gradient(to right, transparent, #c8973a 30%, #f7c568 50%, #c8973a 70%, transparent)", opacity: 0.5 }} />
    </section>
  );
};

export default NewsletterBox;