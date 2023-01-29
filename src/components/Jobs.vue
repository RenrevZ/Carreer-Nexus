<template>
  <div v-for="job in jobs" :key="job.id" class="mx-auto text-center">
    <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <i class="fa-solid fa-briefcase text-sky-800 text-5xl"></i>
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ job.Company }}</h5>
        <p class="font-normal text-gray-700 dark:text-gray-400 p-5">{{ job.Description }}</p>
        <span v-for="tags in job.tags" :key="tags">
        <a href="#" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
            {{ tags }}
        </a>
        </span>
    </a>
</div>
</template>

<script>
export default {
    props: ['jobs']
}
</script>

<style>

</style>