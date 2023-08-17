import React, { useReducer } from 'react';
import { init } from "@emailjs/browser";
import formReducer, { EMAIL_REGEX_VALID, FORM_ERROR, FORM_INPUT, FORM_INVALID, FORM_REMOVE_CONTAIN, FORM_VALID, FORM_VALIDATION } from './Form.reducer';
init(process.env.REACT_APP_USER_ID);

const Form = () => {
  const templateForm = {
    name: { value: '', isValid: true, error:'' },
    email: { value: '', isValid: true, error:'' },
    subject: { value: '', isValid: true, error:'' },
    message: { value: '', isValid: true, error:'' },
    contain: '',
    status: false
  }
  const [ formState, dispatch ] = useReducer( formReducer, templateForm );
  
  const handleChange = e => dispatch({type: FORM_INPUT, payload: e.target})
  const isEmail = _ => formState.email.value.match( EMAIL_REGEX_VALID );
  const isFormValid = _ => formState.name.value.length > 3 && isEmail() && formState.subject.value.length > 1 && formState.message.value.length > 1 
  const hiddenMessage = _ => setTimeout( _ => dispatch({type: FORM_REMOVE_CONTAIN}) , 5000) ;
  
  
    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch( { type: FORM_VALIDATION } );

      if (isFormValid() ) {
        return sendFeedback(process.env.REACT_APP_TEMPLATE, {
          name: formState.name.value,
          subject: formState.subject.value,
          email: formState.email.value,
          message: formState.message.value,
        });
      }

      dispatch( { type: FORM_INVALID } );
      hiddenMessage();
    };
  
    const sendFeedback = async ( templateId, content ) => {
      await window.emailjs.send(
        process.env.REACT_APP_SERVICE,
        templateId,
        content,
        process.env.REACT_APP_USER_ID
      )
      .then( _ => dispatch( { type: FORM_VALID, payload: templateForm } ) )
      .catch( _ => dispatch( { type: FORM_ERROR } ) );
        
      hiddenMessage();
    };

    return (
      <div className='contact-form' data-aos='zoom-out-right' data-aos-duration='1500'>
        <form onSubmit={handleSubmit} data-netlify="true">
          <div className='row'>
            <div className='input-group error'>
              <label className='not-mail' style={ { display: !formState.name.isValid ? 'block' : 'none', animation: 'dongle 1s'} } >{ formState.name?.error}</label>
              <input type='text' onChange={handleChange} value={formState.name.value} placeholder='Nom *' className={`input-control ${!formState.name.isValid ? 'error' : ''}`} required name='name' autoComplete='off'/>
            </div>
        

            <div className='input-group'>
              <label className='not-mail' style={ { display: !formState.email.isValid ? 'block' : 'none', animation: 'dongle 1s'} }> {formState.email?.error} </label>
              <input type='email' onChange={handleChange} value={formState.email.value}  placeholder='Email *' className={`input-control ${!formState.email.isValid ? 'error' : ''}`} required name='email' autoComplete='off'/>
            </div>

            <div className='input-group'>
              <label className='not-mail' style={ {display: !formState.subject.isValid ? 'block' : 'none', animation: 'dongle 1s'} }> {formState.subject?.error} </label>
              <input type='text' onChange={handleChange} value={formState.subject.value} placeholder='Sujet *' className={`input-control ${!formState.subject.isValid ? 'error' : ''}`} required name='subject' autoComplete='off'/>
            </div>

            <div className='input-group'>
              <label className='not-mail' style={ {display: !formState.message.isValid ? 'block' : 'none', animation: 'dongle 1s'} }> {formState.message?.error} </label>
              <textarea placeholder='Message *' value={formState.message.value} onChange={handleChange} className={`input-control ${!formState.message.isValid ? 'error' : ''}`} required name='message' autoComplete='off'></textarea>
            </div>

            <div className='submit-btn hover'>
              <button type='submit' className='btn'>
                Envoyer
              </button>
            </div>

            { formState.contain.length > 0 && <p className='form-message' style={ { backgroundColor: !formState.status ? "#e02f6b" : "#00c1ec"}}> {formState.contain} </p>} 
          </div>
        </form>
      </div>
    );
}

export default Form;
