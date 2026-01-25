import React, { useState, useEffect, useRef, useMemo } from "react";

export const StarBackground = () => {
    const [stars, setStars] = useState([]);
    const containerRef = useRef(null);
    const mouseRef = useRef({ x: 0, y: 0 });
    const rafRef = useRef(null);

    useEffect(() => {
        generateStars();

        const handleResize = () => {
            generateStars();
        };

        // Throttled mouse parallax effect using CSS custom properties
        const handleMouseMove = (e) => {
            if (rafRef.current) return;
            
            rafRef.current = requestAnimationFrame(() => {
                const x = (e.clientX / window.innerWidth - 0.5) * 20;
                const y = (e.clientY / window.innerHeight - 0.5) * 20;
                
                if (containerRef.current) {
                    containerRef.current.style.setProperty('--mouse-x', `${x}px`);
                    containerRef.current.style.setProperty('--mouse-y', `${y}px`);
                }
                rafRef.current = null;
            });
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove, { passive: true });

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("mousemove", handleMouseMove);
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, []);  

    const generateStars = () => {
        const numberOfStars = Math.floor(window.innerWidth * window.innerHeight / 15000); // Reduced star count
        const newStars = [];
        for (let i = 0; i < numberOfStars; i++) {
            newStars.push({
                id: i,
                size: Math.random() * 3 + 1,
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random() * 0.5 + 0.5,
                animationDuration: Math.random() * 4 + 2,
                parallaxFactor: Math.random() * 0.5 + 0.1,
            });
        }
        setStars(newStars);
    };

    return (
        <div ref={containerRef} className="fixed inset-0 overflow-hidden pointer-events-none z-0" style={{ '--mouse-x': '0px', '--mouse-y': '0px' }}>
            {stars.map((star) => (
                <div
                    key={star.id}
                    className="star animate-pulse-subtle"
                    style={{
                        width: star.size + "px",
                        height: star.size + "px",
                        left: star.x + "%",
                        top: star.y + "%",
                        opacity: star.opacity,
                        animationDuration: star.animationDuration + "s",
                        transform: `translate(calc(var(--mouse-x) * ${star.parallaxFactor}), calc(var(--mouse-y) * ${star.parallaxFactor}))`,
                        willChange: 'transform',
                    }}
                />
            ))}

            {/* Ambient gradient orbs for extra depth */}
            <div 
                className="absolute w-96 h-96 rounded-full bg-primary/5 blur-3xl"
                style={{
                    left: "10%",
                    top: "20%",
                    transform: `translate(calc(var(--mouse-x) * 0.3), calc(var(--mouse-y) * 0.3))`,
                    willChange: 'transform',
                }}
            />
            <div 
                className="absolute w-64 h-64 rounded-full bg-orange-500/5 blur-3xl"
                style={{
                    right: "15%",
                    bottom: "30%",
                    transform: `translate(calc(var(--mouse-x) * -0.2), calc(var(--mouse-y) * -0.2))`,
                    willChange: 'transform',
                }}
            />
        </div>
    );
};