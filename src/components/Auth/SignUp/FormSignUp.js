import React, {useRef} from 'react';
import SignInStyle from "../SignIn/SignIn.module.css";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {createUser, signUpUpdate} from "../../../redux/AuthReducer";
import {Preload} from "../../Common/Preload/Preload";


const FormSignUp = () => {

    const signUpDisUpdate = useDispatch()
    const createUserDis = useDispatch()

    const userEmailUpdate = useSelector(state => state.auth.userEmailUpdate);
    const userPasswordUpdate = useSelector(state => state.auth.userPasswordUpdate);
    const confirmPasswordUpdate = useSelector(state => state.auth.confirmPasswordUpdate)
    const isPreload = useSelector(state => state.auth.isPreload)
    const error = useSelector(state => state.auth.error)

    let emailRef = useRef();
    let passwordRef = useRef()
    let confirmPasswordRef = useRef()

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
        e.preventDefault()
    }

    return (
        <form onSubmit={handleSumbit} className={`${SignInStyle.sign} + ${SignInStyle.signup}`}>
            {
                error !== '' ?
                    <div className={SignInStyle.error}>
                        <span>{error}</span>
                    </div> :
                    ''
            }
            {
                isPreload === true ?
                    <div className={SignInStyle.preload}>
                        <Preload/>
                    </div> :
                    ''
            }
            <div className={SignInStyle.sing__input}>
                <input onChange={signUpUpdateFunc}
                       value={userEmailUpdate}
                       ref={emailRef}
                       type='email'
                       placeholder='Email'>
                </input>
            </div>
            <div className={SignInStyle.sing__input}>
                <input onChange={signUpUpdateFunc}
                       value={userPasswordUpdate}
                       ref={passwordRef}
                       type='password'
                       placeholder='Password'>
                </input>
            </div>
            <div className={SignInStyle.sing__input}>
                <input onChange={signUpUpdateFunc}
                       value={confirmPasswordUpdate}
                       ref={confirmPasswordRef}
                       type='password'
                       placeholder='Confirm Password'>
                </input>
            </div>
            <div className={`${SignInStyle.sing__log_in} + ${SignInStyle.sing__up}`}>
                <input type='submit' disabled={isPreload} value='SIGN UP' onClick={signUpFunc} />
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
