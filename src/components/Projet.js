import React from "react";
import Btn from "./Btn";

const Projet = ({ projet }) => {
  const { title, img, desc, date, languages, website, github } = projet;
  return (
    <>
      <div className="portfolio-item">
        <div className="portfolio-item__thumbnail">
          <img src={img} alt={title} />
        </div>
        <h3 className="portfolio-item__title">{title}</h3>
        <Btn name="view project" type="button" clas="btn hover" />
        <div className="portfolio-item__details">
          <div className="description">
            <p>{desc}</p>
          </div>
          <div className="general-info">
            <ul>
              <li>
                Date de création - <span>{date}</span>
              </li>
              <li>
                Technologies utilisées -{" "}
                <span>{languages.map((language) => language).join(",")}</span>
              </li>

              <li>
                Lien du site -{" "}
                <span>
                  <a
                    href={website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover "
                  >
                    {website}
                  </a>
                </span>
              </li>
              <li>
                Lien <i className="fab fa-github"></i> -{" "}
                <span>
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover "
                  >
                    {github}
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
