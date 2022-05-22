import React from 'react'
import UserProfileStyle from './UserProfile.module.css'
import { HeaderUserProfile } from './HeaderUserProfile/HeaderUserProfile'
import { SelfUserProfile } from './SelfUserProfile/SelfUserProfile'
import { FollowUserProfile } from './FollowUserProfile/FollowUserProfile'
import { Footer } from '../Footer/Footer'
import { LinksUserProfile } from './LinksUserProfile/LinksUserProfile'
import { TabsUserProfile } from './TabsUserProfile/TabsUserProfile'
import { ShotsUserProfile } from './ShotsUserProfile/ShotsUserProfile'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { getIsNavigate } from '../../redux/Selectors/AppSelectors'

const UserProfile = () => {
    const isNavigate = useSelector(getIsNavigate)

    if (isNavigate) {
        return <Navigate to="/auth" />
    }

    return (
        <div className={UserProfileStyle.User}>
            <HeaderUserProfile />
            <SelfUserProfile />
            <FollowUserProfile />
            <LinksUserProfile />
            <TabsUserProfile />
            <ShotsUserProfile />
            <Footer />
        </div>
    )
}

export { UserProfile }
