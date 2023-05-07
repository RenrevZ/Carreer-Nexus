<template>
    <div class="flex flex-col justify-center items-center h-full w-full">
      <div class="grid grid-col-1 md:grid-rows-3 md:grid-flow-col md:gap-4 my-10 mt-24">
          <div class="row-span-3 flex flex-col justify-start items-center shadow-lg p-10 md:max-w-md mx-auto">
              
              <div v-for="creds in credential" :key="creds">
                  <!-- PROFILE IMAGE -->
                  <span v-if="!isLoading" class="relative w-full">
                      <img :src="creds.coverUrl" class="rounded-full h-32 object-cover mx-auto">
                      <span class="bottom-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
                  </span>
                    <span v-if="showEdit">
                        <div class="max-w-full mt-3">
                            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Company Name</label>
                            <input type="text" 
                                class="bg-gray-50 t mb-3 border border-gray-300 text-sky-600 text-md font-bold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                v-model="creds.companyName"
                                required>
                        </div>

                        <div style="width: 400px;">
                            
                            <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Company History</label>
                            <textarea  rows="15"
                                       col="15"
                                       class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                       placeholder="Company History"
                                       style="resize: none;"> {{ creds.history }}</textarea>

                        </div>

                        <div class="w-full mt-5">
                            <span v-if="Loading">
                                <button @click="UpdateProfile" 
                                        class="w-full bg-sky-300 text-white p-2 shadow rounded-full cursor-pointer"
                                        disabled>
                                        Updating.....
                                </button>
                            </span>
                            <span v-else>
                                <button @click="UpdateProfile" 
                                        class="w-full bg-sky-500 text-white p-2 shadow rounded-full cursor-pointer" >
                                        Update Basic Information
                                </button>
                            </span>
                        </div>
                    </span>
                    <span v-else>
                      <div class="flex justify-center items-center">
                          <h1 class="text-2xl font-bold text-center text-sky-600 mt-8">
                              {{ creds.companyName }}
                          </h1>
                          <i class="fa-regular fa-pen-to-square text-slate-600 text-1xl cursor-pointer"
                          @click="EditInfo"></i>
                      </div>

  
                      <p class="mt-2 text-md text-gray-600 ">{{ creds.position }}</p>
                  
                      <p class="text-sm text-left py-10">
                          {{ creds.history }}
                      </p>
                    </span>
              </div>
          </div>
  
          <!-- BASIC INFORMATION -->
          <div class="col-span-8 shadow-md p-5 mt-10  basic-info-container mx-auto">
              <h1 class="text-1xl font-bold text-center">
                  Basic Information
                  <i class="fa-regular fa-pen-to-square text-slate-600 text-1xl cursor-pointer"
                          @click="EditBasicInfo"></i>
              </h1>
              
              <div v-for="creds in credential" :key="creds" class="grid md:grid-cols-3 grid-cols-2 gap-2 mb-4">
                  <div>
                      <h1 class="text-md font-semibold text-slate-600 dark:text-white p-2">
                        <i class="fa-solid fa-map-location-dot text-sky-600 text-lg p-1"></i> Location
                      </h1>
                      <p>{{ creds.companyLocation }}</p>
                  </div>

                  <div>
                      <h1 class="text-md font-semibold text-slate-600 dark:text-white p-2">
                        <i class="fa-solid fa-people-group text-sky-600 text-lg p-1"></i> Company Size
                      </h1>
                      <p>{{ creds.companySize }}</p>
                  </div>

                  <div>
                      <h1 class="text-md font-semibold text-slate-600 dark:text-white p-2">
                        <i class="fa-solid fa-briefcase text-sky-600 text-lg p-1"></i> Industry
                      </h1>
                      <p>{{ creds.industry }}</p>
                  </div>
                  
                  <!-- <ul class="flex flex-col justify-start items-start">
                        <li> <i class="fa-solid fa-briefcase text-teal-600 text-lg p-1"></i>{{ creds.industry }}</li>
                        <li><i class="fa-solid fa-map-location-dot text-teal-600 text-lg p-1"></i> {{ creds.companyLocation }}</li>
                        <li><i class="fa-solid fa-business-time text-teal-600 text-lg p-1"></i>{{ creds.companySize}}</li>
                    </ul> -->
              </div>
          </div>
  
  
          <div class="row-span-2 col-span-8  shadow-md p-10 w-full mx-auto max-h-lg">
              <h1 class="text-1xl font-bold text-center mb-5">Ratings</h1>
             
              <h1 class="text-1xl font-bold text-center mb-5 text-slate-500">No Ratings has been added yet</h1>
              <!-- <span v-for="Xp in dataXp" :key="Xp">
                  <div class="flex justify-around items-center border-b border-slate-300 py-5">
                      <img :src="Xp.coverUrl" 
                          class="rounded-full h-20 w-16 object-cover">
  
                      <div class="flex flex-col justify-start items-center">
                          <h1 class="text-sky-600 text-2xl">{{ Xp.company }}</h1>
                          <h3 class="text-slate-600 text-xl">{{ Xp.position }}</h3>
                          <span v-if="isCurrent = true">
                              <small>{{ Xp.dateStarted }} - Present | Quezon Ave,Quezon City</small>
                          </span>
                          <span v-else>
                              <small>{{ Xp.dateStarted }} - {{ Xp.dateLeave }} | Quezon Ave,Quezon City</small>
                          </span>
                      </div>
                  </div>
              </span> -->
              
  
              <!-- <div class="flex justify-start items-start">
                  <i class="fa-solid fa-circle-plus text-sky-800 text-2xl cursor-pointer pt-5"
                                 @click="isOpen = true">
                              </i>
              </div> -->
          </div>
      </div>
    </div>
  </template>
  <script>
  import queryData from '@/composables/queryData'
  import LoadingAnimate from './LoadingAnimate.vue'
  import useDocument from '@/composables/useDocument'
  import useData from '@/composables/useData'
  import Modal from './Modal.vue'
  import getUser from '@/composables/getUser'
  import Storage from '@/composables/Storage'
  import { ref } from 'vue'
  
  export default {
      setup(){
        //COMPOSABLES
        const { currentUser } = getUser()
        const {url,filePath,uploadImage} = Storage()
        const { error, data, loadData,isLoading } = queryData('Company')
        loadData()

         // COMPOSABLES
        async function fetchData() {
            const { error, data, loadData, isLoading } = queryData('Company')
            await loadData()
            
            updateData.value = data.value.map((newData) => {
                const { deleteDoc,updateDoc,AddSkills } = useDocument('EmployeeDetails',newData.id)

                return { deleteDoc,updateDoc,AddSkills }
            })
        }
        fetchData()
        
        // IMAGE UPLOAD
        const imageToUpload = ref('')
        const filetype = ['image/png','image/jpeg']
        const fileError = ref(null)
        const image = ref('')

        // PREVIEW IMAGE
        const imageUrl = ref("https://via.placeholder.com/150");
        const previewImage = (event) => {
            const file = event.target.files[0];
            image.value = file 
            const reader = new FileReader();
            reader.addEventListener("load", () => {
                imageUrl.value = reader.result;
            }, false);
            
            if (file) {
                reader.readAsDataURL(file);
            }

            if(file && filetype.includes(file.type)){
                imageToUpload.value = file
                fileError.value = null
            }else{
                imageToUpload.value = null
                fileError.value = 'Please select an image file (png/jpg)'
            }
        }

        // EDIT PROFILE
        const showEdit = ref(false)
        const EditInfo = () => showEdit.value = true
        const Loading = ref('')
        const companyName = ref('')
        // SUBMIT
        const UpdateProfile = async () => {
        //    try {
        //     Loading.value = true
        //      await updateData.value[0].updateDoc({ 
        //         firstName:eFirstName.value,
        //         middleName:eMiddleName.value,
        //         lastName:eLastName.value,
        //         position:ePosition.value,
        //         bio:ebio.value
        //      })
        //    } catch (error) {
        //         console.log(error)
        //    }
        console.log(companyName.value)
           Loading.value = false
           showEdit.value = false
        }

        const dataObject = {
            credential: data,
            imageToUpload,
            previewImage,
            imageUrl,
            // EDIT PROFILE
            showEdit,
            EditInfo,
            UpdateProfile,
            companyName
        }

        return dataObject
      }
  }
  </script>
  
  <style>
  .basic-info-container {
    max-width: 800px; /* or any other value you prefer */
  }
  </style>