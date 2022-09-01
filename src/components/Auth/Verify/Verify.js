import React from 'react'
import styled from 'styled-components'
import Back from '../../../assets/images/auth-another-back.png'
import Group from '../../../assets/images/group-other-auth.png'
import { AuthHeader, AuthWrapper, Image, VerifyForm } from '../AuthStyles'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { ButtonWrapper, InputWrapper } from '../../Style/StyleForm'

const Verify = () => {
    return (
        <AuthWrapper>
            <AuthHeader>
                <Image src={Back} alt="back" />
            </AuthHeader>
            <VerifyForm>
                <Title>VERIFICATION</Title>
                <Message>
                    A message with verification code was sent to your mobile
                    phone.
                </Message>
                <Formik
                    initialValues={{
                        code: '',
                    }}
                    onSubmit={(values) => {
                        console.log(values)
                    }}
                >
                    {() => (
                        <Form>
                            <InputWrapper>
                                <Field
                                    placeholder="Type verification code"
                                    type="text"
                                    name="code"
                                />
                                <ErrorMessage name="email" component="div" />
                            </InputWrapper>

                            <ButtonContainer>
                                <button>Don't receive the code</button>
                            </ButtonContainer>

                            <ButtonWrapper>
                                <button>VERIFY</button>
                            </ButtonWrapper>
                        </Form>
                    )}
                </Formik>
            </VerifyForm>
            <GroupImg>
                <img src={Group} alt="group" />
            </GroupImg>
        </AuthWrapper>
    )
}

export const Title = styled.div`
    font-weight: 700;
    font-size: 16px;
    line-height: 120%;
    color: #5151c6;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 14px;
`

export const Message = styled.div`
    background: #f1f1fe;
    padding: 16px 24px;
    border-radius: 12px;
    text-align: center;
    font-size: 15px;
    line-height: 150%;
    margin-bottom: 40px;
`

export const GroupImg = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
    margin-bottom: 40px;
    button {
        background: transparent;
        line-height: 120%;
        letter-spacing: 2px;
        text-transform: uppercase;
    }
`

export { Verify }
