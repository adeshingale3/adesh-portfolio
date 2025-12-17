import Image from 'next/image';
import React from 'react';

import { about, mySkills } from '@/config/About';
import Container from './Container';
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip';
import Nextjs from './technology-icons/Nextjs';
import Reactjs from './technology-icons/Reactjs';
import Nodejs from './technology-icons/Nodejs';
import Expressjs from './technology-icons/Expressjs';
import CV from './svgs/CV';
import ArrowUUpRight from './svgs/ArrowUUpRight';
import LinkedIn from './svgs/LinkedIn';
import X from './svgs/X';
import Github from './svgs/Github';
import Mail from './svgs/Mail';
import Website from './svgs/Website';
import SpotifyNowPlaying from './Spotify';

export default function About() {
  return (
    <Container className="mt-8 border-1 border-white/20 rounded-xl p-6">
      {/* <SectionHeading subHeading="About" heading="Me" /> */}
      {/* About me */}
      <div className=" flex flex-col gap-4 md:flex-col">
        <Image
          src="/Profile.png"
          alt="About"
          width={100}
          height={100}
          className="object-cover border-secondary size-40 rounded-full border-2 bg-blue-300 dark:bg-yellow-300"
        />
        <div className="mt-4">
          <h3 className="text-3xl font-bold">Hi, I'm Adesh -- <span className='text-gray-500'>A Full Stack Web Developer</span></h3>
          <p className="text-secondary mt-4 text-white/40">{about.description}</p>
          <p className="text-secondary mt-4 text-white/40 flex flex-row gap-2 flex-wrap">I build stuff using <Nextjs />, <Reactjs/>, <Nodejs />, <Expressjs /> </p>
        </div>

        <div className='mt-4 flex flex-row items-center gap-4'>
          <div className='h-10 min-w-30 flex flex-row border-1 border-white border-dashed bg-white/10 rounded-lg items-center py-4 px-2 justifuy-between'>
            <div className='h-6 w-6'><CV /></div>
            <a href="https://drive.google.com/file/d/1mUtZJRnvbrr3_bUrpCnNMphI2K0ZR3TA/view?usp=sharing" download className='text-[12px] text-white ml-2'>Resume/CV</a>
          </div>

          <div className='h-10 min-w-20 flex flex-row border-1 border-white border-dashed bg-white/10 rounded-lg items-center py-4 px-2 justifuy-center'>
            <div className='h-6 w-6'><LinkedIn /></div>
            <a href="https://www.linkedin.com/in/adesshhhhh/" download className='text-[12px] text-white ml-2'>Get In Touch</a>
          </div>
        </div>


        <div className='mt-4 flex flex-row items-center gap-2'>
          <a href="https://x.com/adesshhhhh" className='h-5 w-5'><X /></a>
          <a href="https://www.linkedin.com/in/adesshhhhh/" className='h-5 w-5'><LinkedIn /></a>
          <a href="https://github.com/adeshingale3" className='h-5 w-5' ><Github /></a>
          <a href="mailto:adeshingale600@gmail.com" className='h-5 w-5'><Mail /></a>
          <a href="https://adeshingale.vercel.app/" className='h-5 w-5'><Website /></a>
        </div>

        {/* <SpotifyNowPlaying /> */}
      </div>
    </Container>
  );
}