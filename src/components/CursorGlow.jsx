import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CursorGlow = () => {
  const [isVisible, setIsVisible] = useState(false);
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Buttery-smooth spring physics for cursor follower
  const springX = useSpring(mouseX, { damping: 28, stiffness: 220, mass: 0.6 });
  const springY = useSpring(mouseY, { damping: 28, stiffness: 220, mass: 0.6 });

  useEffect(() => {
    // Only enable on non-touch devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseleave', handleMouseLeave);
    document.body.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible, mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-30 transform -translate-x-1/2 -translate-y-1/2 will-change-transform"
      style={{
        x: springX,
        y: springY,
      }}
    >
      <div className="w-[320px] h-[320px] rounded-full bg-gradient-to-r from-violet-600/15 via-cyan-400/15 to-pink-500/15 blur-[60px]" />
    </motion.div>
  );
};

export default CursorGlow;

