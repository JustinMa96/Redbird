import styled from "styled-components";
import React from "react";
import { useRouter } from "next/router";
import { auth } from '../firebase/firebaseConfig';
import { useState } from "react";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";

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

    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const [user, setUser] = useState({});

    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
            console.log(user);
        } catch(error) {
            console.log(error.message);
        }
    }

    React.useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => setUser(currentUser))
    }, [])

    const r = useRouter();
    const authorization = auth;
    
    return <LoginCont>
    
    <FormCont onSubmit={handleSubmit}>
        <h2>{header}</h2>
        <label>
            Email
            <LoginInput 
            onChange={(event) => {
                setLoginEmail(event.target.value)
            }}
            placeholder="Type Email..." name="Email"/>
        </label>
        <label>
            Password
            <LoginInput 
            onChange={(event) => {
                setLoginPassword(event.target.value)}}
                placeholder="Type Password..." name="password"/>
        </label>
        <SubmitButton 
        onClick={login}
        type="submit" value="Login" />

        <h6>New user?</h6>
        <SubheadTwo onClick={() => r.push("/register")}>Register your account now!</SubheadTwo>
        
    </FormCont>
    <div>
        {user?.email}
    </div>
    
</LoginCont>

    
}