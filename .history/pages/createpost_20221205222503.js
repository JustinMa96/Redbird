import React, { useState, useEffect } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase/firebaseConfig.js";
import { useRouter } from 'next/router'
import "home.js"


function CreatePost() {
  const [postContent, setPostContent] = useState("");
  const postsCollectionRef = collection(db, "posts");

  const router = useRouter()

  const createPost = async () => {
    await addDoc(postsCollectionRef, {
      postContent,
      writer: { user: auth.currentUser.email, id: auth.currentUser.uid },
    });
    router.push("/Home");
  };


  return (
    <div className="createPost">
      <div className="createPostBox">
        <h1>Create A Tweet</h1>
        <div className="postContent">
          <label> Content:</label>
          <textarea placeholder="What's Happening?"
            onChange={(event) => {
              setPostContent(event.target.value);
            }}/>
        </div>
        <button onClick={createPost}> Tweet </button>
      </div>
    </div>
  );
}

export default CreatePost;