import React from "react";
import { Code, User, Briefcase, MapPin, GraduationCap, Rocket } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const aboutCards = [
    {
        title: "Work Experience",
        subtitle: "Saia LTL Freight",
        icon: Briefcase,
        description: "Progressed through 3 roles: Data Engineering Intern → Part-Time Contractor → Machine Learning Intern over the past year.",
        highlights: [
            "Engineered automation pipeline reducing RFP processing from 3+ months to 8 hours",
            "Designed Siamese neural network achieving 0.99 AUC-ROC for document classification",
            "Built ETL pipelines processing 50M+ records"
        ],
        tags: ["ML Pipelines", "ETL", "Salesforce", "Dynamics 365"]
    },
    {
        title: "Education",
        subtitle: "University of Georgia",
        icon: GraduationCap,
        description: "B.S. Computer Science, graduating May 2026. Transferred from Georgia College & State University.",
        highlights: [
            "Dean's List at GCSU",
            "Focus on Machine Learning & Data Systems",
            "Active in CS community and hackathons"
        ],
        tags: ["Computer Science", "ML", "Data Engineering"]
    },
    {
        title: "What Drives Me",
        subtitle: "Building Impact",
        icon: Rocket,
        description: "I'm passionate about creating systems that solve real problems and deliver measurable business value.",
        highlights: [
            "99% reduction in manual processing time on key projects",
            "Full-stack development from ML models to user interfaces",
            "Bridging the gap between data science and production systems"
        ],
        tags: ["Problem Solving", "Automation", "Full-Stack"]
    },
    {
        title: "Focus Areas",
        subtitle: "Technical Expertise",
        icon: Code,
        description: "Specializing in machine learning, data engineering, and building production-ready applications.",
        highlights: [
            "TensorFlow/Keras for deep learning models",
            "AWS & Azure cloud infrastructure",
            "Enterprise CRM integrations"
        ],
        tags: ["TensorFlow", "AWS", "Azure", "Python"]
    }
];

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <ScrollReveal>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                        About <span className="text-primary">Me</span>
                    </h2>
                    <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                        CS Senior at UGA from Cumming, Georgia. I love turning complex problems into elegant solutions.
                    </p>
                </ScrollReveal>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {aboutCards.map((card, index) => (
                        <ScrollReveal key={index} delay={index * 150} direction={index % 2 === 0 ? "left" : "right"}>
                            <div className="glass-card-hover p-6 h-full flex flex-col">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-3 rounded-lg bg-primary/10">
                                        <card.icon className="h-6 w-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg">{card.title}</h3>
                                        <span className="text-sm text-muted-foreground">{card.subtitle}</span>
                                    </div>
                                </div>
                                
                                <p className="text-muted-foreground mb-4">
                                    {card.description}
                                </p>

                                <ul className="space-y-2 mb-4 flex-grow">
                                    {card.highlights.map((highlight, hIndex) => (
                                        <li key={hIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                                            <span className="text-primary mt-1">▹</span>
                                            {highlight}
                                        </li>
                                    ))}
                                </ul>

                                <div className="flex flex-wrap gap-2 pt-4 border-t border-border mt-auto">
                                    {card.tags.map((tag, tagIndex) => (
                                        <span 
                                            key={tagIndex}
                                            className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

                <ScrollReveal delay={600}>
                    <div className="flex justify-center pt-12">
                        <a 
                            href="/Ryan_Meyer.pdf" 
                            download="Ryan_Meyer_Resume.pdf" 
                            className="cosmic-button"
                        > 
                            Download Resume
                        </a>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};