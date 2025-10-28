import Education from '@/components/Education'
import Experience from '@/components/Experience'
import Profile from '@/components/Profile'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Socials from '@/components/Socials'
import React from 'react'

const page = () => {

  return (
    <div className='min-h-screen w-screen flex justify-center bg-[var(--background)] overflow-y-auto scrollbar-hide'>
      <div className='w-full sm:w-full md:w-[40%] h-full flex flex-col rounded-lg mt-6 px-4'>
        <Profile />
        <h3 className='ml-3 mt-8 text-[15px] font-medium text-[var(--accent)] tracking-wide'>Jack of all trades, Master of Frontend</h3>
        <h3 className='text-wrap ml-3 text-[14px] w-[75%] text-[var(--muted)] leading-relaxed mt-2'>Software Engineer from India. I love to develop sexy frontend designs more than my non-existing girlfriend.</h3>
        <div className="w-full h-12 p-4 items-center mt-4">
          <Skills />
        </div>
        <Socials />
        <h3 className='mt-8 ml-3 text-[22px] font-semibold text-[var(--foreground)] tracking-tight'>Experience</h3>
        <Experience />
        <h3 className='mt-8 ml-3 text-[22px] font-semibold text-[var(--foreground)] tracking-tight'>Projects</h3>
        <Projects />
        <h3 className='mt-8 ml-3 text-[22px] font-semibold text-[var(--foreground)] tracking-tight'>Education</h3>
        <Education />
        <div className='h-24 w-full mt-12 flex justify-center items-center text-center mr-3'>
          <h3 className='mb-10 italic text-[15px] text-[var(--muted-dark)] leading-relaxed'>Liked my work? Want to collaborate? Feel free to reach out to me on <a href='https://x.com/adesshhhhh' className='font-semibold text-[var(--foreground)] hover:text-[var(--accent)] transition-colors' >X</a> or <a href='mailto:adeshingale600@gmail.com' className='font-semibold text-[var(--foreground)] hover:text-[var(--accent)] transition-colors' >Email</a></h3>
        </div>
      </div>
    </div>
  )
}

export default page