import React, { useState } from "react";
import ThemeContext from "./ThemeContext";
import type { ThemeProviderProp } from "../types/ThemeProvider";

const ThemeProvider: React.FC<ThemeProviderProp> = ({ children }) => {
    const [theme, setTheme] = useState("light");
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };
    const value = {
        theme,
        toggleTheme,
        isDark: theme === "dark",
    };

    return (
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    );
};

export default ThemeProvider;
