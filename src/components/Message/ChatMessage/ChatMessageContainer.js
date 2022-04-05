import React from 'react';
import {connect} from "react-redux";
import {ChatMessage} from "./ChatMessage";

const mapStateToProps = (state) => {
    return {
        newMessage: state.messagePage.newMessage,
    }
};

const ChatMessageContainer = connect(mapStateToProps)(ChatMessage)

export {ChatMessageContainer};
