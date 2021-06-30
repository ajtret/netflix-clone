import firebase from 'firebase/app';

import "firebase/auth" ;
import "firebase/firestore";




const firebaseConfig = {
    apiKey: "AIzaSyBJCzAGgH5XuQuyK3Ec4mUpP1goVk1mtkQ",
    authDomain: "netflix-app-3309a.firebaseapp.com",
    projectId: "netflix-app-3309a",
    storageBucket: "netflix-app-3309a.appspot.com",
    messagingSenderId: "300102474878",
    appId: "1:300102474878:web:5d280a08b1c2e48f4b4c2f"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig) ;
  const db= firebaseApp.firestore();
  const auth= firebase.auth();
  export {auth} ;
  export default db;
  