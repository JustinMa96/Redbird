import styled from "styled-components";
import React from "react";
import UserAvatar from "./UserAvatar";
import ProfileAvatar from "./ProfileAvatar";

const Cont = styled.div`
display: flex;
justify-content: flex-start;
`
const FollowerCont = styled.div`
width: 100;
height: 400px;
background-color: #E0E0E0;
`
const Text = styled.div`
font-weight: 500;
margin: 10px;
`
const AvatarCont = styled.span`
display: flex;
flex-direction: row;
`



export default function Followers({

}){

    return(
        <Cont>
            <FollowerCont>
                <Text>Followers</Text>
                    <ProfileAvatar></ProfileAvatar>
                    <ProfileAvatar txt="Bing"></ProfileAvatar>
                    <ProfileAvatar txt="Bong"></ProfileAvatar>
            </FollowerCont>
        </Cont>
    )
}