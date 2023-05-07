import { ref, watchEffect } from 'vue'
import { projectFirestore } from '../firebase/config'


const getDataByUser = (collectionName,userID) => {
  const error = ref(null)
  const collectionData = ref([])
  const isLoading = ref(false)

  const loadData = async () => {
    try {
      const response = await projectFirestore.collection(collectionName)
                    .where('user', '==', userID)
                    .get()

      collectionData.value = response.docs.map((doc) => {
        return { ...doc.data(), id: doc.id }
      })

      isLoading.value = false
    } catch (err) {

      isLoading.value = false
      error.value = err.message
      console.log(err)
    }
  }
  loadData()

  return { error, collectionData,isLoading }
}

export default getDataByUser
