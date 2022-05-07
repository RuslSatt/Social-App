import React from 'react';
import SignInStyle from "../SignIn/SignIn.module.css";
import {HeaderSign} from "../SignIn/HeaderSign";
import {FormSignUp} from "./FormSignUp";
import { Navigate } from "react-router-dom";
import {useSelector} from "react-redux";

const SignUp = () => {
    const isRegister = useSelector(state => state.auth.isRegister)
    if (isRegister) {
        return <Navigate to='/auth'/>
    }
    return (
        <div className={SignInStyle.SignIn}>
            <HeaderSign/>
            <FormSignUp/>
        </div>
    );
};

export {SignUp};
