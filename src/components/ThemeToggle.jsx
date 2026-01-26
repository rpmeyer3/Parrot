import React, { useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme === "dark") {
            setIsDarkMode(true);
            document.documentElement.classList.add("dark");
        } else {
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        }
    }, [])

    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);
        }
    };

    return (
        <button 
            onClick={toggleTheme} 
            className={cn(
                "fixed top-4 right-4 sm:top-5 sm:right-5 z-50 p-2.5 rounded-full transition-all duration-300",
                "bg-card/50 backdrop-blur-sm border border-border/50",
                "hover:bg-card/80 hover:scale-110 active:scale-95",
                "focus:outline-none focus:ring-2 focus:ring-primary/50"
            )}
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
            {isDarkMode ? (
                <Sun className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-300" />
            ) : (
                <Moon className="h-5 w-5 sm:h-6 sm:w-6 text-blue-900" />
            )}
        </button>
    );
};