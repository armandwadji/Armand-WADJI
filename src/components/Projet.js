import React from "react";
import Btn from "./Btn";

const Projet = ({ projet }) => {
  const { title, img, desc, languages, website, github} = projet;

  const imageBackgroundStyle = {
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center top",
  };

  return (
    <>
      <div className='portfolio-item'>
        <div className='portfolio-item__thumbnail'>
          <figure className='portfolio-item__thumbnail--imgContainer' style={imageBackgroundStyle}></figure>
          <img src={img} alt={title} className='screen-reader-text' />
        </div>

        <h3 className='portfolio-item__title'>{title}</h3>

        <Btn name='view project' type='button' className='btn hover' />
        <div className='portfolio-item__details'>
          <div className='description'>
            <p>{desc}</p>
          </div>
          <div className='general-info'>
            <ul>
              {/* <li>
                Date de création - <span>{date}</span>
              </li> */}
              <li>
                Technologies utilisées -{" "}
                <span>{languages.map((language) => language).join(" /")}</span>
              </li>

              {website !== "" && website !== null && (
                <li>
                  Lien du site :{" "}
                  <span>
                    <a href={website} target='_blank' rel='noopener noreferrer' className='hover '>
                      {website.split("/").at(-1).split(".").at(0)}
                    </a>
                  </span>
                </li>
              )}
              <li>
                Lien <i className='fab fa-github'></i> :{" "}
                <span>
                  <a href={github} target='_blank' rel='noopener noreferrer' className='hover '>
                    {github.split("/").at(-1).split(".").at(0)}
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projet;
