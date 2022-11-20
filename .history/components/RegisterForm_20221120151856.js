import styled from "styled-components";
import React from "react";

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

const SubheadTwo = styled.h5`
    padding-top:-50px;
`;

export default function RegisterForm({
    header="Register Your Account"
}) {
    
    return <RegCont>
    
    <FormCont>
        <h2>{header}</h2>
        <label>
            Email
            <RegInput placeholder="Type Email..." name="Email"/>
        </label>
        <label>
            Password
            <RegInput placeholder="Type Password..." name="password"/>
        </label>
        <label>
            Confirm Password
            <RegInput placeholder="Re-type Password..."/>
        </label>
        <SubmitButton type="submit" value="Register" />

        <h5>Already a user?</h5>
        <SubheadTwo>Login Now!</SubheadTwo>
        
    </FormCont>
    
</RegCont>

    
}