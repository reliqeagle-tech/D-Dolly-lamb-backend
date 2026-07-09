import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'
import { backendUrl } from '../../App'

const ChangePassword = () => {
    const navigate = useNavigate()

    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [showNew, setShowNew] = useState(false)
    const [showConfirm, setShowConfirm] = useState(false)
    const [loading, setLoading] = useState(false)
    const [errors, setErrors] = useState({})

    /* ── password strength ── */
    const getStrength = (pw) => {
        if (!pw) return 0
        let s = 0
        if (pw.length >= 8) s++
        if (/[A-Z]/.test(pw)) s++
        if (/[0-9]/.test(pw)) s++
        if (/[^A-Za-z0-9]/.test(pw)) s++
        return s
    }
    const strength = getStrength(newPassword)
    const STR_COLOR = ['', 'bg-red-400', 'bg-amber-400', 'bg-blue-400', 'bg-emerald-500']
    const STR_TEXT = ['', 'Weak', 'Fair', 'Good', 'Strong']
    const STR_CLR = ['', 'text-red-400', 'text-amber-400', 'text-blue-500', 'text-emerald-500']
    const STR_EMOJI = ['', '😬', '😐', '🙂', '💪']

    const clearErr = (f) => setErrors(p => ({ ...p, [f]: '' }))

    const validate = () => {
        const e = {}
        if (!newPassword) e.newPassword = 'New password is required'
        else if (newPassword.length < 8) e.newPassword = 'Minimum 8 characters required'
        if (!confirmPassword) e.confirmPassword = 'Please confirm your password'
        else if (newPassword !== confirmPassword) e.confirmPassword = 'Passwords do not match'
        setErrors(e)
        return !Object.keys(e).length
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!validate()) return
        setLoading(true)
        try {
            /* adjust endpoint to your actual API */
            const res = await axios.post(backendUrl + '/api/user/change-password', { newPassword })
            if (res.data.success) {
                toast.success('🎉 Password changed successfully! Please log in again.')
                setTimeout(() => navigate('/login'), 1000)
            } else {
                toast.error(res.data.message || 'Failed to change password')
            }
        } catch (err) {
            toast.error(err.response?.data?.message || err.message || 'Something went wrong')
        } finally {
            setLoading(false)
        }
    }

    const passwordsMatch = confirmPassword && newPassword === confirmPassword

    /* ── eye button ── */
    const EyeBtn = ({ show, onToggle }) => (
        <button
            type='button'
            onClick={onToggle}
            tabIndex={-1}
            className='absolute right-3 top-1/2 -translate-y-1/2 w-7 h-7 rounded-lg flex items-center justify-center text-gray-300 hover:text-gray-500 hover:bg-gray-100 transition-all'
        >
            {show ? (
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
    )

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
                            <svg width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='white' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
                                <path d='M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4' />
                            </svg>
                        </div>
                        <h1 className='text-[21px] font-extrabold text-white tracking-tight leading-snug mb-1'>
                            Change Password 🔑
                        </h1>
                        <p className='text-[13px] text-white/60 font-normal'>
                            Set a new secure password for your account
                        </p>
                    </div>
                </div>

                {/* ── body ── */}
                <div className='px-8 py-6'>

                    {/* password rules hint */}
                    <div className='flex items-start gap-2.5 px-3.5 py-3 mb-5 rounded-xl border border-[#6C63FF]/20 bg-[#6C63FF]/[0.05]'>
                        <span className='text-[#6C63FF] mt-0.5 flex-shrink-0'>
                            <svg width='14' height='14' viewBox='0 0 24 24' fill='currentColor'>
                                <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z' />
                            </svg>
                        </span>
                        <p className='text-[12px] font-medium text-[#6C63FF] leading-relaxed'>
                            Use 8+ characters with uppercase, numbers &amp; symbols for a strong password.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} noValidate>

                        {/* ── New Password ── */}
                        <div className='mb-4'>
                            <label className='block text-[13px] font-semibold text-gray-600 mb-1.5'>
                                New Password
                            </label>
                            <div className='relative group'>
                                <span className='absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-[#6C63FF] transition-colors pointer-events-none'>
                                    <svg width='15' height='15' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
                                        <rect x='3' y='11' width='18' height='11' rx='2' ry='2' />
                                        <path d='M7 11V7a5 5 0 0110 0v4' />
                                    </svg>
                                </span>
                                <input
                                    type={showNew ? 'text' : 'password'}
                                    value={newPassword}
                                    onChange={e => { setNewPassword(e.target.value); clearErr('newPassword') }}
                                    placeholder='Enter new password'
                                    disabled={loading}
                                    className={[
                                        'w-full pl-10 pr-12 py-3 text-[13.5px] font-medium rounded-xl border outline-none transition-all',
                                        'bg-gray-50 text-gray-900 placeholder:text-gray-300',
                                        'focus:bg-white focus:border-[#6C63FF] focus:ring-4 focus:ring-[#6C63FF]/10',
                                        'disabled:opacity-50 disabled:cursor-not-allowed',
                                        errors.newPassword ? 'border-red-400 bg-red-50/40' : 'border-gray-200',
                                    ].join(' ')}
                                />
                                <EyeBtn show={showNew} onToggle={() => setShowNew(p => !p)} />
                            </div>

                            {/* strength meter */}
                            {newPassword && (
                                <div className='mt-2'>
                                    <div className='flex gap-1 mb-1'>
                                        {[1, 2, 3, 4].map(i => (
                                            <div
                                                key={i}
                                                className={`h-1 flex-1 rounded-full transition-all duration-300 ${i <= strength ? STR_COLOR[strength] : 'bg-gray-200'}`}
                                            />
                                        ))}
                                    </div>
                                    {strength > 0 && (
                                        <p className={`text-[11px] font-bold flex items-center gap-1 ${STR_CLR[strength]}`}>
                                            <span>{STR_EMOJI[strength]}</span>
                                            <span>{STR_TEXT[strength]} password</span>
                                        </p>
                                    )}
                                </div>
                            )}

                            {errors.newPassword && (
                                <p className='flex items-center gap-1 mt-1.5 text-[11.5px] font-medium text-red-500'>
                                    <svg width='11' height='11' viewBox='0 0 24 24' fill='currentColor'><path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z' /></svg>
                                    {errors.newPassword}
                                </p>
                            )}
                        </div>

                        {/* ── Confirm Password ── */}
                        <div className='mb-5'>
                            <label className='block text-[13px] font-semibold text-gray-600 mb-1.5'>
                                Confirm Password
                            </label>
                            <div className='relative group'>
                                <span className='absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-[#6C63FF] transition-colors pointer-events-none'>
                                    <svg width='15' height='15' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
                                        <path d='M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' />
                                    </svg>
                                </span>
                                <input
                                    type={showConfirm ? 'text' : 'password'}
                                    value={confirmPassword}
                                    onChange={e => { setConfirmPassword(e.target.value); clearErr('confirmPassword') }}
                                    placeholder='Re-enter new password'
                                    disabled={loading}
                                    className={[
                                        'w-full pl-10 pr-12 py-3 text-[13.5px] font-medium rounded-xl border outline-none transition-all',
                                        'bg-gray-50 text-gray-900 placeholder:text-gray-300',
                                        'focus:bg-white focus:border-[#6C63FF] focus:ring-4 focus:ring-[#6C63FF]/10',
                                        'disabled:opacity-50 disabled:cursor-not-allowed',
                                        errors.confirmPassword ? 'border-red-400 bg-red-50/40'
                                            : passwordsMatch ? 'border-emerald-400'
                                                : 'border-gray-200',
                                    ].join(' ')}
                                />
                                {/* match check */}
                                {passwordsMatch && (
                                    <span className='absolute right-10 top-1/2 -translate-y-1/2 text-emerald-500 text-sm font-bold'>✓</span>
                                )}
                                <EyeBtn show={showConfirm} onToggle={() => setShowConfirm(p => !p)} />
                            </div>
                            {errors.confirmPassword && (
                                <p className='flex items-center gap-1 mt-1.5 text-[11.5px] font-medium text-red-500'>
                                    <svg width='11' height='11' viewBox='0 0 24 24' fill='currentColor'><path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z' /></svg>
                                    {errors.confirmPassword}
                                </p>
                            )}
                        </div>

                        {/* ── Submit ── */}
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
                                    <span>Updating password…</span>
                                </>
                            ) : (
                                <>
                                    <span>Update Password</span>
                                    <span className='w-[22px] h-[22px] rounded-full bg-white/25 flex items-center justify-center text-[12px]'>→</span>
                                </>
                            )}
                        </button>

                    </form>
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

export default ChangePassword