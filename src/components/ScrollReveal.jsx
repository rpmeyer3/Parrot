import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export const ScrollReveal = ({ 
    children, 
    className = "",
    delay = 0,
    direction = "up", // "up", "down", "left", "right", "scale"
    duration = 600,
    once = true 
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    if (once) {
                        observer.unobserve(entry.target);
                    }
                } else if (!once) {
                    setIsVisible(false);
                }
            },
            {
                threshold: 0.1,
                rootMargin: "0px 0px -50px 0px",
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [once]);

    const getInitialTransform = () => {
        switch (direction) {
            case "up": return "translateY(40px)";
            case "down": return "translateY(-40px)";
            case "left": return "translateX(40px)";
            case "right": return "translateX(-40px)";
            case "scale": return "scale(0.9)";
            default: return "translateY(40px)";
        }
    };

    return (
        <div
            ref={ref}
            className={cn(className)}
            style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0) translateX(0) scale(1)" : getInitialTransform(),
                transition: `opacity ${duration}ms ease-out ${delay}ms, transform ${duration}ms ease-out ${delay}ms`,
            }}
        >
            {children}
        </div>
    );
};

// Hook for custom scroll animations
export const useScrollReveal = (options = {}) => {
    const { threshold = 0.1, once = true } = options;
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    if (once) observer.unobserve(entry.target);
                } else if (!once) {
                    setIsVisible(false);
                }
            },
            { threshold }
        );

        if (ref.current) observer.observe(ref.current);
        return () => ref.current && observer.unobserve(ref.current);
    }, [threshold, once]);

    return [ref, isVisible];
};
