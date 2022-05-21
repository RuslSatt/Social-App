import React from 'react'
import UserProfileStyle from './UserProfile.module.css'
import { HeaderUserProfile } from './HeaderUserProfile/HeaderUserProfile'
import { SelfUserProfile } from './SelfUserProfile/SelfUserProfile'
import { FollowUserProfile } from './FollowUserProfile/FollowUserProfile'
import { Footer } from '../Footer/Footer'
import { LinksUserProfile } from './LinksUserProfile/LinksUserProfile'
import { TabsUserProfile } from './TabsUserProfile/TabsUserProfile'
import { ShotsUserProfile } from './ShotsUserProfile/ShotsUserProfile'

const UserProfile = (props) => {
    return (
        <div className={UserProfileStyle.User}>
            <HeaderUserProfile tag={props.tag} />
            <SelfUserProfile name={props.name} location={props.location} />
            <FollowUserProfile
                followers={props.followers}
                following={props.following}
            />
            <LinksUserProfile />
            <TabsUserProfile
                shots={props.shots}
                collections={props.collections}
            />
            <ShotsUserProfile shots={props.shots} />
            <Footer />
        </div>
    )
}

export { UserProfile }
