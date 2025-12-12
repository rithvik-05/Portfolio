import React, { useEffect, useRef } from "react";
import { FaGithub, FaExternalLinkAlt, FaCode } from "react-icons/fa";
import "./Projects.css";

/**
 * Projects component with lazy-loaded card animations
 * Displays portfolio projects with tech stack and links
 * @component
 */
const Projects = () => {
  const projectsRef = useRef(null);

  const projects = [
    {
      name: "Portfolio Website",
      description: "A modern, responsive personal website showcasing projects and skills with smooth animations and dark mode support.",
      tech: ["React", "CSS", "JavaScript"],
      link: "https://github.com/rithvik-05/portfolio",
      live: "#",
      image: "https://via.placeholder.com/400x250/667eea/ffffff?text=Portfolio"
    },
    {
      name: "Cyber Shield",
      description: "Cyber Shield is an AI-driven tool that analyzes emails for fraud, phishing, and deceptive intent. It highlights risks instantly and helps users stay protected from digital threats.",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      link: "https://github.com/rithvik-05/todo-app",
      live: "#",
      image: "https://via.placeholder.com/400x250/764ba2/ffffff?text=Todo+App"
    },
    {
      name: "Cryptocurrency Tracker",
      description: "A responsive crypto tracker using React. It shows live market data through public APIs and taught me the basics of working with real-time information",
      tech: ["React", "Redux", "Firebase", "Stripe"],
      link: "https://github.com/rithvik-05/ecommerce-store",
      live: "#",
      image: "https://via.placeholder.com/400x250/f59e0b/ffffff?text=E-commerce"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    const projectCards = projectsRef.current.querySelectorAll('.project-card');
    projectCards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="projects-container" ref={projectsRef}>
        {projects.map((project, index) => (
          <div key={index} className="project-card stagger-child">
            <div className="project-image">
              <img src={project.image} alt={project.name} />
              <div className="project-overlay">
                <div className="project-links">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                    <FaGithub />
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link">
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
            </div>
            <div className="project-content">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="tech-stack">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-item">
                    <FaCode className="tech-icon" />
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

/**
 * Memoized Projects component for performance optimization
 */
export default React.memo(Projects);
