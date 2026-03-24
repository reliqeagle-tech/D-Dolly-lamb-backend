// import React, { useState } from 'react'
// import { assets } from '../../assets/assets'
// import { Link, NavLink } from 'react-router-dom'
// import Button from '@mui/material/Button'
// import { CgLogIn } from "react-icons/cg";
// import { FiUser } from "react-icons/fi";
// import { FcGoogle } from "react-icons/fc";
// import { FaFacebook } from "react-icons/fa6";
// import Checkbox from '@mui/material/Checkbox';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import { FaRegEye } from "react-icons/fa";
// import { FaRegEyeSlash } from "react-icons/fa";

// const Login = () => {

//     const [loadingGoggle, setLoadingGoggle] = useState(false);
//     const [loadingFb, setLoadingFb] = useState(false);
//     const [isPasswordShow, setIsPasswordShow] = useState(false);

//     function handleClickGoggle() {
//     setLoadingGoggle(true)
//   }

//   function handleClickFb() {
//     setLoadingFb(true);
//     }

//   return (
//     <section className='w-full h-full '>
//         <header className='w-full fixed top-0 left-0 px-4 pl-8 py-2 flex items-center justify-between z-50 '>
//             <Link to='/'>
//                         <div className="flex items-center gap-2 cursor-pointer">
//                             <div className="border-2 border-[#3872fa] p-2 lg:p-4 text-xl lg:text-2xl font-bold">D</div>

//                             <div className="text-xs md:text-lg leading-none">
//                                 <p className="font-semibold leading-none">DOLLY</p>
//                                 <p className="text-[#3067e5] leading-none">LAMB</p>
//                                 <p className="font-semibold leading-none">ADMIN</p>
//                             </div>
//                         </div>
//                     </Link>
//                     <div className='flex items-center'>
//                         <NavLink to='/login' exact={true} activeClassName='isActive'>
//                             <Button className='!text-gray-800 font-medium !px-4 !rounded-full flex gap-2'> <CgLogIn className='text-[19px]' />Login</Button>
//                         </NavLink>
//                         <NavLink to='/sign-up' exact={true} activeClassName='isActive'>
//                             <Button className='!text-gray-800 font-medium !px-4 !rounded-full flex gap-2'> <FiUser className='text-lg' />Sign Up</Button>
//                         </NavLink>
//                     </div>
//         </header>
//         <img src={assets.login_bg} alt="login-bg" className='w-full h-full fixed top-0 left-0 opacity-5 pointer-events-none' />
//         <div className='loginBox card w-[60%] lg:w-[45%] h-full mx-auto mt-20 !shadow-lg mb-2 py-10 rounded-lg bg-[#ffff] z-999'>
//             <div className='text-center '>
//             <img src={assets.logo_3} className='m-auto ' alt="" />
//         </div>
//         <h1 className='text-center text-lg lg:text-[35px] font-bold text-gray-800 leading-tight mt-1'>Welcome Back <br /> <span className='text-primary'>Sign in with your credentials.</span></h1>
//         <div className='flex items-center justify-center w-full mt-5 gap-2'>
//             <Button
//           size="small"
//           onClick={handleClickGoggle}
//           endIcon={<FcGoogle className='text-2xl' />}
//           loading={loadingGoggle}
//           loadingPosition="end"
//           variant="outlined"
//           className='!capitalize lg:!text-[16px] lg:!px-5 !text-gray-700 !font-medium'
//         >
//           Sign in with Goggle
//         </Button>
//         <Button
//           size="small"
//           onClick={handleClickFb}
//           endIcon={<FaFacebook  className='text-2xl text-[#3067e5]' />}
//           loading={loadingFb}
//           loadingPosition="end"
//           variant="outlined"
//           className='!capitalize lg:!text-[16px] lg:!px-5 !text-gray-700 !font-medium'
//         >
//           Sign in with Facebook
//         </Button>
//         </div>
//         <br />
//         <div className='flex items-center justify-center gap-3 w-full'>
//             <span className='flex items-center w-[100px] h-[1px] bg-gray-400'></span>
//             <span className='text-gray-700 font-medium text-sm'>Or, Sign in with your email</span>
//             <span className='flex items-center w-[100px] h-[1px] bg-gray-400'></span>
//         </div>

//         <form className='w-full px-16 mt-3 mb-8'>
//             <div className='form-group mb-4 w-full'>
//                 <h4 className='text-[16px] text-gray-700 font-medium mb-1 ml-2 '>Email</h4>
//                 <input type="email" className='w-full h-[40px] lg:h-[45px] border-2 border-gray-300 rounded-md focus:border-gray-600 focus:outline-none px-3' />
//             </div>
//             <div className='form-group mb-4 w-full'>
//                 <h4 className='text-[16px] text-gray-700 font-medium mb-1 ml-2 '>Password</h4>
//                 <div className='relative w-full'>
//                     <input type={isPasswordShow===false? 'password' : 'text'} className='w-full h-[40px] lg:h-[45px] border-2 border-gray-300 rounded-md focus:border-gray-600 focus:outline-none px-3' />
//                     <Button className='!absolute top-[5px] right-[10px] z-50 !rounded-full !w-35px !min-w-[35px] !h-[35px] !text-gray-600' onClick={()=>setIsPasswordShow(!isPasswordShow)}>
//                         {
//                             isPasswordShow===false ? <FaRegEye className='lg:text-lg' /> : <FaRegEyeSlash className='lg:text-lg' />
//                         }
//                     </Button>
//                 </div>
//             </div>
//             <div className='form-group mb-4 w-full flex items-center justify-between text-gray-700 font-medium'>
//                 <FormControlLabel control={<Checkbox  />} label="Remember me" />
//                 <Link to='/forget-password' className='text-primary font-semibold underline hover:no-underline hover:text-gray-700'>
//                 Forget Password?
//                 </Link>
//             </div>
//             <div className='px-8'>
//                 <Button className='btn-blue w-full'>Sign In</Button>
//             </div>
//         </form>
//         </div>
//     </section>
//   )
// }

