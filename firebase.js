import firebase from "firebase";

const config = {
    apiKey: "AIzaSyCKIzMOEpcaCHJT3ychEw4TzMNBEN5-_qs",
    authDomain: "ginaraidee-a9c7b.firebaseapp.com",
    projectId: "ginaraidee-a9c7b",
    storageBucket: "ginaraidee-a9c7b.appspot.com",
    messagingSenderId: "873696716888",
    appId: "1:873696716888:web:42e87718a44eea1928422d",
    measurementId: "G-TNMG3NLFRF",
    databaseURL: "https://ginaraidee-e971c-default-rtdb.firebaseio.com/"
};


export default !firebase.apps.length
  ? firebase.initializeApp(config)
  : firebase.app();
