// // import React, { useContext, useEffect, useState } from 'react'
// // import { ShopContext } from '../context/ShopContext';
// // import axios from 'axios';
// // import { toast } from 'react-toastify';

// // const Login = () => {

// //   const [currentState, setCurrentState] = useState('Login');
// //   const { token, setToken, navigate, backendUrl } = useContext(ShopContext)

// //   const [name,setName] = useState('')
// //   const [password,setPasword] = useState('')
// //   const [email,setEmail] = useState('')

// //   const onSubmitHandler = async (event) => {
// //       event.preventDefault();
// //       try {
// //         if (currentState === 'Sign Up') {

// //           const response = await axios.post(backendUrl + '/api/user/register',{name,email,password})
// //           if (response.data.success) {
// //             setToken(response.data.token)
// //             localStorage.setItem('token',response.data.token)
// //           } else {
// //             toast.error(response.data.message)
// //           }

// //         } else {

// //           const response = await axios.post(backendUrl + '/api/user/login', {email,password})
// //           if (response.data.success) {
// //             setToken(response.data.token)
// //             localStorage.setItem('token',response.data.token)
// //           } else {
// //             toast.error(response.data.message)
// //           }

// //         }


// //       } catch (error) {
// //         console.log(error)
// //         toast.error(error.message)
// //       }
// //   }

// //   useEffect(()=>{
// //     if (token) {
// //       navigate('/')
// //     }
// //   },[token])

// //   return (
// //     <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
// //         <div className='inline-flex items-center gap-2 mb-2 mt-10'>
// //             <p className='prata-regular text-3xl'>{currentState}</p>
// //             <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
// //         </div>
// //         {currentState === 'Login' ? '' : <input onChange={(e)=>setName(e.target.value)} value={name} type="text" className='w-full px-3 py-2 border border-gray-800' placeholder='Name' required/>}
// //         <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" className='w-full px-3 py-2 border border-gray-800' placeholder='Email' required/>
// //         <input onChange={(e)=>setPasword(e.target.value)} value={password} type="password" className='w-full px-3 py-2 border border-gray-800' placeholder='Password' required/>
// //         <div className='w-full flex justify-between text-sm mt-[-8px]'>
// //             <p className=' cursor-pointer'>Forgot your password?</p>
// //             {
// //               currentState === 'Login'
// //               ? <p onClick={()=>setCurrentState('Sign Up')} className=' cursor-pointer'>Create account</p>
// //               : <p onClick={()=>setCurrentState('Login')} className=' cursor-pointer'>Login Here</p>
// //             }
// //         </div>
// //         <button className='bg-black text-white font-light px-8 py-2 mt-4'>{currentState === 'Login' ? 'Sign In' : 'Sign Up'}</button>
// //     </form>
// //   )
// // }

// // export default Login


// import React, { useContext, useEffect, useState } from 'react';
// import { ShopContext } from '../context/ShopContext';
// import axios from 'axios';
// import { toast } from 'react-toastify';

// const Login = () => {
//   const [currentState, setCurrentState] = useState('Login');
//   const { token, setToken, navigate, backendUrl } = useContext(ShopContext);

//   const [name, setName] = useState('');
//   const [password, setPassword] = useState(''); // Fixed typo: setPasword -> setPassword
//   const [email, setEmail] = useState('');

//   const onSubmitHandler = async (event) => {
//     event.preventDefault();
//     try {
//       if (currentState === 'Sign Up') {
//         const response = await axios.post(backendUrl + '/api/user/register', { name, email, password });
//         if (response.data.success) {
//           setToken(response.data.token);
//           localStorage.setItem('token', response.data.token);
//         } else {
//           toast.error(response.data.message);
//         }
//       } else {
//         const response = await axios.post(backendUrl + '/api/user/login', { email, password });
//         if (response.data.success) {
//           setToken(response.data.token);
//           localStorage.setItem('token', response.data.token);
//         } else {
//           toast.error(response.data.message);
//         }
//       }
//     } catch (error) {
//       console.log(error);
//       toast.error(error.message);
//     }
//   };

