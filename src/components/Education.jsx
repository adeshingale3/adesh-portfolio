import React from 'react'
import { Github, Linkedin, Twitter, Mail, ExternalLink, ChevronRight, Sparkles, Rocket, Brain, Code } from 'lucide-react';
import { motion } from 'framer-motion';

const Education = () => {
    const educationData = [
        {
            school: "Rajapur High School, Rajapur",
            degree: "SSC",
            duration: "-2019",
            description: "Participated in various Social Activities and Events",
            achievements: ["9.1 GPA", "#1 in English Subject"],
            icon: Mail
        },
        {
            school: "Sambhajirao Mane Jr. College, Gadhinglaj",
            degree: "HSC",
            duration: "2020 - 2021",
            description: "Completed 12th grade in the Science stream, specializing in Physics, Chemistry, and Mathematics. Developed a strong foundation in analytical thinking and problem-solving, which fueled my passion for technology and engineering.",
            achievements: ["9.7 GPA"],
            icon: Mail
        },
        {
            school: "Kolhapur Institute of Technology's College of Engineering, Kolhapur",
            degree: "Bachelor of Engineering",
            duration: "2021 - 2025",
            description: "Major in Computer Science and Engineering",
            achievements: ["7.6 CGPA", "Participated in 6+ Hackathons", "Ninjacart Hackathon Finalist", "HackSprint National Level Hackathon Winner", "CSI International Project Award Winner"],
            icon: Mail
        }
    ];
    return (
        <div>
            {/* Education Section */}
            <section id="education" className="py-32 px-4 bg-black/30">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="max-w-7xl mx-auto"
                >
                    <div className="text-center mb-20">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-white"
                        >
                            Education
                        </motion.h2>
                        <p className="text-gray-300 max-w-2xl mx-auto">
                            My academic journey and achievements
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {educationData.map((edu, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                whileHover={{ scale: 1.02 }}
                                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-purple-500/20 rounded-lg">
                                        <edu.icon className="w-6 h-6 text-purple-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-1">{edu.school}</h3>
                                        <p className="text-purple-400 mb-2">{edu.degree}</p>
                                        <p className="text-gray-400 text-sm mb-3">{edu.duration}</p>
                                        <p className="text-gray-300 mb-4">{edu.description}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {edu.achievements.map((achievement, i) => (
                                                <span
                                                    key={i}
                                                    className="text-sm px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full"
                                                >
                                                    {achievement}
                                                </span>
                                            ))}
                                        </div>
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

export default Education
