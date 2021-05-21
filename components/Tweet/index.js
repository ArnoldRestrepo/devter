import Avatar from 'components/Avatar'
import styles from '../../styles/Tweet.module.css'
import useTimeAgo from '../../hooks/useTimeAgo'
export default function Tweet({
  userName,
  avatar,
  content,
  userId,
  img,
  createdAt
}) {
  const timeAgo = useTimeAgo(createdAt)
  return (
    <article className={styles.Tweet}>
      <Avatar alt={userName} src={avatar} />
      <div className={styles.TweetContent}>
        <div>
          {img && (
            <img
              src={img}
              alt={`${img}-${userId}`}
              className={styles.TweetImg}
            />
          )}
          <strong>{userName}</strong>
          <span> . </span>
          <span className={styles.CreatedAt}>{timeAgo}</span>
        </div>
        <p>{content}</p>
      </div>
    </article>
  )
}