//   useEffect(() => {
//     if (token) {
//       navigate('/');
//     }
//   }, [token]);

//   return (
//     <div className="min-h-screen flex items-center bg-[#f4f6ff] justify-center">
//       <form
//         onSubmit={onSubmitHandler}
//         className="bg-white p-6 rounded-lg shadow w-full max-w-md flex flex-col items-center gap-4 text-gray-700"
//       >
//         <div className="inline-flex items-center gap-2 mb-6">
//           <h2 className="text-2xl font-bold">{currentState}</h2>
//           <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
//         </div>
//         {currentState === 'Login' ? '' : (
//           <input
//             onChange={(e) => setName(e.target.value)}
//             value={name}
//             type="text"
//             className="w-full px-3 py-2 border border-gray-300 rounded"
//             placeholder="Your Name"
//             required
//           />
//         )}
//         <input
//           onChange={(e) => setEmail(e.target.value)}
//           value={email}
//           type="email"
//           className="w-full px-3 py-2 border border-gray-300 rounded"
//           placeholder="Email Address"
//           required
//         />
//         <input
//           onChange={(e) => setPassword(e.target.value)}
//           value={password}
//           type="password"
//           className="w-full px-3 py-2 border border-gray-300 rounded"
//           placeholder="Password"
//           required
//         />
//         <div className="w-full flex justify-between text-sm mt-[-8px]">
//           <p className="cursor-pointer text-gray-600">Forgot your password?</p>
//           {currentState === 'Login' ? (
//             <p onClick={() => setCurrentState('Register')} className="cursor-pointer text-gray-900 underline hover:no-underline">
//               Create account
//             </p>
//           ) : (
//             <p onClick={() => setCurrentState('Login')} className="cursor-pointer text-gray-900 underline hover:no-underline">
//               Login Here
//             </p>
//           )}
//         </div>
//         <button
//           type="submit"
//           className="w-full bg-gray-800  text-white p-2 rounded hover:bg-gray-600"
//         >
//           {currentState === 'Login' ? 'Sign In' : 'Sign Up'}
//         </button>
//         <p className="text-center mt-2 text-gray-600">
//           Don't have an account?{' '}
//           <span
//             onClick={() => setCurrentState('Register')}
//             className="text-gray-900 cursor-pointer underline hover:no-underline"
//           >
//             Register here
//           </span>
//         </p>
//         <p className="text-center  text-gray-600">
//           <input type="checkbox" className="mr-2" /> By continuing, I agree to the terms of use & privacy policy
//         </p>
//       </form>
//     </div>
//   );
// };

// export default Login;




// import React, { useContext, useEffect, useState } from 'react';
// import { ShopContext } from '../context/ShopContext';
// import axios from 'axios';
// import { toast } from 'sonner';

// const Login = () => {
//   const [currentState, setCurrentState] = useState('Login');
//   const { token, setToken, navigate, backendUrl } = useContext(ShopContext);

//   const [name, setName] = useState('');
//   const [password, setPassword] = useState('');
//   const [email, setEmail] = useState('');

//   const onSubmitHandler = async (event) => {
//     event.preventDefault();
//     try {
//       if (currentState === 'Register') {
//         const response = await axios.post(`${backendUrl}/api/user/register`, { name, email, password });
//         if (response.data.success) {
//           setToken(response.data.token);
//           localStorage.setItem('token', response.data.token);
//           toast.success('Account created successfully!');
//         } else {
//           toast.error(response.data.message);
//         }
//       } else {
//         const response = await axios.post(`${backendUrl}/api/user/login`, { email, password });
//         if (response.data.success) {
//           setToken(response.data.token);
//           localStorage.setItem('token', response.data.token);
//           toast.success("Login successful!", { duration: 2000 });
//         } else {
//           toast.error(response.data.message);
//         }
//       }
//     } catch (error) {
//       console.log(error);
//       toast.error('Something went wrong. Please try again.');
//     }
//   };

