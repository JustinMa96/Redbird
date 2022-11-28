import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import auth from '../firebase/firebaseConfig';

export default function Register() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const register = async () => {
    try {

    } catch(error) {
      console.log(error.message)
    }
  }
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Redbird</title>
        <meta name="description" content="Social Media RedBird" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <RegisterForm />

    
    </div>
  );
}
