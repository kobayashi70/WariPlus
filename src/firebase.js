// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  // onAuthStateChanged ,
} from "firebase/auth";
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

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Example: Creating a new user
const emailForNewUser = "example@example.com";
const passwordForNewUser = "password123";

createUserWithEmailAndPassword(auth, emailForNewUser, passwordForNewUser)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log("New user created:", user);
  })
  // createUserWithEmailAndPassword(auth, email, password)
  //   .then((userCredential) => {
  //     // Signed in
  //     const user = userCredential.user;
  //     // ...
  //   })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error("Error creating new user:", errorCode, errorMessage);
  });

// Example: Signing in with an existing user
const emailForExistingUser = "existing@example.com";
const passwordForExistingUser = "existingPassword123";

signInWithEmailAndPassword(auth, emailForExistingUser, passwordForExistingUser)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log("User signed in:", user);
  })
  // signInWithEmailAndPassword(auth, email, password)
  //   .then((userCredential) => {
  //     // Signed in
  //     const user = userCredential.user;
  //     // ...
  //   })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error("Error signing in:", errorCode, errorMessage);
  });

  // onAuthStateChanged(auth, (user) => {
  //   if (user) {
  //     // User is signed in
  //     const uid = user.uid;
  //     // ...
  //   } else {
  //     // User is signed out
  //     // ...
  //   }
  // });

export { auth };
