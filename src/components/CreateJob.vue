<template>
    
<div class="max-w-xl mx-auto p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <form>
        <h1 class="text-2xl font-extrabold tracking-tight text-slate-500 dark:text-white">
            Create Job Listing
        </h1>

        
        <div class="relative z-0 w-full mb-6 group">
            <input type="text" name="position" id="floating_email" v-model="position" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
            <label for="position" class="peer-focus:font-medium absolute left-0 text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Position
            </label>
        </div>

        <div class="relative z-0 w-full mb-6 group">
            <input type="text" name="floating_email" id="floating_email" v-model="JobDescription" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
            <label for="floating_email" class="peer-focus:font-medium absolute left-0 text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Job Description
            </label>
        </div>

        <div class="relative z-0 w-full mb-6 group">
            <input type="text" name="floating_email" id="floating_email" v-model="Experience" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
            <label for="floating_email" class="peer-focus:font-medium absolute left-0 text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Experience
            </label>
        </div>

        
        <h6>Job Highlights</h6>
        <div class="flex flex-col items-start justify-start" ref="JobHighlighDiv">
            <div class="relative z-0 w-full mb-6 group">
                <input type="text" name="floating_email" id="floating_email" v-model="JobHighlight" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label for="floating_email" class="peer-focus:font-medium absolute left-0 text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Job Highlights
                </label>
            </div>
            <i class="fa-solid fa-circle-plus text-3xl text-teal-500 cursor-pointer" @click="addJobHiglights"></i>
        </div>
    </form>
</div>


</template>

<script>
import { onMounted, ref } from 'vue';
export default {
    setup(){
        const JobHighlighDiv = ref(null);
        
        onMounted(() => {
            console.log(JobHighlighDiv)
        })
        // const addJobHiglights = () => {
        //     const addJobHiglightField =`<div class="relative z-0 w-full mb-6 group">
        //     <input type="text" name="floating_email" id="floating_email" v-model="JobHighlight" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        //     <label for="floating_email" class="peer-focus:font-medium absolute left-0 text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
        //         Job Highlights
        //     </label>
        //     </div>
        //     `
        //     JobHighlighDiv.value.innerHTML.prepend(addJobHiglightField)
        // }
        const addJobHiglights = () => {
            const newJobHighlightField = document.createElement('div');
            newJobHighlightField.className = 'relative z-0 w-full mb-6 group';

            const inputField = document.createElement('input');
            inputField.type = 'text';
            inputField.name = 'floating_email';
            inputField.id = 'floating_email';
            inputField.className = 'block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer';
            inputField.placeholder = '';
            inputField.required = true;
            inputField.setAttribute('v-model', 'JobHighlight');

            const label = document.createElement('label');
            label.htmlFor = 'floating_email';
            label.className = 'peer-focus:font-medium absolute left-0 text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6';
            label.innerText = 'Job Highlights';

            newJobHighlightField.appendChild(inputField);
            newJobHighlightField.appendChild(label);

            JobHighlighDiv.value.prepend(newJobHighlightField);
        }


         return {addJobHiglights,JobHighlighDiv}
    }
}
</script>

<style>

</style>