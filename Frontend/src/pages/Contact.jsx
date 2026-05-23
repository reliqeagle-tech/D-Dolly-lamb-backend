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




// import React, { useState } from 'react'
// import { assets } from '../assets/assets'
// import NewsletterBox from '../components/NewsletterBox'

// /* ── Premium SVG Icons ─────────────────────────── */
// const IconPin = () => (
//   <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
//     <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
//       stroke="#c8973a" strokeWidth="1.4" fill="rgba(200,151,58,0.1)" />
//     <circle cx="12" cy="9" r="2.5" stroke="#c8973a" strokeWidth="1.4" />
//   </svg>
// )
// const IconPhone = () => (
//   <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
//     <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.14 12 19.79 19.79 0 0 1 1.07 3.4 2 2 0 0 1 3.04 1.25h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.18a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92z"
//       stroke="#c8973a" strokeWidth="1.4" fill="rgba(200,151,58,0.1)" strokeLinejoin="round" />
//   </svg>
// )
// const IconMail = () => (
//   <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
//     <rect x="2" y="4" width="20" height="16" rx="2" stroke="#c8973a" strokeWidth="1.4" fill="rgba(200,151,58,0.1)" />
//     <path d="M2 7l10 7 10-7" stroke="#c8973a" strokeWidth="1.4" strokeLinecap="round" />
//   </svg>
// )
// const IconClock = () => (
//   <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
//     <circle cx="12" cy="12" r="10" stroke="#c8973a" strokeWidth="1.4" fill="rgba(200,151,58,0.1)" />
//     <path d="M12 6v6l4 2" stroke="#c8973a" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
//   </svg>
// )
// const IconBriefcase = () => (
//   <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
//     <rect x="2" y="7" width="20" height="14" rx="2" stroke="#c8973a" strokeWidth="1.4" fill="rgba(200,151,58,0.1)" />
//     <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" stroke="#c8973a" strokeWidth="1.4" strokeLinejoin="round" />
//     <path d="M12 12v2M8 12v1M16 12v1" stroke="#c8973a" strokeWidth="1.4" strokeLinecap="round" />
//   </svg>
// )
// const IconChevron = ({ open }) => (
//   <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
//     style={{ transition: "transform 0.3s", transform: open ? "rotate(180deg)" : "rotate(0)" }}>
//     <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//   </svg>
// )
// const IconSend = () => (
//   <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
//     <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z"
//       stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
//   </svg>
// )
// const IconSpinner = () => (
//   <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ animation: "ctSpin 0.8s linear infinite" }}>
//     <circle cx="12" cy="12" r="9" stroke="rgba(26,15,10,0.3)" strokeWidth="2" />
//     <path d="M12 3a9 9 0 0 1 9 9" stroke="#1a0f0a" strokeWidth="2" strokeLinecap="round" />
//   </svg>
// )
// const IconCheck = () => (
//   <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
//     <circle cx="12" cy="12" r="10" stroke="#c8973a" strokeWidth="1.4" />
//     <path d="M7 12l4 4 6-7" stroke="#c8973a" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
//   </svg>
// )
// const IconDiamond = () => (
//   <svg width="36" height="36" viewBox="0 0 42 42" fill="none">
//     <rect x="6" y="6" width="30" height="30" rx="1" transform="rotate(45 21 21)"
//       stroke="#c8924a" strokeWidth="1.4" fill="none" />
//     <rect x="11" y="11" width="20" height="20" rx="0.5" transform="rotate(45 21 21)"
//       stroke="#c8924a" strokeWidth="0.7" fill="none" opacity="0.4" />
//     <circle cx="21" cy="21" r="2" fill="#c8973a" opacity="0.7" />
//   </svg>
// )

// /* ── Contact Info Card ─────────────────────────── */
// const InfoCard = ({ icon, label, lines, delay }) => (
//   <div className="ct-card" style={{
//     animationDelay: delay,
//     padding: "22px 20px", background: "linear-gradient(145deg,#1e110a,#160c06)",
//     border: "1px solid rgba(200,151,58,0.12)", borderRadius: "4px",
//     transition: "border-color 0.3s, transform 0.3s",
//   }}
//     onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(200,151,58,0.4)"; e.currentTarget.style.transform = "translateY(-3px)" }}
//     onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(200,151,58,0.12)"; e.currentTarget.style.transform = "translateY(0)" }}
//   >
//     <div className="flex items-center gap-3 mb-3">
//       <div style={{ width: 36, height: 36, border: "1px solid rgba(200,151,58,0.2)", borderRadius: "2px", display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(200,151,58,0.04)", flexShrink: 0 }}>
//         {icon}
//       </div>
//       <span style={{ fontSize: "9px", letterSpacing: "0.28em", color: "#c8973a", fontFamily: "Georgia,serif", fontWeight: 600 }}>{label}</span>
//     </div>
//     {lines.map((l, i) => (
//       <p key={i} style={{ fontSize: "12px", color: "#7a6050", fontFamily: "Georgia,serif", fontStyle: "italic", lineHeight: 1.75 }}>{l}</p>
//     ))}
//   </div>
// )

