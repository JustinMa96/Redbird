import styled from "styled-components";
import React from "react";

const LoginCont = styled.div`
    display:flex;
    justify-content:center;
`;

const FormCont = styled.form `
    display:flex;
    justify-content:center;
    flex-direction:column;


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