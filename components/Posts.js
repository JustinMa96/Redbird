import styled from "styled-components";
import React from "react";
import { useRouter } from "next/router";
import UserAvatar from "./UserAvatar";
import { useState } from "react";

const Cont = styled.div`
  background-color: white;
  color: black;
  border: 2px solid black;
  width: 50rem;
  height: 25rem;
  padding: 20px;
  margin: 20px;
`;
const UserCont = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ButtonCont = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;
const ContentCont = styled.div`
  background-color: white;
  color: black;
  display: flex;
  height: 5rem;
  width: 45rem;
  margin: 1rem;
  border: 1px solid black;
`;

const ContentEditor = styled.textarea`
  background-color: white;
  color: black;
  display: flex;
  height: 5rem;
  width: 45rem;
  margin: 1rem;
  border: 1px solid black;
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

const UserName = styled.p`
  font-size: 50px;
  margin: 10px;
`;

export default function PostFrame({ username = "sss", usercontent = "ddddd" }) {
  const [edit, setEdit] = useState(false);
  const [text, textChange] = useState();

  const handleedit = () => {
    setEdit(!edit);
  };
  const handlesubmit = () => {
    setEdit(!edit);
  };

  return (
    <Cont>
      <UserCont>
        <UserAvatar></UserAvatar>
        <UserName>{username}</UserName>
      </UserCont>

      {edit === false && <ContentCont>{usercontent}</ContentCont>}

      {edit === true && (
        <ContentEditor
          onChange={(event) => {
            textChange(event.target.value);
          }}
        >
          {usercontent}
        </ContentEditor>
      )}

      <ButtonCont>
        {edit === false && <Button onClick={handleedit}>Edit</Button>}
        {edit === true && <Button onClick={handlesubmit}>Submit</Button>}
        <Button>Report</Button>
      </ButtonCont>
    </Cont>
  );
}
