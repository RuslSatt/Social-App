import React from 'react'
import { HomePagePostHeader } from './HomePagePostHeader/HomePagePostHeader'
import { HomePagePostPoster } from './HomePagePostPoster/HomePagePostPoster'
import { HomePagePostNav } from './HomePagePostNav/HomePagePostNav'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const HomePagePost = (props) => {
    const scrollTo = () => {
        window.scrollTo(0, 0)
    }

    return (
        <div>
            {props.Posts.map((post) => {
                return (
                    <Post onClick={scrollTo} key={post.id}>
                        <NavLink to={`/post/` + post.id}>
                            <HomePagePostHeader
                                avatar={post.avatar}
                                name={post.name}
                                time={post.time}
                            />
                        </NavLink>
                        <HomePagePostPoster poster={post.poster} />
                        <HomePagePostNav
                            countComment={post.countComment}
                            countLikes={post.countLikes}
                        />
                    </Post>
                )
            })}
        </div>
    )
}

const Post = styled.div`
    margin-bottom: 15px;
`

export { HomePagePost }
