import Head from 'next/head';
import styles from '../styles/Home.module.css';
import AppLayout from '../components/AppLayout';
import Button from '../components/Button';
import GitHub from '../components/Icons/Github';

export default function Home() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

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
          <Button
            handleClick={handleSubmit}
            type='button'
            style={styles.Button}
          >
            <GitHub width='24' height='24' fill='white' />
            Login with Github
          </Button>
        </section>
      </AppLayout>
    </div>
  );
}
