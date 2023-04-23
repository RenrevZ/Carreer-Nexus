<template>
  <div class="flex flex-col justify-center items-center h-full w-full">
    <div class="grid grid-col-1 md:grid-rows-3 grid-flow-col gap-4">
        <div class="row-span-3 flex flex-col justify-start items-center shadow-lg p-10 max-w-md">
            <div v-for="creds in credential" :key="creds">
                <span class="relative w-full">
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

                <div class="flex flex-col justify-start items-center">
                    <h1 class="text-1xl font-bold text-center">Skills</h1>
                    <div class="grid grid-cols-3 gap-2">
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
export default {
    setup(){
        const { error, data, loadData } = queryData('EmployeeDetails')
        loadData()
        
        console.log(data)
        const dataObject = {
            credential:data
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