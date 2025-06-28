import React from "react";

export const HeroSection = () => {
    return<section id="home" className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">
                    <h1 className ="text-4xl">
                        <span>Howdy, I am</span>
                        <span> Literally</span>
                        <span> Batman</span>
                    </h1>
                </div>
            </div>
    </section>
}