// export default Login




// import axios from 'axios'
// import React, { useState } from 'react'
// import { toast } from 'react-toastify'
// import { backendUrl } from '../../App'

// const Login = ({ setToken }) => {

//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')

//     const onSubmitHandler = async (e) => {
//         try {
//             e.preventDefault();
//             const response = await axios.post(backendUrl + '/api/user/admin', { email, password })
//             if (response.data.success) {
//                 setToken(response.data.token)
//             } else {
//                 toast.error(response.data.message)
//             }

//         } catch (error) {
//             console.log(error);
//             toast.error(error.message)
//         }
//     }

//     return (
//         <div className='min-h-screen flex items-center justify-center w-full'>
//             <div className='bg-white shadow-md rounded-lg px-8 py-6 max-w-md'>
//                 <h1 className='text-2xl font-bold mb-4'>Admin Panel</h1>
//                 <form onSubmit={onSubmitHandler}>
//                     <div className='mb-3 min-w-72'>
//                         <p className='text-sm font-medium text-gray-700 mb-2'>Email Address</p>
//                         <input onChange={(e) => setEmail(e.target.value)} value={email} className='rounded-md w-full px-3 py-2 border border-gray-300 outline-none' type="email" placeholder='your@email.com' required />
//                     </div>
//                     <div className='mb-3 min-w-72'>
//                         <p className='text-sm font-medium text-gray-700 mb-2'>Password</p>
//                         <input onChange={(e) => setPassword(e.target.value)} value={password} className='rounded-md w-full px-3 py-2 border border-gray-300 outline-none' type="password" placeholder='Enter your password' required />
//                     </div>
//                     <button className='mt-2 w-full py-2 px-4 rounded-md text-white bg-black' type="submit"> Login </button>
//                 </form>
//             </div>
//         </div>
//     )
// }

// export default Login



// import axios from 'axios'
// import React, { useState, useEffect, useRef } from 'react'
// import { toast } from 'react-toastify'
// import { backendUrl } from '../../App'

// /* ═══════════════════════════════════════════
//    STYLES
// ═══════════════════════════════════════════ */
// const CSS = `
// @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Instrument+Sans:wght@400;500;600;700&display=swap');

// .login-root {
//   font-family: 'Instrument Sans', sans-serif;
//   min-height: 100vh;
//   display: flex;
//   background: #0a0a0a;
//   overflow: hidden;
//   position: relative;
// }

// /* ── LEFT PANEL ── */
// .login-left {
//   flex: 1;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   padding: 48px 56px;
//   position: relative;
//   z-index: 2;
//   min-height: 100vh;
// }

// /* ── GRID PATTERN ── */
// .login-left::before {
//   content: '';
//   position: absolute;
//   inset: 0;
//   background-image:
//     linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
//     linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
//   background-size: 48px 48px;
//   z-index: 0;
// }

// /* ── GLOW ORBS ── */
// .orb-1 {
//   position: absolute;
//   width: 500px; height: 500px;
//   border-radius: 50%;
//   background: radial-gradient(circle, rgba(99,102,241,0.18) 0%, transparent 70%);
//   top: -120px; left: -80px;
//   pointer-events: none; z-index: 0;
//   animation: orbFloat 8s ease-in-out infinite;
// }
// .orb-2 {
//   position: absolute;
//   width: 380px; height: 380px;
//   border-radius: 50%;
//   background: radial-gradient(circle, rgba(236,72,153,0.10) 0%, transparent 70%);
//   bottom: 60px; right: -60px;
//   pointer-events: none; z-index: 0;
//   animation: orbFloat 11s ease-in-out infinite reverse;
// }
// @keyframes orbFloat {
//   0%,100% { transform: translateY(0px) scale(1); }
//   50%      { transform: translateY(-28px) scale(1.04); }
// }

// /* ── RIGHT PANEL ── */
// .login-right {
//   width: 480px;
//   flex-shrink: 0;
//   background: #ffffff;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   padding: 56px 52px;
//   position: relative;
//   z-index: 2;
//   overflow: hidden;
// }
// .login-right::before {
//   content: '';
//   position: absolute;
//   top: -120px; right: -120px;
//   width: 340px; height: 340px;
//   border-radius: 50%;
//   background: radial-gradient(circle, #f0f0ff 0%, transparent 70%);
//   pointer-events: none;
// }

// /* ── LOGO ── */
// .login-logo {
//   display: flex;
//   align-items: center;
//   gap: 10px;
//   font-family: 'Instrument Serif', serif;
//   font-size: 22px;
//   color: #ffffff;
//   position: relative; z-index: 1;
//   animation: fadeDown 0.6s ease both;
// }
// .login-logo-mark {
//   width: 36px; height: 36px;
//   background: linear-gradient(135deg, #6366f1, #8b5cf6);
//   border-radius: 10px;
//   display: flex; align-items: center; justify-content: center;
//   font-size: 18px; font-weight: 800; color: white;
//   font-family: 'Instrument Serif', serif;
//   box-shadow: 0 4px 16px rgba(99,102,241,0.4);
// }

