import { initializeApp, getApps } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCh7cSxBU1R6fDh62uK6BqSDw7fxdXbU14",
  authDomain: "professional-8380a.firebaseapp.com",
  projectId: "professional-8380a",
  storageBucket: "professional-8380a.firebasestorage.app",
  messagingSenderId: "661622942547",
  appId: "1:661622942547:web:d8ff588aef135cb6174fa6",
  measurementId: "G-18JHWGSG5L"
};

const app = getApps().find(a => a.name === "Professional") || initializeApp(firebaseConfig, "Professional");
export const auth = getAuth(app);
export const db = getFirestore(app);