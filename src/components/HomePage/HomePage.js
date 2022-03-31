import React from 'react';
import HomePageStyle from './HomePage.module.css'
import {Footer} from "../Footer/Footer";
import {Search} from "../Search/Search";
import {NavHome} from "./NavHome/NavHome";
import {PostsHome} from "./PostsHome/PostsHome";

const HomePage = () => {
    return (
        <div className={HomePageStyle.HomePage}>
            <Search/>
            <NavHome/>
            <div className={HomePageStyle.Posts}>
                <PostsHome/>
            </div>
            <Footer/>
        </div>
    );
};

export {HomePage};