// /* ── HERO TEXT ── */
// .login-hero {
//   position: relative; z-index: 1;
// }
// .login-hero h2 {
//   font-family: 'Instrument Serif', serif;
//   font-size: clamp(38px, 5vw, 58px);
//   line-height: 1.1;
//   color: #ffffff;
//   font-weight: 400;
//   letter-spacing: -0.5px;
//   margin-bottom: 20px;
//   animation: fadeUp 0.7s ease 0.15s both;
// }
// .login-hero h2 em {
//   font-style: italic;
//   color: #a5b4fc;
// }
// .login-hero p {
//   font-size: 14.5px;
//   color: rgba(255,255,255,0.45);
//   line-height: 1.7;
//   max-width: 340px;
//   animation: fadeUp 0.7s ease 0.25s both;
// }

// /* ── TRUST BADGES ── */
// .login-badges {
//   display: flex;
//   gap: 12px;
//   flex-wrap: wrap;
//   position: relative; z-index: 1;
//   animation: fadeUp 0.7s ease 0.35s both;
// }
// .login-badge {
//   display: flex; align-items: center; gap: 7px;
//   padding: 7px 14px;
//   border: 1px solid rgba(255,255,255,0.1);
//   border-radius: 50px;
//   font-size: 12px; font-weight: 500;
//   color: rgba(255,255,255,0.55);
//   background: rgba(255,255,255,0.04);
//   backdrop-filter: blur(8px);
// }
// .login-badge-dot {
//   width: 6px; height: 6px; border-radius: 50%;
//   background: #4ade80;
//   box-shadow: 0 0 6px #4ade80;
// }

// /* ── FORM HEADING ── */
// .form-heading h3 {
//   font-family: 'Instrument Serif', serif;
//   font-size: 28px;
//   font-weight: 400;
//   color: #111111;
//   letter-spacing: -0.4px;
//   margin-bottom: 6px;
//   animation: fadeUp 0.5s ease 0.1s both;
// }
// .form-heading p {
//   font-size: 13.5px;
//   color: #9ca3af;
//   margin-bottom: 32px;
//   animation: fadeUp 0.5s ease 0.18s both;
// }

// /* ── FIELD ── */
// .field {
//   margin-bottom: 18px;
//   animation: fadeUp 0.5s ease var(--delay, 0.2s) both;
// }
// .field label {
//   display: block;
//   font-size: 12.5px;
//   font-weight: 600;
//   color: #374151;
//   margin-bottom: 7px;
//   letter-spacing: 0.01em;
// }
// .field-wrap {
//   position: relative;
// }
// .field-ico {
//   position: absolute;
//   left: 14px;
//   top: 50%;
//   transform: translateY(-50%);
//   font-size: 15px;
//   color: #d1d5db;
//   pointer-events: none;
//   transition: color 0.2s;
// }
// .field-input {
//   width: 100%;
//   border: 1.5px solid #e5e7eb;
//   border-radius: 12px;
//   padding: 12px 14px 12px 42px;
//   font-size: 14px;
//   font-family: 'Instrument Sans', sans-serif;
//   color: #111111;
//   background: #fafafa;
//   outline: none;
//   transition: all 0.2s;
//   box-sizing: border-box;
// }
// .field-input::placeholder { color: #d1d5db; }
// .field-input:focus {
//   border-color: #6366f1;
//   background: #ffffff;
//   box-shadow: 0 0 0 4px rgba(99,102,241,0.08);
// }
// .field-input:focus + .field-ico-right,
// .field-input:focus ~ .field-ico { color: #6366f1; }
// .field-input.err { border-color: #ef4444; background: #fff8f8; }
// .field-input.err:focus { box-shadow: 0 0 0 4px rgba(239,68,68,0.08); }
// .field-err {
//   font-size: 11.5px;
//   color: #ef4444;
//   margin-top: 5px;
//   display: flex;
//   align-items: center;
//   gap: 4px;
// }
// .field-ico-right {
//   position: absolute;
//   right: 13px;
//   top: 50%;
//   transform: translateY(-50%);
//   cursor: pointer;
//   font-size: 16px;
//   color: #d1d5db;
//   transition: color 0.2s;
//   user-select: none;
//   padding: 4px;
//   border-radius: 6px;
// }
// .field-ico-right:hover { color: #6b7280; }

// /* ── REMEMBER / FORGOT ── */
// .form-extras {
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   margin-bottom: 24px;
//   animation: fadeUp 0.5s ease 0.35s both;
// }
// .remember {
//   display: flex; align-items: center; gap: 8px;
//   cursor: pointer; user-select: none;
// }
// .remember input[type=checkbox] { display: none; }
// .remember-box {
//   width: 17px; height: 17px;
//   border: 2px solid #e5e7eb;
//   border-radius: 5px;
//   display: flex; align-items: center; justify-content: center;
//   transition: all 0.2s;
//   background: white;
//   flex-shrink: 0;
// }
// .remember-box.checked {
//   background: #6366f1;
//   border-color: #6366f1;
// }
// .remember-box.checked::after {
//   content: '✓';
//   color: white;
//   font-size: 10px;
//   font-weight: 800;
// }
// .remember-label {
//   font-size: 13px;
//   color: #6b7280;
//   font-weight: 500;
// }
// .forgot-link {
//   font-size: 13px;
//   color: #6366f1;
//   font-weight: 600;
//   text-decoration: none;
//   cursor: pointer;
//   transition: color 0.15s;
//   background: none; border: none; padding: 0;
// }
// .forgot-link:hover { color: #4f46e5; }

