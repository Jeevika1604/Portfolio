import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, User, Code2, FolderOpen, Briefcase, Mail } from 'lucide-react';
import { cn } from '../../utils/cn';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', icon: User },
    { name: 'Skills', href: '#skills', icon: Code2 },
    { name: 'Projects', href: '#projects', icon: FolderOpen },
    { name: 'Experience', href: '#experience', icon: Briefcase },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-[100] transition-all duration-300 px-6 py-4',
        isScrolled ? 'backdrop-blur-lg bg-white/70 dark:bg-dark/70 border-b border-white/10' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo - Left */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-32"
        >
          <a href="#" className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-600 text-white font-display font-bold text-xl shadow-lg shadow-primary-500/30 hover:scale-105 transition-transform">
            JH
          </a>
        </motion.div>

        {/* Desktop Links - Center */}
        <div className="hidden md:flex flex-1 items-center justify-center space-x-6">
          {navLinks.filter(l => l.name !== 'Contact').map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="nav-link flex items-center gap-2 px-3 py-2 rounded-full hover:bg-slate-100 dark:hover:bg-white/10"
            >
              <link.icon size={16} className="text-primary-500" />
              {link.name}
              <span className="absolute -bottom-1 left-3 right-3 h-[2px] bg-primary-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100 origin-left" />
            </motion.a>
          ))}
        </div>

        {/* Right Actions: Contact Button & Mobile Toggle */}
        <div className="flex items-center justify-end w-32 space-x-4">
          
          {/* Desktop Contact Button */}
          <motion.a
            href="#contact"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden md:flex items-center justify-center px-6 py-2.5 rounded-full bg-primary-600 text-white font-medium hover:bg-primary-500 shadow-lg shadow-primary-500/25 transition-all hover:-translate-y-0.5 active:translate-y-0"
          >
            Contact
          </motion.a>

          {/* Mobile Menu Toggle */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2 text-slate-900 dark:text-white bg-slate-100 dark:bg-white/10 rounded-full">
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden glass mt-4 rounded-2xl"
          >
            <div className="flex flex-col p-4 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="nav-link flex items-center gap-3 py-3 px-4 rounded-xl hover:bg-slate-100 dark:hover:bg-white/5 text-lg"
                >
                  <link.icon size={20} className="text-primary-500" />
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
