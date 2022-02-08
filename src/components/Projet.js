import React from "react";
import Btn from "./Btn";

const Projet = ({ projet }) => {
  return (
    <>
      <div className="portfolio-item">
        <div className="portfolio-item__thumbnail">
          <img src={projet.url} alt={projet.title} />
        </div>
        <h3 className="portfolio-item__title">{projet.title}</h3>
        <Btn name="view project" type="button" clas="btn hover" />
        <div className="portfolio-item__details">
          <div className="description">
            <p>{projet.description}</p>
          </div>
          <div className="general-info">
            <ul>
              <li>
                Date de création - <span>{projet.date}</span>
              </li>
              <li>
                Technologies utilisées -{" "}
                <span>
                  {projet.languages.map((language) => language).join(", ")}
                </span>
              </li>

              <li>
                Lien du site -{" "}
                <span>
                  <a
                    href={projet.site}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover "
                  >
                    {projet.site}
                  </a>
                </span>
              </li>
              <li>
                Lien <i className="fab fa-github"></i> -{" "}
                <span>
                  <a
                    href={projet.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover "
                  >
                    {projet.link}
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
