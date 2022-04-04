import React from 'react';
import ChatMessageStyle from './ChatMessage.module.css'
import {HeaderChat} from "./HeaderChat/HeaderChat";
import {UserMessageChat} from "./UserMessageChat/UserMessageChat";
import {TypeMessageContainer} from "./TypeMessage/TypeMessageContainer";

const ChatMessage = (props) => {

    let userMessageChat = props.newMessage.map(elem => <UserMessageChat time={elem.time}
                                                                        message={elem.message}
                                                                        key={elem.id}/>)

    return (
        <div className={ChatMessageStyle.Chat}>
            <HeaderChat/>
            <div className={ChatMessageStyle.body__user}>
                {userMessageChat}
            </div>
            <TypeMessageContainer store={props.store}/>
        </div>
    );
};

export {ChatMessage};
