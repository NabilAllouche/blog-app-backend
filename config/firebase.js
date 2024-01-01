// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import multer from "multer";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyCkWeW1ZfJRxpe44digl4cMhux718cJK8c",
  authDomain: "personal-project-nabil.firebaseapp.com",
  projectId: "personal-project-nabil",
  storageBucket: "personal-project-nabil.appspot.com",
  messagingSenderId: "503369652011",
  appId: "1:503369652011:web:5be7420274fd63db86976e",
  measurementId: "G-BYZP72B91V",
};

export const upload = multer({ storage: multer.memoryStorage() });

// Initialize Firebase
const app = initializeApp(firebaseConfig);
