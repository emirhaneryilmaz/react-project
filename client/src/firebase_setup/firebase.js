// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0SofiZeHLguYQZBymK1M-8OgUx_weOgU",
  authDomain: "edev-proje.firebaseapp.com",
  projectId: "edev-proje",
  storageBucket: "edev-proje.appspot.com",
  messagingSenderId: "764230949399",
  appId: "1:764230949399:web:76f859f043081279f55a52",
  measurementId: "G-QQMWX5TPLF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export {firestore};