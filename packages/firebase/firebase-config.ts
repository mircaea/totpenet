// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import { getStorage } from "firebase/storage";

import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// import { getPerformance } from "firebase/performance";

const firebaseConfig = {
  apiKey: "AIzaSyAEviF-_jTNp_5rJBd2mslZhXRqnPZKsyI",
  authDomain: "totpenet-372c4.firebaseapp.com",
  projectId: "totpenet-372c4",
  storageBucket: "totpenet-372c4.appspot.com",
  messagingSenderId: "464749422319",
  appId: "1:464749422319:web:7cd8d39a15d8c4edbb1d1a",
  measurementId: "G-6GWR3ST20D",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);

// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);
// const perf = getPerformance(app);

export const auth = getAuth(app);
export const firestore = getFirestore(app);

export default app;
export const providerGoogle = new GoogleAuthProvider();
