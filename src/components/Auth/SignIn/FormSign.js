import React from "react";
import SignInStyle from "./SignIn.module.css";
import { signIn } from "../../../redux/AuthReducer";
import { useDispatch, useSelector } from "react-redux";
import { Preload } from "../../Common/Preload/Preload";
import { Navigate, NavLink } from "react-router-dom";
import { Field, Form, Formik } from "formik";

const FormSign = () => {
    const auth = useSelector((state) => state.auth);

    const signInDispatch = useDispatch();

    if (auth.userId !== null) {
        return <Navigate to="/setting-profile" />;
    }

    return (
        <div className={SignInStyle.sign}>
            <Formik
                initialValues={{
                    email: "",
                    password: "",
                }}
                onSubmit={(values) => {
                    signInDispatch(signIn(values.email, values.password));
                }}
            >
                {() => (
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
                                type="email"
                                placeholder="Email"
                                name="email"
                            />
                        </div>
                        <div className={SignInStyle.sign__input}>
                            <Field
                                type="password"
                                placeholder="Password"
                                name="password"
                            />
                        </div>
                        <div className={SignInStyle.sign__forgot_password}>
                            <NavLink to="/forgotPassword">
                                FORGOT PASSWORD
                            </NavLink>
                        </div>
                        <div className={SignInStyle.sign__log_in}>
                            <button type="submit">LOG IN</button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export { FormSign };
