<template>
  <div class="flex flex-col px-10">
        <h4 class="text-2xl font-bold my-5">Employee Details</h4>
        <!-- === IMAGE UPLOAD ==== -->
        <div class="grid grid-cols-2 gap-2">
            <div class="d-flex flex-col justify-center items-center">
                <div class="w-36 h-36 mb-3 rounded-full border-2 border-gray-400 overflow-hidden">
                    <img ref="preview" 
                         class="w-full h-full object-cover object-center" 
                         :src="imageUrl" alt="preview" />
                </div>
                
                <input type="file"
                       class="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-teal-600 file:text-white hover:file:bg-teal-800"
                       accept="image/*"
                       ref="imageToUpload"
                       @change="previewImage" />
            </div>
           
            <div>
                <!-- == FIRST NAME ==  -->
                <div class="flex flex-col items-start">
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        First Name
                    </label>
                    <input type="email" 
                        name="email" 
                        id="email" 
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        v-model="firstName" 
                        required>
                </div>

                <!-- == FIRST NAME ==  -->
                <div class="flex flex-col items-start">
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Middle Name
                    </label>
                        <input type="email" 
                            name="email" 
                            id="email" 
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            v-model="middleName" 
                            required>
                </div>
                <!-- == FIRST NAME ==  -->
                <div class="flex flex-col items-start">
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Last Name
                    </label>
                        <input type="email" 
                            name="email" 
                            id="email" 
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            v-model="lastName" 
                            required>
                </div>
            </div>
        </div>


        <div class="grid grid-cols-3 gap-2 pt-5">
            <!-- == Address ==  -->
            <div class="flex flex-col items-start">
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Address
                    </label>
                        <input type="text" 
                            name="email" 
                            id="email" 
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            v-model="address" 
                            required>
            </div>
            <!-- == Age ==  -->
            <div class="flex flex-col items-start">
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Age
                    </label>
                        <input type="number" 
                            name="email" 
                            id="email" 
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 
                            v-model="Age" 
                            required>
            </div>
            <!-- == Gender ==  -->
            <div class="flex flex-col items-start">
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Gender
                    </label>
                        <input type="text" 
                            name="email" 
                            id="email" 
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            v-model="Gender" 
                            required>
            </div>
        </div>

        <div class="grid grid-cols-3 gap-2 pt-5">
            <!-- == Address ==  -->
            <div class="flex flex-col items-start">
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Email
                    </label>
                        <input type="email" 
                            name="email" 
                            id="email" 
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            v-model="email" 
                            required>
            </div>
            <!-- == Age ==  -->
            <div class="flex flex-col items-start">
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Phone / Mobile Number
                    </label>
                        <input type="number" 
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 
                            v-model="mobile" 
                            required>
            </div>
            <!-- == Gender ==  -->
            <div class="flex flex-col items-start">
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        EducationalAttainment
                    </label>
                        <input type="text" 
                            name="email" 
                            id="email" 
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            v-model="educationalAttaiment" 
                            required>
            </div>
        </div>

        <div class="grid grid-cols-2 gap-2 pt-5 mb-3">
            <!-- == Address ==  -->
            <div class="flex flex-col items-start">
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Years Of Experience
                    </label>
                        <input type="text" 
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            v-model="yearsXp" 
                            required>
            </div>

            <div class="flex flex-col items-start">
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Position
                    </label>
                        <input type="text" 
                               class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                               v-model="position"
                               required>
            </div>
        </div>

        <div class="w-full mb-2">
            
            <label  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Bio</label>
            <textarea  rows="4" 
                      class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."
                      style="resize: none;"
                      v-model="bio"></textarea>

        </div>

        <div v-if="isLoading" class="pb-10">
            <button @click="createProfile" class="w-full bg-teal-500 text-white p-2 shadow rounded-full" disabled>Creating...</button>
        </div>

        <div v-else class="pb-10">
            <button @click="createProfile" class="w-full bg-teal-500 text-white p-2 shadow rounded-full">Create Profile</button>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import useData from '@/composables/useData'
import getUser from '@/composables/getUser'
import { useRouter } from 'vue-router'
import Storage from '@/composables/Storage'
import InputError from '@/composables/InputError'

export default {
    setup(){
        //=== INPUTS
        const firstName = ref('')
        const middleName = ref('')
        const lastName = ref('')
        const address = ref('')
        const Age = ref('')
        const Gender = ref('')
        const email = ref('')
        const mobile = ref('')
        const educationalAttaiment = ref('')
        const yearsXp = ref('')
        const position = ref('')
        const bio = ref('')

        //== ROUTER
        const router =  useRouter()
        
        //=== COMPOSABLES
        const { error, addDoc, isLoading} = useData('EmployeeDetails')
        const { currentUser } = getUser()

        //=== IMAGE UPLOAD
        const {url,filePath,uploadImage} = Storage()
        const imageToUpload = ref('')
        const fileError = ref(null)
        const image = ref('')

        const filetype = ['image/png','image/jpeg']

        // PREVIEW IMAGE
        const imageUrl = ref("https://via.placeholder.com/150");
        const previewImage = (event) => {
            const file = event.target.files[0];
            image.value = file
            const reader = new FileReader();
            reader.addEventListener("load", () => {
                imageUrl.value = reader.result;
            }, false);
            
            if (file) {
                reader.readAsDataURL(file);
            }

            if(file && filetype.includes(file.type)){
                imageToUpload.value = file
                fileError.value = null
            }else{
                imageToUpload.value = null
                fileError.value = 'Please select an image file (png/jpg)'
            }
        }


        const showError = (input) => {
            let error = ''
            if(input == ''){
                error = `error! ${input} field is required`
            }

            return error
        }

        
        const createProfile = async () => {
                await uploadImage(image.value)
                await addDoc({
                    firstName: firstName.value,
                    middleName : middleName.value,
                    lastName : lastName.value,
                    address : address.value,
                    Age : Age.value,
                    Gender : Gender.value,
                    Email : email.value,
                    Phone: mobile.value,
                    EducationalAttainment: educationalAttaiment.value,
                    YearsOfXp: yearsXp.value,
                    position: position.value,
                    bio: bio.value,
                    user : currentUser.value.uid,
                    coverUrl: url.value,
                    filePath: filePath.value
                })
              router.push({name:'mylistng'})
        }

        
        const dataObject = {
            createProfile,
            firstName,
            middleName,
            lastName,
            address,
            Age,
            Gender,
            isLoading,
            error,
            showError,
            previewImage,
            imageUrl,
            imageToUpload,
            email,
            mobile,
            educationalAttaiment,
            yearsXp,
            position,
            bio
        }

        return dataObject
    }
}
</script>

<style>

</style>