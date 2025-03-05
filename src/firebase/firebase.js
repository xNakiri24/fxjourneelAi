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
  apiKey: "AIzaSyAXH15T9gNFvugu7KJUBoiNFguXrzgKtjk",
  authDomain: "fxjourneelai.firebaseapp.com",
  projectId: "fxjourneelai",
  storageBucket: "fxjourneelai.firebasestorage.app",
  messagingSenderId: "8369451383",
  appId: "1:8369451383:web:1b528aa7f8346b26d7b172",
  measurementId: "G-N2W9JBPQFC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestoreDb = getFirestore(app);
export const auth = getAuth();


