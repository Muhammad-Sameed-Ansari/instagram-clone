import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDX9MwXb4NfHpz028tK-xr0uK5xmi2Ip-g",
  authDomain: "instagram-clone-rn-ab7c4.firebaseapp.com",
  projectId: "instagram-clone-rn-ab7c4",
  storageBucket: "instagram-clone-rn-ab7c4.appspot.com",
  messagingSenderId: "1063576634376",
  appId: "1:1063576634376:web:e91569c76eabfa758b7dbd"
};

// Initialize Firebase
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()
// const app = initializeApp(firebaseConfig);

export default firebase