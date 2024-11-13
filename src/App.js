import React from 'react';
import Navbar from './components/Navbar';
import About from './Sections/About';
import Projects from './Sections/Projects';
import './App.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const handleScroll = () => {
      document.documentElement.style.setProperty('--scrollbar-width', '12px'); // Larger scrollbar on scroll
      clearTimeout(window.scrollTimeout);
      window.scrollTimeout = setTimeout(() => {
        document.documentElement.style.setProperty('--scrollbar-width', '8px'); // Smaller scrollbar after scrolling
      }, 500); // Delay for resetting scrollbar size
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <div className="App">
      <Navbar />
      <About />
      <Projects />
    </div>
  );
}

export default App;
