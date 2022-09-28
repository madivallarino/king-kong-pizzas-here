import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyB-eyTc7IuyLwrwCfy7-uwIMADvAkbr-vE",
    authDomain: "slack-clone-number2.firebaseapp.com",
    projectId: "slack-clone-number2",
    storageBucket: "slack-clone-number2.appspot.com",
    messagingSenderId: "731111377528",
    appId: "1:731111377528:web:979b18521c7234d0f57b8d"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };