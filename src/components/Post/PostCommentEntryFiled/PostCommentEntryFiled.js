import React, { useRef, useState } from 'react'
import Avatar from '../../../assets/images/ava-192.png'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addNewComment, createComment } from '../../../redux/HomePageReducer'
import {
    getCreatedComment,
    getPostsSt,
} from '../../../redux/Selectors/PostCommentSelector'
import styled from 'styled-components'

const PostCommentEntryFiled = () => {
    const params = useParams()
    const postId = params.postId
    const [text, setText] = useState('')
    const dispatch = useDispatch()

    const posts = useSelector(getPostsSt)
    const createdComment = useSelector(getCreatedComment)

    let inputCommentValue = useRef()

    let addComment = () => {
        let text = inputCommentValue.current.value
        if (text !== '') {
            posts.map((elem) => {
                if (elem.id === postId) {
                    dispatch(addNewComment(elem, postId, createdComment))
                }
            })
            setText('')
        }
    }

    let updateTextAndCreateComment = (e) => {
        let value = e.target.value
        setText(value)
        dispatch(createComment(postId, value))
    }

    return (
        <Wrapper>
            <EntryFiled>
                <img src={Avatar} alt="" />
                <input
                    onChange={updateTextAndCreateComment}
                    type="text"
                    ref={inputCommentValue}
                    value={text}
                    placeholder="Add a comment"
                />
            </EntryFiled>
            <Button onClick={addComment}>Send</Button>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0.75rem 1rem;
    background: #ffffff;
    max-width: 768px;
`

const EntryFiled = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    width: 100%;
`

const Button = styled.button`
    background: linear-gradient(270.95deg, #888bf4 0%, #5151c6 100%);
    border-radius: 30px;
    padding: 0.31rem 0.625rem;
    color: #ffffff;
    line-height: 150%;
`

export { PostCommentEntryFiled }
