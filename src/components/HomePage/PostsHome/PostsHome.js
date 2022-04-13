import React from 'react';
import PostsHomeStyle from './PostsHome.module.css'
import {HeaderPostHome} from "./HeaderPostHome/HeaderPostHome";
import {PosterPostHome} from "./PosterPostHome/PosterPostHome";
import {NavPostHome} from "./NavPostHome/NavPostHome";
import {NavLink} from "react-router-dom";

const PostsHome = (props) => {
    const getId = () => {
        const postId = props.id;
        props.getPostId(postId);
    }
    return (
        <div onClick={getId} className={PostsHomeStyle.Post}>
            <NavLink   to='/post'>
                <HeaderPostHome avatar={props.avatar} name={props.name} time={props.time}/>
            </NavLink>
            <PosterPostHome poster={props.poster}/>
            <NavPostHome countComment={props.countComment} countLikes={props.countLikes}/>
        </div>
    );
};

export {PostsHome};
