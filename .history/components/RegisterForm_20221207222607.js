import styled from "styled-components";
import React from "react";
import { useRouter } from "next/router";
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";
import auth from '../firebase/firebaseConfig';
import { Certificate } from "crypto";



const RegCont = styled.div`
    display:flex;
    justify-content:center;
    padding-top:30%;
    flex-direction:column;
    align-items:center;
    
`;

const FormCont = styled.form `
    display:flex;
    justify-content:center;
    flex-direction:column;
    align-items:center;


`;

const RegInput = styled.input`
    display:flex;
    margin-top:5px;
    margin-bottom:5px;
    border-radius:5px;
    height:30px;
`;

const SubmitButton = styled.button`
    display:flex;
    margin-top:15px;
    border-radius:5px;
    width:70px;
    height:25px;
    justify-content:center;
    padding:2px;
    font-weight:bold;
    
    
`;

const SubheadTwo = styled.h6`
    margin-top:-20px;
    color:blue;
`;

export default function RegisterForm({
    header="Register Your Account"
}) {
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");

   const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
            console.log(user)
        } catch (error) {
            console.log(error.message);
        }
   };
    
    
    return <RegCont>
    
   
        <h2>{header}</h2>

        
            <RegInput placeholder="Type Email..."
            onChange={(event) => {
                setRegisterEmail(event.target.value)
            }}
            name="Email"/>
     
   
     
            <RegInput placeholder="Type Password..."
            onChange={(event) => {
                setRegisterPassword(event.target.value)
            }} name="password"/>
     
   
         
            <RegInput placeholder="Re-type Password..."/>
   
        <SubmitButton
        onClick={register}
        />

        <h6>Already a user?</h6>
        <SubheadTwo onClick={() => r.push("/login")} >Login now!</SubheadTwo>
        

   
    
</RegCont>

    
}