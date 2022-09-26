import styles from '../styles/contact.module.css'
import GithubLogo from '../assets/github.svg'
import LinkedinLogo from '../assets/linkedin.svg'
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function Contact(){
    function ContactForm() {
        const formId = process.env.NEXT_PUBLIC_FORM_ID
    const [state, handleSubmit] = useForm(formId);
  if (state.succeeded) {
      return <p>Thank you for the message!</p>;
  }
  return (
      <form className={styles.form} onSubmit={handleSubmit}>
      <label htmlFor="email">
        Email Address:
      </label>
      <input
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <label htmlFor='message'>
        Message:
      </label>
      <textarea
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button className={styles.button} type="submit" disabled={state.submitting}>
        Send
      </button>
    </form>
  );
}




    return (
        <>
            <h2 className={styles.contact_header}>Contact Me</h2>
        <div className={styles.contact_page}>
<ContactForm />
<div className={styles.links}>
            {/* Linkedin */}
            <a href='https://www.linkedin.com/in/tom-birbeck'
          rel='noopener noreferrer'
          target='_blank'><LinkedinLogo style={{fontSize: '6em'}} />
            </a>
            
            {/* Github */}
            <a
          href='https://github.com/TomBirbeck'
          rel='noopener noreferrer'
          target='_blank'
        ><GithubLogo style={{fontSize: '6em'}}/>
        </a>
        </div>
            
        </div>
        </>
    )
}