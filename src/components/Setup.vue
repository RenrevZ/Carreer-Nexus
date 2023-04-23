<template>
<div class="grid md:grid-cols-2 ">
        <div class="font-extrabold flex justify-center items-center h-screen">
            <div class="rounded p-10 bg-white">
            
                <h1 class="text-5xl mb-6">Welcome to <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Career Nexus</span></h1>
                <p class="mb-5">Please Choose what profile you want to setup on your account</p>

                <div class="flex justify-between items-center">
                    <div>
                        <button @click="employer" class="px-20 py-2 bg-sky-700 shadow-md w-full text-white text-sm rounded-full hover:scale-125 transition ease-in-out delay-100">
                            Employer
                        </button>
                    </div>
                    <div>
                        <button @click="employee" class="px-20 py-2 bg-sky-700 shadow-md w-full text-white text-sm rounded-full hover:scale-125 transition ease-in-out delay-100">
                            Employee
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="showEmployee">
            <EmployeeDetails @createProfile="SubmitEmployee"/>
        </div>

        <div v-else>
            <CompanyDetails />
        </div>
</div>
</template>

<script>
import EmployeeDetails from '@/components/EmployeeDetails'
import CompanyDetails from '@/components/CompanyDetails';
import { ref } from 'vue';

export default {
    components: { EmployeeDetails,CompanyDetails },
    setup(){
        let showEmployee = ref(true)
        

        const employer = () => {
            showEmployee.value = false
        }

        const employee = () => {
            showEmployee.value = true
        }

        const SubmitEmployee = () => {
            console.log('try emit')
        }

        const data_object = {
            employer,
            showEmployee,
            employee,
           SubmitEmployee
        }
        return data_object
    }
}
</script>

<style scope>
.slide-down-enter-active, .slide-down-leave-active {
  transition: all 0.5s ease;
}
</style>