// /* ── FAQ Accordion ─────────────────────────────── */
// const FAQ = ({ q, a }) => {
//   const [open, setOpen] = useState(false)
//   return (
//     <div style={{ borderBottom: "1px solid rgba(200,151,58,0.1)" }}>
//       <button
//         onClick={() => setOpen(!open)}
//         className="w-full flex items-center justify-between py-4 text-left bg-transparent border-none cursor-pointer"
//         style={{ color: open ? "#f7c568" : "#a08060" }}
//       >
//         <span style={{ fontSize: "13px", fontFamily: "Georgia,serif", fontStyle: "italic" }}>{q}</span>
//         <span style={{ flexShrink: 0, marginLeft: 12, color: "#c8973a" }}><IconChevron open={open} /></span>
//       </button>
//       <div style={{ maxHeight: open ? "200px" : 0, overflow: "hidden", transition: "max-height 0.35s ease" }}>
//         <p style={{ fontSize: "12px", color: "#6a5040", fontFamily: "Georgia,serif", fontStyle: "italic", lineHeight: 1.85, paddingBottom: "16px" }}>{a}</p>
//       </div>
//     </div>
//   )
// }

// /* ══════════════════════════════════════════════
//    CONTACT PAGE
// ══════════════════════════════════════════════ */
// const Contact = () => {
//   const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" })
//   const [sending, setSending] = useState(false)
//   const [sent, setSent] = useState(false)
//   const [focused, setFocused] = useState("")

//   const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     setSending(true)
//     await new Promise(r => setTimeout(r, 1200))
//     setSent(true)
//     setSending(false)
//   }

//   const fieldStyle = (name) => ({
//     width: "100%", padding: "13px 16px",
//     background: "rgba(255,255,255,0.025)",
//     border: `1px solid ${focused === name ? "#c8973a" : "rgba(200,151,58,0.18)"}`,
//     borderRadius: "3px", color: "#f5ede0",
//     fontSize: "13px", fontFamily: "Georgia,serif", fontStyle: "italic",
//     outline: "none", transition: "border-color 0.25s, box-shadow 0.25s",
//     boxShadow: focused === name ? "0 0 0 3px rgba(200,151,58,0.07)" : "none",
//     letterSpacing: "0.03em",
//   })

//   const faqs = [
//     { q: "How long does a bespoke order take?", a: "Standard bespoke orders take 3–4 weeks from confirmed measurements to dispatch. Rush orders (2 weeks) are available for a surcharge — please contact us to arrange." },
//     { q: "Do you ship internationally?", a: "Yes — we ship to 30+ countries worldwide. All international orders are fully insured and tracked. Duties and taxes may apply depending on your country." },
//     { q: "What is your returns policy?", a: "Ready-to-wear items may be returned within 7 days of receipt in original, unworn condition. Bespoke and custom orders are non-refundable by nature but we stand behind every garment with our quality guarantee." },
//     { q: "Can I visit the atelier in person?", a: "Our Lahore atelier is open by appointment. If you are visiting from abroad, we recommend contacting us in advance to arrange a private consultation with our master cutter." },
//     { q: "How do I care for my lambskin jacket?", a: "Store in the included dust bag away from direct sunlight. Spot-clean with a damp cloth. For full conditioning, apply a quality leather wax annually. We offer a complimentary care kit with every purchase." },
//   ]

//   return (
//     <div style={{ background: "#1a0f0a", minHeight: "100vh", fontFamily: "Georgia,serif" }}>
//       <style>{`
//         @keyframes ctFadeUp {
//           from { opacity: 0; transform: translateY(20px); }
//           to   { opacity: 1; transform: translateY(0); }
//         }
//         @keyframes ctSpin { to { transform: rotate(360deg); } }
//         @keyframes ctPulse { 0%,100%{opacity:0.3;} 50%{opacity:0.6;} }
//         @keyframes ctCheckIn {
//           from { opacity:0; transform: scale(0.85) translateY(10px); }
//           to   { opacity:1; transform: scale(1) translateY(0); }
//         }
//         .ct-card { animation: ctFadeUp 0.5s ease both; }
//         .ct-orb { position:absolute; border-radius:50%; pointer-events:none; animation:ctPulse 6s ease-in-out infinite; }
//         .ct-input-placeholder::placeholder { color: #4a3020; }
//         select option { background: #1a0f0a; color: #f5ede0; }
//       `}</style>

//       {/* ── HEADER ── */}
//       <div style={{ position: "relative", overflow: "hidden", borderBottom: "1px solid rgba(200,151,58,0.12)" }}>
//         <div className="ct-orb" style={{ width: 400, height: 400, top: -100, right: -80, background: "radial-gradient(circle,rgba(200,151,58,0.07) 0%,transparent 70%)" }} />
//         <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(to right,transparent,#c8973a 30%,#f7c568 50%,#c8973a 70%,transparent)", opacity: 0.6 }} />

//         <div className="text-center px-6 py-16 relative z-10">
//           <div className="flex justify-center mb-5"><IconDiamond /></div>
//           <div className="flex items-center justify-center gap-3 mb-4">
//             <span style={{ display: "block", width: 32, height: "1px", background: "linear-gradient(to right,transparent,#c8973a)" }} />
//             <span style={{ fontSize: "9px", letterSpacing: "0.42em", color: "#c8973a" }}>GET IN TOUCH</span>
//             <span style={{ display: "block", width: 32, height: "1px", background: "linear-gradient(to left,transparent,#c8973a)" }} />
//           </div>
//           <h1 style={{ fontSize: "clamp(1.8rem,5vw,3.2rem)", fontWeight: 400, color: "#f5ede0", letterSpacing: "0.06em", margin: "0 0 12px" }}>
//             Contact <span style={{ background: "linear-gradient(135deg,#c8973a,#f7c568)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Us</span>
//           </h1>
//           <p style={{ fontSize: "14px", color: "#6a5040", fontStyle: "italic", maxWidth: "420px", margin: "0 auto", lineHeight: 1.8 }}>
//             We're here to help — whether it's a bespoke enquiry, an order question, or simply a conversation about leather.
//           </p>
//         </div>
//       </div>

