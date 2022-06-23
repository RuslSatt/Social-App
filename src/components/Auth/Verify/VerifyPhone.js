import React from 'react'
import { AuthHeader, AuthWrapper, Image, VerifyForm } from '../AuthStyles'
import Back from '../../../assets/images/auth-another-back.png'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { ButtonWrapper, InputWrapper } from '../../Style/StyleForm'
import Group from '../../../assets/images/group-other-auth.png'
import { ButtonContainer, GroupImg, Message, Title } from './Verify'

const VerifyPhone = () => {
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

export { VerifyPhone }
