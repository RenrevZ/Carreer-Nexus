<template>

{{ p }}

<!-- == END OF DOCUMENT -->
</template>

<script>
import { ref } from '@vue/reactivity'
import { projectFirestore } from '../firebase/config'

export default { 
  setup(){
    const p = ref('')
    const loadData = async () => {
      try{
         let response = await projectFirestore.collection('Jobs').get()
         console.log(response)
      }
      catch{

      }
    }

    p.value = "data"
    return { p}
  }
}
</script> 

<style>
  .input-style{
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>