import React from 'react';
import NavPostHomeStyle from './NavPostHome.module.css'
import {ReactComponent as PlusIcon} from '../../../../assets/images/plus.svg'
import {ReactComponent as ChatIcon} from '../../../../assets/images/Chat.svg'
import {ReactComponent as HeartIcon} from '../../../../assets/images/heart.svg'

const NavPostHome = (props) => {
    return (
        <div className={NavPostHomeStyle.Nav}>
            <PlusIcon/>
            <div className={NavPostHomeStyle.comments__likes}>
                <div className={NavPostHomeStyle.comments}>
                    <p>
                        {props.countComment}
                    </p>
                    <ChatIcon/>
                </div>
                <div className={NavPostHomeStyle.likes}>
                    <p>
                        {props.countLikes}
                    </p>
                    <HeartIcon/>
                </div>
            </div>
        </div>
    );
};

export {NavPostHome};
