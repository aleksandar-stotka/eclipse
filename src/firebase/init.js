import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBPjVSnq0Dar0aDAT64d-XkJ6B_aMneSfU",
  authDomain: "eclipse-interactive.firebaseapp.com",
  projectId: "eclipse-interactive",
  storageBucket: "eclipse-interactive.appspot.com",
  messagingSenderId: "931461415861",
  appId: "1:931461415861:web:9d5889e1a0d4d05a608ffc",
};

firebase.initializeApp(firebaseConfig);
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

export { projectFirestore, projectAuth };
