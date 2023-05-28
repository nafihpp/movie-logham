import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    //true === dark
    const [theme, setTheme] = useState("dark");
    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "light" && "dark");
    };
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
