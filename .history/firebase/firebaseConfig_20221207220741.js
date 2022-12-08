
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
import {getFirestore}from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAThcXPNknGK2G6hD3eSya-vCX5oCy2GA4",
  authDomain: "redbird-d0711.firebaseapp.com",
  projectId: "redbird-d0711",
  storageBucket: "redbird-d0711.appspot.com",
  messagingSenderId: "170890361789",
  appId: "1:170890361789:web:f47ae3f4516d9f7e7b30d4",
};


const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();


