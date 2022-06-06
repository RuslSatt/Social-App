import React from 'react'
import Nothing from '../../../assets/images/nothing.png'
import styled from 'styled-components'

const UserProfileShots = () => {
    return (
        <div>
            <div></div>
            <ImageContainer>
                <img src={Nothing} alt="nothing" />
            </ImageContainer>
        </div>
    )
}

const ImageContainer = styled.div`
    padding: 46px 0;
    display: flex;
    align-items: center;
    justify-content: center;
`

export { UserProfileShots }
