// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBtzv9aAQV5XQ8mrLLaq0pX2z8oEsImUec",
    authDomain: "v-stream-68335.firebaseapp.com",
    projectId: "v-stream-68335",
    storageBucket: "v-stream-68335.appspot.com",
    messagingSenderId: "1040977993641",
    appId: "1:1040977993641:web:a52b16802d4d07afdc6eb8"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();