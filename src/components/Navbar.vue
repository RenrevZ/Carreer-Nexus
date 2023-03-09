<template>
  
<nav class="bg-white shadow p-2 mb-3 sticky top-0">
    <div class="flex justify-around items-center">
        <div class="left">
            <i class="fa-solid fa-lightbulb text-teal-500 text-2xl"></i>
            <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 text-2xl">Job Solution</span>
        </div>

        <div class="center hidden md:block">
            <ul class="flex justify-between items-center">
                <li class="mr-5">
                    <router-link :to="{ name : 'Home'}">
                        <i class="fa-solid fa-house"></i> Home
                    </router-link>
                </li>

                <li class="mr-5">
                    <router-link :to="{ name : 'Another'}">
                        <i class="fa-solid fa-briefcase"></i> Jobs
                    </router-link>
                </li>

                <li class="mr-5">
                    <a href="#">
                        <i class="fa-solid fa-people-group"></i> Talent
                    </a>
                </li>
            </ul>
        </div>

        <div class="right hidden md:block" v-if="!user">
            <button @click="SignupModaltoggle" type="button" class="text-white shadow bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-1.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Sign up
            </button>
            <button @click="LoginModaltoggle" type="button" class="py-1.5 shadow px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                Login
            </button>
        </div>

        <div v-else>
            <button @click="Logout" type="button" class="text-white shadow bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-1.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Logout
            </button>
        </div>

        <div class="md:hidden block">
            <button>
                <i class="fa-solid fa-bars text-2xl"></i>
            </button>
        </div>
    </div>
</nav>
    <!-- ==== SignIn  ===== -->
    <SignIn :showSignupModal="showSigupModal" @closemodal="SignupModaltoggle"/>
    <!-- ==== Login  ===== -->
    <Login :showLoginModal="showLoginModal" @closemodal="LoginModaltoggle"/>
</template>

<script>
import { ref } from '@vue/reactivity'
import SignIn from '../components/SignIn'
import toggleModal from '../composables/toggleModal'
import getUser from '@/composables/getUser'
import useLogout from '@/composables/useLogout'

export default {
    components: { SignIn },
    props: ['showSignupModal'],
    setup(){
        const {SignupModaltoggle,showSigupModal,LoginModaltoggle,showLoginModal} = toggleModal()
        const { user } = getUser()
        const { logout } = useLogout()

        const Logout = () => {
            logout()
        }

        return { SignupModaltoggle,showSigupModal,LoginModaltoggle,showLoginModal,user,Logout}
    }
}
</script>

<style>

</style>