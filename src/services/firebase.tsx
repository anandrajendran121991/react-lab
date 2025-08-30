import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAo1Zn-C4tbqw0_d8RftdaQsJOddLmdwmk",
  authDomain: "react-lab-9c611.firebaseapp.com",
  projectId: "react-lab-9c611",
  storageBucket: "react-lab-9c611.firebasestorage.app",
  messagingSenderId: "492895146550",
  appId: "1:492895146550:web:f7b323fec90251f51b7e97",
  measurementId: "G-0M46Q340CW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
