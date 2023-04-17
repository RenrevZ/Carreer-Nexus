<template>
<div class="showcase p-20">
  <h1 class="mb-4 text-3xl font-extrabold text-white dark:text-white  md:text-1xl lg:text-4xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-sky-600 from-slate-100">
    Career Nexus</span> A Employment Detective.
  </h1>

  <p class="text-white">Empowering people, building communities, securing futures: Employment for all!</p>
</div>

<!-- SEARCH COMPONENT -->
<Search @search-submit="onSearchSubmit"/>

<div class="flex justify-end items-end">
  <div class="flex justify-between items-center mt-8 mr-10">
      <span class="text-gray-600">{{ currentPage }} out of {{ totalPages }}</span>
        <button
          :disabled="currentPage === 1"
          @click="previousPage"
          class="px-4 py-2  bg-teal-500 text-slate-200 hover:bg-teal-700 rounded-md mr-5 ml-5"
        >
          Previous
        </button>

        <button
          :disabled="currentPage === totalPages"
          @click="nextPage"
          class="px-4 py-2  bg-teal-500 text-slate-200 hover:bg-teal-700 rounded-md"
        >
          Next
        </button>
  </div>
</div>

  <!-- ==== JOBS DATA === -->
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
    <Jobs :jobs="jobs" />
  </div>

  <!-- ==== SIGN IN MODAL ==== -->
  <SignIn :showSignupModal="showSigupModal" @closemodal="SignupModaltoggle"/>

  <Login :showLoginModal="showLoginModal" @closemodal="LoginModaltoggle"/>
<!-- == END OF DOCUMENT -->
</template>

<script>
import { ref } from '@vue/reactivity'
import Jobs from '../components/Jobs'
import SignIn from '../components/SignIn'
import Login from '@/components/Login.vue'
import toggleModal from '../composables/toggleModal'
import Search from '@/components/Search'
import paginateData from '@/composables/paginateData'
import { inject } from 'vue';


export default { 
  components: { Jobs, SignIn, Login,Search},
  props:['showSignupModal','showLoginModal'],
  setup(){
      // const { error, jobs , loadData} = getData()
      const {SignupModaltoggle,showSigupModal,LoginModaltoggle,showLoginModal} = toggleModal()
      const {currentPageItems,currentPage,totalPages,nextPage,previousPage,jobs,loadData } = paginateData()
  
    const provideSearch = inject('search')

    const onSearchSubmit = (event) => {
        loadData(event.detail)
    }

    window.addEventListener('search-submit', onSearchSubmit);

    const data_object =  {
            SignupModaltoggle,
            showSigupModal,
            LoginModaltoggle,
            showLoginModal,
            currentPageItems,
            currentPage,
            totalPages,
            nextPage,
            previousPage,
            jobs,
            onSearchSubmit
        }
      
    return data_object
  }
}
</script> 

<style>
  .input-style{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .showcase{
    background: url('@/assets/img/abstracMinimalist.png');
    background-position: center;
    background-repeat: no-repeat;
  }
</style>