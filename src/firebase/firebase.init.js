// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOT0GvYfH0WZdCooc7xTmEhtkeg_CM7MA",
  authDomain: "shopping-with-auth-contextapi.firebaseapp.com",
  projectId: "shopping-with-auth-contextapi",
  storageBucket: "shopping-with-auth-contextapi.appspot.com",
  messagingSenderId: "231627440881",
  appId: "1:231627440881:web:c205ed5cf2b6a523d79f50"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;