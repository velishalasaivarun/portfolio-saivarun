import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowRight, Download, Sparkles, ExternalLink } from 'lucide-react';

export const PROFILE_PHOTO_URL = '/profile.jpg';

const Hero = () => {
  const roles = [
    'Full-Stack Developer',
    'React Native Specialist',
    'Node.js & Backend Architect',
    'AI Systems Builder',
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullText = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentFullText.substring(0, displayText.length + 1));
        if (displayText.length === currentFullText.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayText(currentFullText.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex]);

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden" id="hero">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Left Text Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:w-7/12 flex flex-col justify-center text-center lg:text-left"
          >
            {/* Status Pill */}
            <div className="flex justify-center lg:justify-start mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill border border-cyan-400/20 text-xs font-mono text-cyan-300">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>Available for Software Developer Roles</span>
              </div>
            </div>

            {/* Main Name with Gradient Text */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold font-display tracking-tight leading-[1.08] mb-4">
              <span className="block text-white light:text-slate-900">Hello, I'm</span>
              <span className="bg-gradient-to-r from-violet-400 via-cyan-300 to-pink-400 bg-clip-text text-transparent drop-shadow-[0_4px_24px_rgba(124,58,237,0.3)]">
                Velishala Sai Varun
              </span>
            </h1>

            {/* Typewriter Dynamic Role */}
            <div className="h-10 sm:h-12 flex items-center justify-center lg:justify-start mb-6">
              <h2 className="text-xl sm:text-2xl font-mono text-cyan-400 font-medium flex items-center">
                <span>{displayText}</span>
                <span className="w-2.5 h-6 ml-1.5 bg-pink-400 animate-pulse rounded-sm"></span>
              </h2>
            </div>

            {/* Bio paragraph */}
            <p className="text-base sm:text-lg text-slate-300 light:text-slate-700 leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
              I build end-to-end web and mobile products — React front ends, Node/Express APIs, relational data models, and the auth layers that hold them together.
            </p>

            {/* CTA Buttons: Hire Me (glowing) + Download CV (outline) */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10">
              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                href="#contact"
                className="relative group px-8 py-3.5 rounded-full font-semibold text-white text-sm sm:text-base overflow-hidden shadow-[0_0_25px_rgba(124,58,237,0.5)] hover:shadow-[0_0_35px_rgba(34,211,238,0.7)] transition-all duration-300"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-violet-600 via-cyan-500 to-pink-500 group-hover:opacity-90 transition-opacity" />
                <span className="relative flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-cyan-200" />
                  Hire Me
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                href="/Velishala_Sai_Varun_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 rounded-full font-medium text-slate-200 light:text-slate-800 text-sm sm:text-base glass-pill hover:bg-white/10 light:hover:bg-slate-100 border border-white/20 light:border-violet-300 flex items-center gap-2 hover:border-cyan-400/50 transition-all duration-300"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                Download CV
              </motion.a>
            </div>

            {/* Quick Contact Info Chips */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs sm:text-sm text-slate-400 light:text-slate-600 mb-8">
              <a
                href="mailto:velishalasaivarun9@gmail.com"
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill hover:border-violet-500/50 hover:text-cyan-300 transition-colors"
              >
                <Mail className="w-4 h-4 text-violet-400" />
                <span>velishalasaivarun9@gmail.com</span>
              </a>
              <a
                href="tel:+917671987670"
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill hover:border-cyan-500/50 hover:text-cyan-300 transition-colors"
              >
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>+91 76719 87670</span>
              </a>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill">
                <MapPin className="w-4 h-4 text-pink-400" />
                <span>Mahabubabad, Telangana, India</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 justify-center lg:justify-start">
              <a
                href="https://www.linkedin.com/in/velishala-sai-varun/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full glass-pill text-slate-200 light:text-slate-700 hover:text-white hover:border-violet-400 hover:bg-violet-600/20 text-sm font-medium transition-all group"
              >
                <svg className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                LinkedIn
                <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
              </a>

              <a
                href="https://github.com/velishalasaivarun"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full glass-pill text-slate-200 light:text-slate-700 hover:text-white hover:border-pink-400 hover:bg-pink-600/20 text-sm font-medium transition-all group"
              >
                <svg className="w-4 h-4 text-pink-400 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
                GitHub
                <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: High-Tech Avatar Bento Card with Tilt */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:w-5/12 flex justify-center"
          >
            <div className="relative group w-72 h-80 sm:w-88 sm:h-96">
              
              {/* Pulsing gradient halo behind avatar */}
              <div className="absolute -inset-4 bg-gradient-to-r from-violet-600 via-cyan-400 to-pink-500 rounded-5xl blur-2xl opacity-40 group-hover:opacity-75 transition duration-700 animate-pulse-glow" />

              {/* Asymmetric angled backdrop frame 1 */}
              <div className="absolute inset-0 rounded-4xl bg-gradient-to-tr from-violet-600/50 to-pink-500/50 transform rotate-3 group-hover:rotate-6 transition-transform duration-500" />
              
              {/* Asymmetric angled backdrop frame 2 */}
              <div className="absolute inset-0 rounded-4xl bg-[#121124] dark:bg-[#121124] light:bg-slate-100 transform -rotate-3 group-hover:-rotate-1 border border-cyan-400/40 transition-transform duration-500" />

              {/* Main Avatar Container (Large Rounded Shape, straightens on hover) */}
              <div className="relative w-full h-full rounded-4xl overflow-hidden glass-card border border-white/20 p-2 shadow-2xl transform transition-transform duration-500 group-hover:scale-[1.02] flex items-center justify-center">
                <img
                  src={PROFILE_PHOTO_URL}
                  alt="Velishala Sai Varun"
                  className="w-full h-full object-cover rounded-3.5xl transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    // Fallback if image fails to load
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement.innerHTML = `
                      <div class="w-full h-full rounded-3.5xl bg-gradient-to-br from-violet-900 to-slate-900 flex items-center justify-center">
                        <span class="text-7xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-cyan-300 to-pink-400">SV</span>
                      </div>
                    `;
                  }}
                />

                {/* Floating Tech Pill Badge on avatar */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#0B0B14]/80 backdrop-blur-md border border-white/15 rounded-full px-4 py-2 flex items-center justify-between text-xs font-mono text-slate-200">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                    <span className="text-cyan-300">Full-Stack Engineer</span>
                  </div>
                  <span className="text-pink-400">React • Node • AI</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
