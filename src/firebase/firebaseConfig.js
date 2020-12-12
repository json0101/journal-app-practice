import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyB1JnfgrHTDIotwK9OMAFpJz3d798hknZY",
    authDomain: "react-app-curso-d9886.firebaseapp.com",
    projectId: "react-app-curso-d9886",
    storageBucket: "react-app-curso-d9886.appspot.com",
    messagingSenderId: "535998129416",
    appId: "1:535998129416:web:68ace4f75d268c2d5438bd"
};
  
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}