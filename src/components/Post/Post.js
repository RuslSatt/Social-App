import React from 'react';
import PostsStyle from "./Post.module.css";
import {HeaderPost} from "./HeaderPost/HeaderPost";
import {HeaderPostHome} from "../HomePage/PostsHome/HeaderPostHome/HeaderPostHome";
import {PosterPostHome} from "../HomePage/PostsHome/PosterPostHome/PosterPostHome";
import {NavPost} from "./NavPost/NavPost";
import {DescriptionPost} from "./DescriptionPost/DescriptionPost";
import {CommentsPost} from "./CommentsPost/CommentsPost";
import {AddCommentPostContainer} from "./AddCommentPost/AddCommentPostContainer";

const Post = (props) => {
    return (
        <div>
            {
                props.Posts.map(post => {
                    if (post.open === true) {
                        return (
                            <div key={post.id} className={PostsStyle.Posts}>
                                <HeaderPost/>
                                <HeaderPostHome avatar={post.avatar} name={post.name} time={post.time}/>
                                <PosterPostHome poster={post.poster}/>
                                <NavPost countWatch={post.countWatch}
                                         countComment={post.countComment}
                                         countLikes={post.countLikes}/>
                                <DescriptionPost title={post.title} description={post.description}/>
                                <div className={PostsStyle.comments}>
                                    <CommentsPost newComment={post.newComment}/>
                                </div>
                                <AddCommentPostContainer/>
                            </div>
                        )
                    }
                })
            }
        </div>
    );
};

export {Post};
