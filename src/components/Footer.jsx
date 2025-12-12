import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaArrowUp, FaPaperPlane } from "react-icons/fa";
import "./Footer.css";

/**
 * Footer component with contact form and social links
 * Handles contact form submission and smooth scroll to top
 * @component
 */
const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just log the data. In a real app, you'd send this to a backend or service like Formspree
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer" id="contact">
      <div className="footer-content">
        <div className="footer-section">
          <h2 className="h2">Get In Touch</h2>
          <p>I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.</p>
          
          <div className="contact-info">
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <a href="mailto:rithvikreddy410@gmail.com">rithvikreddy410@gmail.com</a>
            </div>
          </div>

          <div className="social-links">
            <a href="https://github.com/rithvik-05" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/rithvik-reddy-74052a338/" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaTwitter />
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Send a Message</h3>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">
              <FaPaperPlane /> Send Message
            </button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-note">&copy; {new Date().getFullYear()} Rithvik Reddy. All rights reserved.</p>
        <button 
          className="back-to-top" 
          onClick={scrollToTop}
          aria-label="Scroll back to top"
          title="Back to top"
        >
          <FaArrowUp />
        </button>
      </div>
    </footer>
  );
};

// Memoize Footer to prevent unnecessary re-renders
export default React.memo(Footer);
