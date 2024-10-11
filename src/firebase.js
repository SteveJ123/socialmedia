// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5tGUaUtAq4uZ8N7WmG-ICYTRO-1DZR28",
  authDomain: "database-427a8.firebaseapp.com",
  databaseURL: "https://database-427a8-default-rtdb.firebaseio.com",
  projectId: "database-427a8",
  storageBucket: "database-427a8.appspot.com",
  messagingSenderId: "243454052962",
  appId: "1:243454052962:web:e03175180c6dcb6aec5f3b",
  measurementId: "G-HS96XSG0JJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
// const db = getFirestore(app);
// const storage = getStorage(app);
const imgDB = getStorage(app)
const txtDB = getFirestore(app)

export { txtDB, imgDB, auth };
