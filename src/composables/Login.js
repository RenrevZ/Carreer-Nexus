import { ref } from 'vue'
import { projectAuth } from '../firebase/config'

const error = ref(null)
const isLoading = ref(false)

const login = async (email, password) => {
  error.value = null

  try {
    isLoading.value = true
    const res = await projectAuth.signInWithEmailAndPassword(email, password)
    error.value = null
    return res
  }
  catch(err) {
    console.log(err.message)
    error.value = 'Incorrect login credentials'
  }

  isLoading.value = false
}

const Login = () => {
  return { error, login,isLoading }
}

export default Login