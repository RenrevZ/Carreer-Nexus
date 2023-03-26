<template>
  <div v-for="job in jobs" :key="job.id" class="mx-auto text-center">
        <router-link :to="{name:'JobDetails',params:{id:job.id}}" class=" rounded-lg block max-w-md p-6 bg-white border border-gray-200  shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <div class="flex items-start justify-around">
                <div class="left">
                    <i class="fa-solid fa-briefcase text-sky-800 text-5xl"></i>
                    <!-- <p><i class="fa-solid fa-briefcase text-teal-600 text-lg p-1"></i>{{ job.Experience }}</p> -->
                </div>
                 
                <div class="right">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white whitespace-normal">{{ job.Company }}</h5>
                    <p class="font-normal text-gray-700 dark:text-gray-400 p-4">{{ job.JobDescription.substring(0,50) + '....see more' }}</p>
                </div>
            </div>
            
            <div  class="md:flex justify-around items-center">
                <div v-for="tags in job.tags" :key="tags" >
                    <router-link  to="#" class="text-white shadow-md bg-teal-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-2 py-2 text-center">
                        {{ tags }}
                    </router-link>
                </div>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    props: ['jobs'],
    setup(props){
        // const jobData = props.jobs
        
        // const newData = jobData.map((data) => {
        //     return newData = data
        // })

        // console.log(newData)
    }   
}
</script>

<style>

</style>