import styled from "styled-components";
import React from "react";
import { useRouter } from "next/router";
import { auth } from '../firebase/firebaseConfig';
import { useState, useEffect } from "react";
import { onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

const LoginCont = styled.div`
    display:flex;
    justify-content:center;
    padding-top:30%;
    
    
`;

const FormCont = styled.form `
    display:flex;
    justify-content:center;
    flex-direction:column;
    align-items:center;


`;

const LoginInput = styled.input`
    display:flex;
    margin-top:5px;
    margin-bottom:5px;
    border-radius:5px;
    height:30px;
`;

const SubmitButton = styled.input`
    display:flex;
    margin-top:15px;
    border-radius:5px;
    width:70px;
    justify-content:center;
    padding:2px;
    font-weight:bold;
    
`;

const SubheadTwo = styled.h6`
    margin-top:-20px;
    color:blue;
`;


export default function LoginForm({
    header="Login"
}) { 

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    
    
    const LoginUser = async () => {
        const auth = getAuth();
       const signIn = await signInWithEmailAndPassword(auth, email, password)
       
       console.log("signed in", signIn.user.uid);
    }
    
    return <LoginCont>
    
    <FormCont onSubmit={handleSubmit}>
        <h2>{header}</h2>
        <label>
            Email
            <LoginInput 
            value={email}
            placeholder="Type Email..." name="Email"/>
        </label>
        <label>
            Password
            <LoginInput 
            value={password}
                placeholder="Type Password..." name="password"/>
        </label>
        <SubmitButton 
        onClick={LoginUser}
        type="submit" value="Login" />

        <h6>New user?</h6>
        <SubheadTwo onClick={() => r.push("/register")}>Register your account now!</SubheadTwo>
        
    </FormCont>
    
    
</LoginCont>

    
}