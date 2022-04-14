import {addCommentActionCreator, updateCommentActionCreator} from "../../../redux/HomePageReducer";
import {AddCommentPost} from "./AddCommentPost";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        newCommentText: state.homePage.newCommentText
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
    }
}


const AddCommentPostContainer = connect(mapStateToProps, mapDispatchToProps)(AddCommentPost);

export {AddCommentPostContainer};
