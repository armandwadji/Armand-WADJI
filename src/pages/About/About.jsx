import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Mouse from "../../components/Mouse/Mouse";
import Btn from "../../components/Btn/Btn";
import Skills from "../../components/Skills/Skills";
import Education from "../../components/Education/Education";
import Experiences from "../../components/Experiences/Experiences";
import Hobbies from "../../components/Hobbies/Hobbies";
import Title from "../../components/Title/Title";
import API from "../../data/API";
import AOS from "aos";
import Loader from "../../components/Loader/Loader";

const About = () => {
  const [ profil, setProfil ] = useState( null );
  const [ show, setShow ] = useState( "educations" );

  useEffect(() => {
    AOS.init();
    API.getProfil().then((data) => setProfil(data));
  }, []);

  return (
    <>
      <Mouse />
      { !profil
        ? <Loader />
        : <div className='main'>
            <main className='about-section sec-padding active'>
              <div className='container'>
                <div className='row' data-aos='zoom-out-left' data-aos-duration='1000'>
                  <Title title='About Me' />
                </div>

                <div className='row'>
                  <div className='about-img' data-aos='fade-down' data-aos-easing='linear' data-aos-duration='1000'>
                    <figure className='img-box'>
                      <img src={(process.env.REACT_APP_NODE_ENV === 'development' ? process.env.REACT_APP_API_URL_DEV : '')  + profil?.image.url} alt={profil?.name} />
                    </figure>
                  </div>

                  <div className='about-text'>
                    <p data-aos='zoom-out-left' data-aos-duration='1000' data-aos-delay='500'>
                      {profil?.description}
                    </p>
                    <h3 data-aos='zoom-out' data-aos-duration='1000'> Skills : </h3>
                    <Skills />
                    
                    {/* BUTTTONS  */}
                    <div className='about-tabs'>
                      <button className={`tab-item hover ${show === 'educations' ? 'active' : ''}`} data-id='education' onClick={ _ => setShow('educations')}>
                        Educations
                      </button>

                      <button className={`tab-item hover ${show === 'experiences' ? 'active' : ''}`} data-id='experience' onClick={ _ => setShow('experiences')}>
                        Experiences
                      </button>

                      <button className={`tab-item hover ${show === 'hobbies' ? 'active' : ''}`} data-id='hobbies' onClick={ _ => setShow('hobbies')}>
                        Hobbies
                      </button>
                    </div>
                    <div data-aos='zoom-in-right' data-aos-duration='1000'>
                      <Education show = {show} />
                      <Experiences show = {show} />
                      <Hobbies show = {show} />
                    </div>
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
            </main>
          </div>
       }
    </>
  );
};

export default About;
