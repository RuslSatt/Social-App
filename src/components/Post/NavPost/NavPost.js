import React from 'react';
import NavPostStyle from './NavPost.module.css'
import {ReactComponent as EyeIcon} from '../../../assets/images/eye.svg'
import {ReactComponent as CommentIcon} from '../../../assets/images/Chat.svg'
import {ReactComponent as HeartIcon} from '../../../assets/images/heart.svg'

const NavPost = (props) => {
    return (
        <div className={NavPostStyle.Nav}>
            <div className={NavPostStyle.watch}>
                <p>
                    {props.countWatch}
                </p>
                <EyeIcon/>
            </div>
            <div className={NavPostStyle.comment}>
                <p>
                    {props.countComment}
                </p>
                <CommentIcon/>
            </div>
            <div className={NavPostStyle.likes}>
                <p>
                    {props.countLikes}
                </p>
                <HeartIcon/>
            </div>
        </div>
    );
};

export {NavPost};
