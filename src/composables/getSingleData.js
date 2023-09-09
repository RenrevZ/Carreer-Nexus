import { ref } from '@vue/reactivity'
import { projectFirestore } from '../firebase/config'
import getUser from '@/composables/getUser'

const getSingleData = (id,collection) => {
    const jobs = ref([])
    const error = ref([])
    const isLoading = ref(false)
    const collectionData = ref([])
    const isUserApplied = ref(false)
    const userApplied = ref([])
    const { currentUser } = getUser()

    const loadData = async () => {
        try{
            isLoading.value = true
            const response = await projectFirestore.collection(collection)
                            .doc(id)
                            .get() 
            
            jobs.value = response.data();

            // GET THE COMPANY LISTED
            const companyCollection = await projectFirestore.collection('Company')
                                    .where('user', '==', response.data().user)
                                    .get()

        
            collectionData.value  = companyCollection.docs.map((doc) => {
                return { ...doc.data(), id: doc.id }
            })

            // VALIDATES IF CURRENT USER IS APPLIED
            if(response.data().appliedUser && response.data().appliedUser.length > 0 && currentUser.value != null){

                const isApplied =  response.data().appliedUser.indexOf(currentUser.value.uid)
                console.log('response:',response.data().appliedUser.indexOf(currentUser.value.uid))

                if(isApplied >= 0){
                    isUserApplied.value = true
                    userApplied.value = response.data().appliedUser
                }
            }
            
            return { jobs,collectionData,isUserApplied,userApplied }
        }
        catch(err){
            error.value = err.message
            console.log(error.value) 
        }
        isLoading.value = false
    }

    loadData()

    return { error, jobs,collectionData,isLoading,isUserApplied,userApplied}
}

export default  getSingleData 
