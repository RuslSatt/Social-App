import React from 'react'
import NavPostStyle from './NavPost.module.css'
import { ReactComponent as EyeIcon } from '../../../assets/images/eye.svg'
import { ReactComponent as CommentIcon } from '../../../assets/images/Chat.svg'
import { ReactComponent as HeartIcon } from '../../../assets/images/heart.svg'
import styled from 'styled-components'

const PostNav = (props) => {
    return (
        <Nav className={NavPostStyle.Nav}>
            <Watch className={NavPostStyle.watch}>
                <p>{props.countWatch}</p>
                <EyeIcon />
            </Watch>
            <Comment className={NavPostStyle.comment}>
                <p>{props.countComment}</p>
                <CommentIcon />
            </Comment>
            <Likes className={NavPostStyle.likes}>
                <p>{props.countLikes}</p>
                <HeartIcon />
            </Likes>
        </Nav>
    )
}

const Nav = styled.nav`
    display: flex;
    justify-content: space-around;
    padding: 0.78125rem 3.53125rem;
    color: #828282;
    line-height: 150%;
`

const Watch = styled.div`
    display: flex;
    align-items: center;
    gap: 0.65rem;
`

const Comment = styled.div`
    display: flex;
    align-items: center;
    gap: 0.65rem;
`

const Likes = styled.div`
    display: flex;
    align-items: center;
    gap: 0.65rem;
`

export { PostNav }
