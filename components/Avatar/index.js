import styles from '../../styles/Avatar.module.css'

export default function Avatar({ alt, src, text }) {
  return (
    <article className={styles.Container}>
      <img src={src} alt={alt} className={styles.Image} />
      {text && <strong>{text}</strong>}
    </article>
  )
}
