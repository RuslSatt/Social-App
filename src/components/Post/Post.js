import React from 'react';
import PostsStyle from './Post.module.css'
import {HeaderPost} from "./HeaderPost/HeaderPost";
import {HeaderPostHome} from "../HomePage/PostsHome/HeaderPostHome/HeaderPostHome";
import {PosterPostHome} from "../HomePage/PostsHome/PosterPostHome/PosterPostHome";
import {NavPost} from "./NavPost/NavPost";
import {DescriptionPost} from "./DescriptionPost/DescriptionPost";
import {CommentsPost} from "./CommentsPost/CommentsPost";
import {AddCommentPostContainer} from "./AddCommentPost/AddCommentPostContainer";
import {doc, onSnapshot, getFirestore} from "firebase/firestore";


class Post extends React.Component {

    componentDidMount() {
        this.props.Posts.map (elem => {
            if (elem.open === true) {
                const db = getFirestore();
                const unsub = onSnapshot(doc(db, "users", "ZjcJsvXX2pqK9cbqNDuQ"), (doc) => {
                    this.props.setComment(doc.data().newComment);
                });
            }
        })
    }


    render () {
        let commentPosts = this.props.newComment.map(elem => <CommentsPost name={elem.name}
                                                                      comment={elem.comment}
                                                                      time={elem.time}
                                                                      key={elem.id}/>)


        return (
            <div className={PostsStyle.Posts}>
                <HeaderPost/>
                <HeaderPostHome avatar={this.props.avatar} name={this.props.name} time={this.props.time}/>
                <PosterPostHome poster={this.props.poster}/>
                <NavPost countWatch={this.props.countWatch}
                         countComment={this.props.countComment}
                         countLikes={this.props.countLikes}/>
                <DescriptionPost title={this.props.title} description={this.props.description}/>
                <div className={PostsStyle.comments}>
                    {commentPosts}
                </div>
                <AddCommentPostContainer/>
            </div>
        );
    };
    }


export {Post};
