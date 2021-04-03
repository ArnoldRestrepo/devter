import styles from 'styles/Avatar.module.css'

export default function Avatar({ alt, src, text, isRounded = false }) {
  const typeMeasure = isRounded ? styles.Rounded : styles.Image
  return (
    <article className={styles.Container}>
      <img src={src} alt={alt} className={typeMeasure} />
      {text && <strong>{text}</strong>}
    </article>
  )
}
