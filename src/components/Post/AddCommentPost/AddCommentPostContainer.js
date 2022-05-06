import {addComment, setComment, updateTextForComment, createComment, addNewComment} from "../../../redux/HomePageReducer";
import {AddCommentPost} from "./AddCommentPost";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        newCommentText: state.homePage.newCommentText,
        Posts: state.homePage.Posts,
        createdComment: state.homePage.createdComment
    }
}


const AddCommentPostContainer = connect(mapStateToProps, {
    addComment,
    updateTextForComment,
    setComment,
    createComment,
    addNewComment
})(AddCommentPost);

export {AddCommentPostContainer};
