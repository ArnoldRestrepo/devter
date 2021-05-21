import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import styles from '../../../styles/Form.module.css'
import Button from '../../../components/Button'
import useUser from 'hooks/useUser'
import { addDevit, uploadImage } from '../../../firebase/client'
import { COMPOSE_STATES, DRAG_IMAGE_STATES } from './types'

export default function ComposeTweet() {
  const router = useRouter()
  const user = useUser()

  const [message, setMessage] = useState('')
  const [status, setStatus] = useState(COMPOSE_STATES.USER_NOT_KNOWN)

  const [drag, setDrag] = useState(DRAG_IMAGE_STATES.NONE)
  const [task, setTask] = useState(null)
  const [imgURL, setImgURL] = useState(null)

  useEffect(() => {
    if (task) {
      const onProgress = () => {}
      const onError = () => {}
      const onComplete = () => {
        task.snapshot.ref.getDownloadURL().then(setImgURL)
      }

      task.on('state_changed', onProgress, onError, onComplete)
    }
  }, [task])

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
      userName: user.userName,
      img: imgURL
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

  const handleDragEnter = e => {
    e.preventDefault()
    setDrag(DRAG_IMAGE_STATES.DRAG_OVER)
  }

  const handleDragLeave = e => {
    e.preventDefault()
    setDrag(DRAG_IMAGE_STATES.NONE)
  }

  const handleOnDrop = e => {
    e.preventDefault()
    setDrag(DRAG_IMAGE_STATES.NONE)
    const file = e.dataTransfer.files[0]
    const task = uploadImage(file)
    setTask(task)
  }

  return (
    <>
      <Head>
        <title>Crear Tweet / Devter</title>
      </Head>
      <form className={styles.ComposeTweetForm} onSubmit={handleSubmit}>
        <textarea
          className={`
            ${styles.Textarea}
            ${drag === DRAG_IMAGE_STATES.DRAG_OVER && styles.DashBorder}
          `}
          value={message}
          placeholder="¿Qué esta pasando?"
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDrop={handleOnDrop}
          onChange={handleMessage}
        />
        {imgURL && (
          <article className={styles.UploadImgWrapper}>
            <button className={styles.UploadImgButton}>x</button>
            <img src={imgURL} alt={imgURL} className={styles.UploadImg} />
          </article>
        )}
        <Button disabled={isButtonDisabled}>Devitear</Button>
      </form>
    </>
  )
}
