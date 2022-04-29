import React from 'react';
import PostsHomeStyle from './PostsHome.module.css'
import {HeaderPostHome} from "./HeaderPostHome/HeaderPostHome";
import {PosterPostHome} from "./PosterPostHome/PosterPostHome";
import {NavPostHome} from "./NavPostHome/NavPostHome";
import {NavLink} from "react-router-dom";

class PostsHome extends React.Component {

    render() {
        const scrollTo = () => {
            window.scrollTo(0, 0)
        }
        return (
            <div>
                {this.props.Posts.map(post => {
                    return (
                        <div onClick={scrollTo} key={post.id} className={PostsHomeStyle.Post}>
                            <NavLink to={`/post/` + post.id}>
                                <HeaderPostHome avatar={post.avatar} name={post.name} time={post.time}/>
                            </NavLink>
                            <PosterPostHome poster={post.poster}/>
                            <NavPostHome countComment={post.countComment} countLikes={post.countLikes}/>
                        </div>
                    )
                })}
            </div>

        );
    }
}

export {PostsHome};
