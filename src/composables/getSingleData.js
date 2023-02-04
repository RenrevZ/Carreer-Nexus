import { ref } from '@vue/reactivity'
import { projectFirestore } from '../firebase/config'

const getSingleData =  (id) => {
    const jobs = ref([])
    const error = ref([])
    const loadData = async () => {
    try{
        const response = await projectFirestore.collection('Jobs')
        .doc(id).get() //this fetch the data
        
        jobs.value = {...response.data()}
        return { jobs }
    }
    catch(err){
        error.value = err.message
        console.log(error.value) 
    }
    }

    return { error, jobs , loadData}
}

export default  getSingleData 
