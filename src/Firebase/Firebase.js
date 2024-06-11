// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhsWOiFBPPt9oPKQZiHBHkrttEuZTfX1E",
  authDomain: "task-master-63998.firebaseapp.com",
  projectId: "task-master-63998",
  storageBucket: "task-master-63998.appspot.com",
  messagingSenderId: "926459095147",
  appId: "1:926459095147:web:8012dcb56d96a55adea92e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;

const db = getFirestore();

export {db};

export const database = getAuth(app);