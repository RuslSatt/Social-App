import React from 'react'
import styled from 'styled-components'

const PostDescription = (props) => {
    return (
        <Wrapper>
            <Title>{props.title}</Title>
            <Subtitle>{props.description}</Subtitle>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding: 0.625rem 1.25rem;
`
const Title = styled.h2`
    font-weight: 700;
    font-size: 20px;
    line-height: 120%;
    color: #212121;
    margin-bottom: 0.5rem;
`

const Subtitle = styled.p`
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    color: #828282;
`

export { PostDescription }
