import styled from "styled-components";
import React from "react";

const FormCont = styled.form `
    display:flex;
    justify-content:center;
    flex-direction:row;

`;

const LoginInput = styled.input`

`;

export default function LoginForm() {
    
    return <FormCont>
        <h2>Login</h2>
        <label>

            <LoginInput />
        </label>
        
    </FormCont>

    
}