import React from 'react';
import ChatMessageStyle from './ChatMessage.module.css'
import {HeaderChat} from "./HeaderChat/HeaderChat";
import {TypeMessage} from "./TypeMessage/TypeMessage";
import {UserMessageChat} from "./UserMessageChat/UserMessageChat";

const ChatMessage = (props) => {

    let userMessageChat = props.dataMessage.map (elem => <UserMessageChat time={elem.time}
                                                                          message={elem.message}
                                                                          key={elem.id}/>)

    return (
        <div className={ChatMessageStyle.Chat}>
            <HeaderChat/>
            <div className={ChatMessageStyle.body__user}>
                {userMessageChat}
            </div>
            <TypeMessage dispatch={props.dispatch} newMessageText={props.newMessageText}/>

        </div>
    );
};

export {ChatMessage};
