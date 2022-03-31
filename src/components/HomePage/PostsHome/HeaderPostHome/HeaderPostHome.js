import React from 'react';
import HeaderPostHomeStyle from './HeaderPostHome.module.css'
import Avatar from '../../../../assets/images/ava-192.png'

const HeaderPostHome = () => {
    return (
        <div className={HeaderPostHomeStyle.HeaderPost}>
            <div className={HeaderPostHomeStyle.user}>
                <img src={Avatar} alt=""/>
                <p>
                    Thanh Pam
                </p>
            </div>
            <p className={HeaderPostHomeStyle.time}>
                1 hour ago
            </p>
        </div>
    );
};

export {HeaderPostHome};
