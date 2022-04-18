import {connect} from "react-redux";
import {Post} from "./Post";
import {getPostAC, setCommentAC} from "../../redux/HomePageReducer";


const mapStateToProps = (state) => {
    const Posts = state.homePage.Posts.filter ( elem => elem.open === true);
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

const PostContainer = connect(mapStateToProps, mapToDispatchProps)(Post);

export {PostContainer};
