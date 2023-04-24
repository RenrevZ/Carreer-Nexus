import { ref, watchEffect } from 'vue'
import { projectFirestore } from '../firebase/config'
import getUser from '@/composables/getUser'

const getData = (collectionName) => {
  const error = ref(null)
  const data = ref([])
  const isLoading = ref(false)

  const loadData = async () => {
    try {
      const { currentUser,promise } = getUser()
      isLoading.value = true
      // Await the promise to ensure currentUser is available before proceeding
      const responses = await promise.then((currentUser) => {
            return { currentUser }
      })

      const response = await projectFirestore.collection(collectionName)
                    .where('user', '==', currentUser.value.uid)
                    .get()

      data.value = response.docs.map((doc) => {
        return { ...doc.data(), id: doc.id }
      })

      isLoading.value = false
    } catch (err) {

      isLoading.value = false
      error.value = err.message
      console.log(err)
    }
  }

  return { error, data, loadData,isLoading }
}

export default getData
