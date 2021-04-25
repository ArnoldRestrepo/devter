import Header from 'components/Header'
import NavBar from 'components/NavBar'
import styles from 'styles/AppLayout.module.css'

export default function AppLayout({ children }) {
  return (
    <main className={styles.Main}>
      <Header />
      {children}
      <NavBar />
    </main>
  )
}
