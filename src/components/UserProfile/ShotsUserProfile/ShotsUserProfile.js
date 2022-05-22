import React from 'react'
import ShotsUserProfileStyle from './ShotsUserProfile.module.css'
import Nothing from '../../../assets/images/nothing.png'

const ShotsUserProfile = () => {
    return (
        <div className={ShotsUserProfileStyle.Shot}>
            <div></div>
            <div className={ShotsUserProfileStyle.image}>
                <img src={Nothing} alt="nothing" />
            </div>
        </div>
    )
}

export { ShotsUserProfile }
