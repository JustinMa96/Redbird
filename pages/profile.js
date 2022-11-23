import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import ProfileHeader from "../components/ProfileHeader";
import UserAvatar from "../components/UserAvatar";
import Followers from "../components/Followers";
import Following from "../components/Following";
import styles from "../styles/Home.module.css";

const Cont = styled.div`
display: flex;
justify-content: space-evenly;
`

export default function Profile() {
  return (
    <div>
      <UserAvatar></UserAvatar>
      <ProfileHeader></ProfileHeader>
      <Cont>
      <Followers></Followers>
      <Following></Following>
      </Cont>
    </div>
  );
}
