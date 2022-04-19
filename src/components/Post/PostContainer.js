import {connect} from "react-redux";
import {PostApiContainer} from "./PostApiContainer";
import {getPostAC, setCommentAC} from "../../redux/HomePageReducer";


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

const PostContainer = connect(mapStateToProps, mapToDispatchProps)(PostApiContainer);

export {PostContainer};
