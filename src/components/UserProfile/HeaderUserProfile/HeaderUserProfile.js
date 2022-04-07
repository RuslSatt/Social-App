import React from 'react';
import HeaderUserProfileStyle from './HeaderUserProfile.module.css'
import {NavLink} from "react-router-dom";
import Setting from "../../../assets/images/setting.svg";
import HeaderBack from "../../../assets/images/header-background.png";


const HeaderUserProfile = (props) => {
    return (
        <header className={HeaderUserProfileStyle.header}>
            <div className={HeaderUserProfileStyle.header__body}>
                <div className={HeaderUserProfileStyle.teg}>
                    {props.teg}
                </div>
                <NavLink className={HeaderUserProfileStyle.icon_settings} to='/settings'>
                    <img src={Setting} alt="setting"/>
                </NavLink>
            </div>
            <img className={HeaderUserProfileStyle.back_image} src={HeaderBack} alt=""/>
        </header>
    );
};

export {HeaderUserProfile};
