import React from "react";
import "./Resume.css";

const Resume = () => {
  return (
    <section id="resume" className="resume">
      <h2>Resume & Certificates</h2>

      <div className="resume-content">
        

        <div className="downloads">
          <h3>View Documents</h3>
          <h4>Resume</h4>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="view-btn">
            View Resume
          </a>
          {/* Add more certificates as needed */}
        </div>
      </div>
    </section>
  );
};

export default Resume;
