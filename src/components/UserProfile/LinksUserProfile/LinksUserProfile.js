import React from 'react';
import LinksUserProfileStyle from './LinksUserProfile.module.css'
import Global from '../../../assets/images/globe.svg';
import Instagram from '../../../assets/images/instagram.svg';
import Facebook from '../../../assets/images/facebook.svg';
import Ellipse from '../../../assets/images/ellipse.svg';

const LinksUserProfile = (props) => {
    return (
        <div className={LinksUserProfileStyle.Links}>
            <img src={Global} alt="Global"/>
            <img src={Ellipse} alt="Ellipse"/>
            <img src={Instagram} alt="Instagram"/>
            <img src={Ellipse} alt="Ellipse"/>
            <img src={Facebook} alt="Facebook"/>
        </div>
    );
};

export {LinksUserProfile};
