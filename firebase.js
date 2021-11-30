import firebase from "firebase";

const config = {
    apiKey: "AIzaSyBAPAW3HO-DnIrOKh3a9lGwbKgcaFlyAKw",
    authDomain: "jamebase-31ebe.firebaseapp.com",
    projectId: "jamebase-31ebe",
    storageBucket: "jamebase-31ebe.appspot.com",
    messagingSenderId: "420170254358",
    appId: "1:420170254358:web:c4db713f961157da3c4d37",
    measurementId: "G-LJVRGCL7RS"
};


export default !firebase.apps.length
  ? firebase.initializeApp(config)
  : firebase.app();
