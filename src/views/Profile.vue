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
export default {
    components: {EmployeeProfile,CompanyProfile},
    setup(){
        const { isEmployee } = checkProfile()
        // console.log(isEmployee.value)
        const dataObject = { 
          isEmployee
        }

        return dataObject
    }
}
</script>

<style>

</style>