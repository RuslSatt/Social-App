import React from 'react'
import { ReactComponent as PlusIcon } from '../../../../assets/images/plus.svg'
import { ReactComponent as ChatIcon } from '../../../../assets/images/Chat.svg'
import { ReactComponent as HeartIcon } from '../../../../assets/images/heart.svg'
import styled from 'styled-components'

const HomePagePostNav = (props) => {
    return (
        <Nav>
            <PlusIcon />
            <LikesAndComments>
                <Comments>
                    <p>{props.countComment}</p>
                    <ChatIcon />
                </Comments>
                <Likes>
                    <p>{props.countLikes}</p>
                    <HeartIcon />
                </Likes>
            </LikesAndComments>
        </Nav>
    )
}

const Nav = styled.nav`
    display: flex;
    align-items: center;
    padding: 0.95rem;
    justify-content: space-between;
    background: #ffffff;
    border-radius: 0 0 10px 10px;
`

const LikesAndComments = styled.div`
    display: flex;
    gap: 0.625rem;
`

const Comments = styled.div`
    display: flex;
    align-items: center;
    gap: 0.3rem;
    color: #828282;
    font-size: 14px;
    line-height: 150%;
`

const Likes = styled.div`
    font-size: 14px;
    line-height: 150%;
    color: #828282;
    display: flex;
    align-items: center;
    gap: 0.3rem;
`

export { HomePagePostNav }
