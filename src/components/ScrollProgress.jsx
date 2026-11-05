import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#7C3AED] via-[#22D3EE] to-[#F472B6] z-[60] origin-left shadow-[0_0_12px_rgba(34,211,238,0.7)]"
      style={{ scaleX }}
    />
  );
};

export default ScrollProgress;

