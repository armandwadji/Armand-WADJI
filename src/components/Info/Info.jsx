import React, { useEffect, useState } from 'react';
import API from '../../data/API';

const Info = () => {
    const [ contact, setContact ] = useState( {} );
    
    useEffect(() => {
        API.getContact().then( data => setContact( data ) );
    }, [] );
    
    return (
        <div className='contact-info'>
            <div className='contact-info__item' data-aos='zoom-out-left' data-aos-duration='500'>
            <h3>Email</h3>
            <p> {contact?.email} </p>
            </div>

            <div className='contact-info__item' data-aos='zoom-out-left' data-aos-duration='1500'>
            <h3>Telephone</h3>
            <p>+33 {contact?.phone} </p>
            </div>

            <div className='contact-info__item' data-aos='zoom-out-left' data-aos-duration='2000'>
                <h3>Follow me</h3>
                <div className='social-links'>
                    {/* LINKEDING */}
                    <a href={contact.linkedin} className='hover' target='_blank' rel='noopener noreferrer'>
                        <i className='fab fa-linkedin-in'></i>
                    </a>

                    {/* TWITTER */}
                    <a href={contact.twitter} target='_blank' rel='noopener noreferrer' className='hover'>
                        <i className='fab fa-twitter'></i>
                    </a>

                    {/* GITHUB */}
                    <a  href={contact.github}  target='_blank' rel='noopener noreferrer' className='hover'>
                        <i className='fab fa-github'></i>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Info;
