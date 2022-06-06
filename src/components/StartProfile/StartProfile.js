import React from 'react'
import { StartProfileHeader } from './StartProfileHeader/StartProfileHeader'
import { StartProfileForm } from './StartProfileForm/StartProfileForm'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { getIsNavigate } from '../../redux/Selectors/AppSelectors'
import { getName } from '../../redux/Selectors/UserProfileSelectors'

const StartProfile = () => {
    const isNavigate = useSelector(getIsNavigate)
    const name = useSelector(getName)

    if (isNavigate) {
        return <Navigate to="/auth" />
    }

    if (name !== '') {
        return <Navigate to="/home" />
    }

    return (
        <Wrapper>
            <StartProfileHeader />
            <StartProfileForm />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    min-height: 100vh;
    overflow: hidden;
`

export { StartProfile }
