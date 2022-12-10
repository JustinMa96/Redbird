import styled from "styled-components";
import React from "react";
import { useRouter } from "next/router";
import UserAvatar from "./UserAvatar";
import { db, auth } from "../firebase/firebaseConfig.js";
import { addDoc, collection, doc, getDoc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { onAuthStateChanged } from "firebase/auth";

const Cont = styled.div`
  background-color: white;
  color: black;
  border: 2px solid black;
  width: 50rem;
  height: 22rem;
  padding: 20px;
  margin: 20px;
`;
const UserCont = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const TweetInput = styled.input`
  display: flex;
  height: 5rem;
  width: 45rem;
  margin: 1rem;
`;

const ButtonCont = styled.div`
  display: flex;
  margin: 20px;
  flex-direction: row;
  justify-content: flex-end;
`;

const UserName = styled.p`
  font-size: 50px;
  margin: 10px;
`;

const Button = styled.button`
  algin-content: center;
  background-color: #d9d9d9;
  color: black;
  border: 0px;
  font-size: 12pt;
  font-weight: bold;
  width: 100px;
  height: 40px;
  border-radius: 8px;
  margin: 30px;
`;

export default function CreateAPost({}) {
  const [username, getUserName] = useState();
  const [useruid, getUserUid] = useState();

  const [userTweet, setUserTweet] = useState();

  const postsCollectionRef = collection(db, "posts");
  const r = useRouter();

  React.useEffect(() => {
    const getUser = async () => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const uid = user.uid;
          console.log(uid);
          getUserUid(uid);
        } else {
          console.log("User is Signout");
        }
      });
      const docRef = doc(db, "users", useruid);
      const docSnap = await getDoc(docRef);
      const docs = docSnap.data();
      console.log(docs.name);
      getUserName(docs.name);
    };

    getUser();
  }, []);

  const handlesubmit = async () => {
    await addDoc(postsCollectionRef, {
      userTweet,
      reportTimes: 0,
      writer: username,
    });

    r.push("/home");
  };

  return (
    <Cont>
      <UserCont>
        <UserAvatar></UserAvatar>
        <UserName>{username}</UserName>
      </UserCont>

      <TweetInput
        placeholder="Enter your Tweet..."
        maxLength={300}
        minLength={1}
        onChange={(event) => {
          setUserTweet(event.target.value);
        }}
      ></TweetInput>

      <ButtonCont>
        <Button onClick={handlesubmit}>Post</Button>
      </ButtonCont>
    </Cont>
  );
}
