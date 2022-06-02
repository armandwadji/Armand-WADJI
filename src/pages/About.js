import { Link } from "react-router-dom";
import Btn from "../components/Btn";
import Header from "../components/Header";
import Mouse from "../components/Mouse";
import Overlay from "../components/Overlay";
import Title from "../components/Title";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { AboutData } from "../data/AboutData";
import Skills from "../components/Skills";
import Education from "../components/Education";
import Experiences from "../components/Experiences";

const About = () => {
  //UseEffect pour les animations
  useEffect(() => {
    AOS.init();
  }, []);

  //Toggle pour l'expérience et l'éducation. Hobbies à rajouter
  const toggleClass = (e) => {
    const tabItem = document.querySelectorAll(".tab-item");
    const tabContent = document.querySelectorAll(".tab-content");
    if (!e.target.classList.contains("active")) {
      tabItem.forEach((item) => {
        item.classList.toggle("active");
      });
      tabContent.forEach((content) => {
        content.classList.toggle("active");
      });
    }
  };
  const [{ educations }, { experiences }, { skills }] = AboutData;

  return (
    <>
      <Overlay />
      <Mouse />
      <div className="main">
        <Header />
        <section className="about-section sec-padding active">
          <div className="container">
            <div
              className="row"
              data-aos="zoom-out-left"
              data-aos-duration="1000"
            >
              <Title title="About Me" />
            </div>

            <div className="row">
              <div
                className="about-img"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                <div className="img-box">
                  <img
                    src="https://i.postimg.cc/nzdkWwzL/profil.jpg"
                    alt="about-pic"
                  />
                </div>
              </div>

              <div className="about-text">
                <p
                  data-aos="zoom-out-left"
                  data-aos-duration="1000"
                  data-aos-delay="500"
                >
                  J'ai 27 ans et j'ai été professeur de Maths - Sciences pendant
                  4 ans. Aujourd’hui je me forme au développement Web en
                  autodidacte, et Je suis à la recherche d'une entreprise qui me
                  permettrait d'effectuer un contrat d'apprentissage d'un an
                  dans le but de consolider et de valider mes compétences.
                </p>
                <h3 data-aos="zoom-out" data-aos-duration="1000">
                  Skills
                </h3>
                {/* SKILLS  */}
                <div
                  className="skills"
                  data-aos="zoom-out"
                  data-aos-duration="1000"
                >
                  {skills.map((skill) => {
                    return <Skills key={skill.id} skill={skill} />;
                  })}
                </div>
                {/* BUTTTONS  */}
                <div className="about-tabs" onClick={(e) => toggleClass(e)}>
                  <button
                    className="tab-item active hover"
                    data-target="#education"
                  >
                    Education
                  </button>

                  <button className="tab-item hover" data-target="#experience">
                    Experiences
                  </button>
                </div>
                {/* EDUCATION */}
                <div
                  className="tab-content active "
                  data-aos="zoom-in-right"
                  data-aos-duration="1000"
                >
                  <div className="timeline">
                    {educations.map((education) => {
                      return (
                        <Education key={education.id} education={education} />
                      );
                    })}
                  </div>
                </div>
                {/* Experience */}
                <div className="tab-content">
                  <div className="timeline">
                    {experiences.map((experience) => {
                      return (
                        <Experiences
                          key={experience.id}
                          experience={experience}
                        />
                      );
                    })}
                  </div>
                </div>
                {/*  BUTTON BOTTOM */}
                <a
                  href="https://i.postimg.cc/fbGn07p2/ARMAND-WADJI-CV.png"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover "
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-once="false"
                >
                  <Btn name="Dowload CV" type="button" />
                </a>{" "}
                <Link
                  to="/contact"
                  exact="true"
                  className="hover"
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-once="false"
                >
                  <Btn name="Contact me" type="button" />
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
