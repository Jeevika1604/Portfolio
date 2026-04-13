import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';

// Components
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Preloader from './components/ui/Preloader';
import CustomCursor from './components/ui/CustomCursor';

// Sections
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Contact from './sections/Contact';

// Context
import { ThemeProvider } from './context/ThemeContext';

function App() {
  const [loading, setLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <ThemeProvider>
      <div className="relative min-h-screen">
        <AnimatePresence>
          {loading && <Preloader onLoadingComplete={() => setLoading(false)} />}
        </AnimatePresence>

        <CustomCursor />
        
        {/* Scroll Progress Indicator */}
        <motion.div className="scroll-progress" style={{ scaleX }} />

        {!loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Navbar />
            
            <main>
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Experience />
              <Contact />
            </main>

            <Footer />
          </motion.div>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
