import React from 'react'
import styled from 'styled-components'
import arrow from '../../../assets/images/arrow-setting-menu.svg'

const SettingMenu = () => {
    return (
        <Menu>
            <Li>
                <p>Email</p>
                <ImageContainer>
                    <Image src={arrow} alt="arrow" />
                </ImageContainer>
            </Li>
            <Li>
                <p>Instagram</p>
                <ImageContainer>
                    <Image src={arrow} alt="arrow" />
                </ImageContainer>
            </Li>
            <Li>
                <p>Twitter</p>
                <ImageContainer>
                    <Image src={arrow} alt="arrow" />
                </ImageContainer>
            </Li>
            <Li>
                <p>Website</p>
                <ImageContainer>
                    <Image src={arrow} alt="arrow" />
                </ImageContainer>
            </Li>
            <Li>
                <p>Change password</p>
                <ImageContainer>
                    <Image src={arrow} alt="arrow" />
                </ImageContainer>
            </Li>
            <Li>
                <p>About social app</p>
                <ImageContainer>
                    <Image src={arrow} alt="arrow" />
                </ImageContainer>
            </Li>
            <Li>
                <p>Terms & privacy</p>
                <ImageContainer>
                    <Image src={arrow} alt="arrow" />
                </ImageContainer>
            </Li>
        </Menu>
    )
}

const Menu = styled.div`
    max-width: 250px;
    position: relative;
    z-index: 1;
`

const Li = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 5px 5px 20px;
    color: #ffffff;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 0 40px 40px 0;
    margin-bottom: 15px;
`

const ImageContainer = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`

const Image = styled.img`
    width: 16px;
    height: 16px;
`

export { SettingMenu }
