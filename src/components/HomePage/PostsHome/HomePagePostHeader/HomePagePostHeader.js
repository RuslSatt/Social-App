import React from 'react'
import styled from 'styled-components'

const HomePagePostHeader = (props) => {
    return (
        <Wrapper>
            <User>
                <img src={props.avatar} alt="avatar" />
                <p>{props.name}</p>
            </User>
            <Time>{props.time}</Time>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    min-height: 3.125rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #ffffff;
    padding: 10px 15px;
    border-radius: 10px 10px 0 0;
`
const User = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    img {
        max-width: 30px;
        border-radius: 50%;
    }

    p {
        color: #242424;
        font-size: 1rem;
        line-height: 150%;
        font-weight: 600;
    }
`

const Time = styled.p`
    color: #bdbdbd;
    font-size: 0.875rem;
`

export { HomePagePostHeader }
