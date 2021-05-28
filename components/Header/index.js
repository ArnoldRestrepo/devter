import Avatar from '../Avatar'
import styles from '../../styles/Header.module.css'
import useUser from 'hooks/useUser'

export default function Header() {
  const user = useUser()

  return (
    <header className={styles.Header}>
      {user && user.avatar && (
        <Avatar
          src={user.avatar}
          alt={user.username}
          text={user.username}
          height="50"
          isRounded
        />
      )}
      <h2 className={styles.Title}>Inicio</h2>
    </header>
  )
}
