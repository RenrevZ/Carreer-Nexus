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

  <div
      v-if="isOpen"
      class="fixed inset-0 z-10 overflow-y-auto"
      aria-modal="true"
      role="dialog"
      aria-labelledby="modal-title"
      @keydown.escape="isOpen = false"
    >
      <div class="flex items-center justify-center min-h-screen">
        <div
          class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
        ></div>

        <div
          class="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full"
          role="document"
        >
          <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div class="sm:flex sm:items-start">
              <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">

                <h3 class="text-lg leading-6 font-medium text-gray-900"
                    id="modal-title">
                  ADD A EXPERIENCE
                </h3>
                <div class="mt-2 w-full">
                    <label for="email-address-icon" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
                    <div class="relative w-full">

                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <i class="fas fa-building"></i>
                        </div>

                        <input type="text" id="email-address-icon" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com">
                    </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
  </div>
</template>

<script>
import queryData from '@/composables/queryData'
import LoadingAnimate from './LoadingAnimate.vue'
import useDocument from '@/composables/useDocument'
import { ref } from 'vue'
export default {
    components: {LoadingAnimate},
    setup(){
        // INPUTS
        const showInput = ref(false)
        const skills = ref('')
        const SkillsArray = ref([])
        const updateData = ref('')
        const isOpen = ref('')

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
        console.log(updateData)
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
            isOpen
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