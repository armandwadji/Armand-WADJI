import React from "react";

const Skills = ({ skill }) => {
  const { title, icon, color } = skill;
  return (
    <div className="skill-item">
      <i className={icon} style={{ color }}></i>
      <p>{title}</p>
    </div>
  );
};

export default Skills;
