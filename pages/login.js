import Head from "next/head";
import React from "react";
import LoginForm from "../components/LoginForm";

export default function Login() {
  return (
    <div>
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

      <LoginForm />
    </div>
  );
}
