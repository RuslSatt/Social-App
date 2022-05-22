import React from 'react'
import styled from 'styled-components'
import Logout from '../../../assets/images/Logout.svg'
import { useDispatch } from 'react-redux'
import { signOut } from '../../../redux/SettingReducer'

const SignOut = () => {
    const dispatch = useDispatch()

    const callSignOut = () => {
        dispatch(signOut())
    }

    return (
        <Wrapper>
            <Button onClick={callSignOut}>
                <Image src={Logout} alt="Logout" />
                <p>Log out</p>
            </Button>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    position: relative;
    z-index: 1;
    padding-left: 20px;
    padding-top: 17px;
`

const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 7px 14px;
    background: #ffffff;
    border: 1px solid #e0e0e0;
    border-radius: 30px;
    gap: 5px;
`

const Image = styled.img``

export { SignOut }
