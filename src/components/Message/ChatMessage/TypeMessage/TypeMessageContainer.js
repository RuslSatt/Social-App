import React from 'react';
import {addMessageActionCreator, updateTypeMessageActionCreator} from "../../../../redux/MessagePageReducer";
import {TypeMessage} from "./TypeMessage";

const TypeMessageContainer = (props) => {
    let state = props.store.getState();

    let updateMessage = (message) => {
        props.store.dispatch(updateTypeMessageActionCreator(message))
    }
    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    }
    return (
        <TypeMessage newMessageText={state.messagePage.newMessageText}
                     updateMessage={updateMessage}
                     addMessage={addMessage}
        />
    );
};

export {TypeMessageContainer};
