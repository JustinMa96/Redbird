import "../styles/globals.css";
import { FirebaseApp } from "firebase/app";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from '../firebase/firebaseConfig';

export default function MyApp() {
  

  return (
    <div className={styles.container}>
      <Head>
        <title>Redbird</title>
        <meta name="description" content="Social Media RedBird" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 style={{display:'flex', justifyContent:'center'}}>Welcome to RedBird!</h1>

      <RegisterForm />

    
    </div>
  );
}



