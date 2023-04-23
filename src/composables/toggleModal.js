import { ref } from "vue";

let showLoginModal = ref(false)
let showSigupModal = ref(false)


const LoginModaltoggle = () => showLoginModal.value = !showLoginModal.value

const SignupModaltoggle = () =>  showSigupModal.value = !showSigupModal.value

const toggleModal = () => {
    return {
        LoginModaltoggle,
        SignupModaltoggle,
        showLoginModal,
        showSigupModal
    }
}

export default toggleModal