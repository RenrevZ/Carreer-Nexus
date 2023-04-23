<template>
<div class="showcase p-20">
   
</div>

  <!-- SEARCH COMPONENT -->
<Search @search-submit="onSearchSubmit"/>

<!-- PAGINATION  -->
<div class="flex justify-end items-end mb-5">
  <div class="flex justify-between items-center mt-8 mr-10">
      <span class="text-gray-600">{{ currentPage }} out of {{ totalPages }}</span>
        <button
          :disabled="currentPage === 1"
          @click="previousPage"
          class="px-4 py-2  bg-teal-500 text-slate-200 hover:bg-teal-700 rounded-md mr-5 ml-5"
        >
        <i class="fa-solid fa-angles-left"></i>
          Previous
        </button>

        <button
          :disabled="currentPage === totalPages"
          @click="nextPage"
          class="px-4 py-2  bg-teal-500 text-slate-200 hover:bg-teal-700 rounded-md"
        >
          Next
          <i class="fa-solid fa-angles-right"></i>
        </button>
  </div>
</div>

 <!-- ==== JOBS DATA === -->
 <div v-if="!isLoading">
    <div v-if="jobs != ''" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
      <Jobs :jobs="jobs" />
    </div>
    
    <div v-else class="w-full flex justify-center items-center">
          <h1 class="text-2xl font-extrabold tracking-tight text-slate-500 dark:text-white">
             No Jobs Posted has been found
          </h1>
    </div>
  </div>
  <div v-else>
    <CardLoading />
</div>
</template>

<script>
import Search from '@/components/Search'
import Jobs from '@/components/Jobs.vue'
import paginateData from '@/composables/paginateData'
import { inject } from 'vue';
import CardLoading from '@/components/CardLoading.vue'

export default {
    components: {Search,Jobs},
    setup(){
        const {currentPageItems,currentPage,totalPages,nextPage,previousPage,jobs,loadData,isLoading } = paginateData()
    
     //== SEARCH EVENT
    const provideSearch = inject('search')
    const onSearchSubmit = (event) => {
        loadData(event.detail)
    }

    window.addEventListener('search-submit', onSearchSubmit);

    //=== RETURN OBJECT
    const data_object =  {
            currentPageItems,
            currentPage,
            totalPages,
            nextPage,
            previousPage,
            jobs,
            onSearchSubmit,
            isLoading
    }
        return data_object
    }
}
</script>

<style>
.showcase{
    background: url('@/assets/img/abstracMinimalist.png');
    background-position: center;
    background-repeat: no-repeat;
  }
</style>