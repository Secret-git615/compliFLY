import { initializeApp, getApps } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDgQHXgOENG9-NfnhMOvUsFjriBs_1GiYk",
  authDomain: "enterprise-f9054.firebaseapp.com",
  projectId: "enterprise-f9054",
  storageBucket: "enterprise-f9054.firebasestorage.app",
  messagingSenderId: "486466660571",
  appId: "1:486466660571:web:caa36747594ef90ba684fe",
  measurementId: "G-YNTJ0B86G4"
};

const app = getApps().find(a => a.name === "Enterprise") || initializeApp(firebaseConfig, "Enterprise");
export const auth = getAuth(app);
export const db = getFirestore(app);