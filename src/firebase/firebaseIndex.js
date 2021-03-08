import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/app'

var firebaseConfig = {
    apiKey: "AIzaSyAM2YJJeWLl4KPJTnMl9aDz2H7dSWcg9A0",
    authDomain: "login-15f95.firebaseapp.com",
    projectId: "login-15f95",
    storageBucket: "login-15f95.appspot.com",
    messagingSenderId: "664992186971",
    appId: "1:664992186971:web:694f88217c8b8eb1b3757e",
    measurementId: "G-T1CEB33VCT"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  firebase.auth()

  export default {
    firebaseConfig, 
  }