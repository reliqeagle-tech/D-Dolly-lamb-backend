// import React, { useState } from 'react'
// import { assets } from '../../assets/assets'
// import { Link, NavLink } from 'react-router-dom'
// import Button from '@mui/material/Button'
// import { CgLogIn } from "react-icons/cg";
// import { FiUser } from "react-icons/fi";
// const ForgotPassword = () => {



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
//                         <Button className='!text-gray-800 font-medium !px-4 !rounded-full flex gap-2'> <FiUser className='text-lg' />Sign Up</Button>
//                     </NavLink>
//                 </div>
//             </header>
//             <img src={assets.login_bg} alt="login-bg" className='w-full h-full fixed top-0 left-0 opacity-5 pointer-events-none' />
//             <div className='loginBox card w-[60%] lg:w-[45%] h-full mx-auto mt-20 !shadow-lg mb-2 py-10 rounded-lg bg-[#ffff] z-999'>
//                 <div className='text-center '>
//                     <img src={assets.logo_3} className='m-auto ' alt="" />
//                 </div>
//                 <h1 className='text-center text-lg lg:text-[35px] font-bold text-gray-800 leading-tight mt-1'>Having trouble to sign in? <br /> <span className='text-primary'>Reset your password</span></h1>
//                 <form className='w-full px-16 mt-3 mb-8'>
//                     <div className='form-group mb-4 w-full'>
//                         <h4 className='text-[16px] text-gray-700 font-medium mb-1 ml-2 '>Email</h4>
//                         <input type="email" className='w-full h-[40px] lg:h-[45px] border-2 border-gray-300 rounded-md focus:border-gray-600 focus:outline-none px-3' placeholder='Enter your email' />
//                     </div>
//                     <div className='md:px-8 lg:px-16'>
//                         <Button className='btn-blue w-full !font-[500]'>Reset Password</Button>
//                         <div className='flex items-center justify-center font-medium text-sm md:text-base text-gray-800 p-2'>
//                             <span>Don't want to reset?</span>
//                             <Link to='/forget-password' className='text-primary font-semibold underline hover:no-underline hover:text-gray-700'>
//                                 Forget Password?
//                             </Link>
//                         </div>
//                     </div>
//                 </form>
//             </div>
//         </section>
//     )
// }

// export default ForgotPassword


import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'
import { backendUrl } from '../../App'

