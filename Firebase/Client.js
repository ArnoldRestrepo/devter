import firebase from 'firebase'

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

const mapUserFromFirebaseAuthToUser = user => {
  const { displayName, email, photoURL } = user

  return {
    avatar: photoURL,
    username: displayName,
    email
  }
}

export const onAuthStateChanged = onChange => {
  return firebase.auth().onAuthStateChanged(user => {
    const normalizedUser = mapUserFromFirebaseAuthToUser(user)
    onChange(normalizedUser)
  })
}

export const loginWithGitHub = () => {
  const githubProvider = new firebase.auth.GithubAuthProvider()
  return firebase.auth().signInWithRedirect(githubProvider)
}
