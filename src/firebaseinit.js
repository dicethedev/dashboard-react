import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
//db importation
import { getFirestore } from "firebase/firestore";
//Cloud storage for image uploading in Firebase
import { getStorage } from "firebase/storage";


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
export const db = getFirestore(app);
//went down to NewPage to add it to the newpage functions

//export it so that it can be use in the login page
export const auth = getAuth() 

export const storage = getStorage(app);
//went down to NewPage to add it to the newpage functions
