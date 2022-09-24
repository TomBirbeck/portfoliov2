import styles from '../styles/about.module.css'
import pic from '../assets/profile-pic.PNG'
import Image from 'next/image'

export default function About(){
    return (
        <>
        <h2 className={styles.about_me_header}>About Me</h2>
        <div className={styles.about_me}>
            <Image height={300} width={300}className={styles.img} src={pic.src} alt='picture of Tom'/>
      <span className={styles.about_me_info}>
        <p className={styles.about_me_text}>
          Hi, I'm Tom and I'm a developer who enjoys challenges
          and problem solving. I've recently completed a coding bootcamp with
          <a className={styles.about_me_links}
            href='https://www.schoolofcode.co.uk/'
            rel='noopener noreferrer'
            target='_blank'
          >
            {' '}
            The School of Code
          </a>{' '}
          where I was able to not only learn lots about coding, but also to improved my
          teamworking capabilites, using paired coding throughout and completing two group
          projects working with larger teams. I was fortunate enough to meet
          some amazing people along the way. I'm excited to continue my learning
          by both cementing my knowledge of the technologies I've already used
          and by experimenting with new ones to experience different and interesting ways of solving problems using code and the trade-offs involved. <br />I enjoy sports, football in
          particular. I have also enjoyed a bit of gaming throughout the years,
          ranging from things like{' '}
          <a
            className={styles.about_me_links}
            href='https://www.youtube.com/watch?v=jE-Zi6LLB6w'
            rel='noopener noreferrer'
            target='_blank'
          >
            International Superstar soccer
          </a>{' '}
          to World of Warcraft. You'll mainly catch me playing Football Manager
          these days though. I also love a good game of{' '}
          <a
            className={styles.about_me_links}
            href='https://teambuilding.com/blog/werewolf-game-rules'
            rel='noopener noreferrer'
            target='_blank'
          >
            Werewolf.
          </a>
        </p>
      </span>
        </div>
        </>
    )
} 