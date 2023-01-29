<template>
  
<nav class="bg-white shadow p-2 mb-3">
    <div class="flex justify-around items-center">
        <div class="left">
            <i class="fa-solid fa-lightbulb text-teal-500 text-2xl"></i>
            <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 text-2xl">Job Solution</span>
        </div>

        <div class="center">
            <ul class="flex justify-between items-center">
                <li class="border-b-2 border-sky-600 mr-5 p-1 text-center">
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

        <div class="right">
            <button type="button" class="text-white shadow bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-1.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Sign up
            </button>
            <button type="button" class="py-1.5 shadow px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                Login
            </button>
        </div>
    </div>
</nav>

</template>

<script>
import { ref,computed } from '@vue/reactivity'
import { useRoute } from 'vue-router'
export default {
    setup(){
        const route = ref('')
        route.value = useRoute()

        const currentRouteName =  route.value.name
        
        console.log(route.name)
        return { currentRouteName }
    }
}
</script>

<style>

</style>