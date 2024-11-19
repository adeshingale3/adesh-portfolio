import { motion } from 'framer-motion';
import React from 'react';


import { toast } from 'react-toastify';


const Navbar = () => {
  const children = {
    hidden: {
      clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
    },
    show: (i) => ({
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      transition: {
        ease: [0.22, 1, 0.36, 1],  // Smooth ease-out curve for a gentle effect
        delay: i * 0.1,             // Staggered delay based on index for a synchronized upward motion
        duration: 1.2,              // Extended duration for a slower reveal
      },
    }),
    exit: (i) => ({
      clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
      transition: {
        ease: [0.42, 0, 0.58, 1],   // Smooth ease-in curve for exit animation
        delay: i * 0.05,            // Slightly faster stagger delay on exit
        duration: 0.8,
      },
    }),
  };


  const navLinks = {
    hidden: {
      y: "100%",
    },
    show: {
      y: 0,
      transition: {
        ease: 'easeOut',
        delay: 0.4,
        duration: 0.4
      }
    },
    exit: {
      y: "100%",
      transition: {
        ease: 'easeOut',
        duration: 0.4
      }
    }
  }
  const showToast = (message) => {
    toast.success(message, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <div className='w-screen h-screen overflow-hidden fixed inset-0'>
      <div className='w-full h-full grid grid-cols-20 grid-rows-1'>
        {
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map((_, i) => (
            <motion.div key={i} className='w-full h-full bg-fuchsia-700' variants={children} initial="hidden" animate="show" exit="exit" custom={i}></motion.div>
          ))
        }
      </div>
      <section className='w-full h-full absolute inset-0 flex justify-center items-center z-30'>
                <ul className='w-full md:w-[700px] lg:w-[900px] leading-none font-bold text-black px-4'>
                    <li className='overflow-hidden'>
                        <motion.div className='flex items-center' variants={navLinks} initial="hidden" animate="show" exit="exit">
                            <h3 className='text-sm md:text-xl lg:text-2xl mr-2'>01</h3>
                            <a href="#" className='text-4xl md:text-6xl lg:text-[80px] hover:text-white' onClick={() => showToast("Under Development!")}>HOME</a>
                            
                        </motion.div>
                    </li>
                    <li className='overflow-hidden'>
                        <motion.div className='flex items-center' variants={navLinks} initial="hidden" animate="show" exit="exit">
                            <h3 className='text-sm md:text-xl lg:text-2xl mr-2'>02</h3>
                            <a href='#' className='text-4xl md:text-6xl lg:text-[80px] hover:text-white' onClick={() => showToast("Under Development!")}>WORK</a>
                        </motion.div>
                    </li>
                    <li className='overflow-hidden'>
                        <motion.div className='flex items-center' variants={navLinks} initial="hidden" animate="show" exit="exit">
                            <h3 className='text-sm md:text-xl lg:text-2xl mr-2'>03</h3>
                            <a href="#" className='text-4xl md:text-6xl lg:text-[80px] hover:text-white' onClick={() => showToast("Under Development!")}>EDUCATION</a>
                        </motion.div>
                    </li>
                    <li className='overflow-hidden'>
                        <motion.div className='flex items-center' variants={navLinks} initial="hidden" animate="show" exit="exit">
                            <h3 className='text-sm md:text-xl lg:text-2xl mr-2'>04</h3>
                            <a href="#" className='text-4xl md:text-6xl lg:text-[80px] hover:text-white' onClick={() => showToast("Under Development!")}>CONTACT</a>
                        </motion.div>
                    </li>
                </ul>
            </section>
    </div>
  );
};

export default Navbar;