// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAPAW3HO-DnIrOKh3a9lGwbKgcaFlyAKw",
  authDomain: "jamebase-31ebe.firebaseapp.com",
  projectId: "jamebase-31ebe",
  storageBucket: "jamebase-31ebe.appspot.com",
  messagingSenderId: "420170254358",
  appId: "1:420170254358:web:c4db713f961157da3c4d37",
  measurementId: "G-LJVRGCL7RS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);