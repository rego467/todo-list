// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACdKv8DlgLItOClKwhpZHxzW6avLMKblY",
  authDomain: "todo-list-c2f88.firebaseapp.com",
  databaseURL: "https://todo-list-c2f88-default-rtdb.firebaseio.com",
  projectId: "todo-list-c2f88",
  storageBucket: "todo-list-c2f88.appspot.com",
  messagingSenderId: "190261062550",
  appId: "1:190261062550:web:5394cf9dc08a6ec4b08bb7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
export const auth = getAuth();
