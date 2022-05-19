import styled from "styled-components";

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

const InputWrapperSP = styled(InputWrapper)`
    display: block;
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

const ButtonWrapperSP = styled(ButtonWrapper)`
    button {
        position: fixed;
        bottom: 20px;
        @media (max-height: 600px) {
            margin-top: 30px;
            position: relative;
        }
    }
`;

export {
    InputWrapper,
    ButtonWrapper,
    ButtonWrapperUp,
    InputWrapperSP,
    ButtonWrapperSP,
};
