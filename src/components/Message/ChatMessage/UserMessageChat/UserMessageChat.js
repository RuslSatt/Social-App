import React from 'react';
import UserMessageChatStyle from './UserMessageChat.module.css'
import Ava from '../../../../assets/images/avatar2.png'

const UserMessageChat = (props) => {
    return (
        <div className={UserMessageChatStyle.Message}>
            <img className={UserMessageChatStyle.avatar} src={Ava} alt=""/>
            <div className={UserMessageChatStyle.block__message}>
                <p>
                    {props.message}
                </p>
                <p>
                    {props.time}
                </p>
            </div>
        </div>
    );
};

export {UserMessageChat};
