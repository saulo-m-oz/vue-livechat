import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB0nSQlhJrOEr2prUtyqUga6fPrnBwINBw",
    authDomain: "livechat-app-456a8.firebaseapp.com",
    projectId: "livechat-app-456a8",
    storageBucket: "livechat-app-456a8.appspot.com",
    messagingSenderId: "278085891119",
    appId: "1:278085891119:web:3493a113b423845682c2da"
  };

// INIT FIREBASE
firebase.initializeApp(firebaseConfig);

// INIT FIRESTORE, TIMESTAMP and AUTH
export const projectFirestore = firebase.firestore();
export const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export const projectAuth = firebase.auth();