import React, {useRef} from 'react';
import AddCommentPostStyle from './AddCommentPost.module.css'
import Avatar from '../../../assets/images/ava-192.png'


const AddCommentPost = (props) => {

    let inputCommentValue = useRef();

    let addComment = () => {
        let text = inputCommentValue.current.value;
        if (text !== '') {
            props.addComment();
        }
    }

    let updateComment = (e) => {
        let text = e.target.value;
        props.updateComment(text);
    }

    return (
        <div className={AddCommentPostStyle.AddComment}>
            <div className={AddCommentPostStyle.comment}>
                <img src={Avatar} alt=""/>
                <input onChange={updateComment} type="text"
                       ref={inputCommentValue}
                       value={props.newCommentText}
                       placeholder='Add a comment'/>
            </div>
            <button onClick={addComment} className={AddCommentPostStyle.btn}>
                Send
            </button>
        </div>
    );
};

export {AddCommentPost};
