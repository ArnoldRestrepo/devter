import Avatar from 'components/Avatar'
import styles from '../../styles/Tweet.module.css'

export default function Tweet({ username, avatar, message, id }) {
  return (
    <article className={styles.Tweet}>
      <Avatar alt={username} src={avatar} />
      <div>
        <p>{message}</p>
        <strong>@{username}</strong>
      </div>
    </article>
  )
}
