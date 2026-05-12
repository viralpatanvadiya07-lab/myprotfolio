import React from 'react';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Background from './components/common/Background';

function App() {
  return (
    <div className="min-h-screen relative">
      <Background />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      
      <footer className="py-12 border-t border-white/5 bg-dark-lighter text-center text-slate-500">
        <p>© {new Date().getFullYear()} Viral Patanvadiya. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
