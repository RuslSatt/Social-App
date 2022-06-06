import React from 'react'
import styled from 'styled-components'

const UserProfileFollow = () => {
    return (
        <Wrapper>
            <Container>
                <Followers>
                    <Count></Count>
                    <Text>Followers</Text>
                </Followers>
                <Following>
                    <Count></Count>
                    <Text>Following</Text>
                </Following>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding: 20px 20px;
`

const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px 30px;
    background: #f6f7f9;
    border-radius: 6px;
`

const Followers = styled.div`
    display: flex;
    gap: 5px;
`

const Following = styled.div`
    display: flex;
    gap: 5px;
`

const Count = styled.span`
    color: #242424;
    font-weight: 700;
    font-size: 16px;
    line-height: 150%;
    text-align: center;
    letter-spacing: 0.6px;
`

const Text = styled.span`
    color: #8f90a7;
    font-size: 16px;
    line-height: 150%;
`

export { UserProfileFollow }
