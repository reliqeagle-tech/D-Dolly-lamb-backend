import React, { useState, useEffect } from 'react';

const ProgressBar = ({ label, pct, delay = 0, className = '' }) => {
    const [width, setWidth] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => setWidth(pct), 400 + delay);
        return () => clearTimeout(timer);
    }, [pct, delay]);

    return (
        <div className={`progress-bar-container ${className}`} style={{ marginBottom: 16 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                <span style={{ color: '#d4b87a', fontSize: 12.5, fontWeight: 600 }}>{label}</span>
                <span style={{ color: '#c9a84c', fontSize: 12, fontWeight: 700 }}>{pct}%</span>
            </div>
            <div style={{
                height: 4,
                borderRadius: 4,
                background: '#221408',
                border: '1px solid rgba(201,168,76,0.18)',
                overflow: 'hidden',
            }}>
                <div style={{
                    height: '100%',
                    borderRadius: 4,
                    background: 'linear-gradient(90deg, #c9a84c, #e8c46a)',
                    width: `${width}%`,
                    transition: `width 1.2s cubic-bezier(.4,0,.2,1) ${delay}ms`,
                    boxShadow: '0 0 8px rgba(201,168,76,0.5)',
                }} />
            </div>
        </div>
    );
};

export default ProgressBar;