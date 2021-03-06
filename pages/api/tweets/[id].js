import { firestore } from 'firebase/Admin'

export default (req, res) => {
  const { query } = req
  const { id } = query

  firestore
    .collection('devits')
    .doc(id)
    .get()
    .then(doc => {
      const data = doc.data()
      res.json(data)
    })
    .catch(() => {
      res.status(404).end()
    })
}
