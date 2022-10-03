import styles from '../styles/about.module.css';
import pic from '../assets/profile-pic.PNG';
import Image from 'next/image';

export default function About() {
  return (
    <>
      <h2 className={styles.about_me_header}>About Me</h2>
      <div className={styles.about_me}>
        <Image
          height={400}
          width={400}
          className={styles.img}
          src={pic.src}
          alt='picture of Tom'
        />
        <span className={styles.about_me_info}>
          <p className={styles.about_me_text}>
            Hi! I am Tom, a developer who enjoys challenges and problem solving.
            I have recently completed a coding bootcamp with
            <a
              className={styles.about_me_links}
              href='https://www.schoolofcode.co.uk/'
              rel='noopener noreferrer'
              target='_blank'
            >
              {' '}
              The School of Code
            </a>{' '}
            where I was able to learn about coding and also able to improve my
            teamworking capabilites. The course used paired coding throughout
            and involved two group projects working with larger teams, for 1
            week and 4 weeks respectively. These were great opportunites gain an
            understanding of how to apply agile methodology in the work place. I
            was fortunate enough to meet some amazing people along the way. I am
            excited to continue my learning by both cementing my knowledge of
            the technologies I have already used and by experimenting with new
            ones to experience different and interesting ways of solving
            problems using code. <br />I enjoy sports (football in particular).
            I also enjoy gaming, having played games ranging from{' '}
            <a
              className={styles.about_me_links}
              href='https://www.youtube.com/watch?v=jE-Zi6LLB6w'
              rel='noopener noreferrer'
              target='_blank'
            >
              International Superstar soccer
            </a>{' '}
            to World of Warcraft. You will mainly catch me playing Football
            Manager these days though. I also love a good game of{' '}
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
  );
}
