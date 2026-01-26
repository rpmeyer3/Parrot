import React, { useState, useEffect, useRef, useMemo } from "react";

export const StarBackground = () => {
    const [stars, setStars] = useState([]);
    const containerRef = useRef(null);
    const rafRef = useRef(null);
    const isMobile = useRef(false);

    useEffect(() => {
        // Detect mobile device
        isMobile.current = window.matchMedia('(max-width: 768px)').matches || 'ontouchstart' in window;
        
        generateStars();

        const handleResize = () => {
            isMobile.current = window.matchMedia('(max-width: 768px)').matches || 'ontouchstart' in window;
            generateStars();
        };

        // Throttled mouse/touch parallax effect using CSS custom properties
        const handleMove = (clientX, clientY) => {
            if (rafRef.current || isMobile.current) return; // Disable parallax on mobile for performance
            
            rafRef.current = requestAnimationFrame(() => {
                const x = (clientX / window.innerWidth - 0.5) * 20;
                const y = (clientY / window.innerHeight - 0.5) * 20;
                
                if (containerRef.current) {
                    containerRef.current.style.setProperty('--mouse-x', `${x}px`);
                    containerRef.current.style.setProperty('--mouse-y', `${y}px`);
                }
                rafRef.current = null;
            });
        };

        const handleMouseMove = (e) => handleMove(e.clientX, e.clientY);
        const handleTouchMove = (e) => {
            if (e.touches.length > 0) {
                handleMove(e.touches[0].clientX, e.touches[0].clientY);
            }
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove, { passive: true });
        window.addEventListener('touchmove', handleTouchMove, { passive: true });

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("touchmove", handleTouchMove);
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, []);  

    const generateStars = () => {
        // Fewer stars on mobile for better performance
        const divisor = isMobile.current ? 25000 : 15000;
        const numberOfStars = Math.floor(window.innerWidth * window.innerHeight / divisor);
        const newStars = [];
        for (let i = 0; i < numberOfStars; i++) {
            newStars.push({
                id: i,
                size: Math.random() * 3 + 1,
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random() * 0.5 + 0.5,
                animationDuration: Math.random() * 4 + 2,
                parallaxFactor: isMobile.current ? 0 : Math.random() * 0.5 + 0.1,
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