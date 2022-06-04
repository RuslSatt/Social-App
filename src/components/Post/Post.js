import React, { useEffect } from 'react'
import PostsStyle from './Post.module.css'
import { HeaderPost } from './HeaderPost/HeaderPost'
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
                        <div key={post.id} className={PostsStyle.Posts}>
                            <HeaderPost />
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
                            <div className={PostsStyle.comments}>
                                <PostComment newComment={post.newComment} />
                            </div>
                            <PostCommentEntryFiled />
                        </div>
                    )
                } else {
                    return ''
                }
            })}
        </div>
    )
}

export { Post }
