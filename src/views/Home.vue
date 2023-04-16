<template>
<div class="showcase p-20">
  <h1 class="mb-4 text-3xl font-extrabold text-white dark:text-white  md:text-1xl lg:text-4xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-sky-600 from-slate-100">
    Career Nexus</span> A Employment Detective.
  </h1>

  <p class="text-white">Empowering people, building communities, securing futures: Employment for all!</p>
</div>
<Search/>

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
import getData from '../composables/getData'
import SignIn from '../components/SignIn'
import Login from '@/components/Login.vue'
import toggleModal from '../composables/toggleModal'
import Search from '@/components/Search'


export default { 
  components: { Jobs, SignIn, Login,Search},
  props:['showSignupModal','showLoginModal'],
  setup(){
      const { error, jobs , loadData} = getData()
      const {SignupModaltoggle,showSigupModal,LoginModaltoggle,showLoginModal} = toggleModal()
    
    loadData()

    const data_object =  { jobs,
            loadData,
            SignupModaltoggle,
            showSigupModal,
            LoginModaltoggle,
            showLoginModal
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