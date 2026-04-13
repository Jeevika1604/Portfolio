import React from 'react';
import SectionWrapper from '../components/common/SectionWrapper';
import { motion } from 'framer-motion';
import {
  FileCode,
  Palette,
  Code2,
  Layout,
  Atom,
  Zap,
  Wind,
  GitBranch,
  Image,
  Layers
} from 'lucide-react';
import { Github, Figma } from '../components/ui/BrandIcons';

import Skill3DCard from '../components/ui/Skill3DCard';
import Marquee from '../components/ui/Marquee';

const Skills = () => {
  const skills = [
    { name: 'HTML', icon: FileCode, color: "#e34f26" },
    { name: 'CSS', icon: Palette, color: "#1572b6" },
    { name: 'JavaScript', icon: Code2, color: "#f7df1e" },
    { name: 'Bootstrap', icon: Layout, color: "#7952b3" },
    { name: 'React JS', icon: Atom, color: "#61dafb" },
    { name: 'Next.js', icon: Zap, color: "#ffffff" },
    { name: 'Tailwind CSS', icon: Wind, color: "#38bdf8" },
    { name: 'Git', icon: GitBranch, color: "#f05032" },
    { name: 'Figma', icon: Figma, color: "#f24e1e" },
    { name: 'Canva', icon: Layers, color: "#00c4cc" },
  ];

  return (
    <SectionWrapper id="skills" className="overflow-hidden bg-slate-50/50 dark:bg-dark-lighter/10">
      <div className="text-center mb-6 lg:mb-10 relative z-10">
        <h2 className="heading-lg mb-4">Core <span className="text-primary-600">Technologies</span></h2>
        <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
          The technical toolset I use to bring creative visions to life, presented in interactive 3D.
        </p>
      </div>

      <div className="relative flex flex-col items-center justify-center py-10">
        <Marquee pauseOnHover className="[--duration:40s]">
          {skills.map((skill, index) => (
            <Skill3DCard key={index} {...skill} />
          ))}
        </Marquee>

      </div>
    </SectionWrapper>
  );
};

export default Skills;
