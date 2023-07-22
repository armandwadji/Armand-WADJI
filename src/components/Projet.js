import React from "react";
import Btn from "./Btn/Btn";

const Projet = ({ projet, setDetail }) => {
  const { title, image: { url: image }} = projet;

  const imageBackgroundStyle = {
    backgroundImage: `url(${(process.env.REACT_APP_NODE_ENV === 'development' ? process.env.REACT_APP_API_URL_DEV : '') + image})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center top",
  };

  return (
    <>
      <div className='portfolio-item'>
        <div className='portfolio-item__thumbnail'>
          <figure className='portfolio-item__thumbnail--imgContainer' style={imageBackgroundStyle}></figure>
        </div>

        <h3 className='portfolio-item__title'>{title}</h3>
        <div onClick={() => setDetail(projet)}>
          <Btn name='view project' type='button' className='btn hover' />
        </div>
      </div>
    </>
  );
};

export default Projet;
