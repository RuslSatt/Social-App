import React from 'react';
import CommentsPostStyle from './CommentsPost.module.css'
import Avatar from '../../../assets/images/ava-192.png'

const CommentsPost = (props) => {
    return (
        <div className={CommentsPostStyle.Comment}>
            <div className={CommentsPostStyle.comment__body}>
                <img src={Avatar} alt=""/>
                <div className={CommentsPostStyle.text}>
                    <p>
                        {props.name}
                    </p>
                    <p>
                        {props.comment}
                    </p>
                    <p>
                        {props.time}
                    </p>
                </div>
            </div>
        </div>
    );
};

export {CommentsPost};
