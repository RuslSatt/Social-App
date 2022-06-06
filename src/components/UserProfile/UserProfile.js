import React from 'react'
import { UserProfileHeader } from './UserProfileHeader/UserProfileHeader'
import { UserProfilePreview } from './UserProfilePreview/UserProfilePreview'
import { UserProfileFollow } from './UserProfileFollow/UserProfileFollow'
import { Footer } from '../Footer/Footer'
import { UserProfileSocials } from './UserProfileSocials/UserProfileSocials'
import { UserProfileTabs } from './UserProfileTabs/UserProfileTabs'
import { UserProfileShots } from './UserProfileShots/UserProfileShots'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { getIsNavigate } from '../../redux/Selectors/AppSelectors'
import styled from 'styled-components'

const UserProfile = () => {
    const isNavigate = useSelector(getIsNavigate)

    if (isNavigate) {
        return <Navigate to="/auth" />
    }

    return (
        <Wrapper>
            <UserProfileHeader />
            <UserProfilePreview />
            <UserProfileFollow />
            <UserProfileSocials />
            <UserProfileTabs />
            <UserProfileShots />
            <Footer />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    min-height: 100vh;
    overflow: hidden;
`

export { UserProfile }
