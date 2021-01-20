import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Devter</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <h1 className={styles.title}>
        <a href='https://nextjs.org'>Devter</a>
      </h1>
      <Link href='/timeline'>Timeline</Link>
    </div>
  );
}
