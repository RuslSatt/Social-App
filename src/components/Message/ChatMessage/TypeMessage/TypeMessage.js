import React, {useRef} from 'react';
import TypeMessageStyle from './TypeMessage.module.css'
import IconImage from '../../../../assets/images/addImage.svg'
import IconAdd from '../../../../assets/images/Send.svg'
import {addMessageActionCreator, updateTypeMessageActionCreator} from "../../../../state";

const TypeMessage = (props) => {
    let inputValue = useRef();
    let updateMessage = () => {
        let message = inputValue.current.value;
        props.dispatch(updateTypeMessageActionCreator(message))
    }
    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
    }
    return (
        <div className={TypeMessageStyle.Type}>
            <input onChange={updateMessage} ref={inputValue}
                   type="text"
                   value={props.newMessageText}
                   placeholder='Type something'/>
            <img onClick={addMessage}  src={IconAdd} alt=""/>
            <img className={TypeMessageStyle.icon__image} src={IconImage} alt=""/>
        </div>
    );
};

export {TypeMessage};
