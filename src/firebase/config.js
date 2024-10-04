import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC9m87Crt31xL20TJnSETCgc8wZEGAT6es",
  authDomain: "etec20240215.firebaseapp.com",
  projectId: "etec20240215",
  storageBucket: "etec20240215.appspot.com",
  messagingSenderId: "865436390936",
  appId: "1:865436390936:web:5435b744195d101b33156d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)