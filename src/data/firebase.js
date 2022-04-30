import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

// Initialize Firebase

const app = initializeApp({
    apiKey: "AIzaSyBMjbmlv5aZvs2Uf6T2TJvoORiizuiHxLc",
    authDomain: "social-app-desktop.firebaseapp.com",
    projectId: "social-app-desktop",
    storageBucket: "social-app-desktop.appspot.com",
    messagingSenderId: "351831353070",
    appId: "1:351831353070:web:9dd09baad2661ca2f375ff",
    measurementId: "G-BXH41FB0R0"
})

export const auth  = getAuth(app);
