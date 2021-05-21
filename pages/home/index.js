import { fetchLatestDevits } from 'firebase/client'
import { isEmptyObject } from 'utils'
import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Head from 'next/head'
import styles from '../../styles/HomePage.module.css'
import Tweet from 'components/Tweet'
import useUser from 'hooks/useUser'

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
    <>
      <Head>
        <title>Inicio / Devter</title>
      </Head>
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
    </>
  )
}
