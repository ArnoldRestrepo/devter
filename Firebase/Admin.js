import * as admin from 'firebase-admin'

const serviceAccount = require('./firebase-keys.json')

try {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'devter-dea5d.appspot.com'
  })
} catch (e) {
  console.error(e)
}

export const firestore = admin.firestore()
