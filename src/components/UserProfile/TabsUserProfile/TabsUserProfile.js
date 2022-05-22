import React from 'react'
import TabsUserProfileStyle from './TabsUserProfile.module.css'

const TabsUserProfile = () => {
    return (
        <div className={TabsUserProfileStyle.Tab}>
            <div className={TabsUserProfileStyle.shots}>
                <span>
                    <div></div>
                </span>
                <span>shots</span>
            </div>
            <div className={TabsUserProfileStyle.collections}>
                <span>
                    <div></div>
                </span>
                <span>shots</span>
            </div>
        </div>
    )
}

export { TabsUserProfile }
