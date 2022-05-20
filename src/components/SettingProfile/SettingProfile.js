import React from 'react'
import { Footer } from '../Footer/Footer'
import styled from 'styled-components'
import SettingBackground from '../../assets/images/setting-background.png'
import { HeaderSettingProfile } from './HeaderSettingProfile/HeaderSettingProfile'

const SettingProfile = () => {
    return (
        <Wrapper>
            <HeaderSettingProfile />
            <Image src={SettingBackground} alt="Background" />
            <Footer />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    min-height: 100vh;
    overflow: hidden;
    position: relative;
    padding-top: 60px;
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

export { SettingProfile }
