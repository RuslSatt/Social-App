import React, { useEffect } from 'react'
import { Footer } from '../Footer/Footer'
import { Search } from '../Search/Search'
import { NavHome } from './NavHome/NavHome'
import { HomePagePost } from './PostsHome/HomePagePost'
import { Preload } from '../Common/Preload/Preload'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { getIsNavigate } from '../../redux/Selectors/AppSelectors'
import { getIsFetching } from '../../redux/Selectors/HomePageSelectors'
import { getPostsSt } from '../../redux/Selectors/PostCommentSelector'
import { getPosts } from '../../redux/HomePageReducer'
import styled from 'styled-components'

const HomePage = () => {
    const isNavigate = useSelector(getIsNavigate)
    const isFetching = useSelector(getIsFetching)
    const posts = useSelector(getPostsSt)
    const dispatch = useDispatch()

    useEffect(() => {
        if (posts.length === 0) dispatch(getPosts())
    })

    if (isNavigate) {
        return <Navigate to="/auth" />
    }

    return (
        <Wrapper>
            <Search />
            <NavHome />
            {isFetching ? (
                <Preload />
            ) : (
                <Posts>
                    <HomePagePost Posts={posts} />
                </Posts>
            )}
            <Footer />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    background: rgba(136, 139, 244, 0);
    min-height: 100vh;
    overflow: hidden;
    animation: home 1s ease-in-out;

    @keyframes home {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`

const Posts = styled.div`
    padding: 20px;
    margin-bottom: 71px;
`

export { HomePage }
