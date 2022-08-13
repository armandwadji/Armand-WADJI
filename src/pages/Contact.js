import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Mouse from "../components/Mouse";
import Overlay from "../components/Overlay";
import AOS from "aos";
import "aos/dist/aos.css";

import { init } from "@emailjs/browser";
init("user_5tzk8dcH0bZNyNNvSqyAn");

const Contact = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const isEmail = () => {
    let mail = document.getElementById("not-mail");
    let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (email.match(regex)) {
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

  const failMessage = (message) => {
    let formMess = document.querySelector(".form-message");

    formMess.innerHTML = message;
    formMess.style.opacity = "1";

    document.getElementById("name").classList.add("error");
    document.getElementById("email").classList.add("error");
    document.getElementById("message").classList.add("error");
  };

  const successMessage = () => {
    let formMess = document.querySelector(".form-message");
    formMess.innerHTML = "Message envoyé ";
    formMess.style.opacity = "1";
    formMess.style.background = "#00c1ec";

    document.getElementById("name").classList.remove("error");
    document.getElementById("email").classList.remove("error");
    document.getElementById("message").classList.remove("error");

    setTimeout(() => {
      formMess.style.opacity = "0";
    }, 5000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && isEmail() && message) {
      sendFeedback("template_g7nzc4s", {
        name,
        subject,
        email,
        message,
      });
    } else {
      failMessage("Merci de remplir correctement les champs requis *");
    }
  };

  const sendFeedback = (templateId, variables) => {
    window.emailjs
      .send(
        "service_4pm9daw",
        templateId,
        variables,
        "user_5tzk8dcH0bZNyNNvSqyAn"
      )
      .then((res) => {
        successMessage();
        setName("");
        setSubject("");
        setEmail("");
        setMessage("");
      })
      .catch((err) => {
        failMessage("Une erreur s'est produite, veuillez réessayer.");
      });
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
              <div
                className='contact-form'
                data-aos='zoom-out-right'
                data-aos-duration='1500'>
                <form>
                  <div className='row'>
                    <div className='input-group'>
                      <input
                        type='text'
                        placeholder='Nom *'
                        className='input-control'
                        required
                        id='name'
                        name='name'
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        autoComplete='off'
                      />
                    </div>

                    <label id='not-mail'>Email non valide</label>

                    <div className='input-group'>
                      <input
                        type='text'
                        placeholder='Email *'
                        className='input-control'
                        required
                        id='email'
                        name='email'
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        autoComplete='off'
                      />
                    </div>

                    <div className='input-group'>
                      <input
                        type='text'
                        placeholder='Sujet'
                        className='input-control'
                        required
                        id='subject'
                        name='subject'
                        onChange={(e) => setSubject(e.target.value)}
                        value={subject}
                      />
                    </div>

                    <div className='input-group'>
                      <textarea
                        placeholder='Message *'
                        className='input-control'
                        id='message'
                        name='message'
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}
                        autoComplete='off'></textarea>
                    </div>

                    <div className='submit-btn hover'>
                      <button
                        type='submit'
                        className='btn'
                        onClick={handleSubmit}>
                        Envoyer
                      </button>
                    </div>

                    <div className='form-message'></div>
                  </div>
                </form>
              </div>

              <div className='contact-info'>
                <div
                  className='contact-info__item'
                  data-aos='zoom-out-left'
                  data-aos-duration='500'>
                  <h3>Email</h3>
                  <p>armandwadji94@gmail.com</p>
                </div>

                <div
                  className='contact-info__item'
                  data-aos='zoom-out-left'
                  data-aos-duration='1500'>
                  <h3>Telephone</h3>
                  <p>0755973768</p>
                </div>

                <div
                  className='contact-info__item'
                  data-aos='zoom-out-left'
                  data-aos-duration='2000'>
                  <h3>Follow me</h3>
                  <div className='social-links'>
                    <a
                      href='https://www.linkedin.com/in/armand-wadji-dev'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='hover'>
                      <i className='fab fa-linkedin-in'></i>
                    </a>
                    <a
                      href='https://twitter.com/ArmandWadji'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='hover'>
                      <i className='fab fa-twitter'></i>
                    </a>
                    <a
                      href='https://github.com/armandwadji'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='hover'>
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
