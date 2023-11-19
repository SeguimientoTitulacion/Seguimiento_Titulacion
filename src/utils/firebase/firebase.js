// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFMouZmmeBed3Oa6g8R0oncHBPKGhEiz8",
  authDomain: "seguimiento-titulacion.firebaseapp.com",
  projectId: "seguimiento-titulacion",
  storageBucket: "seguimiento-titulacion.appspot.com",
  messagingSenderId: "508369259506",
  appId: "1:508369259506:web:01a5d458551f8795b7396b",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
