import React from 'react'
import { AuthHeader, AuthWrapper, Image, VerifyForm } from '../AuthStyles'
import Back from '../../../assets/images/auth-another-back.png'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { ButtonWrapper, InputWrapper } from '../../Style/StyleForm'
import Group from '../../../assets/images/group-other-auth.png'
import { GroupImg, Message, Title } from './Verify'

const VerifyPhone = () => {
    return (
        <AuthWrapper>
            <AuthHeader>
                <Image src={Back} alt="back" />
            </AuthHeader>
            <VerifyForm>
                <Title>PHONE</Title>
                <Message>Sent your mobile phone for sent code</Message>
                <Formik
                    initialValues={{
                        phone: '',
                    }}
                    onSubmit={(values) => {
                        console.log(values)
                    }}
                >
                    {() => (
                        <Form>
                            <InputWrapper>
                                <Field
                                    placeholder="Phone number"
                                    type="tel"
                                    name="phone"
                                />
                                <ErrorMessage name="phone" component="div" />
                            </InputWrapper>

                            <ButtonWrapper>
                                <button>SEND</button>
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
