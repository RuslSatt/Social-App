import { Field, Form, Formik } from "formik";
import React from "react";
import styled from "styled-components";
import { ButtonWrapperSP, InputWrapperSP } from "../../Style/StyleForm";

const FormSettingProfile = () => {
    return (
        <Wrapper>
            <Formik
                initialValues={{
                    name: "",
                    nickname: "",
                }}
                onSubmit={(values) => {}}
            >
                {() => (
                    <Form>
                        <InputWrapperSP>
                            <Title>Name</Title>
                            <Field placeholder="Name" type="text" name="name" />
                        </InputWrapperSP>
                        <InputWrapperSP>
                            <Title>Nickname</Title>
                            <Field
                                placeholder="Nickname"
                                type="text"
                                name="nickname"
                            />
                        </InputWrapperSP>
                        <ButtonWrapperSP>
                            <button type="submit">Save Info</button>
                        </ButtonWrapperSP>
                    </Form>
                )}
            </Formik>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    padding-top: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
`;

const Title = styled.p`
    text-align: left;
    margin-bottom: 10px;
    font-size: 16px;
    font-weight: 500;
`;

export { FormSettingProfile };
