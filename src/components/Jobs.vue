<template>
  <div v-for="job in jobs" :key="job.id" class="mx-auto text-center">
        <router-link :to="{name:'JobDetails',params:{id:job.id}}" class=" rounded-lg block max-w-md p-6 bg-white border border-gray-200  shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <div class="flex items-start justify-around">
                <div class="left">
                    <img src="@/assets/img/vue.png" class="w-36 h-20 rounded-sm object-cover">
                </div>
                 
                <div class="right">
                    <h1 class="text-lg font-lg text-sky-600 mb-2">Software Developer | Senior Laravel Developer</h1>
                    <h1 class="mb-2 ml-5 text-md font-bold tracking-tight text-slate-500 dark:text-white text-left whitespace-normal">{{ job.Company }}</h1>
                    <h1 class="mb-5 ml-5 text-md  tracking-tight text-slate-500 dark:text-white text-left whitespace-normal">California Usa</h1>
                    <!-- <p class="font-normal text-gray-700 dark:text-gray-400 p-4">{{ job.JobDescription.substring(0,50) + '....see more' }}</p> -->
                    <div class="w-full grid grid-cols-3">
                        <div class="flex justify-around">
                            <i class="fa-solid fa-calendar-days text-slate-600"></i>
                            <small>{{ job.Timeline }}</small>
                        </div>

                        <div class="flex justify-around">
                            <i class="fa-solid fa-business-time"></i>
                            <small>{{ job.Experience }}</small>
                        </div>

                        <div class="flex justify-around">
                            <i class="fa-solid fa-peso-sign"></i>
                            <small>100-120,000</small>
                        </div>
                    </div>
                </div> 
            </div>
            
            <!-- <div  class="md:flex justify-around items-center">
                <div v-for="tags in job.tags" :key="tags" >
                    <router-link  to="#" class="text-white shadow-md bg-teal-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-2 py-2 text-center">
                        {{ tags }}
                    </router-link>
                </div>
            </div> -->
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