//       {/* ── INFO CARDS ── */}
//       <div className="max-w-5xl mx-auto px-6 py-12">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//           <InfoCard icon={<IconPin />} label="OUR ATELIER" lines={["Delhi, India", "By appointment only"]} delay="0.05s" />
//           <InfoCard icon={<IconPhone />} label="TELEPHONE" lines={["(415) 555-0132", "Mon–Sat, 10am–7pm"]} delay="0.12s" />
//           <InfoCard icon={<IconMail />} label="EMAIL" lines={["admin@ddollylamb.com", "Reply within 24 hrs"]} delay="0.19s" />
//           <InfoCard icon={<IconClock />} label="HOURS" lines={["Mon–Fri: 10am–7pm", "Sat: 11am–5pm"]} delay="0.26s" />
//         </div>
//       </div>

//       {/* ── MAIN CONTENT: FORM + IMAGE ── */}
//       <div className="max-w-5xl mx-auto px-6 pb-16">
//         <div className="flex flex-col lg:flex-row gap-10">

//           {/* Contact Form */}
//           <div className="flex-1" style={{ animation: "ctFadeUp 0.5s ease 0.1s both" }}>
//             <div style={{ padding: "36px 32px", background: "linear-gradient(145deg,#1e110a,#160c06)", border: "1px solid rgba(200,151,58,0.15)", borderRadius: "4px" }}>
//               <p style={{ fontSize: "9px", letterSpacing: "0.34em", color: "#c8973a", marginBottom: "6px" }}>SEND A MESSAGE</p>
//               <h2 style={{ fontSize: "20px", fontWeight: 400, color: "#f5ede0", marginBottom: "24px" }}>How can we help you?</h2>

//               {sent ? (
//                 <div style={{ animation: "ctCheckIn 0.5s ease both", display: "flex", flexDirection: "column", alignItems: "center", gap: "14px", padding: "40px 0", textAlign: "center" }}>
//                   <IconCheck />
//                   <p style={{ fontSize: "15px", color: "#c8973a", fontStyle: "italic" }}>Message received — thank you.</p>
//                   <p style={{ fontSize: "11px", color: "#5a4030", letterSpacing: "0.18em" }}>WE'LL REPLY WITHIN 24 HOURS</p>
//                   <button onClick={() => { setSent(false); setForm({ name: "", email: "", subject: "", message: "" }) }}
//                     style={{ marginTop: "12px", padding: "10px 28px", border: "1px solid rgba(200,151,58,0.3)", background: "none", color: "#c8973a", fontSize: "10px", letterSpacing: "0.2em", fontFamily: "Georgia,serif", cursor: "pointer", borderRadius: "2px", transition: "all 0.2s" }}
//                     onMouseEnter={e => e.target.style.background = "rgba(200,151,58,0.08)"}
//                     onMouseLeave={e => e.target.style.background = "none"}>
//                     SEND ANOTHER
//                   </button>
//                 </div>
//               ) : (
//                 <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                     <div>
//                       <label style={{ fontSize: "9px", letterSpacing: "0.24em", color: "#7a6050", display: "block", marginBottom: "6px" }}>FULL NAME</label>
//                       <input name="name" value={form.name} onChange={handleChange} required placeholder="Your name"
//                         style={fieldStyle("name")} className="ct-input-placeholder"
//                         onFocus={() => setFocused("name")} onBlur={() => setFocused("")} />
//                     </div>
//                     <div>
//                       <label style={{ fontSize: "9px", letterSpacing: "0.24em", color: "#7a6050", display: "block", marginBottom: "6px" }}>EMAIL ADDRESS</label>
//                       <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="your@email.com"
//                         style={fieldStyle("email")} className="ct-input-placeholder"
//                         onFocus={() => setFocused("email")} onBlur={() => setFocused("")} />
//                     </div>
//                   </div>

//                   <div>
//                     <label style={{ fontSize: "9px", letterSpacing: "0.24em", color: "#7a6050", display: "block", marginBottom: "6px" }}>SUBJECT</label>
//                     <select name="subject" value={form.subject} onChange={handleChange} required
//                       style={{ ...fieldStyle("subject"), cursor: "pointer" }}
//                       onFocus={() => setFocused("subject")} onBlur={() => setFocused("")}>
//                       <option value="" disabled>Select a topic...</option>
//                       <option value="bespoke">Bespoke / Custom Order</option>
//                       <option value="order">Existing Order Enquiry</option>
//                       <option value="sizing">Sizing & Measurements</option>
//                       <option value="wholesale">Wholesale / Trade</option>
//                       <option value="careers">Careers</option>
//                       <option value="other">Other</option>
//                     </select>
//                   </div>

