import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import ShareAPost from "../components/ShareAPost";
import Posts from "../components/Posts";
import React, { useEffect, useRef, useState } from "react";
import CreatePost from "./CreatePost";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig.js";

export default function Home() {

  const [ loading, setLoading ] = useState(false);
  //const currentUser = useAuth();

  const emailRef = useRef();
  const passwordRef = useRef();

  async function handleLogout() {
    setLoading(true);
    try {
      await logout();
      window.location = "/";
    } catch {
      alert("Error!");
    }
    setLoading(false);
  }

  const [postList, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "posts");


  useEffect(() => {
    const getPosts = async () => {
    const data = await getDocs(postsCollectionRef);
    setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

    getPosts();
  });

  return (
    <div id="main">
      <CreatePost />

      <div id="Post">
        {postList.map((post) => {
          return (
              <div>
                  <h1> {post.postContent}</h1>
                  <p>by {post.writer.user}</p>
              </div>
          );
        })}
      </div>
    </div>
  );
}


