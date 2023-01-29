import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDCxWhl-MlPHGeDW5ThNqPhF0-UiIf_B1s",
    authDomain: "codealongwninja.firebaseapp.com",
    projectId: "codealongwninja",
    storageBucket: "codealongwninja.appspot.com",
    messagingSenderId: "756479764115",
    appId: "1:756479764115:web:42c3955a568140c23c4f66"
};

firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore()

export { projectFirestore }