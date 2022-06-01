import axios from "axios";
import React, { useState, useEffect } from "react";
import Btn from "../components/Btn";
import Header from "../components/Header";
import Mouse from "../components/Mouse";
import Overlay from "../components/Overlay";
import Projet from "../components/Projet";
import Title from "../components/Title";

const Portfolio = () => {
  /*GESTION DE LA MODALE ET DE L'AFFICHAGE DE SES DIFFERENTS CONTENUS DIFFERENTS CONTENUS. */
  const popup = (e) => {
    if (e.target.classList.contains("btn")) {
      togglePortfolioPopup();
      portfolioItemDetails(e.target.parentElement);
      document.querySelector(".portfolio-popup").scrollTo(0, 0);
    } else if (
      e.target.classList.contains("fas") ||
      e.target.classList.contains("pp-inner")
    ) {
      //   FONCTION pour supprimer en cliqaunt nimporte où
      togglePortfolioPopup();
    }
  };

  const togglePortfolioPopup = () => {
    document.querySelector(".portfolio-popup").classList.toggle("open");
    document.body.classList.toggle("hide-scrolling");
    document.querySelector(".main").classList.toggle("fade-out");
  };

  const portfolioItemDetails = (portfolioItem) => {
    /****COPIE D'iIMAGES */
    document.querySelector(".pp-thumbnail img").src =
      portfolioItem.querySelector(".portfolio-item__thumbnail img").src;
    /****COPIE DE TITRE */
    document.querySelector(".pp-content h3").innerHTML =
      portfolioItem.querySelector(".portfolio-item__title").innerHTML;
    /****COPIE DU DETAIL */
    document.querySelector(".pp-body").innerHTML = portfolioItem.querySelector(
      ".portfolio-item__details"
    ).innerHTML;
  };
  /**********************************/

  /**********FETCH API*************/
  const [projects, setprojects] = useState("");
  useEffect(() => {
    axios
      .get("https://gentle-cove-03695.herokuapp.com/portfolio/projects/")
      .then((res) => {
        const {
          data: { data },
        } = res;
        setprojects(data);
      });
  }, []);
  /**********************************/

  return (
    <div
      onClick={(e) => {
        popup(e);
      }}
    >
      <Overlay />
      <Mouse />
      <div className="main">
        <Header />
        <section className="portfolio-section sec-padding active">
          <div className="container">
            <div className="row">
              <Title title="Portfolio" />
            </div>
            <div className="row">
              {/* UTILSATION DE REACT */}
              {projects &&
                projects.map((projet) => {
                  return <Projet key={projet.id} projet={projet} />;
                })}
            </div>
          </div>
        </section>
      </div>

      <div className="portfolio-popup">
        <div className="pp-inner">
          <div className="pp-content">
            <div className="pp-header">
              <Btn
                type="button"
                clas="btn hover"
                name={<i className="fas fa-times"></i>}
              />
              <div className="pp-thumbnail">
                <img src="" alt="" />
              </div>
            </div>
            <h3>{""}</h3>
            <div className="pp-body"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
