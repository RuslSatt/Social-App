import React from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { createUser } from '../../../redux/AuthReducer'
import { Preload } from '../../Common/Preload/Preload'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { Error, HaveAccount, Preloader, SignUpForm } from '../AuthStyles'
import { ButtonWrapperUp, InputWrapper } from '../../Style/StyleForm'
import { SignUpSchema } from '../../Validate/Validate'

const FormSignUp = () => {
    const dispatch = useDispatch()
    const auth = useSelector((state) => state.auth)

    return (
        <SignUpForm>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                    confirmPassword: '',
                    name: '',
                }}
                validationSchema={SignUpSchema}
                onSubmit={(values, { setSubmitting }) => {
                    dispatch(
                        createUser(
                            values.email,
                            values.password,
                            values.confirmPassword
                        )
                    )
                    setSubmitting(false)
                }}
            >
                {({ errors, touched, isSubmitting }) => (
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
                        <InputWrapper
                            error={errors.email && touched.email ? true : ''}
                        >
                            <Field
                                placeholder="Email"
                                type="email"
                                name="email"
                            />
                            <ErrorMessage name="email" component="div" />
                        </InputWrapper>
                        <InputWrapper
                            error={
                                errors.password && touched.password ? true : ''
                            }
                        >
                            <Field
                                placeholder="Password"
                                type="password"
                                name="password"
                            />
                            <ErrorMessage name="password" component="div" />
                        </InputWrapper>
                        <InputWrapper
                            error={
                                errors.confirmPassword &&
                                touched.confirmPassword
                                    ? true
                                    : ''
                            }
                        >
                            <Field
                                placeholder="Confirm password"
                                type="password"
                                name="confirmPassword"
                            />
                            <ErrorMessage
                                name="confirmPassword"
                                component="div"
                            />
                        </InputWrapper>
                        <ButtonWrapperUp>
                            <button type="submit" disabled={isSubmitting}>
                                SIGN UP
                            </button>
                        </ButtonWrapperUp>
                        <HaveAccount>
                            Already have account?
                            <span>
                                <NavLink to="/auth">SIGN IN</NavLink>
                            </span>
                        </HaveAccount>
                    </Form>
                )}
            </Formik>
        </SignUpForm>
    )
}

export { FormSignUp }
