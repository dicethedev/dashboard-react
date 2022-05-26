import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: process.env.REACT_FIREBASE_API_KEY,
  authDomain: "testing-auth-3ebb4.firebaseapp.com",
  projectId: "testing-auth-3ebb4",
  storageBucket: "testing-auth-3ebb4.appspot.com",
  messagingSenderId: "178671142971",
  appId: "1:178671142971:web:156285073d35084978741e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);