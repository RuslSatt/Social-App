import React, { useEffect } from 'react'
import styled from 'styled-components'
import { PostHeader } from './PostHeader/PostHeader'
import { HeaderPostHome } from '../HomePage/PostsHome/HeaderPostHome/HeaderPostHome'
import { PosterPostHome } from '../HomePage/PostsHome/PosterPostHome/PosterPostHome'
import { PostNav } from './PostNav/PostNav'
import { DescriptionPost } from './DescriptionPost/DescriptionPost'
import { PostComment } from './PostComment/PostComment'
import { Navigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getCommentPosts, getPosts } from '../../redux/HomePageReducer'
import { getIsNavigate } from '../../redux/Selectors/AppSelectors'
import { PostCommentEntryFiled } from './PostCommentEntryFiled/PostCommentEntryFiled'
import { getPostsSt } from '../../redux/Selectors/PostCommentSelector'

const Post = () => {
    const params = useParams()
    const isNavigate = useSelector(getIsNavigate)
    const posts = useSelector(getPostsSt)
    const dispatch = useDispatch()
    const postId = params.postId

    useEffect(() => {
        if (posts.length === 0) {
            dispatch(getPosts())
        }
        if (posts.length === 0) {
            posts.map((elem) =>
                elem.id === postId ? dispatch(getCommentPosts(elem)) : ''
            )
        }
    })

    if (isNavigate) {
        return <Navigate to="/auth" />
    }

    return (
        <div>
            {posts.map((post) => {
                if (post.id === postId) {
                    return (
                        <Posts key={post.id}>
                            <PostHeader />
                            <HeaderPostHome
                                avatar={post.avatar}
                                name={post.name}
                                time={post.time}
                            />
                            <PosterPostHome poster={post.poster} />
                            <PostNav
                                countWatch={post.countWatch}
                                countComment={post.countComment}
                                countLikes={post.countLikes}
                            />
                            <DescriptionPost
                                title={post.title}
                                description={post.description}
                            />
                            <Comment>
                                <PostComment newComment={post.newComment} />
                            </Comment>
                            <PostCommentEntryFiled />
                        </Posts>
                    )
                } else {
                    return ''
                }
            })}
        </div>
    )
}

const Posts = styled.div`
    min-height: 100vh;
    overflow: hidden;
`

const Comment = styled.div`
    margin-bottom: 60px;
`

export { Post }
