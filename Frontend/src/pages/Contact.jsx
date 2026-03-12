// import React from 'react'
// import Title from '../components/Title'
// import { assets } from '../assets/assets'
// import NewsletterBox from '../components/NewsletterBox'

// const Contact = () => {
//   return (
//     <div className='bg-[#faf0e6] pb-10'>

//       <div className='text-center text-2xl pt-10 border-t'>
//           <Title text1={'CONTACT'} text2={'US'} />
//       </div>

//       <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
//         <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
//         <div className='flex flex-col justify-center items-start gap-6'>
//           <p className='font-semibold text-xl text-gray-600'>Our Store</p>
//           <p className=' text-gray-500'>54709 Willms Station <br /> Suite 350, Washington, USA</p>
//           <p className=' text-gray-500'>Tel: (415) 555-0132 <br /> Email: admin@ddollylamb.com</p>
//           <p className='font-semibold text-xl text-gray-600'>Careers at D Dolly Lamb</p>
//           <p className=' text-gray-500'>Learn more about our teams and job openings.</p>
//           <button className='border rounded-sm border-black px-8 py-4 text-sm hover:bg-indigo-500 hover:text-white transition-all duration-500'>Explore Jobs</button>
//         </div>
//       </div>

// 	<div className='w-[95%] m-auto'>
//         <NewsletterBox/>
//       </div>

//     </div>
//   )
// }

// export default Contact




import React, { useState } from 'react'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

/* ── Premium SVG Icons ─────────────────────────── */
const IconPin = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
      stroke="#c8973a" strokeWidth="1.4" fill="rgba(200,151,58,0.1)" />
    <circle cx="12" cy="9" r="2.5" stroke="#c8973a" strokeWidth="1.4" />
  </svg>
)
const IconPhone = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.14 12 19.79 19.79 0 0 1 1.07 3.4 2 2 0 0 1 3.04 1.25h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.18a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92z"
      stroke="#c8973a" strokeWidth="1.4" fill="rgba(200,151,58,0.1)" strokeLinejoin="round" />
  </svg>
)
const IconMail = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <rect x="2" y="4" width="20" height="16" rx="2" stroke="#c8973a" strokeWidth="1.4" fill="rgba(200,151,58,0.1)" />
    <path d="M2 7l10 7 10-7" stroke="#c8973a" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
)
const IconClock = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" stroke="#c8973a" strokeWidth="1.4" fill="rgba(200,151,58,0.1)" />
    <path d="M12 6v6l4 2" stroke="#c8973a" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)
const IconBriefcase = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <rect x="2" y="7" width="20" height="14" rx="2" stroke="#c8973a" strokeWidth="1.4" fill="rgba(200,151,58,0.1)" />
    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" stroke="#c8973a" strokeWidth="1.4" strokeLinejoin="round" />
    <path d="M12 12v2M8 12v1M16 12v1" stroke="#c8973a" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
)
const IconChevron = ({ open }) => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
    style={{ transition: "transform 0.3s", transform: open ? "rotate(180deg)" : "rotate(0)" }}>
    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)
const IconSend = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
    <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z"
      stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)
const IconSpinner = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ animation: "ctSpin 0.8s linear infinite" }}>
    <circle cx="12" cy="12" r="9" stroke="rgba(26,15,10,0.3)" strokeWidth="2" />
    <path d="M12 3a9 9 0 0 1 9 9" stroke="#1a0f0a" strokeWidth="2" strokeLinecap="round" />
  </svg>
)
const IconCheck = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" stroke="#c8973a" strokeWidth="1.4" />
    <path d="M7 12l4 4 6-7" stroke="#c8973a" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)
const IconDiamond = () => (
  <svg width="36" height="36" viewBox="0 0 42 42" fill="none">
    <rect x="6" y="6" width="30" height="30" rx="1" transform="rotate(45 21 21)"
      stroke="#c8924a" strokeWidth="1.4" fill="none" />
    <rect x="11" y="11" width="20" height="20" rx="0.5" transform="rotate(45 21 21)"
      stroke="#c8924a" strokeWidth="0.7" fill="none" opacity="0.4" />
    <circle cx="21" cy="21" r="2" fill="#c8973a" opacity="0.7" />
  </svg>
)

