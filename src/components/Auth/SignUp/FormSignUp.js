import React, {useRef} from 'react';
import SignInStyle from "../SignIn/SignIn.module.css";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {errorSign, signUp, signUpUpdate} from "../../../redux/AuthReducer";
import {createUser} from "../Auth";


const FormSignUp = () => {

    const signUpDis = useDispatch();
    const signUpDisUpdate = useDispatch()
    const errorSignDis = useDispatch();
    const userEmailUpdate = useSelector(state => state.auth.userEmailUpdate);
    const userPasswordUpdate = useSelector(state => state.auth.userPasswordUpdate);
    const confirmPasswordUpdate = useSelector(state => state.auth.confirmPasswordUpdate)
    const error = useSelector(state => state.auth.error)

    let emailRef = useRef();
    let passwordRef = useRef()
    let confirmPasswordRef = useRef()

    const signUpUpdateFunc = () => {
        signUpDisUpdate(signUpUpdate(emailRef.current.value,
            passwordRef.current.value,
            confirmPasswordRef.current.value))
    }
    const signUpFunc = async () => {
        if (passwordRef.current.value === confirmPasswordRef.current.value) {
            await createUser(emailRef.current.value, passwordRef.current.value).then(() => {
                signUpDis(signUp(emailRef.current.value, passwordRef.current.value))
            }).catch((error) => {
                errorSignDis(errorSign(error.message))
            });
        } else {
            errorSignDis(errorSign('Password is not right'))
        }
    }
    const handleSumbit = async (e) => {
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
                <input type='submit' value='SIGN UP' onClick={signUpFunc} />
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
