<template>
<transition name="fade">
    <div class="flex flex-col px-10">
          <h4 class="text-2xl font-bold my-10">Company Details</h4>
          <div class="grid grid-cols-2 gap-2">
                  <!-- == FIRST NAME ==  -->
                  <div class="flex flex-col items-start">
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          Company Name
                      </label>
                      <input type="email" 
                          name="email" 
                          id="email" 
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                          v-model="companyName" 
                          required>
                  </div>
  
                  <!-- == FIRST NAME ==  -->
                  <div class="flex flex-col items-start">
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          Company Location
                      </label>
                          <input type="email" 
                              name="email" 
                              id="email" 
                              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                              v-model="companyLocation" 
                              required>
                  </div>
          </div>
  
  
          <div class="grid grid-cols-2 gap-2 pt-5">
              <!-- == Address ==  -->
              <div class="flex flex-col items-start">
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Company size
                      </label>
                          <input type="email" 
                              name="email" 
                              id="email" 
                              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                              v-model="companySize" 
                              required>
              </div>
              <!-- == Age ==  -->
              <div class="flex flex-col items-start">
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          Industry
                      </label>
                          <input type="email" 
                              name="email" 
                              id="email" 
                              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 
                              v-model="industry" 
                              required>
              </div>
          </div>
  
         
        <div class="flex flex-col justify-start-align-start mt-10 mb-5">
            <label for="message" class="block mb-2 text-xl font-medium text-gray-900 dark:text-white">Company History</label>
            <textarea id="message" 
                      rows="13" 
                      cols="50" 
                      class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                      placeholder="Write your company History Here..."
                      style="resize: none;"
                      v-model="history"></textarea>
        </div>

        <div v-if="isLoading">
            <button @click="createCompany" class="w-full bg-slate-400 text-white p-2 shadow rounded-full" disabled>Savng...</button>
        </div>
        <div v-else>
            <button @click="createCompany" class="w-full bg-teal-500 text-white p-2 shadow rounded-full">Save</button>
        </div>
    </div>
</transition>
</template>
  
  <script>
import { ref } from 'vue'
import useData from '@/composables/useData'
import getUser from '@/composables/getUser'
import { useRouter } from 'vue-router'
  export default {
    setup(){
        //=== INPUTS
        const companyName = ref('')
        const companyLocation = ref('')
        const companySize = ref('')
        const industry = ref('')
        const history = ref('')

        //== ROUTER
        const router =  useRouter()

        //=== COMPOSABLES
        const { error, addDoc, isLoading} = useData('Company')
        const { user } = getUser()

        const createCompany = async () => {
            await addDoc({
                companyName : companyName.value,
                companyLocation : companyLocation.value,
                companySize : companySize.value,
                industry : industry.value,
                history : history.value,
                user : user.value.uid
            })

            router.push({name:'JobDetails'})
        }

        const dataObject = {
            companyName,
            companyLocation,
            companySize,
            industry,
            history,
            createCompany,
            isLoading
        }
        return dataObject
    }
  }
  </script>
  
  <style>
  .fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
  </style>