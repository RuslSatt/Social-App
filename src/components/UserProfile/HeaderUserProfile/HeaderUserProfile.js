import React from 'react'
import HeaderUserProfileStyle from './HeaderUserProfile.module.css'
import { NavLink } from 'react-router-dom'
import Setting from '../../../assets/images/setting.svg'
import HeaderBack from '../../../assets/images/header-background.png'
import { useSelector } from 'react-redux'
import { getTag } from '../../../redux/Selectors/UserProfileSelectors'

const HeaderUserProfile = () => {
    const tag = useSelector(getTag)

    return (
        <header className={HeaderUserProfileStyle.header}>
            <div className={HeaderUserProfileStyle.header__body}>
                <div className={HeaderUserProfileStyle.tag}>{tag}</div>
                <NavLink
                    className={HeaderUserProfileStyle.icon_settings}
                    to="/setting-profile"
                >
                    <img src={Setting} alt="setting-profile" />
                </NavLink>
            </div>
            <img
                className={HeaderUserProfileStyle.back_image}
                src={HeaderBack}
                alt="background"
            />
        </header>
    )
}

export { HeaderUserProfile }
