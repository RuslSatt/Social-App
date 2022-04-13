import React from 'react';
import SelfUserProfileStyle from './SelfUserProfile.module.css'
import Ava from '../../../assets/images/avatar3.png';

const SelfUserProfile = (props) => {
    return (
        <div className={SelfUserProfileStyle.Self}>
            <div className={SelfUserProfileStyle.image}>
                <img src={Ava} alt=""/>
            </div>
            <p>
                {props.name}
            </p>
            <p>
                {props.location}
            </p>
        </div>
    );
};

export {SelfUserProfile};
