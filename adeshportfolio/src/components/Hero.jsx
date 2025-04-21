
import React from 'react'
import { motion } from 'framer-motion';
import Scene from './Scene';
import { useState, useEffect } from 'react';
import { useScroll, useTransform } from 'framer-motion';
import { Sparkles } from 'lucide-react';



const Hero = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate loading time
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);
    const { scrollYProgress } = useScroll();
    const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);
    return (
        <div>
            <section id="home" className="relative h-screen overflow-hidden">
                <motion.div
                    style={{ opacity, scale }}
                    className="absolute inset-0 z-0"
                >
                    <Scene />
                </motion.div>
                <div className="relative z-10 flex items-center justify-center h-full px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-center max-w-4xl"
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
                            className="mb-6 inline-block"
                        >
                            <div className="text-sm inline-block px-4 py-1 rounded-full bg-purple-500/10 text-purple-400 mb-4">
                                Full Stack Developer
                            </div>
                            <div className="text-sm inline-block px-4 py-1 rounded-full bg-purple-500/10 text-purple-400 mb-4">
                                Graphic Designer
                            </div>
                        </motion.div>
                        <h1 className="text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-white">
                            Adesh Ingale
                        </h1>
                        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                            Crafting digital experiences through elegant code and innovative solutions
                        </p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                            className="flex justify-center gap-4"
                        >
                            <a href="#work" className="px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-700 transition-colors flex items-center gap-2">
                                View My Work 
                                {/* <Sparkles className="w-4 h-4" /> */}
                            </a>
                            <a href="#contact" className="px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                                Contact Me
                            </a>
                            <a href="https://drive.google.com/file/d/1XUFxQm1aBJyLIkEQxWad8fw8VV6p8QRt/view?usp=drive_link" className="px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                                 CV
                            </a>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

export default Hero
