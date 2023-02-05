import { ref } from "vue";

let showModal = ref(false)


const Modaltoggle = () => {
    showModal.value = !showModal.value
}

const toggleModal = () => {
    return {Modaltoggle,showModal}
}

export default toggleModal