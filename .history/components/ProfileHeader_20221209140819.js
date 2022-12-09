import styled from "styled-components";
import React from "react";
import { useState } from "react";

const Cont = styled.div`
margin: 20px
`

const HText = styled.div`
font-size: 25px;
font-weight: bold;
`
const SText = styled.div`
font-size: 18px;
color: #808080;
`

export default function ProfileHeader({
    txt="Bob",
    stxt="@boblovescoding"
}){

    const [user, setUser] = useState({});

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
    })

    return(
        <Cont>
            <HText>{txt}</HText>
            <SText>@{stxt}</SText>
        </Cont>
    )
}