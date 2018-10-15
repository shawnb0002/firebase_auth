import firebase from "firebase";
//import firebase from "firebase";

// Initialize Firebase
const config = {
  apiKey: "AIzaSyDWnAz9inSbJmtlnj7jfDSjgu5O23wh7ng",
  authDomain: "firelogin-c2c40.firebaseapp.com",
  databaseURL: "https://firelogin-c2c40.firebaseio.com",
  projectId: "firelogin-c2c40",
  storageBucket: "firelogin-c2c40.appspot.com",
  messagingSenderId: "619165218926"
};
const Fire = firebase.initializeApp(config);

export default Fire;
