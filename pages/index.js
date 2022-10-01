import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import logo from '../assets/TBlogo.png';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tom Birbeck Portfolio</title>
        <meta name='description' content='Portfolio for Tom Birbeck' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Image src={logo} alt='Tom Birbeck Logo' height={150} width={150} />

      <main className={styles.main}>
        <h1 className={styles.title}>Tom Birbeck</h1>
        <h2 className={styles.title2}>Full Stack Software Developer</h2>

        <div className={styles.button_layout}>
          <button className={styles.buttons}>
            <Link href={'/contact'}>Contact Me</Link>
          </button>
          <button className={styles.buttons}>
            <Link href={'/projects'}>Projects</Link>
          </button>
          {/* <button className={styles.buttons}><Link href={'/about'}>About Me</Link></button> */}
        </div>
      </main>
    </div>
  );
}
