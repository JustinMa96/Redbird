import styled from "styled-components";
import React from "react";

const LoginCont = styled.div`
    display:flex;
    justify-content:center;
    padding-top:50%;
`;

const FormCont = styled.form `
    display:flex;
    justify-content:center;
    flex-direction:column;
    align-items:center;


`;

const LoginInput = styled.input`

`;

export default function LoginForm() {
    
    return <LoginCont>
    
    <FormCont>
        <h2>Login</h2>
        <label>
            Email
            <LoginInput placeholder="Type Email..." name="Email"/>
        </label>
        <label>
            <LoginInput />
        </label>
        <input type="submit" value="submit" />
        
    </FormCont>
    
</LoginCont>

    
}