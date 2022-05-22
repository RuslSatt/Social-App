import React from 'react'
import SelfUserProfileStyle from './SelfUserProfile.module.css'
import Ava from '../../../assets/images/avatar3.png'

const SelfUserProfile = () => {
    return (
        <div className={SelfUserProfileStyle.Self}>
            <div className={SelfUserProfileStyle.image}>
                <img src={Ava} alt="" />
            </div>
            <p></p>
            <p></p>
        </div>
    )
}

export { SelfUserProfile }
