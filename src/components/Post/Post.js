import React, {useEffect} from 'react';
import PostsStyle from "./Post.module.css";
import {HeaderPost} from "./HeaderPost/HeaderPost";
import {HeaderPostHome} from "../HomePage/PostsHome/HeaderPostHome/HeaderPostHome";
import {PosterPostHome} from "../HomePage/PostsHome/PosterPostHome/PosterPostHome";
import {NavPost} from "./NavPost/NavPost";
import {DescriptionPost} from "./DescriptionPost/DescriptionPost";
import {CommentsPost} from "./CommentsPost/CommentsPost";
import {AddCommentPostContainer} from "./AddCommentPost/AddCommentPostContainer";
import {useParams} from "react-router-dom";
import {collection, doc, getDocs, getFirestore, onSnapshot} from "firebase/firestore";


const Post = (props) => {
    const params = useParams();
    const postId = params.postId;
    useEffect(() => {
        async function getFetch () {
            if (props.Posts.length === 0) {
                const db = getFirestore();
                const data = await getDocs(collection(db, "users"));
                props.setPost(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
            }
            if (props.Posts.length === 0) {
                props.Posts.map(elem => {
                    if (elem.id === postId) {
                        const db = getFirestore();
                        onSnapshot(doc(db, "users", elem.id), (doc) => {
                            props.setComment(doc.data().newComment);
                        });
                    }
                })
            }
        }
        getFetch().then();
    })

    return (
        <div>
            {props.Posts.map(post => {
                    if (post.id === postId) {
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
