// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore} from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDI_h3DEYjxhY8ZXSVhzxw_qpbweEh6KZQ",
  authDomain: "in-tech-gration-bootcamp.firebaseapp.com",
  projectId: "in-tech-gration-bootcamp",
  storageBucket: "in-tech-gration-bootcamp.appspot.com",
  messagingSenderId: "489956493087",
  appId: "1:489956493087:web:a3425c3115e896c09b922a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)