//                   <div>
//                     <label style={{ fontSize: "9px", letterSpacing: "0.24em", color: "#7a6050", display: "block", marginBottom: "6px" }}>MESSAGE</label>
//                     <textarea name="message" value={form.message} onChange={handleChange} required rows={5}
//                       placeholder="Tell us about your enquiry..."
//                       style={{ ...fieldStyle("message"), resize: "vertical", minHeight: "120px" }} className="ct-input-placeholder"
//                       onFocus={() => setFocused("message")} onBlur={() => setFocused("")} />
//                   </div>

//                   <button type="submit" disabled={sending}
//                     style={{
//                       padding: "14px 32px", alignSelf: "flex-start",
//                       background: "linear-gradient(135deg,#c8973a,#f7c568)",
//                       border: "none", borderRadius: "3px",
//                       color: "#1a0f0a", fontSize: "10px", letterSpacing: "0.26em",
//                       fontFamily: "Georgia,serif", fontWeight: 700, cursor: sending ? "not-allowed" : "pointer",
//                       display: "flex", alignItems: "center", gap: "10px",
//                       opacity: sending ? 0.7 : 1, transition: "opacity 0.2s, transform 0.2s",
//                     }}
//                     onMouseEnter={e => { if (!sending) e.currentTarget.style.transform = "translateX(3px)" }}
//                     onMouseLeave={e => e.currentTarget.style.transform = "translateX(0)"}
//                   >
//                     {sending ? <><IconSpinner /> SENDING...</> : <><IconSend /> SEND MESSAGE</>}
//                   </button>
//                 </form>
//               )}
//             </div>
//           </div>

//           {/* Right panel: Image + Careers */}
//           <div className="flex flex-col gap-6" style={{ width: "100%", maxWidth: 340, flexShrink: 0, animation: "ctFadeUp 0.5s ease 0.2s both" }}>
//             {/* Image */}
//             <div style={{ position: "relative" }}>
//               <div style={{ position: "absolute", inset: -8, border: "1px solid rgba(200,151,58,0.15)", borderRadius: "5px" }} />
//               <img src={assets.contact_img} alt="D Dolly Lamb Atelier"
//                 style={{ width: "100%", borderRadius: "3px", display: "block", position: "relative", zIndex: 1 }} />
//             </div>

//             {/* Careers card */}
//             <div style={{ padding: "24px", background: "linear-gradient(145deg,#1e110a,#160c06)", border: "1px solid rgba(200,151,58,0.15)", borderRadius: "4px" }}>
//               <div className="flex items-center gap-3 mb-3">
//                 <div style={{ width: 36, height: 36, border: "1px solid rgba(200,151,58,0.2)", borderRadius: "2px", display: "flex", alignItems: "center", justifyContent: "center" }}>
//                   <IconBriefcase />
//                 </div>
//                 <p style={{ fontSize: "9px", letterSpacing: "0.28em", color: "#c8973a" }}>CAREERS</p>
//               </div>
//               <h3 style={{ fontSize: "15px", color: "#f5ede0", fontWeight: 400, marginBottom: "10px" }}>Join Our Atelier</h3>
//               <p style={{ fontSize: "12px", color: "#6a5040", fontStyle: "italic", lineHeight: 1.8, marginBottom: "16px" }}>
//                 We're always looking for passionate craftspeople and creative minds to join the D Dolly Lamb family.
//               </p>
//               <a href="mailto:careers@ddollylamb.com"
//                 style={{
//                   display: "inline-flex", alignItems: "center", gap: "8px",
//                   padding: "10px 20px",
//                   border: "1px solid rgba(200,151,58,0.3)",
//                   color: "#c8973a", fontSize: "10px", letterSpacing: "0.2em",
//                   fontFamily: "Georgia,serif", textDecoration: "none",
//                   borderRadius: "2px", transition: "all 0.2s",
//                 }}
//                 onMouseEnter={e => { e.currentTarget.style.background = "rgba(200,151,58,0.08)"; e.currentTarget.style.borderColor = "#c8973a" }}
//                 onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "rgba(200,151,58,0.3)" }}
//               >
//                 EXPLORE JOBS →
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ── FAQ ── */}
//       <div style={{ borderTop: "1px solid rgba(200,151,58,0.1)", borderBottom: "1px solid rgba(200,151,58,0.1)" }}>
//         <div className="max-w-3xl mx-auto px-6 py-16">
//           <div className="text-center mb-10">
//             <p style={{ fontSize: "9px", letterSpacing: "0.38em", color: "#c8973a", marginBottom: "8px" }}>COMMON QUESTIONS</p>
//             <h2 style={{ fontSize: "clamp(1.3rem,3vw,1.9rem)", fontWeight: 400, color: "#f5ede0" }}>
//               Frequently <span style={{ color: "#c8973a" }}>Asked</span>
//             </h2>
//           </div>
//           <div>
//             {faqs.map((faq, i) => <FAQ key={i} {...faq} />)}
//           </div>
//         </div>
//       </div>

//       {/* ── NEWSLETTER ── */}
//       <NewsletterBox />
//     </div>
//   )
// }

// export default Contact





import React, { useState } from 'react'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

