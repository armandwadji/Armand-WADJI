import React, { useEffect, useState } from "react";
import Loader from "../../components/Loader/Loader";
import Project from "../../components/Project/Project";
import Modal from "../../components/Modal/Modal";
import API from "../../data/API";
import Title from "../../components/Title/Title";
import Pagination from "../../components/Pagination/Pagination";
import Mouse from "../../components/Mouse/Mouse";
// import { projectsData } from "../data/Projectsdata";

const Projects = () => {
  const [projectsData, setProjectsData] = useState([]);
  const [pagination, setPagination] = useState({ page: 1 });
  const [ detail, setDetail ] = useState( null );
  const [ mouse, setMouse ] = useState( false );

  useEffect(() => {
    API.getProjects(pagination.page).then(({ data, meta }) => {
      setProjectsData(data);
      setPagination(meta.pagination);
    } );
    setTimeout(() => {
      setMouse( true );
  }, 500);
  }, [pagination.page]);

  return (
    <>
      {mouse && <Mouse />}
      <div className={`container ${detail ? "fade-out" : ""}`}>
        <main className='portfolio-section sec-padding active'>
          <div className='container'>
            <div className='row'>
              <Title title='Projects' />
            </div>
            { projectsData.length > 0 ?
              (
                <>
                  <div className='row'>
                    { projectsData
                        .sort( (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                        .map( ( projet ) => ( <Project key={ projet.id } projet={ projet } setDetail={ setDetail } /> ) )
                      }
                  </div>
                  <Pagination pagination={pagination} setPagination={setPagination} posts={projectsData} setMouse={setMouse} />
                </>
              ) 
              :  <Loader /> 
            }
          </div>
        </main>
      </div>
      <Modal detail={detail} setDetail={setDetail} />
    </>
  );
};

export default Projects;
