<template>
<!-- SHOWCASE  -->
<div class="showcase p-20">
  <h1 class="mb-4 text-3xl font-extrabold text-white dark:text-white  md:text-1xl lg:text-4xl slide-in"><span class="text-transparent bg-clip-text bg-gradient-to-r to-sky-600 from-slate-100">
    Career Nexus</span> A Employment Detective.
  </h1>

  <p class="text-white reveal">Empowering people, building communities, securing futures: Employment for all!</p>
</div>

<!-- SEARCH COMPONENT -->
<Search @search-submit="onSearchSubmit"/>

  <!-- ==== JOBS DATA === -->
  <div v-if="!isLoading">
    <div v-if="jobs != ''" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
      <Jobs :jobs="jobs" :company="collectionData" />
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

  <!-- PAGINATION 
<div class="flex justify-end items-end mb-5">
  <div class="flex justify-between items-center mt-8 mr-10">
      <span class="text-gray-600">{{ currentPage }} out of {{ totalPages }}</span>
        <button
          :disabled="currentPage === 1"
          @click="previousPage"
          class="px-2 py-2  bg-teal-500 text-slate-200 hover:bg-teal-700 rounded-md mr-5 ml-5"
        >
        <i class="fa-solid fa-angles-left font-semibold"></i>
          Previous
        </button>


        <button
          :disabled="currentPage === totalPages"
          @click="nextPage"
          class="px-2 py-1  bg-teal-500 text-slate-200 hover:bg-teal-700 rounded-md"
        >
          Next
          <i class="fa-solid fa-angles-right"></i>
        </button>
  </div>
</div> -->


  <!--  SIGN IN COMPONENT  -->
  <SignIn :showSignupModal="showSigupModal" @closemodal="SignupModaltoggle"/>

  <!-- LOGIN COMPONENT -->
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
import CardLoading from '@/components/CardLoading.vue'
import getData from '@/composables/getData'


export default { 
  components: { Jobs, SignIn, Login,Search,CardLoading},
  props:['showSignupModal','showLoginModal'],
  setup(){
    const { error, jobs ,collectionData, loadData,isLoading} = getData()
      const {SignupModaltoggle,showSigupModal,LoginModaltoggle,showLoginModal} = toggleModal()
      // const {currentPageItems,currentPage,totalPages,nextPage,previousPage,jobs,loadData,isLoading } = paginateData()
  
    //== SEARCH EVENT
    const provideSearch = inject('search')
    const onSearchSubmit = (event) => {
        loadData(event.detail)
    }
    loadData()
    window.addEventListener('search-submit', onSearchSubmit);

    //=== RETURN OBJECT
    const data_object =  {
            SignupModaltoggle,
            showSigupModal,
            LoginModaltoggle,
            showLoginModal,
            // currentPageItems,
            // currentPage,
            // totalPages,
            // nextPage,
            // previousPage,
            jobs,
            onSearchSubmit,
            isLoading,
            collectionData
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

  .slide-in {
        animation: slide-in 1s ease-in-out;
        animation-delay: 2ms;
    }

  .reveal {
    animation: reveal 1s ease-in-out;
  }

  @keyframes slide-in {
        0% {
          transform: translateY(-170%);
        }
        100% {
          transform: translateY(0);
        }
  }

  @keyframes reveal {
  0% {
    transform: scaleX(0);
    transform-origin: left;
    opacity: 0;
  }
  50%{
    transform-origin: middle;
    opacity: 0.3;
  }
  100% {
    transform: scaleX(1);
    transform-origin: left;
    opacity: 0.7;
  }
}
</style>