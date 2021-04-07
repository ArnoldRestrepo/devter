import { useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { loginWithGitHub } from 'Firebase/Client'

import AppLayout from 'components/AppLayout'
import Button from 'components/Button'
import GitHub from 'components/Icons/Github'
import Logo from 'components/Icons/Logo'
import Avatar from 'components/Avatar'

import styles from 'styles/Home.module.css'
import useUser from 'hooks/useUser'

export default function Home() {
  const user = useUser()
  const router = useRouter()

  useEffect(() => {
    user && router.replace('/home')
  }, [user])

  const handleSubmit = () => {
    loginWithGitHub().catch(err => {
      console.log(err)
    })
  }

  return (
    <div className="Container">
      <Head>
        <title>Devter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppLayout>
        <section className={styles.Entry}>
          <Logo width="40" />
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
