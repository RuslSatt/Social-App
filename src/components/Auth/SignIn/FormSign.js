import React, {useRef} from 'react';
import SignInStyle from "./SignIn.module.css";
import {signIn, updateFormSignIn} from "../../../redux/AuthReducer";
import {useDispatch, useSelector} from "react-redux";
import {Preload} from "../../Common/Preload/Preload";

const FormSign = () => {

    const auth = useSelector(state => state.auth);

    const updateFormDispatch = useDispatch();
    const signInDispatch = useDispatch();

    let emailRef = useRef();
    let passwordRef = useRef();

    const callUpdateForm = () => {
        updateFormDispatch(updateFormSignIn(emailRef.current.value, passwordRef.current.value))
    }

    const callSignIn = () => {
        signInDispatch(signIn(emailRef.current.value, passwordRef.current.value))
    }

    const handleSumbit = (e) => {
        e.preventDefault();
    }

    return (
        <form onSubmit={handleSumbit} className={SignInStyle.sign}>
            {
                auth.error !== '' ?
                    <div className={SignInStyle.error}>
                        <span>{auth.error}</span>
                    </div> :
                    ''
            }
            {
                auth.isPreload === true ?
                    <div className={SignInStyle.preload}>
                        <Preload/>
                    </div> :
                    ''
            }
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
                <input onClick={callSignIn} type='submit' value='LOG IN' />
            </div>
        </form>
    );
};

export {FormSign};
