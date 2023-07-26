import React, { useEffect, useState } from "react";
import Loader from "../../components/Loader/Loader";
import Project from "../../components/Project/Project";
import Modal from "../../components/Modal/Modal";
import API from "../../data/API";
import Title from "../../components/Title/Title";
import Pagination from "../../components/Pagination/Pagination";
import Mouse from "../../components/Mouse/Mouse";
// import { projects } from "../data/Projectsdata";

const Projects = () => {
  const [portfolio, setPortfolio] = useState({
    projects: [],
    pagination: { page: 1 },
    detail: null,
    mouse: false,
  } );

  const {projects, pagination, detail, mouse} = portfolio

  useEffect( () => {
    
    API.getProjects( pagination.page ).then( ( { data, meta } ) => setPortfolio( prev => ( { ...prev, projects: data, pagination: meta.pagination } ) ) );
    
    setTimeout( _ => setPortfolio( prev => ( { ...prev, mouse: true } ) ), 500 );
    
  }, [ pagination.page ] );
  
  return (
    <>
      { mouse && <Mouse />}
      <div className={`container ${ detail ? "fade-out" : ""}`}>
        <main className='portfolio-section sec-padding active'>
          <div className='container'>
            <div className='row'>
              <Title title='Projects' />
            </div>
            {projects.length > 0 ? (
              <>
                <div className='row'>
                  {projects
                    .sort( (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime() )
                    .map( projet =>  <Project key={projet.id} projet={projet} setPortfolio={setPortfolio} /> )}
                </div>
                <Pagination pagination={pagination} setPortfolio={setPortfolio} />
              </>
            ) : (
              <Loader />
            )}
          </div>
        </main>
      </div>
      <Modal detail={detail} setPortfolio={setPortfolio} />
    </>
  );
};

export default Projects;
