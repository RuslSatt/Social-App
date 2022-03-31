import React from 'react';
import HeaderPostHomeStyle from './HeaderPostHome.module.css'
import Avatar from '../../../../assets/images/ava-192.png'

const HeaderPostHome = (props) => {
    return (
        <div className={HeaderPostHomeStyle.HeaderPost}>
            <div className={HeaderPostHomeStyle.user}>
                <img src={Avatar} alt=""/>
                <p>
                    {props.name}
                </p>
            </div>
            <p className={HeaderPostHomeStyle.time}>
                {props.time}
            </p>
        </div>
    );
};

export {HeaderPostHome};
