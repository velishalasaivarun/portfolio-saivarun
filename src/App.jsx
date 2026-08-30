import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Stack from './components/Stack';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Volunteering from './components/Volunteering';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-ink font-sans selection:bg-navy selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Stack />
        <Education />
        <Certifications />
        <Volunteering />
      </main>
      <Footer />
    </div>
  );
}

export default App;
