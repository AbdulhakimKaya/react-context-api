import {createContext, useContext, useEffect, useState} from "react";

const ThemeContext = createContext()
const defaultTheme = localStorage.getItem("theme") || "light";
export const ThemeContextProvider = ({children}) => {
    const [theme, setTheme] = useState(defaultTheme)
    const toggleTheme = () => {
        setTheme((prev) => prev === "light" ? "dark" : "light")
    }
    useEffect(() => {
        localStorage.setItem("theme", theme)
    }, [theme])
    const values = {
        theme,
        toggleTheme
    }
    return (
        <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
    )
}

export const useTheme = () => {
    const context = useContext(ThemeContext)

    if (context === undefined) {
        throw new Error("useTheme must be used within a ThemeProvider")
    }

    return context
}