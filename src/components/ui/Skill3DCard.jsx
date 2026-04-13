import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export const Skill3DCard = ({ name, icon: Icon, color = "#0ea5e9" }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className="relative h-40 w-40 rounded-2xl glass p-6 flex flex-col items-center justify-center gap-4 transition-colors hover:bg-white/10 dark:hover:bg-white/5 group"
    >
      <div 
        style={{ transform: "translateZ(50px)" }}
        className="p-3 rounded-xl bg-primary-500/10 text-primary-600 dark:text-primary-400 group-hover:scale-110 transition-transform duration-300"
      >
        <Icon size={40} />
      </div>
      <p 
        style={{ transform: "translateZ(30px)" }}
        className="text-sm font-bold text-slate-800 dark:text-slate-200"
      >
        {name}
      </p>
      
      {/* Glow effect */}
      <div 
        className="absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity"
        style={{ backgroundColor: color }}
      />
    </motion.div>
  );
};

export default Skill3DCard;
