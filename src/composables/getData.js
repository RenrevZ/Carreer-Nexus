import { ref } from '@vue/reactivity'
import { projectFirestore } from '../firebase/config'

const getData =  () => {
    const jobs = ref([])
    const error = ref([])
    const loadData = async () => {
    try{
        const response = await projectFirestore.collection('Jobs').get()
        
        jobs.value = response.docs.map(doc => {
        return {...doc.data(),id : doc.id}
        })
    }
    catch(err){
        error.value = err.message
        console.log(error.value) 
    }
    }

    return { error, jobs , loadData}
}

export default  getData 
