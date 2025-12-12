import React from "react";
import "./Timeline.css";

/**
 * Timeline component displaying career milestones
 * Shows chronological achievements and key events
 * @component
 */
const Timeline = () => {
  const items = [
    { year: "2023 - Present", title: "B.Tech Student", desc: "Pursuing CSE with specialization in development." },
    { year: "2021-2023", title: "JR.College", desc: "Pursuied intermediate at Narayana jr.college" },
    { year: "Until 2021", title: "Schooling", desc: "Completed 10th with 10points" },
  ];

  return (
    <section className="timeline" id="timeline">
      <h2>Education & Experience</h2>

      <div className="timeline-container">
        {items.map((item, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <span className="timeline-year">{item.year}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

/**
 * Memoized Timeline component to prevent unnecessary re-renders
 */
export default React.memo(Timeline);
