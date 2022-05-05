import React from 'react';
import SignInStyle from "./SignIn.module.css";

const FormSign = () => {
    return (
        <form className={SignInStyle.sign}>
            <div className={SignInStyle.sing__input}>
                <input type='email' placeholder='Email'>

                </input>
            </div>
            <div className={SignInStyle.sing__input}>
                <input type='password' placeholder='Password'>

                </input>
            </div>
            <div className={SignInStyle.sign__forgot_password}>
                <button>
                    FORGOT PASSWORD
                </button>
            </div>
            <div className={SignInStyle.sing__log_in}>
                <input type='submit' value='LOG IN' />
            </div>
        </form>
    );
};

export {FormSign};
