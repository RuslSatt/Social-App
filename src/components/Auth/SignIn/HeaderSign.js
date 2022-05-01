import React from 'react';
import SignInStyle from "./SignIn.module.css";
import Back from "../../../assets/images/auth-back.png";

const HeaderSign = () => {
    return (
        <div className={SignInStyle.welcome}>
            <img src={Back} alt="back"/>
        </div>
    );
};

export {HeaderSign};
