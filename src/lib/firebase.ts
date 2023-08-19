import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyBlIQLlcBHVnkqDI4Y5VP6d1Lfz-0dbYPo",
  authDomain: "project-2165808339993961325.firebaseapp.com",
  projectId: "project-2165808339993961325",
  storageBucket: "project-2165808339993961325.appspot.com",
  messagingSenderId: "1082324009534",
  appId: "1:1082324009534:web:2633b9cded436f18a9476f",
  measurementId: "G-Z1P08R46TM"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)
export const storage = getStorage(app)
