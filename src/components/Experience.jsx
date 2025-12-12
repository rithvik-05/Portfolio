import React, { useEffect, useRef } from "react";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import "./Experience.css";

const Experience = () => {
  const timelineRef = useRef(null);

  const experiences = [
    // {
    //   role: "Frontend Developer Intern",
    //   company: "Tech Solutions Pvt. Ltd.",
    //   duration: "Jan 2024 – Jun 2024",
    //   location: "Remote",
    //   responsibilities: [
    //     "Developed responsive UI components using React and modern CSS frameworks.",
    //     "Collaborated with backend team to integrate REST APIs and ensure seamless data flow.",
    //     "Optimized web performance, improving load time by 20% through code splitting and lazy loading."
    //   ]
    // },
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

    const timelineItems = timelineRef.current.querySelectorAll('.timeline-item');
    timelineItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="experience">
      <h2>My Experience</h2>
      <div className="timeline" ref={timelineRef}>
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-marker">
              <FaBriefcase />
            </div>
            <div className="timeline-content">
              <div className="experience-card">
                <div className="experience-header">
                  <h3>{exp.role}</h3>
                  <div className="experience-meta">
                    <span className="company">
                      <FaMapMarkerAlt /> {exp.company}
                    </span>
                    <span className="duration">
                      <FaCalendarAlt /> {exp.duration}
                    </span>
                  </div>
                </div>
                <div className="experience-location">
                  <FaMapMarkerAlt /> {exp.location}
                </div>
                <ul className="responsibilities">
                  {exp.responsibilities.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

/**
 * Memoized Experience component to prevent unnecessary re-renders
 */
export default React.memo(Experience);
