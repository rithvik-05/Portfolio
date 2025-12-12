import React, { useState, useEffect } from "react";
import { FaDownload, FaArrowRight } from "react-icons/fa";
import "./About.css";

/**
 * About component with typing animation
 * Displays introduction and call-to-action buttons
 * @component
 */
const About = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "Hi! I'm Rithvik Reddy";
  const subtitle = "Full-Stack Developer";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setDisplayText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="about">
      <div className="about-content">
        <h2 className="typing">{displayText}</h2>
        <p className="subtitle">{subtitle}</p>
        <p>
          Passionate about building scalable web applications. I love turning complex 
          problems into elegant solutions and continuously learning 
          new technologies to stay ahead in the ever-evolving tech landscape.
        </p>
        <div className="about-buttons">
          <a 
            href="/resume.pdf" 
            download 
            className="resume-btn"
          >
            <FaDownload /> Download Resume
          </a>
          <a 
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToContact();
            }}
            className="cta-btn"
            aria-label="Scroll to contact form"
          >
            Get In Touch <FaArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
};

/**
 * Memoized About component to prevent unnecessary re-renders
 */
export default React.memo(About);
