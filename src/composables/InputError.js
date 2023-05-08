import { ref } from 'vue';
 const errorMessage = ref('')
      
 const showError = (input,ModelVal,errorRef) => {
     if(!ModelVal.value || ModelVal.value == '') {
         errorMessage.value = 'Input was required'
         errorRef.value.textContent = errorMessage.value
         input.value.classList.add('border-b-2','border-rose-600')
        
         setTimeout(() => {
             errorMessage.value = ''
             errorRef.value.textContent = ''
             input.value.classList.remove('border-rose-600')
         }, 5000)
     }else{
        errorMessage.value = ''
     }
     console.log(errorMessage.value)
}

const InputError = () => {
    return {errorMessage,showError}
}

export default InputError