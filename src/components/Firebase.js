import firebase from 'firebase'

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyC5kZYDhUb-NzsRY0izgHmD01hSxyo-Qdw",
    authDomain: "portfolio-fab0d.firebaseapp.com",
    databaseURL: "https://portfolio-fab0d.firebaseio.com",
    projectId: "portfolio-fab0d",
    storageBucket: "portfolio-fab0d.appspot.com",
    messagingSenderId: "261268519031",
    appId: "1:261268519031:web:a76c6c04614ddbffcdee72",
    measurementId: "G-FZC0VNVP0X"
  };
  // Initialize Firebase
  var fire = firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default fire