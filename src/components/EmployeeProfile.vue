<template>
  <div class="flex flex-col justify-center items-center h-full w-full">
    <div class="grid grid-col-1 md:grid-rows-3 grid-flow-col gap-4">
        <div class="row-span-3 flex flex-col justify-start items-center shadow-lg p-10 max-w-md">
            <div v-for="creds in credential" :key="creds">
                <span v-if="!isLoading" class="relative w-full">
                    <img src="https://i.pinimg.com/564x/ef/cb/5a/efcb5aff8710f5fb321065027cb149b2.jpg" class="rounded-full h-32 object-cover mx-auto">
                    <span class="bottom-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
                </span>
               
                <h1 class="text-2xl font-bold text-center text-sky-600 mt-8">
                    {{ creds.firstName }}   {{ creds.middleName }} {{ creds.lastName }}
                </h1>
                <p class="mt-2 text-md text-gray-600 text-center">{{ creds.Company }}</p>
                <p class="text-sm py-10">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Earum ullam amet aut consequatur quo odio nisi excepturi 
                    nostrum sequi! Consequuntur aliquam expedita quaerat? Veniam odio 
                    nulla esse omnis, non obcaecati.
                </p>

                <div class="flex flex-col justify-start items-start">
                    <h1 class="text-1xl font-bold text-center mb-3">Skills</h1>
                    <div class="grid grid-cols-3 gap-5 mb-6">
                        <span v-for="skill in creds.skills" :key="skill">
                            <span class="rounded-full bg-sky-400 text-slate-100 px-5 py-2 whitespace-nowrap">
                              {{ skill }}
                            </span>
                        </span>
                    </div>
                     
                    <div class="flex flex-col justify-start items-start w-full">
                        <span v-if="showInput" class="w-full">
                            <input type="text" 
                               name="skills" 
                               id="floating_email" 
                               v-model="skills" 
                               @keyup.enter="skillsInput" 
                               class="block mb-5 py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                               min="1"
                               max="20"
                               required
                               placeholder="Add Skills"
                              />

                              <span v-if="SkillsArray" class="w-full">
                                    <span v-for="skills in SkillsArray" :key="skills" class="grid grid-cols-2 mb-3 w-full">
                                        <span class="rounded-full bg-sky-400 text-slate-100 px-5 py-2 text-center">
                                            {{ skills }}
                                        </span>
                                    </span>
                              </span>

                              <button class="w-full text-white bg-sky-700 hover:bg-sky-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                       @click="updateSkills">
                                       Add Skills
                             </button>
                        </span>
                        
                        <span v-else>
                            <i class="fa-solid fa-circle-plus text-sky-800 text-2xl cursor-pointer"
                               @click="AddSkills">
                            </i>
                        </span>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-span-8 shadow-md p-10  basic-info-container">
            <h1 class="text-1xl font-bold text-center">Basic Information</h1>
            <div v-for="creds in credential" :key="creds" class="grid grid-cols-3 gap-2">
                <div>
                    <h1 class="text-md font-semibold text-slate-500 dark:text-white p-2">
                        Age
                    </h1>
                    <p>{{ creds.Age}}</p>
                </div>

                <div>
                    <h1 class="text-md font-semibold text-slate-500 dark:text-white p-2">
                        Years of Experience
                    </h1>
                    <p>{{ creds.WorkExp}}</p>
                </div>

                <div>
                    <h1 class="text-md font-semibold text-slate-500 dark:text-white p-2">
                        Phone
                    </h1>
                    <p>+639454357210</p>
                </div>
            </div>

            <div v-for="creds in credential" :key="creds" class="grid grid-cols-3 gap-2">
                <div>
                    <h1 class="text-md font-semibold text-slate-500 dark:text-white p-2">
                        Email
                    </h1>
                    <p>{{ creds.Age}}</p>
                </div>

                <div>
                    <h1 class="text-md font-semibold text-slate-500 dark:text-white p-2">
                        Educational Attainment
                    </h1>
                    <p>{{ creds.WorkExp}}</p>
                </div>

                <div>
                    <h1 class="text-md font-semibold text-slate-500 dark:text-white p-2">
                        Address
                    </h1>
                    <p>+639454357210</p>
                </div>

            </div>
        </div>


        <div class="row-span-2 col-span-8  shadow-md p-10 w-full">
            <h1 class="text-1xl font-bold text-center mb-5">Experience</h1>
            <div class="flex justify-around items-center border-b border-slate-300 py-5">
                <img src="https://www.jimac-inc.com/wp-content/themes/jimacv2theme/assets/img/jimac-logo.png" 
                     class="rounded-full h-20 w-16 object-cover">

                <div class="flex flex-col justify-start items-center">
                    <h1 class="text-sky-600 text-2xl">Jimac Inc</h1>
                    <h3 class="text-slate-600 text-xl">Web Application Developer</h3>
                    <small>August 8 - Present | Quezon Ave,Quezon City</small>
                </div>
            </div>

            <div class="flex justify-start items-start">
                <i class="fa-solid fa-circle-plus text-sky-800 text-2xl cursor-pointer pt-5"
                               @click="isOpen = true">
                            </i>
            </div>
        </div>
    </div>
  </div>
  <!-- MODAL -->
