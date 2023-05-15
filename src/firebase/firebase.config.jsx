// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZj6423ka-Ns59YHged8kYpt6IQVeiq_0",
  authDomain: "fooddelivery-e5375.firebaseapp.com",
  projectId: "fooddelivery-e5375",
  storageBucket: "fooddelivery-e5375.appspot.com",
  messagingSenderId: "208515359442",
  appId: "1:208515359442:web:5052d72d4819875e23430b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
