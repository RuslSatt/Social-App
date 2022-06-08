import React from 'react'
import styled from 'styled-components'
import Back from '../../../assets/images/auth-another-back.png'
import Group from '../../../assets/images/group-other-auth.png'
import { AuthHeader, AuthWrapper, Image, VerifyForm } from '../AuthStyles'

const Verify = () => {
    return (
        <AuthWrapper>
            <AuthHeader>
                <Image src={Back} alt="back" />
            </AuthHeader>
            <VerifyForm>
                <Title>VERIFICATION</Title>
                <Message>
                    A message with verification code was sent to your mobile
                    phone.
                </Message>
            </VerifyForm>
            <GroupImg>
                <img src={Group} alt="group" />
            </GroupImg>
        </AuthWrapper>
    )
}

const Title = styled.div`
    font-weight: 700;
    font-size: 16px;
    line-height: 120%;
    color: #5151c6;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 14px;
`

const Message = styled.div`
    background: #f1f1fe;
    padding: 16px 24px;
    border-radius: 12px;
    text-align: center;
    font-size: 15px;
    line-height: 150%;
`

const GroupImg = styled.div`
    margin-top: auto;
    display: flex;
    align-items: center;
    justify-content: center;
`

export { Verify }
