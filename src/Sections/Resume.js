import React from 'react';
import './Resume.css';
import { FaReact, FaHtml5, FaCss3Alt, FaAws, FaGitAlt, FaDatabase } from 'react-icons/fa';
import { SiJavascript, SiDotnet } from 'react-icons/si';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
function Resume() {
    const skills = [
        { name: 'JavaScript', icon: <SiJavascript /> },
        { name: 'ReactJS', icon: <FaReact /> },
        { name: '.NET', icon: <SiDotnet /> },
        { name: 'SQL', icon: <FaDatabase /> },
        { name: 'HTML', icon: <FaHtml5 /> },
        { name: 'CSS', icon: <FaCss3Alt /> },
        { name: 'AWS', icon: <FaAws /> },
        { name: 'Git', icon: <FaGitAlt /> },
      ];
  return (
    <>
      {/* Separation Line */}
      <div className="section-divider"></div>

      <section id="resume" className="resume-section">
        <div className="resume-container">
          <h2 className="section-title">Resume</h2>
          <div className="resume-list">
            {/* Job 1 */}
            <div className="resume-item">
              <h3>Full Stack .NET Developer</h3>
              <p className="company">Cigna, Bloomfield, CT</p>
              <p className="dates">May 2023 – Present</p>
              <p className="description">
                Built enterprise web applications using Angular and .NET Web API. Designed secure APIs with token-based JWT authentication. Optimized SQL Server queries for performance and collaborated in Agile teams.
              </p>
            </div>

            {/* Job 2 */}
            <div className="resume-item">
              <h3>Full Stack .NET Developer</h3>
              <p className="company">ValueMomentum, Hyderabad, India</p>
              <p className="dates">May 2021 – July 2022</p>
              <p className="description">
                Developed scalable single-page applications (SPAs) using ReactJS. Created real-time features with SignalR and automated deployments using CI/CD pipelines.
              </p>
            </div>

            {/* Job 3 */}
            <div className="resume-item">
              <h3>Junior .NET Developer</h3>
              <p className="company">Kavayah IT Solutions, Hyderabad, India</p>
              <p className="dates">Jan 2020 – April 2021</p>
              <p className="description">
                Developed web applications using ASP.NET MVC and Core. Enhanced front-end usability with HTML, CSS, and jQuery. Designed RESTful APIs and ensured system reliability.
              </p>
            </div>
          </div>
          <section id="skills" className="skills-section">
      <p className="section-title_1">Top-Skills</p>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <span className="skill-icon">{skill.icon}</span>
            <p className="skill-name">{skill.name}</p>
          </div>
        ))}
      </div>

      {/* Add Download Button */}
      <div className="resume-download">
        <a href="/NagendrababuPulipati_Resume.pdf" className="download-btn" download>
          Download Full Resume
          <FontAwesomeIcon icon={faDownload} className="download-icon" />
        </a>
      </div>
    </section>
        </div>
      </section>
    </>
  );
}

export default Resume;
