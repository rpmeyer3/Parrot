import React from "react";
import { Mail, Linkedin, Github, Phone } from "lucide-react";

const contactLinks = [
    {
        name: "Email",
        value: "ryanpaulmeyer@gmail.com",
        href: "mailto:ryanpaulmeyer@gmail.com",
        icon: Mail
    },
    {
        name: "Phone",
        value: "(470) 841-9228",
        href: "tel:+14708419228",
        icon: Phone
    },
    {
        name: "LinkedIn",
        value: "linkedin.com/in/rmeyer3",
        href: "https://linkedin.com/in/rmeyer3",
        icon: Linkedin
    },
    {
        name: "GitHub",
        value: "github.com/rpmeyer3",
        href: "https://github.com/rpmeyer3",
        icon: Github
    }
];

export const ContactSection = () => {
    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className="text-primary">Touch</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    I'm currently looking for new opportunities. Whether you have a question or just want to say hi, feel free to reach out!
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {contactLinks.map((contact, index) => (
                        <a
                            key={index}
                            href={contact.href}
                            target={contact.href.startsWith("http") ? "_blank" : undefined}
                            rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="gradient-border p-6 card-hover text-center group"
                        >
                            <div className="flex flex-col items-center gap-3">
                                <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                                    <contact.icon className="h-6 w-6 text-primary" />
                                </div>
                                <h3 className="font-semibold">{contact.name}</h3>
                                <p className="text-sm text-muted-foreground break-all">
                                    {contact.value}
                                </p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};