/* ── Icons — indigo strokes ── */
const IconPin = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
      stroke="#6366F1" strokeWidth="1.4" fill="rgba(99,102,241,0.1)" />
    <circle cx="12" cy="9" r="2.5" stroke="#6366F1" strokeWidth="1.4" />
  </svg>
)
const IconPhone = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.14 12 19.79 19.79 0 0 1 1.07 3.4 2 2 0 0 1 3.04 1.25h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.18a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92z"
      stroke="#6366F1" strokeWidth="1.4" fill="rgba(99,102,241,0.1)" strokeLinejoin="round" />
  </svg>
)
const IconMail = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <rect x="2" y="4" width="20" height="16" rx="2" stroke="#6366F1" strokeWidth="1.4" fill="rgba(99,102,241,0.1)" />
    <path d="M2 7l10 7 10-7" stroke="#6366F1" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
)
const IconClock = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" stroke="#6366F1" strokeWidth="1.4" fill="rgba(99,102,241,0.1)" />
    <path d="M12 6v6l4 2" stroke="#6366F1" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)
const IconBriefcase = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <rect x="2" y="7" width="20" height="14" rx="2" stroke="#6366F1" strokeWidth="1.4" fill="rgba(99,102,241,0.1)" />
    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" stroke="#6366F1" strokeWidth="1.4" strokeLinejoin="round" />
    <path d="M12 12v2M8 12v1M16 12v1" stroke="#6366F1" strokeWidth="1.4" strokeLinecap="round" />
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
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
    style={{ animation: "ctSpin 0.8s linear infinite" }}>
    <circle cx="12" cy="12" r="9" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
    <path d="M12 3a9 9 0 0 1 9 9" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
  </svg>
)
const IconCheck = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" stroke="#6366F1" strokeWidth="1.4" fill="rgba(99,102,241,0.1)" />
    <path d="M7 12l4 4 6-7" stroke="#6366F1" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)
const IconDiamond = () => (
  <svg width="36" height="36" viewBox="0 0 42 42" fill="none">
    <rect x="6" y="6" width="30" height="30" rx="1" transform="rotate(45 21 21)"
      stroke="#B8923E" strokeWidth="1.4" fill="none" />
    <rect x="11" y="11" width="20" height="20" rx="0.5" transform="rotate(45 21 21)"
      stroke="#D4A853" strokeWidth="0.7" fill="none" opacity="0.4" />
    <circle cx="21" cy="21" r="2" fill="#D4A853" opacity="0.7" />
  </svg>
)

/* ── Contact Info Card ── */
const InfoCard = ({ icon, label, lines, delay }) => (
  <div
    style={{
      animationDelay: delay,
      padding: "22px 20px",
      background: "#FFFFFF",
      border: "1px solid rgba(99,102,241,0.14)",
      borderRadius: 12,
      boxShadow: "0 2px 12px rgba(99,102,241,0.06)",
      transition: "border-color 0.3s, transform 0.3s, box-shadow 0.3s",
    }}
    className="ct-card"
    onMouseEnter={e => {
      e.currentTarget.style.borderColor = "rgba(99,102,241,0.45)";
      e.currentTarget.style.transform = "translateY(-4px)";
      e.currentTarget.style.boxShadow = "0 12px 32px rgba(99,102,241,0.12)";
    }}
    onMouseLeave={e => {
      e.currentTarget.style.borderColor = "rgba(99,102,241,0.14)";
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.boxShadow = "0 2px 12px rgba(99,102,241,0.06)";
    }}
  >
    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
      <div style={{
        width: 40, height: 40, flexShrink: 0,
        border: "1px solid rgba(99,102,241,0.18)",
        borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center",
        background: "rgba(99,102,241,0.06)",
      }}>{icon}</div>
      <span style={{
        fontSize: 9, letterSpacing: "0.28em", color: "#818CF8",
        fontFamily: "'Montserrat',sans-serif", fontWeight: 700, textTransform: "uppercase",
      }}>{label}</span>
    </div>
    {lines.map((l, i) => (
      <p key={i} style={{
        fontSize: 12, color: "#6B7280",
        fontFamily: "'Montserrat',sans-serif",
        fontStyle: "italic", lineHeight: 1.75,
      }}>{l}</p>
    ))}
  </div>
)

