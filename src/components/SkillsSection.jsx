import React from "react";
import { Code, Database, Brain, Cloud, Wrench } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const skillCategories = [
    {
        name: "Languages",
        icon: Code,
        skills: ["Python", "Java", "C++", "C#", "SQL", "JavaScript", "TypeScript", "Bash/Shell", "HTML5 & Tailwind"]
    },
    {
        name: "AI & ML",
        icon: Brain,
        skills: ["TensorFlow", "PyTorch", "Keras", "Scikit-learn", "LangChain", "OpenCV", "Hugging Face", "MLOps", "RAG"]
    },
    {
        name: "Web & Backend",
        icon: Wrench,
        skills: ["Next.js", "React", "Node.js", "Django", "FastAPI", "GraphQL", "Prisma", "Supabase"]
    },
    {
        name: "Cloud & DevOps",
        icon: Cloud,
        skills: ["AWS (Lambda, S3, RDS)", "GCP", "Vercel", "Render", "Docker", "Kubernetes", "Terraform", "Linux", "Git"]
    },
    {
        name: "Data & Analytics",
        icon: Database,
        skills: ["Pandas", "NumPy", "Power BI", "DAX", "XGBoost", "MongoDB", "Cassandra", "Neo4j", "PostgreSQL"]
    }
];

export const SkillsSection = () => {
    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <ScrollReveal>
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                        My <span className="text-primary">Skills</span>
                    </h2>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, index) => (
                        <ScrollReveal key={index} delay={index * 100} direction="scale">
                            <div className="glass-card-hover p-6 h-full">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 rounded-lg bg-primary/10">
                                    <category.icon className="h-6 w-6 text-primary" />
                                </div>
                                <h3 className="font-semibold text-lg">{category.name}</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, skillIndex) => (
                                    <span 
                                        key={skillIndex}
                                        className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 hover:scale-105 transition-all duration-200 cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};