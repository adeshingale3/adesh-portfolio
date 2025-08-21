import React from 'react';
import { motion } from 'framer-motion';
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss, SiNodedotjs, 
         SiMongodb, SiExpress, SiGit, SiGithub, SiFigma, SiAdobephotoshop, SiFlutter, SiFirebase, SiPython } from 'react-icons/si';
import { SiDart, SiC, SiCplusplus } from 'react-icons/si';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJava } from "@fortawesome/free-brands-svg-icons";
import {CssCardIcon, FlutterCardIcon, HtmlCardIcon, JavascriptCardIcon, ReactCardIcon, TailwindCardIcon} from 'wavyjs'
const Skill = () => {
  const skills = {
    frontend: [
      { name: 'HTML5', icon: <HtmlCardIcon/> },
      { name: 'CSS3', icon: <CssCardIcon /> },
      { name: 'JavaScript', icon: <JavascriptCardIcon /> },
      { name: 'React', icon: <ReactCardIcon/> },
      { name: 'Tailwind CSS', icon: <TailwindCardIcon /> },
      { name: 'Flutter', icon: <FlutterCardIcon />},
    ],
    backend: [
      { name: 'Node.js', icon: <SiNodedotjs className="text-[#339933]" /> },
      { name: 'MongoDB', icon: <SiMongodb className="text-[#47A248]" /> },
      { name: 'Express.js', icon: <SiExpress className="text-white" /> },
      { name: 'Firebase', icon: <SiFirebase className="text-[#FFCA28]" /> },
    ],
    programmingLanguages: [
        { name: 'Python', icon: <SiPython className="text-[#3776AB]" /> },
        { name: 'Java', icon: <FontAwesomeIcon icon={faJava} className="text-[#3776AB]" /> },
        { name: 'JavaScript', icon: <SiJavascript className="text-[#F7DF1E]" /> },
        { name: 'Dart', icon: <SiDart className="text-[#0175C2]" /> },
        { name: 'C', icon: <SiC className="text-[#A8B9CC]" /> },
        { name: 'C++', icon: <SiCplusplus className="text-[#00599C]" /> },
    ],
    versionControl: [
      { name: 'Git', icon: <SiGit className="text-[#F05032]" /> },
      { name: 'GitHub', icon: <SiGithub className="text-white" /> },
    ],
    tools: [
      { name: 'Figma', icon: <SiFigma className="text-[#F24E1E]" /> },
      { name: 'Photoshop', icon: <SiAdobephotoshop className="text-[#31A8FF]" /> },
    ],
  };

  const SkillSection = ({ title, items }) => (
    <div className="mb-8 text-center">  {/* Added text-center */}
      <h3 className="text-xl md:text-2xl font-bold mb-4 text-purple-400 text-center">{title}</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 place-items-center">  {/* Added place-items-center */}
        {items.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col items-center justify-center p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors w-full"  
            
          >
            <div className="text-3xl mb-2 flex justify-center">{skill.icon}</div>
            <span className="text-sm text-gray-300 text-center">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-16 md:py-32 px-4">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-12 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-white"
          >
            Skills & Technologies
          </motion.h2>
          <p className="text-sm md:text-base text-gray-300 max-w-2xl mx-auto">
            A comprehensive list of technologies I work with
          </p>
        </div>

        <SkillSection title="Frontend Development" items={skills.frontend} />
        <SkillSection title="Backend Development" items={skills.backend} />
        <SkillSection title="Programming Languages" items={skills.programmingLanguages} />
        <SkillSection title="Version Control" items={skills.versionControl} />
        <SkillSection title="Design Tools" items={skills.tools} />
      </motion.div>
    </section>
  );
};

export default Skill;