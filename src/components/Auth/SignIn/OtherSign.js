import React from "react";
import Google from "../../../assets/images/google.svg";
import Facebook from "../../../assets/images/facebook-sign.svg";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser } from "../../../redux/AuthReducer";
import { NotHaveAccount } from "../AuthStyles";
import styled from "styled-components";

const OtherSign = () => {
    const isRegisterDispatch = useDispatch();
    const navigate = () => {
        isRegisterDispatch(registerUser(false));
    };

    return (
        <Wrapper>
            <Title>OR LOG IN BY</Title>
            <Providers>
                <button>
                    <img src={Google} alt="Google" />
                </button>
                <button>
                    <img src={Facebook} alt="Facebook" />
                </button>
            </Providers>
            <NotHaveAccount>
                Don't have account?
                <span>
                    <NavLink onClick={navigate} to="/signup">
                        SIGN UP
                    </NavLink>
                </span>
            </NotHaveAccount>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    text-align: center;
`;

const Title = styled.p`
    line-height: 120%;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #606060;
    margin-bottom: 14px;
`;

const Providers = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin-bottom: 40px;
    button {
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }
`;

export { OtherSign };
