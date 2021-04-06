import { useState, useEffect } from 'react'
import Head from 'next/head'
import { v4 as uuidv4 } from 'uuid'
import AppLayout from '../../components/AppLayout'
import Avatar from '../../components/Avatar'
import styles from '../../styles/HomePage.module.css'
import Tweet from 'components/Tweet'

export default function HomePage() {
  const [timeline, setTimeline] = useState([])
  const [load, setLoad] = useState(false)

  useEffect(() => {
    setLoad(true)
    const API_URL = `http://localhost:3000`
    const getTimeline = async () => {
      const response = await fetch(`${API_URL}/api/statuses/home_timeline`)
      const data = await response.json()
      setTimeline(data)
      setLoad(false)
    }
    getTimeline()
  }, [])

  return (
    <section className="Container">
      <AppLayout>
        <Head>
          <title>Home Page</title>
        </Head>
        <header className={styles.Header}>
          <Avatar
            alt="Avatar"
            src="https://images-na.ssl-images-amazon.com/images/M/MV5BNjk5NjE5NTczMV5BMl5BanBnXkFtZTcwODI0OTM0NA@@._V1_UY256_CR4,0,172,256_AL_.jpg"
            height="50"
            isRounded
          />
          <h2 className={styles.Title}>Inicio</h2>
        </header>
        <section className={styles.TweetGrid}>
          {load && <p>Cargando...</p>}
          {timeline?.map(({ id, username, message, avatar }) => {
            return (
              <Tweet
                key={uuidv4()}
                id={id}
                username={username}
                message={message}
                avatar={avatar}
              />
            )
          })}
        </section>
        <nav className={styles.Menu}>
          <p>Hello</p>
        </nav>
      </AppLayout>
    </section>
  )
}
