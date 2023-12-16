// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaAGp_5zfUXWHcZ0Xj48d18k3vhhNlF54",
  authDomain: "netflix-reactproject.firebaseapp.com",
  projectId: "netflix-reactproject",
  storageBucket: "netflix-reactproject.appspot.com",
  messagingSenderId: "991212028775",
  appId: "1:991212028775:web:5ca0f4ad6117b684d3a5c2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
