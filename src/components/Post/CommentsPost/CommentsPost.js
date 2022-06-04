import React from 'react'
import styled from 'styled-components'
import Avatar from '../../../assets/images/ava-192.png'

const CommentsPost = () => {
    return (
        <div>
            {this.props.newComment?.map((comment) => {
                return (
                    <Comment key={comment.id}>
                        <CommentBody>
                            <img src={Avatar} alt="" />
                            <Info>
                                <p>{comment.name}</p>
                                <p>{comment.comment}</p>
                                <p>{comment.time}</p>
                            </Info>
                        </CommentBody>
                    </Comment>
                )
            })}
        </div>
    )
}

const Comment = styled.div`
    padding: 0.3rem 1rem;
    animation: comment 0.5s ease-in-out;

    @keyframes comment {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`

const CommentBody = styled.div`
    background: #f6f7f9;
    border-radius: 8px;
    padding: 1rem;
    display: flex;
    gap: 1rem;
    align-items: flex-start;
`

const Info = styled.div`
    p:nth-child(1) {
        margin-bottom: 0.3rem;
        font-weight: 700;
        font-size: 16px;
        line-height: 120%;
        color: #212121;
    }

    p:nth-child(2) {
        margin-bottom: 0.7rem;
        line-height: 120%;
        color: #212121;
    }

    p:nth-child(3) {
        font-size: 12px;
        line-height: 150%;
        color: #828282;
    }
`

export { CommentsPost }
