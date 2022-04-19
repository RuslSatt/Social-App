import React from 'react';
import {connect} from "react-redux";
import {getPostAC, setCommentAC} from "../../redux/HomePageReducer";
import {doc, onSnapshot, getFirestore, getDocs, collection} from "firebase/firestore";
import {Post} from "./Post";

class PostSecondContainer extends React.Component {

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

const mapStateToProps = (state) => {
    return {
        Posts: state.homePage.Posts,
    }
};

const mapToDispatchProps = (dispatch) => {
    return {
        setComment (comment) {
            dispatch(setCommentAC(comment))
        },
        setPost: (post) => {
            dispatch(getPostAC(post))
        },
    }
}

const PostContainer = connect(mapStateToProps, mapToDispatchProps)(PostSecondContainer);

export {PostContainer};




