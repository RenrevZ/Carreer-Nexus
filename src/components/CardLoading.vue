<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mb-5 ml-5">
        <div class=" rounded-lg block max-w-md p-6 bg-white border border-gray-200  shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <LoadingAnimate profile="true"/>
        </div>
        
        <div class=" rounded-lg block max-w-md p-6 bg-white border border-gray-200  shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <LoadingAnimate profile="true"/>
        </div>

        <div class=" rounded-lg block max-w-md p-6 bg-white border border-gray-200  shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <LoadingAnimate profile="true"/>
        </div>
    </div>

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 ml-5">
        <div class=" rounded-lg block max-w-md p-6 bg-white border border-gray-200  shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <LoadingAnimate profile="true"/>
        </div>

        <div class=" rounded-lg block max-w-md p-6 bg-white border border-gray-200  shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <LoadingAnimate profile="true"/>
        </div>

        <div class=" rounded-lg block max-w-md p-6 bg-white border border-gray-200  shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <LoadingAnimate profile="true"/>
        </div>
    </div>
</template>

<script>
import LoadingAnimate from './LoadingAnimate.vue';
export default {
    components: {LoadingAnimate}
}
</script>

<style>

</style>