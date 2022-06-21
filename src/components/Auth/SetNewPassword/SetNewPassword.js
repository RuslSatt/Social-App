import { AuthHeader, AuthWrapper, Image, NewPasswordForm } from '../AuthStyles'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { ButtonWrapperNP, InputWrapper } from '../../Style/StyleForm'
import Back from '../../../assets/images/auth-another-back.png'
import Group from '../../../assets/images/group-other-auth.png'
import Show from '../../../assets/images/show.svg'
import styled from 'styled-components'
import React from 'react'
import { useDispatch } from 'react-redux'
import { updateUserPassword } from '../../../redux/AuthReducer'

const SetNewPassword = () => {
    const dispatch = useDispatch()
    return (
        <AuthWrapper>
            <AuthHeader>
                <Image src={Back} alt="back" />
            </AuthHeader>
            <NewPasswordForm>
                <Title>SET NEW PASSWORD</Title>
                <Message>Type your new password</Message>
                <Formik
                    initialValues={{
                        password: '',
                        confirmPassword: '',
                    }}
                    onSubmit={(values) => {
                        dispatch(updateUserPassword(values.password))
                    }}
                >
                    {() => (
                        <Form>
                            <InputWrapper>
                                <Field
                                    placeholder="Password"
                                    type="password"
                                    name="password"
                                />
                                <ShowIcon src={Show} alt="show" />
                                <ErrorMessage name="email" component="div" />
                            </InputWrapper>
                            <InputWrapper>
                                <Field
                                    placeholder="Confirm Password"
                                    type="password"
                                    name="confirmPassword"
                                />
                                <ShowIcon src={Show} alt="show" />
                                <ErrorMessage name="email" component="div" />
                            </InputWrapper>
                            <ButtonWrapperNP>
                                <button>SEND</button>
                            </ButtonWrapperNP>
                        </Form>
                    )}
                </Formik>
            </NewPasswordForm>
            <GroupImg>
                <img src={Group} alt="group" />
            </GroupImg>
        </AuthWrapper>
    )
}

const Title = styled.div`
    font-weight: 700;
    font-size: 16px;
    line-height: 120%;
    color: #5151c6;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 14px;
`

const Message = styled.div`
    background: #f1f1fe;
    padding: 16px 24px;
    border-radius: 12px;
    text-align: center;
    font-size: 15px;
    line-height: 150%;
    margin-bottom: 40px;
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
`

const GroupImg = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -70px;
    position: relative;
    z-index: 1;
`

const ShowIcon = styled.img`
    position: absolute;
    right: 5%;
`

export { SetNewPassword }
