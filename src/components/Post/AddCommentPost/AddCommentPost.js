import React, {useRef} from 'react';
import AddCommentPostStyle from './AddCommentPost.module.css'
import Avatar from '../../../assets/images/ava-192.png'
import {addCommentActionCreator, updateCommentActionCreator} from "../../../state";



const AddCommentPost = (props) => {

    let inputCommentValue = useRef();

    let addComment = () => {
        let text = inputCommentValue.current.value;
        if (text !== '') {
            props.dispatch(addCommentActionCreator());
        }
    }

    let updateComment = () => {
        let text = inputCommentValue.current.value;
        props.dispatch(updateCommentActionCreator(text));
    }

    return (
        <div className={AddCommentPostStyle.AddComment}>
            <div className={AddCommentPostStyle.comment}>
                <img src={Avatar} alt=""/>
                <input onChange={updateComment} type="text"
                       ref={inputCommentValue}
                       value={props.newTextComment}
                       placeholder='Add a comment'/>
            </div>
            <button onClick={addComment} className={AddCommentPostStyle.btn}>
                Send
            </button>
        </div>
    );
};

export {AddCommentPost};
