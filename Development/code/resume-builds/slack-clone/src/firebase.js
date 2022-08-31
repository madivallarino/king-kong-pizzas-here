// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyByDKVRMGPiRj8-QNxENbuGgNaH5KQ6d4I",
    authDomain: "slack-clone-666.firebaseapp.com",
    projectId: "slack-clone-666",
    storageBucket: "slack-clone-666.appspot.com",
    messagingSenderId: "394011304140",
    appId: "1:394011304140:web:18717c44fe44d539ffa269",
    measurementId: "G-ZECM63DCQS"
  };

  const firebaseApp = firebase.initialzeApp(firebaseConfig);
  const db =  firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider, db};