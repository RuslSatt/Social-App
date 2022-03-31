import React from 'react';
import UserMessageStyle from "./UserMessage.module.css";
import Avatar from "../../../assets/images/userMessage.png";
import {ReactComponent as ChatIcon} from '../../../assets/images/Chat.svg'
import {NavLink} from "react-router-dom";

const UserMessage = (props) => {
    return (
        <NavLink to='/user-chat' className={UserMessageStyle.Message}>
            <div className={UserMessageStyle.message__body}>
                <img src={Avatar} alt=""/>
                <div className={UserMessageStyle.text}>
                    <p className={UserMessageStyle.name}>
                        {props.name}
                    </p>
                    <p className={UserMessageStyle.text__message}>
                        {props.textMessage}
                    </p>
                    <div className={UserMessageStyle.footer}>
                        <p className={UserMessageStyle.time}>
                            {props.time}
                        </p>
                        <div className={UserMessageStyle.count__message}>
                            <p>
                                {props.countMessage}
                            </p>
                            <ChatIcon/>
                        </div>
                    </div>
                </div>
            </div>
        </NavLink>
    );
};

export {UserMessage};
