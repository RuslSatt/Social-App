import React from 'react';
import TypeMessageStyle from './TypeMessage.module.css'
import IconImage from '../../../../assets/images/addImage.svg'
import IconAdd from '../../../../assets/images/Send.svg'

const TypeMessage = (props) => {
    let updateMessage = (e) => {
        let message = e.target.value;
        props.updateMessage(message);
    }
    let addMessage = () => {
        props.addMessage();
    }
    return (
        <div className={TypeMessageStyle.Type}>
            <input onChange={updateMessage}
                   type="text"
                   value={props.newMessageText}
                   placeholder='Type something'/>
            <img onClick={addMessage} src={IconAdd} alt=""/>
            <img className={TypeMessageStyle.icon__image} src={IconImage} alt=""/>
        </div>
    );
};

export {TypeMessage};
