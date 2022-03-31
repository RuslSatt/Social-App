import React from 'react';
import UserMessageChatStyle from './UserMessageChat.module.css'
import Ava from '../../../../assets/images/avatar2.png'

const UserMessageChat = () => {
    return (
        <div className={UserMessageChatStyle.Message}>
            <img className={UserMessageChatStyle.avatar} src={Ava} alt=""/>
            <div className={UserMessageChatStyle.block__message}>
                <p>
                    That’s very nice place! you guys made a very good decision.
                    Can’t wait to go on vacation!
                </p>
                <p>
                    31.03
                </p>
            </div>
        </div>
    );
};

export {UserMessageChat};