// /* ── SUBMIT BTN ── */
// .submit-btn {
//   width: 100%;
//   padding: 13px 20px;
//   border-radius: 12px;
//   border: none;
//   background: #111111;
//   color: #ffffff;
//   font-size: 14.5px;
//   font-weight: 700;
//   font-family: 'Instrument Sans', sans-serif;
//   cursor: pointer;
//   position: relative;
//   overflow: hidden;
//   transition: all 0.25s;
//   letter-spacing: 0.01em;
//   display: flex; align-items: center; justify-content: center; gap: 8px;
//   animation: fadeUp 0.5s ease 0.42s both;
// }
// .submit-btn::before {
//   content: '';
//   position: absolute;
//   inset: 0;
//   background: linear-gradient(135deg, #6366f1, #8b5cf6);
//   opacity: 0;
//   transition: opacity 0.3s;
// }
// .submit-btn:hover:not(:disabled)::before { opacity: 1; }
// .submit-btn:hover:not(:disabled) { transform: translateY(-1px); box-shadow: 0 8px 24px rgba(0,0,0,0.18); }
// .submit-btn:active:not(:disabled) { transform: translateY(0px); }
// .submit-btn:disabled { opacity: 0.65; cursor: not-allowed; }
// .submit-btn span, .submit-btn svg { position: relative; z-index: 1; }
// .submit-btn .btn-arrow {
//   width: 20px; height: 20px;
//   border: 1.5px solid rgba(255,255,255,0.4);
//   border-radius: 50%;
//   display: flex; align-items: center; justify-content: center;
//   font-size: 11px;
//   transition: transform 0.2s;
// }
// .submit-btn:hover:not(:disabled) .btn-arrow { transform: translateX(2px); }

// /* ── SPINNER ── */
// .spinner {
//   width: 17px; height: 17px;
//   border: 2px solid rgba(255,255,255,0.3);
//   border-top-color: #fff;
//   border-radius: 50%;
//   animation: spin 0.75s linear infinite;
//   position: relative; z-index: 1;
// }
// @keyframes spin { to { transform: rotate(360deg); } }

// /* ── DIVIDER ── */
// .divider {
//   display: flex; align-items: center; gap: 12px;
//   margin: 22px 0;
//   animation: fadeUp 0.5s ease 0.48s both;
// }
// .divider-line { flex: 1; height: 1px; background: #f0f0f0; }
// .divider-txt { font-size: 12px; color: #d1d5db; font-weight: 500; }

// /* ── SOCIAL BTN ── */
// .social-btn {
//   width: 100%;
//   padding: 11px 20px;
//   border-radius: 12px;
//   border: 1.5px solid #e5e7eb;
//   background: white;
//   font-size: 13.5px;
//   font-weight: 600;
//   font-family: 'Instrument Sans', sans-serif;
//   cursor: pointer;
//   display: flex; align-items: center; justify-content: center; gap: 9px;
//   color: #374151;
//   transition: all 0.2s;
//   animation: fadeUp 0.5s ease 0.54s both;
// }
// .social-btn:hover { background: #f9fafb; border-color: #d1d5db; transform: translateY(-1px); box-shadow: 0 3px 10px rgba(0,0,0,0.06); }

// /* ── FOOTER ── */
// .form-footer {
//   margin-top: 24px;
//   text-align: center;
//   font-size: 12.5px;
//   color: #9ca3af;
//   animation: fadeUp 0.5s ease 0.58s both;
// }

// /* ── PASSWORD STRENGTH ── */
// .strength-bar {
//   display: flex; gap: 3px; margin-top: 7px;
// }
// .strength-seg {
//   flex: 1; height: 3px; border-radius: 2px;
//   background: #e5e7eb; transition: background 0.3s;
// }
// .strength-seg.s1 { background: #ef4444; }
// .strength-seg.s2 { background: #f59e0b; }
// .strength-seg.s3 { background: #3b82f6; }
// .strength-seg.s4 { background: #10b981; }
// .strength-label {
//   font-size: 11.5px; margin-top: 4px;
//   font-weight: 600;
// }
// .strength-label.s1 { color: #ef4444; }
// .strength-label.s2 { color: #f59e0b; }
// .strength-label.s3 { color: #3b82f6; }
// .strength-label.s4 { color: #10b981; }

// /* ── ANIMATIONS ── */
// @keyframes fadeDown {
//   from { opacity: 0; transform: translateY(-10px); }
//   to   { opacity: 1; transform: translateY(0); }
// }
// @keyframes fadeUp {
//   from { opacity: 0; transform: translateY(8px); }
//   to   { opacity: 1; transform: translateY(0); }
// }
// @keyframes shake {
//   0%,100% { transform: translateX(0); }
//   20%     { transform: translateX(-6px); }
//   40%     { transform: translateX(6px); }
//   60%     { transform: translateX(-4px); }
//   80%     { transform: translateX(4px); }
// }
// .shake { animation: shake 0.45s ease; }

// /* ── LIVE CLOCK ── */
// .live-clock {
//   font-size: 11.5px;
//   color: rgba(255,255,255,0.3);
//   font-variant-numeric: tabular-nums;
//   letter-spacing: 0.03em;
// }

// /* ── RESPONSIVE ── */
// @media (max-width: 820px) {
//   .login-left  { display: none; }
//   .login-right { width: 100%; padding: 40px 28px; min-height: 100vh; justify-content: center; }
// }
// `;

// /* ═══════════════════════════════════════════
//    HELPERS
// ═══════════════════════════════════════════ */
// const getPasswordStrength = (pw) => {
//     if (!pw) return 0;
//     let score = 0;
//     if (pw.length >= 8) score++;
//     if (/[A-Z]/.test(pw)) score++;
//     if (/[0-9]/.test(pw)) score++;
//     if (/[^A-Za-z0-9]/.test(pw)) score++;
//     return score;
// };
// const STRENGTH_LABELS = ['', 'Weak', 'Fair', 'Good', 'Strong'];
// const STRENGTH_CLS = ['', 's1', 's2', 's3', 's4'];

