import {addCommentActionCreator, setCommentAC, updateCommentActionCreator} from "../../../redux/HomePageReducer";
import {AddCommentPost} from "./AddCommentPost";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        newCommentText: state.homePage.newCommentText,
        Posts: state.homePage.Posts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addComment: () => {
            dispatch(addCommentActionCreator());
            },
        updateComment: (text) => {
            dispatch(updateCommentActionCreator(text));
        },
        setComment (comment) {
            dispatch(setCommentAC(comment))
        }
    }
}


const AddCommentPostContainer = connect(mapStateToProps, mapDispatchToProps)(AddCommentPost);

export {AddCommentPostContainer};
