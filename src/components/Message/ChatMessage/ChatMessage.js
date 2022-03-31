import React from 'react';
import ChatMessageStyle from './ChatMessage.module.css'
import {HeaderChat} from "./HeaderChat/HeaderChat";
import {TypeMessage} from "./TypeMessage/TypeMessage";
import {UserMessageChat} from "./UserMessageChat/UserMessageChat";

const ChatMessage = (props) => {
    return (
        <div className={ChatMessageStyle.Chat}>
            <HeaderChat/>
            <div className={ChatMessageStyle.body__user}>
                <UserMessageChat/>
                <UserMessageChat/>
                <UserMessageChat/>
            </div>
            <TypeMessage dispatch={props.dispatch} newMessage={props.newMessage}/>

        </div>
    );
};

export {ChatMessage};
