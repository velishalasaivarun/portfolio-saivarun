import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Sparkles, ArrowUp, Copy, Check, ExternalLink } from 'lucide-react';

const Footer = () => {
  const [copiedItem, setCopiedItem] = useState(null);

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(type);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#07070E] pt-16 pb-12 overflow-hidden" id="contact">
      
      {/* Organic Curved Top Edge SVG Divider */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden leading-none pointer-events-none transform -translate-y-95% z-10">
        <svg
          className="relative block w-full h-16 sm:h-24 lg:h-32 text-[#07070E]"
          viewBox="0 0 1440 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C320,120 720,160 1120,80 C1280,48 1380,20 1440,0 L1440,160 L0,160 Z"
            fill="#07070E"
          />
          <path
            d="M0,0 C320,120 720,160 1120,80 C1280,48 1380,20 1440,0"
            stroke="url(#contactCurveGlow)"
            strokeWidth="3"
            fill="none"
          />
          <defs>
            <linearGradient id="contactCurveGlow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#22D3EE" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#F472B6" stopOpacity="0.8" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center flex flex-col items-center">
        
        {/* Availability Pill */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass-pill border border-cyan-400/30 text-xs font-mono text-cyan-300 mb-6 shadow-neon-cyan"
        >
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>Let's collaborate on something remarkable</span>
        </motion.div>

        {/* Big Display Heading */}
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold font-display tracking-tight text-white mb-6">
          Let's <span className="gradient-text-vibrant">build something.</span>
        </h2>

        {/* Subtitle */}
        <p className="text-lg sm:text-2xl text-slate-300 max-w-xl mx-auto mb-14 font-medium tracking-wide">
          Open to Software Developer roles.
        </p>

        {/* Three Circular Icon Buttons that Expand on Hover */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 mb-16 w-full">
          
          {/* Email Button */}
          <div className="group relative flex items-center justify-center">
            <a
              href="mailto:velishalasaivarun9@gmail.com"
              className="relative flex items-center h-16 rounded-full bg-[#121124] border border-violet-500/30 hover:border-violet-400 px-5 transition-all duration-500 shadow-lg hover:shadow-neon-violet hover:bg-violet-950/40 text-slate-200 group-hover:text-white"
            >
              <div className="w-10 h-10 rounded-full bg-violet-600/20 flex items-center justify-center flex-shrink-0 text-violet-400 group-hover:scale-110 transition-transform">
                <Mail className="w-5 h-5 text-violet-400" />
              </div>
              <div className="max-w-0 sm:group-hover:max-w-xs overflow-hidden transition-all duration-500 whitespace-nowrap opacity-0 sm:group-hover:opacity-100 flex items-center">
                <span className="font-mono text-sm ml-3 pr-2 text-violet-200">
                  velishalasaivarun9@gmail.com
                </span>
              </div>
              {/* Visible text for mobile where hover doesn't exist */}
              <span className="sm:hidden font-mono text-xs ml-3 text-violet-200">
                velishalasaivarun9@gmail.com
              </span>
            </a>
          </div>

          {/* Phone Button */}
          <div className="group relative flex items-center justify-center">
            <a
              href="tel:+917671987670"
              className="relative flex items-center h-16 rounded-full bg-[#121124] border border-cyan-500/30 hover:border-cyan-400 px-5 transition-all duration-500 shadow-lg hover:shadow-neon-cyan hover:bg-cyan-950/40 text-slate-200 group-hover:text-white"
            >
              <div className="w-10 h-10 rounded-full bg-cyan-600/20 flex items-center justify-center flex-shrink-0 text-cyan-400 group-hover:scale-110 transition-transform">
                <Phone className="w-5 h-5 text-cyan-400" />
              </div>
              <div className="max-w-0 sm:group-hover:max-w-xs overflow-hidden transition-all duration-500 whitespace-nowrap opacity-0 sm:group-hover:opacity-100 flex items-center">
                <span className="font-mono text-sm ml-3 pr-2 text-cyan-200">
                  +91 76719 87670
                </span>
              </div>
              <span className="sm:hidden font-mono text-xs ml-3 text-cyan-200">
                +91 76719 87670
              </span>
            </a>
          </div>

          {/* Location Button */}
          <div className="group relative flex items-center justify-center">
            <div className="relative flex items-center h-16 rounded-full bg-[#121124] border border-pink-500/30 hover:border-pink-400 px-5 transition-all duration-500 shadow-lg hover:shadow-neon-pink hover:bg-pink-950/40 text-slate-200 group-hover:text-white cursor-default">
              <div className="w-10 h-10 rounded-full bg-pink-600/20 flex items-center justify-center flex-shrink-0 text-pink-400 group-hover:scale-110 transition-transform">
                <MapPin className="w-5 h-5 text-pink-400" />
              </div>
              <div className="max-w-0 sm:group-hover:max-w-xs overflow-hidden transition-all duration-500 whitespace-nowrap opacity-0 sm:group-hover:opacity-100 flex items-center">
                <span className="font-mono text-sm ml-3 pr-2 text-pink-200">
                  Mahabubabad, India
                </span>
              </div>
              <span className="sm:hidden font-mono text-xs ml-3 text-pink-200">
                Mahabubabad, India
              </span>
            </div>
          </div>

        </div>

        {/* Social Icons Bar & Back-to-Top */}
        <div className="w-full pt-12 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Social Links */}
          <div className="flex items-center space-x-3">
            <a
              href="https://www.linkedin.com/in/velishala-sai-varun/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="w-11 h-11 rounded-full glass-pill flex items-center justify-center text-slate-300 hover:text-white hover:border-violet-400 hover:bg-violet-600/20 transition-all hover:scale-110"
            >
              <svg className="w-4 h-4 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>

            <a
              href="https://github.com/velishalasaivarun"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="w-11 h-11 rounded-full glass-pill flex items-center justify-center text-slate-300 hover:text-white hover:border-pink-400 hover:bg-pink-600/20 transition-all hover:scale-110"
            >
              <svg className="w-4 h-4 text-pink-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </a>

            <a
              href="mailto:velishalasaivarun9@gmail.com"
              aria-label="Send Email"
              className="w-11 h-11 rounded-full glass-pill flex items-center justify-center text-slate-300 hover:text-white hover:border-cyan-400 hover:bg-cyan-600/20 transition-all hover:scale-110"
            >
              <Mail className="w-4 h-4 text-cyan-400" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-xs sm:text-sm text-slate-400 font-mono">
            © {new Date().getFullYear()} <span className="text-slate-200">Velishala Sai Varun</span>. All rights reserved.
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex items-center gap-2 px-4 py-2 rounded-full glass-pill text-xs font-mono text-slate-300 hover:text-cyan-300 hover:border-cyan-400/50 transition-all hover:scale-105"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
