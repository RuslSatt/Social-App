import React from 'react';
import PostsHomeStyle from './PostsHome.module.css'
import {HeaderPostHome} from "./HeaderPostHome/HeaderPostHome";
import {PosterPostHome} from "./PosterPostHome/PosterPostHome";
import {NavPostHome} from "./NavPostHome/NavPostHome";
import {NavLink} from "react-router-dom";

const PostsHome = (props) => {
    return (
        <div className={PostsHomeStyle.Post}>
            <NavLink to='/Post'>
                <HeaderPostHome name={props.name} time={props.time}/>
            </NavLink>
            <PosterPostHome/>
            <NavPostHome countComment={props.countComment} countLikes={props.countLikes}/>
        </div>
    );
};

export {PostsHome};
