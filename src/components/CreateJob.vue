<template>
<div class="md:grid grid-cols-2 gap-2">
<div class="max-w-screen-xl p-6 mx-10 bg-white border border-teal-400 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <form>
        <h1 class="text-2xl font-extrabold tracking-tight text-slate-500 dark:text-white">
            Create Job Listing
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
         

        <!-- ==== ENDOFPARENTDIV === -->
     

    </form>
</div>

<div class="left max-w-xl">
       <div class=" p-6 mb-6 bg-white border border-teal-400 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
         <div class="w-full border-0 border-b border-gray-200 text-gray-900 text-sm rounded-t-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <div class="flex justify-around items-center">
               <div class="left">
                    <h5 class="text-lg font-extrabold tracking-tight text-slate-500 dark:text-white">
                        <i class="fa-solid fa-note-sticky"></i> 

                        <span v-if="position" class="pl-5">
                             {{ position }}
                        </span>

                        <span v-else>
                                Job Description
                        </span>
                    </h5>
               </div>
             
               <div class="right">
                 <button class=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    @click="apply">
                    Apply now
                </button>
               </div>
            </div>
        </div>

    
        <div class="flex flex-col items-start justify-start p-2 border-0 border-b border-gray-200 mb-4">
            <h2 class="mb-2 text-lg font-semibold text-slate-700 dark:text-white">Job Description</h2>
            
                <small class="text-sm font-bold text-gray-500 dark:text-white p-2">
                    {{ JobDescription }}
                </small>                                                                                                     
         </div>
        
     

     
         <div class="flex flex-col items-start justify-start p-2 border-0 border-b border-gray-200 mb-4">
            <h2 class="mb-2 text-lg font-semibold text-slate-700 dark:text-white">Job highlights</h2>
                <ul class="mb-8 space-y-4 text-left text-gray-500 dark:text-gray-400">
            
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
                            <i class="fa-solid fa-check  text-green-500 dark:text-green-400 p-1"></i>
                            <span>{{ JobHighlight }}</span>
                        </li>
                    </span>
                </ul>
        </div>

       
        <div class="flex flex-col items-start justify-start  border-0 border-b border-gray-200 mb-4">    
        <h2 class="mb-2 text-lg font-semibold text-slate-700 dark:text-white">Roles And Resposibilities</h2>
            <ul class="text-gray-500 list-disc list-inside dark:text-gray-400 ">

                <span v-for="rarp in QualificationsArray" :key="rarp">
                    <li class="mb-1">{{ rarp }}</li>
                </span>
                
                <span v-if="Qualifications">
                    <li>{{ Qualifications }}</li>
                </span>
            </ul>
        </div>

        
          <div class="flex flex-col items-start justify-start p-2 border-0 border-b border-gray-200 mb-4">    
            <h2 class="mb-2 text-lg font-semibold text-slate-700 dark:text-white">Qualification</h2>
                <ul class="text-gray-500 list-disc list-inside dark:text-gray-400">
                    <span>
                        <li v-for="rolesandres in RoleandResArray" :key="rolesandres">
                            {{ rolesandres }}
                        </li>
                    </span>
                    
                    <span v-if="RoleandRes">
                        <li>{{ RoleandRes }}</li>
                    </span>
                </ul>
          </div>
       
        </div>
    </div>

<!-- ===== END OF GRID ON PARENT ===  -->
</div>


</template>

<script>
import { computed,ref } from 'vue';
export default {
    setup(){
        const JobHighlighDiv = ref(null)
        const position = ref('')
        const JobHighlight = ref('')
        const Qualifications = ref('')
        const JobDescription = ref('')
        const RoleandRes = ref('')
        let Jharray = ref([])
        let QualificationsArray = ref([])
        let RoleandResArray = ref([])
        
        
        const itemValue = (variableValue,object) => {
                if(variableValue != ''){
                    object.push(variableValue)
                }
        }
        
        
        
        const limitHiglight = computed(() => Jharray.value.slice(0,5))

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
            addRolesAnResposibilities
        }

         return  dataobject 
    }
}
</script>

<style>

</style>