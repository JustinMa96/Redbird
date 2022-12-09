import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import ProfileHeader from "../components/ProfileHeader";
import UserAvatar from "../components/UserAvatar";
import Followers from "../components/Followers";
import Following from "../components/Following";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import onAuthStateChanged from 'firebase/auth';
import { auth } from "../firebase/firebaseConfig";
import { getAuth } from "firebase/auth";
import currentUser from 'firebase/auth';

const Cont = styled.div`
display: flex;
justify-content: space-evenly;
`

export default function Profile() {

  
  
  const auth = getAuth();
  const user = auth.currentUser;

  if (user) {
    <div>
      <UserAvatar></UserAvatar>
      <ProfileHeader txt={`${user.email}`}></ProfileHeader>
      <Cont>
      <Followers></Followers>
      <Following></Following>
      </Cont>
    </div>
  } else {

  }

  


  return (
    <div>
      <UserAvatar></UserAvatar>
      <ProfileHeader txt={`${currentUser}`}></ProfileHeader>
      <Cont>
      <Followers></Followers>
      <Following></Following>
      </Cont>
    </div>
  );
}
