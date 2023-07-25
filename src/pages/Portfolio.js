import React, { useEffect, useState } from "react";
import Loader from "../components/Loader";
import Projet from "../components/Projet";
import Modal from "../components/Modal/Modal";
import API from "../data/API";
import Title from "../components/Title/Title";
import Pagination from "../components/Pagination/Pagination";
// import { projectsData } from "../data/Projectsdata";

const Portfolio = () => {

  const [ projectsData, setProjectsData ] = useState( [] );
  const [ pagination, setPagination ] = useState( {page: 1} );
  const [ detail, setDetail ] = useState( null );

  useEffect( () => {
    API.getProjects(pagination.page).then( ({data, meta})=> {
      setProjectsData( data );
      setPagination( meta.pagination );
    } );
  }, [pagination.page] );

  return (
    <>
      <div className={`container ${detail ? 'fade-out' : ''}`}>
        <main className='portfolio-section sec-padding active'>
          <div className='container'>
            <div className='row'>
              <Title title='Projects' />
            </div>
            <div className='row'>
              { projectsData.length > 0
                ? projectsData
                .sort((a,b) => (new Date(b.date)).getTime()  - (new Date(a.date)).getTime())
                  .map( ( projet ) => <Projet key={ projet.id } projet={ projet } setDetail={ setDetail } /> )
                : <Loader />
              }
            </div>
          </div>
          <Pagination pagination={ pagination } setPagination={ setPagination } posts={ projectsData } />
        </main>
      </div>
      <Modal detail={ detail } setDetail={setDetail} />
      
    </>
  );
};

export default Portfolio;
