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
import {Post} from "./Post";


class PostApiContainer extends React.Component {

    async componentDidMount() {
        if (this.props.Posts.length === 0) {
            const db = getFirestore();
            const data = await getDocs(collection(db, "users"));
            this.props.setPost(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
        }
        if (this.props.Posts.length === 0) {
            this.props.Posts.map(elem => {
                if (elem.open === true) {
                    const db = getFirestore();
                    const unsubOne = onSnapshot(doc(db, "users", elem.id), (doc) => {
                        this.props.setComment(doc.data().newComment);
                    });
                }
            })
        }
    }
    render() {

        return <Post Posts={this.props.Posts}/>
    };
}


export {PostApiContainer};
