import About from '@/components/AboutMe'
import Container from '@/components/Container'
import Experience from '@/components/Experience'
import Footer from '@/components/Footer'

import Navbar from '@/components/Navbar'
import Profile from '@/components/Profile'
import { ProjectsSection } from '@/components/Projects'

import React from 'react'

const page = () => {

  return (
    <Container className="min-h-screen py-10">
      
      <Navbar />
      <Profile />
      <Experience />
      <ProjectsSection />
      <About />
      <Footer />
    </Container>
  )
}

export default page