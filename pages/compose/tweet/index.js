import AppLayout from 'components/AppLayout'
import styles from '../../../styles/Form.module.css'
import Button from '../../../components/Button'

export default function ComposeTweet() {
  return (
    <main className="Container">
      <AppLayout>
        <form className={styles.ComposeTweetForm}>
          <textarea className={styles.Textarea}></textarea>
          <Button>Devitear</Button>
        </form>
      </AppLayout>
    </main>
  )
}
