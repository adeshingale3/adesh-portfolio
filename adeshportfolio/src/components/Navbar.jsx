import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Briefcase, GraduationCap, Mail, Menu, X, Sparkles } from 'lucide-react';

const navItems = [
    { icon: Home, label: 'Home', href: '#home' },
    { icon: Briefcase, label: 'Work', href: '#work' },
    { icon: Mail, label: 'Education', href: '#education' },
    { icon: Mail, label: 'Contact', href: '#contact' },
];

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const menuVariants = {
        closed: {
            x: "100%",
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 40
            }
        },
        open: {
            x: 0,
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 40
            }
        }
    };

    const linkVariants = {
        closed: { x: 50, opacity: 0 },
        open: i => ({
            x: 0,
            opacity: 1,
            transition: {
                delay: i * 0.1
            }
        })
    };

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-lg border-b border-purple-500/20' : 'bg-transparent'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        <motion.div
                            className="text-white font-bold text-xl flex items-center gap-2"
                            whileHover={{ scale: 1.05 }}
                        >
                            <Sparkles className="w-6 h-6 text-purple-400" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-white">
                                Adesh
                            </span>
                        </motion.div>

                        <motion.button
                            whileTap={{ scale: 0.95 }}
                            className="text-gray-300 hover:text-white p-2 z-50"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </motion.button>
                    </div>
                </div>
            </motion.nav>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={menuVariants}
                        className="fixed inset-0 bg-black/95 backdrop-blur-xl z-40 flex items-center justify-center"
                    >
                        <div className="p-6 space-y-8 w-full max-w-lg">
                            {navItems.map((item, i) => (
                                <motion.a
                                    key={item.label}
                                    custom={i}
                                    variants={linkVariants}
                                    href={item.href}
                                    className="flex items-center space-x-4 group p-4 text-2xl"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <item.icon className="w-8 h-8 text-purple-400" />
                                    <span className="text-gray-300 group-hover:text-white transition-colors">
                                        {item.label}
                                    </span>
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;