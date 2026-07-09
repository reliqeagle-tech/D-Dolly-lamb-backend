import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { backendUrl } from '../../App'

const B = {
    bg: '#F4F2EE', surface: '#FAFAF8', surface2: '#FFFFFF', surface3: '#F0EDE8', bgHover: '#EDE9E2',
    border: '#E0DBD3', borderSoft: '#EDE9E2', borderFocus: '#A8D5BC', borderMid: '#C8C2B8',
    navy: '#1C2B3A', navyMid: '#2E4057', navySoft: '#4A6070', navyGhost: '#8FA0AD',
    green: '#1A7A4A', greenHover: '#2A9960', greenBg: '#E8F4EE', greenBorder: '#A8D5BC', greenLight: '#D1EAD8',
    champ: '#B8985A', champBg: '#FBF5E8', champBorder: '#DBC98A', champText: '#8B6914',
    emerald: { text: '#065F2C', bg: '#E8F4EE', dot: '#1A7A4A', border: '#A8D5BC' },
    red: { text: '#991B1B', bg: '#FEF2F2', dot: '#EF4444', border: '#FECACA' },
}

const LogoMark = () => (
    <svg width="38" height="38" viewBox="0 0 38 38" fill="none" style={{ flexShrink: 0 }}>
        <rect width="38" height="38" rx="9" fill={B.greenBg} />
        <path d="M19 5L33 19L19 33L5 19L19 5Z" stroke={B.green} strokeWidth="1.5" fill="none" strokeLinejoin="round" />
        <path d="M19 5L33 19L19 33L5 19L19 5Z" fill={B.green} fillOpacity="0.07" />
        <text x="13.5" y="24" fontFamily="Georgia, serif" fontSize="14" fontWeight="900" fill={B.green}>D</text>
    </svg>
)

