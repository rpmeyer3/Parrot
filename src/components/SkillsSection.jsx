import React from "react"
import { Code, Database, Brain, Cloud, Wrench } from "lucide-react"

const skillCategories = [
    {
        name: "Languages",
        icon: Code,
        skills: ["Python", "Java", "SQL", "C#", "JavaScript", "TypeScript", "C", "C++"]
    },
    {
        name: "ML & Data",
        icon: Brain,
        skills: ["TensorFlow", "Keras", "Pandas", "NumPy", "Power BI", "DAX", "OpenAI API"]
    },
    {
        name: "Web & Backend",
        icon: Wrench,
        skills: ["React", "Node.js", "Next.js", "Django", "Flask", "Tailwind CSS", "Supabase"]
    },
    {
        name: "Cloud & Tools",
        icon: Cloud,
        skills: ["AWS (S3, EC2)", "Azure", "Docker", "Terraform", "Git", "Salesforce", "Dynamics 365", "Wireshark"]
    },
    {
        name: "Databases",
        icon: Database,
        skills: ["MySQL", "MongoDB", "SQLite", "PostgreSQL"]
    }
];

export const SkillsSection = () => {
    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary">Skills</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, index) => (
                        <div 
                            key={index} 
                            className="gradient-border p-6 card-hover"
                        >
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
                                        className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}