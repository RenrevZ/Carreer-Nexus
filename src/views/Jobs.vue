<template>
<div class="showcase p-20">
</div>
    <Search/>

    <div class="flex">
        <!-- ==== JOBS DATA === -->
        <div class="grid grid-cols-5 md:grid-cols-2 lg:grid-cols-3 gap-2 mx-auto">
            <Jobs :jobs="jobs" />
            <Jobs :jobs="jobs" />
            <Jobs :jobs="jobs" />
            <Jobs :jobs="jobs" />
        </div>
    </div>
</template>

<script>
import Search from '@/components/Search'
import Jobs from '@/components/Jobs.vue'
import getData from '@/composables/getData'

export default {
    components: {Search,Jobs},
    setup(){
        const { error, jobs} = getData()

        return {error,jobs}
    }
}
</script>

<style>

</style>