<Modal :isOpen="isOpen">
        <!-- TITLE -->
        <template #title>
            ADD A EXPERIENCE
        </template>

        <!-- BODY -->
        <template #body>

            <!-- IMAGE UPLOAD -->
            <div class="flex justify-start">
                <div class="flex flex-col justify-start items-start w-full mb-5">
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

                <div class="w-full">
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Company</label>
                    <input type="text" 
                           class="bg-gray-50 mb-3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                           placeholder="e.g Google"
                           v-model="company"
                           required>

                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Position</label>
                    <input type="text" 
                           class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                           placeholder="e.g Web Developer"
                           v-model="position"
                           required>
                </div>
            </div>

            <div class="mb-5 w-full">
                    <input type="checkbox" 
                           v-model="employed"
                           class="w-4 mr-4 mt-3 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    <label>im currently employed here</label>
            </div>

            <div class="grid grid-cols-2 gap-2">
                <div class="mb-3">
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Date Started
                    </label>
                    <input type="date" 
                           class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                           placeholder="John"
                           v-model="dateStarted"
                           required>
                </div>

                <div v-if="!employed"
                     class="mb-3">
                    <label for="last_name" 
                           class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                           Date Leave
                    </label>
                    <input type="date"
                           v-model="dateLeave"
                           class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required>
                </div>
            </div>
            
            <div class="w-full">
                <span v-if="Loading">
                    <button @click="addExperience" 
                        class="w-full bg-teal-500 text-white p-2 shadow rounded-full cursor-pointer" >
                        Adding....
                    </button>
                </span>
                <span v-else>
                    <button @click="addExperience" 
                        class="w-full bg-teal-700 text-white p-2 shadow rounded-full cursor-pointer" >
                        Add Experience
                    </button>
                </span>
            </div>
        </template>
</Modal>

</template>

<script>
import queryData from '@/composables/queryData'
import LoadingAnimate from './LoadingAnimate.vue'
import useDocument from '@/composables/useDocument'
import useData from '@/composables/useData'
import Modal from './Modal.vue'
import getUser from '@/composables/getUser'
import Storage from '@/composables/Storage'
import { ref } from 'vue'

export default {
    components: {LoadingAnimate,Modal},
    setup(){
        // INPUTS
        const showInput = ref(false)
        const skills = ref('')
        const SkillsArray = ref([])
        const updateData = ref('')
        const isOpen = ref('')
        const Loading = ref('')

        // COMPOSABLES
        const { addDoc } = useData('EmployeeExperience')
        const { currentUser } = getUser()
        const {url,filePath,uploadImage} = Storage()
        
        
        // IMAGE UPLOAD
        const imageToUpload = ref('')
        const filetype = ['image/png','image/jpeg']
        const fileError = ref(null)
        const image = ref('')

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

        // ADD EXPERIENCE INPUT
        const company = ref('')
        const position = ref('')
        const dateStarted = ref('')
        const employed = ref(false)
        const dateLeave = ref('')

        // ADD EXPERIENCE FUNCTION
        const addExperience = async () => {
          try{
            Loading.value = true
            await uploadImage(image.value)
            await addDoc({
                company:company.value,
                position:position.value,
                dateStarted:dateStarted.value,
                dateLeave:dateLeave.value,
                isCurrent:employed.value,
                user : currentUser.value.uid,
                coverUrl: url.value,
                filePath: filePath.value
            })
          }catch(err){
             console.log(err)
          }
      
          Loading.value = false
          isOpen.value = false
        }


        const { error, data, loadData, isLoading } = queryData('EmployeeDetails')
        loadData()

        // COMPOSABLES
        async function fetchData() {
            const { error, data, loadData, isLoading } = queryData('EmployeeDetails')
            await loadData()
            
            updateData.value = data.value.map((newData) => {
                const { deleteDoc,updateDoc,AddSkills } = useDocument('EmployeeDetails',newData.id)

                return { deleteDoc,updateDoc,AddSkills }
            })
        }
        fetchData()
  
        // FOR PUSHING IN ARRAY FUNCTION
        const itemValue = (variableValue,array) => {
                if(variableValue != ''){
                    array.push(variableValue)
                }
        }

        // ADD SKILLS CLICK
        const AddSkills = () => {
            showInput.value = !showInput.value
        }

        const skillsInput = () => {
            return itemValue(skills.value,SkillsArray.value),
                   skills.value = ''
        }

        // UPDATE SKILLS
        const updateSkills = () => {
            SkillsArray.value.map((skill) => {
                updateData.value[0].AddSkills(skill)
            })
        }
        
        const dataObject = {
            credential:data,
            AddSkills,
            showInput,
            skillsInput,
            SkillsArray,
            skills,
            isLoading,
            updateSkills,
            isOpen,
            imageToUpload,
            previewImage,
            imageUrl,
            employed,
            addExperience,
            company,
            position,
            dateStarted,
            dateLeave,
            error,
            isLoading,
            Loading
        }

        return dataObject
    }
}
</script>

<style>
.basic-info-container {
  max-width: 800px; /* or any other value you prefer */
}
</style>