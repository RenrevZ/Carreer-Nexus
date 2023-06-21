import { ref } from '@vue/reactivity'
import { projectFirestore } from '../firebase/config'

const getData =  () => {
    const jobs = ref([])
    const error = ref([])
    const isLoading = ref(false)
    const collectionData = ref([])
    const loadData = async (search) => {
    try{
        isLoading.value = true
        const response = await projectFirestore.collection('Jobs').get()
        
        
        if(search){
            jobs.value = response.docs.map(doc => ({...doc.data(),id : doc.id}))
                         .filter(job => job.position.toLowerCase().includes(search.toLowerCase()))
          }else{
                jobs.value = response.docs.map(doc => ({...doc.data(),id : doc.id}))
        }
        
        if (response.docs.length > 0) { // check if any documents were returned
            // const user = response.docs[0].data().user; // get the user property from the first document
            const user = response.docs.map(doc => {
                return doc.data().user
            }); // get the user property from the first document


            let companyCollection = ref([])
            for(let i = 0; i < user.length; i++){
                companyCollection.value.push(await projectFirestore.collection('Company')
                    .where('user', '==', user[i])
                    .get())
            }

            console.log('companyCollection:',companyCollection)

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
