<template>
<transition name="slide-down">
  <!-- Main modal -->
<div v-if="showSignupModal" id="authentication-modal" tabindex="-1" aria-hidden="true" class="bg-gray-900 bg-opacity-75 fixed top-0 left-0 right-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full md:flex h-screen items-center justify-center">
    <div class="relative w-full h-full max-w-md md:h-auto">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button  @click="CloseEmit" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white">
                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                <span class="sr-only">Close modal</span>
            </button>

            <span class="flex justify-center items-center w-full ">
                         <img src="@/assets/img/1930254_green_triforce_zelda_icon.png" alt="" class="head">
            </span>
            <div class="px-6 pb-5 lg:px-8">
                <h3 class="mb-4 text-2xl font-bold text-gray-600 dark:text-white">Sign up</h3>
                <!-- === FORM ===== -->
                <form @submit.prevent class="space-y-3">

                    <!-- ==== USERNAME NAME ===== -->
                    <div class="flex flex-col items-start">
                        <label for="lastname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            username
                        </label>
                        <input type="text" name="first_name" 
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 
                                            placeholder="e.g RenrevZ" 
                                            v-model="username"
                                            required>
                    </div>

                    <!-- ==== USERNAME NAME ===== -->
                    <div class="flex flex-col items-start">
                        <label for="lastname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            email
                        </label>
                        <input type="text" name="first_name" 
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 
                                            placeholder="e.g RenrevZ" 
                                            v-model="email"
                                            required>
                    </div>

                    <!-- ==== PASSWORD ==== -->
                    <div class="flex flex-col items-start">
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">password</label>
                        <input type="password" name="password"
                                               v-model="password"  
                                              placeholder="••••••••" 
                                              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required>
                    </div>

                    <!-- ==== CONFIRM PASSWORD ==== -->
                    <div class="flex flex-col items-start">
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">confirm password</label>
                        <input type="password" name="password"
                                               v-model="confirm_password"  
                                              placeholder="••••••••" 
                                              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required>
                    </div>
                    <div class="flex justify-between">
                        <a href="#" class="text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
                    </div>
                    <span v-if="isLoading">
                        <button type="submit" 
                                @click="submit" 
                                class="w-full text-white bg-teal-300 hover:bg-teal-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                disabled>Signing in.....</button>
                    </span>

                    <span v-else>
                        <button type="submit" 
                                @click="submit" 
                                class="w-full text-white bg-teal-700 hover:bg-teal-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >Sign in</button>
                    </span>
                    <small class="text-rose-500">{{ error }}</small>
                    <div class="flex justify-center text-sm font-medium text-gray-500 dark:text-gray-300">
                        Already registered? <p @click="LoginEmit" class="cursor-pointer text-blue-700 hover:underline dark:text-blue-500">Login</p>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
</transition>
</template>

<script>
import { ref } from '@vue/reactivity'
import SignupUser from '../composables/SignupUser'
import { useRouter } from 'vue-router'
export default {
    props: ['showSignupModal'],
    emits: ['closemodal','login'],
    setup(props,{emit}){
        //==== INPUTS
        const username  = ref('')
        const email  = ref('')
        const password = ref('')
        const confirm_password = ref('')
        const {error,signup,isLoading} = SignupUser()

        //==== ROUTER
        const router =  useRouter()

        const submit = async () => {
            await signup(email.value,password.value,username.value)
            if(!error.value){
                 router.push({name:'Setup'})
            }
        }

       //=== EMITS
        const CloseEmit = () => emit('closemodal')
        const LoginEmit = () => emit('login')

        const dataObject  = {
                LoginEmit,
                CloseEmit,
                submit,
                email,
                username,
                password,
                confirm_password,
                error,
                isLoading
        }

        return dataObject
    }
}
</script>
<style scope>
.slide-down-enter-active, .slide-down-leave-active {
  transition: all .3s ease;
}
.slide-down-enter, .slide-down-leave-to {
  transform: translateY(-100%);
}
.head{
    height: 70px;
    margin-top: 10px;
}
</style>