/* ── Contact Info Card ─────────────────────────── */
const InfoCard = ({ icon, label, lines, delay }) => (
  <div className="ct-card" style={{
    animationDelay: delay,
    padding: "22px 20px", background: "linear-gradient(145deg,#1e110a,#160c06)",
    border: "1px solid rgba(200,151,58,0.12)", borderRadius: "4px",
    transition: "border-color 0.3s, transform 0.3s",
  }}
    onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(200,151,58,0.4)"; e.currentTarget.style.transform = "translateY(-3px)" }}
    onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(200,151,58,0.12)"; e.currentTarget.style.transform = "translateY(0)" }}
  >
    <div className="flex items-center gap-3 mb-3">
      <div style={{ width: 36, height: 36, border: "1px solid rgba(200,151,58,0.2)", borderRadius: "2px", display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(200,151,58,0.04)", flexShrink: 0 }}>
        {icon}
      </div>
      <span style={{ fontSize: "9px", letterSpacing: "0.28em", color: "#c8973a", fontFamily: "Georgia,serif", fontWeight: 600 }}>{label}</span>
    </div>
    {lines.map((l, i) => (
      <p key={i} style={{ fontSize: "12px", color: "#7a6050", fontFamily: "Georgia,serif", fontStyle: "italic", lineHeight: 1.75 }}>{l}</p>
    ))}
  </div>
)

/* ── FAQ Accordion ─────────────────────────────── */
const FAQ = ({ q, a }) => {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ borderBottom: "1px solid rgba(200,151,58,0.1)" }}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left bg-transparent border-none cursor-pointer"
        style={{ color: open ? "#f7c568" : "#a08060" }}
      >
        <span style={{ fontSize: "13px", fontFamily: "Georgia,serif", fontStyle: "italic" }}>{q}</span>
        <span style={{ flexShrink: 0, marginLeft: 12, color: "#c8973a" }}><IconChevron open={open} /></span>
      </button>
      <div style={{ maxHeight: open ? "200px" : 0, overflow: "hidden", transition: "max-height 0.35s ease" }}>
        <p style={{ fontSize: "12px", color: "#6a5040", fontFamily: "Georgia,serif", fontStyle: "italic", lineHeight: 1.85, paddingBottom: "16px" }}>{a}</p>
      </div>
    </div>
  )
}

