import { ref } from '@vue/reactivity'
import { projectFirestore } from '../firebase/config'

const getData =  () => {
    const jobs = ref([])
    const error = ref([])
    const isLoading = ref(false)
    const collectionData = ref([])
    const loadData = async () => {
    try{
        isLoading.value = true
        const response = await projectFirestore.collection('Jobs').get()
        
        jobs.value = response.docs.map(doc => {
            return {...doc.data(),id : doc.id}
        })
        
        if (response.docs.length > 0) { // check if any documents were returned
            const user = response.docs[0].data().user; // get the user property from the first document
            const companyCollection = await projectFirestore.collection('Company')
                                    .where('user', '==', user)
                                    .get();
            collectionData.value  = companyCollection.docs.map((doc) => {
              return { ...doc.data(), id: doc.id };
            });
        }
    }
    catch(err){
        error.value = err.message
        console.log(error.value) 
    }
    isLoading.value = false
}

    loadData()

    return { error, jobs ,collectionData, loadData,isLoading}
}

export default  getData 
