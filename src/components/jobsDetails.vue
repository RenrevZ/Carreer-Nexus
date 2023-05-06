<template>
      <div class="flex flex-col-reverse lg:flex-row mt-2 justify-center items-start m-auto">
        <div class="right p-2 max-w-full">
           
          <div class="p-6 mb-6  bg-white border border-teal-400 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <div v-if="isLoading" class="flex flex-col justify-start items-start">
                <h1 class="text-2xl font-extrabold tracking-tight text-slate-500 dark:text-white">
                    {{ jobs.Company }}
                </h1>
                <h6 class=" font-extrabold tracking-tight text-slate-500 dark:text-white">
                    Company Description:
                </h6>
                <p>{{ jobs.Company_overview }}</p>

                <ul class="flex flex-col justify-start items-start">
                    <li> <i class="fa-solid fa-briefcase text-teal-600 text-lg p-1"></i>{{ jobs.Experience }}</li>
                    <li><i class="fa-solid fa-map-location-dot text-teal-600 text-lg p-1"></i> {{ jobs.Location }}</li>
                    <li><i class="fa-solid fa-business-time text-teal-600 text-lg p-1"></i>{{ jobs.Timeline }}</li>
                </ul>
              </div>

              <div v-else>
                   <LoadingAnimate profile="true" />
              </div>

          </div>

          <div class="p-6 mb-6 bg-white border border-teal-400 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <div class="border-0 border-b border-gray-200 text-slate-800 text-sm rounded-t-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <h5 class="text-2xl font-extrabold tracking-tight text-slate-500 dark:text-white">
                    <i class="fa-regular fa-lightbulb"></i> Required Skills
                </h5> 
            </div>
            <div class="grid grid-cols-3 gap-2">
                <span v-for="tags in jobs.tags" :key="tags" class="p-2 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800">
                                    {{ tags }}
                </span>
            </div>
          
          </div>
        </div>

    <div class="left md:max-w-xl mx-3">
       <div class=" p-6 mb-6 bg-white border border-teal-400 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
         <div class="border-0 border-b border-gray-200 text-gray-900 text-sm rounded-t-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <div class="flex justify-center mb-2">
               <div class="left">
                <h5 class="text-lg font-extrabold tracking-tight text-sky-500 dark:text-white">
                        {{  jobs.position }}
                    </h5>
               </div>
            </div>
            <div class="flex justify-between items-center">
                <div class="left">
                    <ul class="text-left text-gray-500 dark:text-gray-400">
                        <li>
                            <i class="fa-solid fa-peso-sign pr-2"></i>
                            {{  jobs.salary }}
                        </li>
                        <li>
                            <i class="fa-solid fa-calendar-days text-slate-600 pr-2"></i>
                            {{  jobs.Timeline }}
                        </li>
                        <li>
                            <i class="fa-solid fa-business-time pr-2"></i>
                            {{ jobs.Experience }}
                        </li>
                    </ul>
                </div>
                <div class="right">
                    <button class=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        @click="apply">
                        Apply now
                    </button>
                </div>
            </div>  
            
        </div>

        <div v-if="isLoading">
        <div class="flex flex-col items-start justify-start p-2 border-0 border-b border-gray-200 mb-4">
            <h2 class="mb-2 text-lg font-semibold text-slate-700 dark:text-white">Job Description</h2>
                <small class="text-sm text-left  text-gray-500 dark:text-white p-2">
                    {{ jobs.JobDescription }}
                </small>                                                                                                     
         </div>
        </div>
        <div v-else class="border-0 border-b border-gray-200 mb-4">
            <LoadingAnimate details="true" />
            <LoadingAnimate details="true" />
        </div>

        <div v-if="isLoading">
         <div class="flex flex-col items-start justify-start p-2 border-0 border-b border-gray-200 mb-4">
            <h2 class="mb-2 text-lg font-semibold text-slate-700 dark:text-white">Job highlights</h2>
                <ul class="mb-8 space-y-4 text-left text-gray-500 dark:text-gray-400">
                    <li class="flex items-center space-x-3" v-for="higlight in jobs.JobHighlights" :key="higlight">
                            <!-- Icon -->
                            <i class="fa-solid fa-check  text-green-500 dark:text-green-400"></i>
                            <span>{{ higlight }}</span>
                    </li>
                </ul>
           </div>
        </div>
         <div v-else class="border-0 border-b border-gray-200 mb-4">
            <LoadingAnimate details="true" />
        </div>

        <div v-if="isLoading">
            <div class="flex flex-col items-start justify-start  border-0 border-b border-gray-200 mb-4">    
            <h2 class="mb-2 text-lg font-semibold text-slate-700 dark:text-white">Roles And Resposibilities</h2>
                <ul class="text-gray-500 list-disc list-inside dark:text-gray-400 " 
                    v-for="rarp in jobs.RolesAnResposibilities" :key="rarp">
                    <li >{{ rarp }}</li>
                </ul>
            </div>
        </div>
         <div v-else class="border-0 border-b border-gray-200 mb-4">
            <LoadingAnimate details="true" />
        </div>

        <div v-if="isLoading">
          <div class="flex flex-col items-start justify-start p-2 border-0 border-b border-gray-200 mb-4">    
            <h2 class="mb-2 text-lg font-semibold text-slate-700 dark:text-white">Qualification</h2>
                <ul class="text-gray-500 list-disc list-inside dark:text-gray-400" 
                v-for="qualification in jobs.Qualifications" :key="qualification">
                    <li>
                        {{ qualification }}
                    </li>
                </ul>
          </div>
        </div>
         <div v-else class="border-0 border-b border-gray-200 mb-4">
            <LoadingAnimate details="true" />
        </div>
        </div>
      </div>

    </div>
 
    <!-- === SHOW LOGIN WHEN THE USER IS NOT LOGGED IN == -->
    <Login :showLoginModal="showLoginModal" @closemodal="closeModal" :showLoginfirst="showLoginfirst"/>
</template> 

<script>
import getSingleData from '../composables/getSingleData'
import getUser from '@/composables/getUser'
import Login from '../components/Login'
import { ref } from 'vue'
import LoadingAnimate from '@/components/LoadingAnimate'


export default {
    components: { Login,LoadingAnimate },
    props: ['id'],
    setup(props,{emit}){
        const { error, jobs ,isLoading} = getSingleData(props.id,'Jobs')
        const { user } = getUser()
        let showLoginModal = ref(false)
        let showLoginfirst = ref(false)
        const companyId = jobs.value.length > 0 ? jobs.value[0].Company : undefined
        
        const apply = () => {
            if(user.value != null){
                console.log('applied')
            }else{
                showLoginModal.value = true
                showLoginfirst.value = true
                setTimeout(() => {
                    showLoginfirst.value = false
                }, "3000");
            }
           
        }

        const closeModal = () => showLoginModal.value = false

    
        return { error,jobs,apply,showLoginModal,showLoginfirst,isLoading,closeModal}
    }   
}
</script>

<style>

</style>