// /* ═══════════════════════════════════════════
//    COMPONENT
// ═══════════════════════════════════════════ */
// const Login = ({ setToken }) => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [showPw, setShowPw] = useState(false);
//     const [remember, setRemember] = useState(false);
//     const [loading, setLoading] = useState(false);
//     const [errors, setErrors] = useState({});
//     const [shake, setShake] = useState(false);
//     const [attempts, setAttempts] = useState(0);
//     const [locked, setLocked] = useState(false);
//     const [lockTimer, setLockTimer] = useState(0);
//     const [clock, setClock] = useState('');
//     const [pwFocused, setPwFocused] = useState(false);
//     const formRef = useRef(null);

//     /* Live clock */
//     useEffect(() => {
//         const tick = () => {
//             const now = new Date();
//             setClock(now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }));
//         };
//         tick();
//         const t = setInterval(tick, 1000);
//         return () => clearInterval(t);
//     }, []);

//     /* Lockout countdown */
//     useEffect(() => {
//         if (locked && lockTimer > 0) {
//             const t = setInterval(() => {
//                 setLockTimer(p => {
//                     if (p <= 1) { setLocked(false); setAttempts(0); clearInterval(t); return 0; }
//                     return p - 1;
//                 });
//             }, 1000);
//             return () => clearInterval(t);
//         }
//     }, [locked]);

//     /* Pre-fill remembered email */
//     useEffect(() => {
//         const saved = localStorage.getItem('admin_remember_email');
//         if (saved) { setEmail(saved); setRemember(true); }
//     }, []);

//     /* Validate */
//     const validate = () => {
//         const errs = {};
//         if (!email.trim()) errs.email = 'Email is required';
//         else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = 'Enter a valid email address';
//         if (!password) errs.password = 'Password is required';
//         else if (password.length < 6) errs.password = 'Password must be at least 6 characters';
//         setErrors(errs);
//         return Object.keys(errs).length === 0;
//     };

//     /* Submit */
//     const onSubmitHandler = async (e) => {
//         e.preventDefault();
//         if (locked) return;
//         if (!validate()) { triggerShake(); return; }

//         setLoading(true);
//         try {
//             const response = await axios.post(backendUrl + '/api/user/admin', { email, password });
//             if (response.data.success) {
//                 if (remember) localStorage.setItem('admin_remember_email', email);
//                 else localStorage.removeItem('admin_remember_email');
//                 toast.success('Welcome back! Redirecting…');
//                 setToken(response.data.token);
//             } else {
//                 const newAttempts = attempts + 1;
//                 setAttempts(newAttempts);
//                 triggerShake();
//                 if (newAttempts >= 5) {
//                     setLocked(true);
//                     setLockTimer(30);
//                     toast.error('Too many failed attempts. Locked for 30 seconds.');
//                 } else {
//                     toast.error(response.data.message || 'Invalid credentials');
//                     setErrors({ password: `Incorrect credentials (${5 - newAttempts} attempts left)` });
//                 }
//             }
//         } catch (error) {
//             console.error(error);
//             toast.error(error.response?.data?.message || error.message || 'Connection failed');
//             triggerShake();
//         } finally {
//             setLoading(false);
//         }
//     };

//     const triggerShake = () => {
//         setShake(true);
//         setTimeout(() => setShake(false), 500);
//     };

//     const pwStrength = getPasswordStrength(password);

//     return (
//         <>
//             <style>{CSS}</style>
//             <div className="login-root">

//                 {/* ── LEFT PANEL ── */}
//                 <div className="login-left">
//                     <div className="orb-1" />
//                     <div className="orb-2" />

//                     {/* Logo */}
//                     <div className="login-logo">
//                         <div className="login-logo-mark">A</div>
//                         <span>AdminHub</span>
//                     </div>

//                     {/* Hero */}
//                     <div className="login-hero">
//                         <h2>
//                             Manage your<br />
//                             <em>store with</em><br />
//                             confidence.
//                         </h2>
//                         <p>
//                             Your all-in-one admin dashboard for orders, products, users, and analytics. Everything you need in one place.
//                         </p>
//                     </div>

//                     {/* Trust badges */}
//                     <div className="login-badges">
//                         <div className="login-badge">
//                             <span className="login-badge-dot" />
//                             All systems operational
//                         </div>
//                         <div className="login-badge">
//                             🔒 256-bit SSL
//                         </div>
//                         <div className="live-clock">{clock}</div>
//                     </div>
//                 </div>

//                 {/* ── RIGHT PANEL ── */}
//                 <div className="login-right">

//                     {/* Mobile logo */}
//                     <div style={{ display: 'none' }} className="mobile-logo">
//                         <div className="login-logo-mark">A</div>
//                     </div>

//                     {/* Heading */}
//                     <div className="form-heading">
//                         <h3>Welcome back</h3>
//                         <p>Sign in to your admin account to continue</p>
//                     </div>

//                     {/* Locked banner */}
//                     {locked && (
//                         <div style={{
//                             padding: '12px 16px',
//                             background: '#fff8f8',
//                             border: '1.5px solid #fecaca',
//                             borderRadius: '12px',
//                             marginBottom: '20px',
//                             fontSize: '13px',
//                             color: '#ef4444',
//                             fontWeight: 600,
//                             display: 'flex',
//                             alignItems: 'center',
//                             gap: '8px'
//                         }}>
//                             <span style={{ fontSize: '16px' }}>🔒</span>
//                             Account locked. Try again in {lockTimer}s
//                         </div>
//                     )}

