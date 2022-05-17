import React from "react";
import SignInStyle from "./SignIn.module.css";
import { HeaderSign } from "./HeaderSign";
import { FormSign } from "./FormSign";
import { OtherSign } from "./OtherSign";

const SignIn = (props) => {
    return (
        <div className={SignInStyle.SignIn}>
            <HeaderSign />
            <FormSign />
            <OtherSign />
        </div>
    );
};

export { SignIn };
