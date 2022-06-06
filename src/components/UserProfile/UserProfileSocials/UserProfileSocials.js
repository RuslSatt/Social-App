import React from 'react'
import Global from '../../../assets/images/globe.svg'
import Instagram from '../../../assets/images/instagram.svg'
import Facebook from '../../../assets/images/facebook.svg'
import Ellipse from '../../../assets/images/ellipse.svg'
import styled from 'styled-components'

const UserProfileSocials = () => {
    return (
        <Wrapper>
            <img src={Global} alt="Global" />
            <img src={Ellipse} alt="Ellipse" />
            <img src={Instagram} alt="Instagram" />
            <img src={Ellipse} alt="Ellipse" />
            <img src={Facebook} alt="Facebook" />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 25px;
`

export { UserProfileSocials }
