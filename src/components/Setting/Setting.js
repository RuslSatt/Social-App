import React from 'react'
import { Footer } from '../Footer/Footer'
import styled from 'styled-components'
import SettingBackground from '../../assets/images/setting-background.png'
import SettingImage from '../../assets/images/setting-image-2.png'
import { SettingHeader } from './SettingHeader/SettingHeader'
import { SettingMenu } from './SettingMenu/SettingMenu'
import { SignOut } from './SignOut/SignOut'
import { Preload, PreloadContainer } from '../Common/Preload/Preload'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { getIsNavigate } from '../../redux/Selectors/AppSelectors'

const Setting = () => {
    const setting = useSelector((state) => state.setting)
    const isNavigate = useSelector(getIsNavigate)

    if (isNavigate) {
        return <Navigate to="/auth" />
    }

    return (
        <Wrapper>
            {setting.isPreload ? (
                <PreloadContainer>
                    <Preload />
                </PreloadContainer>
            ) : (
                ''
            )}
            <SettingHeader />
            <SettingMenu />
            <SignOut />
            <Image src={SettingBackground} alt="Background" />
            <Image2 src={SettingImage} alt="SettingImage" />
            <Footer />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    min-height: 100vh;
    overflow: hidden;
    position: relative;
    padding-top: 60px;
    padding-bottom: 120px;
`

const Image = styled.img`
    z-index: 0;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
`

const Image2 = styled.img`
    position: absolute;
    top: 160px;
    right: 0;
    z-index: 0;
    height: 500px;
`

export { Setting }
