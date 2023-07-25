import React from 'react';
import { timestampPost } from '../../utils';
import Btn from '../Btn/Btn';

const Modal = ( { detail , setDetail} ) => {
  
    return (
      <div className={`portfolio-popup  ${detail ? 'open' : ''}`}>
      <div className='pp-inner'>
        <div className='pp-content'>
            <div className='pp-header'>
              <div onClick={()=> setDetail(null)}>
                <Btn type='button' className='btn hover' name={<i className='fas fa-times' ></i>} />
              </div>
            <div className='pp-thumbnail'>
              <img src={(process.env.REACT_APP_NODE_ENV === 'development' ? process.env.REACT_APP_API_URL_DEV : '') + detail?.image?.url} alt={detail?.title} />
            </div>
          </div>
          <h3>{detail?.title}</h3>
          <div className='pp-body'>
            <div className='portfolio-item__details'>
              <div className='description'>
                <p>{detail?.description}</p>
              </div>
              <div className='general-info'>
                <ul>
                  <li>
                    Publié il y'a - <span>{timestampPost((new Date(detail?.date).getTime() )) }</span>
                  </li>
                  <li>
                    Technologies utilisées -{" "}
                    <span>{detail?.languages.map((language) => language.name).join(" /")}</span>
                  </li>

                  {detail?.website !== "" && detail?.website !== null && (
                    <li>
                      Lien du site :{" "}
                      <span>
                        <a href={detail?.website} target='_blank' rel='noopener noreferrer' className='hover '>
                          {detail?.website.split("/").at(-1).split(".").at(0)}
                        </a>
                      </span>
                    </li>
                  )}
                  <li>
                    Lien <i className='fab fa-github'></i> :{" "}
                    <span>
                      <a href={detail?.github} target='_blank' rel='noopener noreferrer' className='hover '>
                        {detail?.github.split("/").at(-1).split(".").at(0)}
                      </a>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
}

export default Modal;