//   useEffect(() => {
//     if (token) navigate('/');
//   }, [token]);

//   return (
//     <div className="min-h-screen flex items-center bg-[#f4f6ff] justify-center">
//       <form onSubmit={onSubmitHandler} className="bg-white p-6 rounded-lg shadow w-full max-w-md flex flex-col items-center gap-4 text-gray-700">
//         <div className="inline-flex items-center gap-2 mb-6">
//           <h2 className="text-2xl font-bold">{currentState}</h2>
//           <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
//         </div>

//         {currentState === 'Login' ? null : (
//           <input onChange={(e) => setName(e.target.value)} value={name} type="text" className="w-full px-3 py-2 border border-gray-300 rounded" placeholder="Your Name" required />
//         )}

//         <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" className="w-full px-3 py-2 border border-gray-300 rounded" placeholder="Email Address" required />
//         <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" className="w-full px-3 py-2 border border-gray-300 rounded" placeholder="Password" required />

//         <div className="w-full flex justify-between text-sm mt-[-8px]">
//           <p className="cursor-pointer text-gray-600">Forgot your password?</p>
//           {currentState === 'Login' ? (
//             <p onClick={() => setCurrentState('Register')} className="cursor-pointer text-gray-900 underline hover:no-underline">
//               Create account
//             </p>
//           ) : (
//             <p onClick={() => setCurrentState('Login')} className="cursor-pointer text-gray-900 underline hover:no-underline">
//               Login Here
//             </p>
//           )}
//         </div>

