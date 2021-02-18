import Link from 'next/link'

export default function Timeline ({ userName }) {
  return (
    <section>
      <h1>This is the timeline of {userName}</h1>
      <Link href='/'>Go to home</Link>
    </section>
  )
}

Timeline.getInitialProps = () => {
  return fetch('http://localhost:3000/api/hello').then((response) =>
    response.json()
  )
}
