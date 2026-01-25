import React from "react";
import { Code, User, Briefcase } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <ScrollReveal>
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                        About <span className="text-primary">Me</span>
                    </h2>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <ScrollReveal direction="left" delay={100}>
                        <div className="space-y-6">
                            <h3 className="text-2xl font-semibold">CS Senior at UGA | ML & Data Engineering</h3>
                    <p className="text-muted-foreground">
                        I'm a Computer Science senior at the University of Georgia graduating in May 2026. 
                        I transferred from Georgia College & State University where I made Dean's List. 
                        Originally from Cumming, Georgia, I've spent the past year at Saia LTL Freight progressing from 
                        Data Engineering Intern to Machine Learning Intern.
                    </p>
                    <p className="text-muted-foreground">
                        My proudest achievement was engineering an end-to-end automation pipeline that reduced RFP processing 
                        from 3+ months to just 8 hours—a 99% reduction. I designed a Siamese neural network achieving 0.99 AUC-ROC 
                        for document classification, and built ETL pipelines processing 50M+ records. I'm passionate about 
                        machine learning, data engineering, and building systems that create real business impact.
                    </p>
                            <div className="flex justify-center pt-4">
                                <a href="/Ryan_Meyer.pdf" download="Ryan_Meyer_Resume.pdf" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 hover:shadow-[0_0_15px_rgba(249,115,22,0.3)] transition-all duration-300"> 
                                    Download Resume
                                </a>
                            </div>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 gap-6">
                        <ScrollReveal direction="right" delay={200}>
                            <div className="glass-card-hover p-6">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Briefcase className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Work Experience</h4>
                                <p className="text-muted-foreground">
                                    3 roles at Saia LTL: ML Intern, Part-Time Contractor, and Data Engineering Intern. 
                                    Built ML pipelines, automated ETL processes for 50M+ records, and integrated systems with Salesforce & Dynamics 365.
                                </p>
                                </div>
                            </div>
                        </div>
                        </ScrollReveal>
                        <ScrollReveal direction="right" delay={300}>
                            <div className="glass-card-hover p-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-full bg-primary/10">
                                        <User className="h-6 w-6 text-primary"/>
                                    </div>
                                    <div className="text-left">
                                        <h4 className="font-semibold text-lg">Education</h4>
                                        <p className="text-muted-foreground">
                                            B.S. Computer Science at UGA, graduating May 2026. 
                                            Transferred from GCSU where I achieved Dean's List.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal direction="right" delay={400}>
                            <div className="glass-card-hover p-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-full bg-primary/10">
                                        <Code className="h-6 w-6 text-primary"/>
                            </div>
                                    <div className="text-left">
                                        <h4 className="font-semibold text-lg">Focus Areas</h4>
                                        <p className="text-muted-foreground">
                                            Machine Learning, Data Engineering, and Full-Stack Development. 
                                            Experienced with TensorFlow/Keras, AWS, Azure, and enterprise CRM integrations.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </section>
    );
};