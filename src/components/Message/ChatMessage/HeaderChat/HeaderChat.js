import React from 'react';
import {NavLink} from "react-router-dom";
import {ReactComponent as ArrowIcon} from "../../../../assets/images/arrow-back.svg";
import HeaderChatStyle from "./HeaderChat.module.css";

const HeaderChat = () => {
    return (
        <div className={HeaderChatStyle.Header}>
            <NavLink to='/message'>
                <ArrowIcon />
            </NavLink>
            <h2 className={HeaderChatStyle.title}>
                Bruno
            </h2>
        </div>
    );
};

export {HeaderChat};
