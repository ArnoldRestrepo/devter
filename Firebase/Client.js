import firebase from 'firebase'
import { normalizedDate } from '../utils'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAibe25xTTp_eCptqsyCMqpbFHQhMJiWIc',
  authDomain: 'devter-dea5d.firebaseapp.com',
  projectId: 'devter-dea5d',
  storageBucket: 'devter-dea5d.appspot.com',
  messagingSenderId: '682639573598',
  appId: '1:682639573598:web:ac75a080942bbe10ecaacf',
  measurementId: 'G-WQ7VTX4MHK'
}

!firebase.apps.length && firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()

const mapUserFromFirebaseAuthToUser = user => {
  const { displayName, email, photoURL, uid } = user

  return {
    avatar: photoURL,
    userName: displayName,
    email,
    uid
  }
}

export const onAuthStateChanged = onChange => {
  return firebase.auth().onAuthStateChanged(user => {
    const normalizedUser = user ? mapUserFromFirebaseAuthToUser(user) : null
    onChange(normalizedUser)
  })
}

export const loginWithGitHub = () => {
  const githubProvider = new firebase.auth.GithubAuthProvider()
  return firebase.auth().signInWithRedirect(githubProvider)
}

export const addDevit = ({ avatar, content, userId, userName }) => {
  return db.collection('devits').add({
    avatar,
    content,
    userId,
    userName,
    createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
    likesCount: 0,
    sharedCount: 0
  })
}

export const fetchLatestDevits = async () => {
  return db
    .collection('devits')
    .get()
    .then(snapshot => {
      return snapshot.docs.map(doc => {
        const data = doc.data()
        const { createdAt } = data
        const id = doc.id
        const date = new Date(createdAt.seconds * 1000)
        return {
          ...data,
          id,
          createdAt: normalizedDate(date)
        }
      })
    })
}
