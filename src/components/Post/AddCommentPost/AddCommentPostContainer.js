import {addComment, setComment, updateTextForComment} from "../../../redux/HomePageReducer";
import {AddCommentPost} from "./AddCommentPost";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        newCommentText: state.homePage.newCommentText,
        Posts: state.homePage.Posts
    }
}


const AddCommentPostContainer = connect(mapStateToProps, {
    addComment,
    updateTextForComment,
    setComment,
})(AddCommentPost);

export {AddCommentPostContainer};
