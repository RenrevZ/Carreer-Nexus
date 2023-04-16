<template>
  <div class="flex flex-col px-10">
        <h4 class="text-2xl font-bold my-10">Employee Details</h4>
        <div class="grid grid-cols-3 gap-2">
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


        <div class="grid grid-cols-3 gap-2 pt-5">
            <!-- == Address ==  -->
            <div class="flex flex-col items-start">
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Address
                    </label>
                        <input type="email" 
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
                        <input type="email" 
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
                        <input type="email" 
                            name="email" 
                            id="email" 
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            v-model="Gender" 
                            required>
            </div>
        </div>

        <h1 class="mt-10">Work Experience</h1>

        <div class="grid grid-cols-2 gap-2 pt-5">
           <!-- == Gender ==  -->
           <div class="flex flex-col items-start">
                    <span class="flex">
                        <i class="fa-solid fa-building pr-3"></i>
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Company
                        </label>
                    </span>
                        <input type="email" 
                            name="email" 
                            id="email" 
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            v-model="Company" 
                            required>
            </div>
           <!-- == Gender ==  -->
           <div class="flex flex-col items-start">
                    <span class="flex">
                        <i class="fa-solid fa-map-pin pr-3"></i>
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Company Address
                        </label>
                    </span>
                        <input type="email" 
                            name="email" 
                            id="email" 
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            v-model="CompanyAddress" 
                            required>
            </div>
        </div>
        
        <div class="grid grid-cols-2 gap-2 pt-5">
           <!-- == Gender ==  -->
           <div class="flex flex-col items-start">
                    <span class="flex">
                        <i class="fa-solid fa-building pr-3"></i>
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Work Experience
                        </label>
                    </span>
                        <input type="email" 
                            name="email" 
                            id="email" 
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            v-model="WorkExp" 
                            required>
            </div>
           <!-- == Gender ==  -->
           <div class="flex flex-col items-start">
                    <span class="flex">
                        <i class="fa-solid fa-map-pin pr-3"></i>
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Date Leave
                        </label>
                    </span>
                        <input type="date" 
                            name="email" 
                            id="email" 
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            v-model="DateLeave" 
                            required>
            </div>
        </div>

        <div class="flex justify-start-items-start mb-10">
            <i class="fa-solid fa-circle-plus mt-5 text-teal-600 text-2xl"></i>
        </div>

        <div v-if="isLoading">
            <button @click="createProfile" class="w-full bg-teal-500 text-white p-2 shadow rounded-full" disabled>Creating...</button>
        </div>

        <div v-else>
            <button @click="createProfile" class="w-full bg-teal-500 text-white p-2 shadow rounded-full">Create Profile</button>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import useData from '@/composables/useData'
import getUser from '@/composables/getUser'
import { useRouter } from 'vue-router'
export default {
    setup(){
        //=== inputs
        const firstName = ref('')
        const middleName = ref('')
        const lastName = ref('')
        const address = ref('')
        const Age = ref('')
        const Gender = ref('')
        const Company = ref('')
        const CompanyAddress = ref('')
        const WorkExp = ref('')
        const DateLeave = ref('')

        //== ROUTER
        const router =  useRouter()
        
        //=== COMPOSABLES
        const { error, addDoc, isLoading} = useData('EmployeeDetails')
        const { user } = getUser()

        const showError = (input) => {
            let error = ''
            if(input == ''){
                error = `error! ${input} field is required`
            }

            return error
        }

        
        const createProfile = async () => {
                await addDoc({
                    firstName: firstName.value,
                    middleName : middleName.value,
                    lastName : lastName.value,
                    address : address.value,
                    Age : Age.value,
                    Gender : Gender.value,
                    Company : Company.value,
                    CompanyAddress : CompanyAddress.value,
                    WorkExp : WorkExp.value,
                    DateLeave : DateLeave.value,
                    user : user.value.uid
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
            Company,
            CompanyAddress,
            WorkExp,
            DateLeave,
            isLoading,
            error,
            showError
        }

        return dataObject
    }
}
</script>

<style>

</style>