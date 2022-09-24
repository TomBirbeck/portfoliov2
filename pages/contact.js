import styles from '../styles/contact.module.css'
import GithubLogo from '../assets/github.svg'
import LinkedinLogo from '../assets/linkedin.svg'

export default function Contact(){
    return (
        <>
            <h2 className={styles.contact_header}>Contact Me</h2>
        <div>
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
        </>
    )
}