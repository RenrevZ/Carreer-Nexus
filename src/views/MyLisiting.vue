<template>

    <div class="flex flex-col justify-start items-center mt-10 mx-5 h-screen">
        <div class="border-x-4 border-sky-600 px-24 mb-5">
            <h1 class="text-2xl font-bold tracking-tight text-slate-600 dark:text-white">MY LISTING</h1>
            <span v-if="errors">
                <small>{{errors}}</small>
            </span>
        </div>

        <div  class="grid grid-cols-1 md:grid-cols-1 gap-2 w-100">
            <div v-if="!isLoading">
            <span v-for="job in jobs" :key="job.id">

                <div class="relative mb-5 text-center rounded-lg block  max-h-96 p-6 bg-white border border-gray-200  shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

                        <span v-if="job.ShowOption">
                            <div class="absolute top-12 right-0 bg-slate-100 w-100 px-10 py-5 flex flex-col slide-down">
                                 <span class=" text-start hover:text-sky-600 cursor-pointer">
                                     <i class="fa-solid fa-pen-to-square"></i> Edit
                                 </span>
                                <span class=" text-start hover:text-rose-400 cursor-pointer">
                                    <span v-if="Deleting">
                                         <i class="fa-solid fa-trash"></i> Deleting....
                                    </span>
                                    <span v-else>
                                        <span class="flex justify-between" @click="Delete(job)">
                                            <div>
                                                 <i class="fa-solid fa-trash"></i>
                                            </div>
                                            <div>
                                                Delete
                                            </div>
                                        </span>
                                    </span>
                                </span>
                            </div>
                        </span>
                        <div class="flex justify-end items-center w-100">
                            <i class="fa-solid fa-ellipsis-vertical text-lg text-slate-500 cursor-pointer"
                               @click="ToggleOption(job)"></i>
                        </div>

                        <div class="flex items-center justify-around w-full">
                            <div class="right text-center w-full">
                                <h1 class="text-md text-left text-sky-600 mb-2">{{ job.position }}</h1>
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
                </div>
            </span>
            </div>
            <div v-else>
                <CardLoading />
            </div>

        </div>
    </div>
</template>

<script>
    import queryData from '@/composables/queryData'
    import CardLoading from "@/components/CardLoading";
    import useDocument from "@/composables/useDocument";
    import { ref } from 'vue'
    import { useRouter } from 'vue-router'

    export default {
        components: {CardLoading},
      setup(){
          // COMPOSABLES
          const { error, data : jobs, loadData,isLoading } = queryData('Jobs')

          // INPUTS
          const ShowOption = ref(false)

          // ROUTER
          const router = useRouter()



          const ToggleOption = (job) => {
              job.ShowOption = !job.ShowOption
          }

          const Deleting = ref(false)
          const errors = ref('')
          const Delete = async (job) => {
              const {error,isLoading:isDeleting,deleteDoc} = useDocument('Jobs',job.id)
              Deleting.value = isDeleting.value
              await deleteDoc()
              if(!error.value){
                  router.push({name:'Mylisting'})
                  location.reload()
              }else{
                  errors.value = error.value
              }
          }

          const dataObject = {
              error,
              jobs,
              loadData,
              isLoading,
              ShowOption,
              ToggleOption,
              Deleting,
              Delete,
              errors
          }

          return dataObject
      }
    }
</script>

<style scoped>
    .slide-down {
        animation: slideDown 0.5s ease-in-out;
        animation-fill-mode: forwards;
        opacity: 0;
    }

    @keyframes slideDown {
        0% {
            opacity: 0;
            transform: translateY(-100%);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }
</style>