<template>
  <div v-for="job in mergedData" 
      :key="job.id" 
       class=" text-center mx-2">

        <router-link :to="{name:'JobDetails',params:{id:job.jobID}}" 
                      class="rounded-lg 
                             block 
                             min-w-md 
                             min-h-96
                             mb-5
                             p-6 
                             bg-white 
                             border 
                             border-gray-200 
                             shadow-md 
                             hover:bg-gray-100 
                             dark:bg-gray-800 
                             dark:border-gray-700 
                             dark:hover:bg-gray-700">

            <div class="flex items-start justify-around">
                <div class="left w-full relative">
                    <img :src="job.coverUrl" class="h-24 rounded-sm object-cover">
                </div>
                 
                <div class="right w-full">

                    <h1 class="text-md text-left text-sky-600 mb-2">
                        {{ job.position.substr(0,20) }}....
                    </h1>

                    <h1 class="mb-2 text-md font-bold tracking-tight text-slate-500 dark:text-white text-left whitespace-normal">
                        {{ job.companyName }}
                    </h1>

                    <h1 class="mb-5 text-md  tracking-tight text-slate-500 dark:text-white text-left whitespace-normal">
                        {{ job.companyLocation }}
                    </h1>

                </div> 
            </div>

            <div class="w-full flex justify-around items-center">
              <div class="flex justify-between">
                  <i class="fa-solid fa-calendar-days text-slate-500 mr-2"></i>
                  <small>{{ job.Timeline }}</small>
              </div>

              <div class="flex justify-around">
                  <i class="fa-solid fa-business-time text-slate-500 mr-2"></i>
                  <small>{{ job.Experience }}</small>
              </div>

              <div class="flex justify-around">
                  <i class="fa-solid fa-peso-sign mr-2 text-slate-500"></i>
                  <small>{{ job.salary }}</small>
              </div>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    props: ['jobs','company'],
    setup(props){
        
        const mergedData = props.jobs.map(job => {
            const matchingCompany = props.company.find(company => company.user === job.user);
        
            if (matchingCompany) {
                return { jobID:job.id, ...job, ...matchingCompany };
            }else {
                return job;
            }
         });
         console.log(mergedData)
        return { mergedData }
    }
}
</script>

<style>

</style>