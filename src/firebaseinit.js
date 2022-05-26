import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAh302lV2r6O9ufg7I5sJz9pvdBiarhLnA",
  authDomain: "testing-auth-3ebb4.firebaseapp.com",
  projectId: "testing-auth-3ebb4",
  storageBucket: "testing-auth-3ebb4.appspot.com",
  messagingSenderId: "178671142971",
  appId: "1:178671142971:web:156285073d35084978741e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//export it so that it can be use in the login page
export const auth = getAuth() 