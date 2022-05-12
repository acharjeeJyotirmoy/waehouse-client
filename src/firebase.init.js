// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTK-vYj-beCh-ASkrzNEMmUUnnBD8xv8I",
  authDomain: "warehouse-management-1321c.firebaseapp.com",
  projectId: "warehouse-management-1321c",
  storageBucket: "warehouse-management-1321c.appspot.com",
  messagingSenderId: "864129209828",
  appId: "1:864129209828:web:db2c844fe2f065ebb323f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth