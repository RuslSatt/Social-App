import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../../../redux/AuthReducer";
import { Preload } from "../../Common/Preload/Preload";
import { Formik, Form, Field } from "formik";
import {
    SignUpForm,
    InputWrapper,
    ButtonWrapperUp,
    HaveAccount,
    Error,
    Preloader,
} from "../AuthStyles";

const FormSignUp = () => {
    const createUserDispatch = useDispatch();

    const auth = useSelector((state) => state.auth);

    return (
        <SignUpForm>
            <Formik
                initialValues={{
                    email: "",
                    password: "",
                    confirmPassword: "",
                }}
                onSubmit={(values, { setSubmitting }) => {
                    createUserDispatch(
                        createUser(
                            values.email,
                            values.password,
                            values.confirmPassword,
                        ),
                    );
                    setSubmitting(false);
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        {auth.error !== "" ? (
                            <Error>
                                <span>{auth.error}</span>
                            </Error>
                        ) : (
                            ""
                        )}
                        {auth.isPreload === true ? (
                            <Preloader>
                                <Preload />
                            </Preloader>
                        ) : (
                            ""
                        )}
                        <InputWrapper>
                            <Field
                                placeholder="Email"
                                type="email"
                                name="email"
                            />
                        </InputWrapper>
                        <InputWrapper>
                            <Field
                                placeholder="Password"
                                type="password"
                                name="password"
                            />
                        </InputWrapper>
                        <InputWrapper>
                            <Field
                                placeholder="Confirm password"
                                type="password"
                                name="confirmPassword"
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
    );
};

export { FormSignUp };
