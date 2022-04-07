import React from 'react';
import UserProfileStyle from './UserProfile.module.css'
import {HeaderUserProfile} from "./HeaderUserProfile/HeaderUserProfile";

const UserProfile = (props) => {
    return (
        <div className={UserProfileStyle.User}>
            <HeaderUserProfile teg={props.teg}/>
        </div>
    );
};

export {UserProfile};
