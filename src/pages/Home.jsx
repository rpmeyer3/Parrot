import React from "react";
import { ThemeToggle } from "../components/ThemeToggle.jsx";
import { StarBackground } from '@/components/StarBackground';
import { Navbar } from "../components/Navbar"
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection.jsx"

export const Home = () =>  {

    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            {/* Theme Toggler */}
               <ThemeToggle />
            {/* Background Effects */}
               <StarBackground />  
            {/* Navbar */}
                <Navbar />
            {/* Content */}
            <main>
                <HeroSection />
                <AboutSection />
            </main>

            {/* Footer */}
        </div>
    );
}