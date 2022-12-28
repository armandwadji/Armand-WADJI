import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Btn from "../components/Btn";
import Bubble from "../components/Bubble";
import Header from "../components/Header";
import Mouse from "../components/Mouse";
import Overlay from "../components/Overlay";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <>
      <Overlay />
      <Mouse />

      {/* main start */}
      <div className='main '>
        <Bubble />
        <Header />
        <section className='home-section active'>
          <div className='container'>
            <div className='row align-item-center'>
              <div
                className='home-text'
                data-aos='fade-right'
                data-aos-anchor='#example-anchor'
                data-aos-offset='500'
                data-aos-duration='1000'>
                <p>Hello, je me présente</p>
                <h1>Armand WADJI</h1>
                <h2>Developpeur d'applications Web et mobile</h2>
                <NavLink
                  to='/about'
                  exact='true'
                  className='hover'
                  data-aos-delay='3000'>
                  <Btn name='About Me' />
                </NavLink>{" "}
                <NavLink to='/portfolio' exact='true' className='hover'>
                  <Btn name='portfolio' />
                </NavLink>
              </div>

              <div
                className='home-img'
                data-aos='fade-left'
                data-aos-anchor='#example-anchor'
                data-aos-offset='500'
                data-aos-duration='1100'>
                <div className='img-box'>
                  <img
                    src='https://i.postimg.cc/nzdkWwzL/profil.jpg'
                    alt='Profil-img'
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* main end */}
    </>
  );
};

export default Home;
