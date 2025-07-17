import { React } from "react"

const skills = [
    //Top Languages
    {name: "JavaScript", level: 20, category: "Language"},
    {name: "Python", level: 60, category: "Language "},
    {name: "Java", level: 70, category: "Language"},
    {name: "C++", level: 60, category: "Language "},
    {name: "Rust", level: 40, category: "Language "},

    //Top Tech
    {name: "TensorFlow", level: 80, category: "Machine Learning "},
    {name: "SQLite", level: 40, category: "Backend"},
    {name: "React", level: 70, category: "Frontend"},
    {name: "AWS", level: 65, category: "API/Cloud Service"},
    {name: "Databricks", level: 50, category: "Cloud Analytics"},

    //Top Concepts
    {name: "Machine Learning", level: 90, category: "Concept"},
    {name: "Data Mining", level: 100, category: "Concept"},
    {name: "Data Analysis", level: 95, category: "Concept"},
    {name: "Algorithm Analysis", level: 75, category: "Concept"},
    {name: "Cloud Security", level: 65, category: "Concept"},
    
 ];

export const SkillsSection = () => {
    return ( <section id="skills" className="py-24 px-4 relative bg-secondary/30"
    >
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 font-center">
                My <span className="text-primary"> Skills </span>
            </h2>


            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {skills.map((skill, key) =>(
                    <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover"
                    >
                        <div className="text-left mb-4">
                            <h3 className="font-semibold text-lg"> {skill.name} </h3>
                        </div>
                        <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                        <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out" 
                            style={{width: skill.level + "%"}}
                        />
                        </div>
                        <div className="text-right mt-1">
                            <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>


    </section>
    );
}