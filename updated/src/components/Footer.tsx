import React from 'react'
import Container from './Container'
import LinkedIn from './svgs/LinkedIn'
import Mail from './svgs/Mail'

const Footer = () => {
  return (
    <Container className='text-center flex flex-col items-center mt-16 border-1 border-white/20 rounded-lg p-6'>
        <h1 className='font-semibold text-lg text-gray-400'>YOU HAVE SCROLLED THIS FAR, LET'S TALK!</h1>
        <div className='flex flex-row items-center gap-4 mt-4'>
            <a href="https://www.linkedin.com/in/adesshhhhh/" className='h-6 w-6'><LinkedIn /></a>
            <a href="mailto:adeshingale600@gmail.com" className='h-6 w-6'><Mail /></a>
            
        </div>
    </Container>
  )
}

export default Footer