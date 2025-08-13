import { initializeApp } from 'firebase/app';
import {getAuth} from 'firebase/auth';

// Optionally import the services that you want to use
// import {...} from 'firebase/database';
// import {...} from 'firebase/firestore';
// import {...} from 'firebase/functions';
// import {...} from 'firebase/storage';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBwSKVsyb9XJSZEwLngzl7N2rPsQp1VzP8",
  authDomain: "smart-e-commerce-20b7b.firebaseapp.com",
  projectId: "smart-e-commerce-20b7b",
  storageBucket: "smart-e-commerce-20b7b.firebasestorage.app",
  messagingSenderId: "402364447065",
  appId: "1:402364447065:web:343064255a9cd256dc7448"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export {auth}
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
