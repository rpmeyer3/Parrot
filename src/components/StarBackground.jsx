import React, { useState, useEffect, useRef } from "react";

export const StarBackground = () => {
    const [stars, setStars] = useState([]);
    const [meteors, setMeteors] = useState([]);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const containerRef = useRef(null);

    useEffect(() => {
        generateStars();
        generateMeteors();

        const handleResize = () => {
            generateStars();
        };

        // Mouse parallax effect
        const handleMouseMove = (e) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth - 0.5) * 20,
                y: (e.clientY / window.innerHeight - 0.5) * 20,
            });
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);  

    const generateStars = () => {
        const numberOfStars = Math.floor(window.innerWidth * window.innerHeight / 10000);
        const newStars = [];
        for (let i = 0; i < numberOfStars; i++) {
            newStars.push({
                id: i,
                size: Math.random() * 3 + 1,
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random() * 0.5 + 0.5,
                animationDuration: Math.random() * 4 + 2,
                parallaxFactor: Math.random() * 0.5 + 0.1, // Different layers move at different speeds
            });
        }
        setStars(newStars);
    };

    const generateMeteors = () => {
        const numberOfMeteors = 4;
        const newMeteors = [];

        for (let i = 0; i < numberOfMeteors; i++) {
            newMeteors.push({
                id: i,
                size: Math.random() * 2 + 1,
                x: Math.random() * 100,
                y: Math.random() * 20,
                delay: Math.random() * 15,
                animationDuration: Math.random() * 3 + 3,
            });
        }
        setMeteors(newMeteors);
    };

    return (
        <div ref={containerRef} className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {stars.map((star) => (
                <div
                    key={star.id}
                    className="star animate-pulse-subtle transition-transform duration-200 ease-out"
                    style={{
                        width: star.size + "px",
                        height: star.size + "px",
                        left: star.x + "%",
                        top: star.y + "%",
                        opacity: star.opacity,
                        animationDuration: star.animationDuration + "s",
                        transform: `translate(${mousePosition.x * star.parallaxFactor}px, ${mousePosition.y * star.parallaxFactor}px)`,
                    }}
                />
            ))}

            {meteors.map((meteor) => (
                <div
                    key={meteor.id}
                    className="meteor animate-meteor"
                    style={{
                        width: meteor.size * 50 + "px",
                        height: meteor.size * 2 + "px",
                        left: meteor.x + "%",
                        top: meteor.y + "%",
                        opacity: meteor.opacity,
                        animationDelay: meteor.delay + "s",
                        animationDuration: meteor.animationDuration + "s",
                    }}
                />
            ))}

            {/* Ambient gradient orbs for extra depth */}
            <div 
                className="absolute w-96 h-96 rounded-full bg-primary/5 blur-3xl transition-transform duration-1000 ease-out"
                style={{
                    left: "10%",
                    top: "20%",
                    transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)`,
                }}
            />
            <div 
                className="absolute w-64 h-64 rounded-full bg-orange-500/5 blur-3xl transition-transform duration-1000 ease-out"
                style={{
                    right: "15%",
                    bottom: "30%",
                    transform: `translate(${mousePosition.x * -0.2}px, ${mousePosition.y * -0.2}px)`,
                }}
            />
        </div>
    );
};