import styled from "styled-components";
import React from "react";
import UserAvatar from "./UserAvatar";

const Cont = styled.div`
`
const Text = styled.div`
display: flex;
margin-left: 10px;
margin-top: 25px;
font-weight: 600;
`
const AvatarCont = styled.div`
display: flex;
flex-direction: row;
`
const Button = styled.button`
height: 30px;
width: 100px;
margin-left: 10px;
`


export default function ProfileAvatar({
    txt="Michael",
    src="http://placekitten.com/200/300"
}){
    return(
        <Cont>
            <AvatarCont>
            <UserAvatar w="50px" h="50px"></UserAvatar>
            <Text>{txt}</Text>
            </AvatarCont>
            <Button>Follow</Button>
        </Cont>
    )
}