import { useState } from 'react'
import { useRouter } from 'next/router'
import AppLayout from 'components/AppLayout'
import styles from '../../../styles/Form.module.css'
import Button from '../../../components/Button'
import useUser from 'hooks/useUser'

import { addDevit } from '../../../firebase/client'

const COMPOSE_STATES = {
  USER_NOT_KNOWN: Symbol('USER_NOT_KNOWN'),
  SUCCESS: Symbol('SUCCESS'),
  LOADING: Symbol('LOADING'),
  ERROR: Symbol('ERROR')
}

export default function ComposeTweet() {
  const router = useRouter()
  const user = useUser()
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState(COMPOSE_STATES.USER_NOT_KNOWN)

  const handleMessage = ({ target }) => {
    const { value } = target
    setMessage(value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    setStatus(COMPOSE_STATES.LOADING)
    addDevit({
      avatar: user.avatar,
      content: message,
      userId: user.uid,
      userName: user.username
    })
      .then(() => {
        router.push('/home')
      })
      .catch(error => {
        setStatus(COMPOSE_STATES.ERROR)
        console.error('Error at create Devit in DB', error)
      })
  }

  const isButtonDisabled = !message.length || status === COMPOSE_STATES.LOADING

  return (
    <main className="Container">
      <AppLayout>
        <form className={styles.ComposeTweetForm} onSubmit={handleSubmit}>
          <textarea
            className={styles.Textarea}
            value={message}
            onChange={handleMessage}
          ></textarea>
          <Button disabled={isButtonDisabled}>Devitear</Button>
        </form>
      </AppLayout>
    </main>
  )
}
