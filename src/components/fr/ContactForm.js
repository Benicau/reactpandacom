import React from 'react';
import emailjs from 'emailjs-com';
import { Form, Input, TextArea, Button } from 'semantic-ui-react';
import Swal from 'sweetalert2';

import './App.css';

const SERVICE_ID = "service_ddi2tlf";
const TEMPLATE_ID = "template_f0h7ffq";
const USER_ID = "TquxGCzQ2X1XPNmhc";

const ContactForm = () => {

  
  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          icon: 'success',
          title: 'Message Sent Successfully'
        })
      }, (error) => {
        console.log(error.text);
        Swal.fire({
          icon: 'error',
          title: 'Ooops, something went wrong',
          text: error.text,
        })
      });
    e.target.reset()
  };

  return (
    <div className="App">
      <Form onSubmit={handleOnSubmit}>
        <Form.Field
          id='form-input-control-email'
          control={Input}
          label='Votre e-mail / Your email'
          name='user_email'
          placeholder='Votre e-mail / Your email'
          required
        />
        <Form.Field
          id='form-input-control-last-name'
          control={Input}
          label='Nom / Name'
          name='user_name'
          placeholder='Votre nom / Your name'
          required
        />
        <Form.Field
          id='form-textarea-control-opinion'
          control={TextArea}
          label='Votre message / Your message'
          name='user_message'
          placeholder='Message…'
          required
        />
        <Button type='submit' className='contactForm'>Envoyer / Submit</Button>
      </Form>
    </div>
  );
}

export default ContactForm;