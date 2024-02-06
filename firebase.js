import firebase from "firebase/app";
import "firebase/firestore";




// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD-r8SVlq_X7yvseQCU1VPYEqVZS32x9jE",
    authDomain: "interview-perfect-2ad56.firebaseapp.com",
    databaseURL: "https://interview-perfect-2ad56-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "interview-perfect-2ad56",
    storageBucket: "interview-perfect-2ad56.appspot.com",
    messagingSenderId: "257255988159",
    appId: "1:257255988159:web:85b1887abc954c60ba1f0a",
    measurementId: "G-GGXG2YTWFT"
  };
  
  firebase.initializeApp(firebaseConfig);

  export default firebase;