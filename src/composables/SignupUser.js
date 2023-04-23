import { projectAuth } from "../firebase/config"
import { ref } from "vue"

const error = ref(null)
const isLoading = ref(false)
const signup =  async (email,password,displayName) => {
    error.value = null

    try{
        isLoading.value = true
       const response =  await projectAuth.createUserWithEmailAndPassword(email,password)
       if(!response){
            throw new Error('There is a problem when signing in please check your credentials and try again')
       }
       console.log(response.user)
       await response.user.updateProfile({displayName})
       error.value= null

       return response
    }catch(err){
        console.log(err.message)
        error.value = err.message
    }
    isLoading.value = false
}

const SignupUser = () => {
    return {error,signup,isLoading}
}

export default SignupUser