<template>
<div class="md:grid grid-cols-2 gap-2 mt-3">
<div class="max-w-screen-xl max-h-100 p-6 mx-10 bg-white border border-teal-400 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <form>
        <h1 class="text-2xl font-extrabold tracking-tight text-slate-500 dark:text-white">
            Post a job
        </h1>

        <!-- ==== POSTION ==== -->
        <div class="relative z-0 w-full mb-6 group">
            <input type="text" 
                   name="position" 
                   id="floating_email" 
                   v-model="position" 
                   class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                   placeholder=" " 
                   required />

            <label for="position" 
                   class="peer-focus:font-medium absolute left-0 text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Position
            </label>
        </div>

        <!-- ==== JOB DESCRIPTION ==== -->
        <div class="relative z-0 w-full mb-6 group">
            <input type="text" 
                   name="floating_email" 
                   id="floating_email" 
                   v-model="JobDescription"  
                   class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                   placeholder=" " 
                   required />

            <label for="floating_email" class="peer-focus:font-medium absolute left-0 text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Job Description
            </label>
        </div>

        <div class="md:grid grid-cols-3 gap-2">
            <!-- ==== EXPERIENCE ==== -->
            <div class="relative z-0 w-full mb-6 group">
                <input type="text" 
                    name="floating_email" 
                    id="floating_email" 
                    v-model="Experience" 
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                    placeholder=" " 
                    required />

                <label for="floating_email" 
                    class="peer-focus:font-medium absolute left-0 text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Experience
                </label>
            </div>

            <!-- ==== LOCATION ==== -->
            <div class="relative z-0 w-full mb-6 group">
                <input type="text" 
                    name="floating_email" 
                    id="floating_email" 
                    v-model="salary" 
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                    placeholder=" " 
                    required />

                <label for="floating_email" 
                    class="peer-focus:font-medium absolute left-0 text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Salary
                </label>
            </div>

            <!-- ==== LOCATION ==== -->
            <div class="relative z-0 w-full mb-6 group">
                <input type="text" 
                    name="floating_email" 
                    id="floating_email" 
                    v-model="Timeline" 
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                    placeholder=" " 
                    required />

                <label for="floating_email" 
                    class="peer-focus:font-medium absolute left-0 text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Timeline
                </label>
            </div>
        </div>

        <!-- <div class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-16 py-1 shadow-md mb-10" role="alert">
            <div class="flex">
                <div class="py-1"><svg class="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg></div>
                <div>
                <p class="text-sm">Please use <b>Enter</b> key to add data.</p>
                <p class="text-sm">you can rely on preview data on right for refference.</p>
                </div>
            </div>
        </div> -->
        <span class="flex justify-center items-center p-1 mb-1">
            <div class="flex justify-around items-center">
                <i class="fa-regular fa-bell p-1 text-slate-500"></i>
                <p class="text-sm text-slate-500">Please use <b>Enter</b> key to add data.</p>
            </div>
        </span>

         <div class="first-row">
            <h6>Job Highlights</h6>
            <div class="flex flex-col items-start justify-start" ref="JobHighlighDiv">
                    <div class="relative z-0 w-full mb-6 group">
                      <span v-if="Jharray.length != 5">
                        <input type="text" 
                               name="floating_email" 
                               id="floating_email" 
                               v-model="JobHighlight" 
                               @keyup.enter="addItem" 
                               class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                               min="1"
                               max="20"
                               required
                              />
                      </span>

                      <span v-else>
                        <input type="text" 
                               name="floating_email" 
                               id="floating_email" 
                               v-model="JobHighlight" 
                               @keyup.enter="addItem" 
                               class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-rose-500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                               disabled
                               placeholder="maximum number of higlight reach"
                               required
                              />
                      </span>

                        <label for="floating_email" 
                               class="peer-focus:font-medium absolute left-0 text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                            Job Highlights
                        </label>
                    </div>

                </div>
           </div>

         
            <h6>Qualifications</h6>
            <div class="flex flex-col items-start justify-start" ref="JobHighlighDiv">
                    <div class="relative z-0 w-full mb-6 group">
                        <input type="text" name="floating_email" 
                               id="floating_email" 
                               v-model="Qualifications" 
                               @keyup.enter="addQualification" 
                               class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                               placeholder=" " 
                               required />

                        <label for="floating_email" 
                               class="peer-focus:font-medium absolute left-0 text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                            Qualifications
                        </label>
                    </div>
            </div>
       

        
            <h6>Roles and Responsibilities</h6>
            <div class="flex flex-col items-start justify-start" ref="JobHighlighDiv">
                    <div class="relative z-0 w-full mb-6 group">
                        <input type="text" name="floating_email" 
                               id="floating_email" 
                               v-model="RoleandRes" 
                               @keyup.enter="addRolesAnResposibilities" 
                               class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                               placeholder=" " 
                               required />

                        <label for="floating_email" 
                               class="peer-focus:font-medium absolute left-0 text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                               Roles and Responsibilities
                        </label>
                    </div>
            </div>

            <h6>Required Skills</h6>
            <div class="flex flex-col items-start justify-start" ref="JobHighlighDiv">
                    <div class="relative z-0 w-full mb-6 group">
                        <input type="text" name="floating_email" 
                               id="floating_email" 
                               v-model="RequiredSkills" 
                               @keyup.enter="addRequiredSkills" 
                               class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                               placeholder=" " 
                               required />

                        <label for="floating_email" 
                               class="peer-focus:font-medium absolute left-0 text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                              Required Skills
                        </label>
                    </div>
            </div>
         

        <!-- ==== ENDOFPARENTDIV === -->
    </form>
    <div v-if="isLoading">
        <button class="w-full bg-slate-300 text-slate-800 font-semibold p-2 shadow-md rounded"
                readonly>
            Posting.....
        </button>
    </div>
    <div v-else>
        <button class="w-full bg-teal-600 text-white font-semibold p-2 shadow-md hover:scale-105 ease-in duration-100 rounded"
            @click="postJob">
            Post Job
        </button>
    </div>
