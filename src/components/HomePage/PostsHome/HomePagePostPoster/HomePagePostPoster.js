import React from 'react'
import styled from 'styled-components'

const HomePagePostPoster = (props) => {
    return (
        <Wrapper>
            <img src={props.poster} alt="poster" />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    img {
        width: 100%;
        min-height: 50vh;
        max-height: 60vh;
        object-fit: cover;
    }

    @media (max-width: 500px) {
        img {
            min-height: 40vh;
        }
    }
`

export { HomePagePostPoster }
