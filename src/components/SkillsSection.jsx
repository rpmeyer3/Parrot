import { React } from "react"

const skills = [
    //Top Languages
    {name: "JavaScript", category: "Language"},
    {name: "Python", category: "Language "},
    {name: "Java", category: "Language"},
    {name: "C++", category: "Language "},

    //Top Tech
    {name: "TensorFlow", category: "Machine Learning "},
    {name: "SQLite", category: "Backend"},
    {name: "React", category: "Frontend"},
    {name: "AWS", category: "API/Cloud Service"},
    {name: "Databricks", category: "Cloud Analytics"},

    //Top Concepts
    {name: "Machine Learning", category: "Concept"},
    {name: "Data Mining", category: "Concept"},
    {name: "Data Analysis", category: "Concept"},
    {name: "Algorithm Analysis", category: "Concept"},
    {name: "Cloud Security", category: "Concept"},
    
 ];

export const SkillsSection = () => {
    return ( <section id="skills" className="py-24 px-4 relative bg-secondary/30"
    >
        <div className="container mx-auto max-w-5xl">

        </div>


    </section>
    );
}