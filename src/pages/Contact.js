import React, { useEffect } from "react";
import Header from "../components/Header/Header";
import Mouse from "../components/Mouse";
import Overlay from "../components/Overlay";
import AOS from "aos";
import Info from "../components/Info/Info";
import Form from "../components/Form/Form";

const Contact = () => {

  useEffect( _ => AOS.init(), [] );

  return (
    <>
      <Overlay />
      <Mouse />
      <div className='container'>
        <Header />
        <main className='contact-section sec-padding active'>
          <div className='container'>
            <div className='row'>
              <div className='section-title'>
                <h2>Contact Me</h2>
              </div>
            </div>
            <div className='row'>
              <Form/>
              <Info/>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Contact;
