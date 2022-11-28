import styled from "styled-components";
import React from "react";
import { useRouter } from "next/router";
import Button from "./Button";
import UserAvatar from "./UserAvatar";


const Cont = styled.div`
background-color: white;
color: black;
border: 2px solid black;
width: 50rem;
height: 20rem;
padding: 20px;
margin: 20px;
`
const UserCont = styled.div`
display: flex;
flex-direction: row;
align-items: center;
`

const ButtonCont = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-end;
`


export default function PostFrame({

}) {

    return (
        <Cont>

            <UserCont>
                <UserAvatar></UserAvatar>
                <p>username</p>
            </UserCont>

            <ButtonCont>
                <Button name="Post"></Button>
            </ButtonCont>
        </Cont>
    )
}