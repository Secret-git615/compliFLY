import { initializeApp, getApps } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyC8FQbNC3gtQQ_ylKejuJFwdkY710nxQMM",
  authDomain: "trybase-552c4.firebaseapp.com",
  projectId: "trybase-552c4",
  storageBucket: "trybase-552c4.firebasestorage.app",
  messagingSenderId: "1059177965937",
  appId: "1:1059177965937:web:d35e99da7be00366cb6ed0",
  measurementId: "G-30SWSD62F1"
};

const app = getApps().find(a => a.name === "Basic") || initializeApp(firebaseConfig, "Basic");
export const auth = getAuth(app);
export const db = getFirestore(app);