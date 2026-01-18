import React from "react";
import { ThemeToggle } from "../components/ThemeToggle.jsx";
import { StarBackground } from '@/components/StarBackground';
import { Navbar } from "../components/Navbar"
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection.jsx"
import { SkillsSection } from "../components/SkillsSection.jsx"
import { ProjectsSection } from "../components/ProjectsSection.jsx"
import { ContactSection } from "../components/ContactSection.jsx"

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
                <SkillsSection />
                <ProjectsSection />
                <ContactSection />
            </main>

            {/* Footer */}
        </div>
    );
}