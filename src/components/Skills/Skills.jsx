import React, { useEffect, useState } from "react";
import API from "../../data/API";

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    API.getSkills().then((data) => setSkills(data));
  }, []);

  return (
    <div className='skills' data-aos='zoom-out' data-aos-duration='1000'>
      {skills.map((skill) => (
        <div className='skill-item' key={ skill?.id }>
          <figure className="skill-item-imgContainer">
            <img className="skill-item-imgContainer-img" src={(process.env.REACT_APP_NODE_ENV === 'development' ? process.env.REACT_APP_API_URL_DEV : '') + skill?.icon.url} alt={skill?.name} />
          </figure>
          <p>{skill?.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Skills;
