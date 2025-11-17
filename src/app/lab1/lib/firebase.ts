import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBR4Bj3Tzk72Ls0JugrpcZHY9UTbQmkKKE",
  authDomain: "medium-web-project.firebaseapp.com",
  projectId: "medium-web-project",
  storageBucket: "medium-web-project.firebasestorage.app",
  messagingSenderId: "538302714842",
  appId: "1:538302714842:web:bae30d04f3be56a3ab26e3",
  measurementId: "G-XTTD2P983Q"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
