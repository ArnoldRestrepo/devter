import { useEffect, useState } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import AppLayout from '../components/AppLayout'
import Button from '../components/Button'
import GitHub from '../components/Icons/Github'
import Avatar from '../components/Avatar'
import { loginWithGitHub, onAuthStateChanged } from '../Firebase/Client'

export default function Home() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    onAuthStateChanged(setUser)
  }, [])

  const handleSubmit = () => {
    loginWithGitHub()
      .then(setUser(user))
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <div className={styles.Container}>
      <Head>
        <title>Devter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppLayout>
        <section className={styles.Entry}>
          <img
            src="/devter-logo.png"
            className={styles.Logo}
            alt="Logo Devter"
          />
          <h1 className={styles.Title}>Devter</h1>
          <h2 className={styles.Subtitle}>
            Talk about development <br />
            with developers 👩‍💻👨‍💻
          </h2>
          <div>
            {user === null && (
              <Button
                handleClick={handleSubmit}
                type="button"
                style={styles.Button}
              >
                <GitHub width="24" height="24" fill="white" />
                Login with Github
              </Button>
            )}
            {user && user.avatar && (
              <Avatar
                src={user.avatar}
                alt={user.username}
                text={user.username}
              />
            )}
          </div>
        </section>
      </AppLayout>
    </div>
  )
}
