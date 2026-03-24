// src/Context/ThemeContext.jsx
import React, { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
    const [isDark, setIsDark] = useState(() => {
        // 1. Check saved preference
        const saved = localStorage.getItem('ll_theme')
        if (saved) return saved === 'dark'
        // 2. Fall back to system preference
        return window.matchMedia('(prefers-color-scheme: dark)').matches
    })

    useEffect(() => {
        const root = document.documentElement

        if (isDark) {
            root.classList.add('dark')
            localStorage.setItem('ll_theme', 'dark')
        } else {
            root.classList.remove('dark')
            localStorage.setItem('ll_theme', 'light')
        }
    }, [isDark])

    const toggleTheme = () => setIsDark(p => !p)

    return (
        <ThemeContext.Provider value={{ isDark, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

// Hook — use anywhere: const { isDark, toggleTheme } = useTheme()
export const useTheme = () => useContext(ThemeContext)