import ShareAPost from "./ShareAPost";
import Posts from "./Posts";
import React, { useEffect, useRef, useState } from "react";
import CreatePost from "../pages/CreatePost";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig.js";
import "../pages/createpost.js";
import styled from "styled-components";
import { useRouter } from "next/router";
import { getAuth } from "firebase/auth";
import CreateAPost from "./ShareAPost";
import PostFrame from "./Posts";

const Button = styled.button`
  algin-content: center;
  background-color: #d9d9d9;
  color: black;
  border: 0px;
  font-size: 12pt;
  font-weight: bold;
  border-radius: 8px;
  margin: 30px;
  padding: 20px;
`;

export default function Home() {
  const [loading, setLoading] = useState(false);
  const currentUser = getAuth();

  const emailRef = useRef();
  const passwordRef = useRef();
  const r = useRouter();

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
          <PostFrame username={post.writer} usercontent={post.userTweet} />
        );
      })}

      <Button onClick={() => r.push("/createpost")}>Creat My Post</Button>
    </div>
  );
}
