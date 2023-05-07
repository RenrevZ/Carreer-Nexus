<template>
  <div v-for="job in jobs" :key="job.id" class="mx-auto text-center">
    <span v-for="profile in company" :key="profile.companyName">
        <router-link :to="{name:'JobDetails',params:{id:job.id}}" class=" rounded-lg block max-w-md max-h-96 p-6 bg-white border border-gray-200  shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <div class="flex items-start justify-around w-full">
                <div class="left w-full relative">
                    <img :src="profile.coverUrl" class="h-24 rounded-sm object-cover">
                </div>
                 
                <div class="right  w-full">
                    <h1 class="text-md text-left text-sky-600 mb-2">{{ job.position.substr(0,40) }}....</h1>
                    <h1 class="mb-2 text-md font-bold tracking-tight text-slate-500 dark:text-white text-left whitespace-normal">{{ profile.companyName }}</h1>
                    <h1 class="mb-5 text-md  tracking-tight text-slate-500 dark:text-white text-left whitespace-normal">{{ profile.companyLocation }}</h1>
                </div> 
            </div>
            <div class="w-full flex justify-around items-center">
              <div class="flex justify-between">
                  <i class="fa-solid fa-calendar-days text-slate-500 mr-2"></i>
                  <small>{{ job.Timeline }}</small>
              </div>

              <div class="flex justify-around">
                  <i class="fa-solid fa-business-time mr-2"></i>
                  <small>{{ job.Experience }}</small>
              </div>

              <div class="flex justify-around">
                  <i class="fa-solid fa-peso-sign mr-2"></i>
                  <small>{{ job.salary }}</small>
              </div>
            </div>
        </router-link>
        </span>
    </div>
</template>

<script>
export default {
    props: ['jobs','company']
}
</script>

<style>

</style>