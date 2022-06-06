import React from 'react'
import Ava from '../../../assets/images/avatar3.png'
import styled from 'styled-components'

const UserProfilePreview = () => {
    return (
        <Wrapper>
            <ImageContainer>
                <img src={Ava} alt="" />
            </ImageContainer>
            <p></p>
            <p></p>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: -50px;

    p:nth-child(2) {
        margin-bottom: 6px;
        font-weight: 700;
        font-size: 20px;
        line-height: 120%;
    }
    p:last-child {
        font-size: 16px;
        line-height: 150%;
        text-align: center;
        letter-spacing: -0.2px;
        color: #8f90a7;
    }
`

const ImageContainer = styled.div`
    background: #f3f5f7;
    border-radius: 50%;
    padding: 5px;
    margin-bottom: 1rem;

    img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
`

export { UserProfilePreview }
