import React from 'react'

/*
  ═══════════════════════════════════════════════
  COLOR SYSTEM UPDATE — Title.jsx
  ═══════════════════════════════════════════════
  Matching the hero section aesthetic (light mode):
    bg:         light blue-white gradient  
    accent:     #6366F1 indigo (hero primary)
    text hi:    #1E1B4B  deep navy-indigo
    text mid:   #4338CA  indigo mid
    muted:      #818CF8  soft indigo
  ═══════════════════════════════════════════════
*/

const Title = ({ text1, text2 }) => {
  return (
    <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-start', gap: '10px', marginBottom: '12px' }}>

      {/* Eyebrow line */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <span style={{ width: '32px', height: '1px', background: 'linear-gradient(to right, transparent, #6366F1)' }} />
        <span style={{
          fontSize: '10px',
          letterSpacing: '0.35em',
          color: '#6366F1',
          fontFamily: "'Montserrat', sans-serif",
          fontWeight: 600,
          textTransform: 'uppercase',
        }}>
          D DOLLY LAMB
        </span>
        <span style={{ width: '32px', height: '1px', background: 'linear-gradient(to left, transparent, #6366F1)' }} />
      </div>

      {/* Main heading */}
      <h2 style={{
        margin: 0,
        fontSize: 'clamp(1.6rem, 3.5vw, 2.6rem)',
        fontFamily: "'Montserrat', sans-serif",
        fontWeight: 700,
        lineHeight: 1.15,
        letterSpacing: '0.03em',
        color: '#1E1B4B',
      }}>
        {text1}{' '}
        <span style={{
          background: 'linear-gradient(135deg, #6366F1, #818CF8)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}>{text2}</span>
      </h2>

      {/* Indigo underline accent */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span style={{
          display: 'block',
          width: '48px',
          height: '2px',
          background: 'linear-gradient(to right, #4338CA, #818CF8)',
          borderRadius: '2px',
        }} />
        <span style={{
          display: 'block',
          width: '6px',
          height: '6px',
          background: '#6366F1',
          transform: 'rotate(45deg)',
        }} />
        <span style={{
          display: 'block',
          width: '24px',
          height: '2px',
          background: 'rgba(99,102,241,0.25)',
          borderRadius: '2px',
        }} />
      </div>
    </div>
  )
}

export default Title