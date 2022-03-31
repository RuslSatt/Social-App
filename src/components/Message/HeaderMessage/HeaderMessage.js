import React from 'react';
import HeaderMessageStyle from './HeaderMessage.module.css'
import {ReactComponent as ArrowIcon} from '../../../assets/images/arrow-back.svg'
import {ReactComponent as EditIcon} from '../../../assets/images/Edit.svg'
import {NavLink} from "react-router-dom";

const HeaderMessage = () => {
    return (
        <div className={HeaderMessageStyle.Header}>
            <NavLink to='/home'>
                <ArrowIcon/>
            </NavLink>
            <h2 className={HeaderMessageStyle.title}>
                Message
            </h2>
            <EditIcon/>
        </div>
    );
};

export {HeaderMessage};
