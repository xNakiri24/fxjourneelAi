// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"
// import { storage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5m5KpBw6nA3_LSSISHdja4a_EdoPrGV0",
  authDomain: "journeel.firebaseapp.com",
  projectId: "journeel",
  storageBucket: "journeel.appspot.com",
  messagingSenderId: "62004648338",
  appId: "1:62004648338:web:5a2746a3eb84938431894b",
  measurementId: "G-BRPF6J766V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestoreDb = getFirestore(app);
export const auth = getAuth();


