import React, { useEffect, useState } from "react";
import API from "../../data/API";
import { dateFormat } from "../../utils";

const Education = ({show}) => {
  const [educations, setEducations] = useState([]);

  useEffect( _ => API.getEducations().then( ( data ) => setEducations( data ) ), [] );

  return (
    <div
      className={`tab-content ${show === 'educations' ? 'active' : ''}`}>
      <div className='timeline'>
        {educations
          .sort( (a, b) =>new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime() )
          .map((education) => <div className='timeline-item' key={education.id}>
                                <span className='date'>
                                  {dateFormat(education?.experience.start)} /{" "}
                                  {dateFormat(education?.experience.end)}
                                </span>
                                <h4>
                                  {education?.experience.name} -{" "}
                                  <span>{education?.experience.establishment} </span>
                                </h4>

                                <ul>
                                  {education.studys.map((study) => (
                                    <li key={study.id}>{study.name}</li>
                                  ))}
                                </ul>
                              </div>
          )}
      </div>
    </div>
  );
};

export default Education;
