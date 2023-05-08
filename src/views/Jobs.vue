<template>
<div class="showcase p-20">
   
</div>

  <!-- SEARCH COMPONENT -->
<Search @search-submit="onSearchSubmit"/>

 <!-- ==== JOBS DATA === -->
 <div v-if="!isLoading">
    <div v-if="jobs != ''" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
      <Jobs :jobs="jobs" :company="company" />
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
import getData from '@/composables/getData'
import { inject } from 'vue';
import CardLoading from '@/components/CardLoading.vue'

export default {
    components: {Search,Jobs,CardLoading},
    setup(){
        // const {currentPageItems,currentPage,totalPages,nextPage,previousPage,jobs,loadData,isLoading } = paginateData()
      const { error, jobs ,collectionData, loadData,isLoading} = getData()
     //== SEARCH EVENT
    const provideSearch = inject('search')
    const onSearchSubmit = (event) => {
        loadData(event.detail)
    }
   
    window.addEventListener('search-submit', onSearchSubmit);

    //=== RETURN OBJECT
    const data_object =  {
            jobs,
            onSearchSubmit,
            isLoading,
            company:collectionData
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