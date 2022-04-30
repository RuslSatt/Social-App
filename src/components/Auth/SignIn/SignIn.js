import React from 'react';
import SignInStyle from './SignIn.module.css';
import Back from '../../../assets/images/auth-back.png';
import Google from '../../../assets/images/google.svg';
import Facebook from '../../../assets/images/facebook-sign.svg'




const SignIn = (props) => {

    return (
        <div className={SignInStyle.SignIn}>
            <div className={SignInStyle.welcome}>
                <img src={Back} alt="back"/>
            </div>
            <div className={SignInStyle.sign}>
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
                    <button>
                        LOG IN
                    </button>
                </div>
            </div>
            <div className={SignInStyle.other}>
                <p className={SignInStyle.other__title}>
                    OR LOG IN BY
                </p>
                <div className={SignInStyle.other__providers}>
                    <button>
                        <img src={Google} alt="Google"/>
                    </button>
                    <button>
                        <img src={Facebook} alt="Facebook"/>
                    </button>
                </div>
                <p className={SignInStyle.other__not_account}>Don't have account? <span>SIGN UP</span></p>
            </div>
        </div>
    );
};

export {SignIn};
