import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 overflow-x-hidden transition-colors duration-300">
        <Navigation />
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </div>
    </ThemeProvider>
  );
}

export default App;