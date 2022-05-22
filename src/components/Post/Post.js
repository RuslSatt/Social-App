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
import { useDispatch, useSelector } from 'react-redux'
import { getCommentPosts, getPosts } from '../../redux/HomePageReducer'

const Post = (props) => {
    const params = useParams()
    const app = useSelector((state) => state.app)
    const posts = useSelector((state) => state.homePage.Posts)
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

    if (app.isNavigate) {
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
