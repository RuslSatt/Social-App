import React from 'react';
import PostsHomeStyle from './PostsHome.module.css'
import {HeaderPostHome} from "./HeaderPostHome/HeaderPostHome";
import {PosterPostHome} from "./PosterPostHome/PosterPostHome";
import {NavPostHome} from "./NavPostHome/NavPostHome";

const PostsHome = () => {
    return (
        <div className={PostsHomeStyle.Post}>
            <HeaderPostHome/>
            <PosterPostHome/>
            <NavPostHome/>
        </div>
    );
};

export {PostsHome};
