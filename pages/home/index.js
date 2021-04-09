import { useState, useEffect } from 'react'
import Head from 'next/head'
import { v4 as uuidv4 } from 'uuid'
import AppLayout from '../../components/AppLayout'
import Avatar from '../../components/Avatar'
import styles from '../../styles/HomePage.module.css'
import Tweet from 'components/Tweet'
import useUser from 'hooks/useUser'
import { fetchLatestDevits } from 'firebase/client'
import { isEmptyObject } from 'utils'

export default function HomePage() {
  const user = useUser()
  const [timeline, setTimeline] = useState([])
  const [load, setLoad] = useState(false)

  useEffect(() => {
    setLoad(true)
    user &&
      fetchLatestDevits()
        .then(setTimeline)
        .then(setLoad(false))
  }, [user])

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
          {isEmptyObject(timeline) && <p>No hemos podido ver los Devits...</p>}
          {timeline?.map(({ userId, userName, content, avatar, createdAt }) => {
            return (
              <Tweet
                key={uuidv4()}
                userId={userId}
                userName={userName}
                content={content}
                avatar={avatar}
                createdAt={createdAt}
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
