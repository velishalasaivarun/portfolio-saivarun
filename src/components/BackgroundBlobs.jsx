import React from 'react';
import { motion } from 'framer-motion';

const BackgroundBlobs = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
      {/* Deep dark backdrop tint */}
      <div className="absolute inset-0 bg-[#0B0B14] dark:bg-[#0B0B14] transition-colors duration-500 opacity-100 light:opacity-0 -z-10" />

      {/* Blob 1: Electric Violet */}
      <motion.div
        animate={{
          x: [0, 80, -40, 20, 0],
          y: [0, -60, 50, -30, 0],
          scale: [1, 1.15, 0.95, 1.08, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -top-32 -left-32 w-[550px] h-[550px] rounded-full bg-[#7C3AED]/25 dark:bg-[#7C3AED]/20 blur-[130px]"
      />

      {/* Blob 2: Vibrant Cyan */}
      <motion.div
        animate={{
          x: [0, -70, 60, -30, 0],
          y: [0, 80, -50, 40, 0],
          scale: [1, 0.9, 1.12, 0.95, 1],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/3 -right-40 w-[600px] h-[600px] rounded-full bg-[#22D3EE]/20 dark:bg-[#22D3EE]/15 blur-[150px]"
      />

      {/* Blob 3: Neon Pink */}
      <motion.div
        animate={{
          x: [0, 60, -70, 30, 0],
          y: [0, -50, 60, -20, 0],
          scale: [1, 1.1, 0.88, 1.05, 1],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-2/3 -left-32 w-[520px] h-[520px] rounded-full bg-[#F472B6]/20 dark:bg-[#F472B6]/15 blur-[140px]"
      />

      {/* Blob 4: Bottom Center Violet/Cyan Blend */}
      <motion.div
        animate={{
          x: [0, -50, 40, 0],
          y: [0, 40, -40, 0],
          scale: [1, 1.08, 0.92, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -bottom-40 left-1/3 w-[650px] h-[650px] rounded-full bg-gradient-to-tr from-[#7C3AED]/15 via-[#22D3EE]/15 to-[#F472B6]/15 blur-[160px]"
      />

      {/* Subtle grid pattern overlay for high-tech micro texture */}
      <div 
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />
    </div>
  );
};

export default BackgroundBlobs;

