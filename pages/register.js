import Head from "next/head";
import styles from "../styles/Home.module.css";
import RegisterForm from "../components/RegisterForm";

export default function Register() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Redbird</title>
        <meta name="description" content="Social Media RedBird" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: 150,
          color: "red",
        }}
      >
        Welcome to RedBird!
      </h1>

      <RegisterForm />
    </div>
  );
}
