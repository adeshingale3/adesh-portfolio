import React from 'react'
import { Github, Linkedin, Twitter, Mail, ExternalLink, ChevronRight, Sparkles, Rocket, Brain, Code } from 'lucide-react';
import { motion } from 'framer-motion';

const Work = () => {
    const projects = [
        {
            title: "EcoPlace",
            description: "EcoPlace is a platform that provides real-time sustainability scores for e-commerce products, empowering consumers and businesses to make eco-friendly decisions.",
            image: "/public/assets/ecoplace.png",
            tags: ["Python", "React.js", "Tailwind CSS", "Firebase", "Node.js"],
            link: "https://github.com/adeshingale3/EcoPlace",
            icon: Brain
        },
        {
            title: "VConnect",
            description: "VConnect is a gamified web platform that connects volunteers with organizers by offering event management tools, a points-based reward system (AURA), and social features to make volunteering engaging and rewarding",
            image: "/public/assets/vconnect.png",
            tags: ["React.js", "Tailwind CSS", "Firebase", "Node.js"],
            link: "https://github.com/adeshingale3/Vconnect",
            icon: Rocket
        },
        {
            title: "Saviour - Disaster Management Application",
            description: "Saviour is a mobile application which gives you all emergency contact number and locations of your nearest disaster management agency at one place. This application makes easy to get help during disaster as fast as one can.",
            image: "https://source.unsplash.com/random/1200x800?blockchain",
            tags: ["Flutter", "Dart", "Firebase", "Open Weather API", "Google Maps API"],
            link: "https://github.com/adeshingale3/disaster-management-flutter-application",
            icon: Code
        }
    ];
    return (
        <div>
            {/* Work Section */}
            <section id="work" className="py-16 md:py-32 px-4">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="max-w-7xl mx-auto"
                >
                    <div className="text-center mb-12 md:mb-20">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-white"
                        >
                            Featured Work
                        </motion.h2>
                        <p className="text-sm md:text-base text-gray-300 max-w-2xl mx-auto">
                            A collection of projects that showcase my expertise in building modern web applications
                        </p>
                    </div>

                    <div className="space-y-16 md:space-y-32">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                className="group relative bg-white/5 rounded-2xl p-6 md:p-10"
                            >
                                <div className="flex flex-col md:flex-row gap-8 items-start">
                                    <div className="w-full md:w-1/2">
                                        <h3 className="text-2xl md:text-3xl font-bold group-hover:text-purple-400 transition-colors mb-4">
                                            {project.title}
                                        </h3>
                                        <p className="text-sm md:text-base text-gray-300 mb-6">
                                            {project.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {project.tags.map((tag, tagIndex) => (
                                                <span
                                                    key={tagIndex}
                                                    className="px-3 py-1 text-xs md:text-sm bg-white/10 rounded-full text-gray-300"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        <motion.a
                                            href={project.link}
                                            whileHover={{ x: 10 }}
                                            className="inline-flex items-center text-sm md:text-base text-purple-400 hover:text-purple-300 gap-2"
                                        >
                                            View Project <ExternalLink className="w-3 h-3 md:w-4 md:h-4" />
                                        </motion.a>
                                    </div>
                                    <div className="w-full md:w-1/2">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="rounded-xl w-full h-auto object-cover shadow-lg"
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>
        </div>
    )
}

export default Work
