import { ref, computed } from '@vue/reactivity'
import { projectFirestore } from '../firebase/config'

const jobs = ref([])
const pageSize = 10
const currentPage = ref(1)

const totalPages = computed(() => Math.ceil(jobs.value.length / pageSize))

const startAfter = computed(() => {
      const index = (currentPage.value - 1) * pageSize
      if (index > 0 && index < jobs.value.length) {
        return jobs.value[index].id
      }

      return null
})

const currentPageItems = computed(() => {
      const startIndex = (currentPage.value - 1) * pageSize
      return jobs.value.slice(startIndex, startIndex + pageSize)
})


const loadData = async (search) => {
      const querySnapshot = await projectFirestore
      .collection('Jobs')
      .orderBy('Company')
      .limit(pageSize)
      .startAfter(startAfter.value)
      .get()
      
      if(search){
        jobs.value = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
                     .filter(job => job.Company.toLowerCase().includes(search.toLowerCase()))
      }else{
        jobs.value = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
      }
}

const nextPage = () => {
      currentPage.value += 1
      loadData()
}

const previousPage = () => {
      currentPage.value -= 1
      loadData()
}

    loadData()

const paginateData = () => {
    return {
        currentPageItems,
        currentPage,
        totalPages,
        nextPage,
        previousPage,
        jobs,
        loadData
    }
}

export default paginateData

