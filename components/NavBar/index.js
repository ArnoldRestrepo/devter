import Link from 'next/link'
import Home from '../Icons/Home'
import Search from '../Icons/Search'
import Create from '../Icons/Create'
import styles from '../../styles/Navbar.module.css'

export default function NavBar() {
  return (
    <nav className={styles.Menu}>
      <Link href="/home" className={styles.MenuLink}>
        <Home
          stroke="#09f"
          width="32"
          height="32"
          className={styles.MenuIcon}
        />
      </Link>
      <Link href="/search" className={styles.MenuLink}>
        <Search
          stroke="#09f"
          width="32"
          height="32"
          className={styles.MenuIcon}
        />
      </Link>
      <Link href="/compose/tweet" className={styles.MenuLink}>
        <Create
          stroke="#09f"
          width="32"
          height="32"
          className={styles.MenuIcon}
        />
      </Link>
    </nav>
  )
}
