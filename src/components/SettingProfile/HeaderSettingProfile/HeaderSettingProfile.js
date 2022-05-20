import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import Chev from '../../../assets/images/chevron-right 3.svg'
import Ava from '../../../assets/images/avatar3.png'

const HeaderSettingProfile = () => {
    const user = useSelector((state) => state.userProfile)

    return (
        <Header>
            <Body>
                <UserBlock>
                    <div>
                        <Avatar src={Ava} alt="Avatar" />
                    </div>
                    <div>
                        <Title>Bruno Pham</Title>
                        <Text>thanhphamdhbk@gmail.com</Text>
                    </div>
                    <Chevron src={Chev} alt="Chevron" />
                </UserBlock>
            </Body>
        </Header>
    )
}

const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    position: relative;
    z-index: 1;
    margin: 0 20px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
`
const Body = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    padding: 14px 10px;
`

const UserBlock = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
`

const Title = styled.p`
    font-weight: 700;
    font-size: 16px;
    line-height: 120%;
    color: #ffffff;
    margin-bottom: 5px;
    text-align: left;
`

const Text = styled.p`
    color: #f1f1fe;
    text-align: left;
`

const Avatar = styled.img`
    flex: 0 0 60px;
    height: 60px;
    border-radius: 50%;
`

const Chevron = styled.img`
    position: absolute;
    top: 14px;
    right: 10px;
`

export { HeaderSettingProfile }
