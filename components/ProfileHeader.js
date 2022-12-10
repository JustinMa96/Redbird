import styled from "styled-components";
import React from "react";
import { useState } from "react";
import { db, auth } from "../firebase/firebaseConfig.js";
import { addDoc, collection, doc, getDoc, updateDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

const Cont = styled.div`
  margin: 20px;
`;

const HText = styled.div`
  font-size: 25px;
  font-weight: bold;
`;
const SText = styled.div`
  font-size: 18px;
  color: #808080;
`;

export default function ProfileHeader({}) {
  const [username, getUserName] = useState();
  const [useruid, getUserUid] = useState();

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

  return (
    <Cont>
      <HText>{username}</HText>
    </Cont>
  );
}
