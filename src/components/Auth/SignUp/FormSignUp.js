import React, {useRef} from 'react';
import SignInStyle from "../SignIn/SignIn.module.css";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {createUser, signUpUpdate} from "../../../redux/AuthReducer";
import {Preload} from "../../Common/Preload/Preload";

const FormSignUp = () => {

    const signUpDisUpdate = useDispatch();
    const createUserDis = useDispatch();

    const auth = useSelector(state => state.auth)

    let emailRef = useRef();
    let passwordRef = useRef();
    let confirmPasswordRef = useRef();

    const signUpUpdateFunc = () => {
        signUpDisUpdate(signUpUpdate(emailRef.current.value,
            passwordRef.current.value,
            confirmPasswordRef.current.value))
    }
    const signUpFunc = () => {
        createUserDis(createUser(emailRef.current.value,
            passwordRef.current.value,
            confirmPasswordRef.current.value))
    }
    const handleSumbit = (e) => {
        e.preventDefault();
    }

    return (
        <form onSubmit={handleSumbit} className={`${SignInStyle.sign} + ${SignInStyle.signup}`}>
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
                <input onChange={signUpUpdateFunc}
                       value={auth.userEmailUpdate}
                       ref={emailRef}
                       type='email'
                       placeholder='Email'>
                </input>
            </div>
            <div className={SignInStyle.sing__input}>
                <input onChange={signUpUpdateFunc}
                       value={auth.userPasswordUpdate}
                       ref={passwordRef}
                       type='password'
                       placeholder='Password'>
                </input>
            </div>
            <div className={SignInStyle.sing__input}>
                <input onChange={signUpUpdateFunc}
                       value={auth.confirmPasswordUpdate}
                       ref={confirmPasswordRef}
                       type='password'
                       placeholder='Confirm Password'>
                </input>
            </div>
            <div className={`${SignInStyle.sing__log_in} + ${SignInStyle.sing__up}`}>
                <input type='submit' disabled={auth.isPreload} value='SIGN UP' onClick={signUpFunc} />
            </div>
            <p className={SignInStyle.other__yes_account}>
                Already have account?
                <span>
                    <NavLink to='/auth'>SIGN IN</NavLink>
                </span>
            </p>
        </form>
    );
};

export {FormSignUp};
