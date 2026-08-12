import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

// Web Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyDwu5Us6Qcq7pZgNIoTKZDW-rI1iHNql00",
    authDomain: "new-e-panchayat.firebaseapp.com",
    projectId: "new-e-panchayat",
    storageBucket: "new-e-panchayat.firebasestorage.app",
    messagingSenderId: "895672032452",
    appId: "1:895672032452:web:cd2651a3e9ca4b9719bd91"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);