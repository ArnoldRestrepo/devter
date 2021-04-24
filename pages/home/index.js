import { useState, useEffect } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { v4 as uuidv4 } from 'uuid'
import AppLayout from '../../components/AppLayout'
import Avatar from '../../components/Avatar'
import styles from '../../styles/HomePage.module.css'
import Tweet from 'components/Tweet'
import useUser from 'hooks/useUser'
import { fetchLatestDevits } from 'firebase/client'
import { isEmptyObject } from 'utils'
import Create from 'components/Icons/Create'

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
        <div className={styles.HomeLayout}>
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
            {isEmptyObject(timeline) && (
              <p>No hemos podido ver los Devits...</p>
            )}
            {timeline?.map(
              ({ userId, userName, content, avatar, createdAt }) => {
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
              }
            )}
          </section>
          <nav className={styles.Menu}>
            <Link href="/compose/tweet" className={styles.MenuLink}>
              <Create
                stroke="#09f"
                width="32"
                height="32"
                className={styles.MenuIcon}
              />
            </Link>
          </nav>
        </div>
      </AppLayout>
    </section>
  )
}
