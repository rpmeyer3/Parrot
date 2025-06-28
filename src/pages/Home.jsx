import React from "react";
import { ThemeToggle } from "../components/ThemeToggle.jsx";
import { StarBackground } from '@/components/StarBackground';

export const Home = () =>  {

    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            {/* Theme Toggler */}
               <ThemeToggle />
            {/* Background Effects */}
            <StarBackground />  
            {/* Navbar */}

            {/* Content */}

            {/* Footer */}
        </div>
    );
}