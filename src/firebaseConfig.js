// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBG0blDBDY01zsv05DYysvOG6l7GuLk6yU",
    authDomain: "crud-firebase-2cfb9.firebaseapp.com",
    projectId: "crud-firebase-2cfb9",
    storageBucket: "crud-firebase-2cfb9.appspot.com",
    messagingSenderId: "499508647292",
    appId: "1:499508647292:web:da9169e1df0d6bc22c80f9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };