import styled from "styled-components";
import React from "react";
import { useRouter } from "next/router"; 


const PostButton = styled.button`
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
`

export default function Button({name

}){

    return(
        <PostButton>{name ? name : 'Button'}</PostButton>
    )
}