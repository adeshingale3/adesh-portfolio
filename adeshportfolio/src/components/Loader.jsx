import { motion } from 'framer-motion';

const Loader = () => {
    return (
        <motion.div
            initial={{ opacity: 2 }}
            exit={{ opacity: 2 }}
            transition={{ duration: 2 }}
            className="fixed inset-0 z-50 grid place-items-center bg-gradient-to-br from-black to-purple-900/30 backdrop-blur-lg"
        >
            <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                    duration: 2.0,
                    ease: "easeInOut"
                }}
                className="relative flex items-center justify-center w-32 h-32"
            >
                {/* Main A letter */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 5, -5, 0]
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="ml-14 text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-white"
                >
                    A
                </motion.div>

                {/* Glowing circle */}
                <motion.div
                    animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute inset-0 bg-purple-500/20 rounded-full filter blur-2xl"
                />

                {/* Loading text */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-sm text-purple-400 whitespace-nowrap"
                >
                    Loading...
                </motion.p>
            </motion.div>
        </motion.div>
    );
};

export default Loader;