</div>

<div class="left max-w-xl">
       <div class=" p-6 mb-6 bg-white border border-teal-400 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
         <div class="border-0 border-b border-gray-200 text-gray-900 text-sm rounded-t-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <div class="flex justify-around items-start">
               <div class="left">
                    <h5 class="text-lg font-extrabold tracking-tight text-sky-500 dark:text-white">
                        <span v-if="position" class="pl-5">
                             {{ position }}
                        </span>

                        <span v-else>
                                Job Description
                        </span>
                    </h5>
               </div>
             
               <!-- <div class="right">
                 <button class="text-white bg-slate-300 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                         disabled>
                    Apply now
                </button>
               </div> -->
            </div>
        </div>

    
        <div class="flex flex-col items-start justify-center border-0 border-b border-gray-200 mb-4">
            <h2 class="text-lg font-semibold text-slate-500 dark:text-white mb-10">Job Summary</h2>
            
                <small class="text-sm font-bold text-gray-500 dark:text-white">
                    {{ JobDescription }}
                </small> 
                
                <div class="flex items-center justify-center">
                    <span v-if="JobDescription == ''">
                        <h6 class="text-sm tracking-tight text-slate-500 dark:text-white">
                                No Job Description yet
                        </h6> 
                    </span>
                </div>
         </div>
        
     

     
         <div class="flex flex-col items-start justify-start p-2 border-0 border-b border-gray-200 mb-5">
            <h2 class="mb-10 text-lg font-semibold text-slate-500 dark:text-white">Job highlights</h2>
                <ul class=" space-y-4 text-left text-gray-500 dark:text-gray-400">
            
                    <span v-if="Jharray">
                        <span v-for="highlight in limitHiglight" :key="highlight">
                            <li>
                                <i class="fa-solid fa-check  text-green-500 dark:text-green-400 p-1"></i>
                                {{ highlight }}
                           </li>
                        </span>
                    </span>

                    
                    <span v-if="JobHighlight">
                        <li>
                            <i class="fa-solid fa-check  text-green-500 dark:text-green-400 p-1 "></i>
                            <span>{{ JobHighlight }}</span>
                        </li>
                    </span>

                    <span v-if="limitHiglight == ''">
                        <h5 class="text-sm tracking-tight text-slate-500 dark:text-white">
                            No Job Higlight yet
                        </h5> 
                    </span>
                </ul>
        </div>

        <div class="flex flex-col items-start justify-start p-2 border-0 border-b border-gray-200 mb-4">    
            <h2 class="mb-10 text-lg font-semibold text-slate-500 dark:text-white">Qualification</h2>
                <ul class="text-gray-500 list-disc list-outside dark:text-gray-400 pl-5">
                   
                    <span v-for="rarp in QualificationsArray" :key="rarp">
                        <li class="mb-1">{{ rarp }}</li>
                    </span>
                    
                    <span v-if="Qualifications">
                        <li>{{ Qualifications }}</li>
                    </span>

                    <span v-if="QualificationsArray == ''">
                            <h5 class="text-sm tracking-tight text-slate-500 dark:text-white">
                                No Qualification added yet
                            </h5> 
                    </span>
                </ul>
          </div>
       
        <div class="flex flex-col items-start justify-start  border-0 border-b border-gray-200 mb-4">    
        <h2 class="mb-10 text-lg font-semibold text-slate-500 dark:text-white">Roles And Resposibilities</h2>
            <ul class="text-gray-500 list-disc list-outside dark:text-gray-400 pl-5">

                <span>
                    <li v-for="rolesandres in RoleandResArray" :key="rolesandres">
                        {{ rolesandres }}
                    </li>
                </span>
                    
                <span v-if="RoleandRes">
                    <li>{{ RoleandRes }}</li>
                </span>

                <span v-if="RoleandResArray == ''">
                    <h5 class="text-sm tracking-tight text-slate-500 dark:text-white">
                        No Roles and Responsibilities yet
                    </h5> 
                </span>
            </ul>
        </div>

        <!-- ==== REQUIRED SKILLS ====  -->
          <div class="border-0 border-b border-gray-200 text-slate-800 text-sm rounded-t-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <h5 class="text-2xl font-extrabold tracking-tight text-slate-500 dark:text-white mb-2">
                    <i class="fa-regular fa-lightbulb"></i> Required Skills
                </h5> 
          </div>

          <span v-if="RequiredSkillsArray" class="grid grid-cols-3 gap-2">
                <span v-for="tags in RequiredSkillsArray" :key="tags" class="p-2 mb-2 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800">
                        {{ tags }}
                </span>
          </span>

          <span v-if="RequiredSkillsArray == ''">
                <h5 class="text-md font-bold tracking-tight text-slate-500 dark:text-white">
                     No required Skills added yet
                </h5> 
          </span>
       
        </div>
    </div>

