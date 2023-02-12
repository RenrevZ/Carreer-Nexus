<template>
    <div class="md:mx-80 p-6 mb-6 bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <div class="border-0 border-b border-gray-200 text-gray-900 text-sm rounded-t-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
               <h5 class="text-2xl font-extrabold tracking-tight text-slate-500 dark:text-white">
                <i class="fa-solid fa-note-sticky"></i> Job Details Overview
               </h5> 
        </div>
        <h2>
            {{ jobs.Company }}
         </h2>
         <div class=" p-2 border-0 border-b border-gray-200 mb-4 ">
             <p>
                {{ jobs.JobDescription }}
            </p>
         </div>

         <button class=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Apply now
         </button>
    </div>

    <div class="md:mx-80 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <div class="border-0 border-b border-gray-200 text-gray-900 text-sm rounded-t-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
               <h5 class="text-2xl font-extrabold tracking-tight text-slate-500 dark:text-white">
                <i class="fa-regular fa-lightbulb"></i> Required Skills
               </h5> 
        </div>
        <div v-for="tags in jobs.tags" :key="tags" class="flex justify-around items-center">
            <div class="flex items-center w-full max-w-xs p-2 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800">
                {{ tags }}
            </div>
        </div>
    </div>
</template> 

<script>
import getSingleData from '../composables/getSingleData'
export default {
    props: ['id'],
    setup(props){
        const { error, jobs , loadData} = getSingleData(props.id)

        loadData()

        return { error,jobs}
    }   
}
</script>

<style>

</style>