import styled from "styled-components";
import React from "react";

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
    
`;

export default function LoginForm({
    header="Login"
}) {
    
    return <LoginCont>
    
    <FormCont>
        <h2>{header}</h2>
        <label>
            Email
            <LoginInput placeholder="Type Email..." name="Email"/>
        </label>
        <label>
            Password
            <LoginInput placeholder="Type Password..." name="password"/>
        </label>
        <SubmitButton type="submit" value="login" />
        
    </FormCont>
    
</LoginCont>

    
}