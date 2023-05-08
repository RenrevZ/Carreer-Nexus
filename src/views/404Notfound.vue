<template>
  <div class="h-screen flex justify-center items-center">
     <div class="p-10 w-full text-slate-500">
        <div class="flex justify-center items-center">
            <img src="@/assets/img/giphy.gif" alt="" width="300">
        </div>
        <h1 class="font-extrabold text-7xl">404</h1>
        <h1 class="font-bold text-1xl mb-5">Oppss... Sorry the page you were looking for doesnt exist</h1>
        <router-link :to="{name:'Home'}" class=" p-3 text-slate-200 bg-sky-700 rounded-md">Go back to Homepage</router-link>
     </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>