import React, { useEffect, useRef } from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaPython } from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";
import "./Skills.css";

/**
 * Skills component displaying technical proficiencies with animations
 * Shows skill levels with progress indicators
 * @component
 */
const Skills = () => {
  const skillsRef = useRef(null);

  const skills = [
    { name: "HTML", icon: FaHtml5},
    { name: "CSS", icon: FaCss3Alt},
    { name: "JavaScript", icon: FaJs},
    { name: "React", icon: FaReact},
    { name: "Node.js", icon: FaNodeJs},
    { name: "Express", icon: SiExpress},
    { name: "MongoDB", icon: SiMongodb},
    { name: "Git", icon: FaGitAlt},
    { name: "Python", icon: FaPython}
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

    const skillCards = skillsRef.current.querySelectorAll('.skill-card');
    skillCards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="skills">
      <h2>My Skills</h2>
      <div className="skills-container" ref={skillsRef}>
        {skills.map((skill, index) => {
          const IconComponent = skill.icon;
          return (
            <div key={index} className="skill-card">
              <IconComponent className="skill-icon" />
              <div className="skill-name">{skill.name}</div>
              <div className="skill-progress">
                <div 
                  className="skill-progress-bar" 
                  style={{ '--progress': `${skill.level}%` }}
                ></div>
              </div>
              <div className="skill-level">{skill.level}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

/**
 * Memoized Skills component to prevent unnecessary re-renders
 */
export default React.memo(Skills);
