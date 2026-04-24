import React from "react";
import { Github, Film, ShoppingBasket, Wallet, ScanLine } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const projects = [
    {
        title: "Freshkeep",
        description: "Mobile app that scans grocery receipts via OCR, fuzzy-matches items to 661 USDA FoodKeeper entries using TF-IDF, and tracks expiration dates with push reminders. FastAPI backend with Supabase, household sharing, and waste-tracking analytics.",
        tech: ["React Native", "Expo", "FastAPI", "Supabase", "Scikit-learn"],
        icon: ShoppingBasket,
        period: "Spring 2026",
        github: null,
        highlights: [
            "OCR receipt scanning + TF-IDF fuzzy-match against 661 USDA FoodKeeper entries",
            "Expiration tracking with push reminders and household sharing",
            "Supabase RLS + JWT auth with waste-tracking analytics"
        ]
    },
    {
        title: "Byte's Bank",
        description: "Full-stack app that parses PDF bank statements, classifies transactions via a TF-IDF/Naive Bayes pipeline, and delivers AI-generated financial advice through a Gemini-powered chat interface.",
        tech: ["React", "FastAPI", "Scikit-learn", "Gemini API", "Supabase"],
        icon: Wallet,
        period: "Spring 2026",
        github: null,
        highlights: [
            "PDF bank statement parsing with automatic transaction classification",
            "TF-IDF + Naive Bayes pipeline for category prediction",
            "Gemini-powered chat interface for personalized financial advice"
        ]
    },
    {
        title: "Noise-Robust Image Segmentation System",
        description: "Engineered a 31.5M-param Attention U-Net with CBAM and curriculum learning, achieving 92.6% accuracy across 5 noise types. Deployed via containerized FastAPI with Hugging Face model delivery and a Vercel visualization dashboard.",
        tech: ["PyTorch", "FastAPI", "Attention U-Net", "Docker", "Vercel"],
        icon: ScanLine,
        period: "Fall 2025",
        github: null,
        highlights: [
            "31.5M-param Attention U-Net with CBAM + curriculum learning",
            "92.6% accuracy across 5 noise types",
            "Containerized FastAPI deploy with Hugging Face model delivery"
        ]
    },
    {
        title: "Filmhub",
        description: "Production-ready movie booking SPA built with Next.js/React and a Django REST API. Achieves < 200ms response times with an optimized PostgreSQL database, secured by OAuth 2.0/JWT and a Docker CI/CD pipeline.",
        tech: ["Next.js", "React", "Django", "PostgreSQL", "Docker"],
        icon: Film,
        period: "Spring 2025",
        github: "https://github.com/rpmeyer3/film-hub",
        highlights: [
            "Sub-200ms responses on an optimized PostgreSQL database",
            "OAuth 2.0/JWT auth with RBAC and DB triggers for user sync",
            "Luhn-validated payment integration on a Docker CI/CD pipeline"
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

                            {project.github && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 mt-4 text-primary hover:underline hover:text-orange-400 transition-colors"
                                >
                                    <Github className="h-4 w-4" />
                                    View on GitHub
                                </a>
                            )}
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};
