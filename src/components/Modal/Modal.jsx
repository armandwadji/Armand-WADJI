import React from 'react';
import { timestampPost } from '../../utils';
import Btn from '../Btn/Btn';

const Modal = ( { detail , setDetail} ) => {
  const { title, image: { url: image }, description, date, languages, website, github } = detail;
  
    return (
      <div className='portfolio-popup open'>
      <div className='pp-inner'>
        <div className='pp-content'>
            <div className='pp-header'>
              <div onClick={()=> setDetail(null)}>
                <Btn type='button' className='btn hover' name={<i className='fas fa-times' ></i>} />
              </div>
            <div className='pp-thumbnail'>
              <img src={(process.env.REACT_APP_NODE_ENV === 'development' ? process.env.REACT_APP_API_URL_DEV : '') + image} alt={title} />
            </div>
          </div>
          <h3>{title}</h3>
          <div className='pp-body'>
            <div className='portfolio-item__details'>
              <div className='description'>
                <p>{description}</p>
              </div>
              <div className='general-info'>
                <ul>
                  <li>
                    Publié il y'a - <span>{timestampPost((new Date(date).getTime() )) }</span>
                  </li>
                  <li>
                    Technologies utilisées -{" "}
                    <span>{languages.map((language) => language.name).join(" /")}</span>
                  </li>

                  {website !== "" && website !== null && (
                    <li>
                      Lien du site :{" "}
                      <span>
                        <a href={website} target='_blank' rel='noopener noreferrer' className='hover '>
                          {website.split("/").at(-1).split(".").at(0)}
                        </a>
                      </span>
                    </li>
                  )}
                  <li>
                    Lien <i className='fab fa-github'></i> :{" "}
                    <span>
                      <a href={github} target='_blank' rel='noopener noreferrer' className='hover '>
                        {github.split("/").at(-1).split(".").at(0)}
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
