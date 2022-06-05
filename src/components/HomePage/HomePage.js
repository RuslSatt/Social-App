import React, { useEffect } from 'react'
import HomePageStyle from './HomePage.module.css'
import { Footer } from '../Footer/Footer'
import { Search } from '../Search/Search'
import { NavHome } from './NavHome/NavHome'
import { PostsHome } from './PostsHome/PostsHome'
import { Preload } from '../Common/Preload/Preload'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { getIsNavigate } from '../../redux/Selectors/AppSelectors'
import { getIsFetching } from '../../redux/Selectors/HomePageSelectors'
import { getPostsSt } from '../../redux/Selectors/PostCommentSelector'
import { getPosts } from '../../redux/HomePageReducer'

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
        <div className={HomePageStyle.HomePage}>
            <Search />
            <NavHome />
            {isFetching ? (
                <Preload />
            ) : (
                <div className={HomePageStyle.Posts}>
                    <PostsHome Posts={posts} />
                </div>
            )}
            <Footer />
        </div>
    )
}

export { HomePage }
