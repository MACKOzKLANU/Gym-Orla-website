// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7BpDWxmtj4F9-O-Nb0uIay6pfr2LQZBE",
  authDomain: "gymorla-adbcd.firebaseapp.com",
  projectId: "gymorla-adbcd",
  storageBucket: "gymorla-adbcd.firebasestorage.app",
  messagingSenderId: "585424253743",
  appId: "1:585424253743:web:3e4f8761d7a331cb0b67da",
  measurementId: "G-8KDW3LKD08"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

// if (!firebase.apps.length) {
//     firebase.initializeApp(firebaseConfig);
// } else {
//     firebase.app();
// }

export { app, auth };

