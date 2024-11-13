import React from 'react';
import './About.css';
import profileImage from '../Images/grad_photo.jpg'; // Importing the image

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* Left Side: Profile Image */}
        <div className="about-image">
          <img src={profileImage} alt="Profile" />
        </div>

        {/* Right Side: About Text */}
        <div className="about-text">
        <h2 className="section-title">About Me</h2>
          <p>
            Hi, I'm Nagendrababu Pulipati, a passionate software developer specializing
            in creating clean, modern, and user-friendly applications. With
            experience in Dot Net development, I turn ideas into reality.
          </p>
          <p>
            I love working with the latest technologies and enjoy solving
            challenging problems with innovative solutions.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
