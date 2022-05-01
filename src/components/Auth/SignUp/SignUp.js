import React from 'react';
import SignInStyle from "../SignIn/SignIn.module.css";
import {HeaderSign} from "../SignIn/HeaderSign";
import {FormSignUp} from "./FormSignUp";

const SignUp = () => {
    return (
        <div className={SignInStyle.SignIn}>
            <HeaderSign/>
            <FormSignUp/>
        </div>
    );
};

export {SignUp};
