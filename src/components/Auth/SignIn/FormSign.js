import React, {useRef} from 'react';
import SignInStyle from "./SignIn.module.css";
import {updateFormSignIn} from "../../../redux/AuthReducer";
import {useDispatch, useSelector} from "react-redux";

const FormSign = () => {

    const auth = useSelector(state => state.auth);

    const updateFormDispatch = useDispatch();

    let emailRef = useRef();
    let passwordRef = useRef();

    const callUpdateForm = () => {
        updateFormDispatch(updateFormSignIn(emailRef.current.value, passwordRef.current.value))
    }

    return (
        <form className={SignInStyle.sign}>
            <div className={SignInStyle.sing__input}>
                <input ref={emailRef} onChange={callUpdateForm} value={auth.userEmailUpdate} type='email' placeholder='Email'>

                </input>
            </div>
            <div className={SignInStyle.sing__input}>
                <input ref={passwordRef} onChange={callUpdateForm} value={auth.userPasswordUpdate} type='password' placeholder='Password'>

                </input>
            </div>
            <div className={SignInStyle.sign__forgot_password}>
                <button>
                    FORGOT PASSWORD
                </button>
            </div>
            <div className={SignInStyle.sing__log_in}>
                <input type='submit' value='LOG IN' />
            </div>
        </form>
    );
};

export {FormSign};
