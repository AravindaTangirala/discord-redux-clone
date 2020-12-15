import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA51FTy96sA5SVAHqyTAF_KUo8K45_OseA",
  authDomain: "discord-clone-redux-bf7b3.firebaseapp.com",
  databaseURL: "https://discord-clone-redux-bf7b3.firebaseio.com",
  projectId: "discord-clone-redux-bf7b3",
  storageBucket: "discord-clone-redux-bf7b3.appspot.com",
  messagingSenderId: "658756714414",
  appId: "1:658756714414:web:b210d6d326e886f0a1123f",
  measurementId: "G-WFJB2D0W26",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
export default db;
