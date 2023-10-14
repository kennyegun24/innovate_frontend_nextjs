// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "innovate-social.firebaseapp.com",
  projectId: "innovate-social",
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMT_ID,
};

// Initialize Firebase
// export const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const app = initializeApp(firebaseConfig);
// console.log(typeof process.env.AUTH_DOMAIN);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const storage = getStorage();
