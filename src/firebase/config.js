import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    // REDACTED FOR SECURITY REASONS.
  };

// INIT FIREBASE
firebase.initializeApp(firebaseConfig);

// INIT FIRESTORE, TIMESTAMP and AUTH
export const projectFirestore = firebase.firestore();
export const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export const projectAuth = firebase.auth();
