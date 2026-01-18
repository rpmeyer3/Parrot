import React from "react";
import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
    return<section id="home" className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">
                    {/* Profile Photo */}
                    <div className="flex justify-center opacity-0 animate-fade-in">
                        <div className="relative">
                            <img 
                                src="/IMG_5342.jpeg" 
                                alt="Ryan Meyer"
                                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-primary shadow-lg"
                            />
                            <div className="absolute inset-0 rounded-full border-4 border-primary/30 animate-pulse-subtle"></div>
                        </div>
                    </div>

                    <h1 className ="text-4xl md:text-6xl font-bold tracking-tight">
                        <span className="opacity-0 animate-fade-in">Howdy, I'm </span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-1"> Ryan</span>
                        <span className="text-primary ml-2 opacity-0 animate-fade-in-delay-2"> Meyer</span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                        CS Senior at UGA | ML & Data Engineering Enthusiast
                    </p>

                    <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                        <a href="#projects" className="cosmic-button">
                            View My Work
                        </a>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                <span className="txt-sm text-muted-foreground mb-2">
                    Take a Gander
                </span>
                <ArrowDown className="h-5 w-5 text-primary " />
            </div>

    </section>
}