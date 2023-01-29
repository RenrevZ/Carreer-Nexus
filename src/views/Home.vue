<template>
<h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-1xl lg:text-4xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
  Job Solution</span> A Employment Detective.
</h1>

<p>Empowering people, building communities, securing futures: Employment for all!</p>
<div class="m-auto flex justify-center items-center p-5">
  <form class="lg:w-1/2">   
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <input type="search" id="default-search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required>
        <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
  </form>
</div>

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
    <Jobs :jobs="jobs" />
  </div>
<!-- == END OF DOCUMENT -->
</template>

<script>
import { ref } from '@vue/reactivity'
import { projectFirestore } from '../firebase/config'
import Jobs from '../components/Jobs'


export default { 
  components: { Jobs},
  setup(){
    const jobs = ref([])
    const error = ref([])
    const loadData = async () => {
      try{
         const response = await projectFirestore.collection('Jobs').get()
         
         jobs.value = response.docs.map(doc => {
          return {...doc.data(),id : doc.id}
         })
      }
      catch(err){
        error.value = err.message
        console.log(error.value) 
      }
    }

    loadData()
    return { jobs , loadData}
  }
}
</script> 

<style>
  .input-style{
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>