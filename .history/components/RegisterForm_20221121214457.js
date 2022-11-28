import styled from "styled-components";
import React from "react";
import { useRouter } from "next/router";
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
import auth from '../firebase/firebaseConfig';


const RegCont = styled.div`
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

const RegInput = styled.input`
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

export default function RegisterForm({
    header="Register Your Account"
}) {
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");

    const [user, setUser] = useState({});

  const register = async () => {
    try {
      setRegisterEmail("");
      setRegisterPassword("");
      const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
      console.log(user);
    } catch(error) {
      console.log(error.message)
    }
  }
  
    React.useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => setUser(currentUser))
    }, [])

    const r = useRouter();
    const authorization = auth;

    const handleSubmit = event => {
        event.preventDefault();
        event.target.reset();
    }
    
    return <RegCont>
    
    <FormCont onSubmit={handleSubmit}>
        <h2>{header}</h2>
        <label>
            Email
            <RegInput placeholder="Type Email..."
            onChange={(event) => {
                setRegisterEmail(event.target.value)
            }}
            name="Email"/>
        </label>
        <label>
            Password
            <RegInput placeholder="Type Password..."
            onChange={(event) => {
                setRegisterPassword(event.target.value)
            }} name="password"/>
        </label>
        <label>
            Confirm Password
            <RegInput placeholder="Re-type Password..."/>
        </label>
        <SubmitButton 
        onClick={register}
        type="submit" value="Register" />

        <h6>Already a user?</h6>
        <SubheadTwo onClick={() => r.push("/login")} >Login now!</SubheadTwo>
        
    </FormCont>
   
    
</RegCont>

    
}