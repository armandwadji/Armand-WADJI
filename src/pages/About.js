import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Btn from "../components/Btn/Btn";
import Header from "../components/Header/Header";
import Mouse from "../components/Mouse";
import Overlay from "../components/Overlay";
import Skills from "../components/Skills/Skills";
import Education from "../components/Education/Education";
import Experiences from "../components/Experiences/Experiences";
import Hobbies from "../components/Hobbies/Hobbies";
import Title from "../components/Title/Title";
import API from "../data/API";
import AOS from "aos";

const About = () => {
  const [profil, setProfil] = useState(null);

  useEffect(() => {
    AOS.init();
    API.getProfil().then((data) => setProfil(data));
  }, []);

  //Toggle pour l'expérience et l'éducation. Hobbies à rajouter
  const toggleClass = (e) => {
    const tabItems = document.querySelectorAll(".tab-item");
    const tabContents = document.querySelectorAll(".tab-content");
    // on itère sur tous les bouttons contenant la classe tab-item
    tabItems.forEach((tabItem) => {
      //on itère sur toutes les listes à affiché
      tabContents.forEach((tabContent) => {
        //on écoute l'évènement de click du boutton en question
        tabItem.addEventListener("click", () => {
          //on itère sur tous les bouttons
          tabItems.forEach((item) => {
            //si l'item est différent du tabItem clicker et si l'id de l'item est égal de l'id du paragraphe alors on retire la class active
            if (item !== tabItem && item.dataset.id === tabContent.id) {
              item.classList.remove("active");
              tabContent.classList.remove("active");
            }
          });

          // si l'id du tabItem  clicker est égal à l'id du tabContent alors ajoute la class active
          if (tabItem.dataset.id === tabContent.id) {
            tabItem.classList.add("active");
            tabContent.classList.add("active");
          }
        });
      });
    });
  };

  return (
    <>
      <Overlay />
      <Mouse />
      <div className='main'>
        <Header />
        <section className='about-section sec-padding active'>
          <div className='container'>
            <div
              className='row'
              data-aos='zoom-out-left'
              data-aos-duration='1000'>
              <Title title='About Me' />
            </div>

            <div className='row'>
              <div
                className='about-img'
                data-aos='fade-down'
                data-aos-easing='linear'
                data-aos-duration='1000'>
                <figure className='img-box'>
                  <img src={(process.env.REACT_APP_NODE_ENV === 'development' ? process.env.REACT_APP_API_URL_DEV : '')  + profil?.image.url} alt={profil?.name} />
                </figure>
              </div>

              <div className='about-text'>
                <p
                  data-aos='zoom-out-left'
                  data-aos-duration='1000'
                  data-aos-delay='500'>
                  {profil?.description}
                </p>
                <h3 data-aos='zoom-out' data-aos-duration='1000'>
                  {" "}
                  Skills{" "}
                </h3>
                <Skills />
                {/* BUTTTONS  */}
                <div className='about-tabs' onClick={(e) => toggleClass(e)}>
                  <button className='tab-item active hover' data-id='education'>
                    Education
                  </button>

                  <button className='tab-item hover' data-id='experience'>
                    Experiences
                  </button>

                  <button className='tab-item hover' data-id='hobbies'>
                    Hobbies
                  </button>
                </div>
                {/* EDUCATION */}
                <Education />
                {/* Experience */}
                <Experiences />
                {/* HOBBIES */}
                <Hobbies />
                <a
                  href={ process.env.REACT_APP_NODE_ENV === 'development' ? process.env.REACT_APP_API_URL_DEV : '' + profil?.cv.url }
                  className='hover dowload_cv'
                  target='_blank'
                  download='Armand_WADJI_CV'
                  rel='noopener noreferrer'
                  data-aos='fade-up'
                  data-aos-duration='1000'
                  data-aos-once='false'>
                  <Btn name='Dowload CV' type='button' />
                </a>{" "}
                <Link
                  to='/contact'
                  className='hover'
                  exact='true'
                  data-aos='fade-up'
                  data-aos-duration='500'
                  data-aos-once='false'>
                  <Btn name='Contact me' type='button' />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
