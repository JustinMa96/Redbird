import styled from "styled-components";
import React from "react";

const Cont = styled.div`
display:flex;
justify-content: flex-start;
margin: 10px;
`

const Avatar = styled.img`
border-radius:50%;
width: ${props=>props.width};
height: ${props=>props.height};
`


export default function UserAvatar({
    src="http://placekitten.com/200/300",
    w="150px",
    h="150px",

}){
    return(
        <Cont>
            <Avatar src={src}
            width={w}
            height={h}
            ></Avatar>
        </Cont>
    )
}