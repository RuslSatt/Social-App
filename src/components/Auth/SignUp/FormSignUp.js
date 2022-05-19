import React from "react";
import SignInStyle from "../SignIn/SignIn.module.css";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../../../redux/AuthReducer";
import { Preload } from "../../Common/Preload/Preload";
import { Formik, Form, Field } from "formik";

const FormSignUp = () => {
    const createUserDispatch = useDispatch();

    const auth = useSelector((state) => state.auth);

    return (
        <div className={`${SignInStyle.sign} + ${SignInStyle.sign_up}`}>
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
                            <div className={SignInStyle.error}>
                                <span>{auth.error}</span>
                            </div>
                        ) : (
                            ""
                        )}
                        {auth.isPreload === true ? (
                            <div className={SignInStyle.preload}>
                                <Preload />
                            </div>
                        ) : (
                            ""
                        )}
                        <div className={SignInStyle.sign__input}>
                            <Field
                                placeholder="Email"
                                type="email"
                                name="email"
                            />
                        </div>
                        <div className={SignInStyle.sign__input}>
                            <Field
                                placeholder="Password"
                                type="password"
                                name="password"
                            />
                        </div>
                        <div className={SignInStyle.sign__input}>
                            <Field
                                placeholder="Confirm password"
                                type="password"
                                name="confirmPassword"
                            />
                        </div>
                        <div
                            className={`${SignInStyle.sign__log_in} + ${SignInStyle.sign__up}`}
                        >
                            <button type="submit" disabled={isSubmitting}>
                                SIGN UP
                            </button>
                        </div>
                        <p className={SignInStyle.other__yes_account}>
                            Already have account?
                            <span>
                                <NavLink to="/auth">SIGN IN</NavLink>
                            </span>
                        </p>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export { FormSignUp };
