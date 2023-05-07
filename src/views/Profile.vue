<template>
  <span v-if="isEmployee">
      <EmployeeProfile />
  </span>
  <span v-else>
     <CompanyProfile />
  </span>
</template>

<script>
import EmployeeProfile from '@/components/EmployeeProfile'
import CompanyProfile from '@/components/CompanyProfile'
import checkProfile from '@/composables/checkProfile'
import queryData from '@/composables/queryData'

export default {
    components: {EmployeeProfile,CompanyProfile},
    setup(){

        // COMPOSABLES
        const { isEmployee } = checkProfile()
        const { data, loadData } = queryData('EmployeeDetails');
        console.log(isEmployee.value)
        loadData()

        const dataObject = { 
          isEmployee
        }

        return dataObject
    }
}
</script>

<style>

</style>