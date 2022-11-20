import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import LoginForm from "../components/LoginForm";

export default function Register() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Redbird</title>
        <meta name="description" content="Social Media RedBird" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LoginForm />

    
    </div>
  );
}
