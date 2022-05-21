import React from 'react'
import { signIn } from '../../../redux/AuthReducer'
import { useDispatch, useSelector } from 'react-redux'
import { Preload } from '../../Common/Preload/Preload'
import { Navigate, NavLink } from 'react-router-dom'
import { Field, Form, Formik } from 'formik'
import { Error, Preloader, SignInForm } from '../AuthStyles'
import { ButtonWrapper, InputWrapper } from '../../Style/StyleForm'
import styled from 'styled-components'

const FormSign = () => {
    const signInDispatch = useDispatch()
    const app = useSelector((state) => state.app)
    const auth = useSelector((state) => state.auth)

    if (app.isLogin && app.displayName === null) {
        return <Navigate to="/start-profile" />
    }
    if (app.isLogin && app.displayName !== null) {
        return <Navigate to="/home" />
    }

    return (
        <SignInForm>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                }}
                onSubmit={(values) => {
                    signInDispatch(signIn(values.email, values.password))
                }}
            >
                {() => (
                    <Form>
                        {auth.error !== '' ? (
                            <Error>
                                <span>{auth.error}</span>
                            </Error>
                        ) : (
                            ''
                        )}
                        {auth.isPreload === true ? (
                            <Preloader>
                                <Preload />
                            </Preloader>
                        ) : (
                            ''
                        )}
                        <InputWrapper>
                            <Field
                                type="email"
                                placeholder="Email"
                                name="email"
                            />
                        </InputWrapper>
                        <InputWrapper>
                            <Field
                                type="password"
                                placeholder="Password"
                                name="password"
                            />
                        </InputWrapper>
                        <ForgotPassword>
                            <NavLink to="/forgotPassword">
                                FORGOT PASSWORD
                            </NavLink>
                        </ForgotPassword>
                        <ButtonWrapper>
                            <button type="submit">LOG IN</button>
                        </ButtonWrapper>
                    </Form>
                )}
            </Formik>
        </SignInForm>
    )
}

const ForgotPassword = styled.div`
    margin-top: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-bottom: 40px;
    color: #5252c7;
    font-size: 14px;
    line-height: 120%;
    letter-spacing: 2px;
    text-transform: uppercase;
`

export { FormSign }
