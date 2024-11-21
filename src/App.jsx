import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './Components/Navbar';
import backgroundVideo from '/bg-video.mp4';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Cyl from './Components/Cyl';
import { Bloom, EffectComposer, ToneMapping } from '@react-three/postprocessing';
import Typewriter from './Components/Typewriter';
import './index.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const App = () => {
    const [isOpen, setIsOpen] = useState(false); // Remove TypeScript boolean annotation
    

    // This is to animate drop down menu button
    const topVarient = {
        opened: {
            rotate: 20, // Use `deg` directly here
        },
        closed: {
            rotate: 0,
        }
    };

    const bottomVarient = {
        opened: {
            rotate: -20,
        },
        closed: {
            rotate: 0,
        }
    };



    return (
        <div className='h-screen w-screen overflow-hidden fixed'>
            <div className='h-full w-full p-4 md:p-12 lg:p-24'>
                {/* Background Video */}
                <video
                    autoPlay
                    loop
                    muted
                    className="top-0 left-0 w-full h-full object-cover -z-10 fixed"
                >
                    <source src={backgroundVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <section className='w-full h-full px-2 md:px-6 lg:px-10 bg-transperant'>
                    <div className='w-full flex justify-between items-center relative z-40 bg-transparent'>
                        {/* Logo */}
                        <img 
                            className='h-[40px] w-[40px] md:h-[60px] md:w-[60px] lg:h-[80px] lg:w-[80px]' 
                            src="/logo.png" 
                            alt="logo" 
                        />
                        {/* Drop Down Menu */}
                        <div 
                            className='space-y-1 md:space-y-2 cursor-pointer' 
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <motion.div 
                                className='w-[30px] md:w-[40px] lg:w-[50px] h-[6px] md:h-[8px] lg:h-[10px] bg-yellow-300 origin-left' 
                                variants={topVarient} 
                                animate={isOpen ? 'opened' : 'closed'} 
                            ></motion.div>
                            <motion.div 
                                className='w-[30px] md:w-[40px] lg:w-[50px] h-[6px] md:h-[8px] lg:h-[10px] bg-yellow-300 origin-left' 
                                variants={bottomVarient} 
                                animate={isOpen ? 'opened' : 'closed'} 
                            ></motion.div>
                        </div>
                    </div>
                    <Canvas 
                        className='-mt-28 md:-mt-16 lg:-mt-24' 
                        camera={{ fov: 40 }}
                    >
                        <OrbitControls />
                        <ambientLight />
                        <Cyl className='align-top' />
                        <EffectComposer>
                            <Bloom
                                mipmapBlur
                                intensity={3.0}                  
                                luminanceThreshold={0}
                                luminanceSmoothing={0}
                            />
                            <ToneMapping adaptive/>
                        </EffectComposer>
                    </Canvas>
                    <div>
                        <Typewriter />
                    </div>
                </section>
                <ToastContainer />
                <AnimatePresence mode='wait'>
                    {isOpen ? (
                        <>
                            <Navbar className='font-["lockedWindow"]' />
                        </>
                        

                    ) : null}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default App;
