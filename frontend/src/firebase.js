// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPJGrdjTHZbquhKQ5XMe2WbypOPzP29hk",
  authDomain: "mern-realestate-da99d.firebaseapp.com",
  projectId: "mern-realestate-da99d",
  storageBucket: "mern-realestate-da99d.firebasestorage.app",
  messagingSenderId: "24081898552",
  appId: "1:24081898552:web:6f804d3cce295e04485acd",
  measurementId: "G-43X68EQ39M"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);