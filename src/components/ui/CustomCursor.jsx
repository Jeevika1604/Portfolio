import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const mouseX = useSpring(0, { stiffness: 500, damping: 30 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 30 });

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e) => {
      if (e.target.closest('button, a, input, textarea, [role="button"]')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [mouseX, mouseY]);

  if (isMobile) return null;

  return (
    <>
      <motion.div
        className="custom-cursor"
        style={{
          x: mouseX,
          y: mouseY,
          scale: isHovering ? 2.5 : 1,
          backgroundColor: isHovering ? 'rgba(14, 165, 233, 0.1)' : 'transparent',
          borderColor: isHovering ? 'rgba(14, 165, 233, 0.5)' : 'rgba(14, 165, 233, 0.8)',
        }}
      />
      <motion.div
        className="custom-cursor-dot"
        style={{
          x: mouseX,
          y: mouseY,
        }}
      />
    </>
  );
};

export default CustomCursor;
