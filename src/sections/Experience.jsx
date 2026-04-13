import React from 'react';
import SectionWrapper from '../components/common/SectionWrapper';
import { motion } from 'framer-motion';
import { GraduationCap, MonitorPlay, Briefcase, Sparkles, Download } from 'lucide-react';
import resumePdf from '../assets/JeevikResumeNew.pdf';
import { cn } from '../utils/cn';

const TimelineItem = ({ year, title, company, description, icon: Icon, highlight, isLast, index }) => (
  <div className="relative pl-12 sm:pl-16 pb-12 group last:pb-0">
    {/* Animated Line connecting items */}
    {!isLast && (
      <motion.div 
        initial={{ height: 0 }}
        whileInView={{ height: '100%' }}
        transition={{ duration: 1, delay: 0.2 }}
        className={cn(
          "absolute left-[23px] sm:left-[31px] top-10 bottom-0 w-[2px]",
          highlight ? "bg-gradient-to-b from-primary-500 to-slate-200 dark:to-slate-700" : "bg-slate-200 dark:bg-slate-800 group-hover:bg-primary-500/50 transition-colors duration-500"
        )}
      />
    )}
    
    {/* Icon Node */}
    <motion.div 
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 200, delay: index * 0.1 }}
      className={cn(
        "absolute left-0 top-0 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center border-4 border-white dark:border-dark z-10 transition-all duration-300",
        highlight 
          ? "bg-primary-500 text-white shadow-[0_0_20px_rgba(14,165,233,0.6)]" 
          : "bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 group-hover:bg-primary-500 group-hover:text-white group-hover:shadow-[0_0_15px_rgba(14,165,233,0.4)]"
      )}
    >
      <Icon size={24} className={highlight ? "animate-pulse" : ""} />
    </motion.div>
    
    {/* Content Card */}
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className={cn(
        "glass p-6 sm:p-8 rounded-3xl border transition-all duration-500",
        highlight 
          ? "border-primary-500/50 bg-primary-500/5 shadow-[0_0_30px_rgba(14,165,233,0.1)]" 
          : "border-transparent hover:border-primary-500/20 hover:bg-white/5"
      )}
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
        <h3 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-white">{title}</h3>
        <span className={cn(
          "text-sm font-bold px-4 py-1.5 rounded-full inline-block w-fit",
          highlight ? "bg-primary-500 text-white" : "bg-primary-500/10 text-primary-600 dark:text-primary-400"
        )}>
          {year}
        </span>
      </div>
      <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-medium mb-3">{company}</p>
      <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm sm:text-base">
        {description}
      </p>
    </motion.div>
  </div>
);

const Experience = () => {
  const timelineData = [
    {
      year: "2025 - Present",
      title: "Junior UI Developer",
      company: "Current Role",
      description: "Developing robust web interfaces, implementing pixel-perfect designs, and maintaining front-end architecture using React and modern CSS frameworks.",
      icon: Sparkles,
      highlight: true
    },
    {
      year: "July 2024",
      title: "UI Developer Intern",
      company: "Codetentacles Technologies",
      description: "Assisted in building responsive UI components, improving user experience across web platforms, and collaborating with cross-functional development teams.",
      icon: Briefcase,
      highlight: false
    },
    {
      year: "2023",
      title: "UI/UX Design Course",
      company: "Professional Certification",
      description: "Completed intensive UI/UX design training focusing on user research, wireframing, interactive prototyping, and modern design principles.",
      icon: MonitorPlay,
      highlight: false
    },
    {
      year: "2019 - 2023",
      title: "Graduation (Engineering)",
      company: "Bachelor of Engineering in Information Technology",
      description: "Graduated with a strong foundation in computer science, software engineering workflows, database management, and system architecture.",
      icon: GraduationCap,
      highlight: false
    }
  ];

  return (
    <SectionWrapper id="experience" className="bg-slate-50/50 dark:bg-dark-lighter/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">My <span className="text-primary-600">Journey</span></h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed max-w-2xl mx-auto">
            A continuous path of learning, building, and evolving in the field of design and development.
          </p>
        </div>

        <div className="relative">
          {timelineData.map((item, index) => (
            <TimelineItem 
              key={index} 
              {...item} 
              index={index}
              isLast={index === timelineData.length - 1} 
            />
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <a 
            href={resumePdf} 
            download="Jeevika_Huske_Resume.pdf"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-primary-600 text-white font-bold hover:bg-primary-500 shadow-xl shadow-primary-500/20 transition-all hover:scale-105"
          >
            <Download size={20} />
            Download Full Resume
          </a>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Experience;
