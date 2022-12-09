import styled from "styled-components";
import React from "react";
import { useState } from "react";
import onAuthStateChanged from 'firebase/auth';
import { auth } from "../firebase/firebaseConfig";

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

    

    return(
        <Cont>
            <HText>{txt}</HText>
            <SText>{stxt}</SText>
        </Cont>
    )
}