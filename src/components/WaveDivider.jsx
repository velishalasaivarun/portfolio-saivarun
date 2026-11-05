import React from 'react';

const WaveDivider = ({ flip = false, className = '' }) => {
  return (
    <div
      className={`relative w-full overflow-hidden leading-none pointer-events-none py-4 select-none ${className}`}
      aria-hidden="true"
    >
      <svg
        className={`w-full h-12 sm:h-16 lg:h-20 text-transparent opacity-60 dark:opacity-40 transition-transform duration-500 ${
          flip ? 'rotate-180' : ''
        }`}
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#22D3EE" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#F472B6" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="strokeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#22D3EE" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#F472B6" stopOpacity="0.8" />
          </linearGradient>
        </defs>
        
        {/* Secondary soft undulating fill */}
        <path
          d="M0,32L48,42.7C96,53,192,75,288,74.7C384,75,480,53,576,42.7C672,32,768,32,864,48C960,64,1056,96,1152,96C1248,96,1344,64,1392,48L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          fill="url(#waveGradient)"
          className="opacity-30"
        />

        {/* Primary crisp curved line with glow */}
        <path
          d="M0,64L48,58.7C96,53,192,43,288,48C384,53,480,75,576,80C672,85,768,75,864,64C960,53,1056,43,1152,48C1248,53,1344,75,1392,85.3L1440,96"
          stroke="url(#strokeGradient)"
          strokeWidth="2"
          fill="none"
        />
      </svg>
    </div>
  );
};

export default WaveDivider;

