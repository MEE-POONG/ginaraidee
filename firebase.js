import firebase from "firebase";

const config = {
  apiKey: "AIzaSyA9KrsQ2Y96MTU5fpDWZN3Cm51wuizbFTc",
  authDomain: "testrandom-menu.firebaseapp.com",
  databaseURL: "https://testrandom-menu-default-rtdb.firebaseio.com",
  projectId: "testrandom-menu",
  storageBucket: "testrandom-menu.appspot.com",
  messagingSenderId: "6738539635",
  appId: "1:6738539635:web:7296bdac228c34016f2606",
  measurementId: "G-FCP041Z853"
};


export default !firebase.apps.length
  ? firebase.initializeApp(config)
  : firebase.app();