/* ── FAQ Accordion ── */
const FAQ = ({ q, a }) => {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ borderBottom: "1px solid rgba(99,102,241,0.1)" }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%", display: "flex", alignItems: "center",
          justifyContent: "space-between", padding: "16px 0",
          textAlign: "left", background: "transparent", border: "none", cursor: "pointer",
          color: open ? "#4338CA" : "#4B5563",
          transition: "color 0.2s",
        }}
      >
        <span style={{
          fontSize: 13, fontFamily: "'Montserrat',sans-serif",
          fontStyle: "italic", fontWeight: open ? 600 : 400,
          transition: "font-weight 0.2s",
        }}>{q}</span>
        <span style={{ flexShrink: 0, marginLeft: 12, color: "#6366F1" }}>
          <IconChevron open={open} />
        </span>
      </button>
      <div style={{
        maxHeight: open ? 200 : 0, overflow: "hidden",
        transition: "max-height 0.35s ease",
      }}>
        <p style={{
          fontSize: 12, color: "#6B7280",
          fontFamily: "'Montserrat',sans-serif",
          fontStyle: "italic", lineHeight: 1.85, paddingBottom: 16,
        }}>{a}</p>
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

  /* Light mode field styles */
  const fieldStyle = (name) => ({
    width: "100%", padding: "13px 16px",
    background: "#FFFFFF",
    border: `1.5px solid ${focused === name ? "#6366F1" : "rgba(99,102,241,0.2)"}`,
    borderRadius: 8, color: "#1E1B4B",
    fontSize: 13, fontFamily: "'Montserrat',sans-serif",
    fontStyle: "italic", outline: "none",
    boxShadow: focused === name ? "0 0 0 3px rgba(99,102,241,0.1)" : "none",
    transition: "border-color 0.25s, box-shadow 0.25s",
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
    <div style={{
      background: "linear-gradient(180deg, #FFFFFF 0%, #F4F5FF 35%, #EEF0FF 100%)",
      minHeight: "100vh",
      fontFamily: "'Montserrat',sans-serif",
      position: "relative",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');

        @keyframes ctFadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes ctSpin { to { transform: rotate(360deg); } }
        @keyframes ctPulse { 0%,100%{opacity:0.5;} 50%{opacity:0.8;} }
        @keyframes ctCheckIn {
          from { opacity:0; transform: scale(0.85) translateY(10px); }
          to   { opacity:1; transform: scale(1) translateY(0); }
        }
        @keyframes shimmerIndigo {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        .ct-card { animation: ctFadeUp 0.5s ease both; }
        .ct-orb  { position:absolute; border-radius:50%; pointer-events:none; animation:ctPulse 6s ease-in-out infinite; }

        .ct-grid-bg::before {
          content: '';
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(99,102,241,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99,102,241,0.05) 1px, transparent 1px);
          background-size: 40px 40px;
          pointer-events: none;
        }
        .ct-shimmer {
          height: 1.5px;
          background: linear-gradient(90deg,
            transparent 0%, rgba(99,102,241,0.3) 20%,
            #6366F1 45%, #818CF8 50%, #6366F1 55%,
            rgba(99,102,241,0.3) 80%, transparent 100%);
          background-size: 200% auto;
          animation: shimmerIndigo 4s linear infinite;
        }

        .ct-field-placeholder::placeholder { color: #9CA3AF; }
        select option { background: #FFFFFF; color: #1E1B4B; }

        .ct-submit-btn {
          padding: 14px 32px;
          background: linear-gradient(135deg, #4338CA, #6366F1);
          border: none; border-radius: 8px;
          color: #FFFFFF; font-size: 10px; letter-spacing: 0.24em;
          font-family: 'Montserrat',sans-serif; font-weight: 700;
          cursor: pointer; display: inline-flex; align-items: center; gap: 10px;
          transition: opacity 0.2s, transform 0.2s, box-shadow 0.2s;
          box-shadow: 0 4px 16px rgba(99,102,241,0.3);
        }
        .ct-submit-btn:hover:not(:disabled) {
          opacity: 0.92;
          transform: translateX(3px);
          box-shadow: 0 6px 22px rgba(99,102,241,0.4);
        }
        .ct-submit-btn:disabled { opacity: 0.6; cursor: not-allowed; }
      `}</style>

      {/* ── HEADER ── */}
      <div style={{
        position: "relative", overflow: "hidden",
        borderBottom: "1px solid rgba(99,102,241,0.1)",
      }} className="ct-grid-bg">

        <div className="ct-shimmer" style={{ position: "absolute", top: 0, left: 0, right: 0 }} />

        {/* Blobs */}
        <div className="ct-orb" style={{
          width: 400, height: 400, top: -120, right: -80,
          background: "radial-gradient(circle, rgba(129,140,248,0.1) 0%, transparent 70%)",
        }} />
        <div className="ct-orb" style={{
          width: 280, height: 280, bottom: -60, left: -60,
          background: "radial-gradient(circle, rgba(99,102,241,0.07) 0%, transparent 70%)",
          animationDelay: "3s",
        }} />

        <div style={{
          textAlign: "center", padding: "30px 24px",
          position: "relative", zIndex: 1,
        }}>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 18 }}>
            <IconDiamond />
          </div>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 16 }}>
            <span style={{ display: "block", width: 32, height: 1, background: "linear-gradient(to right, transparent, #6366F1)" }} />
            <span style={{
              fontSize: 9, letterSpacing: "0.4em", color: "#6366F1",
              fontFamily: "'Montserrat',sans-serif", fontWeight: 700, textTransform: "uppercase",
            }}>GET IN TOUCH</span>
            <span style={{ display: "block", width: 32, height: 1, background: "linear-gradient(to left, transparent, #6366F1)" }} />
          </div>

          <h1 style={{
            fontSize: "clamp(1.8rem,5vw,3.2rem)", fontWeight: 700,
            color: "#1E1B4B", letterSpacing: "0.04em", margin: "0 0 12px",
            fontFamily: "'Montserrat',sans-serif",
          }}>
            Contact{" "}
            <span style={{
              background: "linear-gradient(135deg, #4338CA, #6366F1, #818CF8)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>Us</span>
          </h1>

          <p style={{
            fontSize: 14, color: "#6B7280", fontStyle: "italic",
            maxWidth: 420, margin: "0 auto", lineHeight: 1.8,
            fontFamily: "'Montserrat',sans-serif",
          }}>
            We're here to help — whether it's a bespoke enquiry, an order question, or simply a conversation about leather.
          </p>
        </div>
      </div>

      {/* ── INFO CARDS ── */}
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "48px 24px 24px" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px,1fr))",
          gap: 16,
        }}>
          <InfoCard icon={<IconPin />} label="OUR ATELIER" lines={["Delhi, India", "By appointment only"]} delay="0.05s" />
          <InfoCard icon={<IconPhone />} label="TELEPHONE" lines={["(415) 555-0132", "Mon–Sat, 10am–7pm"]} delay="0.12s" />
          <InfoCard icon={<IconMail />} label="EMAIL" lines={["admin@ddollylamb.com", "Reply within 24 hrs"]} delay="0.19s" />
          <InfoCard icon={<IconClock />} label="HOURS" lines={["Mon–Fri: 10am–7pm", "Sat: 11am–5pm"]} delay="0.26s" />
        </div>
      </div>

      {/* ── FORM + IMAGE ── */}
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "24px 24px 64px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 32 }}>

          {/* Contact Form */}
          <div style={{ flex: 1, minWidth: 300, animation: "ctFadeUp 0.5s ease 0.1s both" }}>
            <div style={{
              padding: "36px 32px",
              background: "#FFFFFF",
              border: "1px solid rgba(99,102,241,0.14)",
              borderRadius: 16,
              boxShadow: "0 4px 24px rgba(99,102,241,0.08)",
            }}>
              {/* Top indigo accent bar */}
              <div style={{
                height: 3, marginBottom: 28,
                // borderRadius: "8px 8px 0 0",
                background: "linear-gradient(90deg, #4338CA, #6366F1, #818CF8)",
                margin: "-36px -32px 28px",
                borderRadius: "16px 16px 0 0",
              }} />

              <p style={{
                fontSize: 9, letterSpacing: "0.32em", color: "#818CF8",
                marginBottom: 6, fontWeight: 700, textTransform: "uppercase",
              }}>SEND A MESSAGE</p>
              <h2 style={{
                fontSize: 20, fontWeight: 700, color: "#1E1B4B",
                marginBottom: 24, fontFamily: "'Montserrat',sans-serif",
              }}>How can we help you?</h2>

              {sent ? (
                <div style={{
                  animation: "ctCheckIn 0.5s ease both",
                  display: "flex", flexDirection: "column",
                  alignItems: "center", gap: 14, padding: "40px 0", textAlign: "center",
                }}>
                  <IconCheck />
                  <p style={{
                    fontSize: 15, color: "#4338CA", fontStyle: "italic",
                    fontFamily: "'Montserrat',sans-serif", fontWeight: 500,
                  }}>Message received — thank you.</p>
                  <p style={{
                    fontSize: 10, color: "#9CA3AF", letterSpacing: "0.18em",
                    fontFamily: "'Montserrat',sans-serif", fontWeight: 600,
                  }}>WE'LL REPLY WITHIN 24 HOURS</p>
                  <button
                    onClick={() => { setSent(false); setForm({ name: "", email: "", subject: "", message: "" }) }}
                    style={{
                      marginTop: 12, padding: "10px 28px",
                      border: "1.5px solid rgba(99,102,241,0.3)",
                      background: "none", color: "#6366F1",
                      fontSize: 10, letterSpacing: "0.2em",
                      fontFamily: "'Montserrat',sans-serif", fontWeight: 600,
                      cursor: "pointer", borderRadius: 6,
                      transition: "all 0.2s",
                    }}
                    onMouseEnter={e => { e.target.style.background = "rgba(99,102,241,0.08)"; e.target.style.borderColor = "#6366F1"; }}
                    onMouseLeave={e => { e.target.style.background = "none"; e.target.style.borderColor = "rgba(99,102,241,0.3)"; }}
                  >SEND ANOTHER</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                    <div>
                      <label style={{
                        fontSize: 9, letterSpacing: "0.22em", color: "#818CF8",
                        display: "block", marginBottom: 6,
                        fontWeight: 700, textTransform: "uppercase",
                      }}>FULL NAME</label>
                      <input name="name" value={form.name} onChange={handleChange} required
                        placeholder="Your name"
                        style={fieldStyle("name")} className="ct-field-placeholder"
                        onFocus={() => setFocused("name")} onBlur={() => setFocused("")} />
                    </div>
                    <div>
                      <label style={{
                        fontSize: 9, letterSpacing: "0.22em", color: "#818CF8",
                        display: "block", marginBottom: 6,
                        fontWeight: 700, textTransform: "uppercase",
                      }}>EMAIL ADDRESS</label>
                      <input name="email" type="email" value={form.email} onChange={handleChange} required
                        placeholder="your@email.com"
                        style={fieldStyle("email")} className="ct-field-placeholder"
                        onFocus={() => setFocused("email")} onBlur={() => setFocused("")} />
                    </div>
                  </div>

                  <div>
                    <label style={{
                      fontSize: 9, letterSpacing: "0.22em", color: "#818CF8",
                      display: "block", marginBottom: 6,
                      fontWeight: 700, textTransform: "uppercase",
                    }}>SUBJECT</label>
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
                    <label style={{
                      fontSize: 9, letterSpacing: "0.22em", color: "#818CF8",
                      display: "block", marginBottom: 6,
                      fontWeight: 700, textTransform: "uppercase",
                    }}>MESSAGE</label>
                    <textarea name="message" value={form.message} onChange={handleChange} required rows={5}
                      placeholder="Tell us about your enquiry..."
                      style={{ ...fieldStyle("message"), resize: "vertical", minHeight: 120 }}
                      className="ct-field-placeholder"
                      onFocus={() => setFocused("message")} onBlur={() => setFocused("")} />
                  </div>

                  <button type="submit" disabled={sending} className="ct-submit-btn">
                    {sending ? <><IconSpinner /> SENDING...</> : <><IconSend /> SEND MESSAGE</>}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right panel */}
          <div style={{
            display: "flex", flexDirection: "column", gap: 20,
            width: "100%", maxWidth: 340, flexShrink: 0,
            animation: "ctFadeUp 0.5s ease 0.2s both",
          }}>
            {/* Image with indigo frame */}
            <div style={{ position: "relative" }}>
              <div style={{
                position: "absolute", inset: -10,
                border: "1px solid rgba(99,102,241,0.18)",
                borderRadius: 14, zIndex: 0,
              }} />
              <img src={assets.contactImg2} alt="D Dolly Lamb Atelier" style={{
                width: "100%", borderRadius: 10, display: "block",
                position: "relative", zIndex: 1,
                boxShadow: "0 8px 28px rgba(99,102,241,0.1)",
              }} />
              {/* Indigo corner accents */}
              {[{ top: -2, left: -2 }, { top: -2, right: -2 }, { bottom: -2, left: -2 }, { bottom: -2, right: -2 }].map((pos, i) => (
                <div key={i} style={{ position: "absolute", width: 14, height: 14, zIndex: 2, ...pos }}>
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                    {i === 0 && <path d="M1 8V1h7" stroke="#6366F1" strokeWidth="1.5" strokeLinecap="round" />}
                    {i === 1 && <path d="M15 8V1H8" stroke="#6366F1" strokeWidth="1.5" strokeLinecap="round" />}
                    {i === 2 && <path d="M1 8v7h7" stroke="#6366F1" strokeWidth="1.5" strokeLinecap="round" />}
                    {i === 3 && <path d="M15 8v7H8" stroke="#6366F1" strokeWidth="1.5" strokeLinecap="round" />}
                  </svg>
                </div>
              ))}
            </div>

            {/* Careers card */}
            <div style={{
              padding: 24,
              background: "#FFFFFF",
              border: "1px solid rgba(99,102,241,0.14)",
              borderRadius: 12,
              boxShadow: "0 2px 12px rgba(99,102,241,0.06)",
            }}>
              {/* Top accent */}
              <div style={{
                height: 2, background: "linear-gradient(90deg, #4338CA, #6366F1, #818CF8)",
                borderRadius: "12px 12px 0 0", margin: "-24px -24px 20px",
              }} />

              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <div style={{
                  width: 40, height: 40,
                  border: "1px solid rgba(99,102,241,0.18)", borderRadius: 10,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  background: "rgba(99,102,241,0.06)",
                }}>
                  <IconBriefcase />
                </div>
                <p style={{
                  fontSize: 9, letterSpacing: "0.28em", color: "#818CF8",
                  fontWeight: 700, textTransform: "uppercase",
                }}>CAREERS</p>
              </div>

              <h3 style={{
                fontSize: 16, color: "#1E1B4B", fontWeight: 700,
                marginBottom: 10, fontFamily: "'Montserrat',sans-serif",
              }}>Join Our Atelier</h3>
              <p style={{
                fontSize: 12, color: "#6B7280", fontStyle: "italic",
                lineHeight: 1.8, marginBottom: 18,
                fontFamily: "'Montserrat',sans-serif",
              }}>
                We're always looking for passionate craftspeople and creative minds to join the D Dolly Lamb family.
              </p>

              <a href="mailto:careers@ddollylamb.com" style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "10px 18px",
                border: "1.5px solid rgba(99,102,241,0.3)",
                color: "#6366F1", fontSize: 10, letterSpacing: "0.18em",
                fontFamily: "'Montserrat',sans-serif", fontWeight: 600,
                textDecoration: "none", borderRadius: 6,
                transition: "all 0.2s",
              }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(99,102,241,0.08)"; e.currentTarget.style.borderColor = "#6366F1"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "rgba(99,102,241,0.3)"; }}
              >EXPLORE JOBS →</a>
            </div>
          </div>
        </div>
      </div>

      {/* ── FAQ ── */}
      <div style={{
        borderTop: "1px solid rgba(99,102,241,0.1)",
        borderBottom: "1px solid rgba(99,102,241,0.1)",
        background: "linear-gradient(135deg, #F8F7FF, #EEF0FF)",
      }}>
        <div style={{ maxWidth: 760, margin: "0 auto", padding: "64px 24px" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <p style={{
              fontSize: 9, letterSpacing: "0.38em", color: "#6366F1",
              marginBottom: 8, fontWeight: 700, textTransform: "uppercase",
            }}>COMMON QUESTIONS</p>
            <h2 style={{
              fontSize: "clamp(1.3rem,3vw,1.9rem)", fontWeight: 700,
              color: "#1E1B4B", fontFamily: "'Montserrat',sans-serif",
            }}>
              Frequently{" "}
              <span style={{
                background: "linear-gradient(135deg, #4338CA, #6366F1)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}>Asked</span>
            </h2>
          </div>

          <div style={{
            background: "#FFFFFF", borderRadius: 12,
            border: "1px solid rgba(99,102,241,0.12)",
            padding: "8px 28px",
            boxShadow: "0 4px 20px rgba(99,102,241,0.07)",
          }}>
            {faqs.map((faq, i) => <FAQ key={i} {...faq} />)}
          </div>
        </div>
      </div>

      <NewsletterBox />
    </div>
  )
}

export default Contact