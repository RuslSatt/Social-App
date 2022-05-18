import React from "react";
import SignInStyle from "../SignIn/SignIn.module.css";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createUser, cleanForm } from "../../../redux/AuthReducer";
import { Preload } from "../../Common/Preload/Preload";
import { Formik, Form, Field } from "formik";

const FormSignUp = () => {
    const createUserDispatch = useDispatch();
    const cleanFormDispatch = useDispatch();

    const auth = useSelector((state) => state.auth);

    const callCreateUser = (email, password, confirmPassword) => {
        createUserDispatch(createUser(email, password, confirmPassword));
    };
    const callCleanForm = () => {
        cleanFormDispatch(cleanForm());
    };

    return (
        <div className={`${SignInStyle.sign} + ${SignInStyle.signup}`}>
            <Formik
                initialValues={{
                    email: "",
                    password: "",
                    confirmPassword: "",
                }}
                onSubmit={(values, { setSubmitting }) => {
                    callCreateUser(
                        values.email,
                        values.password,
                        values.confirmPassword,
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
                        <div className={SignInStyle.sing__input}>
                            <Field
                                placeholder="Email"
                                type="email"
                                name="email"
                            />
                        </div>
                        <div className={SignInStyle.sing__input}>
                            <Field
                                placeholder="Password"
                                type="password"
                                name="password"
                            />
                        </div>
                        <div className={SignInStyle.sing__input}>
                            <Field
                                placeholder="Confirm password"
                                type="password"
                                name="confirmPassword"
                            />
                        </div>
                        <div
                            className={`${SignInStyle.sing__log_in} + ${SignInStyle.sing__up}`}
                        >
                            <button type="submit" disabled={isSubmitting}>
                                SIGN UP
                            </button>
                        </div>
                        <p className={SignInStyle.other__yes_account}>
                            Already have account?
                            <span>
                                <NavLink onClick={callCleanForm} to="/auth">
                                    SIGN IN
                                </NavLink>
                            </span>
                        </p>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export { FormSignUp };
