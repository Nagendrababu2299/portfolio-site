import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";
import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import profileImage from "../Images/IMG_8833.jpg";

function Contact() {
  const form = useRef(null);
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.current) {
      emailjs
        .sendForm(
          "service_yax6jkp", // Your EmailJS Service ID
          "template_i0szmlh", // Your EmailJS Template ID
          form.current,
          "C8ff5dqt5XDR5qeiY" // Your EmailJS Public Key
        )
        .then(
          (result) => {
            console.log("Email sent successfully:", result.text);
            alert("Message sent successfully!");
            setFormData({ user_name: "", user_email: "", message: "" }); // Reset form
          },
          (error) => {
            console.error("Error sending email:", error);
            alert("Failed to send message. Please try again.");
          }
        );
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        {/* Left Section */}
        <div className="contact-info">
          <h2 className="section-title">Contact</h2>
          <p className="contact-description">
            Get in touch with me via social media or send me an email.
          </p>
          <div className="social-icons">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-button">
              <FaTwitter /> 
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-button">
              <FaFacebook /> 
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-button">
              <FaLinkedin /> 
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-button">
              <FaInstagram /> 
            </a>
          </div>
        </div>

        {/* Right Section: Image */}
        <div className="contact-image">
          <img src={profileImage} alt="Profile" />
        </div>
      </div>

      {/* Email Form */}
      <div className="email-container">
        <h3>Send me an email</h3>
        <form ref={form} className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="user_name">Name</label>
              <input
                type="text"
                id="user_name"
                name="user_name"
                value={formData.user_name}
                onChange={handleChange}
                placeholder="Your Name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="user_email">Email</label>
              <input
                type="email"
                id="user_email"
                name="user_email"
                value={formData.user_email}
                onChange={handleChange}
                placeholder="Your Email"
                required
              />
            </div>
          </div>
          <div className="form-group full-width">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