const ForgotPassword = () => {
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false)
    const [sent, setSent] = useState(false)
    const [error, setError] = useState('')

    const validate = () => {
        if (!email.trim()) { setError('Email address is required'); return false }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setError('Enter a valid email address'); return false }
        setError('')
        return true
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!validate()) return
        setLoading(true)
        try {
            const res = await axios.post(backendUrl + '/api/user/forgot-password', { email })
            if (res.data.success) {
                setSent(true)
                toast.success('📧 Reset link sent! Check your inbox.')
            } else {
                toast.error(res.data.message || 'Failed to send reset link')
            }
        } catch (err) {
            toast.error(err.response?.data?.message || err.message || 'Something went wrong')
        } finally {
            setLoading(false)
        }
    }

    const emailValid = email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && !error

    return (
        <div className='min-h-screen w-full flex items-center justify-center bg-[#F4F5FA] px-4'>

            {/* bg blobs */}
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

                {/* ── gradient band ── */}
                <div
                    className='relative px-8 pt-7 pb-6 overflow-hidden'
                    style={{ background: 'linear-gradient(135deg, #6C63FF 0%, #8C86FF 55%, #A994FF 100%)' }}
                >
                    <div className='pointer-events-none absolute -top-12 -right-12 w-40 h-40 rounded-full bg-white/10' />
                    <div className='pointer-events-none absolute -bottom-8 left-6  w-24 h-24 rounded-full bg-white/[0.07]' />

                    {/* brand */}
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

                    {/* heading */}
                    <div className='relative z-10'>
                        <div className='w-10 h-10 rounded-xl bg-white/20 border border-white/30 flex items-center justify-center mb-3'>
                            {/* lock icon */}
                            <svg width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='white' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
                                <rect x='3' y='11' width='18' height='11' rx='2' ry='2' />
                                <path d='M7 11V7a5 5 0 0110 0v4' />
                            </svg>
                        </div>
                        <h1 className='text-[21px] font-extrabold text-white tracking-tight leading-snug mb-1'>
                            Forgot Password? 🔒
                        </h1>
                        <p className='text-[13px] text-white/60 font-normal'>
                            Enter your email and we'll send you a reset link
                        </p>
                    </div>
                </div>

                {/* ── body ── */}
                <div className='px-8 py-6'>

                    {/* ── SUCCESS STATE ── */}
                    {sent ? (
                        <div className='text-center py-4'>
                            {/* checkmark circle */}
                            <div className='w-16 h-16 rounded-full bg-emerald-50 border-2 border-emerald-200 flex items-center justify-center mx-auto mb-4'>
                                <svg width='28' height='28' viewBox='0 0 24 24' fill='none' stroke='#22C55E' strokeWidth='2.5' strokeLinecap='round' strokeLinejoin='round'>
                                    <polyline points='20 6 9 17 4 12' />
                                </svg>
                            </div>
                            <h3 className='text-[17px] font-extrabold text-gray-800 mb-2'>Check your inbox!</h3>
                            <p className='text-[13px] text-gray-500 leading-relaxed mb-1'>
                                We've sent a password reset link to
                            </p>
                            <p className='text-[13.5px] font-bold text-[#6C63FF] mb-5'>{email}</p>
                            <p className='text-[12px] text-gray-400 mb-6 leading-relaxed'>
                                Didn't receive it? Check your spam folder or
                                <button
                                    onClick={() => setSent(false)}
                                    className='text-[#6C63FF] font-semibold ml-1 hover:underline bg-transparent border-none cursor-pointer p-0'
                                >
                                    try again.
                                </button>
                            </p>
                            <button
                                onClick={() => navigate('/login')}
                                className='w-full flex items-center justify-center gap-2.5 py-3.5 px-5 rounded-xl text-[14.5px] font-bold text-white transition-all duration-200 hover:brightness-110 hover:-translate-y-0.5 active:translate-y-0'
                                style={{
                                    background: 'linear-gradient(135deg, #6C63FF 0%, #8C86FF 100%)',
                                    boxShadow: '0 4px 18px rgba(108,99,255,0.40)',
                                }}
                            >
                                <span>Back to Login</span>
                                <span className='w-[22px] h-[22px] rounded-full bg-white/25 flex items-center justify-center text-[12px]'>→</span>
                            </button>
                        </div>

                    ) : (
                        /* ── FORM STATE ── */
                        <>
                            {/* info hint */}
                            <div className='flex items-start gap-2.5 px-3.5 py-3 mb-5 rounded-xl border border-[#6C63FF]/20 bg-[#6C63FF]/[0.05]'>
                                <span className='text-[#6C63FF] mt-0.5 flex-shrink-0'>
                                    <svg width='14' height='14' viewBox='0 0 24 24' fill='currentColor'>
                                        <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z' />
                                    </svg>
                                </span>
                                <p className='text-[12px] font-medium text-[#6C63FF] leading-relaxed'>
                                    Enter the email linked to your admin account and we'll send a reset link within seconds.
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} noValidate>

                                {/* email field */}
                                <div className='mb-5'>
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
                                            onChange={e => { setEmail(e.target.value); setError('') }}
                                            placeholder='admin@llleather.com'
                                            autoComplete='email'
                                            disabled={loading}
                                            className={[
                                                'w-full pl-10 pr-10 py-3 text-[13.5px] font-medium rounded-xl border outline-none transition-all',
                                                'bg-gray-50 text-gray-900 placeholder:text-gray-300',
                                                'focus:bg-white focus:border-[#6C63FF] focus:ring-4 focus:ring-[#6C63FF]/10',
                                                'disabled:opacity-50 disabled:cursor-not-allowed',
                                                error ? 'border-red-400 bg-red-50/40' : emailValid ? 'border-emerald-400' : 'border-gray-200',
                                            ].join(' ')}
                                        />
                                        {emailValid && (
                                            <span className='absolute right-3.5 top-1/2 -translate-y-1/2 text-emerald-500 text-sm font-bold'>✓</span>
                                        )}
                                    </div>
                                    {error && (
                                        <p className='flex items-center gap-1 mt-1.5 text-[11.5px] font-medium text-red-500'>
                                            <svg width='11' height='11' viewBox='0 0 24 24' fill='currentColor'><path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z' /></svg>
                                            {error}
                                        </p>
                                    )}
                                </div>

                                {/* submit */}
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
                                            <span>Sending reset link…</span>
                                        </>
                                    ) : (
                                        <>
                                            <span>Send Reset Link</span>
                                            <span className='w-[22px] h-[22px] rounded-full bg-white/25 flex items-center justify-center text-[12px]'>→</span>
                                        </>
                                    )}
                                </button>

                            </form>
                        </>
                    )}
                </div>

                {/* ── footer ── */}
                <div className='px-8 py-4 border-t border-gray-100 flex items-center justify-center gap-1.5'>
                    <span className='text-[12px] text-gray-400 font-medium'>Remember your password?</span>
                    <button
                        onClick={() => navigate('/login')}
                        className='text-[12px] font-bold text-[#6C63FF] hover:underline transition-colors bg-transparent border-none cursor-pointer p-0'
                    >
                        Back to Login →
                    </button>
                </div>

            </div>
        </div>
    )
}

export default ForgotPassword