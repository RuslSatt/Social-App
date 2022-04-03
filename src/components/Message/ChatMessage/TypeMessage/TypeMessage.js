import React, {useRef} from 'react';
import TypeMessageStyle from './TypeMessage.module.css'
import IconImage from '../../../../assets/images/addImage.svg'
import IconAdd from '../../../../assets/images/Send.svg'
import {addMessageActionCreator, updateTypeMessageActionCreator} from "../../../../redux/MessagePageReducer";

const TypeMessage = (props) => {
    let updateMessage = (e) => {
        let message = e.target.value;
        props.dispatch(updateTypeMessageActionCreator(message))
    }
    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
    }
    return (
        <div className={TypeMessageStyle.Type}>
            <input onChange={updateMessage}
                   type="text"
                   value={props.newMessageText}
                   placeholder='Type something'/>
            <img onClick={addMessage}  src={IconAdd} alt=""/>
            <img className={TypeMessageStyle.icon__image} src={IconImage} alt=""/>
        </div>
    );
};

export {TypeMessage};
