import React, { useState, useEffect, useCallback, useRef } from "react";
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const navItems = [
    {name: "Home", href: "#home"},
    {name: "About", href: "#about"},
    {name: "Skills", href: "#skills"},
    {name: "Projects", href: "#projects"},
    {name: "Contact", href: "#contact"},
]

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const ticking = useRef(false);

    useEffect(() => {
        const handleScroll = () => {
            if (!ticking.current) {
                requestAnimationFrame(() => {
                    // Only show glass effect after scrolling past the home section
                    const homeSection = document.getElementById("home");
                    if (homeSection) {
                        const homeBottom = homeSection.getBoundingClientRect().bottom;
                        setIsScrolled(homeBottom <= 100);
                    }
                    
                    // Check if we're near the bottom of the page
                    const scrolledToBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100;
                    
                    if (scrolledToBottom) {
                        setActiveSection("contact");
                        ticking.current = false;
                        return;
                    }
                    
                    // Detect active section
                    const sections = navItems.map(item => item.href.substring(1));
                    for (const section of [...sections].reverse()) {
                        const element = document.getElementById(section);
                        if (element) {
                            const rect = element.getBoundingClientRect();
                            if (rect.top <= 150) {
                                setActiveSection(section);
                                break;
                            }
                        }
                    }
                    ticking.current = false;
                });
                ticking.current = true;
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return ( 
        <nav className={cn(
            "fixed w-full z-40 transition-all duration-500", 
            isScrolled 
                ? "py-3 bg-background/70 backdrop-blur-lg shadow-lg shadow-background/10 border-b border-border/50" 
                : "py-5"
        )}>
            <div className="container flex items-center justify-between">
                {/* Logo with hover effect */}
                <a 
                    className="text-xl font-bold text-primary flex items-center group"
                    href="#home"
                >
                    <span className="relative z-10">
                        <span className="text-foreground group-hover:text-primary transition-colors duration-300">Ryan</span>
                        <span className="text-primary"> Meyer</span>
                    </span>
                    <span className="absolute -inset-2 bg-primary/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></span>
                </a>

                {/* Desktop nav with glass pill */}
                <div className="hidden md:flex items-center">
                    <div className="flex items-center gap-1 px-2 py-1.5 rounded-full bg-card/50 backdrop-blur-sm border border-border/50">
                        {navItems.map((item, key) => (
                            <a
                                key={key}
                                href={item.href}
                                className={cn(
                                    "relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                                    activeSection === item.href.substring(1)
                                        ? "text-primary-foreground"
                                        : "text-foreground/70 hover:text-foreground"
                                )}
                            >
                                {/* Active background pill */}
                                {activeSection === item.href.substring(1) && (
                                    <span className="absolute inset-0 bg-primary rounded-full -z-10 animate-scale-in shadow-lg shadow-primary/25"></span>
                                )}
                                {/* Hover background */}
                                <span className={cn(
                                    "absolute inset-0 bg-foreground/5 rounded-full -z-10 scale-0 transition-transform duration-300",
                                    activeSection !== item.href.substring(1) && "group-hover:scale-100 hover:scale-100"
                                )}></span>
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Mobile menu button with animation */}
                <button 
                    onClick={() => setIsMenuOpen((prev) => !prev)} 
                    className="md:hidden p-2 text-foreground z-50 relative group" 
                    aria-label={isMenuOpen ? "Close Menu": "Open Menu"}
                > 
                    <span className="absolute inset-0 bg-primary/10 rounded-lg scale-0 group-active:scale-100 transition-transform duration-300"></span>
                    <span className="relative">
                        {isMenuOpen ? <X size={24} /> : <Menu size={24}/>}
                    </span>
                </button>

                {/* Mobile menu with staggered animations */}
                <div className={cn(
                    "fixed inset-0 bg-background/95 backdrop-blur-lg z-40 flex flex-col items-center justify-center transition-all duration-500 md:hidden",
                    isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                )}>
                    {/* Theme toggle in mobile menu */}
                    <div className="absolute top-4 right-16">
                    </div>
                    
                    <div className="flex flex-col items-center space-y-5 text-lg">
                        {navItems.map((item, key) => (
                            <a
                                key={key}
                                href={item.href}
                                className={cn(
                                    "relative px-8 py-4 rounded-full font-medium transition-all duration-300 min-w-[160px] text-center",
                                    isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
                                    activeSection === item.href.substring(1)
                                        ? "text-primary-foreground bg-primary shadow-lg shadow-primary/25"
                                        : "text-foreground/80 active:text-primary active:bg-primary/10"
                                )}
                                style={{ transitionDelay: isMenuOpen ? `${key * 75}ms` : '0ms' }}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>            
            </div>
        </nav> 
    );
};