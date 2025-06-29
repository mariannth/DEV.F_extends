import { useState, useEffect } from "react";

const ThemeToggle = () => {
    // Estado local para tema, por defecto según preferencia sistema o modo oscuro
    const getInitialTheme = () => {
        if (typeof window !== "undefined") {
            const saved = localStorage.getItem("theme");
            if (saved) return saved;
            return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
        }
        return "dark";
    };

    const [theme, setTheme] = useState(getInitialTheme);

    // Aplicar clase body y guardar preferencia
    useEffect(() => {
        if (theme === "light") {
            document.body.classList.add("light-theme");
        } else {
            document.body.classList.remove("light-theme");
        }
        localStorage.setItem("theme", theme);
    }, [theme]);

    // Cambiar tema
    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <button
            onClick={toggleTheme}
            className="btn btn-sm btn-outline-primary"
            aria-label="Toggle theme"
            title={`Cambiar a modo ${theme === "light" ? "oscuro" : "claro"}`}
        >
            {theme === "light" ? "🌙" : "☀️"}
        </button>
    );
};

export default ThemeToggle;
