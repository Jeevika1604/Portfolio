import { Heart, Mail, Phone } from 'lucide-react';
import { Github, Linkedin, Instagram } from '../ui/BrandIcons';

const Footer = () => {

  return (
    <footer className="py-16 px-6 border-t border-slate-200 dark:border-white/5 bg-white dark:bg-dark-lighter">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8">

        {/* Brand & Bio */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-600 text-white font-display font-bold text-xl shadow-lg shadow-primary-500/30 mb-4">
            JH
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-sm max-w-xs mb-6">
            Designing and building digital experiences that push the boundaries of what's possible on the web.
          </p>
          <div className="flex flex-wrap justify-center md:justify-end gap-4 mb-8">
            <a href="mailto:jeevikahuske@gmail.com" className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 dark:bg-white/5 hover:bg-primary-500 hover:text-white transition-all text-slate-600 dark:text-slate-400 focus:outline-none">
              <Mail size={18} />
            </a>
            <a href="tel:+919112023681" className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 dark:bg-white/5 hover:bg-primary-500 hover:text-white transition-all text-slate-600 dark:text-slate-400 focus:outline-none">
              <Phone size={18} />
            </a>
            <a href="https://github.com/Jeevika1604" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 dark:bg-white/5 hover:bg-primary-500 hover:text-white transition-all text-slate-600 dark:text-slate-400 focus:outline-none">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/jeevika-huske-5b992522a" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 dark:bg-white/5 hover:bg-primary-500 hover:text-white transition-all text-slate-600 dark:text-slate-400 focus:outline-none">
              <Linkedin size={20} />
            </a>
            <a href="https://www.instagram.com/jeevika_huske?igsh=dzNsd3dxOXZxYzlp" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 dark:bg-white/5 hover:bg-primary-500 hover:text-white transition-all text-slate-600 dark:text-slate-400 focus:outline-none">
              <Instagram size={20} />
            </a>
          </div>
        </div>

        {/* Navigation Links & Copyright */}
        <div className="flex flex-col items-center lg:items-end lg:justify-end gap-4">
          <a href="#about" className="text-sm text-slate-500 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-semibold">About</a>
          <a href="#skills" className="text-sm text-slate-500 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-semibold">Skills</a>
          <a href="#projects" className="text-sm text-slate-500 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-semibold">Projects</a>
          <a href="#experience" className="text-sm text-slate-500 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-semibold">Experience</a>
          <a href="#contact" className="text-sm text-slate-500 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-semibold">Contact</a>
        </div>


      </div>
    </footer>
  );
};

export default Footer;
