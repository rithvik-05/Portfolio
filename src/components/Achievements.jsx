import React from "react";
import "./Achievements.css";

/**
 * Achievements component showcasing awards and certifications
 * Displays professional accomplishments and recognitions
 * @component
 */
const Achievements = () => {
  const items = [
    { title: "LeetCode 100+ Questions", desc: "Achieved 100+ problem solving milestone on LeetCode." },
    { title: "FORAGE Job Simulations Certificate", desc: "Completed job simulations in FORAGE " },
    { title: "Hackathon Participant", desc: "Secured 2nd place in college hackathon by presenting ”Cyber Shield”" },
    { title: "InfosysSpringBoard", desc: " Completed online certifications in infosys springboard" }
  ];

  return (
    <section className="achievements" id="achievements">
      <h2>Achievements & Certifications</h2>
      <div className="achievements-container">
        {items.map((item, index) => (
          <div className="achievement-card" key={index}>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

/**
 * Memoized Achievements component to prevent unnecessary re-renders
 */
export default React.memo(Achievements);
