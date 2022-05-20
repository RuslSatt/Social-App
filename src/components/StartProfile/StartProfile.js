import React from 'react'
import { HeaderStartProfile } from './HeaderStartProfile/HeaderStartProfile'
import { FormStartProfile } from './FormStartProfile/FormStartProfile'
import styled from 'styled-components'

const StartProfile = () => {
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
