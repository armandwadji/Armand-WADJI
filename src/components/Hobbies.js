import React from "react";

const Hobbies = ({ hobbie }) => {
  const { icon, title, who, desc, color } = hobbie;
  return (
    <div className="timeline-item">
      <span className="date">
        <i className={icon} style={{ color, fontSize: "1.5rem" }}></i>
      </span>
      <h4>
        {title} {who && "-"} <span>{who}</span>
      </h4>
      <ul>
        {desc.map((work, index) => {
          return <li key={index}>{work}</li>;
        })}
      </ul>
    </div>
  );
};

export default Hobbies;
