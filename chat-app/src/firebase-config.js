// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkZx4tGH2PqpdmMbs2QEh8lDkGNlAJAPU",
  authDomain: "chat-app-a44c0.firebaseapp.com",
  projectId: "chat-app-a44c0",
  storageBucket: "chat-app-a44c0.appspot.com",
  messagingSenderId: "298727870172",
  appId: "1:298727870172:web:e010616bb0b13af1beee19",
  measurementId: "G-VRLPHFL983",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
