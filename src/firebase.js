import firebase from 'firebase'


const firebaseApp=firebase.initializeApp({

  apiKey: "AIzaSyAn9UCs3xGaEGcydTBNAbQGohOSZQjEtes",
  authDomain: "messenger-clone-9285b.firebaseapp.com",
  projectId: "messenger-clone-9285b",
  storageBucket: "messenger-clone-9285b.appspot.com",
  messagingSenderId: "557094680994",
  appId: "1:557094680994:web:963a4bc172f58507141afb",
  measurementId: "G-42ZDRHQ60N"

})

 const db=firebaseApp.firestore();

export default db;
