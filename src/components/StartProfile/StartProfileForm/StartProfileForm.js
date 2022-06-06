import { Field, Form, Formik } from 'formik'
import React from 'react'
import styled from 'styled-components'
import { ButtonWrapperSP, InputWrapperSP } from '../../Style/StyleForm'
import { useDispatch, useSelector } from 'react-redux'
import { setUser } from '../../../redux/UserProfileReducer'
import { Preloader } from '../../Auth/AuthStyles'
import { Preload } from '../../Common/Preload/Preload'
import { getIsPreload } from '../../../redux/Selectors/AppSelectors'

const StartProfileForm = () => {
    const dispatch = useDispatch()
    const isPreload = useSelector(getIsPreload)

    return (
        <Wrapper>
            <Formik
                initialValues={{
                    name: '',
                    tag: '',
                }}
                onSubmit={(values) => {
                    dispatch(setUser(values.name, values.tag))
                }}
            >
                {() => (
                    <Form>
                        {isPreload === true ? (
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

export { StartProfileForm }
