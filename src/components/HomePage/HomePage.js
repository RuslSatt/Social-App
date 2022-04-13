import React from 'react';
import HomePageStyle from './HomePage.module.css'
import {Footer} from "../Footer/Footer";
import {Search} from "../Search/Search";
import {NavHome} from "./NavHome/NavHome";
import {PostsHome} from "./PostsHome/PostsHome";



const HomePage = (props) => {
    const Posts = props.postState.map (elem => <PostsHome
        name={elem.name}
        time={elem.time}
        countComment={elem.countComment}
        countLikes={elem.countLikes}
        key={elem.id}
        id={elem.id}
        avatar={elem.avatar}
        poster={elem.poster}
        getPostId={props.getPostId}
    />)
    return (
        <div className={HomePageStyle.HomePage}>
            <Search/>
            <NavHome/>
            <div className={HomePageStyle.Posts}>
                {Posts}
            </div>
            <Footer/>
        </div>
    );
};

export {HomePage};