<template>
<transition name="slide-down">
    <div class="font-extrabold flex justify-center items-center h-96">
        <div class="rounded p-10 bg-white shadow-md">
          
            <h1 class="text-5xl mb-6">Welcome to <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Career Nexus</span></h1>
            <p class="mb-5">Please Choose what profile you want to setup on your account</p>

            <div class="flex justify-between items-center">
                <div>
                    <button class="px-20 py-2 bg-sky-700 shadow-md w-full text-white text-sm rounded-full hover:scale-125 transition ease-in-out delay-100">
                        Employer
                    </button>
                </div>
                <div>
                    <button class="px-20 py-2 bg-sky-700 shadow-md w-full text-white text-sm rounded-full hover:scale-125 transition ease-in-out delay-100">
                        Employee
                    </button>
                </div>
            </div>
        </div>
    </div>
</transition>
</template>

<script>
export default {

}
</script>

<style scope>
.slide-down-enter-active, .slide-down-leave-active {
  transition: all 0.5s ease;
}
</style>