import Education from '@/components/Education'
import Experience from '@/components/Experience'
import Profile from '@/components/Profile'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Socials from '@/components/Socials'
import React from 'react'

const page = () => {


  return (
    <div className=' h-screen w-screen flex justify-center bg-black overflow-y-auto scrollbar-hide'>
      <div className=' w-full sm:w-full md:w-[40%] h-full flex flex-col rounded-lg '>
        <Profile />
        <h3 className='ml-3 text-[14px] font-semibold text-white/80'>Jack of all trades, Master of Frontend</h3>
        <h3 className='text-wrap ml-3 text-[13px] w-[70%] text-white/70'>Software Engineer from India. I love to develope sexy frontend designs more than my non-existing girlfriend.</h3>
        <div className="w-full h-10 p-4 items-center">
          <Skills />
        </div>
        <Socials />
        <h3 className='mt-6 ml-3 text-[20px] font-bold'>Experience </h3>
        <Experience />
        <h3 className='mt-6 ml-3 text-[20px] font-bold'>Projects </h3>
        <Projects />
        <h3 className='mt-6 ml-3 text-[20px] font-bold'>Education</h3>
        <Education />
        <div className='h-20 w-full mt-15 flex justify-center items-center text-center mr-3'>
          <h3 className='mb-10 italic text-[15px] text-gray-400'>Liked my work? Want to collaborate? Feel free to reach out to me on <a href='https://x.com/adesshhhhh' className='font-bold text-white' >X</a>  or <a href='mailto:adeshingale600@gmail.com' className='font-bold text-white' >Email</a></h3>
        </div>
      </div>
    </div>
  )
}

export default page