<!-- ===== END OF GRID ON PARENT ===  -->
</div>


</template>

<script>
import { computed,ref } from 'vue';
import { useRouter } from 'vue-router'
import getUser from '@/composables/getUser'
import useData from '@/composables/useData'

export default {
    setup(){
        const JobHighlighDiv = ref(null)
        const position = ref('')
        const JobHighlight = ref('')
        const Qualifications = ref('')
        const JobDescription = ref('')
        const RoleandRes = ref('')
        const RequiredSkills = ref('')
        const Experience = ref('')
        const salary = ref('')
        const Timeline = ref('')
        let Jharray = ref([])
        let QualificationsArray = ref([])
        let RoleandResArray = ref([])
        let RequiredSkillsArray = ref([])

        // COMPOSABLES
        const {error, addDoc, isLoading} = useData('Jobs')
        const route = useRouter()
        const { currentUser } = getUser()
        const maxCharsPerLine = ref(20)
        
        
        const itemValue = (variableValue,object) => {
                if(variableValue != ''){
                    object.push(variableValue)
                }
        }
        
        //=== limit the items by 5
        const limitHiglight = computed(() => Jharray.value.slice(0,5))
        const wordbreak = (variable) => {
            let words = variable.split(' ');
            let lines = [];
            let line = '';
            

            for (let i = 0; i < words.length; i++) {
                let word = words[i];

                if (line.length + word.length <= maxCharsPerLine.value) {
                    line += word + ' ';
                } else {
                    lines.push(line.trim());
                    line = word + ' ';
                }
            }

            lines.push(line.trim());

            return lines.join('<br>');
        }

        const DescriptionwordBreak = computed(() => wordbreak(JobDescription.value))

       
        const addItem = () => { 
            return itemValue(JobHighlight.value,Jharray.value),
                  JobHighlight.value = '' 
        }

        const addQualification = () => { 
            return itemValue(Qualifications.value,QualificationsArray.value),
                   Qualifications.value = '' 
        }

        const addRolesAnResposibilities = () => { 
            return itemValue(RoleandRes.value,RoleandResArray.value),
                   RoleandRes.value = '' 
        }

        const addRequiredSkills = () => { 
            return itemValue(RequiredSkills.value,RequiredSkillsArray.value),
                   RequiredSkills.value = '' 
        }
        
        //=== ADDING EVERY DATA TO THE FIREBASE
        const postJob = async () => {
           await addDoc({
                position:position.value,
                JobDescription: JobDescription.value,
                salary:salary.value,
                JobHighlights: Jharray.value,
                Qualifications: QualificationsArray.value,
                RolesAnResposibilities: RoleandResArray.value,
                tags: RequiredSkillsArray.value,
                Timeline: Timeline.value,
                Experience: Experience.value,
                user:currentUser.value.uid
            })

            route.push({name:'JobList'})
        }

        const dataobject = {
            JobHighlighDiv,
            JobHighlight,
            addItem,
            Jharray,
            limitHiglight,
            position,
            JobDescription,
            Qualifications,
            QualificationsArray,
            addQualification,
            RoleandRes,
            RoleandResArray,
            addRolesAnResposibilities,
            RequiredSkills,
            addRequiredSkills,
            RequiredSkillsArray,
            postJob,
            Experience,
            isLoading,
            Timeline,
            salary,
            // word break every data
            DescriptionwordBreak
        }

         return  dataobject 
    }
}
</script>

<style>

</style>