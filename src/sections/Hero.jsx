import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero3D from '../components/3d/Hero3D';
import { ArrowRight, Download } from 'lucide-react';
import resumePdf from '../assets/JeevikResumeNew.pdf';

const Hero = () => {
  const roles = [
    "UI/UX Designer",
    "UI/UX Developer",
    "Frontend Developer",
    "React Developer"
  ];

  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <Hero3D />

      <div className="section-container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="heading-xl mb-4">
            Hello, I am <br />
            <span className="text-primary-600 dark:text-primary-400 text-glow">Jeevika Huske</span>
          </h1>

          <div className="h-10 md:h-12 flex items-center justify-center mb-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={roleIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-2xl md:text-4xl font-display font-medium text-slate-500 dark:text-slate-400"
              >
                {roles[roleIndex]}
              </motion.div>
            </AnimatePresence>
          </div>

          <p className="max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400 mb-10">
            Passionate about building beautiful, interactive, and high-performance web experiences with
            Bachelor of Engineering in Information Technology.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

            <a href="#projects" className="btn-primary flex items-center gap-2 group shadow-primary-500/20 shadow-xl">
              View Projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={resumePdf}
              download="Jeevika_Huske_Resume.pdf"
              className="btn-secondary flex items-center gap-2 group"
            >
              Download CV
              <Download size={18} className="group-hover:translate-y-1 transition-transform" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-slate-300 dark:border-slate-700 flex justify-center p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-primary-500 rounded-full"
            />
          </div>
        </motion.div>
      </div>

      {/* Background Decorative elements */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary-500/10 rounded-full blur-[120px] -z-20" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-indigo-500/10 rounded-full blur-[120px] -z-20" />
    </section>
  );
};

export default Hero;
