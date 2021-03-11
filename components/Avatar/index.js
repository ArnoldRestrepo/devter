export default function Avatar ({alt, src, text}) {
  return (
    <article>
      <img src={src} alt={alt}>
      {text && <strong>{text}</strong>}
    </article>
  )
}