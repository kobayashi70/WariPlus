// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYVauP-fCS4PqQcIK9ebVebSaqu_GdZx8",
  authDomain: "wariplus.firebaseapp.com",
  projectId: "wariplus",
  storageBucket: "wariplus.appspot.com",
  messagingSenderId: "756400142552",
  appId: "1:756400142552:web:ff71e2811168e5cad03fad",
  measurementId: "G-8HJE60NHLC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
