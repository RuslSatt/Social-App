import React, { useEffect } from 'react'
import PostsStyle from './Post.module.css'
import { HeaderPost } from './HeaderPost/HeaderPost'
import { HeaderPostHome } from '../HomePage/PostsHome/HeaderPostHome/HeaderPostHome'
import { PosterPostHome } from '../HomePage/PostsHome/PosterPostHome/PosterPostHome'
import { NavPost } from './NavPost/NavPost'
import { DescriptionPost } from './DescriptionPost/DescriptionPost'
import { CommentsPost } from './CommentsPost/CommentsPost'
import { AddCommentPostContainer } from './AddCommentPost/AddCommentPostContainer'
import { Navigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Post = (props) => {
    const params = useParams()
    const postId = params.postId

    useEffect(() => {
        if (props.Posts.length === 0) {
            props.getPosts()
        }
        if (props.Posts.length === 0) {
            props.Posts.map((elem) =>
                elem.id === postId ? props.getCommentPosts(elem) : ''
            )
        }
    })

    const app = useSelector((state) => state.app)

    if (app.isNavigate) {
        return <Navigate to="/auth" />
    }

    return (
        <div>
            {props.Posts.map((post) => {
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
                            <NavPost
                                countWatch={post.countWatch}
                                countComment={post.countComment}
                                countLikes={post.countLikes}
                            />
                            <DescriptionPost
                                title={post.title}
                                description={post.description}
                            />
                            <div className={PostsStyle.comments}>
                                <CommentsPost newComment={post.newComment} />
                            </div>
                            <AddCommentPostContainer />
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
