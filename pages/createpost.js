import React from "react";
import Head from "next/head";
import CreateAPost from "../components/ShareAPost";
import { db } from "../firebase/firebaseConfig.js";

export default function createPost() {
  return (
    <div>
      <CreateAPost />
    </div>
  );
}
