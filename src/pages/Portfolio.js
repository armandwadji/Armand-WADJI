import axios from "axios";
import React, { useEffect, useState } from "react";
import Btn from "../components/Btn";
import Header from "../components/Header";
import Loader from "../components/Loader";
import Mouse from "../components/Mouse";
import Overlay from "../components/Overlay";
import Projet from "../components/Projet";
import Title from "../components/Title";
// import { projectsData } from "../data/Projectsdata";

const Portfolio = () => {
  /*GESTION DE LA MODALE ET DE L'AFFICHAGE DE SES DIFFERENTS CONTENUS DIFFERENTS CONTENUS. */
  const popup = (e) => {
    if (e.target.classList.contains("btn")) {
      togglePortfolioPopup();
      portfolioItemDetails(e.target.parentElement);
      document.querySelector(".portfolio-popup").scrollTo(0, 0);
    } else if ( e.target.classList.contains("fas") || e.target.classList.contains("pp-inner") ) {
      //   FONCTION pour supprimer en cliqaunt nimporte où
      togglePortfolioPopup();
    }
  };

  const togglePortfolioPopup = () => {
    document.querySelector(".portfolio-popup").classList.toggle("open");
    document.body.classList.toggle("hide-scrolling");
    document.querySelector(".main").classList.toggle("fade-out");
  };

  const portfolioItemDetails = async (portfolioItem) => {
    document.querySelector(".pp-thumbnail img").src = await portfolioItem.querySelector(".portfolio-item__thumbnail img").src;
    document.querySelector(".pp-content h3").innerHTML = await portfolioItem.querySelector(".portfolio-item__title").innerHTML;
    document.querySelector( ".pp-body" ).innerHTML = await portfolioItem.querySelector( ".portfolio-item__details" ).innerHTML;
  };
  /**********************************/

  /**********FETCH API*************/
  const [projectsData, setProjectsData] = useState("");

  useEffect( () => {
    axios
      .get("https://gentle-cove-03695.herokuapp.com/portfolio/projects/")
      .then((res) => {
        const { data: { data } } = res;
        setProjectsData(data);
      });
  }, []);
  /**********************************/

  return (
    <div onClick={(e) =>  popup(e)}>
      <Overlay />
      <Mouse />
      <div className='main'>
        <Header />
        <section className='portfolio-section sec-padding active'>
          <div className='container'>
            <div className='row'>
              <Title title='Portfolio' />
            </div>
            <div className='row'>
              {projectsData ? projectsData.map((projet) => <Projet key={projet.id} projet={projet} /> ) : <Loader/>}
            </div>
          </div>
        </section>
      </div>

      {/* MODAL */}
      <div className='portfolio-popup'>
        <div className='pp-inner'>
          <div className='pp-content'>
            <div className='pp-header'>
              <Btn type='button' className='btn hover' name={<i className='fas fa-times'></i>} />
              <div className='pp-thumbnail'>
                <img src='' alt='' />
              </div>
            </div>
            <h3>{""}</h3>
            <div className='pp-body'></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
