import React, { useEffect, useRef } from "react";
import Header from "../components/Header";
import Mouse from "../components/Mouse";
import Overlay from "../components/Overlay";
import AOS from "aos";
import "aos/dist/aos.css";

import { init } from "@emailjs/browser";
init("user_5tzk8dcH0bZNyNNvSqyAn");

const Contact = () => {
  useEffect( () => { AOS.init(); }, [] );

  const name = useRef("");
  const email = useRef("");
  const subject = useRef("");
  const message = useRef("");

  const isEmail = () => {
    let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    let mail = document.getElementById("not-mail");

    if (email.current.value.match(regex)) {
      mail.style.display = "none";
      return true;
    } else {
      mail.style.display = "block";
      mail.style.animation = "dongle 1s";

      setTimeout(() => {
        mail.style.animation = "none";
      }, 1000);
      return false;
    }
  };

  const failMessage = (showMessage) => {
    let formMess = document.querySelector(".form-message");

    formMess.textContent = showMessage;
    formMess.style.opacity = "1";

    name.current.classList.add("error");
    email.current.classList.add("error");
    message.current.classList.add("error");
  };

  const successMessage = () => {
    let formMess = document.querySelector(".form-message");
    formMess.innerHTML = "Message envoyé ";
    formMess.style.opacity = "1";
    formMess.style.background = "#00c1ec";

    name.current.classList.remove("error");
    email.current.classList.remove("error");
    message.current.classList.remove("error");

    setTimeout(() => {
      formMess.style.opacity = "0";
    }, 5000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.current.value && isEmail() && message.current.value) {
      sendFeedback("template_g7nzc4s", {
        name: name.current.value,
        subject: subject.current.value,
        email: email.current.value,
        message: message.current.value,
      });
    } else {
      failMessage("Merci de remplir correctement les champs requis *");
    }
  };

  const sendFeedback = async ( templateId, variables ) => {
    try {
      await window.emailjs.send( "service_4pm9daw", templateId, variables, "user_5tzk8dcH0bZNyNNvSqyAn" );
      successMessage();
      name.current.value = "";
      email.current.value = "";
      subject.current.value = "";
      message.current.value = "";
    } catch (error) {
      failMessage("Une erreur s'est produite, veuillez réessayer.");
    }
  };

  return (
    <>
      <Overlay />
      <Mouse />
      <div className='main'>
        <Header />
        <section className='contact-section sec-padding active'>
          <div className='container'>
            <div className='row'>
              <div className='section-title'>
                <h2>Contact Me</h2>
              </div>
            </div>
            <div className='row'>
              <div className='contact-form' data-aos='zoom-out-right' data-aos-duration='1500'>
                
                {/* FORM */}
                <form onSubmit={handleSubmit}>
                  <div className='row'>
                    <div className='input-group'>
                      <input  type='text' ref={name} placeholder='Nom *' className='input-control' required name='name' autoComplete='off' />
                    </div>

                    <label id='not-mail'>Email non valide</label>

                    <div className='input-group'>
                      <input type='text' ref={email} placeholder='Email *' className='input-control' required id='email' name='email' autoComplete='off' />
                    </div>

                    <div className='input-group'>
                      <input type='text' ref={subject} placeholder='Sujet' className='input-control' required name='subject' />
                    </div>

                    <div className='input-group'>
                      <textarea placeholder='Message *' ref={message}  className='input-control' name='message' autoComplete='off'></textarea>
                    </div>

                    <div className='submit-btn hover'>
                      <button type='submit' className='btn'>
                        Envoyer
                      </button>
                    </div>

                    <p className='form-message'></p>
                  </div>
                </form>
              </div>

              <div className='contact-info'>
                <div className='contact-info__item' data-aos='zoom-out-left' data-aos-duration='500'>
                  <h3>Email</h3>
                  <p>armandwadji94@gmail.com</p>
                </div>

                <div className='contact-info__item' data-aos='zoom-out-left' data-aos-duration='1500'>
                  <h3>Telephone</h3>
                  <p>0755973768</p>
                </div>

                <div className='contact-info__item' data-aos='zoom-out-left' data-aos-duration='2000'>
                  <h3>Follow me</h3>
                  <div className='social-links'>
                    <a href='https://www.linkedin.com/in/armand-wadji-dev' className='hover' target='_blank' rel='noopener noreferrer' >
                      <i className='fab fa-linkedin-in'></i>
                    </a>
                    <a href='https://twitter.com/ArmandWadji' target='_blank' rel='noopener noreferrer' className='hover'>
                      <i className='fab fa-twitter'></i>
                    </a>
                    <a href='https://github.com/armandwadji' target='_blank' rel='noopener noreferrer' className='hover'>
                      <i className='fab fa-github'></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
