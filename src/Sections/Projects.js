import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Projects</h2>
      <div className="projects-container">
        {/* Add Project Tiles */}
        <div className="project-tile">
          <h3>WhatsApp Clone</h3>
          <p>A clone of WhatsApp with messaging and real-time features.</p>
        </div>
        <div className="project-tile">
          <h3>Portfolio Website</h3>
          <p>A personal portfolio showcasing my work and skills.</p>
        </div>
        <div className="project-tile">
          <h3>Weather App</h3>
          <p>An app to check the weather in real-time using API integrations.</p>
        </div>
        <div className="project-tile">
          <h3>E-commerce Store</h3>
          <p>A fully functional e-commerce store with a cart and checkout.</p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
