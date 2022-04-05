import React from 'react';
import {connect} from "react-redux";
import {Message} from "./Message";

const mapStateToProps = (state) => {
    return {
        messageState: state.messagePage.Message,
    }
};

const MessageContainer = connect(mapStateToProps)(Message);

export {MessageContainer};
