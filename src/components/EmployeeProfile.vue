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
                    <h1 class="text-1xl font-bold text-center">Skills</h1>
                    <div class="grid grid-cols-3 gap-2 mb-5">
                        <span class="rounded-full bg-sky-400 text-slate-100 px-10 py-2 text-center">
                            Vue
                        </span>
                        <span class="rounded-full bg-sky-400 text-slate-100 px-10 py-2 text-center">
                            Laravel
                        </span>
                        <span class="rounded-full bg-sky-400 text-slate-100 px-10 py-2 text-center">
                            Mysql
                        </span>
                        <span class="rounded-full bg-sky-400 text-slate-100 px-10 py-2 text-center">
                            Tailwind
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
        const { error, data, loadData, isLoading } = queryData('EmployeeDetails')
        loadData()

        // COMPOSABLES
        async function fetchData() {
            const { error, data, loadData, isLoading } = queryData('EmployeeDetails')
            await loadData()
            
            updateData.value = data.value.map((newData) => {
                const { deleteDoc,updateDoc } = useDocument('EmployeeDetails',newData.id)

                return { deleteDoc,updateDoc }
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
        const updateSkills = async () => {
            await updateData.value[0].updateDoc({skills:SkillsArray.value})
        }
        
        const dataObject = {
            credential:data,
            AddSkills,
            showInput,
            skillsInput,
            SkillsArray,
            skills,
            isLoading,
            updateSkills
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