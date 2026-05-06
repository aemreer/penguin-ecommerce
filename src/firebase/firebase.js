import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBVjQ13aw5Hudmz_fT8tUqcyQ80Tnq3XuM",
    authDomain: "penguin-store-c3f24.firebaseapp.com",
    projectId: "penguin-store-c3f24",
    storageBucket: "penguin-store-c3f24.firebasestorage.app",
    messagingSenderId: "359718635658",
    appId: "1:359718635658:web:ac0bbf138b29745ae48573",
    measurementId: "G-CCBX2SLQ1E"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