//                     {/* Form */}
//                     <form
//                         ref={formRef}
//                         onSubmit={onSubmitHandler}
//                         noValidate
//                         className={shake ? 'shake' : ''}
//                         style={{ position: 'relative', zIndex: 1 }}
//                     >
//                         {/* Email */}
//                         <div className="field" style={{ '--delay': '0.22s' }}>
//                             <label htmlFor="email">Email Address</label>
//                             <div className="field-wrap">
//                                 <span className="field-ico">✉</span>
//                                 <input
//                                     id="email"
//                                     type="email"
//                                     className={`field-input ${errors.email ? 'err' : ''}`}
//                                     placeholder="admin@yourbrand.com"
//                                     value={email}
//                                     onChange={e => { setEmail(e.target.value); if (errors.email) setErrors(p => ({ ...p, email: '' })); }}
//                                     autoComplete="email"
//                                     disabled={locked || loading}
//                                 />
//                                 {email && !errors.email && (
//                                     <span className="field-ico-right" style={{ color: '#10b981', fontSize: '13px' }}>✓</span>
//                                 )}
//                             </div>
//                             {errors.email && (
//                                 <p className="field-err">
//                                     <span>⚠</span> {errors.email}
//                                 </p>
//                             )}
//                         </div>

//                         {/* Password */}
//                         <div className="field" style={{ '--delay': '0.3s' }}>
//                             <label htmlFor="password">Password</label>
//                             <div className="field-wrap">
//                                 <span className="field-ico">🔑</span>
//                                 <input
//                                     id="password"
//                                     type={showPw ? 'text' : 'password'}
//                                     className={`field-input ${errors.password ? 'err' : ''}`}
//                                     placeholder="Enter your password"
//                                     value={password}
//                                     onChange={e => { setPassword(e.target.value); if (errors.password) setErrors(p => ({ ...p, password: '' })); }}
//                                     onFocus={() => setPwFocused(true)}
//                                     onBlur={() => setPwFocused(false)}
//                                     autoComplete="current-password"
//                                     disabled={locked || loading}
//                                     style={{ paddingRight: '44px' }}
//                                 />
//                                 <span className="field-ico-right" onClick={() => setShowPw(p => !p)} title={showPw ? 'Hide password' : 'Show password'}>
//                                     {showPw ? '🙈' : '👁'}
//                                 </span>
//                             </div>
//                             {/* Password strength */}
//                             {password && pwFocused && (
//                                 <>
//                                     <div className="strength-bar">
//                                         {[1, 2, 3, 4].map(i => (
//                                             <div key={i} className={`strength-seg ${i <= pwStrength ? STRENGTH_CLS[pwStrength] : ''}`} />
//                                         ))}
//                                     </div>
//                                     {pwStrength > 0 && (
//                                         <p className={`strength-label ${STRENGTH_CLS[pwStrength]}`}>{STRENGTH_LABELS[pwStrength]} password</p>
//                                     )}
//                                 </>
//                             )}
//                             {errors.password && (
//                                 <p className="field-err">
//                                     <span>⚠</span> {errors.password}
//                                 </p>
//                             )}
//                         </div>

//                         {/* Remember + Forgot */}
//                         <div className="form-extras">
//                             <label className="remember" onClick={() => setRemember(p => !p)}>
//                                 <div className={`remember-box ${remember ? 'checked' : ''}`} />
//                                 <span className="remember-label">Remember me</span>
//                             </label>
//                             <button type="button" className="forgot-link">
//                                 Forgot password?
//                             </button>
//                         </div>

//                         {/* Submit */}
//                         <button
//                             type="submit"
//                             className="submit-btn"
//                             disabled={loading || locked}
//                         >
//                             {loading ? (
//                                 <>
//                                     <div className="spinner" />
//                                     <span>Authenticating…</span>
//                                 </>
//                             ) : locked ? (
//                                 <>
//                                     <span>🔒 Locked ({lockTimer}s)</span>
//                                 </>
//                             ) : (
//                                 <>
//                                     <span>Sign in to Dashboard</span>
//                                     <div className="btn-arrow">→</div>
//                                 </>
//                             )}
//                         </button>

//                         {/* Divider */}
//                         <div className="divider">
//                             <div className="divider-line" />
//                             <span className="divider-txt">or continue with</span>
//                             <div className="divider-line" />
//                         </div>

//                         {/* Google SSO (UI only) */}
//                         <button
//                             type="button"
//                             className="social-btn"
//                             onClick={() => toast.info('Google SSO coming soon')}
//                         >
//                             <svg width="18" height="18" viewBox="0 0 24 24">
//                                 <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
//                                 <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
//                                 <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
//                                 <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
//                             </svg>
//                             Continue with Google
//                         </button>

//                         {/* Footer */}
//                         <div className="form-footer">
//                             <span>Having trouble? </span>
//                             <button
//                                 type="button"
//                                 style={{ color: '#6366f1', fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer', fontSize: '12.5px' }}
//                                 onClick={() => toast.info('Contact your system administrator')}
//                             >
//                                 Contact support
//                             </button>
//                         </div>
//                     </form>
//                 </div>

//             </div>
//         </>
//     );
// };

// export default Login;


import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { backendUrl } from '../../App'

