import React from 'react'
import HomePageStyle from './HomePage.module.css'
import { Footer } from '../Footer/Footer'
import { Search } from '../Search/Search'
import { NavHome } from './NavHome/NavHome'
import { PostsHome } from './PostsHome/PostsHome'
import { Preload } from '../Common/Preload/Preload'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { getIsNavigate } from '../../redux/Selectors/AppSelectors'

const HomePage = (props) => {
    const isNavigate = useSelector(getIsNavigate)

    if (isNavigate) {
        return <Navigate to="/auth" />
    }

    return (
        <div className={HomePageStyle.HomePage}>
            <Search />
            <NavHome />
            {props.isFetching ? (
                <Preload />
            ) : (
                <div className={HomePageStyle.Posts}>
                    <PostsHome Posts={props.Posts} />
                </div>
            )}
            <Footer />
        </div>
    )
}

export { HomePage }
