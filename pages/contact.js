import styles from '../styles/contact.module.css'
import GithubLogo from '../assets/github.svg'
import LinkedinLogo from '../assets/linkedin.svg'
import React, { useState } from 'react';
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
      <button className={styles.contact_button} type="submit" disabled={state.submitting}>
        Send
      </button>
    </form>
  );
}

const [quote, setQuote] = useState()

const getQuote = async () => {
  const res = await fetch('https://api.quotable.io/random')
  const data = await res.json()
  setQuote({author: data.author, quote: data.content})
}

    return (
        <>
            <h2 className={styles.contact_header}>Contact Me</h2>
            <h3 className={styles.contact_quote_header}>While you are here, why not grab a quote for your day? <span className={styles.quote_button} onClick={getQuote}>Click Here</span></h3>
        <div className={styles.contact_page}>
          {quote && 
          <div className={styles.quote_container}>
            <h4 className={styles.quote}>{quote.quote}</h4>
            <h5 className={styles.quote_author}>-{quote.author}</h5>
          </div>
          }
<ContactForm />
<div className={styles.links}>
            {/* Linkedin */}
            <a className={styles.link_text}
            href='https://www.linkedin.com/in/tom-birbeck'
          rel='noopener noreferrer'
          target='_blank'><LinkedinLogo style={{fontSize: '6em'}} />
            </a>
            
            {/* Github */}
            <a
            className={styles.link_text}
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