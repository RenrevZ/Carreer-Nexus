import { ref } from '@vue/reactivity'
import { projectFirestore } from '../firebase/config'

const getSingleData =  (id) => {
    const jobs = ref([])
    const error = ref([])
    const isLoading = ref(false)
const loadData = async () => {
    try{
        const response = await projectFirestore.collection('Jobs')
        .doc(id).get() //this fetch the data
        
        jobs.value = {...response.data()}
        isLoading.value = true
        return { jobs }
    }
    catch(err){
        error.value = err.message
        console.log(error.value) 
    }
    isLoading.value = false
}
    
    loadData()
    

    return { error, jobs,isLoading}
}

export default  getSingleData 
