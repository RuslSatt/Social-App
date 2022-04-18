import React from 'react';
import PostsStyle from './Post.module.css'
import {HeaderPost} from "./HeaderPost/HeaderPost";
import {HeaderPostHome} from "../HomePage/PostsHome/HeaderPostHome/HeaderPostHome";
import {PosterPostHome} from "../HomePage/PostsHome/PosterPostHome/PosterPostHome";
import {NavPost} from "./NavPost/NavPost";
import {DescriptionPost} from "./DescriptionPost/DescriptionPost";
import {CommentsPost} from "./CommentsPost/CommentsPost";
import {AddCommentPostContainer} from "./AddCommentPost/AddCommentPostContainer";
import {doc, onSnapshot, getFirestore, getDocs, collection} from "firebase/firestore";


class Post extends React.Component {

    async componentDidMount() {
        const db = getFirestore();
        const data = await getDocs(collection(db, "users"));
        this.props.setPost(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));

        this.props.Posts.map(elem => {
            if (elem.open === true) {
                const db = getFirestore();
                const unsubOne = onSnapshot(doc(db, "users", elem.id), (doc) => {
                    this.props.setComment(doc.data().newComment);
                });
            }
        })
    }


    render() {
        return (
            <div>
                {
                    this.props.Posts.map (post => {
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
}


export {Post};
