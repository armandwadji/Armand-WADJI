import React from "react";

const Experiences = ({ experience }) => {
  const { period, entreprise, title, works } = experience;
  return (
    <div className="timeline-item">
      <span className="date">{period}</span>
      <h4>
        {title} - <span>{entreprise}</span>
      </h4>
      <ul>
        {works.map((work, index) => {
          return <li key={index}>{work}</li>;
        })}
      </ul>
    </div>
  );
};

export default Experiences;
