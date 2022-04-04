import React from 'react';
import {addCommentActionCreator, updateCommentActionCreator} from "../../../redux/HomePageReducer";
import {AddCommentPost} from "./AddCommentPost";


const AddCommentPostContainer = (props) => {
    let state = props.store.getState();

    let addComment = () => {
        props.store.dispatch(addCommentActionCreator());
    }

    let updateComment = (text) => {
        props.store.dispatch(updateCommentActionCreator(text));
    }

    return (
        <AddCommentPost addComment={addComment}
                        updateComment={updateComment}
                        newCommentText={state.homePage.newCommentText}
        />
    );
};

export {AddCommentPostContainer};
