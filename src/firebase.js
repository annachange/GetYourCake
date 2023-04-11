import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBRuUB3D_u9FoeFVUA4IJ7gGtsbJtDrxe0",
    authDomain: "getyourcake-65a17.firebaseapp.com",
    projectId: "getyourcake-65a17",
    storageBucket: "getyourcake-65a17.appspot.com",
    messagingSenderId: "784018239533",
    appId: "1:784018239533:web:a1ea8db9ca673a9cf608a4",
    measurementId: "G-01KJPHGVXM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export {auth};