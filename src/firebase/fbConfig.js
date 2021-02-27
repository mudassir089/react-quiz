import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyDSuZNp5ojMn5_Pb60nKjm5uU3VAy2KrI8",
  authDomain: "quiz-react-98330.firebaseapp.com",
  projectId: "quiz-react-98330",
  storageBucket: "quiz-react-98330.appspot.com",
  messagingSenderId: "508387678514",
  appId: "1:508387678514:web:87f25fc64be53585005f2b",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
