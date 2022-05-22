import React from 'react'
import { HeaderStartProfile } from './HeaderStartProfile/HeaderStartProfile'
import { FormStartProfile } from './FormStartProfile/FormStartProfile'
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
            <HeaderStartProfile />
            <FormStartProfile />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    min-height: 100vh;
    overflow: hidden;
`

export { StartProfile }
