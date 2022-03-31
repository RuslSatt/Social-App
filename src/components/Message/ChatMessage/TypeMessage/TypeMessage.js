import React, {useRef} from 'react';
import TypeMessageStyle from './TypeMessage.module.css'
import IconImage from '../../../../assets/images/addImage.svg'
import IconAdd from '../../../../assets/images/Send.svg'
import {updateTypeMessageActionCreator} from "../../../../state";

const TypeMessage = (props) => {
    let inputValue = useRef();
    let updateMessage = () => {
        let message = inputValue.current.value;
        props.dispatch(updateTypeMessageActionCreator(message))
    }
    return (
        <div className={TypeMessageStyle.Type}>
            <input onChange={updateMessage} ref={inputValue}
                   type="text"
                   value={props.newMessage}
                   placeholder='Type something'/>
            <img  src={IconAdd} alt=""/>
            <img className={TypeMessageStyle.icon__image} src={IconImage} alt=""/>
        </div>
    );
};

export {TypeMessage};
