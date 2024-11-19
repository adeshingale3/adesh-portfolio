import React from 'react'
import { useTypewriter } from 'react-simple-typewriter'


const Typewriter = () => {
  const[typeEffect] = useTypewriter({
      words: [' Web Developer !', 'App Developer !', 'Graphic Designer !'],
      loop: {},
      typeSpeed: 100,
      deleteSpeed: 40
  })
  return (
      <div className='-mt-10'>
          <h1 className='font-bold text-2xl md:text-4xl lg:text-5xl flex justify-center font-["Calgary"]'>
              HEY I'M ADESH INGALE
          </h1>
          <h1 className='font-bold text-base md:text-lg lg:text-xl flex justify-center mt-2 md:mt-3 lg:mt-4'>
              I'm 
              <span className='ml-2 text-yellow-400'>{typeEffect}</span>
          </h1>
      </div>
  );
};

export default Typewriter
