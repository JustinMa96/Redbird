
import ShareAPost from "./ShareAPost";
import Posts from "./Posts";
import React, { useEffect, useRef, useState } from "react";
import CreatePost from "../pages/CreatePost";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig.js";
import "../pages/createpost.js"
import styled from "styled-components";
import { useRouter } from "next/router";
 import { getAuth } from "firebase/auth";

export default function Home() {

  const [ loading, setLoading ] = useState(false);
  const currentUser = getAuth();

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
    <div className="HomePage">
        {postList.map((post) => {
          return (
              <div className="post">
              <div className="postHeader">
              <div className="title">
                <h1>{post.title}</h1>
                </div>
                </div>
                <div className="postTextContainer"> {post.postList}</div>
                <h3>@{postContent}</h3>
                </div>

          );
        })}
      </div>
  );
}


