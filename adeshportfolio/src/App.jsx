import { useState, useEffect } from 'react';
import Loader from './components/Loader';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navbar from './components/Navbar';

import Education from './components/Education';
import Work from './components/Work';
import Hero from './components/Hero';

import ContactPage from './components/Contact';
import Skill from './components/Skill';
import SplashCursor from './blocks/Animations/SplashCursor/SplashCursor';
import GraphicDesign from './components/GraphicDesign';
import GlobalClickSound from './components/ClickSound';




// ... rest of the imports and data remain the same ...

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Loader />}
      <div className="bg-[#0a0a0a] min-h-screen text-white selection:bg-purple-500/30">
        <GlobalClickSound />
        <SplashCursor/>
        <Navbar />
        <Hero />
        <Work />
        <GraphicDesign />
        <Skill />
        <Education />
        <ContactPage />
      </div>
    </>
  );
}

export default App;