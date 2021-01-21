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
        <h1 className={styles.title}>
          <a href='https://nextjs.org'>Devter</a>
        </h1>
        <Link href='/timeline'>Timeline</Link>
      </AppLayout>
    </div>
  );
}
