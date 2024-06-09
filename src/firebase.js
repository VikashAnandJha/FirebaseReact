// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD3Yia4VwNX3t8hP5S35xbJ4mD_wa8Q5Lk",
    authDomain: "testfirebasenew-ae3dd.firebaseapp.com",
    projectId: "testfirebasenew-ae3dd",
    storageBucket: "testfirebasenew-ae3dd.appspot.com",
    messagingSenderId: "358244163483",
    appId: "1:358244163483:web:c13b6d36cce8c17064cb3e"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider };
