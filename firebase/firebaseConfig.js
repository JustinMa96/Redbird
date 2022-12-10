import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDRmq-cbY9473P3eqtfPbiT8X8FhrT0J24",
  authDomain: "redbird-2.firebaseapp.com",
  projectId: "redbird-2",
  storageBucket: "redbird-2.appspot.com",
  messagingSenderId: "707819478692",
  appId: "1:707819478692:web:46ae9ea7de8ece946f9031",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