/* ══════════════════════════════════════════════
   CONTACT PAGE
══════════════════════════════════════════════ */
const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" })
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [focused, setFocused] = useState("")

  const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    await new Promise(r => setTimeout(r, 1200))
    setSent(true)
    setSending(false)
  }

  const fieldStyle = (name) => ({
    width: "100%", padding: "13px 16px",
    background: "rgba(255,255,255,0.025)",
    border: `1px solid ${focused === name ? "#c8973a" : "rgba(200,151,58,0.18)"}`,
    borderRadius: "3px", color: "#f5ede0",
    fontSize: "13px", fontFamily: "Georgia,serif", fontStyle: "italic",
    outline: "none", transition: "border-color 0.25s, box-shadow 0.25s",
    boxShadow: focused === name ? "0 0 0 3px rgba(200,151,58,0.07)" : "none",
    letterSpacing: "0.03em",
  })

  const faqs = [
    { q: "How long does a bespoke order take?", a: "Standard bespoke orders take 3–4 weeks from confirmed measurements to dispatch. Rush orders (2 weeks) are available for a surcharge — please contact us to arrange." },
    { q: "Do you ship internationally?", a: "Yes — we ship to 30+ countries worldwide. All international orders are fully insured and tracked. Duties and taxes may apply depending on your country." },
    { q: "What is your returns policy?", a: "Ready-to-wear items may be returned within 7 days of receipt in original, unworn condition. Bespoke and custom orders are non-refundable by nature but we stand behind every garment with our quality guarantee." },
    { q: "Can I visit the atelier in person?", a: "Our Lahore atelier is open by appointment. If you are visiting from abroad, we recommend contacting us in advance to arrange a private consultation with our master cutter." },
    { q: "How do I care for my lambskin jacket?", a: "Store in the included dust bag away from direct sunlight. Spot-clean with a damp cloth. For full conditioning, apply a quality leather wax annually. We offer a complimentary care kit with every purchase." },
  ]

  return (
    <div style={{ background: "#1a0f0a", minHeight: "100vh", fontFamily: "Georgia,serif" }}>
      <style>{`
        @keyframes ctFadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes ctSpin { to { transform: rotate(360deg); } }
        @keyframes ctPulse { 0%,100%{opacity:0.3;} 50%{opacity:0.6;} }
        @keyframes ctCheckIn {
          from { opacity:0; transform: scale(0.85) translateY(10px); }
          to   { opacity:1; transform: scale(1) translateY(0); }
        }
        .ct-card { animation: ctFadeUp 0.5s ease both; }
        .ct-orb { position:absolute; border-radius:50%; pointer-events:none; animation:ctPulse 6s ease-in-out infinite; }
        .ct-input-placeholder::placeholder { color: #4a3020; }
        select option { background: #1a0f0a; color: #f5ede0; }
      `}</style>

      {/* ── HEADER ── */}
      <div style={{ position: "relative", overflow: "hidden", borderBottom: "1px solid rgba(200,151,58,0.12)" }}>
        <div className="ct-orb" style={{ width: 400, height: 400, top: -100, right: -80, background: "radial-gradient(circle,rgba(200,151,58,0.07) 0%,transparent 70%)" }} />
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(to right,transparent,#c8973a 30%,#f7c568 50%,#c8973a 70%,transparent)", opacity: 0.6 }} />

        <div className="text-center px-6 py-16 relative z-10">
          <div className="flex justify-center mb-5"><IconDiamond /></div>
          <div className="flex items-center justify-center gap-3 mb-4">
            <span style={{ display: "block", width: 32, height: "1px", background: "linear-gradient(to right,transparent,#c8973a)" }} />
            <span style={{ fontSize: "9px", letterSpacing: "0.42em", color: "#c8973a" }}>GET IN TOUCH</span>
            <span style={{ display: "block", width: 32, height: "1px", background: "linear-gradient(to left,transparent,#c8973a)" }} />
          </div>
          <h1 style={{ fontSize: "clamp(1.8rem,5vw,3.2rem)", fontWeight: 400, color: "#f5ede0", letterSpacing: "0.06em", margin: "0 0 12px" }}>
            Contact <span style={{ background: "linear-gradient(135deg,#c8973a,#f7c568)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Us</span>
          </h1>
          <p style={{ fontSize: "14px", color: "#6a5040", fontStyle: "italic", maxWidth: "420px", margin: "0 auto", lineHeight: 1.8 }}>
            We're here to help — whether it's a bespoke enquiry, an order question, or simply a conversation about leather.
          </p>
        </div>
      </div>

      {/* ── INFO CARDS ── */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <InfoCard icon={<IconPin />} label="OUR ATELIER" lines={["Delhi, India", "By appointment only"]} delay="0.05s" />
          <InfoCard icon={<IconPhone />} label="TELEPHONE" lines={["(415) 555-0132", "Mon–Sat, 10am–7pm"]} delay="0.12s" />
          <InfoCard icon={<IconMail />} label="EMAIL" lines={["admin@ddollylamb.com", "Reply within 24 hrs"]} delay="0.19s" />
          <InfoCard icon={<IconClock />} label="HOURS" lines={["Mon–Fri: 10am–7pm", "Sat: 11am–5pm"]} delay="0.26s" />
        </div>
      </div>

      {/* ── MAIN CONTENT: FORM + IMAGE ── */}
      <div className="max-w-5xl mx-auto px-6 pb-16">
        <div className="flex flex-col lg:flex-row gap-10">

          {/* Contact Form */}
          <div className="flex-1" style={{ animation: "ctFadeUp 0.5s ease 0.1s both" }}>
            <div style={{ padding: "36px 32px", background: "linear-gradient(145deg,#1e110a,#160c06)", border: "1px solid rgba(200,151,58,0.15)", borderRadius: "4px" }}>
              <p style={{ fontSize: "9px", letterSpacing: "0.34em", color: "#c8973a", marginBottom: "6px" }}>SEND A MESSAGE</p>
              <h2 style={{ fontSize: "20px", fontWeight: 400, color: "#f5ede0", marginBottom: "24px" }}>How can we help you?</h2>

              {sent ? (
                <div style={{ animation: "ctCheckIn 0.5s ease both", display: "flex", flexDirection: "column", alignItems: "center", gap: "14px", padding: "40px 0", textAlign: "center" }}>
                  <IconCheck />
                  <p style={{ fontSize: "15px", color: "#c8973a", fontStyle: "italic" }}>Message received — thank you.</p>
                  <p style={{ fontSize: "11px", color: "#5a4030", letterSpacing: "0.18em" }}>WE'LL REPLY WITHIN 24 HOURS</p>
                  <button onClick={() => { setSent(false); setForm({ name: "", email: "", subject: "", message: "" }) }}
                    style={{ marginTop: "12px", padding: "10px 28px", border: "1px solid rgba(200,151,58,0.3)", background: "none", color: "#c8973a", fontSize: "10px", letterSpacing: "0.2em", fontFamily: "Georgia,serif", cursor: "pointer", borderRadius: "2px", transition: "all 0.2s" }}
                    onMouseEnter={e => e.target.style.background = "rgba(200,151,58,0.08)"}
                    onMouseLeave={e => e.target.style.background = "none"}>
                    SEND ANOTHER
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label style={{ fontSize: "9px", letterSpacing: "0.24em", color: "#7a6050", display: "block", marginBottom: "6px" }}>FULL NAME</label>
                      <input name="name" value={form.name} onChange={handleChange} required placeholder="Your name"
                        style={fieldStyle("name")} className="ct-input-placeholder"
                        onFocus={() => setFocused("name")} onBlur={() => setFocused("")} />
                    </div>
                    <div>
                      <label style={{ fontSize: "9px", letterSpacing: "0.24em", color: "#7a6050", display: "block", marginBottom: "6px" }}>EMAIL ADDRESS</label>
                      <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="your@email.com"
                        style={fieldStyle("email")} className="ct-input-placeholder"
                        onFocus={() => setFocused("email")} onBlur={() => setFocused("")} />
                    </div>
                  </div>

                  <div>
                    <label style={{ fontSize: "9px", letterSpacing: "0.24em", color: "#7a6050", display: "block", marginBottom: "6px" }}>SUBJECT</label>
                    <select name="subject" value={form.subject} onChange={handleChange} required
                      style={{ ...fieldStyle("subject"), cursor: "pointer" }}
                      onFocus={() => setFocused("subject")} onBlur={() => setFocused("")}>
                      <option value="" disabled>Select a topic...</option>
                      <option value="bespoke">Bespoke / Custom Order</option>
                      <option value="order">Existing Order Enquiry</option>
                      <option value="sizing">Sizing & Measurements</option>
                      <option value="wholesale">Wholesale / Trade</option>
                      <option value="careers">Careers</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ fontSize: "9px", letterSpacing: "0.24em", color: "#7a6050", display: "block", marginBottom: "6px" }}>MESSAGE</label>
                    <textarea name="message" value={form.message} onChange={handleChange} required rows={5}
                      placeholder="Tell us about your enquiry..."
                      style={{ ...fieldStyle("message"), resize: "vertical", minHeight: "120px" }} className="ct-input-placeholder"
                      onFocus={() => setFocused("message")} onBlur={() => setFocused("")} />
                  </div>

                  <button type="submit" disabled={sending}
                    style={{
                      padding: "14px 32px", alignSelf: "flex-start",
                      background: "linear-gradient(135deg,#c8973a,#f7c568)",
                      border: "none", borderRadius: "3px",
                      color: "#1a0f0a", fontSize: "10px", letterSpacing: "0.26em",
                      fontFamily: "Georgia,serif", fontWeight: 700, cursor: sending ? "not-allowed" : "pointer",
                      display: "flex", alignItems: "center", gap: "10px",
                      opacity: sending ? 0.7 : 1, transition: "opacity 0.2s, transform 0.2s",
                    }}
                    onMouseEnter={e => { if (!sending) e.currentTarget.style.transform = "translateX(3px)" }}
                    onMouseLeave={e => e.currentTarget.style.transform = "translateX(0)"}
                  >
                    {sending ? <><IconSpinner /> SENDING...</> : <><IconSend /> SEND MESSAGE</>}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right panel: Image + Careers */}
          <div className="flex flex-col gap-6" style={{ width: "100%", maxWidth: 340, flexShrink: 0, animation: "ctFadeUp 0.5s ease 0.2s both" }}>
            {/* Image */}
            <div style={{ position: "relative" }}>
              <div style={{ position: "absolute", inset: -8, border: "1px solid rgba(200,151,58,0.15)", borderRadius: "5px" }} />
              <img src={assets.contact_img} alt="D Dolly Lamb Atelier"
                style={{ width: "100%", borderRadius: "3px", display: "block", position: "relative", zIndex: 1 }} />
            </div>

            {/* Careers card */}
            <div style={{ padding: "24px", background: "linear-gradient(145deg,#1e110a,#160c06)", border: "1px solid rgba(200,151,58,0.15)", borderRadius: "4px" }}>
              <div className="flex items-center gap-3 mb-3">
                <div style={{ width: 36, height: 36, border: "1px solid rgba(200,151,58,0.2)", borderRadius: "2px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <IconBriefcase />
                </div>
                <p style={{ fontSize: "9px", letterSpacing: "0.28em", color: "#c8973a" }}>CAREERS</p>
              </div>
              <h3 style={{ fontSize: "15px", color: "#f5ede0", fontWeight: 400, marginBottom: "10px" }}>Join Our Atelier</h3>
              <p style={{ fontSize: "12px", color: "#6a5040", fontStyle: "italic", lineHeight: 1.8, marginBottom: "16px" }}>
                We're always looking for passionate craftspeople and creative minds to join the D Dolly Lamb family.
              </p>
              <a href="mailto:careers@ddollylamb.com"
                style={{
                  display: "inline-flex", alignItems: "center", gap: "8px",
                  padding: "10px 20px",
                  border: "1px solid rgba(200,151,58,0.3)",
                  color: "#c8973a", fontSize: "10px", letterSpacing: "0.2em",
                  fontFamily: "Georgia,serif", textDecoration: "none",
                  borderRadius: "2px", transition: "all 0.2s",
                }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(200,151,58,0.08)"; e.currentTarget.style.borderColor = "#c8973a" }}
                onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "rgba(200,151,58,0.3)" }}
              >
                EXPLORE JOBS →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── FAQ ── */}
      <div style={{ borderTop: "1px solid rgba(200,151,58,0.1)", borderBottom: "1px solid rgba(200,151,58,0.1)" }}>
        <div className="max-w-3xl mx-auto px-6 py-16">
          <div className="text-center mb-10">
            <p style={{ fontSize: "9px", letterSpacing: "0.38em", color: "#c8973a", marginBottom: "8px" }}>COMMON QUESTIONS</p>
            <h2 style={{ fontSize: "clamp(1.3rem,3vw,1.9rem)", fontWeight: 400, color: "#f5ede0" }}>
              Frequently <span style={{ color: "#c8973a" }}>Asked</span>
            </h2>
          </div>
          <div>
            {faqs.map((faq, i) => <FAQ key={i} {...faq} />)}
          </div>
        </div>
      </div>

      {/* ── NEWSLETTER ── */}
      <NewsletterBox />
    </div>
  )
}

export default Contact