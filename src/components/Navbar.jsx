import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X, Sparkles } from 'lucide-react';

const Navbar = ({ theme, toggleTheme }) => {
  const [activeSection, setActiveSection] = useState('projects');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: 'Projects', href: '#projects' },
    { name: 'Stack', href: '#stack' },
    { name: 'Education', href: '#education' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Volunteering', href: '#volunteering' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Determine active section based on scroll position
      const sections = navLinks.map(l => l.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl && sectionEl.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4">
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`w-full max-w-4xl rounded-full transition-all duration-300 ${
          scrolled
            ? 'bg-[#121124]/90 dark:bg-[#121124]/90 light:bg-white/90 backdrop-blur-2xl shadow-[0_10px_35px_-5px_rgba(124,58,237,0.25)] border border-white/10 light:border-violet-200/50'
            : 'bg-[#121124]/70 dark:bg-[#121124]/70 light:bg-white/80 backdrop-blur-xl shadow-lg border border-white/10 light:border-violet-100'
        } px-4 sm:px-6 py-2.5 flex items-center justify-between`}
      >
        {/* Brand / Logo */}
        <a
          href="#"
          className="group flex items-center gap-2 font-display font-bold text-base sm:text-lg tracking-tight"
        >
          <span className="w-8 h-8 rounded-full bg-gradient-to-tr from-violet-600 via-cyan-400 to-pink-500 p-[1.5px] flex items-center justify-center">
            <span className="w-full h-full bg-[#0B0B14] light:bg-white rounded-full flex items-center justify-center text-xs font-mono font-bold text-cyan-400 group-hover:scale-110 transition-transform">
              SV
            </span>
          </span>
          <span className="bg-gradient-to-r from-white via-slate-200 to-cyan-200 light:from-slate-900 light:via-violet-900 light:to-pink-700 bg-clip-text text-transparent hidden sm:inline-block">
            Velishala Sai Varun
          </span>
        </a>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex items-center space-x-1 relative">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setActiveSection(link.href.substring(1))}
                className={`relative px-3.5 py-1.5 rounded-full text-xs lg:text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? 'text-white light:text-violet-950 font-semibold'
                    : 'text-slate-400 hover:text-white light:text-slate-600 light:hover:text-violet-900'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="navbar-pill"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-600/30 via-cyan-400/20 to-pink-500/30 border border-cyan-400/30 -z-10 shadow-[0_0_15px_rgba(34,211,238,0.3)]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {link.name}
              </a>
            );
          })}
        </div>

        {/* Action Buttons: Theme Toggle + Mobile Menu */}
        <div className="flex items-center gap-2">
          {/* Light / Dark Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="w-9 h-9 rounded-full flex items-center justify-center bg-white/5 hover:bg-white/10 light:bg-violet-50 light:hover:bg-violet-100 border border-white/10 light:border-violet-200/60 text-cyan-300 light:text-violet-700 transition-all hover:scale-105 active:scale-95"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-cyan-300 animate-spin-slow" />
            ) : (
              <Moon className="w-4 h-4 text-violet-700" />
            )}
          </button>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Open mobile navigation"
            className="md:hidden w-9 h-9 rounded-full flex items-center justify-center bg-white/5 border border-white/10 text-slate-300 hover:text-white transition-colors"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-16 left-4 right-4 bg-[#121124]/95 dark:bg-[#121124]/95 light:bg-white/95 backdrop-blur-2xl rounded-3.5xl border border-white/15 light:border-violet-200 shadow-2xl p-4 flex flex-col space-y-2 z-50"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => {
                    setActiveSection(link.href.substring(1));
                    setMobileMenuOpen(false);
                  }}
                  className={`px-4 py-3 rounded-full text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-violet-600/30 to-pink-500/30 text-white border border-cyan-400/40 font-semibold'
                      : 'text-slate-300 light:text-slate-700 hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
