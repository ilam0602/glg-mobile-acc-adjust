// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSkQR9mzbJ7OiDmkGwKqyVC2G6ahR88IU",
  authDomain: "glg-mobile-ec237.firebaseapp.com",
  projectId: "glg-mobile-ec237",
  storageBucket: "glg-mobile-ec237.firebasestorage.app",
  messagingSenderId: "919807489327",
  appId: "1:919807489327:web:5a780b3afa80547f095dda",
  measurementId: "G-HCG95TDNW3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth };