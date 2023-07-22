import React, { useState } from 'react';
import { init } from "@emailjs/browser";
init(process.env.REACT_APP_USER_ID);

const Form = () => {
    const templateForm = {
      name: { value: '', isValid: true },
      email: { value: '', isValid: true },
      subject: { value: '', isValid: true },
      message: { value: '', isValid: true },
    }
    
    const [ message, setMessage ] = useState( { contain: "", status: false } );
    const [ form, setForm ] = useState( templateForm );

    const handleChange = e => setForm( ( prev ) => ( { ...prev, [ e.target.name ]: ( { ...prev[ e.target.name ], value: e.target.value } ) } ) );

    const isEmail = _ => form.email.value.match( /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/ );

    const validationForm = () => {
  
      if ( form.name.value.length < 3 ) {
        setForm( ( prev ) => ( { ...prev, ...{ name: { ...prev.name, isValid: false, error: "Un nom  d'au moins 3 caractères est nécessaire" } } } ) );
      }
      else {
        setForm( ( prev ) => ( { ...prev, ...{ name: { ...prev.name, isValid: true, error: "" } } } ) );
      }
  
      if ( !form.email.value.match( /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/ ) ) {
        setForm( ( prev ) => ( { ...prev, ...{ email: { ...prev.email, isValid: false, error: "Email non valide" } } } ) );
      }
      else {
        setForm( ( prev ) => ( { ...prev, ...{ email: { ...prev.email, isValid: true, error: "" } } } ) );
      }
      
      if ( form.subject.value.length <= 1 ) {
        setForm( ( prev ) => ( { ...prev, ...{ subject: { ...prev.subject, isValid: false, error: "Le sujet de votre mail est nécessaire" } } } ) );
      }
      else {
        setForm( ( prev ) => ( { ...prev, ...{ subject: { ...prev.subject, isValid: true, error: "" } } } ) );
      }
      
      if ( form.message.value.length  <= 1 ) {
        setForm( ( prev ) => ( { ...prev, ...{ message: { ...prev.message, isValid: false, error: "Le message de votre mail est nécessaire" } } } ) );
      }
      else {
        setForm( ( prev ) => ( { ...prev, ...{ message: { ...prev.message, isValid: true, error: "" } } } ) );
      }
  
    }
    
  
    const hiddenMessage = () => {
      setTimeout( () => {
        setMessage( { contain: "", status: false} );
      }, 5000);
    };
  
  
    const handleSubmit = (e) => {
      e.preventDefault();
      validationForm();
      
      if (form.name.value.length > 3 && isEmail() && form.message.value.length > 1) {
        return sendFeedback(process.env.REACT_APP_TEMPLATE, {
          name: form.name.value,
          subject: form.subject.value,
          email: form.email.value,
          message: form.message.value,
        });
      }
  
      setMessage( { ...message, contain: "Merci de remplir correctement les champs requis *" } );
      hiddenMessage();
    };
  
    const sendFeedback = async ( templateId, variables ) => {
  
        await window.emailjs.send(
          process.env.REACT_APP_SERVICE,
          templateId,
          variables,
          process.env.REACT_APP_USER_ID
        ).then( _ => {
          setForm(templateForm);
          setMessage( { ...message, contain: "Message envoyé.", status: true } );
  
        } ).catch( _ => {
          setMessage( {...message, contain: "Une erreur s'est produite, veuillez réessayer."} );
        });
        
      hiddenMessage();
    };

    return (
        <div className='contact-form' data-aos='zoom-out-right' data-aos-duration='1500'>
        {/* FORM */}
        <form onSubmit={handleSubmit} data-netlify="true">
          <div className='row'>
            <div className='input-group error'>
              <label className='not-mail' style={ { display: !form.name.isValid ? 'block' : 'none', animation: 'dongle 1s'} } >{ form.name?.error}</label>
              <input type='text' onChange={handleChange} value={form.name.value} placeholder='Nom *' className={`input-control ${!form.name.isValid ? 'error' : ''}`} required name='name' autoComplete='off'/>
            </div>
        

            <div className='input-group'>
              <label className='not-mail' style={ { display: !form.email.isValid ? 'block' : 'none', animation: 'dongle 1s'} }> {form.email?.error} </label>
              <input type='email' onChange={handleChange} value={form.email.value}  placeholder='Email *' className={`input-control ${!form.email.isValid ? 'error' : ''}`} required name='email' autoComplete='off'/>
            </div>

            <div className='input-group'>
              <label className='not-mail' style={ {display: !form.subject.isValid ? 'block' : 'none'} }> {form.subject?.error} </label>
              <input type='text' onChange={handleChange} value={form.subject.value} placeholder='Sujet' className={`input-control ${!form.subject.isValid ? 'error' : ''}`} required name='subject' autoComplete='off'/>
            </div>

            <div className='input-group'>
              <label className='not-mail' style={ {display: !form.message.isValid ? 'block' : 'none'} }> {form.message?.error} </label>
              <textarea placeholder='Message *' value={form.message.value} onChange={handleChange} className={`input-control ${!form.message.isValid ? 'error' : ''}`} required name='message' autoComplete='off'></textarea>
            </div>

            <div className='submit-btn hover'>
              <button type='submit' className='btn'>
                Envoyer
              </button>
            </div>

            { message.contain.length > 0 && <p className='form-message' style={ { backgroundColor: !message.status ? "#e02f6b" : "#00c1ec"}}> {message.contain} </p>} 
          </div>
        </form>
      </div>
    );
}

export default Form;
