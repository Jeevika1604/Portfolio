import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Preloader = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onLoadingComplete(), 500);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-dark"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative mb-8"
      >
        <div className="w-24 h-24 border-2 border-primary-500/20 rounded-full flex items-center justify-center">
          <motion.div
            animate={{
              rotate: 360,
              borderTopColor: ['#0ea5e9', '#6366f1', '#0ea5e9'],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-20 h-20 border-t-2 border-transparent rounded-full"
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xl font-display font-bold text-white">{progress}%</span>
        </div>
      </motion.div>

    </motion.div>
  );
};

export default Preloader;
