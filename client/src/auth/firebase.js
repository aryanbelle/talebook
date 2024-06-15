// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyBmDj10D3GxEWliXdxE3DjTibvJt4_rYRs",
    authDomain: "talebook-4f8b2.firebaseapp.com",
    projectId: "talebook-4f8b2",
    storageBucket: "talebook-4f8b2.appspot.com",
    messagingSenderId: "837078330498",
    appId: "1:837078330498:web:4a6d7cd8f7e06981d1589b",
    measurementId: "G-RS95FGGR3C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup, signOut };
