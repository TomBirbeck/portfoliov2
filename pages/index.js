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

      <main className={styles.main}>
      <Image src={logo} alt='Tom Birbeck Logo' height={150} width={150}/>
        <h1 className={styles.title}>Tom Birbeck</h1>
        <h2 className={styles.title2}>Full Stack Software Developer</h2>

        <div className={styles.button_layout}>
        <Link href={'/contact'}>
          <button className={styles.buttons}>
            Contact Me
          </button>
          </Link>
          <Link href={'/projects'}>
          <button className={styles.buttons}>
           Projects
          </button>
          </Link>
        </div>
      </main>
    </div>
  );
}
