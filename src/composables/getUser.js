import { ref } from 'vue'
import { projectAuth } from '../firebase/config'

const currentUser = ref(null)

const getCurrentUser = () => {
  const promise = new Promise((resolve) => {
    projectAuth.onAuthStateChanged((user) => {
      currentUser.value = user
      resolve(currentUser.value)
    })
  })

  return { currentUser, promise }
}

export default getCurrentUser
