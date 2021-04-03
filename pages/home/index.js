import Head from 'next/head'
import AppLayout from '../../components/AppLayout'
import Avatar from '../../components/Avatar'
import styles from '../../styles/HomePage.module.css'

export default function HomePage() {
  return (
    <section className="Container">
      <AppLayout>
        <Head>
          <title>Home Page</title>
        </Head>
        <header className={styles.Header}>
          <Avatar
            alt="Avatar"
            src="https://images-na.ssl-images-amazon.com/images/M/MV5BNjk5NjE5NTczMV5BMl5BanBnXkFtZTcwODI0OTM0NA@@._V1_UY256_CR4,0,172,256_AL_.jpg"
            height="50"
            isRounded
          />
          <h2 className={styles.Title}>Inicio</h2>
        </header>
        <section>
          <p>Hello</p>
        </section>
        <nav className={styles.Menu}>
          <p>Home</p>
        </nav>
      </AppLayout>
    </section>
  )
}
