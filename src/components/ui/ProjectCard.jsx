import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="group relative bg-white dark:bg-dark-lighter rounded-3xl overflow-hidden border border-slate-200 dark:border-white/5 shadow-xl transition-all duration-500"
    >
      <div className="aspect-[16/9] overflow-hidden relative">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <div className="flex gap-4">
            <a
              href={project.externalLink || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-primary-600 text-white hover:bg-primary-500 transition-colors"
            >
              <ExternalLink size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="p-8">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, i) => (
            <span key={i} className="text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-full bg-primary-500/10 text-primary-600 dark:text-primary-400 border border-primary-500/20">
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-xl font-bold mb-3 text-slate-800 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
          {project.title}
        </h3>

        <p className="text-slate-500 dark:text-slate-400 line-clamp-2">
          {project.description}
        </p>
      </div>

      {/* Hover glow effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-indigo-500 rounded-[2rem] blur opacity-0 group-hover:opacity-10 transition duration-500 -z-10" />
    </motion.div>
  );
};

export default ProjectCard;
