import React, { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("dark");
    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "light" && "dark");
    };
    useEffect(() => {
        if (theme === "light") {
            let doc = document.getElementsByTagName("BODY")[0];
            doc.style.background = "#fff";
        } else {
            let doc = document.getElementsByTagName("BODY")[0];
            doc.style.background = "#000";
        }
    }, [theme]);
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
