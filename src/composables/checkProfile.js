import { ref } from '@vue/reactivity'
import queryData from '@/composables/queryData'
import { watchEffect } from 'vue';
const isEmployee = ref(false)
const isCompany = ref(false)

const { data,loadData} = queryData('EmployeeDetails');
loadData()
const hasData = watchEffect(() => data._rawValue.length > 0)

console.log(hasData)
if (Boolean(data != '')){ isEmployee.value = true }
else { isCompany.value = true }

const checkUser = () => {
    return {isEmployee,isCompany}
}
export default checkUser