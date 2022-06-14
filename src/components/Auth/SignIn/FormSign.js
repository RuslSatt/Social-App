import React from 'react'
import { signIn } from '../../../redux/AuthReducer'
import { useDispatch, useSelector } from 'react-redux'
import { Preload } from '../../Common/Preload/Preload'
import { NavLink } from 'react-router-dom'
import { Field, Form, Formik } from 'formik'
import { Error, Preloader, SignInForm } from '../AuthStyles'
import { ButtonWrapper, InputWrapper } from '../../Style/StyleForm'
import styled from 'styled-components'
import { getError, getIsPreload } from '../../../redux/Selectors/AppSelectors'

const FormSign = () => {
    const dispatch = useDispatch()
    const error = useSelector(getError)
    const isPreload = useSelector(getIsPreload)

    return (
        <SignInForm>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                }}
                onSubmit={(values) => {
                    dispatch(signIn(values.email, values.password))
                }}
            >
                {() => (
                    <Form>
                        {error !== '' ? (
                            <Error>
                                <span>{error}</span>
                            </Error>
                        ) : (
                            ''
                        )}
                        {isPreload === true ? (
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
                            <NavLink to="/forgot">FORGOT PASSWORD</NavLink>
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
