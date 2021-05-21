import Link from 'next/link'
import Home from '../Icons/Home'
import Search from '../Icons/Search'
import Create from '../Icons/Create'
import styles from '../../styles/Navbar.module.css'

export default function NavBar() {
  return (
    <nav className={styles.Menu}>
      <Link href={{ pathname: '/home' }} className={styles.MenuLink}>
        <a>
          <Home
            stroke="#09f"
            width="32"
            height="32"
            className={styles.MenuIcon}
          />
        </a>
      </Link>
      <Link href={{ pathname: '/search' }} className={styles.MenuLink}>
        <a>
          <Search
            stroke="#09f"
            width="32"
            height="32"
            className={styles.MenuIcon}
          />
        </a>
      </Link>
      <Link href={{ pathname: '/compose/tweet' }} className={styles.MenuLink}>
        <a>
          <Create
            stroke="#09f"
            width="32"
            height="32"
            className={styles.MenuIcon}
          />
        </a>
      </Link>
    </nav>
  )
}
