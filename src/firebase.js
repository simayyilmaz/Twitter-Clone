import firebase from "firebase";
import "firebase/database";




const firebaseConfig = {
    apiKey: "AIzaSyDxj2te5jrwNMvkavvS9udPObgcn4SNiNY",
    authDomain: "twitter-clone-1f5e9.firebaseapp.com",
    projectId: "twitter-clone-1f5e9",
    storageBucket: "twitter-clone-1f5e9.appspot.com",
    messagingSenderId: "1049655624220",
    appId: "1:1049655624220:web:3921cb00cc79588bcb15d9",
    measurementId: "G-EM7FENMXM9"
  };
  
  // Initialize Firebase
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const db = firebase.firestore();

export default db;