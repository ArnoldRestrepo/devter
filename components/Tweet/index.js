import Avatar from 'components/Avatar'
import styles from '../../styles/Tweet.module.css'

export default function Tweet({
  userName,
  avatar,
  content,
  userId,
  createdAt
}) {
  return (
    <article className={styles.Tweet}>
      <Avatar alt={userName} src={avatar} />
      <div className={styles.TweetContent}>
        <div>
          <strong>{userName}</strong>
          <span> . </span>
          <span className={styles.CreatedAt}>{createdAt}</span>
        </div>
        <p>{content}</p>
      </div>
    </article>
  )
}
