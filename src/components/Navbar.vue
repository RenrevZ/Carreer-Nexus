<template>
  
<nav class="bg-white shadow p-2 sticky top-0">
    <div class="flex md:justify-around justify-between items-center">
        <div class="left flex">
            <router-link :to="{ name : 'Home'}"
                         class=" flex px-3 cursor-pointer">
            <img src="@/assets/img/1930254_green_triforce_zelda_icon.png" alt="" class="icon mr-3">
            <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 text-2xl md:block hidden">Carreer Nexus</span>
            </router-link>
        </div>

        <div class="right" v-if="!currentUser">
            <button @click="SignupModaltoggle" type="button" class="text-white shadow bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-1.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Sign up
            </button>
            <button @click="LoginModaltoggle" type="button" class="py-1.5 shadow px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                Login
            </button>
        </div>

        <div v-else class="flex justify-end items-center">
            <router-link :to="{ name : 'JobList'}"
                         class="px-3 cursor-pointer hover:scale-110 delay-150 hover:-translate-y-1 transition ease-in-out duration-200">
                        
                        <i class="fa-solid fa-briefcase text-slate-500 text-1xl"></i>
            </router-link>

            <router-link :to="{ name : 'Message'}"
                         class="px-3 cursor-pointer hover:scale-110 delay-150 hover:-translate-y-1 transition ease-in-out duration-200">
                         <i class="fa-solid fa-message text-slate-500 text-1xl"></i>
            </router-link>

            <router-link v-if="isCompany" :to="{name:'postJob'}"
                          class="px-3 cursor-pointer hover:scale-110 delay-150 hover:-translate-y-1 transition ease-in-out duration-200"
                          data-tooltip-target="Post a Job">
                <!-- <i class="fa-solid fa-table-list text-1xl text-slate-500 hover:text-teal-500"></i> -->
                <i class="fa-regular fa-address-card text-1xl text-slate-500 hover:text-teal-500"></i>
            </router-link>

            <router-link v-if="isCompany" :to="{name:'Mylisting'}"
                          class="px-3 cursor-pointer hover:scale-110 delay-150 hover:-translate-y-1 transition ease-in-out duration-200">
                 <i class="fa-solid fa-table-list text-1xl text-slate-500 hover:text-teal-500"></i>
<!--                <i class="fa-regular fa-address-card text-1xl text-slate-500 hover:text-teal-500"></i>-->
            </router-link>

            <router-link :to="{name:'Profile'}"
                         class="px-3 cursor-pointer hover:scale-110 delay-150 hover:-translate-y-1 transition ease-in-out duration-200"
                         data-tooltip-target="User Profile">
                  <i class="fa-solid fa-user text-1xl text-slate-500 hover:text-teal-500"></i>
            </router-link>


            <!-- <h3 class="p-2">Hi there, {{ user.displayName }}</h3> -->
            <i class="fa-solid fa-arrow-right-from-bracket px-3 cursor-pointer hover:scale-110 delay-150 hover:-translate-y-1 transition ease-in-out duration-200 text-1xl text-slate-500" 
               @click="Logout"></i>
           
        </div>
    </div>
</nav>
    <!-- ==== SignIn  ===== -->
    <SignIn :showSignupModal="showSigupModal" @closemodal="SignupModaltoggle"/>
    <!-- ==== Login  ===== -->
    <Login :showLoginModal="showLoginModal" @closemodal="LoginModaltoggle"/>
</template>

<script>
import Login from '@/components/Login.vue'
import SignIn from '../components/SignIn'
import toggleModal from '../composables/toggleModal'
import getUser from '@/composables/getUser'
import useLogout from '@/composables/useLogout'
import { useRoute, useRouter } from 'vue-router'
import { watch } from 'vue'
import checkProfile from '@/composables/checkProfile'

export default {
    components: { SignIn,Login },
    props: ['showSignupModal'],
    setup(){
        // COMPOSABLES
        const {SignupModaltoggle,showSigupModal,LoginModaltoggle,showLoginModal} = toggleModal()
        const { currentUser } = getUser()
        const { logout } = useLogout()

        // ROUTER
        const router =  useRouter()

        // LOGOUT
        const Logout = () => {
            logout()
            router.push({name:'Home'})
        }

        // ROUTER
        const route = useRoute()
        
        // WATCH FOR ROUTE CHANGES
        watch(() => route.path, (newVal) => {
            if (newVal === '/setup') {
                showSigupModal.value = false
            }else if(newVal === '/jobs'){
                showLoginModal.value = false
            }
        })

        // CHECK USER PROFILE
        const {isEmployee,isCompany} = checkProfile()
      
        const data_object = {
            SignupModaltoggle,
            showSigupModal,
            LoginModaltoggle,
            showLoginModal,
            currentUser,
            Logout,
            isEmployee,
            isCompany
        }
        return data_object
    }
}
</script>

<style>
.icon{
    height: 30px;
}

[data-tooltip-target]::before {
  content: attr(data-tooltip-target);
  position: absolute;
  top: calc(100% + 0.5rem);
  left: 50%;
  transform: translateX(-50%);
  padding:15px 5px;
  text-align: start;
  background-color: #34d399;
  color: #fff;
  font-size: 0.75rem;
  white-space: nowrap;
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
}

[data-tooltip-target]:hover::before {
  opacity: 1;
  bottom: calc(100% + 0.5rem); 
}
</style>