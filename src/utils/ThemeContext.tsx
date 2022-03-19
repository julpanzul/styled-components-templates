import React, { createContext, useContext, useState } from "react";
import Theme from '../styles/theme';

type themeContextType = {
    darkMode: boolean
    handleDarkMode: () => void
}

const themeContextDefaultValues: themeContextType = {
    darkMode: null,
    handleDarkMode: () => {}
}

const ThemeContext = createContext<themeContextType>(themeContextDefaultValues)

export function useTheme() {
    return useContext(ThemeContext)
}

type Props = {
    children: React.ReactNode
}

export function ThemeProvider({children}: Props) {
    const [darkMode, setDarkMode] = useState<boolean>(null)

    const handleDarkMode = () => {
        setDarkMode(!darkMode)
    }

    const value = {
        darkMode, handleDarkMode        
    }
    return(
        <>
            <ThemeContext.Provider value={value}>
                <Theme>
                    {children}
                </Theme>
            </ThemeContext.Provider>
        </>
    )
}