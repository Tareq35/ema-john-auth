// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDkHANKtBzl-KYHVBhJ-77nwZzjrSe9hfY",
    authDomain: "ema-john-simple-9d7f9.firebaseapp.com",
    projectId: "ema-john-simple-9d7f9",
    storageBucket: "ema-john-simple-9d7f9.appspot.com",
    messagingSenderId: "698173162345",
    appId: "1:698173162345:web:db9c7c5a5f111fb26833f8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;