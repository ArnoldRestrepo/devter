import { useState } from 'react'
import AppLayout from 'components/AppLayout'
import styles from '../../../styles/Form.module.css'
import Button from '../../../components/Button'
import useUser from 'hooks/useUser'

import { addDevit } from '../../../firebase/client'

export default function ComposeTweet() {
  const user = useUser()
  const [message, setMessage] = useState('')

  const handleMessage = ({ target }) => {
    const { value } = target
    setMessage(value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    addDevit({
      avatar: user.avatar,
      content: message,
      userId: user.uid,
      userName: user.username
    })
  }

  return (
    <main className="Container">
      <AppLayout>
        <form className={styles.ComposeTweetForm} onSubmit={handleSubmit}>
          <textarea
            className={styles.Textarea}
            value={message}
            onChange={handleMessage}
          ></textarea>
          <Button disabled={message.length === 0}>Devitear</Button>
        </form>
      </AppLayout>
    </main>
  )
}
