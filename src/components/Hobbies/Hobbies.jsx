import React, { useEffect, useState } from "react";
import API from "../../data/API";

const Hobbies = () => {
  const [hobbies, setHobbies] = useState([]);

  useEffect(() => {
    API.getHobbies().then((data) => setHobbies(data));
  }, []);

  return (
    <div className='tab-content' id='hobbies'>
      <div className='timeline'>
        {hobbies
          .sort(
            (a, b) =>
              new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          )
          .map((hobbie) => (
            <div className='timeline-item' key={hobbie?.id}>
              <figure className='timeline-item-hobbie'>
                <img
                  src={(process.env.REACT_APP_NODE_ENV === 'development' ? process.env.REACT_APP_API_URL_DEV : '') + hobbie?.icon.url}
                  alt={hobbie?.name}
                />
              </figure>
              <h4>
                {hobbie?.name} - <span>{hobbie?.who}</span>
              </h4>
              <ul>
                {hobbie?.items.map((item) => (
                  <li key={item.id}>{item.name}</li>
                ))}
              </ul>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Hobbies;
