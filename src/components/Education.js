import React from "react";

const Education = ({ education }) => {
  const { title, period, school, studys } = education;
  return (
    <div className="timeline-item">
      <span className="date">{period}</span>
      <h4>
        {title} - <span>{school} </span>
      </h4>

      <ul>
        {studys.map((study, index) => {
          return <li key={index}>{study}</li>;
        })}
      </ul>
    </div>
  );
};

export default Education;
