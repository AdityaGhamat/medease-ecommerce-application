import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBDUm70wmHhueZWsY3s5kZbDV8Ee7a81AY",
  authDomain: "medease-7bbb4.firebaseapp.com",
  projectId: "medease-7bbb4",
  storageBucket: "medease-7bbb4.appspot.com",
  messagingSenderId: "20247178563",
  appId: "1:20247178563:web:0a37c8867e2c5b7bca93f6",
};

const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);
export { fireDB, auth };
