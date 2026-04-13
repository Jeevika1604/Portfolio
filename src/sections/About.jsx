import React from 'react';
import SectionWrapper from '../components/common/SectionWrapper';
import { motion } from 'framer-motion';
import profileImg from '../assets/jeevika-img.jpeg';

const About = () => {
  return (
    <SectionWrapper id="about">
      {/* Changed to a 3-column layout as requested */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 items-center">

        {/* Image in 1 grid column */}
        <div className="lg:col-span-1 relative">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="aspect-square lg:aspect-[4/5] rounded-full overflow-hidden glass p-3 border-primary-500/20"
          >
            <div className="w-full h-full rounded-full bg-gradient-to-br from-primary-500/20 to-indigo-500/20 relative group overflow-hidden shadow-inner">
              <img
                src={profileImg}
                alt="Jeevika Huske Profile"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </motion.div>
        </div>

        {/* Content spanning the remaining 2 columns */}
        <div className="lg:col-span-2">
          <h2 className="heading-lg mb-4">About <span className="text-primary-600">Me</span></h2>
          <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
            I am an ambitious <span className="font-bold text-slate-800 dark:text-white">UI Developer & Designer</span> passionate about crafting premium digital experiences. I specialize in turning complex wireframes into pixel-perfect, responsive web interfaces.
          </p>
          <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
            With a strong foundation in Information Technology and specialized training in UI/UX Design, my journey uniquely bridges the gap between creative visual aesthetics and robust technical implementation. My goal is to always build user-centric applications that are both beautiful and highly functional.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="glass p-4 rounded-xl border border-transparent hover:border-primary-500/20 transition-all">
              <h4 className="font-bold text-lg text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary-500"></span> UI/UX Design
              </h4>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">I design visually stunning, user-centric interfaces drawing from deep UX research and modern prototyping tools.</p>
            </div>
            <div className="glass p-4 rounded-xl border border-transparent hover:border-primary-500/20 transition-all">
              <h4 className="font-bold text-lg text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary-500"></span> Front-end Dev
              </h4>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">I build fast, responsive web applications using React, Tailwind CSS, and advanced animation libraries.</p>
            </div>
          </div>

        </div>

      </div>
    </SectionWrapper>
  );
};

export default About;
