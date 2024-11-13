import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <a href="#about" className="nav-item">About</a>
      <a href="#projects" className="nav-item">Projects</a>
      <a href="#resume" className="nav-item">Resume</a>
      <a href="#contact" className="nav-item">Contact</a>
    </nav>
  );
}

export default Navbar;
