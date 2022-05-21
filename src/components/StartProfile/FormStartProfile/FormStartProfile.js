import { Field, Form, Formik } from 'formik'
import React from 'react'
import styled from 'styled-components'
import { ButtonWrapperSP, InputWrapperSP } from '../../Style/StyleForm'
import { useDispatch, useSelector } from 'react-redux'
import { setUser } from '../../../redux/UserProfileReducer'
import { Navigate } from 'react-router-dom'
import { Preloader } from '../../Auth/AuthStyles'
import { Preload } from '../../Common/Preload/Preload'

const FormStartProfile = () => {
    const setUserDispatch = useDispatch()

    const app = useSelector((state) => state.app)
    const user = useSelector((state) => state.userProfile)
    const auth = useSelector((state) => state.auth)

    if (app.isNavigate) {
        return <Navigate to="/auth" />
    }

    if (user.name !== '') {
        return <Navigate to="/home" />
    }

    return (
        <Wrapper>
            <Formik
                initialValues={{
                    name: '',
                    tag: '@' + '',
                }}
                onSubmit={(values) => {
                    setUserDispatch(setUser(values.name, values.tag))
                }}
            >
                {() => (
                    <Form>
                        {auth.isPreload === true ? (
                            <Preloader>
                                <Preload />
                            </Preloader>
                        ) : (
                            ''
                        )}
                        <InputWrapperSP>
                            <Title>Name</Title>
                            <Field placeholder="Name" type="text" name="name" />
                        </InputWrapperSP>
                        <InputWrapperSP>
                            <Title>Nickname</Title>
                            <Field
                                placeholder="Nickname"
                                type="text"
                                name="tag"
                            />
                        </InputWrapperSP>
                        <ButtonWrapperSP>
                            <button type="submit">Save Info</button>
                        </ButtonWrapperSP>
                    </Form>
                )}
            </Formik>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding-top: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
`

const Title = styled.p`
    text-align: left;
    margin-bottom: 10px;
    font-size: 16px;
    font-weight: 500;
`

export { FormStartProfile }
