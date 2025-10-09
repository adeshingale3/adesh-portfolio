import Experience from '@/components/Experience'
import Profile from '@/components/Profile'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Socials from '@/components/Socials'
import Link from 'next/link'
import React from 'react'

const page = () => {
  
  
  return (
    <div className=' h-screen w-screen flex justify-center bg-black overflow-y-auto scrollbar-hide'>
      <div className=' w-full sm:w-full md:w-[40%] h-full flex flex-col rounded-lg '>
        <Profile />
        <h3 className='ml-3 text-[14px] font-semibold'>Jack of all trades, Master of Frontend</h3>
        <h3 className='text-wrap ml-3 text-[13px] w-[70%] '>Software Engineer from India. I love to develope sexy frontend designs more than my non-existing girlfriend.</h3>
        <Skills />
        <Socials />
        <h3 className='mt-6 ml-3'>Experience --------------------------------------</h3>
        <Experience />
        <h3 className='mt-6 ml-3'>Projects --------------------------------------</h3>
        <Projects />
      </div>
    </div>
  )
}

export default page