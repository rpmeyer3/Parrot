import React, { useState, useEffect } from "react";
import { ArrowDown } from "lucide-react";

// Typing effect hook
const useTypingEffect = (texts, typingSpeed = 100, deletingSpeed = 50, pauseDuration = 2000) => {
    const [displayText, setDisplayText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentText = texts[currentIndex];
        
        const timeout = setTimeout(() => {
            if (!isDeleting) {
                if (displayText.length < currentText.length) {
                    setDisplayText(currentText.slice(0, displayText.length + 1));
                } else {
                    setTimeout(() => setIsDeleting(true), pauseDuration);
                }
            } else {
                if (displayText.length > 0) {
                    setDisplayText(currentText.slice(0, displayText.length - 1));
                } else {
                    setIsDeleting(false);
                    setCurrentIndex((prev) => (prev + 1) % texts.length);
                }
            }
        }, isDeleting ? deletingSpeed : typingSpeed);

        return () => clearTimeout(timeout);
    }, [displayText, currentIndex, isDeleting, texts, typingSpeed, deletingSpeed, pauseDuration]);

    return displayText;
};

export const HeroSection = () => {
    const roles = [
        "CS Senior at UGA",
        "ML Enthusiast",
        "Data Engineering Fan",
        "Problem Solver",
        "Lifelong Learner"
    ];
    
    const typedText = useTypingEffect(roles, 80, 40, 1500);

    return (
        <section id="home" className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-16 sm:pt-0">
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-4 sm:space-y-6">
                    {/* Profile Photo with glow effect */}
                    <div className="flex justify-center opacity-0 animate-fade-in">
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-orange-400 to-primary rounded-full blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-500 animate-pulse-subtle"></div>
                            <img 
                                src="/IMG_5342.jpeg" 
                                alt="Ryan Meyer"
                                className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-primary shadow-lg transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                    </div>

                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight">
                        <span className="opacity-0 animate-fade-in">Howdy, I'm </span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-1"> Ryan</span>
                        <span className="text-primary ml-1 sm:ml-2 opacity-0 animate-fade-in-delay-2"> Meyer</span>
                    </h1>

                    {/* Typing effect for roles */}
                    <div className="h-7 sm:h-8 md:h-10 flex items-center justify-center opacity-0 animate-fade-in-delay-3">
                        <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
                            {typedText}
                            <span className="animate-blink text-primary">|</span>
                        </p>
                    </div>

                    <div className="pt-2 sm:pt-4 opacity-0 animate-fade-in-delay-4">
                        <a href="#projects" className="cosmic-button group text-sm sm:text-base">
                            <span className="relative z-10">View My Work</span>
                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm -z-10"></div>
                        </a>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                <span className="text-xs sm:text-sm text-muted-foreground mb-2">
                    Take a Gander
                </span>
                <ArrowDown className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
            </div>
        </section>
    );
}