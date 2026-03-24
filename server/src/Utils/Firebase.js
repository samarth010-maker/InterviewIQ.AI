// Import the functions you need from the SDKs you need
import { getApp, initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-87838.firebaseapp.com",
  projectId: "interviewiq-87838",
  storageBucket: "interviewiq-87838.firebasestorage.app",
  messagingSenderId: "767760087305",
  appId: "1:767760087305:web:9c6df00e4d374132e53bd8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth= getAuth(app)

const provider= new GoogleAuthProvider();

export {auth , provider }