const Login = ({ setToken }) => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPw, setShowPw] = useState(false)
    const [remember, setRemember] = useState(false)
    const [loading, setLoading] = useState(false)
    const [errors, setErrors] = useState({})
    const [emailFocus, setEmailFocus] = useState(false)
    const [pwFocus, setPwFocus] = useState(false)

    useEffect(() => {
        const saved = localStorage.getItem('ddl_admin_email')
        if (saved) { setEmail(saved); setRemember(true) }
    }, [])

    const clearErr = field => setErrors(p => ({ ...p, [field]: '' }))

    const validate = () => {
        const e = {}
        if (!email.trim()) e.email = 'Email is required'
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = 'Enter a valid email address'
        if (!password) e.password = 'Password is required'
        else if (password.length < 6) e.password = 'Minimum 6 characters'
        setErrors(e)
        return !Object.keys(e).length
    }

    const onSubmitHandler = async e => {
        e.preventDefault()
        if (!validate()) return
        setLoading(true)
        try {
            const res = await axios.post(backendUrl + '/api/user/admin', { email, password })
            if (res.data.success) {
                if (remember) localStorage.setItem('ddl_admin_email', email)
                else localStorage.removeItem('ddl_admin_email')
                setToken(res.data.token)
                toast.success('Welcome back! Redirecting…')
                // setTimeout(() => navigate('/'), 800)
                navigate("/", { replace: true });
            } else { toast.error(res.data.message || 'Invalid credentials') }
        } catch (err) { toast.error(err.response?.data?.message || err.message || 'Something went wrong') }
        finally { setLoading(false) }
    }

    const emailValid = email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && !errors.email

    const inputStyle = (focused, hasError) => ({
        width: '100%', paddingLeft: 42, paddingRight: 42, paddingTop: 12, paddingBottom: 12,
        fontSize: 13.5, fontWeight: 500, borderRadius: 10,
        border: `1px solid ${hasError ? B.red.border : focused ? B.borderFocus : B.border}`,
        background: hasError ? B.red.bg : focused ? B.surface2 : B.surface,
        color: B.navy, outline: 'none', transition: 'all .2s',
        boxShadow: focused && !hasError ? `0 0 0 3px rgba(26,122,74,0.10)` : 'none',
        boxSizing: 'border-box', caretColor: B.green, opacity: loading ? 0.6 : 1,
    })

    return (
        <div style={{ minHeight: '100vh', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: B.bg, padding: '16px', fontFamily: "'Inter',system-ui,-apple-system,sans-serif", WebkitFontSmoothing: 'antialiased', position: 'relative', overflow: 'hidden' }}>
            <style>{`
        @keyframes fadeUp{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:translateY(0)}}
        @keyframes pulse{0%,100%{opacity:1}50%{opacity:.3}}
        @keyframes spinLoad{to{transform:rotate(360deg)}}
        ::placeholder{color:${B.navyGhost}!important}
        input:-webkit-autofill{-webkit-box-shadow:0 0 0 100px ${B.surface2} inset!important;-webkit-text-fill-color:${B.navy}!important}
      `}</style>
            <div style={{ position: 'fixed', top: -140, right: -100, width: 480, height: 480, borderRadius: '50%', background: 'radial-gradient(circle,rgba(26,122,74,0.07) 0%,transparent 65%)', pointerEvents: 'none' }} />
            <div style={{ position: 'fixed', bottom: -80, left: -60, width: 360, height: 360, borderRadius: '50%', background: 'radial-gradient(circle,rgba(26,122,74,0.05) 0%,transparent 65%)', pointerEvents: 'none' }} />
            <div style={{ position: 'fixed', inset: 0, zIndex: 0, backgroundImage: `radial-gradient(circle,rgba(26,122,74,0.06) 1px,transparent 1px)`, backgroundSize: '28px 28px', pointerEvents: 'none' }} />

            <div style={{ position: 'relative', zIndex: 10, width: '100%', maxWidth: 420, background: B.surface2, borderRadius: 20, overflow: 'hidden', border: `1px solid ${B.border}`, boxShadow: '0 20px 60px rgba(28,43,58,0.12),0 4px 16px rgba(28,43,58,0.06)', animation: 'fadeUp .45s ease both' }}>

                {/* Header */}
                <div style={{ position: 'relative', padding: '26px 30px 24px', background: B.greenBg, borderBottom: `1px solid ${B.greenBorder}`, overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg,transparent,${B.green},${B.greenHover},${B.green},transparent)` }} />
                    <div style={{ position: 'absolute', top: -50, right: -40, width: 160, height: 160, borderRadius: '50%', background: 'rgba(26,122,74,0.07)', pointerEvents: 'none' }} />
                    <div style={{ position: 'absolute', top: '50%', right: 20, transform: 'translateY(-50%)', opacity: 0.06, fontSize: 90, color: B.green, lineHeight: 1, pointerEvents: 'none', fontFamily: 'Georgia,serif', fontWeight: 900 }}>D</div>
                    <div style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                        <LogoMark />
                        <div>
                            <p style={{ fontSize: 15, fontWeight: 800, color: B.navy, lineHeight: 1, letterSpacing: 0.3 }}><span style={{ color: B.green }}>D DOLLY</span> LAMB</p>
                            <p style={{ fontSize: 9.5, fontWeight: 600, color: B.navyGhost, letterSpacing: '0.15em', textTransform: 'uppercase', marginTop: 3 }}>Artisan Atelier · Admin</p>
                        </div>
                        <span style={{ marginLeft: 'auto', fontSize: 9, fontWeight: 800, color: B.champText, background: B.champBg, padding: '3px 10px', borderRadius: 99, letterSpacing: '0.08em', textTransform: 'uppercase', flexShrink: 0, border: `1px solid ${B.champBorder}`, display: 'inline-flex', alignItems: 'center', gap: 4 }}>⬥ PRO</span>
                    </div>
                    <div style={{ position: 'relative', zIndex: 1 }}>
                        <h1 style={{ fontSize: 22, fontWeight: 900, color: B.navy, letterSpacing: -0.5, lineHeight: 1.2, marginBottom: 5 }}>Admin Login 🔐</h1>
                        <p style={{ fontSize: 13, color: B.navySoft, fontWeight: 400 }}>Enter your credentials to access the dashboard</p>
                    </div>
                </div>

                {/* Body */}
                <div style={{ padding: '22px 30px 24px', background: B.surface2 }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, marginBottom: 22 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11.5, fontWeight: 500, color: B.navySoft }}>
                            <span style={{ width: 7, height: 7, borderRadius: '50%', background: B.emerald.dot, flexShrink: 0, animation: 'pulse 2s infinite' }} />All systems online
                        </div>
                        <div style={{ width: 1, height: 12, background: B.border }} />
                        <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11.5, fontWeight: 500, color: B.navySoft }}>
                            <span style={{ width: 7, height: 7, borderRadius: '50%', background: B.green, flexShrink: 0 }} />SSL secured
                        </div>
                    </div>

                    <form onSubmit={onSubmitHandler} noValidate>
                        {/* Email */}
                        <div style={{ marginBottom: 16 }}>
                            <label style={{ display: 'block', fontSize: 13, fontWeight: 700, color: B.navyMid, marginBottom: 6, letterSpacing: 0.2 }}>Email Address</label>
                            <div style={{ position: 'relative' }}>
                                <span style={{ position: 'absolute', left: 13, top: '50%', transform: 'translateY(-50%)', color: emailFocus ? B.green : B.navyGhost, pointerEvents: 'none', transition: 'color .2s' }}>
                                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                                </span>
                                <input type="email" value={email} onChange={e => { setEmail(e.target.value); clearErr('email') }} onFocus={() => setEmailFocus(true)} onBlur={() => setEmailFocus(false)} placeholder="admin@ddollylamb.com" autoComplete="email" disabled={loading} style={inputStyle(emailFocus, !!errors.email)} />
                                {emailValid && <span style={{ position: 'absolute', right: 13, top: '50%', transform: 'translateY(-50%)', color: B.emerald.dot, fontSize: 13, fontWeight: 800 }}>✓</span>}
                            </div>
                            {errors.email && <p style={{ display: 'flex', alignItems: 'center', gap: 5, marginTop: 6, fontSize: 11.5, fontWeight: 600, color: B.red.text }}><svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" /></svg>{errors.email}</p>}
                        </div>

                        {/* Password */}
                        <div style={{ marginBottom: 12 }}>
                            <label style={{ display: 'block', fontSize: 13, fontWeight: 700, color: B.navyMid, marginBottom: 6, letterSpacing: 0.2 }}>Password</label>
                            <div style={{ position: 'relative' }}>
                                <span style={{ position: 'absolute', left: 13, top: '50%', transform: 'translateY(-50%)', color: pwFocus ? B.green : B.navyGhost, pointerEvents: 'none', transition: 'color .2s' }}>
                                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0110 0v4" /></svg>
                                </span>
                                <input type={showPw ? 'text' : 'password'} value={password} onChange={e => { setPassword(e.target.value); clearErr('password') }} onFocus={() => setPwFocus(true)} onBlur={() => setPwFocus(false)} placeholder="Enter your password" autoComplete="current-password" disabled={loading} style={inputStyle(pwFocus, !!errors.password)} />
                                <button type="button" onClick={() => setShowPw(p => !p)} tabIndex={-1}
                                    style={{ position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)', width: 28, height: 28, borderRadius: 7, border: `1px solid ${B.border}`, background: 'transparent', color: B.navyGhost, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'all .15s', outline: 'none' }}
                                    onMouseEnter={e => { e.currentTarget.style.borderColor = B.greenBorder; e.currentTarget.style.color = B.green; e.currentTarget.style.background = B.greenBg }}
                                    onMouseLeave={e => { e.currentTarget.style.borderColor = B.border; e.currentTarget.style.color = B.navyGhost; e.currentTarget.style.background = 'transparent' }}>
                                    {showPw
                                        ? <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24" /><line x1="1" y1="1" x2="23" y2="23" /></svg>
                                        : <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>}
                                </button>
                            </div>
                            {errors.password && <p style={{ display: 'flex', alignItems: 'center', gap: 5, marginTop: 6, fontSize: 11.5, fontWeight: 600, color: B.red.text }}><svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" /></svg>{errors.password}</p>}
                        </div>

                        {/* Remember + Forgot */}
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 16, marginBottom: 20 }}>
                            <label onClick={() => setRemember(p => !p)} style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer', userSelect: 'none' }}>
                                <div style={{ width: 18, height: 18, borderRadius: 5, border: `2px solid ${remember ? B.green : B.border}`, background: remember ? B.green : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'all .18s' }}>
                                    {remember && <span style={{ color: '#FFFFFF', fontSize: 10, fontWeight: 900, lineHeight: 1 }}>✓</span>}
                                </div>
                                <span style={{ fontSize: 13, fontWeight: 500, color: B.navySoft }}>Keep me signed in</span>
                            </label>
                            <button type="button" onClick={() => navigate('/forget-password')}
                                style={{ fontSize: 13, fontWeight: 700, color: B.green, background: 'none', border: 'none', padding: 0, cursor: 'pointer', transition: 'color .15s', outline: 'none' }}
                                onMouseEnter={e => e.currentTarget.style.color = B.greenHover}
                                onMouseLeave={e => e.currentTarget.style.color = B.green}>
                                Forgot password?
                            </button>
                        </div>

                        {/* Submit */}
                        <button type="submit" disabled={loading}
                            style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, padding: '13px 20px', borderRadius: 10, fontSize: 14.5, fontWeight: 700, color: '#FFFFFF', border: 'none', outline: 'none', cursor: loading ? 'not-allowed' : 'pointer', opacity: loading ? 0.65 : 1, transition: 'all .2s', background: B.green, boxShadow: '0 4px 16px rgba(26,122,74,0.28)', letterSpacing: 0.2 }}
                            onMouseEnter={e => { if (!loading) { e.currentTarget.style.background = B.greenHover; e.currentTarget.style.transform = 'translateY(-1px)' } }}
                            onMouseLeave={e => { e.currentTarget.style.background = B.green; e.currentTarget.style.transform = 'none' }}>
                            {loading
                                ? <><span style={{ width: 16, height: 16, borderRadius: '50%', border: '2px solid rgba(255,255,255,0.3)', borderTopColor: '#FFFFFF', animation: 'spinLoad .75s linear infinite', flexShrink: 0 }} /><span>Signing in…</span></>
                                : <><span>Login to Dashboard</span><span style={{ width: 22, height: 22, borderRadius: '50%', background: 'rgba(255,255,255,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 900 }}>→</span></>}
                        </button>
                    </form>
                </div>

                {/* Footer */}
                <div style={{ padding: '12px 30px 16px', borderTop: `1px solid ${B.border}`, background: B.surface, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
                    <span style={{ fontSize: 12, color: B.navyGhost, fontWeight: 500 }}>Having trouble?</span>
                    <button onClick={() => navigate('/forget-password')}
                        style={{ fontSize: 12, fontWeight: 700, color: B.green, background: 'none', border: 'none', cursor: 'pointer', padding: 0, transition: 'all .15s', outline: 'none' }}
                        onMouseEnter={e => { e.currentTarget.style.color = B.greenHover; e.currentTarget.style.textDecoration = 'underline' }}
                        onMouseLeave={e => { e.currentTarget.style.color = B.green; e.currentTarget.style.textDecoration = 'none' }}>
                        Reset password →
                    </button>
                </div>
                <div style={{ height: 3, background: `linear-gradient(90deg,transparent,${B.green}60,transparent)` }} />
            </div>
        </div>
    )
}

export default Login