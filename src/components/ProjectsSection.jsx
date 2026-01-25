import React from "react";
import { ExternalLink, Github, Film, Mic } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const projects = [
    {
        title: "Full Stack Movie E-Booking Platform",
        description: "A production-ready movie booking SPA with < 200ms response times. Features OAuth 2.0/JWT authentication, RBAC, reservation systems, database triggers for user sync, and payment-integrated booking.",
        tech: ["Next.js", "React", "Django", "PostgreSQL", "Docker"],
        icon: Film,
        period: "Spring 2025",
        github: "https://github.com/rpmeyer3/film-hub",
        highlights: [
            "Engineered secure CI/CD pipeline with Docker",
            "Implemented OAuth 2.0/JWT authentication & RBAC",
            "Optimized PostgreSQL database for < 200ms response times"
        ]
    },
    {
        title: "Audio Summarization & Transcription WebApp",
        description: "An end-to-end AI pipeline for audio processing featuring high-fidelity transcription, intelligent summarization, and voice synthesis output.",
        tech: ["React", "Flask", "OpenAI Whisper", "T5 Transformer", "Google Cloud TTS"],
        icon: Mic,
        period: "Fall 2024",
        github: "https://github.com/Ig0rGon/UgaHacksX",
        highlights: [
            "Integrated OpenAI Whisper for transcription",
            "Used Google's T5 Transformer for summarization",
            "Reduced server response times by 60% with model caching"
        ]
    }
];

export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <ScrollReveal>
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                        Featured <span className="text-primary">Projects</span>
                    </h2>
                </ScrollReveal>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <ScrollReveal key={index} delay={index * 150} direction={index % 2 === 0 ? "left" : "right"}>
                            <div className="glass-card-hover p-6 h-full flex flex-col">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-3 rounded-lg bg-primary/10">
                                    <project.icon className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">{project.title}</h3>
                                    <span className="text-sm text-muted-foreground">{project.period}</span>
                                </div>
                            </div>
                            
                            <p className="text-muted-foreground mb-4">
                                {project.description}
                            </p>

                            <ul className="space-y-2 mb-4 flex-grow">
                                {project.highlights.map((highlight, hIndex) => (
                                    <li key={hIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                                        <span className="text-primary mt-1">▹</span>
                                        {highlight}
                                    </li>
                                ))}
                            </ul>

                            <div className="flex flex-wrap gap-2 pt-4 border-t border-border mt-auto">
                                {project.tech.map((tech, techIndex) => (
                                    <span 
                                        key={techIndex}
                                        className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <a 
                                href={project.github} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 mt-4 text-primary hover:underline hover:text-orange-400 transition-colors"
                            >
                                <Github className="h-4 w-4" />
                                View on GitHub
                            </a>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};
