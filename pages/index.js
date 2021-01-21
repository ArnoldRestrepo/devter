import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import AppLayout from '../components/AppLayout';

export default function Home() {
  return (
    <div className={styles.Container}>
      <Head>
        <title>Devter</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <AppLayout>
        <section className={styles.Entry}>
          <img
            src='/devter-logo.png'
            className={styles.Logo}
            alt='Logo Devter'
          />
          <h1 className={styles.Title}>Devter</h1>
          <h2 className={styles.Subtitle}>
            Talk about development <br />
            with developers 👩‍💻👨‍💻
          </h2>
        </section>
      </AppLayout>
    </div>
  );
}
