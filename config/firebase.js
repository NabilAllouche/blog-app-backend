// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import multer from "multer";
import dotenv from "dotenv";
dotenv.config();

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECY_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID,
};

export const upload = multer({ storage: multer.memoryStorage() });

// Initialize Firebase
const app = initializeApp(firebaseConfig);
