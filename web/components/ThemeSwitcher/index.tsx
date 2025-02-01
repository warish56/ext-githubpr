'use client'

import { darkTheme, lightTheme } from "@/services/theme"
import { ThemeProvider, useMediaQuery } from "@mui/material"


type props = {
    children: React.ReactNode
}

export const ThemeSwitcher = ({children}:props) => {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const theme = prefersDarkMode ? darkTheme : lightTheme;
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}