const Login = ({ setToken }) => {
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPw, setShowPw] = useState(false)
    const [remember, setRemember] = useState(false)
    const [loading, setLoading] = useState(false)
    const [errors, setErrors] = useState({})

    // Restore remembered email on mount
    useEffect(() => {
        const saved = localStorage.getItem('ll_admin_email')
        if (saved) { setEmail(saved); setRemember(true) }
    }, [])

    const clearErr = (field) => setErrors(p => ({ ...p, [field]: '' }))

    const validate = () => {
        const e = {}
        if (!email.trim()) e.email = 'Email is required'
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = 'Enter a valid email address'
        if (!password) e.password = 'Password is required'
        else if (password.length < 6) e.password = 'Minimum 6 characters'
        setErrors(e)
        return !Object.keys(e).length
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault()
        if (!validate()) return

        setLoading(true)
        try {
            const response = await axios.post(backendUrl + '/api/user/admin', { email, password })

            if (response.data.success) {
                // Save remember-me preference
                if (remember) localStorage.setItem('ll_admin_email', email)
                else localStorage.removeItem('ll_admin_email')

                // Set token (App.jsx stores it in localStorage via useEffect)
                setToken(response.data.token)

                // Toast success — matches App.jsx ToastContainer (top-right, colored theme)
                toast.success('🎉 Welcome back! Redirecting to dashboard…')

                // Navigate to dashboard
                setTimeout(() => navigate('/'), 800)

            } else {
                toast.error(response.data.message || 'Invalid credentials')
            }

        } catch (error) {
            console.log(error)
            toast.error(error.response?.data?.message || error.message || 'Something went wrong')
        } finally {
            setLoading(false)
        }
    }

    const emailValid = email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && !errors.email

    return (
        <div className='min-h-screen w-full flex items-center justify-center bg-[#F4F5FA] px-4'>

            {/* ── Subtle background blobs ── */}
            <div className='pointer-events-none fixed top-[-200px] right-[-130px] w-[580px] h-[580px] rounded-full'
                style={{ background: 'radial-gradient(circle, rgba(108,99,255,0.12) 0%, transparent 65%)' }} />
            <div className='pointer-events-none fixed bottom-[-110px] left-[-80px] w-[420px] h-[420px] rounded-full'
                style={{ background: 'radial-gradient(circle, rgba(245,166,35,0.08) 0%, transparent 65%)' }} />
            <div className='pointer-events-none fixed inset-0 z-0'
                style={{ backgroundImage: 'radial-gradient(circle, rgba(108,99,255,0.06) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />

            {/* ══ CARD ══ */}
            <div
                className='relative z-10 w-full max-w-[410px] bg-white rounded-2xl overflow-hidden border border-gray-100'
                style={{ boxShadow: '0 20px 60px rgba(108,99,255,0.13), 0 4px 16px rgba(0,0,0,0.05)' }}
            >

                {/* ── Gradient band header ── */}
                <div
                    className='relative px-8 pt-7 pb-6 overflow-hidden'
                    style={{ background: 'linear-gradient(135deg, #6C63FF 0%, #8C86FF 55%, #A994FF 100%)' }}
                >
                    {/* Decorative circles */}
                    <div className='pointer-events-none absolute -top-12 -right-12 w-40 h-40 rounded-full bg-white/10' />
                    <div className='pointer-events-none absolute -bottom-8 left-6  w-24 h-24 rounded-full bg-white/[0.07]' />

                    {/* Brand */}
                    <div className='relative z-10 flex items-center gap-2.5 mb-5'>
                        <div className='w-9 h-9 rounded-[10px] flex items-center justify-center bg-white/20 border border-white/30 flex-shrink-0'>
                            <svg width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='white' strokeWidth='2.2' strokeLinecap='round' strokeLinejoin='round'>
                                <polygon points='12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5' />
                                <line x1='12' y1='2' x2='12' y2='22' />
                                <line x1='2' y1='8.5' x2='22' y2='8.5' />
                                <line x1='2' y1='15.5' x2='22' y2='15.5' />
                            </svg>
                        </div>
                        <div>
                            <p className='text-[15px] font-extrabold text-white leading-none tracking-tight'>LL Leather</p>
                            <p className='text-[9.5px] font-semibold text-white/55 tracking-[0.1em] uppercase mt-0.5'>Lovers · Admin</p>
                        </div>
                        <span
                            className='ml-auto text-[9px] font-extrabold text-white uppercase tracking-wider px-2.5 py-1 rounded-full flex-shrink-0'
                            style={{ background: '#F5A623' }}
                        >
                            ⚡ PRO
                        </span>
                    </div>

                    {/* Heading */}
                    <div className='relative z-10'>
                        <h1 className='text-[21px] font-extrabold text-white tracking-tight leading-snug mb-1'>
                            Admin Login 🔐
                        </h1>
                        <p className='text-[13px] text-white/60 font-normal'>
                            Enter your credentials to continue
                        </p>
                    </div>
                </div>

                {/* ── Form body ── */}
                <div className='px-8 py-6'>

                    {/* Status pills */}
                    <div className='flex items-center justify-center gap-4 mb-6'>
                        <div className='flex items-center gap-1.5 text-[11.5px] font-medium text-gray-400'>
                            <span className='w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0 animate-pulse' />
                            All systems online
                        </div>
                        <div className='w-px h-3 bg-gray-200' />
                        <div className='flex items-center gap-1.5 text-[11.5px] font-medium text-gray-400'>
                            <span className='w-1.5 h-1.5 rounded-full bg-[#6C63FF] flex-shrink-0' />
                            SSL secured
                        </div>
                    </div>

                    <form onSubmit={onSubmitHandler} noValidate>

                        {/* ── Email ── */}
                        <div className='mb-4'>
                            <label className='block text-[13px] font-semibold text-gray-600 mb-1.5'>
                                Email Address
                            </label>
                            <div className='relative group'>
                                <span className='absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-[#6C63FF] transition-colors pointer-events-none'>
                                    <svg width='15' height='15' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
                                        <path d='M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z' />
                                        <polyline points='22,6 12,13 2,6' />
                                    </svg>
                                </span>
                                <input
                                    type='email'
                                    value={email}
                                    onChange={e => { setEmail(e.target.value); clearErr('email') }}
                                    placeholder='admin@llleather.com'
                                    autoComplete='email'
                                    disabled={loading}
                                    className={[
                                        'w-full pl-10 pr-10 py-3 text-[13.5px] font-medium rounded-xl border outline-none transition-all',
                                        'bg-gray-50 text-gray-900 placeholder:text-gray-300',
                                        'focus:bg-white focus:border-[#6C63FF] focus:ring-4 focus:ring-[#6C63FF]/10',
                                        'disabled:opacity-50 disabled:cursor-not-allowed',
                                        errors.email ? 'border-red-400 bg-red-50/40' : 'border-gray-200',
                                    ].join(' ')}
                                />
                                {emailValid && (
                                    <span className='absolute right-3.5 top-1/2 -translate-y-1/2 text-emerald-500 text-sm font-bold'>✓</span>
                                )}
                            </div>
                            {errors.email && (
                                <p className='flex items-center gap-1 mt-1.5 text-[11.5px] font-medium text-red-500'>
                                    <svg width='11' height='11' viewBox='0 0 24 24' fill='currentColor'><path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z' /></svg>
                                    {errors.email}
                                </p>
                            )}
                        </div>

                        {/* ── Password ── */}
                        <div className='mb-3'>
                            <label className='block text-[13px] font-semibold text-gray-600 mb-1.5'>
                                Password
                            </label>
                            <div className='relative group'>
                                <span className='absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-[#6C63FF] transition-colors pointer-events-none'>
                                    <svg width='15' height='15' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
                                        <rect x='3' y='11' width='18' height='11' rx='2' ry='2' />
                                        <path d='M7 11V7a5 5 0 0110 0v4' />
                                    </svg>
                                </span>
                                <input
                                    type={showPw ? 'text' : 'password'}
                                    value={password}
                                    onChange={e => { setPassword(e.target.value); clearErr('password') }}
                                    placeholder='Enter your password'
                                    autoComplete='current-password'
                                    disabled={loading}
                                    className={[
                                        'w-full pl-10 pr-12 py-3 text-[13.5px] font-medium rounded-xl border outline-none transition-all',
                                        'bg-gray-50 text-gray-900 placeholder:text-gray-300',
                                        'focus:bg-white focus:border-[#6C63FF] focus:ring-4 focus:ring-[#6C63FF]/10',
                                        'disabled:opacity-50 disabled:cursor-not-allowed',
                                        errors.password ? 'border-red-400 bg-red-50/40' : 'border-gray-200',
                                    ].join(' ')}
                                />
                                <button
                                    type='button'
                                    onClick={() => setShowPw(p => !p)}
                                    tabIndex={-1}
                                    className='absolute right-3 top-1/2 -translate-y-1/2 w-7 h-7 rounded-lg flex items-center justify-center text-gray-300 hover:text-gray-500 hover:bg-gray-100 transition-all'
                                >
                                    {showPw ? (
                                        <svg width='15' height='15' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
                                            <path d='M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24' />
                                            <line x1='1' y1='1' x2='23' y2='23' />
                                        </svg>
                                    ) : (
                                        <svg width='15' height='15' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
                                            <path d='M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z' />
                                            <circle cx='12' cy='12' r='3' />
                                        </svg>
                                    )}
                                </button>
                            </div>
                            {errors.password && (
                                <p className='flex items-center gap-1 mt-1.5 text-[11.5px] font-medium text-red-500'>
                                    <svg width='11' height='11' viewBox='0 0 24 24' fill='currentColor'><path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z' /></svg>
                                    {errors.password}
                                </p>
                            )}
                        </div>

                        {/* ── Remember me + Forgot password ── */}
                        <div className='flex items-center justify-between mt-4 mb-5'>
                            <label
                                className='flex items-center gap-2 cursor-pointer select-none'
                                onClick={() => setRemember(p => !p)}
                            >
                                <div className={`w-[18px] h-[18px] rounded-[5px] border-2 flex items-center justify-center flex-shrink-0 transition-all ${remember ? 'bg-[#6C63FF] border-[#6C63FF]' : 'bg-white border-gray-300'}`}>
                                    {remember && <span className='text-white text-[10px] font-black leading-none'>✓</span>}
                                </div>
                                <span className='text-[13px] font-medium text-gray-500'>Keep me signed in</span>
                            </label>

                            <button
                                type='button'
                                onClick={() => navigate('/forget-password')}
                                className='text-[13px] font-semibold text-[#6C63FF] hover:text-[#5A52E8] hover:underline transition-colors bg-transparent border-none p-0 cursor-pointer'
                            >
                                Forgot password?
                            </button>
                        </div>

                        {/* ── Submit button ── */}
                        <button
                            type='submit'
                            disabled={loading}
                            className='w-full flex items-center justify-center gap-2.5 py-3.5 px-5 rounded-xl text-[14.5px] font-bold text-white transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed hover:brightness-110 hover:-translate-y-0.5 active:translate-y-0'
                            style={{
                                background: 'linear-gradient(135deg, #6C63FF 0%, #8C86FF 100%)',
                                boxShadow: '0 4px 18px rgba(108,99,255,0.40)',
                            }}
                        >
                            {loading ? (
                                <>
                                    <span className='w-[17px] h-[17px] rounded-full border-2 border-white/30 border-t-white flex-shrink-0 animate-spin' />
                                    <span>Signing in…</span>
                                </>
                            ) : (
                                <>
                                    <span>Login to Dashboard</span>
                                    <span className='w-[22px] h-[22px] rounded-full bg-white/25 flex items-center justify-center text-[12px]'>→</span>
                                </>
                            )}
                        </button>

                    </form>
                </div>

                {/* ── Footer ── */}
                <div className='px-8 py-4 border-t border-gray-100 flex items-center justify-center gap-1.5'>
                    <span className='text-[12px] text-gray-400 font-medium'>Having trouble?</span>
                    <button
                        onClick={() => navigate('/forget-password')}
                        className='text-[12px] font-bold text-[#6C63FF] hover:underline transition-colors bg-transparent border-none cursor-pointer p-0'
                    >
                        Reset password →
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Login