import React from 'react';
import PostsStyle from './Post.module.css'
import {HeaderPost} from "./HeaderPost/HeaderPost";
import {HeaderPostHome} from "../HomePage/PostsHome/HeaderPostHome/HeaderPostHome";
import {PosterPostHome} from "../HomePage/PostsHome/PosterPostHome/PosterPostHome";
import {NavPost} from "./NavPost/NavPost";
import {DescriptionPost} from "./DescriptionPost/DescriptionPost";
import {AddCommentPost} from "./AddCommentPost/AddCommentPost";
import {CommentsPost} from "./CommentsPost/CommentsPost";


const Post = (props) => {

    let commentPosts = props.dataComments.map(elem => <CommentsPost name={elem.name}
                                                                    comment={elem.comment}
                                                                    time={elem.time}
                                                                    key={elem.id}/>)

    return (
        <div className={PostsStyle.Posts}>
            <HeaderPost/>
            <HeaderPostHome name={props.postState.name} time={props.postState.time}/>
            <PosterPostHome/>
            <NavPost countWatch={props.postState.countWatch}
                     countComment={props.postState.countComment}
                     countLikes={props.postState.countLikes}/>
            <DescriptionPost title={props.postState.title} description={props.postState.description}/>
            <div className={PostsStyle.comments}>
                {commentPosts}
            </div>
            <AddCommentPost newTextComment={props.newTextComment} dispatch={props.dispatch}/>
        </div>
    );
};

export {Post};
