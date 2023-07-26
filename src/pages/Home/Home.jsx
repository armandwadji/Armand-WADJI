import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Mouse from "../../components/Mouse/Mouse";
import Btn from "../../components/Btn/Btn";
import Loader from "../../components/Loader/Loader";
import AOS from "aos";
import API from "../../data/API";

const Home = () => {
  const [profil, setProfil] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 2000 });
    API.getProfil().then((data) => setProfil(data));
  }, []);

  return (
    <>
      <Mouse />
      <div className='container'>
        <main className='home-section active'>
          {profil ? (
            <div className='container'>
              <div className='row align-item-center'>
                <div className='home-text' data-aos='fade-right' data-aos-anchor='#example-anchor' data-aos-offset='500' data-aos-duration='1000'>
                  <p>Hello, je me présente</p>
                  <h1>{profil.name}</h1>
                  <h2> {profil.job} </h2>
                  <NavLink to='/about' exact='true' className='hover' data-aos-delay='3000'>
                    <Btn name='About Me' />
                  </NavLink>{" "}
                  <NavLink to='/portfolio' exact='true' className='hover'>
                    <Btn name='portfolio'/>
                  </NavLink>
                </div>

                <div className='home-img' data-aos='fade-left' data-aos-anchor='#example-anchor' data-aos-offset='500' data-aos-duration='1100'>
                  <figure className='img-box'>
                    <img src={ (process.env.REACT_APP_NODE_ENV === "development" ? process.env.REACT_APP_API_URL_DEV : "") + profil.image.url } alt={profil.name} />
                  </figure>
                </div>
              </div>
            </div>
          ) : (
            <Loader />
          )}
        </main>
      </div>
    </>
  );
};

export default Home;
