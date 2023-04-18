import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth'
import 'firebase/compat/storage'

const firebaseConfig = {
    apiKey: "AIzaSyC2509UEp94OHa5CIgjZU_lvIXGlVuFuQg",
    authDomain: "job-solution-92956.firebaseapp.com",
    projectId: "job-solution-92956",
    storageBucket: "job-solution-92956.appspot.com",
    messagingSenderId: "246354967912",
    appId: "1:246354967912:web:4dc0f65e7de647d3a16add",
    measurementId: "G-QQY2KJ226F"
};

firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp
// init services
const projectStorage = firebase.storage()

export { projectAuth,projectFirestore,timestamp,projectStorage }