//         <button type="submit" className="w-full bg-gray-800 text-white p-2 rounded hover:bg-gray-600">
//           {currentState === 'Login' ? 'Sign In' : 'Sign Up'}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Login;



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
      stroke="#c8973a" strokeWidth="1.3" fill="rgba(200,151,58,0.1)" />
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
    background:rgba(255,255,255,0.04);
    border:1px solid rgba(200,151,58,0.22);
    border-radius:8px;
    transition:border-color 0.22s, background 0.22s, box-shadow 0.22s;
    overflow:hidden;
  }
  .lg-field:focus-within {
    border-color:#c8973a;
    background:rgba(200,151,58,0.05);
    box-shadow:0 0 0 3px rgba(200,151,58,0.1);
  }
  .lg-field.error { border-color:rgba(239,68,68,0.6); }
  .lg-field.error:focus-within { box-shadow:0 0 0 3px rgba(239,68,68,0.12); }

  .lg-icon {
    padding:0 12px;
    color:rgba(200,151,58,0.5);
    display:flex; align-items:center;
    flex-shrink:0; transition:color 0.2s;
  }
  .lg-field:focus-within .lg-icon { color:#c8973a; }

  .lg-input {
    flex:1; padding:13px 0 13px;
    background:transparent; border:none; outline:none;
    font-size:13px; color:#f0dfc0;
    font-family:'Montserrat',sans-serif;
  }
  .lg-input::placeholder { color:rgba(200,151,58,0.3); font-style:italic; }

  .lg-eye {
    padding:0 13px; background:none; border:none;
    color:rgba(200,151,58,0.4); cursor:pointer;
    display:flex; align-items:center;
    transition:color 0.2s; flex-shrink:0;
  }
  .lg-eye:hover { color:#c8973a; }

  /* ── Submit btn ── */
  .lg-btn {
    width:100%; padding:14px;
    background:linear-gradient(135deg,#c8973a,#f7c568);
    color:#1a0f0a; border:none; border-radius:8px;
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
  .lg-btn:hover { box-shadow:0 8px 28px rgba(200,151,58,0.4); transform:translateY(-1px); }
  .lg-btn:hover::after { opacity:1; }
  .lg-btn:disabled { opacity:0.6; cursor:not-allowed; transform:none; }

  /* ── Tab switcher ── */
  .lg-tab {
    flex:1; padding:10px;
    background:transparent; border:none;
    font-size:10px; letter-spacing:0.22em;
    font-family:'Montserrat',sans-serif; font-weight:600;
    cursor:pointer; transition:all 0.22s; border-radius:6px;
    color:rgba(200,151,58,0.4);
  }
  .lg-tab.active {
    background:linear-gradient(135deg,#c8973a,#f7c568);
    color:#1a0f0a;
    box-shadow:0 4px 14px rgba(200,151,58,0.3);
  }

  /* Strength bar segments */
  .lg-seg {
    flex:1; height:3px; border-radius:2px;
    background:rgba(200,151,58,0.12);
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
    background:rgba(255,255,255,0.04);
    border:1px solid rgba(200,151,58,0.18); border-radius:8px;
    color:rgba(240,220,190,0.6);
    font-size:9px; letter-spacing:0.16em;
    font-family:'Montserrat',sans-serif;
    cursor:pointer; transition:all 0.2s;
    display:flex; align-items:center; justify-content:center; gap:7px;
  }
  .lg-social:hover { border-color:rgba(200,151,58,0.4); color:#f0dfc0; background:rgba(200,151,58,0.06); }
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

  const [mode, setMode] = useState("login");   // "login" | "register" | "forgot"
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [showCfm, setShowCfm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [forgotSent, setForgotSent] = useState(false);

  useEffect(() => { if (token) navigate("/"); }, [token]);

  /* Reset form on mode switch */
  const switchMode = (m) => {
    setMode(m); setErrors({});
    setName(""); setEmail(""); setPassword(""); setConfirm("");
    setForgotSent(false);
  };

  /* Validate */
  const validate = () => {
    const e = {};
    if (mode === "register" && !name.trim())
      e.name = "Name is required";
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      e.email = "Enter a valid email";
    if (mode !== "forgot") {
      if (password.length < 6)
        e.password = "At least 6 characters";
      if (mode === "register" && password !== confirm)
        e.confirm = "Passwords do not match";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    try {
      if (mode === "register") {
        const res = await axios.post(`${backendUrl}/api/user/register`, { name, email, password });
        if (res.data.success) {
          setToken(res.data.token);
          localStorage.setItem("token", res.data.token);
          toast.success("Welcome to D Dolly Lamb!");
        } else toast.error(res.data.message);

      } else if (mode === "login") {
        const res = await axios.post(`${backendUrl}/api/user/login`, { email, password });
        if (res.data.success) {
          setToken(res.data.token);
          localStorage.setItem("token", res.data.token);
          toast.success("Welcome back!");
        } else toast.error(res.data.message);

      } else if (mode === "forgot") {
        // Call forgot-password endpoint if available
        try {
          await axios.post(`${backendUrl}/api/user/forgot-password`, { email });
        } catch { }
        setForgotSent(true);
        toast.success("If that email exists, a reset link has been sent.");
      }
    } catch (err) {
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
        minHeight: "100vh", background: "#1a0f0a",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "24px 16px", position: "relative", overflow: "hidden",
      }}>

        {/* Ambient orbs */}
        <div style={{
          position: "absolute", top: "15%", left: "10%",
          width: 340, height: 340, borderRadius: "50%",
          background: "radial-gradient(circle,rgba(200,151,58,0.07),transparent 70%)",
          animation: "orb1 8s ease-in-out infinite", pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", bottom: "15%", right: "10%",
          width: 260, height: 260, borderRadius: "50%",
          background: "radial-gradient(circle,rgba(200,151,58,0.05),transparent 70%)",
          animation: "orb2 10s ease-in-out infinite", pointerEvents: "none",
        }} />
        {/* Diagonal grain line */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          background: "repeating-linear-gradient(45deg,transparent,transparent 60px,rgba(200,151,58,0.018) 60px,rgba(200,151,58,0.018) 61px)",
        }} />

        {/* Card */}
        <div className="lg-card" style={{
          width: "100%", maxWidth: 420,
          background: "linear-gradient(160deg,#1e120a,#150c05)",
          border: "1px solid rgba(200,151,58,0.2)",
          borderRadius: 14, overflow: "hidden",
          boxShadow: "0 32px 80px rgba(0,0,0,0.7)",
          position: "relative",
        }}>
          {/* Gold top bar */}
          <div style={{ height: 2, background: "linear-gradient(to right,transparent,#c8973a 30%,#f7c568 50%,#c8973a 70%,transparent)" }} />

          <div style={{ padding: "32px 32px 36px" }}>

            {/* Brand */}
            <div style={{ textAlign: "center", marginBottom: 28 }}>
              <div style={{ display: "flex", justifyContent: "center", marginBottom: 10 }}>
                <IconDiamond />
              </div>
              <p style={{
                fontSize: 8, letterSpacing: "0.5em", color: "#c8973a",
                fontFamily: "Montserrat,sans-serif", fontWeight: 700, marginBottom: 6
              }}>
                D DOLLY LAMB
              </p>
              <p style={{
                fontSize: 9, color: "rgba(200,151,58,0.4)",
                fontFamily: "Montserrat,sans-serif", letterSpacing: "0.18em"
              }}>
                ARTISAN ATELIER
              </p>
            </div>

            {/* Tab switcher — login / register only */}
            {mode !== "forgot" && (
              <div style={{
                display: "flex", gap: 4, padding: 4,
                background: "rgba(200,151,58,0.06)",
                border: "1px solid rgba(200,151,58,0.14)",
                borderRadius: 10, marginBottom: 26,
              }}>
                <button className={`lg-tab ${mode === "login" ? "active" : ""}`}
                  onClick={() => switchMode("login")} type="button">
                  SIGN IN
                </button>
                <button className={`lg-tab ${mode === "register" ? "active" : ""}`}
                  onClick={() => switchMode("register")} type="button">
                  CREATE ACCOUNT
                </button>
              </div>
            )}

            {/* Heading */}
            <div style={{ marginBottom: 22 }}>
              <h1 style={{
                fontSize: "clamp(1.3rem,3vw,1.8rem)", color: "#f7c568",
                fontFamily: "'Cormorant Garamond',serif", fontWeight: 400,
                fontStyle: "italic", margin: 0, letterSpacing: "0.04em"
              }}>
                {mode === "login" ? "Welcome back" :
                  mode === "register" ? "Join the atelier" : "Reset your password"}
              </h1>
              <p style={{
                fontSize: 9, color: "rgba(200,151,58,0.45)",
                fontFamily: "Montserrat,sans-serif", letterSpacing: "0.14em", marginTop: 4
              }}>
                {mode === "login" ? "Sign in to your account" :
                  mode === "register" ? "Create your member account" : "Enter your email to receive a reset link"}
              </p>
            </div>

            {/* Forgot sent confirmation */}
            {forgotSent ? (
              <div style={{
                padding: "18px 20px", borderRadius: 8,
                background: "rgba(74,222,128,0.07)",
                border: "1px solid rgba(74,222,128,0.25)",
                textAlign: "center", marginBottom: 20,
              }}>
                <div style={{ color: "#4ade80", marginBottom: 8, fontSize: 22 }}>✓</div>
                <p style={{
                  fontSize: 11, color: "#f0dfc0", fontFamily: "'Cormorant Garamond',serif",
                  marginBottom: 4
                }}>Check your inbox</p>
                <p style={{
                  fontSize: 9, color: "rgba(200,151,58,0.5)", fontFamily: "Montserrat,sans-serif",
                  letterSpacing: "0.1em"
                }}>
                  A reset link has been sent to {email}
                </p>
                <button onClick={() => switchMode("login")} type="button"
                  style={{
                    marginTop: 14, fontSize: 9, color: "#c8973a",
                    fontFamily: "Montserrat,sans-serif", letterSpacing: "0.14em",
                    background: "none", border: "none", cursor: "pointer", textDecoration: "underline"
                  }}>
                  BACK TO SIGN IN
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} style={{ display: "flex", flexDirection: "column", gap: 14 }}>

                {/* Name — register only */}
                {mode === "register" && (
                  <div>
                    <div className={`lg-field ${errors.name ? "error" : ""}`}>
                      <span className="lg-icon"><IconUser /></span>
                      <input className="lg-input" type="text" value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder="Full name" autoComplete="name" />
                    </div>
                    {errors.name && <p className="lg-err">✕ {errors.name}</p>}
                  </div>
                )}

                {/* Email */}
                <div>
                  <div className={`lg-field ${errors.email ? "error" : ""}`}>
                    <span className="lg-icon"><IconMail /></span>
                    <input className="lg-input" type="email" value={email}
                      onChange={e => setEmail(e.target.value)}
                      placeholder="Email address" autoComplete="email" />
                  </div>
                  {errors.email && <p className="lg-err">✕ {errors.email}</p>}
                </div>

                {/* Password */}
                {mode !== "forgot" && (
                  <div>
                    <div className={`lg-field ${errors.password ? "error" : ""}`}>
                      <span className="lg-icon"><IconLock /></span>
                      <input className="lg-input"
                        type={showPw ? "text" : "password"}
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        placeholder="Password" autoComplete={mode === "login" ? "current-password" : "new-password"} />
                      <button type="button" className="lg-eye" onClick={() => setShowPw(p => !p)}>
                        {showPw ? <IconEyeOff /> : <IconEye />}
                      </button>
                    </div>
                    {errors.password && <p className="lg-err">✕ {errors.password}</p>}

                    {/* Password strength — register only */}
                    {mode === "register" && password.length > 0 && (
                      <div style={{ marginTop: 8 }}>
                        <div style={{ display: "flex", gap: 4, marginBottom: 4 }}>
                          {[1, 2, 3, 4].map(i => (
                            <div key={i} className="lg-seg" style={{
                              background: i <= pwStrength ? strengthColor[pwStrength] : undefined
                            }} />
                          ))}
                        </div>
                        <p style={{
                          fontSize: 8, fontFamily: "Montserrat,sans-serif",
                          letterSpacing: "0.18em", color: strengthColor[pwStrength]
                        }}>
                          {strengthLabel[pwStrength]}
                        </p>
                      </div>
                    )}
                  </div>
                )}

                {/* Confirm password — register only */}
                {mode === "register" && (
                  <div>
                    <div className={`lg-field ${errors.confirm ? "error" : ""}`}>
                      <span className="lg-icon"><IconLock /></span>
                      <input className="lg-input"
                        type={showCfm ? "text" : "password"}
                        value={confirm}
                        onChange={e => setConfirm(e.target.value)}
                        placeholder="Confirm password" autoComplete="new-password" />
                      <button type="button" className="lg-eye" onClick={() => setShowCfm(p => !p)}>
                        {showCfm ? <IconEyeOff /> : <IconEye />}
                      </button>
                    </div>
                    {errors.confirm && <p className="lg-err">✕ {errors.confirm}</p>}
                    {!errors.confirm && confirm.length > 0 && confirm === password && (
                      <p style={{
                        fontSize: 9, color: "#4ade80", fontFamily: "Montserrat,sans-serif",
                        letterSpacing: "0.1em", marginTop: 4, display: "flex", alignItems: "center", gap: 4
                      }}>
                        <IconCheck /> Passwords match
                      </p>
                    )}
                  </div>
                )}

                {/* Forgot link — login only */}
                {mode === "login" && (
                  <div style={{ textAlign: "right", marginTop: -6 }}>
                    <button type="button" onClick={() => switchMode("forgot")}
                      style={{
                        background: "none", border: "none", cursor: "pointer",
                        fontSize: 9, color: "rgba(200,151,58,0.55)",
                        fontFamily: "Montserrat,sans-serif", letterSpacing: "0.14em",
                        transition: "color 0.2s"
                      }}
                      onMouseEnter={e => e.target.style.color = "#c8973a"}
                      onMouseLeave={e => e.target.style.color = "rgba(200,151,58,0.55)"}>
                      FORGOT PASSWORD?
                    </button>
                  </div>
                )}

                {/* Back to login — forgot mode */}
                {mode === "forgot" && (
                  <button type="button" onClick={() => switchMode("login")}
                    style={{
                      background: "none", border: "none", cursor: "pointer",
                      fontSize: 9, color: "rgba(200,151,58,0.5)",
                      fontFamily: "Montserrat,sans-serif", letterSpacing: "0.14em",
                      textAlign: "left"
                    }}
                    onMouseEnter={e => e.target.style.color = "#c8973a"}
                    onMouseLeave={e => e.target.style.color = "rgba(200,151,58,0.5)"}>
                    ← BACK TO SIGN IN
                  </button>
                )}

                {/* Submit */}
                <button type="submit" className="lg-btn" disabled={loading} style={{ marginTop: 4 }}>
                  {loading ? (
                    <div style={{
                      width: 14, height: 14, border: "2px solid rgba(26,15,10,0.3)",
                      borderTopColor: "#1a0f0a", borderRadius: "50%", animation: "spin 0.7s linear infinite"
                    }} />
                  ) : (
                    <>
                      {mode === "login" ? "SIGN IN" :
                        mode === "register" ? "CREATE ACCOUNT" : "SEND RESET LINK"}
                      <IconArrow />
                    </>
                  )}
                </button>

                {/* Terms — register only */}
                {mode === "register" && (
                  <p style={{
                    fontSize: 8, color: "rgba(200,151,58,0.35)",
                    fontFamily: "Montserrat,sans-serif", letterSpacing: "0.1em",
                    textAlign: "center", lineHeight: 1.6
                  }}>
                    By creating an account you agree to our{" "}
                    <span style={{
                      color: "rgba(200,151,58,0.6)", cursor: "pointer",
                      textDecoration: "underline"
                    }}>Terms</span>
                    {" "}and{" "}
                    <span style={{
                      color: "rgba(200,151,58,0.6)", cursor: "pointer",
                      textDecoration: "underline"
                    }}>Privacy Policy</span>
                  </p>
                )}
              </form>
            )}

            {/* Bottom divider + perks */}
            <div style={{ marginTop: 26 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                <div style={{ flex: 1, height: 1, background: "linear-gradient(to right,transparent,rgba(200,151,58,0.15))" }} />
                <span style={{
                  fontSize: 7.5, color: "rgba(200,151,58,0.35)",
                  fontFamily: "Montserrat,sans-serif", letterSpacing: "0.22em"
                }}>MEMBER BENEFITS</span>
                <div style={{ flex: 1, height: 1, background: "linear-gradient(to left,transparent,rgba(200,151,58,0.15))" }} />
              </div>
              <div style={{ display: "flex", justifyContent: "center", gap: 20, flexWrap: "wrap" }}>
                {["Early Access", "Exclusive Offers", "Artisan Stories"].map(b => (
                  <div key={b} style={{ display: "flex", alignItems: "center", gap: 5 }}>
                    <div style={{ width: 4, height: 4, background: "#c8973a", transform: "rotate(45deg)" }} />
                    <span style={{
                      fontSize: 8, color: "rgba(200,151,58,0.5)",
                      fontFamily: "Montserrat,sans-serif", letterSpacing: "0.12em"
                    }}>
                      {b.toUpperCase()}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom gold bar */}
          <div style={{ height: 1, background: "linear-gradient(to right,transparent,rgba(200,151,58,0.15),transparent)" }} />
        </div>
      </div>
    </>
  );
};

export default Login;