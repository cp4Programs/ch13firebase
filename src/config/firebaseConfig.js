// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID,
}

// const firebaseConfig = {
//     apiKey: "AIzaSyCOdWNwHEltq8BPc4SPeIEC0_UyKLsFwhs",
//     authDomain: "cp4firstfullstack.firebaseapp.com",
//     projectId: "cp4firstfullstack",
//     storageBucket: "cp4firstfullstack.appspot.com",
//     messagingSenderId: "331898807167",
//     appId: "1:331898807167:web:cc5d2c329315f2c35e304a",
//     measurementId: "G-NHMME4JBML",
// }

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)