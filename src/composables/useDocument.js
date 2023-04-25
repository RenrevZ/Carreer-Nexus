import { projectFirestore } from "@/firebase/config";
import { ref } from "vue";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { useRouter } from "vue-router";


const useDocument = (collection,id) => {
    const error = ref(null)
    const isLoading = ref(false)
    const router =  useRouter()

    let docRef = projectFirestore.collection(collection).doc(id)

    const deleteDoc = async () => {  
        isLoading.value = false
        error.value = null

        try{
            const response =  await docRef.delete()
            isLoading.value = false
            return response
        }catch(err){
            console.log(err.message)
            isLoading.value = false
            error.value = 'could not delete the document'
        }
    }

    const updateDoc = async (updates) => {
        isLoading.value = false
        error.value = null
    
        try{
            const response =  await docRef.update(updates)
            isLoading.value = false
            return response
        }catch(err){
            console.log(err.message)
            isLoading.value = false
            error.value = 'could not update the document'
        }
    }

    const AddSkills = async (array) => {
        try {
            await docRef.update({
                skills: firebase.firestore.FieldValue.arrayUnion(array)
            });
            
        } catch (err) {
            error.value = err
        }

        if(!error) router.push({name:'mylistng'})
    };


    return {error,isLoading,deleteDoc,updateDoc,AddSkills}
}




export default useDocument