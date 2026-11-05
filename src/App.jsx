import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Stack from './components/Stack';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Volunteering from './components/Volunteering';
import Footer from './components/Footer';
import BackgroundBlobs from './components/BackgroundBlobs';
import CursorGlow from './components/CursorGlow';
import ScrollProgress from './components/ScrollProgress';
import WaveDivider from './components/WaveDivider';

function App() {
  // Dark mode by default as requested
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      return savedTheme || 'dark';
    }
    return 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="relative min-h-screen bg-[#0B0B14] dark:bg-[#0B0B14] light:bg-[#F8FAFC] text-slate-100 light:text-slate-900 font-sans selection:bg-cyan-500/30 selection:text-cyan-200 transition-colors duration-500">
      {/* Scroll Progress Bar at the top */}
      <ScrollProgress />

      {/* Mouse Follower Glow Effect */}
      <CursorGlow />

      {/* Floating Animated Gradient Background Blobs */}
      <BackgroundBlobs />

      {/* Floating Glass Pill Navbar */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Main Content Sections (Preserving strict section order) */}
      <main className="relative z-10">
        <Hero />
        <WaveDivider />
        <Projects />
        <WaveDivider flip={true} />
        <Stack />
        <WaveDivider />
        <Education />
        <WaveDivider flip={true} />
        <Certifications />
        <WaveDivider />
        <Volunteering />
      </main>

      {/* Contact Section & Footer with curved top edge */}
      <Footer />
    </div>
  );
}

export default App;
