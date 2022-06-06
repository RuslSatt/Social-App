import React from 'react'
import { NavLink } from 'react-router-dom'
import Setting from '../../../assets/images/setting.svg'
import HeaderBack from '../../../assets/images/header-background.png'
import { useSelector } from 'react-redux'
import { getTag } from '../../../redux/Selectors/UserProfileSelectors'
import styled from 'styled-components'

const UserProfileHeader = () => {
    const tag = useSelector(getTag)

    return (
        <Header>
            <Container>
                <Tag>{tag}</Tag>
                <Button>
                    <NavLink to="/setting-profile">
                        <img src={Setting} alt="setting-profile" />
                    </NavLink>
                </Button>
            </Container>
            <Image src={HeaderBack} alt="background" />
        </Header>
    )
}

const Header = styled.header`
    min-height: 150px;
    position: relative;
`

const Container = styled.div`
    padding: 50px 10px;
    display: flex;
    align-items: center;
`

const Tag = styled.div`
    color: #ffffff;
    margin-left: auto;
`

const Button = styled.button`
    margin-left: auto;
    background: transparent;
`

const Image = styled.img`
    position: absolute;
    z-index: -1;
    top: 0;
    width: 100%;
    height: 100%;
`

export { UserProfileHeader }
