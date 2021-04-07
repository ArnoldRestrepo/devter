import { useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/Client'

// const USER_STATES = {
//   NOT_LOGGED: null,
//   NOT_KNOWN: undefined
// }

export default function useUser() {
  const [user, setUser] = useState(undefined)

  useEffect(() => {
    onAuthStateChanged(setUser)
  }, [])

  return user
}
