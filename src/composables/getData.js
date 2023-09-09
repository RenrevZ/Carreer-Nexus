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
        
        console.log('res:',response.docs)
        if(search){
            jobs.value = response.docs.map(doc => ({...doc.data(),id : doc.id}))
                         .filter(job => job.position.toLowerCase().includes(search.toLowerCase()))
          }else{
            jobs.value = response.docs.map(doc => ({...doc.data(),id : doc.id}))
        }
        
        if (response.docs.length > 0) {
            const users = response.docs.map((doc) => doc.data().user);
            const uniqueUser = users.filter((value, index, array) => array.indexOf(value) === index);

            // Use Promise.all to wait for all queries to complete
            let companyCollection = await Promise.all(
                uniqueUser.map(async (user) => {
                    const query= await projectFirestore
                    .collection('Company')
                    .where('user', '==', user)
                    .get()
                    
                    // Return the data from the querySnapshot
                    return query.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
                })
            );
          
            // Flatten the array of arrays into a single array
            companyCollection = companyCollection.flat();
          
            console.log('sdasdsadasd', companyCollection);
            collectionData.value = companyCollection;
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
