import React from "react";
import { Code } from "lucide-react"
import { User } from "lucide-react"
import { Briefcase} from "lucide-react"

export const AboutSection = () => {
    return ( <section id="about" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary">Me</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold"> Currentlly Still in College & Looking to break into AI or CyberSec Roles</h3>
                    <p className="text-muted-foreground">
                        As a rising Senior in my CS education I have been around the block completing my major technical course work.
                        I currently attend the University of Georgia in Athens, Georgia. I am Originally from Cummming, Georgia.
                        I have been working the past 52 weeks as an intern and part-time employee for SAIA LTL. I am a part of some of thier
                        major Buisness Intelligence and C# Development. I have also been building machine learning models and tools with 
                        TensorFlow and Ollama for some data mining and engineering pipelines related to customer shipment level data.
                    </p>
                    <p className="text-muted-foreground">
                        In college I have been staying relatively active in the Hackathon space attending my schools own and at Georgia Tech not 
                        taking home any major hardware. I find myself invloded in the HackPack. In my freetime I play a great deal of Tennis and Soccer to stay sociable and athletic. I also venture into the 
                        gym when I find myself free, which is not very often.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button"> Get in Touch </a>
                        <a href="" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 tansition-colors duration-300"> Download Resume</a>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> Programming Interests</h4>
                                <p className="text-muted-foreground">
                                    I am very interested in finding a position doing Machine Learning or Cloud Security
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <User className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> Education </h4>
                                <p className="text-muted-foreground">
                                    I am currently a Senior at UGA studying Computer Science, if I could go back in time I would likely
                                    be more alligned with Computer Engineering or EE.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Briefcase className="h-6 w-6 text-primary"/>
                            </div>
                                <div className="text-left">
                                <h4 className="font-semibold text-lg"> Work Experience</h4>
                                <p className="text-muted-foreground">
                                    Since joining SAIA Ltl. I've been working with some C# and performing Data Augmentation and Mining 
                                    with Python and I've have been training and testing a ML Model for Mining and the process for RFP uploads to Salesforce. 
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};