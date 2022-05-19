import styled from "styled-components";

const AuthWrapper = styled.div`
    min-height: 100vh;
    overflow: hidden;
    background: #ffffff;
    padding-bottom: 56px;
`;
const AuthHeader = styled.div`
    width: 100%;
    min-height: 321px;
`;

const Image = styled.img`
    object-fit: cover;
    width: 100%;
    min-height: 321px;
`;

const SignUpForm = styled.div`
    background: #ffffff;
    border-radius: 28px 28px 0px 0px;
    margin-top: -30px;
    position: relative;
    height: 100%;
    overflow: hidden;
    padding: 40px 30px 5px 30px;
`;

const SignInForm = styled(SignUpForm)`
    padding: 40px 30px;
`;

const InputWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    input {
        background: #f3f5f7;
        border-radius: 30px;
        width: 315px;
        padding: 13px 20px;
        ::placeholder {
            font-size: 16px;
            line-height: 150%;
            display: flex;
            align-items: center;
            letter-spacing: -0.2px;
            color: #bdbdbd;
        }
    }
`;

const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    button {
        width: 315px;
        padding: 14px 24px;
        background: linear-gradient(270.95deg, #888bf4 0%, #5151c6 100%);
        border-radius: 30px;
        font-weight: 700;
        font-size: 16px;
        line-height: 150%;
        letter-spacing: 0.6px;
        color: #ffffff;
    }
`;

const ButtonWrapperUp = styled(ButtonWrapper)`
    margin-top: 40px;
`;

const NotHaveAccount = styled.p`
    font-size: 16px;
    line-height: 150%;
    letter-spacing: -0.2px;
    color: #606060;
    span {
        color: #5252c7;
        font-weight: 500;
        margin-left: 5px;
        letter-spacing: 0.2px;
    }
`;

const HaveAccount = styled(NotHaveAccount)`
    text-align: center;
    margin-top: 40px;
`;

const Error = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    span {
        padding: 14px 24px;
        background: linear-gradient(270.95deg, #888bf4 0%, #c41717 100%);
        border-radius: 30px;
        font-weight: 700;
        font-size: 16px;
        line-height: 150%;
        letter-spacing: 0.6px;
        color: #ffffff;
        width: 315px;
        text-align: center;
    }
`;

const Preloader = styled.div`
    margin-top: -70px;
    margin-bottom: 15px;
`;

export {
    AuthHeader,
    AuthWrapper,
    Image,
    SignUpForm,
    SignInForm,
    InputWrapper,
    ButtonWrapper,
    ButtonWrapperUp,
    NotHaveAccount,
    HaveAccount,
    Error,
    Preloader,
};
