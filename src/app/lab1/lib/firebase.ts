// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBR4Bj3Tzk72Ls0JugrpcZHY9UTbQmkKKE",
  authDomain: "medium-web-project.firebaseapp.com",
  projectId: "medium-web-project",
  storageBucket: "medium-web-project.firebasestorage.app",
  messagingSenderId: "538302714842",
  appId: "1:538302714842:web:bae30d04f3be56a3ab26e3",
  measurementId: "G-XTTD2P983Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);