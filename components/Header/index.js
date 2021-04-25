import Avatar from '../Avatar'
import styles from '../../styles/Header.module.css'
export default function Header() {
  return (
    <header className={styles.Header}>
      <Avatar
        alt="Avatar"
        src="https://images-na.ssl-images-amazon.com/images/M/MV5BNjk5NjE5NTczMV5BMl5BanBnXkFtZTcwODI0OTM0NA@@._V1_UY256_CR4,0,172,256_AL_.jpg"
        height="50"
        isRounded
      />
      <h2 className={styles.Title}>Inicio</h2>
    </header>
  )
}
