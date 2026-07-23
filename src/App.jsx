import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Education from './components/sections/Education';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Certifications from './components/sections/Certifications';
import Contact from './components/sections/Contact';
import CursorGlow from './components/ui/CursorGlow';

function App() {
  return (
    <div className="bg-slate-900 min-h-screen text-slate-100 font-sans selection:bg-neon-blue/30 selection:text-neon-cyan">
      <CursorGlow />
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </main>

      <footer className="py-8 text-center text-slate-400 border-t border-slate-800 backdrop-blur-sm glass">
        <p>© {new Date().getFullYear()} Aman Mishra. Built with React & Tailwind CSS.</p>
      </footer>
    </div>
  );
}

export default App;
