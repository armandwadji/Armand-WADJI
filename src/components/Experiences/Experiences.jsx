import React, { useEffect, useState } from "react";
import API from "../../data/API";
import { dateFormat } from "../../utils";

const Experiences = ({show}) => {
  const [experiences, setExperiences] = useState([]);

  useEffect( _ => API.getExperiences().then( ( data ) => setExperiences( data ) ), [] );

  return (
    <div className={`tab-content ${show === 'experiences' ? 'active' : ''}`}>
      <div className='timeline'>
        {experiences
          .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime() )
          .map((education) => <div className='timeline-item' key={education.id}>
                                <span className='date'>
                                  {dateFormat(education?.experience.start)} / {dateFormat(education?.experience.end)}
                                </span>
                                <h4>
                                  {education?.experience.name} - <span>{education?.experience.establishment}</span>
                                </h4>
                                <ul>
                                  {education?.works.map( work => <li key={work.id}>{work.name}</li> )}
                                </ul>
                              </div>
          )}
      </div>
    </div>
  );
};

export default Experiences;
