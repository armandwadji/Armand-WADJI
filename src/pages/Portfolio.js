import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import Loader from "../components/Loader";
import Mouse from "../components/Mouse";
import Overlay from "../components/Overlay";
import Projet from "../components/Projet";
import Modal from "../components/Modal/Modal";
import API from "../data/API";
import Title from "../components/Title/Title";
import Pagination from "../components/Pagination/Pagination";
// import { projectsData } from "../data/Projectsdata";

const Portfolio = () => {

  const [ projectsData, setProjectsData ] = useState( [] );
  const [ pagination, setPagination ] = useState( {} );
  const [ detail, setDetail ] = useState( null );

  useEffect( () => {
    API.getProjects(pagination.page).then( ({data, meta})=> {
      setProjectsData( data );
      setPagination( meta.pagination );
    } );
  }, [pagination.page] );

  return (
    <div>
      <Overlay />
      <Mouse />
      <div className={`main ${detail ? 'fade-out' : ''}`}>
        <Header />
        <section className='portfolio-section sec-padding active'>
          <div className='container'>
            <div className='row'>
              <Title title='Portfolio' />
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
        </section>
      </div>
      
      { detail && <Modal detail={ detail } setDetail={setDetail} />}
    </div>
  );
};

export default Portfolio;
