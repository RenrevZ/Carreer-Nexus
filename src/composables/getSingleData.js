import { ref } from '@vue/reactivity'
import { projectFirestore } from '../firebase/config'

const getSingleData =  (id,collection) => {
    const jobs = ref([])
    const error = ref([])
    const isLoading = ref(false)
    const collectionData = ref([])
const loadData = async () => {
    try{
        isLoading.value = true
        const response = await projectFirestore.collection(collection)
        .doc(id).get() //this fetch the data
        
        jobs.value = {...response.data()}

        // GET THE COMPANY LISTED
        const companyCollection = await projectFirestore.collection('Company')
                                .where('user', '==', response.data().user)
                                .get()

       
        collectionData.value  = companyCollection.docs.map((doc) => {
            return { ...doc.data(), id: doc.id }
        })
        
        return { jobs,collectionData }
    }
    catch(err){
        error.value = err.message
        console.log(error.value) 
    }
    isLoading.value = false
}
    
    loadData()
    

    return { error,loadData, jobs,collectionData,isLoading}
}

export default  getSingleData 
