import React from 'react'
import { HeaderStartProfile } from './HeaderStartProfile/HeaderStartProfile'
import { FormStartProfile } from './FormStartProfile/FormStartProfile'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const StartProfile = () => {
    const app = useSelector((state) => state.app)
    const user = useSelector((state) => state.userProfile)

    if (app.isNavigate) {
        return <Navigate to="/auth" />
    }

    if (user.name !== '') {
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
