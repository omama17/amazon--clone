import firebase from 'firebase';
const firebaseApp = firebase.initializeApp ({
    apiKey: "AIzaSyD7Wb-WWd5jNhaZag5BLXP6aEcLkJenmb0",
    authDomain: "clone-ce17f.firebaseapp.com",
    databaseURL: "https://clone-ce17f.firebaseio.com",
    projectId: "clone-ce17f",
    storageBucket: "clone-ce17f.appspot.com",
    messagingSenderId: "1019018107096",
    appId: "1:1019018107096:web:fa31e23a9e6b0e47f39fad",
    measurementId: "G-WN5T2QHR13"
  });
  

  const auth = firebase.auth();
  export {auth};