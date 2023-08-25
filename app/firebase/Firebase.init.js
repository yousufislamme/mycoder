// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7wIYm51m05i2A0J4gxVXmwiV4e929QS8",
  authDomain: "myblogcoder.firebaseapp.com",
  projectId: "myblogcoder",
  storageBucket: "myblogcoder.appspot.com",
  messagingSenderId: "267096494340",
  appId: "1:267096494340:web:1e5de82825f708ba59c051"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;