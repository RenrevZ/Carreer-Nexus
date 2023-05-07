import { ref } from '@vue/reactivity'
import queryData from '@/composables/queryData'
import { watchEffect } from 'vue';

const isEmployee = ref(false)
const isCompany = ref(false)

const { data, loadData } = queryData('EmployeeDetails');
loadData()

watchEffect(() => {
  if (data.value && data.value.length > 0) {
    isEmployee.value = true
    isCompany.value = false
  } else {
    isEmployee.value = false
    isCompany.value = true
  }
})

const checkUser = () => {
  return { isEmployee, isCompany }
}


export default checkUser