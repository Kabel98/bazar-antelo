import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCgvVbCxN4i4DB4dlJb5s5lpvV42Dz8QyU",
    authDomain: "bazar-antelo.firebaseapp.com",
    projectId: "bazar-antelo",
    storageBucket: "bazar-antelo.appspot.com",
    messagingSenderId: "219835957427",
    appId: "1:219835957427:web:260121e5b33cf88683b0c6"
  };
  
  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);

  